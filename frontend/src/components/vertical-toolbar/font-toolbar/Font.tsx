type FontProps = {
  name: string;
  fontClass: string;
}

function Font({ name, fontClass }: FontProps) {

  return (
    <div style={{ fontFamily: fontClass }} className={`text-lg bg-neutral-100 px-4 py-4 rounded-md hover:bg-neutral-200 cursor-pointer`}>{name}</div>
  )
}

export default Font;