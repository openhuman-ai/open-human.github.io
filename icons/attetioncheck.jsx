import React from "react"

export default function AttentionCheck(props) {
  return (
    <svg {...props} viewBox="0 0 64 64">
      <g>
        <linearGradient id="a" x1="4" x2="60" y1="32" y2="32" gradientUnits="userSpaceOnUse">
          <stop offset="0" stopColor="#7f00ff"></stop>
          <stop offset="1" stopColor="#e100ff"></stop>
        </linearGradient>
        <path
          fill="url(#a)"
          d="M30.02 21.325H8a3.999 3.999 0 0 0-4 4v26.59a3.999 3.999 0 0 0 4 4h38a3.999 3.999 0 0 0 4-4v-14.33a16.48 16.48 0 0 1-4 .5 16.029 16.029 0 0 1-15.98-16.76zm4.75 18.88-13.79 7.59a1.824 1.824 0 0 1-2.69-1.59v-15.17a1.827 1.827 0 0 1 2.69-1.59l13.79 7.58a1.828 1.828 0 0 1 0 3.18zm-14.48-8.86 13.22 7.27-13.22 7.28zM46 8.085a14 14 0 1 0 14 14 14.015 14.015 0 0 0-14-14zm0 24.5a3 3 0 1 1 3-3 3.002 3.002 0 0 1-3 3zm3-10a3 3 0 0 1-6 0v-8a3 3 0 0 1 6 0zm-2-8v8a1 1 0 0 1-2 0v-8a1 1 0 0 1 2 0zm0 15a1 1 0 1 1-1-1 .997.997 0 0 1 1 1z"
          opacity="1"
        ></path>
      </g>
    </svg>
  )
}
