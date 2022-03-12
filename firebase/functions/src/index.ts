import * as functions from 'firebase-functions'
import * as admin from 'firebase-admin'
import * as express from 'express'
import * as cors from 'cors'

const REGION_SEOUL = 'asia-northeast3'

const app = express()

app.use(cors({ origin: true }))

admin.initializeApp({
  serviceAccountId: process.env.SERVICE_ACCOUNT_ID,
})

app.get('/hello', (req, res) => {
  res.json('hello')
})

app.get('/customToken/:snsId', async (req, res) => {
  const snsId = req.params.snsId as string

  functions.logger.log(`customToken을 요청한 snsId: ${snsId}`)

  if (snsId) {
    admin
      .auth()
      .createCustomToken(snsId)
      .then((customToken) => {
        res.json({ customToken })
      })
      .catch((error) => {
        console.log('Error creating custom token:', error)
      })
  } else {
    throw Error('쿼리에 snsId가 없습니다.')
  }
})

exports.app = functions.region(REGION_SEOUL).https.onRequest(app)
