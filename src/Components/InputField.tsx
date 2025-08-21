import React from "react";

export interface InputFieldProps {
  label?: string;
  placeholder?: string;
}

export const InputField: React.FC<InputFieldProps> = ({
  label,
  placeholder,
}) => {
  return (
    <div>
      {label && <label>{label}</label>}
      <input placeholder={placeholder} className="border p-2 rounded" />
    </div>
  );
};
