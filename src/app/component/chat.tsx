import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
export default function Chatbot(){
    return (
        <div>
            <div className="flex justify-center relative">
            <Textarea className="w-96 absolute bottom-60 " />
            </div>
            <div className="flex justify-center ">
            <Button variant={"default"} className="w-96">Generate</Button>
            </div>
        </div>

    )
}