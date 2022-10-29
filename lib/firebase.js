import { initializeApp, getApps } from 'firebase-admin/app';
import { getFirestore } from 'firebase-admin/firestore'

if (!getApps().length) {
	try {
		initializeApp({
			credential: applicationDefault()
		});
	} catch (error) {
		console.log('Firebase admin initialization error', error.stack);
	}
}

export const firestore = getFirestore()