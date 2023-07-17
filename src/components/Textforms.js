import React, {useState} from 'react'



export default function Textforms(props) {
    const handleUpClick = () =>{
        let newText = text.toUpperCase() ;
        setText(newText) ;
    }
    const handleDownClick = () =>{
        let newText = text.toLowerCase() ;
        setText(newText) ;
    }
    const handleClearClick = () =>{
        let newText = '' ;
        setText(newText) ;
    }
    const handleOnChange = (event) =>{
        setText(event.target.value)
    }
    const handleClick = (event) =>{
        var text = document.getElementById("myBox");
        text.select();
        navigator.clipboard.writeText(text.value);
    }
    const handleExtraSpace = (event) =>{
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
    }

    const [text, setText] = useState('Enter text here')  
    return (
    <>  
    <div className="container">
    <h1>{props.heading}</h1>
    <div className="mb-3">
        <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="10"></textarea>
        </div>
        <button className="btn btn-danger" onClick={handleUpClick}>Convert to UpperCase</button>
        <button className="btn btn-success mx-2" onClick={handleDownClick}>Convert to LowerCase</button>
        <button className="btn btn-primary mx-2" onClick={handleClearClick}>Clear Text</button>
        <button className="btn btn-primary mx-2" onClick={handleClick}>Copy Text</button>
        <button className="btn btn-primary mx-2" onClick={handleExtraSpace}>RemoveSpace</button>
    </div>
    <div className="container">
        <h1>Your text summary</h1>
        <p>{text.split(" ").length} words ans {text.length} character</p>
    </div>
    </>
  )
}
