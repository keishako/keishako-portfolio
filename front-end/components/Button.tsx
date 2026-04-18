import React from 'react'

const Button = ({ children }: { children: React.ReactNode }) => {
  return (
    <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
      {children}
    </button>
  );
};

export default Button;