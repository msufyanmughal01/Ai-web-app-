import { GoogleGenerativeAI } from "@google/generative-ai";
import { useState } from "react";

export default function RunChat(apikey: string) {
  const [Input, setInput] = useState<string>(""); // Tracks the current user input
  const [Loading, setLoading] = useState<boolean>(false); // Indicates if a response is being generated
  const [History, setHistory] = useState<{ prompt: string; response: string }[]>(
    []
  ); // Stores the history of prompts and responses

  if (!apikey) {
    throw new Error("API key is missing");
  }

  const genAI = new GoogleGenerativeAI(apikey);

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

  // Function to generate chat response
  async function RunChat(prompt: string) {
    setLoading(true);
    try {
      const chatSession = model.startChat({
        generationConfig,
        // history: chatSessionHistory,
      });

      const result = await chatSession.sendMessage(prompt);
      const response = await result.response.text();

      // Add the current prompt and response to the history
      setHistory((prevHistory) => [...prevHistory, { prompt, response }]);
    } catch (error) {
      console.error("Error during chat", error);
      setHistory((prevHistory) => [
        ...prevHistory,
        { prompt, response: "Failed to generate response. Please try again." },
      ]);
    } finally {
      setLoading(false);
    }
  }

  // Handles form submission
  const handlesubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!Input.trim()) return;
    await RunChat(Input);
    setInput(""); // Clear input field after submission
  };

  return {
    Input,
    setInput,
    handlesubmit,
    Loading,
    History, // Expose the history to use in UI
  };
}


// import { GoogleGenerativeAI } from "@google/generative-ai";
// import { useState } from "react";

// export function RunChat(apikey: string) {
//   const [Input, setInput] = useState<string>(""); // Tracks the current user input
//   const [Loading, setLoading] = useState<boolean>(false); // Indicates if a response is being generated
//   const [History, setHistory] = useState<{ prompt: string; response: string }[]>(
//     []
//   ); // Stores the history of prompts and responses

//   if (!apikey) {
//     throw "API key is missing";
//   }

//   const apiKey = process.env.NEXT_PUBLIC_GEMINI_API_KEY;
//   const genAI = new GoogleGenerativeAI(apiKey as string);

//   const model = genAI.getGenerativeModel({
//     model: "gemini-1.5-flash",
//   });

//   const generationConfig = {
//     temperature: 1,
//     topP: 0.95,
//     topK: 40,
//     maxOutputTokens: 8192,
//     responseMimeType: "text/plain",
//   };

//   // Function to generate chat response
//   async function RunChat(prompt: string) {
//     setLoading(true);
//     try {
//       const chatSession = model.startChat({
//         generationConfig,
//          history: History.map((h) => ({
//           prompt: h.prompt,
//           response: h.response,
//         })), // Include chat history in the session
//       });

//       const result = await chatSession.sendMessage(prompt);
//       const response = await result.response.text();

//       // Add the current prompt and response to history
//       setHistory((prevHistory) => [...prevHistory, { prompt, response }]);
//     } catch (error) {
//       console.error("Error during chat", error);
//       setHistory((prevHistory) => [
//         ...prevHistory,
//         { prompt, response: "Failed to generate response. Please try again." },
//       ]);
//     } finally {
//       setLoading(false);
//     }
//   }

  // Handles form submission
//   const handlesubmit = async (e: React.FormEvent<HTMLFormElement>) => {
//     e.preventDefault();
//     if (!Input.trim()) return;
//     await RunChat(Input);
//     setInput(""); // Clear input field after submission
//   };

//   return {
//     Input,
//     setInput,
//     handlesubmit,
//     Loading,
//     History, // Expose the history to use in UI
//   };
// }




// import  {
//     GoogleGenerativeAI,
//   }  from "@google/generative-ai"
// import { useState } from "react";
// export function RunChat(apikey:string){
//   const [Input,setInput] = useState<string>("")
//   const [Loading,setLoading] = useState<boolean>(false)
//   const [Response,setResponse] = useState<string|null>(null )

//   if (!apikey){
//     throw("apikey is misssing")
//   }
//   const apiKey = process.env.NEXT_PUBLIC_GEMINI_API_KEY;
//   const genAI = new GoogleGenerativeAI(apiKey as string);
  
//   const model = genAI.getGenerativeModel({
//     model: "gemini-1.5-flash",
//   });
//   const generationConfig = {
//     temperature: 1,
//     topP: 0.95,
//     topK: 40,
//     maxOutputTokens: 8192,
//     responseMimeType: "text/plain",
//   };
  
//    async function RunChat(prompt:string) {
//     setLoading(true)
//     try{
//     const chatSession = model.startChat({
//       generationConfig,
//       history: [
//       ],
//     });
  
//     const result = await chatSession.sendMessage(prompt);
//     const response = await result.response.text()
//     setResponse(response)
//   }
//   catch(error){
//     console.error("error during chat",error)
//     setResponse("failed to generate response . please try again")
//   }
//   finally{
//     setLoading(false)
//   }
// }
//  const handlesubmit =async(i: React.FormEvent<HTMLFormElement>)=>{
//   i.preventDefault()
//   if(!Input.trim()) return
//   await RunChat(Input)
//   setInput("")
//  }
//  return{
//   Input,
//   setInput,
//   handlesubmit,
//   Loading,
//   Response
//  }
// }