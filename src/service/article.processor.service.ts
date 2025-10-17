import ExternalArticle from "../models/externalArticle.js"
import { IArticleJob } from "../interfaces/IJobData.js"
import { createIProceesedArticleInput, IProceesedArticle } from "../interfaces/ICollection.js"
import ProcessedArticle from "../models/collection.js"
import IExternalArticle from "../interfaces/IExternalArticle.js"
import summeriseAI from "./summary.service.js"

export async function processArticle(data: IArticleJob){
  // console.log(data)
    const article_id = data.articleId
   const article: IExternalArticle = await ExternalArticle.findById(article_id).select('content status');
   try{
   if(!article || article.status != "raw"){
    return
   }
   const content = article?.content
   article.status = "processing_ai"
   await article.save()
   const summary = await summeriseAI(content)
   console.log(summary)
   const processedArticle: createIProceesedArticleInput = {
      article_id: Object(article_id),
      article: summary.summary,
      keywords: summary.keywords,
      sentiment: summary.sentiment,
      imageUrl: summary.imageURL
   }
   console.log(processedArticle)
   await ProcessedArticle.create(processedArticle)
   await ExternalArticle.updateOne({_id: article_id}, {status: "processed"})
   }catch(error){
       article.status = "failed_to_process"
       await article.save()
    console.log(error)
   }
}