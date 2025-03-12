import { Button } from "@/components/ui/button";
import useAddSubheading from "@/hooks/useAddSubheading";

function SubheadingButton() {

  const addSubHeading = useAddSubheading();

  return (
    <Button onClick={addSubHeading} variant="secondary" className="text-xl py-7 font-semibold cursor-pointer hover:bg-neutral-200">Add a subheading</Button>
  )
}

export default SubheadingButton;