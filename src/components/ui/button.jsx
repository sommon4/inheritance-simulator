import React from 'react';

export const Button = ({ children, onClick, className, variant = 'default' }) => {
  const baseStyle = "px-4 py-2 rounded-md font-semibold";
  const variants = {
    default: "bg-blue-500 text-white hover:bg-blue-600",
    outline: "border border-gray-300 hover:bg-gray-100",
  };

  return (
    <button 
      className={`${baseStyle} ${variants[variant]} ${className}`} 
      onClick={onClick}
    >
      {children}
    </button>
  );
};