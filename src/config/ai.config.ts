import {GoogleGenAI}  from '@google/genai'
import dotenv from 'dotenv'
dotenv.config()

const ai = new GoogleGenAI({
    apiKey: process.env.gen_api_key || ''
})

export default ai