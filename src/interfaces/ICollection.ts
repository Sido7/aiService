import { Document, Types, Schema } from "mongoose";


export interface IProceesedArticle extends Document {
    article_id: Types.ObjectId
    article: string,
    imageUrl?: string,
    sentiment: string,
    keywords: string[]
}

export type createIProceesedArticleInput = Pick<IProceesedArticle ,  "article_id" | "article" | "imageUrl" | "sentiment" | "keywords">