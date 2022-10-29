import { db } from '../../lib/firebase'

// get user information
export default async (req, res) => {
    if (req.method === "GET") {
        try {
            const designs = await db.collection('designs').get()
            const designsData = designs.docs.map(design => ({ id: design.id, ...design.data() }))
            res.status(200).json({ designsData })
            res.status()
        } catch (e) {
            res.status(400).end()
        }
    } else {
        res.status(405).end()
    }
}