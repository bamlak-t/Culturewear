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

export const resolvePictureURL = (url) => {
	const base = url.split("://")[0]
	if (base === "gs") {
		return resolveStorageUrl(url)
	} else if (base === "http" || base === "https") {
		return url
	}
	else {
		console.error("Unable to resolve error")
		return null
	}
}

const resolveStorageUrl = async (url) => {
	const filePath = String(url).substring(STORAGE_BUCKET.length)
	const options = {
		version: 'v4',
		action: 'read',
		expires: Date.now() + 3 * 24 * 60 * 60 * 1000 // add 3 days to current timestamp
	}
	return gs.bucket().file(filePath).getSignedUrl(options)
}

// TODO: upload cloud storage blobs from create listing and update profile picture