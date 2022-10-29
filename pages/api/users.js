import { db } from '../../lib/firebase'

// get user information
export default async (req, res) => {
    const { user } = req.body
    if (req.method === "GET") {
        const doc = await db.collection('users').doc(user.user_id).get()
        if (!doc.exists) {
            await db.collection('users').doc(user.user_id).create({
                name: user.name
            })
        } else {
            res.status(200).json(doc.data())
        }
    }
}