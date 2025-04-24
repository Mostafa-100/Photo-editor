import HomeMain from "@/components/home-main/HomeMain";
import MainSidebar from "@/components/main-sidebar/MainSidebar";
import MainNavbar from "@/components/MainNavbar";

function Home() {
  return (
    <>
      <MainNavbar />
      <div className="flex h-[calc(100vh-48px)]">
        <div className="bg-neutral-100">
          <MainSidebar />
        </div>
        <div className="grow">
          <HomeMain />
        </div>
      </div>
    </>
  )
}

export default Home;