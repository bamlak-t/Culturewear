import { db } from '../../../lib/firebase'

// get user information
const userRoutes = async (req, res) => {
    const { id } = req.query
    if (req.method === "GET") {
        try {
            const user = await db.collection('users').doc(id).get()
            if (!user.exists) {
                res.status(404).end()
            } else {
                const userData = {
                    ...user.data(),
                    id: user.id,
                    picture: await resolvePictureUrl(user.data().picture)
                }
                res.status(200).json({ userData })
            }
        } catch (e) {
            res.status(400).end()
        }
    } else {
        res.status(405).end()
    }
}

export default userRoutes