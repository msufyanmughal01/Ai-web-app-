"use client";

import { SendHorizontal } from "lucide-react";
import { useSession } from "next-auth/react";
import Image from "next/image";
import  RunChat  from "../main/ai";

export default function Chatbot() {
  const { data: session } = useSession();
  const apikey = process.env.NEXT_PUBLIC_GEMINI_API_KEY;

  if (!apikey) {
    console.log("Gemini API Key is Missing");
    return <p>API key is missing. Please check your environment variables.</p>;
  }

  const {Input , setInput , handlesubmit , History} = RunChat(apikey);

  return (
    <div className="flex-1 min-h-screen bg-black relative">
      <div className="flex items-center justify-between p-2">
        <p className="text-teal-50 text-2xl font-bold">S AIChat</p>
        {session?.user?.image && (
          <Image
            className="rounded-full"
            src={session.user.image}
            alt="User avatar"
            width={50}
            height={40}
          />
        )}
      </div>
      <div className="max-w-[900px] mx-auto">
        <div className="my-10 text-5xl font-medium p-2">
          <p>
            <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-red-500">
              {`Hello <${session?.user?.name || "Guest"}>,`}
            </span>
          </p>
          <p className="text-3xl font-medium text-teal-50">
            How Can I Help You?
          </p>
        </div>

        {/* Chat History */}
        <div
          className="chat-history mb-10 p-5 text-teal-50 bg-zinc-900 rounded-lg overflow-y-auto"
          style={{ maxHeight: "400px" }}
        >
          {History.length > 0 ? (
            History.map((entry, index) => (
              <div key={index} className="mb-4">
                <p className="text-blue-400 font-bold">Prompt: {entry.prompt}</p>
                <p className="text-white">Response: {entry.response}</p>
              </div>
            ))
          ) : (
            <p>Start by entering a prompt!</p>
          )}
        </div>

        {/* Input Area */}
        <div className="sticky-textarea-container absolute bottom-0 w-full max-w-[900px] p-2 mb-5 bg-zinc-900 rounded-full mx-auto">
          <form onSubmit={handlesubmit}>
            <div className="flex items-center justify-between gap-5 py-2.5 px-5 rounded-full">
              <input
                type="text"
                value={Input}
                onChange={(e) => setInput(e.target.value)}
                className="flex-1 bg-transparent border-none outline-none text-white"
                placeholder="Write a prompt here"
              />
              <button type="submit" className="flex cursor-pointer">
                <SendHorizontal className="text-white" size={20} />
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}





// "use client";

// import { SendHorizontal } from "lucide-react";
// import { useSession } from "next-auth/react";
// import Image from "next/image";
// import { RunChat } from "../main/ai";

// export default function Chatbot() {
//   const { data: session } = useSession();
//   const apikey = process.env.NEXT_PUBLIC_GEMINI_API_KEY;

//   if (!apikey) {
//     console.log("Gemini Api Key is Missing");
//     return <p>API key is missing. Please check your environment variables.</p>;
//   }

//   const { Input, setInput, handlesubmit, Loading, Response } = RunChat(apikey);

//   return (
//     <div className="flex-1 min-h-screen bg-black relative">
//       <div className="flex items-center justify-between p-2">
//         <p className="text-teal-50 text-2xl font-bold">S AIChat</p>
//         {session?.user?.image && (
//           <Image
//             className="rounded-full"
//             src={session.user.image}
//             alt="User avatar"
//             width={50}
//             height={40}
//           />
//         )}
//       </div>
//       <div className="max-w-[900px] mx-auto">
//         <div className="my-10 text-5xl font-medium p-2">
//           <p>
//             <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-red-500">
//               {`Hello <${session?.user?.name || "Guest"}>,`}
//             </span>
//           </p>
//           <p className="text-3xl font-medium text-teal-50">
//             How Can I Help You?
//           </p>
//         </div>
//         <div className="response-area mb-10 p-5 text-teal-50">
//           {Loading ? (
//             <p>Generating Response...</p>
//           ) : Response ? (
//             <div className="response-content bg-zinc-950 font-semibold font-mono p-4 rounded-lg overflow-y-auto max-h-[400px]">
//               {Response}
//             </div>
//           ) : (
//             <p>No response yet. Enter a prompt to get started!</p>
//           )}
//         </div>
//         <div className="sticky-textarea-container absolute bottom-0 w-full max-w-[900px] p-2 mb-5 bg-zinc-900 rounded-full mx-auto">
//           <form onSubmit={handlesubmit}>
//             <div className="flex items-center justify-between gap-5 py-2.5 px-5 rounded-full">
//               <input
//                 type="text"
//                 value={Input}
//                 onChange={(e) => setInput(e.target.value)}
//                 className="flex-1 bg-transparent border-none outline-none text-white"
//                 placeholder="Write a prompt here"
//               />
//               <button type="submit" className="flex cursor-pointer">
//                 <SendHorizontal className="text-white" size={20} />
//               </button>
//             </div>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// }
