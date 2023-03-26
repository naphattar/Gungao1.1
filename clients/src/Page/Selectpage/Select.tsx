import React from "react";
import { Option } from "../../Interfaces/Option";
import { useState } from "react";
import "./Select.css";

interface SelectProps {
  placeholder?: string;
  options: Option[];
  selected: Option | null;
  onChange: (selection: Option) => void;
};

const Select: React.FC<SelectProps> = ({ placeholder, selected, options, onChange }) => {
    const [showOptions, setShowOptions] = useState(false);
    return (
        <div className="select-component" >
            <div onClick={() => setShowOptions(!showOptions)} className="select">
                <span>{selected ? selected.label : placeholder}</span>
                <span>v</span>
            </div>
            {showOptions && (
                <div  className="options">
                    {options.map(option => (
                        <div onClick={() => {
                            onChange(option);
                            setShowOptions(false);
                        }} key={option.value} className="option">
                            <span>{option.label}</span>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default Select