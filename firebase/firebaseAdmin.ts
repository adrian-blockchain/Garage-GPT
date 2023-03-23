import admin from "firebase-admin";
import { getApps } from "firebase-admin/app";

var serviceAccount = require("../garage-gpt-firebase-adminsdk-ukviu-ec29a30d49.json");




if (!getApps().length) {
  admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
  });
}

const adminDb = admin.firestore();

export { adminDb };
