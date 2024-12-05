import {createClient} from "@/app/utils/supabase/server"
import Login from "./component/form";
export default async function Home(){
  let supabase = await createClient()
  const data = await supabase.from("users").select("*")
  return(
    <section className='bg-zinc-900'>
        <div className="flex ">
        <div className='flex justify-center items-center w-screen h-screen'>
            <Login/>
        </div>
        </div>
    </section>
  )
}