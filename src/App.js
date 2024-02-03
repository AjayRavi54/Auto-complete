import Exa from  "./design";
import "./css.css";

const App=()=>{
  const value = {
    array: ["Ram", "Rahu", "Ramesh","Arun"],
    multiple: true,
    badgeColor: {
      text: "black",
      bg_color: "rgba(26, 181, 224, 0.87)",
    },
    loading:true,
    disable:false
  };
  return(
    <>
    <div className="root">
       <Exa value={value}/> 
    </div>
      
    
    </>
 
    
  )

};
export default App; 