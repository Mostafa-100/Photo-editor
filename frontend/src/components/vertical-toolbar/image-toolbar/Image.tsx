type ImageProps = {
  src: string;
  owner: string;
}

function Image({ src, owner }: ImageProps) {
  return (
    <div>
      <img src={src} />
      <div>{owner}</div>
    </div>
  )
}

export default Image;