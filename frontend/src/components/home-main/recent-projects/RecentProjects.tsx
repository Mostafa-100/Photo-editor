import RecentProjectsList from "./RecentProjectsList";

function RecentProjects() {
  return (
    <>
      <h2 className="font-bold text-lg">Recent projects</h2>
      <div className="mt-2">
        <RecentProjectsList />
      </div>
    </>
  )
}

export default RecentProjects;