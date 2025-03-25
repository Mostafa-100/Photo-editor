import MainSidebar from "@/components/main-sidebar/MainSidebar";
import MainNavbar from "@/components/MainNavbar";

function Home() {
  return (
    <>
      <MainNavbar />
      <div className="flex">
        <div>
          <MainSidebar />
        </div>
        <div className="grow"></div>
      </div>
    </>
  )
}

export default Home;