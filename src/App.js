import './App.css';
import {useRef, useState} from 'react'
function App() {
  const useFocus = () => {
    const htmlElRef = useRef(null)
    const setFocus = () => {htmlElRef.current &&  htmlElRef.current.focus()}

    return [ htmlElRef, setFocus ] 
}

  const [inputRef1,] = useFocus()
  const [inputRef2, setInput2Focus] = useFocus()
  const [inputRef3, setInput3Focus] = useFocus()
  const [inputRef4, setInput4Focus] = useFocus()
  const [in1, setIn1] = useState('')
  const [in2, setIn2] = useState('')
  const [in3, setIn3] = useState('')
  const [in4, setIn4] = useState('')
  return (
    <div className="App stylesheet">
    <span>Card Number*</span>
      <input type="text" ref={inputRef1} maxLength="4" pattern="\d{4}" autoFocus
        value={in1}
        onChange={(evt)=>{
          if(evt.target.value.length>= 4){setInput2Focus()}
          setIn1(evt.target.value)
        }}
        onPaste={async()=>{
          const text = await navigator.clipboard.readText()
          setIn1(text.substr(0,4))
          setIn2(text.substr(4,4))
          setIn3(text.substr(8,4))
          setIn4(text.substr(12,4))
          }
        }/>
      <input type="text"  value={in2} ref={inputRef2} maxLength="4" pattern="\d{4}"
        onChange={(evt)=>{
          if(evt.target.value.length>= 4){setInput3Focus()}
          setIn2(evt.target.value)
        }}/>
      <input value={in3} type="text" ref={inputRef3} maxLength="4" pattern="\d{4}" 
        onChange={(evt)=>{
          if(evt.target.value.length>= 4){setInput4Focus()}
          setIn3(evt.target.value)
        }}/>
      <input
       onChange={(evt)=>{
        setIn4(evt.target.value)
      }}
       value={in4} type="text" ref={inputRef4} maxLength="4" pattern="\d{4}"/>
    </div>
    
  );
}

export default App;
