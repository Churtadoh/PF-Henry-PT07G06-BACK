

const PORT=process.env.PORT  || 3001
const DB_USER=process.env.DB_USER  
const DB_PASSWORD=process.env.DB_PASSWORD  
const DB_HOST=process.env.DB_HOST  
const DB_NAME= process.env.DB_NAME || 'juira'
const DB_PORT= process.env.DB_PORT || 5432
const GOOGLE_CREDENTIALS = process.env.GOOGLE_CREDENTIALS
const DB_DEPLOY = process.env.DB_DEPLOY
module.exports={PORT, DB_USER,DB_PASSWORD,DB_HOST, DB_NAME,DB_PORT, GOOGLE_CREDENTIALS, DB_DEPLOY} 