import React from 'react';

interface LogoProps {
  className?: string;
  dotColor?: string;
  textColor?: string;
  size?: string;
}

const Logo = ({ 
  className = "", 
  dotColor = "bg-amber", 
  textColor = "text-navy", 
  size = "text-2xl" 
}: LogoProps) => (
  <div className={`flex items-baseline gap-0.5 ${className}`}>
    <span className={`font-sans ${size} font-bold tracking-tighter ${textColor}`}>Lumen</span>
    <div className={`w-[0.2em] h-[0.2em] rounded-full ${dotColor}`}></div>
  </div>
);

export default Logo;
