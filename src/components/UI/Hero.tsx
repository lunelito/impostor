"use client";
import { useEffect, useState } from "react";
import MultiBalls from "./MultiBalls";

type Ball = {
  color: string;
  xSpeed: number;
  ySpeed: number;
  startX: number;
  startY: number;
  r: number;
};

export const yellowShades = [
  "#FFD700",
  "#FFE135",
  "#FFEC3D",
  "#FFF176",
  "#FFEE58",
  "#FFC107",
  "#FFB300",
  "#FFCA28",
  "#FFD54F",
  "#FFE082",
  "#FFF59D",
  "#FFFF00",
  "#F9D71C",
  "#FAD02E",
  "#F4C430",
  "#EAB308",
  "#CA8A04",
  "#FBBF24",
  "#FDE68A",
  "#FEF08A",
];

export default function Hero() {

  const [balls, setBalls] = useState<Ball[]>([]);

  useEffect(() => {
    const HowMuchBalls = Math.floor(Math.random() * 4) + 7;

    const newBalls = [];

    for (let i: number = 0; i < HowMuchBalls; i++) {
      const startX = parseFloat((Math.random() * 0.8 + 0.1).toFixed(2));
      const startY = parseFloat((Math.random() * 0.8 + 0.1).toFixed(2));
      const r = parseFloat((Math.random() * 0.04 + 0.03).toFixed(2));
      const randomDirectionX = Math.random() > 0.5 ? 1 : -1;
      const randomDirectionY = Math.random() > 0.5 ? 1 : -1;
      const xSpeed =
        parseFloat((Math.random() * 0.0004 + 0.0001).toFixed(5)) *
        randomDirectionX;
      const ySpeed =
        parseFloat((Math.random() * 0.0003 + 0.00008).toFixed(5)) *
        randomDirectionY;
      const color = Math.floor(Math.random() * 20);
      let Ball = {
        color: yellowShades[color],
        xSpeed: xSpeed,
        ySpeed: ySpeed,
        startX: startX,
        startY: startY,
        r: r,
      };
      newBalls.push(Ball);
    }
    setBalls(newBalls);
  }, []);

  if (balls.length === 0) {
    return <div className="fixed inset-0 -z-10 opacity-50" />;
  }
  return (
    <div className="fixed  opacity-50 z-10">
      <MultiBalls balls={balls} />
    </div>
  );
}
