type HeaderProps = {
  title: string;
  description: string;
}

function Header({ title, description }: HeaderProps) {
  return (
    <div className="pb-4">
      <h3 className="text-[17px] font-semibold">{title}</h3>
      <span className="text-neutral-500 text-sm">{description}</span>
    </div>
  )
}

export default Header;