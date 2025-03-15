import profile from "@/assets/profile.jpg";

function UserMenu() {
  return (
    <div className="p-0.5 hover:bg-neutral-300 rounded-full cursor-pointer">
      <img src={profile} className="size-9 rounded-full object-cover" />
    </div>
  )
}

export default UserMenu