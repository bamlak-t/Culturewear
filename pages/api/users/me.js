import { db } from '../../../lib/firebase'
import { withApiAuthRequired, getSession } from '@auth0/nextjs-auth0';

const DEFAULT_USER = {
	isTailor: false,
	instagram: "",
	designs: []
}

// get current user information
const getCurrentUser = async (req, res) => {
	const { user } = getSession(req, res);
	if (req.method === "GET") {
		try {
			let userDoc = await db.collection('users').doc(id).get()
			if (!userDoc.exists) {
				userDoc = await db.collection('users').doc(user.user_id).create({
					...DEFAULT_USER,
					name: user.name,
					email: user.email,
					picture: user.picture
				})
			}
			const userData = { id: userDoc.id, ...userDoc.data() }
			res.status(200).json({ userData })
		} catch (e) {
			res.status(400).end()
		}
	} else if (req.method === "POST") {
		try {
			const { userUpdate } = req.body
			await db.collection('users').doc(user.user_id).update(userUpdate)
			res.status(200).end()
		} catch (e) {
			res.status(400).end()
		}
	} else {
		res.status(405).end()
	}
}

export default withApiAuthRequired(getCurrentUser)