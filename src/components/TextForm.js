import React, {useState} from "react";


export default function TextForm(props) {

    const handleUpClick = ()=>{
        // console.log("Uppercase was clicked" + Text);
        let newText = Text.toUpperCase();
        setText(newText)
        props.showAlert("Converted to UpperCase", "success")
    }

    const handleCopy = ()=>{
      console.log("Text Copied!!!");
      var txt = document.getElementById('mybox')
      txt.select()
      navigator.clipboard.writeText(txt.value)
      props.showAlert("Text Copied to Clipboard!!!", "success")
    }

    const handleLoClick = ()=>{
      let newText = Text.toLowerCase();
      setText(newText)
      props.showAlert("Converted to LowerCase", "success")
  }

    const handleCapClick = ()=>{
      let newText = Text[0].toUpperCase() + Text.slice(1).toLowerCase();
      setText(newText)
      props.showAlert("Capitalized first Word", "success")
  }

  const handleCapEachClick = ()=>{
    let a1 = Text.split(' ')
    let a2 = []
    for (let i=0; i<a1.length;i++){ a2.push(a1[i][0].toUpperCase() + a1[i].slice(1).toLowerCase())}
    let newText = a2.join(' ')
    setText(newText)
    props.showAlert('First Remove Extra Spaces to Capitalize each word, Ignore if already did!', 'success')
    // props.showAlert("Capitalized each word", "success")
    
  }

  const handleExtraSpaces = () =>{
    let newText = Text.split(/[ ]+/)
    setText(newText.join(" "))
    props.showAlert("Extra Spaces Removed", "success")
  }

    const handleClearClick = ()=>{
      setText("")
      props.showAlert("Text Cleared", "success")
  }

    const handleOnChange = (event)=>{
      // console.log("something is added");
      setText(event.target.value)
    }

    const [Text, setText] = useState("");
  return (
    <>
    <div className="mb-3 my-3 container">
        <h1>{props.heading}</h1>
      
      <textarea style={{backgroundColor : (props.mode==='dark')?'#1b2244':(props.mode==='black')?'black':(props.mode==='green')?'green':(props.mode==='purple')?'purple':'white',
                        color : props.mode==='light'?'black':'white'}} 
        className="form-control" value={Text} placeholder="Type Here..." onChange={handleOnChange} id="mybox" rows="8"
      ></textarea>
      <button disabled={Text.length===0} className='btn btn-primary my-2' onClick={handleUpClick} >Convert to Uppercase</button>
      <button disabled={Text.length===0} className='btn btn-primary mx-2 my-2' onClick={handleLoClick} >Convert to Lowercase</button>
      <button disabled={Text.length===0} className='btn btn-danger mx-2 my-2' onClick={handleClearClick} >Clear Text</button>
      <button disabled={Text.length===0} className='btn btn-primary mx-2 my-2' onClick={handleCapClick} >Capitalize only first word</button>
      <button disabled={Text.length===0} className='btn btn-primary mx-2 my-2' onClick={handleCapEachClick} >Capitalize Each Word</button>
      <button disabled={Text.length===0} className='btn btn-primary mx-2 my-2' onClick={handleCopy} >Copy to Clipboard</button>
      <button disabled={Text.length===0} className='btn btn-primary mx-2 my-2' onClick={handleExtraSpaces} >Remove Extra Spaces</button>

    </div>
    <div className='container'>
      <h2>Your Text Summary</h2>
      <p>{Text.split(/\s+/).filter((element)=>{return element.length!==0}).length} words and {Text.length} characters</p>
      <p>{0.008 * Text.split(/\s+/).filter((element)=>{return element.length!==0}).length} Minutes read</p>
      <h2>Preview</h2>
      <p>{Text.length>0?Text:"Nothing to Preview!!!"}</p>
    </div>
    
    </>
  );
}
