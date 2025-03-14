import { showTheToolsOf } from "@/redux/horizontalToolbar";
import { Circle, Polygon, Rect, Triangle } from "fabric";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/redux/store";

export function useAddSquare() {

  const dispatch = useDispatch();
  const { canvas } = useSelector((state: RootState) => state.canvas);

  function addSquare() {
    const square = new Rect({
      top: 10,
      left: 30,
      width: 100,
      height: 100,
      fill: "#000"
    });

    square.on("selected", function () {
      dispatch(showTheToolsOf("shape"));
    })

    canvas?.add(square);
  }

  return addSquare;
}

export function useAddCircle() {
  const dispatch = useDispatch();
  const { canvas } = useSelector((state: RootState) => state.canvas);

  function addCircle() {
    const circle = new Circle({
      top: 30,
      left: 50,
      radius: 50,
      fill: "#000",
    })

    circle.on("selected", function () {
      dispatch(showTheToolsOf("shape"));
    })

    canvas?.add(circle);
  }

  return addCircle;
}

export function useAddTriangle() {
  const dispatch = useDispatch();
  const { canvas } = useSelector((state: RootState) => state.canvas);

  function addTriangle() {
    const triangle = new Triangle({
      left: 60,
      top: 60,
      fill: "#000",
    });

    triangle.on("selected", function () {
      dispatch(showTheToolsOf("shape"));
    })

    canvas?.add(triangle);
  }

  return addTriangle;
}

export function useAddStar() {
  const dispatch = useDispatch();
  const { canvas } = useSelector((state: RootState) => state.canvas);

  function addStar() {
    const star = new Polygon([
      { x: 75, y: 0 },
      { x: 91, y: 50 },
      { x: 140, y: 50 },
      { x: 98, y: 80 },
      { x: 112, y: 130 },
      { x: 75, y: 100 },
      { x: 38, y: 130 },
      { x: 52, y: 80 },
      { x: 10, y: 50 },
      { x: 59, y: 50 }
    ], {
      fill: '#000',
      left: 50,
      top: 50
    });

    star.on("selected", function () {
      dispatch(showTheToolsOf("shape"));
    })

    canvas?.add(star);
  }

  return addStar;
}