import React from 'react';
import { ActionMeta, GroupBase } from 'react-select';
import { InputActionMeta } from 'react-select/dist/declarations/src';
import Select from 'react-select/dist/declarations/src/Select';
import "./Mainpage.css"
import Selecttopicbutton from './Selecttopicbutton';

interface Option<
  Option = unknown,
  IsMulti extends boolean = false,
  Group extends GroupBase<Option> = GroupBase<Option>
  > {
    value : string;
    label : string;
  }

function Selectpage() {
  const options: Option[] = [
    { value: 'chocolate', label: 'Chocolate' },
    { value: 'strawberry', label: 'Strawberry' },
    { value: 'vanilla', label: 'Vanilla' }
  ];
  
  const [selectedOption, setSelectedOption] = React.useState<Option | null>(null);
  
  const handleChange = (selectedoption: Option | null, actionMeta: ActionMeta<Option>) => {
    setSelectedOption(selectedOption);
 }
  return (
    <div className="homepagebody">
      <div className="selectpagebody"> 
        <p>Select Your Topic</p>
        <div className="selectpageformcontainer">
          
          <Selecttopicbutton/>
        </div>
      </div>
      
    </div>
  );
}

export default Selectpage;
