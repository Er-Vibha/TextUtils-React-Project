import React,{ useState } from 'react'

export const Textis=(props)=> {
const upperClick=()=>{
  // console.log("Clicked")
  let up=text.toUpperCase()
  setText(up)
 }

 const lowClick=()=>{
let low = text.toLowerCase()
setText(low)
 }

 const clearText=()=>{
  let clt = ''
  setText(clt)
   } 

const handleChange=(event)=>{
  setText(event.target.value)
  
}
  const [text, setText] = useState('')  
  
  return (
    <>
    <div>
    <h2>{props.heading}</h2>  
<div className="mb-4">
<button className='btn btn-danger mb-3'onClick={clearText}>Clear Text</button>
  <textarea className="form-control" id="exampleFormControlTextarea1" value={text} onChange={handleChange} rows="8" placeholder='Enter Text'/>
</div>
<button className='btn btn-primary mx-2' onClick={upperClick} >Convert to Uppercase</button>
<button className='btn btn-primary'onClick={lowClick}>Convert to lowercase</button>

</div>
  <div className='container my-3'>
<h2>Your text summary</h2>
<p>{text.split(" ").length} words and {text.length} characters</p>
<p>{0.008*text.split(" ").length} minutes read
</p>
<h2>Preview
</h2>
<p>{text}</p>
  </div>
  </>
  )
}

