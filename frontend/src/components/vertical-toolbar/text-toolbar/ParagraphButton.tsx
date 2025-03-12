import { Button } from "@/components/ui/button";
import useAddParagraph from "@/hooks/useAddParagraph";

function ParagraphButton() {

  const addParagraph = useAddParagraph();

  return (
    <Button onClick={addParagraph} variant="secondary" className="text-lg py-7 cursor-pointer hover:bg-neutral-200">Add a paragraph</Button>
  )
}

export default ParagraphButton;