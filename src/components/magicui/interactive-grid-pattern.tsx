"use client";

import { cn } from "../../lib/utils";
import React, { useId } from "react";

interface InteractiveGridPatternProps extends React.SVGProps<SVGSVGElement> {
  width?: number;
  height?: number;
  squares?: [number, number]; // [horizontal, vertical]
  className?: string;
  squaresClassName?: string;
}

/**
 * InteractiveGridPattern is a component that renders a grid pattern of squares that react to mouse hover.
 *
 * @param width - The width of each square in the grid.
 * @param height - The height of each square in the grid.
 * @param squares - The number of squares in the grid. [horizontal, vertical]
 * @param className - The class name of the SVG element.
 * @param squaresClassName - The class name of the square elements.
 */
export function InteractiveGridPattern({
  width = 40,
  height = 40,
  squares = [24, 24],
  className,
  squaresClassName,
  ...props
}: InteractiveGridPatternProps) {
  const [horizontal, vertical] = squares;
  const id = useId();

  return (
    <svg
      width={width * horizontal}
      height={height * vertical}
      viewBox={`0 0 ${width * horizontal} ${height * vertical}`}
      className={cn(
        "absolute inset-0 h-full w-full border-gray-400/30",
        className,
      )}
      {...props}
    >
      <defs>
        <pattern
          id={id}
          width={width}
          height={height}
          patternUnits="userSpaceOnUse"
          x="-1"
          y="-1"
        >
          <path
            d={`M.5 ${height}V.5H${width}`}
            fill="none"
            stroke="currentColor"
            strokeOpacity="0.1"
          />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill={`url(#${id})`} />
      <svg x="-1" y="-1" className="overflow-visible">
        {Array.from({ length: horizontal * vertical }).map((_, index) => {
          const x = (index % horizontal) * width;
          const y = Math.floor(index / horizontal) * height;
          return (
            <rect
              key={index}
              x={x + 0.5}
              y={y + 0.5}
              width={width - 1}
              height={height - 1}
              fill="currentColor"
              strokeWidth="0"
              className={cn(
                "cursor-pointer text-transparent transition-all duration-200 ease-in-out hover:text-gray-900/5",
                squaresClassName,
              )}
            />
          );
        })}
      </svg>
    </svg>
  );
}

export default InteractiveGridPattern;
