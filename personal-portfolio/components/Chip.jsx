import React from "react";

export function Chip(props) {
  const { label } = props;

  return (
    <div className="inline-block px-4 py-2 bg-gray-200 rounded-full text-gray-700">
      {label}
    </div>
  );
}
