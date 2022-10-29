import { db } from '../../../lib/firebase'

// get user information
const reviewRoutes = async (req, res) => {
    const { id } = req.query
    if (req.method === "GET") {
        try {
            const reviews = await db.collection('reviews').where("tailorId", "==", id).get()
            const reviewsData = reviews.docs.map(doc => ({ id: doc.id, ...doc.data() }))
            res.status(200).json({ reviewsData })
        } catch (e) {
            res.status(400).end()
        }
    } else {
        res.status(405).end()
    }
}

export default reviewRoutes;