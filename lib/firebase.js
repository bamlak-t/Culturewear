import { initializeApp, getApps, applicationDefault } from 'firebase-admin/app';
import { getFirestore } from 'firebase-admin/firestore'
import { getStorage } from 'firebase-admin/storage'

const STORAGE_BUCKET = "gs://culturewear-bgn-2022.appspot.com"

if (!getApps().length) {
	try {
		initializeApp({
			credential: applicationDefault(),
			storageBucket: STORAGE_BUCKET
		});
	} catch (error) {
		console.log('Firebase admin initialization error', error.stack);
	}
}

export const db = getFirestore()
export const gs = getStorage()

export const resolvePictureUrl = async (url) => {
	const base = url.split("://")[0]
	if (base === "gs") {
		return await resolveStorageUrl(url)
	}
	return url
}

const resolveStorageUrl = async (url) => {
	const filePath = String(url).substring(STORAGE_BUCKET.length + 1) // + 1 for the inital /
	const options = {
		version: 'v4',
		action: 'read',
		expires: Date.now() + 3 * 24 * 60 * 60 * 1000 // add 3 days to current timestamp
	}
	const file = gs.bucket().file(filePath)
	const [signedUrl] = await file.getSignedUrl(options)
	return signedUrl
}