import { Document, Schema, Types } from "mongoose";

export type ArticleStatus = 'raw' | 'processing_ai' | 'processed' | 'failed_to_process';

interface IExternalArticle extends Document{
  _id: Types.ObjectId;
  content: string;
  raw_content?: string;
  status: ArticleStatus
  website_id: Types.ObjectId
}


export default IExternalArticle

//export type createIArticleInput = Omit<IArticle, keyof Document>  //Donot use, it removes some of the necessary propeties
