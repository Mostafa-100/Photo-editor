import HeaderOfTool from "../HeaderOfTool";
import Font from "./Font";

const fonts = [
  { name: "Arial", class: "arial" },
  { name: "Sans Serif", class: "sans serif" },
  { name: "Times New Roman", class: "times new roman" },
  { name: "Fantasy", class: "fantasy" },
  { name: "Monospace", class: "monospace" },
]

function FontTypes() {
  return (
    <>
      <HeaderOfTool title="Font" description="Change the text font" />
      <div className="flex flex-col gap-2">
        {
          fonts.map((f) => <Font key={f.name} name={f.name} fontClass={f.class} />)
        }
      </div>
    </>
  )
}

export default FontTypes;