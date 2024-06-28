import React from 'react';

export const Slider = ({ value, onValueChange, max, step, className }) => (
  <input
    type="range"
    min="0"
    max={max}
    step={step}
    value={value[0]}
    onChange={(e) => onValueChange([parseInt(e.target.value)])}
    className={`w-full ${className}`}
  />
);