import React, { useState } from 'react'



export default function TextForm(props) {
    const [text, setText] = useState('');

    let upperCase = () => {
        setText(text.toUpperCase())
    }

    let lowerCase = () => {
        setText(text.toLowerCase())
    }

    let getText = (e) => {
        setText(e.target.value)
    }

    let copy = () => {
        var copyText = document.getElementById("myInput");
        let btn=document.querySelector('.badge')
        copyText.select();
        copyText.setSelectionRange(0, 99999);
        navigator.clipboard.writeText(text);
        btn.innerHTML=`<i class="fa-solid fa-circle-check fa-xl" style="color: #000000;"></i>`
        setTimeout(()=>{
            btn.innerHTML=''
        },2000)
    }

    let trimSpace = () => {
        setText(text.replace(/\s+/g, ' ').trim())
    }

    let speak = () => {
        let textArea = document.getElementById('myInput')
        let text = textArea.value;

        // Create a new SpeechSynthesisUtterance object
        let utterance = new SpeechSynthesisUtterance();

        // Set the text and voice of the utterance
        utterance.text = text;
        utterance.voice = window.speechSynthesis.getVoices()[0];

        // Speak the utterance
        window.speechSynthesis.speak(utterance);
    }

    let resetText=()=>{
        setText('');
    }

    return (
        <div>
            <div className="mb-3 container" >
                <label htmlFor="exampleFormControlTextarea1" className="form-label my-2"><h2>Enter Text To Analyse : </h2></label>
                <textarea className={`form-control border-primary bg-${(props.mode === 'dark' ? 'secondary' : 'light')} text-${(props.mode === 'dark' ? 'light' : 'dark')}`} id="myInput" rows="8" value={text} onChange={getText} placeholder='Enter yor text here...'></textarea>


                <button type="button" className={`btn btn-${(props.mode === 'dark' ? 'info' : 'primary')} my-4 mx-3`} onClick={upperCase}>Upper case</button>
                <button type="button" className={`btn btn-${(props.mode === 'dark' ? 'info' : 'primary')} my-4 mx-3`} onClick={lowerCase}>Lower case</button>
                <button type="button" className={`btn btn-${(props.mode === 'dark' ? 'info' : 'primary')} my-4 mx-3`} onClick={copy}>Copy <span className="badge "></span></button>
                <button type="button" className={`btn btn-${(props.mode === 'dark' ? 'info' : 'primary')} my-4 mx-3`} onClick={trimSpace}>Remove Extra Space </button>
                <button type="button" className={`btn btn-${(props.mode === 'dark' ? 'info' : 'primary')} my-4 mx-3`} onClick={speak}>Speak</button>
                <button type="button" className={`btn btn-${(props.mode === 'dark' ? 'info' : 'primary')} my-4 mx-3`} onClick={resetText}>Reset</button>
            </div>

            <div className="analyse container">
                <h3>Analysis :</h3>
                <p>{text.split(' ').filter((e)=>{return e.length!==0}).length} words and {text.length} characters. </p>
            </div>

            <div className="preview container">
                <h3>Preview</h3>
                <p>{text}</p>
            </div>


        </div>
    )
}
