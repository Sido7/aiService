import  IExternalArticle from '../interfaces/IExternalArticle.js'
import {model, Schema, Types } from 'mongoose'

const ExternalArticleSchema = new Schema<IExternalArticle>({
     _id: Types.ObjectId,
  content: { type: String, required: true },
  raw_content: { type: String },
  status: { type: String, enum: ['raw', 'processing_ai', 'processed', 'failed_to_process'], default: 'raw' },
  website_id: Types.ObjectId
}, {
  collection: 'articles', 
  strict: false,
  timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' }
})


 const ExternalArticle = model<IExternalArticle>('ExternalArticle', ExternalArticleSchema);

 export default ExternalArticle
