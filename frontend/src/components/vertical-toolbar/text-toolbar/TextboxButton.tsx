import { Button } from "@/components/ui/button";
import useAddTextbox from "@/hooks/useAddTextBox";

function TextboxButton() {

  const addTextbox = useAddTextbox();

  return (
    <Button onClick={addTextbox} variant="default" className="cursor-pointer">Add a textbox</Button>
  )
}

export default TextboxButton;