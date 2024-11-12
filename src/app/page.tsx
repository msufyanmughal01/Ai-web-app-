import Image from "next/image";
import Chatbot from "./component/chat";
import {createClient} from "@/app/utils/supabase/server"
import Sidebar from "./component/sidebar";
import Login from "./component/form";
export default async function Home(){
  let supabase = await createClient()
  const data = await supabase.from("users").select("*")
  return (
    <div>
      {/* <Sidebar/> */}
    </div>
  )
}
