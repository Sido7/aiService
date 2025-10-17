import ai from '../config/ai.config.js'

async function summeriseAI(content: string){
   try{
        const prompt = `Analyze the following article content. Extract a concise summary, 5-10 relevant keywords, the overall sentiment (positive, neutral, or negative), and suggest the main image URL to use for a thumbnail. Article: ${content.slice(0, 8000)}`
    const apiResponse = await ai.models.generateContent({
        model: "gemini-2.0-flash",
        contents: prompt,
        config: {
            responseMimeType: "application/json",
            responseJsonSchema:{
                type: "object",
                properties:{
                 summary: {
                    type: "string",
                     description: "conscise Summary of the article one paragraph"
                    },
                keywords: {
                    type: "array",
                    items: {type: "string"},
                    description: "5 to 10 most relevant keywords/tags"
                },
                sentiment: { 
                    type: "string",
                     enum: ["positive", "neutral", "negative"] 
                    }, // Enum ensures consistent classification
                imageURL: { 
                    type: "string", 
                    description: "The most relevant image URL from the article."
                 },
               
                    },
                required: ["summary", "keywords", "sentiment"]
                }
            }}
    )
   const jsonString = (apiResponse.text  ?? '').trim() || '';
        const parsedData = JSON.parse(jsonString);
        console.log(parsedData[0])
    return parsedData[0]
   }catch(error){
    console.log(error)
      throw new Error("Something went wrong in AI Service")
   }
}

export default summeriseAI
