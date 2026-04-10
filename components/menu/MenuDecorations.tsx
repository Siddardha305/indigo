import React from "react";

export const FlowerDecoration = ({ className, color = "#DFAB40" }: { className?: string, color?: string }) => (
  <div className={`pointer-events-none ${className}`}>
    <svg viewBox="0 0 200 200" width="100%" height="100%" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Central Circle */}
      <circle cx="100" cy="100" r="25" fill={color} fillOpacity="0.2" />
      
      {/* Outer Petals */}
      {[0, 45, 90, 135, 180, 225, 270, 315].map((angle) => (
        <path 
          key={angle}
          d="M100 100 Q140 60 180 100 Q140 140 100 100" 
          fill={color} 
          fillOpacity="0.15" 
          transform={`rotate(${angle} 100 100)`} 
        />
      ))}
      
      {/* Inner Petals */}
      {[22.5, 67.5, 112.5, 157.5, 202.5, 247.5, 292.5, 337.5].map((angle) => (
        <path 
          key={angle}
          d="M100 100 Q125 75 150 100 Q125 125 100 100" 
          fill={color} 
          fillOpacity="0.25" 
          transform={`rotate(${angle} 100 100)`} 
        />
      ))}
    </svg>
  </div>
);
