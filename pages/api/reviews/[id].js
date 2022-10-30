import { db } from '../../../lib/firebase'

const reviewRoutes = async (req, res) => {
    const { id } = req.query
    // direction is 'asc' or 'desc'
    const { sortBy, direction } = req.body
    if (req.method === "GET") {
        try {
            let query = db.collection('reviews').where("tailorId", "==", id)
            if (sortBy && direction) {
                query = query.orderBy(sortBy, direction)
            }
            const reviews = await query.get()
            const reviewsData = reviews.docs.map(review => ({ ...review.data(), id: review.id }))
            console.log(reviewsData)
            res.status(200).json({ reviewsData })
        } catch (e) {
            res.status(400).end()
        }
    } else {
        res.status(405).end()
    }
}

export default reviewRoutes;