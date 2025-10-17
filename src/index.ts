import { set } from "mongoose"
import { setupFunction } from "./service/consumer.service.js"
import { connectDB } from "./config/mongo.config.js"
import summeriseAI from "./service/summary.service.js"



async function main() {
    await connectDB()
  await setupFunction()
 await summeriseAI("This method is highly reliable because it transfers the structural burden from the SDK's schema validator to the large language model itself, which is typically very good at following instructions to produce valid JSON.")
}
main()