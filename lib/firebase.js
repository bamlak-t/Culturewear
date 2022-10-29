import { initializeApp, getApps, applicationDefault } from 'firebase-admin/app';
import { getFirestore } from 'firebase-admin/firestore'

if (!getApps().length) {
	try {
		initializeApp({
			credential: applicationDefault(),
			storageBucket: "gs://culturewear-bgn-2022.appspot.com"
		});
	} catch (error) {
		console.log('Firebase admin initialization error', error.stack);
	}
}

export const db = getFirestore()