import { db } from '../../../lib/firebase'

const tailorRoutes = async (req, res) => {
    const { id } = req.query
    if (req.method === "GET") {
        try {
            const tailor = await db.collection('tailors').doc(id).get()
            if (!tailor.exists) {
                res.status(404).end()
            } else {
                const tailorData = { ...tailor.data(), id: tailor.id }
                res.status(200).json({ tailorData })
            }
        } catch (e) {
            res.status(400).end()
        }
    } else {
        res.status(405).end()
    }
}

export default tailorRoutes;