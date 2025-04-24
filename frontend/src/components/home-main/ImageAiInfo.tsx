import { ArrowRight, Brain } from "lucide-react";
import { Button } from "../ui/button";
import { Link } from "react-router-dom";

function ImageAiInfo() {
  return (
    <div className="flex gap-x-4 items-center bg-blue-500 bg-linear-to-r from-indigo-500 to-blue-500 px-3 py-11 rounded-lg">
      <div className="bg-white border-neutral-300 rounded-full p-4 border-8">
        <Brain color="blue" size={40} />
      </div>
      <div>
        <div className="text-white text-2xl font-semibold mb-1">Visualize your ideas with image AI</div>
        <div className="text-white text-sm mb-3">Turn inspiration into design in no time. Simply upload an image and let AI de the rest.</div>
        <Link to={`project/${crypto.randomUUID()}`} className="block">
          <Button variant="secondary" className="cursor-pointer">
            <span>Start creating</span>
            <span><ArrowRight /></span>
          </Button>
        </Link>
      </div>
    </div>
  )
}

export default ImageAiInfo;