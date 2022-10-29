import { db } from '../../../lib/firebase'

// get user information
export default async (req, res) => {
    const { id } = req.query
    if (req.method === "GET") {
        try {
            const tailor = await db.collection('tailor').doc(id).get()
            if (!tailor.exists) {
                res.status(404).end()
            } else {
                const tailorData = { id: tailor.id, ...tailor.data() }
                res.status(200).json({ tailorData })
            }
        } catch (e) {
            res.status(400).end()
        }
    } else {
        res.status(405).end()
    }
}