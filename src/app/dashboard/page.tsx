"use client";
import Sidebar from "../component/sidebar";
import Chatbot from "../component/chat";
import { useSession } from "next-auth/react";

export default function Dashboard() {
  const {data:session}=useSession()
  return (
    <section>
        <div className="flex contain">
          {session?<Sidebar/>:null}
          <Chatbot />
          </div>
    </section>
  )
}