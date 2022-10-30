import { db } from '../../lib/firebase'

const reviewsRoutes = async (req, res) => {
    const { review } = req.body
    if (req.method === "POST") {
        try {
            const reviewDoc = await db.collection('reviews').add(review)
            const reviewData = { id: reviewDoc.id, ...reviewDoc.data() }
            res.status(200).json({ reviewData })
        } catch (e) {
            res.status(400).end()
        }
    } else {
        res.status(405).end()
    }
}

export default reviewsRoutes;