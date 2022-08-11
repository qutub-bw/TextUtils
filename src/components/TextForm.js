import React, {useState} from "react";
import PropTypes from "prop-types";

export default function TextForm(props) {
  const handleUc = ()=>{
    // console.log("You have clicked Uppercase");
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert('Converted to Uppercase Succesfully');
  }

  const handleLc = ()=>{
    // console.log("You have clicked Uppercase");
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert('Converted to Lowercase Succesfully');
  }

  const clearText = ()=>{
    // console.log("You have clicked Uppercase");
    let newText = '';
    setText(newText);
    props.showAlert('Text Cleared!');
  }

  const copyText = ()=>{
    let textt = document.getElementById('myBox');
    textt.select();
    navigator.clipboard.writeText(textt.value);
    props.showAlert('Text Copied!');
  }

  const handleChange = (event)=>{
    // console.log("On change");
    setText(event.target.value);
  }

    const [text, setText] = useState('');

    let word;
    if(text.length === 0){
      word = 0;
    }
    else{
      word = text.split(" ").length;
      
    }
  return (
    <>
      <div className="container my-3" style={{color: props.mode==='dark'?'white':'black'}}>
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea className="form-control" value={text} placeholder="Enter Text Here" onChange={handleChange} id="myBox" rows="8" style={{backgroundColor: props.mode==='dark'?'#121212':'white',
          color: props.mode==='dark'?'white':'black'
        }}></textarea>
        </div>
        <button className="btn btn-primary mx-2 my-2" onClick={handleUc}>Convert to UpperCase</button>
        <button className="btn btn-primary mx-2 my-2" onClick={handleLc}>Convert to LowerCase</button>
        <button className="btn btn-dark mx-2 my-2" onClick={clearText}>Clear Text</button>
        <button className="btn btn-primary mx-2 my-2" onClick={copyText}>Copy Text</button>
      </div>
      <div className="container" style={{color: props.mode==='dark'?'white':'black'}}>
        <h1>Your text Summary</h1>
        <p><b>{0.008 * word}</b> Minutes Read</p>
        <p><b>{word}</b> Words, <b>{text.length}</b> Characters</p>
      </div>
    </>
  );
}

TextForm.propTypes = { heading: PropTypes.string.isRequired };
TextForm.defaultProps = { heading: "Default Heading" };
