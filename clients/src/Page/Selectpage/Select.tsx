import React from "react";
import { useState } from "react";
import "./Select.css";
import { Topic } from "../../Types/Topic";

interface SelectProps {
  placeholder?: string;
  options: Topic[];
  selected: Topic| null;
  onChange: (selection: Topic) => void;
};

const Select: React.FC<SelectProps> = ({ placeholder, selected, options, onChange }) => {
    const [showOptions, setShowOptions] = useState(false);
    return (
        <div className="select-component" >
            <div onClick={() => setShowOptions(!showOptions)} className="select">
                <span>{selected ? selected.topicname : placeholder}</span>
                <span id="selectmark">v</span>
            </div>
            {showOptions && (
                <div  className="options">
                    {options.map(option => (
                        <div onClick={() => {
                            onChange(option);
                            setShowOptions(false);
                        }} key={option.topicname} className="option">
                            <span>{option.topicname}</span>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default Select