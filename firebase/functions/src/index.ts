import * as functions from 'firebase-functions'
import * as admin from 'firebase-admin'

require('dotenv').config()

admin.initializeApp({
  serviceAccountId: process.env.SERVICE_ACCOUNT_ID,
})

exports.addMessage = functions.https.onRequest(async (req, res) => {
  const userId = 'hjy8697'
  const additionalClaims = {
    premiumAccount: true,
  }

  // const licenseId = req.query.licenseId

  admin
    .auth()
    .createCustomToken(userId, additionalClaims)
    .then((customToken) => {
      // Send token back to client
      console.log('@@customToken', customToken)
    })
    .catch((error) => {
      console.log('Error creating custom token:', error)
    })
})
