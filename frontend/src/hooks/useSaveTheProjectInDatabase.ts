import { API_HOST } from "@/lib/constants";
import { RootState } from "@/redux/store";
import axios from "axios";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

function useSaveTheProjectInDatabase() {
  const { canvas } = useSelector((state: RootState) => state.canvas);
  const { projectId } = useParams();

  function action() {
    if (!canvas) return;

    const canvasJson = canvas.toJSON();
    const jsonString = JSON.stringify(canvasJson);
    const token = localStorage.getItem("token");

    axios
      .get(`${API_HOST}/api/projects/${projectId}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((showProjectResponse) => {
        if (showProjectResponse.statusText === "OK") {
          return axios.put(
            `${API_HOST}/api/projects/${projectId}`,
            { content: jsonString },
            {
              headers: {
                Authorization: `Bearer ${token}`,
              },
            }
          );
        } else {
          throw new Error("Project not found, trying to create a new one.");
        }
      })
      .then((updateResponse) => {
        if (updateResponse && updateResponse.statusText === "OK") {
          console.log("The project updated successfully");
        } else {
          console.error("Cannot update the project");
        }
      })
      .catch((error) => {
        axios
          .post(
            `${API_HOST}/api/projects`,
            {
              id: projectId,
              content: jsonString,
              title: `Project-${projectId}`,
              width: canvas.width,
              height: canvas.height,
            },
            {
              headers: {
                Authorization: `Bearer ${token}`,
              },
            }
          )
          .then((storeResponse) => {
            if (storeResponse.statusText === "OK") {
              console.log("The project saved successfully");
            } else {
              console.error("Error in saving the project");
            }
          })
          .catch((err) => {
            console.error("Error in saving the project", err);
          });
      });
  }

  return action;
}

export default useSaveTheProjectInDatabase;
