import Image from "./Image";

type DataProps = {
  name: string;
  owner_fullname: string;
}

type ImageListProps = {
  data: DataProps[];
}

function ImageList({ data }: ImageListProps) {
  return (
    <div className="grid gap-2 grid-cols-2 mt-3">
      {data?.map((i: DataProps) => <Image key={Math.floor(Math.random() * 10000)} src={`/default-images/${i.name}`} owner={i.owner_fullname} />)}
    </div>
  )
}

export default ImageList;