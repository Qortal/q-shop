import { IconTypes } from "./IconTypes";

export const CompareArrowsSVG: React.FC<IconTypes> = ({
  color,
  height,
  width,
}) => {
  return (
    <svg
      fill={color}
      xmlns="http://www.w3.org/2000/svg"
      height={height}
      viewBox="0 -960 960 960"
      width={width}
    >
      <path d="m320-160-56-57 103-103H80v-80h287L264-503l56-57 200 200-200 200Zm320-240L440-600l200-200 56 57-103 103h287v80H593l103 103-56 57Z" />
    </svg>
  );
};
