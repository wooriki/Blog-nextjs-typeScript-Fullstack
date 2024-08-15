"use client";

import { ProgressBar } from "react-loader-spinner";

export default function Spinner() {
  return (
    <ProgressBar
      height={"120"}
      width={"120"}
      borderColor="#000"
      ariaLabel="Common Loader"
      barColor="#fff"
    />
  );
}
