import { Schema,Model, Types,model } from "mongoose";
import {IProceesedArticle, createIProceesedArticleInput} from "../interfaces/ICollection.js";

const ProcessedArticleSchema = new Schema<IProceesedArticle>({
    article_id: {type: Schema.Types.ObjectId, required: true, ref: "Article"},
    article: {type: String, required: true},
    imageUrl: {type: String},
    sentiment: {type: String, required: true},
    keywords: {type: [String], required: true}
},
{
    timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' }
}
)
ProcessedArticleSchema.index({keywords: 'text'})
const ProcessedArticle = model<IProceesedArticle>('ProcessedArticle', ProcessedArticleSchema)

export default ProcessedArticle