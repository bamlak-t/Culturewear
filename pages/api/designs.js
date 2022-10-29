import { FieldValue } from 'firebase-admin/firestore'
import { db } from '../../lib/firebase'

const designsRoutes = async (req, res) => {
    // direction is 'asc' or 'desc'
    const { sortBy, direction } = req.body
    if (req.method === "GET") {
        try {
            let query = db.collection('designs')
            if (sortBy && direction) {
                query = query.orderBy(sortBy, direction)
            }
            const designs = await query.get()
            const designsData = designs.docs.map(design => ({ id: design.id, ...design.data() }))
            res.status(200).json({ designsData })
            res.status()
        } catch (e) {
            res.status(400).end()
        }
    } else if (req.method === "POST") {
        try {
            const { design } = req.body
            const designDoc = await db.collection('designs').add(design)
            const designData = { id: designDoc.id, ...designData }

            // update tailor tags
            const { tags, tailorId } = designData
            tags.forEach(async tag => {
                await db.collection('tailors').doc(tailorId).update({ [`tags.${tag}`]: FieldValue.increment(1) })
            })

            res.status(200).json({ designData })
        } catch (e) {
            res.status(400).end()
        }
    } else {
        res.status(405).end()
    }
}

export default designsRoutes