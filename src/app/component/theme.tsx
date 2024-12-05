import {
    Popover,
    PopoverContent,
    PopoverTrigger,
  } from "@/components/ui/popover";
import { Switch } from "@/components/ui/switch"
import { signOut } from "next-auth/react";

export default function Theme(){
    return (
      // sign out 
        <Popover>
  <PopoverTrigger className="font-bold">Settings</PopoverTrigger>
  <PopoverContent className="w-[200px] border-none text-slate-100 flex justify-between bg-zinc-900">Signout<Switch className="bg-black" onClick={()=>signOut({callbackUrl:"/"})}/></PopoverContent>
</Popover>
    )
}