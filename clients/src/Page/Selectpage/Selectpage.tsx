import { useState } from 'react';
import "../Mainpage/Mainpage.css";
import Select from './Select';
import Selecttopicbutton from './Selecttopicbutton';
import { Option } from '../../Interfaces/Option';

const options: Option[] = [
  {
    label: "Movies",
    value: "movies",
    roomid : 1
  },
  {
    label: "Game",
    value: "game",
    roomid : 2
  },
  {
    label: "Animal",
    value: "animal",
    roomid : 3
  },
  {
    label: "Guy2yo",
    value: "guy2yo",
    roomid : 4
  },
  {
    label: "Computer",
    value: "computer",
    roomid : 5
  },
  {
    label : "Hee",
    value : "hee",
    roomid : 6
  }
];

function Selectpage() {
  const [selectedItem, setSelectedItem] = useState<Option | null>(null);

  return (
    <div className="homepagebody" id="Selectpage">
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
          <Selecttopicbutton roomid={selectedItem?.roomid}/>
        </div>
      </div>
      
    </div>
  );
}

export default Selectpage;
