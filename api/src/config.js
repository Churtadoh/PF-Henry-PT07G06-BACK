

const PORT=process.env.PORT  || 3001
const PGDATABASE = process.env.PGDATABASE
const PGUSER=process.env.PGUSER  
const PGPASSWORD=process.env.PGPASSWORD  
const PGHOST=process.env.PGHOST  
const DB_NAME= process.env.DB_NAME || 'juira'
const PGPORT= process.env.PGPORT || 5432
const GOOGLE_CREDENTIALS = process.env.GOOGLE_CREDENTIALS
const DB_DEPLOY = process.env.DB_DEPLOY
module.exports={PORT,PGDATABASE, PGUSER,PGPASSWORD,PGHOST, DB_NAME,PGPORT, GOOGLE_CREDENTIALS, DB_DEPLOY} 