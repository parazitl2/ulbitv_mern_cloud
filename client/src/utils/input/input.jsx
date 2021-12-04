import React, { useCallback } from 'react';
import "./input.css";

const Input = ({ setValue, value, type, placeholder }) => {
  const handleChange = useCallback((event) => setValue(event.target.value), [setValue]);

  return (
    <input
      onChange={handleChange}
      value={value} 
      type={type}
      placeholder={placeholder}
    />
  );
};

export default React.memo(Input);