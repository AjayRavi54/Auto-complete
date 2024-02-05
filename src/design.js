import "./css.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash,faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import React, { useState, useRef } from "react";

const Child = (props) => {
  const obj=props.value;
  
  const badge = {
    color: obj.badgeColor.text,
    backgroundColor: obj.badgeColor.bg_color,
  };
  const load={
     backgroundColor:obj.loading ? "white" : "red"
}
  const dis={
   backgroundColor:obj.disable ? "white" : "red"

  }
  const [options, setOptions] = useState(obj.array);

  const [opInput, setOpInput] = useState([]);

  const inputRef = useRef();

  const [isSecondDivOpen, setIsSecondDivOpen] = useState(false);

  
  const submitfinal=()=>{
    console.log(opInput);
    setOpInput([]);
  }
   
  const openOption = () => {
    const array = obj.array;
    setOptions(array);
    setIsSecondDivOpen(!isSecondDivOpen);
  };

  const handleClick = (value) => {
    if (!opInput.includes(value)) {
      if (obj.multiple) {
        setOpInput([value,...opInput]);
      } else {
        setOpInput([value]);
      }
    }
  };

  const handleInputChange = (e) => {
    if (e.key === "Enter") {
      const value = e.target.value.trim();
      if (value && !opInput.includes(value)) {
        if (obj.multiple) {
          setOpInput([value,...opInput]);
        } else {
          setOpInput([value]);
        }
      }
      inputRef.current.value = "";
    }
  };

  const tounselect = (opt) => {
    const index = opInput.indexOf(opt);
    if (index !== -1) {
      const updatedOpInput = opInput.filter((item, i) => i !== index);
      setOpInput(updatedOpInput);
    }
  };
  return (
    <>
    
      
    <div className="loadingdisouter">
        <div className="loadmain">      <div className="headerbox"><div className="loading">Loading</div><div className="radio"><div className="radiobox" style={load}></div></div></div></div>
        <div className="disablemain">      <div className="headerbox"><div className="loading">Disable</div><div className="radio"><div className="radiobox" style={dis}></div></div></div></div>
      </div>
      <div className="opadesign">
      <div className="outeinpu">
        <div className="inputfield">
        <input
            type="text"
            defaultValue=""
            ref={inputRef}
            onKeyDown={handleInputChange}
            className="inpufieldmain"
          />
          {opInput.map((op) => {
            return (
              <div className="aceopt" style={badge}>
                <div className="selopt">{op}</div>
                <div onClick={() => tounselect(op)} className="icon">
                  {" "}
                  <FontAwesomeIcon icon={faTrash} style={{color:'black'}} className="deleteicon" />
                </div>
              </div>
            );
          })}
         
        </div>
        <div className="drop" onClick={openOption}>
          
          <svg
            className="openiconclosedisplay"
            
            viewBox="0 0 24 24"
            width="24"
            height="24"
            xmlns="http://www.w3.org/2000/svg"
            style={{
              transform: !isSecondDivOpen ? "rotate(0deg)" : "rotate(180deg)",
            }}
          >
            <path
              d="m19 9-7 7-7-7"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
            />
          </svg>
        </div>
        <div className="clr" onClick={() => setOpInput([])}>
          clear
        </div>
      </div></div>
      {isSecondDivOpen && (
        <div className="opt">
          {options.map((option, index) => (
            <div key={index}>
              <p className="opopt" onClick={() => handleClick(option)}>
                {option}
              </p>
            </div>
          ))}
        </div>
      )}

<div style={{display:"flex",justifyContent:"center"}}>
<div className="enetericon">
      <div className="submitclick">click here to submit</div>
      <FontAwesomeIcon onClick={()=>submitfinal()} className="papericon" icon={faPaperPlane} />
      
    </div>
</div>
    </>
  );
};
export default Child;
