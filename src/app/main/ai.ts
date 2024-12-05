import  {
    GoogleGenerativeAI,
    HarmCategory,
    HarmBlockThreshold,
  }  from "@google/generative-ai"
import { useState } from "react";
export function RunChat(apikey:string){
  const [Input,setInput] = useState<string>("")
  const [Loading,setLoading] = useState<boolean>(false)
  const [Response,setResponse] = useState<string|null>(null )
  if (!apikey){
    throw("apikey is misssing")
  }
  const apiKey = process.env.NEXT_PUBLIC_GEMINI_API_KEY;
  const genAI = new GoogleGenerativeAI(apiKey as string);
  
  const model = genAI.getGenerativeModel({
    model: "gemini-1.5-flash",
  });
  const generationConfig = {
    temperature: 1,
    topP: 0.95,
    topK: 40,
    maxOutputTokens: 8192,
    responseMimeType: "text/plain",
  };
  
   async function RunChat(prompt:string) {
    setLoading(true)
    try{
    const chatSession = model.startChat({
      generationConfig,
      history: [
      ],
    });
  
    const result = await chatSession.sendMessage(prompt);
    const response = await result.response.text()
    setResponse(response)
  }
  catch(error){
    console.error("error during chat",error)
    setResponse("failed to generate response . please try again")
  }
  finally{
    setLoading(false)
  }
}
 const handlesubmit =async(e:any)=>{
  e.preventDefault()
  if(!Input.trim()) return
  await RunChat(Input)
  setInput("")
 }
 return{
  Input,
  setInput,
  handlesubmit,
  Loading,
  Response
 }
}