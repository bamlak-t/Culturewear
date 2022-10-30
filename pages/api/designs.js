import { FieldValue } from 'firebase-admin/firestore'
import { db, resolvePictureUrl } from '../../lib/firebase'

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
            const designsData = await Promise.all(designs.docs.map(async design => ({
                ...design.data(),
                id: design.id,
                picture: await resolvePictureUrl(design.data().picture)
            })))
            res.status(200).json({ designsData })
            res.status()
        } catch (e) {
            res.status(400).end()
        }
    } else if (req.method === "POST") {
        try {
            const { design } = req.body
            // TODO: process image in design before uploading
            const designRef = await db.collection('designs').add(design)

            // update tailor tags
            // TODO: add design to users list of designs
            const designData = await designRef.get()
            const { tags, tailorId } = designData
            tags.forEach(async tag => {
                await db.collection('tailors').doc(tailorId).update({ [`tags.${tag}`]: FieldValue.increment(1) })
            })

            res.status(200).end()
        } catch (e) {
            res.status(400).end()
        }
    } else {
        res.status(405).end()
    }
}

export default designsRoutes