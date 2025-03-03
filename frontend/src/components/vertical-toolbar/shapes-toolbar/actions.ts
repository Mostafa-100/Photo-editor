import { showTheToolsOf } from "@/redux/horizontalToolbar";
import { Dispatch } from "@reduxjs/toolkit";
import { Canvas, Circle, Polygon, Rect, Triangle } from "fabric";


export function addSquare(canvas: Canvas, dispatch: Dispatch) {

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

  canvas.add(square);
}

export function addCircle(canvas: Canvas, dispatch: Dispatch) {
  const circle = new Circle({
    top: 30,
    left: 50,
    radius: 50,
    fill: "#000",
  })

  circle.on("selected", function () {
    dispatch(showTheToolsOf("shape"));
  })

  canvas.add(circle);
}

export function addTriangle(canvas: Canvas, dispatch: Dispatch) {
  const triangle = new Triangle({
    left: 60,
    top: 60,
    fill: "#000",
  });

  triangle.on("selected", function () {
    dispatch(showTheToolsOf("shape"));
  })

  canvas.add(triangle);
}

export function addStar(canvas: Canvas, dispatch: Dispatch) {
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

  canvas.add(star);
}