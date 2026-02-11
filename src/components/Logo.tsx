export default function Logo({ className = '' }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 200 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Outer circle - brush stroke style */}
      <circle
        cx="100"
        cy="100"
        r="85"
        stroke="white"
        strokeWidth="6"
        strokeLinecap="round"
        fill="none"
        opacity="0.95"
      />
      {/* Outer circle brush accent strokes */}
      <path
        d="M 185 100 A 85 85 0 0 1 100 185"
        stroke="white"
        strokeWidth="4"
        strokeLinecap="round"
        fill="none"
        opacity="0.4"
        transform="rotate(15, 100, 100)"
      />
      <path
        d="M 15 100 A 85 85 0 0 1 100 15"
        stroke="white"
        strokeWidth="3"
        strokeLinecap="round"
        fill="none"
        opacity="0.3"
        transform="rotate(-10, 100, 100)"
      />

      {/* Inner circle */}
      <circle
        cx="100"
        cy="100"
        r="42"
        stroke="white"
        strokeWidth="5"
        fill="none"
      />

      {/* Top line: outer circle to inner circle */}
      <line
        x1="100"
        y1="15"
        x2="100"
        y2="58"
        stroke="white"
        strokeWidth="5"
      />
      {/* Bottom line: inner circle to outer circle */}
      <line
        x1="100"
        y1="142"
        x2="100"
        y2="185"
        stroke="white"
        strokeWidth="5"
      />
    </svg>
  )
}
