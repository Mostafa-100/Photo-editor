
import { JSX } from "react";
import TextToolbar from "./TextToolbar";
import DesignToolbar from "./DesignToolbar";
import ShapesToolsbar from "./shapes-toolbar/ShapesToolbar";
import ImageToolbar from "./ImageToolbar";

const allToolsSidebar: Record<string, JSX.Element> = {
  "image": <ImageToolbar />,
  "text": <TextToolbar />,
  "design": <DesignToolbar />,
  "shape": <ShapesToolsbar />,
  "ai": <></>,
  "setting": <></>
}

export default allToolsSidebar;