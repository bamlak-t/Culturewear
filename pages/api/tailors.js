import { db } from '../../lib/firebase'

const tailorsRoutes = async (req, res) => {
    // direction is 'asc' or 'desc'
    const { sortBy, direction } = req.body
    if (req.method === "GET") {
        try {
            let query = db.collection('tailors')
            if (sortBy && direction) {
                query = query.orderBy(sortBy, direction)
            }
            const tailors = await query.get()
            const tailorsData = tailors.docs.map(tailor => ({ id: tailor.id, ...tailor.data() }))
            res.status(200).json({ tailorsData })
            res.status()
        } catch (e) {
            res.status(400).end()
        }
    } else {
        res.status(405).end()
    }
}

export default tailorsRoutes