import React, { useState } from 'react';
import { ActionMeta, GroupBase } from 'react-select';
import { InputActionMeta } from 'react-select/dist/declarations/src';
import "./Mainpage.css"
import Select from './Select';
import Selecttopicbutton from './Selecttopicbutton';
import { Option } from '../../Interface';

const options: Option[] = [
  {
    label: "Movies",
    value: "movies"
  },
  {
    label: "Game",
    value: "game"
  },
  {
    label: "Animal",
    value: "animal"
  },
  {
    label: "Guy2yo",
    value: "guy2yo"
  },
  {
    label: "Computer",
    value: "computer"
  },
  {
    label : "Hee",
    value : "hee"
  }
];

function Selectpage() {
  const [selectedItem, setSelectedItem] = useState<Option | null>(null);

  return (
    <div className="homepagebody">
      <div className="selectpagebody"> 
        <p>Select Your Topic</p>
        <div className="selectpageformcontainer">
          <Select
            placeholder="Select topic"
            selected={selectedItem}
            options={options}
            onChange={(selection: Option) => setSelectedItem(selection)}
          />
          <h4>You have Selected {selectedItem?.label}</h4>
          <Selecttopicbutton/>
        </div>
      </div>
      
    </div>
  );
}

export default Selectpage;
