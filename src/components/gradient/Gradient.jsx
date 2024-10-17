import React from "react";
import styles from "./Gradient.module.css";

export default function Gradient() {
  return (
    <div className="bg-gradient">
      <div className="bg-left"></div>
      <div className="bg-center"></div>
      <div className="bg-right"></div>
    </div>
  );
}
