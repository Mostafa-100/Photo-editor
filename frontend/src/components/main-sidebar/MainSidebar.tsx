import { CreditCard, Folder, Home, MessageCircleQuestion } from "lucide-react";
import MainSidebarButton from "./MainSidebarButton";

function MainSidebar() {
  return (
    <div className="bg-neutral-100 px-2">
      <MainSidebarButton icon={<Home />} label="Home" active={true} />
      <MainSidebarButton icon={<Folder />} label="Projects" />
      <hr className="my-3" />
      <MainSidebarButton icon={<CreditCard />} label="Billing" />
      <MainSidebarButton icon={<MessageCircleQuestion />} label="Get Help" />
    </div>
  )
}

export default MainSidebar;