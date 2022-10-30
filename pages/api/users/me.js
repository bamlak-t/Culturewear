import { db, resolvePictureUrl } from '../../../lib/firebase'
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
			const userRef = db.collection('users').doc(user.user_id)
			let userDoc = await userRef.get()
			if (!userDoc.exists) {
				await db.collection('users').doc(user.user_id).create({
					...DEFAULT_USER,
					name: user.name,
					email: user.email,
					picture: user.picture
				})
				await userRef.get()
			}

			const userData = {
				...userDoc.data(),
				id: userDoc.id,
				picture: await resolvePictureUrl(userDoc.data().picture)
			}

			res.status(200).json({ userData })
		} catch (e) {
			res.status(400).end()
		}
	} else if (req.method === "POST") {
		try {
			const { user: userUpdate } = req.body
			// TODO: process image in userUpdate before uploading
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