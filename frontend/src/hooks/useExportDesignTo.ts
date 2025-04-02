import { RootState } from "@/redux/store";
import { useSelector } from "react-redux";

type ExportTypeType = "png" | "jpeg" | "json";

function useExportDesignTo(exportType: ExportTypeType) {
  const { canvas } = useSelector((state: RootState) => state.canvas);

  function exportDesign() {
    if (!canvas) {
      console.error("Canvas is not available");
      return;
    }

    canvas.renderAll();

    if (exportType === "json") {
      // Handle JSON export
      const json = canvas.toJSON();
      const jsonString = JSON.stringify(json, null, 2);

      const blob = new Blob([jsonString], { type: "application/json" });
      const url = URL.createObjectURL(blob);

      const link = document.createElement("a");
      link.download = `design.json`;
      link.href = url;
      link.click();

      // Clean up
      URL.revokeObjectURL(url);
    } else {
      // Handle image export (existing code)
      const dataURL = canvas.toDataURL({
        width: canvas.width,
        height: canvas.height,
        left: 0,
        top: 0,
        format: exportType,
        multiplier: 1,
      });

      const link = document.createElement("a");
      link.download = `image.${exportType}`;
      link.href = dataURL;
      link.click();
    }
  }

  return exportDesign;
}

export default useExportDesignTo;