import { Worker } from "bullmq";
import { processArticle } from "./article.processor.service.js";



const connection = {
  host: process.env.REDIS_HOST || 'redis',
  port: parseInt(process.env.REDIS_PORT || '6379', 10),
};

export async function setupFunction(){
const worker = new Worker("test-queue", async (job) => await processArticle(job.data), { 
  connection: connection,
  autorun: true,
        concurrency: 3,
        limiter: {
            max: 3,
            duration: 1000
        },
      maxStalledCount: 3
});


}