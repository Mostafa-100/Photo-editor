import { Button } from "@/components/ui/button";
import useAddHeading from "@/hooks/useAddHeading";

function HeadingButton() {

  const addHeading = useAddHeading();

  return (
    <Button onClick={addHeading} variant="secondary" className="text-2xl py-7 font-bold cursor-pointer hover:bg-neutral-200">Add a heading</Button>
  )
}

export default HeadingButton;