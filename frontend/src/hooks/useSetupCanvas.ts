import { useDispatch, useSelector } from "react-redux";
import { Canvas, FabricImage, FabricObject, FabricText } from "fabric";
import { RefObject, useEffect } from "react";
import { setCanvas } from "@/redux/canvas.ts";
import { showTheToolsOf } from "@/redux/horizontalToolbar";
import { showSidebar } from "@/redux/sidebar";
import axios from "axios";
import { API_HOST } from "@/lib/constants";
import { useParams } from "react-router-dom";

function useSetupCanvas(canvasRef: RefObject<HTMLCanvasElement | null>) {
  const dispatch = useDispatch();
  const { projectId } = useParams();
  const { canvas } = useSelector((state) => state.canvas);

  async function setupCanvas() {
    if (!canvasRef.current) return;

    const initCanvas = new Canvas(canvasRef.current, {
      width: 330,
      height: 420,
      backgroundColor: "#fff",
    });

    initCanvas.on("selection:cleared", () => {
      dispatch(showTheToolsOf("none"));
    });

    initCanvas.on("mouse:down", (e) => {
      if (!e.target) dispatch(showSidebar(false));
    });

    try {
      const response = await axios.get(
        `${API_HOST}/api/projects/${projectId}`,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );

      if (response.status === 200) {
        console.log("Response status OK");

        await initCanvas.loadFromJSON(response.data.content);
        console.log(initCanvas.getObjects());

        initCanvas.getObjects().forEach((obj) => {
          if (obj instanceof FabricText) {
            obj.on("selected", () => dispatch(showTheToolsOf("text")));
          } else if (obj instanceof FabricImage) {
            dispatch(showTheToolsOf("image"));
          } else {
            obj.on("selected", () => dispatch(showTheToolsOf("shape")));
          }
        });
      } else {
        console.log("Don't load JSON: Response status not OK");
      }
    } catch (error) {
      console.error("Axios error:", error);
      console.log("Don't load JSON due to request failure");
    }

    initCanvas.renderAll();
    dispatch(setCanvas(initCanvas));

    return () => {
      initCanvas.dispose();
    };
  }

  useEffect(() => {
    setupCanvas();
  }, [projectId]);
}

export default useSetupCanvas;
