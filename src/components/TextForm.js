import React, { useState } from "react";

export default function TextForm(props) {
  const [text, setText] = useState("Enter text here");
  
  const handleChange = (event) => {
   // console.log("textbox changed");
    setText(event.target.value);
  };

  const handleUppercaseClick = () => {
    //  console.log("Upper case was clicked");
    let capitalText = text.toUpperCase();
    setText(capitalText);
    props.displayAlert('Text changed to uppercase..', 'success');
  };

  const handleLowercaseClick = () => {
    //  console.log("Upper case was clicked");
    let smallText = text.toLowerCase();
    setText(smallText);
    props.displayAlert('Text changed to lowercase..', 'success');
  };

  const handleClearcaseClick = () => {
    //  console.log("Upper case was clicked");
    setText("");
    props.displayAlert('Text cleared', 'success');
  };

  const handleInversecaseClick = () => {
    console.log("Upper case was clicked");
    let altText = text;
    let returnText = " ";
    for (let index = 0; index < altText.length; index++) {
        if(altText.charCodeAt(index)>= 65 && altText.charCodeAt(index)<= 90){
                returnText = returnText.concat(altText.substring(index,index+1).toLowerCase());
                
        }
        else{
            returnText = returnText.concat(altText.substring(index,index+1).toUpperCase()); 
        }
        
    }
    setText(returnText);
    props.displayAlert('Text case inversed.', 'success');
  };

 



  return (
      <>
    <div className="conatiner" style={{color : props.mode==='dark'?'white' :'black'}}>
      <div>
        <h2>{props.heading}</h2>
      </div>
      <div className="mb-3">
        <textarea
          className="form-control"
          id="myBox"
          value={text}
          onChange={handleChange}
          rows="8"
          style={{backgroundColor : props.mode==='dark'?'grey' :'white', color : props.mode==='dark'?'white' :'black'}}
        ></textarea>
      </div>
      <button className="btn btn-primary" onClick={handleUppercaseClick}>
        Convert to UpperCase
      </button>
      <button className="btn btn-primary mx-2" onClick={handleLowercaseClick}>
        Convert to UpperCase
      </button>
      <button className="btn btn-primary mx-2" onClick={handleInversecaseClick}>
        Convert to InverseCase
      </button>
      <button className="btn btn-primary mx-2" onClick={handleClearcaseClick}>
        Clear
      </button>
    </div>

    <div className="container my-2" style={{color : props.mode==='dark'?'white' :'black'}}>
        <h2>Text Summary..</h2>
        <p> {text.length===0? 0 :(text.endsWith(" ") ? text.split(/[\s\n]/).length-1 :text.split(/[\s\n]/).length)} {text.split(/[\s\n]/).length<=1 ? 'word':'words' } and {text.length} {text.length===1? 'character':'characters' }.</p>
        <p> {text.length===0? 0 :text.split(".").length-1} {text.split(".").length-1<=1 ? 'sentence':'sentences'} {text.endsWith("\n") ? text.split("\n").length-1 : text.split("\n").length} paragraphs. </p>
        <p>{text.length===0? 0 :text.split(/[\s\n]/).length*0.08} minutes read.</p>
        <h2>Preview</h2>
        <p>{text.length===0? 'Enter something in the textbox to preview.': text}</p>
        
        
    </div>

    </>
  );
}

TextForm.defaultProps = {
  heading: "Insert heading here.",
};
//text.length===0? 0 : || text.endsWith(" ") ? text.split(/[\s\n]/).length-1 :