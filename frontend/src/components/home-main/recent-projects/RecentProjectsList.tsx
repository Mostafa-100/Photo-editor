import { useEffect, useState } from "react";
import RecentProject from "./RecentProject";
import axios from "axios";
import { API_HOST } from "@/lib/constants";

function RecentProjectsList() {
  
  const [recentProjects, setRecentProjects] = useState([]);

  useEffect(() => {
    axios.get(`${API_HOST}/api/projects`, {
      headers: {Authorization: `Bearer ${localStorage.getItem("token")}`}
    })
      .then((response) => setRecentProjects(response.data.data))
      .catch((error) => console.error("Error fetching recent projects", error));
  }, [])

  return (
    recentProjects.map((rp) => <RecentProject key={rp.id} {...rp} />)
  )
}

export default RecentProjectsList;