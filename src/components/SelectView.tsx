import { useState } from "react";
import { useHistory } from "react-router-dom";


const SelectView = () => {
  const [startD, setStartD] =  useState("");
  const [endD, setEndD] = useState("");
  let history = useHistory();

  const handleButton = () => {
    const sD = startD.split("-");
    const eD = endD.split("-");
    
    sD.map(item => parseInt(item));
    eD.map(item => parseInt(item));

    if (startD === "" || endD === "") {
      alert("Please select start date and end date correctly")
    }
    // check if start date is greater than end date
    else if (sD[0] > eD[0] || sD[1] > eD[1] || sD[2] > eD[2]) {
      alert("Please select start date and end date correctly")
    }
    else {
      history.replace(`./result?start=${startD}?end=${endD}`);
    }
  }

  return (
    <div>
      {/* template for /history/select */}
      <div className='text-center space-y-3 space-x-3'>
        <p className='text-2xl font-semibold'>Select historical range</p>
        <span>From date</span>
        <input type='date' onChange={e => setStartD(e.target.value)}></input>
        <span>To date</span>
        <input type='date' onChange={e => setEndD(e.target.value)}></input>
        <br />
        <button onClick={handleButton} className="mt-5">Get data</button>
      </div>
    </div>
  )
}


export default SelectView;