import ImageAiInfo from "./ImageAiInfo";
import RecentProjects from "./recent-projects/RecentProjects";

function HomeMain() {
  return (
    <div className="p-7 rounded-lg">
      <ImageAiInfo />
      <div className="mt-2"></div>
      <RecentProjects />
    </div>
  )
}

export default HomeMain;