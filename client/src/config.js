import dotenv from 'dotenv'
dotenv.config();
export const BACKEND_URL = process.env.NODE_ENV === 'production'? "http://localhost:5000" : "https://stoopid-trcker.herokuapp.com/"
