import Image from "next/image"
import Login from '../component/form'

export default function LoginPage(){
  return (
    <section className='bg-zinc-900'>
        <div className="flex ">
        <div className='flex justify-center items-center w-screen h-screen'>
            <Login/>
        </div>
        </div>
    </section>
  )
}
