type ImageProps = {
  src: string;
  owner: string;
}

function Image({ src, owner }: ImageProps) {
  return (
    <div className="relative h-20 cursor-pointer group overflow-hidden">
      <img src={src} className="object-cover h-full w-full" />
      <div className="absolute opacity-0 group-hover:opacity-100 -bottom-7 group-hover:bottom-0 transition-all left-0 bg-gray-500 text-white text-xs w-full p-0.5 capitalize">{owner}</div>
    </div>
  )
}

export default Image;