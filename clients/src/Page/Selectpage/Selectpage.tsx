import { useEffect, useState } from 'react';
import "../Mainpage/Mainpage.css";
import Select from './Select';
import Selecttopicbutton from './Selecttopicbutton';
import TopicService from '../../Services/Topicservices';
import { Topic } from '../../Types/Topic';

function Selectpage() {
  const [selectedItem, setSelectedItem] = useState<Topic| null>(null);
  const [options,setOptions] = useState<Topic[]>([]);

  const fetchOptions = async () =>{
    const topics = await TopicService.getsortedTopics();
    setOptions(topics);
  }
  useEffect(() =>{
    fetchOptions();
  },[],);

  return (
    <div className="homepagebody" id="Selectpage">
      <div className="selectpagebody"> 
        <p>Select Your Topic</p>
        <div className="selectpageformcontainer">
          <Select
            placeholder="Select topic"
            selected={selectedItem}
            options={options}
            onChange={(selection: Topic) => setSelectedItem(selection)}
          />
          <h4>You have Selected {selectedItem?.topicname}</h4>
          <Selecttopicbutton roomid={selectedItem?.topicroomid}/>
        </div>
      </div>
      
    </div>
  );
}

export default Selectpage;
