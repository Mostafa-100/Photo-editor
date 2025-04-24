import { JSX } from "react";

// import DesignToolbar from "./design-toolbar/DesignToolbar";
import ShapesToolbar from "./shapes-toolbar/ShapesToolbar";
import ImageToolbar from "./image-toolbar/ImageToolbar";
import FontTypes from "./font-toolbar/FontTypes";
import TextToolbar from "./text-toolbar/TextToolbar";
import StrokeToolbar from "./stroke-toolbar/StrokeToolbar";
import OpacityToolbar from "./opacity-toolbar/OpacityToolbar";

const toolsData: Record<string, JSX.Element> = {
  "image": <ImageToolbar />,
  "text": <TextToolbar />,
  // "design": <DesignToolbar />,
  "shape": <ShapesToolbar />,
  // "ai": <></>,
  // "setting": <></>,
  "font": <FontTypes />,
  "stroke": <StrokeToolbar />,
  "opacity": <OpacityToolbar />
}

export default toolsData;