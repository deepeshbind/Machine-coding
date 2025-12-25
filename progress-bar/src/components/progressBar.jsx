import { useEffect, useState } from "react";

export const ProgressBar = ({ progress }) => {

    const[animatedProgress, setAnimatedProgress] = useState(0);

    useEffect(() => {
        setTimeout(() => setAnimatedProgress(progress), 100)
    }, [progress])

  return (
    <div className="outer">
      <div
        className="inner"
        style={{
        //   width: `${progress}%`,
            transform: `translateX(${animatedProgress - 100}%)`,
            color: animatedProgress < 5 ? "black" : "white",
        }}
        role="progressbar"
        aria-valuenow={progress}
        aria-valuemax={100}
        aria-valuemin={0}
      >
        {progress}%
      </div>
    </div>
  );
};
