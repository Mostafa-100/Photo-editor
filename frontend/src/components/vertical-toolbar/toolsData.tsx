import { JSX } from "react";
import TextToolbar from "./TextToolbar";
import DesignToolbar from "./DesignToolbar";
import ShapesToolbar from "./shapes-toolbar/ShapesToolbar";
import ImageToolbar from "./image-toolbar/ImageToolbar";

const toolsData: Record<string, JSX.Element> = {
  "image": <ImageToolbar />,
  "text": <TextToolbar />,
  "design": <DesignToolbar />,
  "shape": <ShapesToolbar />,
  "ai": <></>,
  "setting": <></>
}

export default toolsData;