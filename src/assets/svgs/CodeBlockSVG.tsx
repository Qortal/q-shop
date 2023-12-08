import { SVGProps } from './interfaces'

export const CodeBlockSVG: React.FC<SVGProps> = ({ color, height, width }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      height={height}
      viewBox="0 96 960 960"
      width={width}
    >
      <path
        fill={color}
        d="m330 576 70-70q9-9 9-22t-9-22q-9-9-21.833-9-12.834 0-22.167 9l-93 93q-5 5-7 10.133-2 5.134-2 11Q254 582 256 587q2 5 7 10l94 94q9.333 9 22.167 9Q392 700 401 691q9-9 9-22t-9-22l-71-71Zm300 0-71 71q-9 9-9 22t9 22q9 9 21.833 9 12.834 0 22.167-9l94-94q5-5 7-10.133 2-5.134 2-11Q706 570 704 565q-2-5-7-10l-94-94q-4-5-10-7t-12-2q-6 0-11.5 2t-10.167 6.8Q550 470.4 550 483.2q0 12.8 9 21.8l71 71ZM180 936q-24 0-42-18t-18-42V276q0-24 18-42t42-18h600q24 0 42 18t18 42v600q0 24-18 42t-42 18H180Zm0-60h600V276H180v600Zm0-600v600-600Z"
      />
    </svg>
  )
}
