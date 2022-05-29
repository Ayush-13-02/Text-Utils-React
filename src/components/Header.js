import React, { useState } from 'react';

export default function Header() {
    const [text, setText] = useState('');
    const [num, setNum] = useState(1);
    const [font, setFont] = useState({
        fontSize: `${num}rem`,
        height: "13rem"
    });
    const [mystyle, setMystyle] = useState({
        color: 'white',
        backgroundColor: 'black',
        btntext: 'Light Mode Disabled'
    })
    const ToggleMode = () => {
        if (mystyle.color === 'white') {
            setMystyle({
                color: 'black',
                backgroundColor: '#f8f9fa',
                btntext: 'Light Mode Enabled'
            })
        }
        else {
            setMystyle({
                color: 'white',
                backgroundColor: 'black',
                btntext: 'Light Mode Disabled'
            })
        }
    }
    
    const HandleupClick = () => {
        setText(text.toUpperCase());
    }
    const HandlenClick = () => {
        setNum(1);
        console.log(num,"n");
        setFont({
            fontSize: `${num}rem`,
            height: "13rem"
        })
    }
    const HandleiClick = () => {
        setNum(num + 0.25)
        console.log(num,"i");
        setFont({
            fontSize: `${num}rem`,
            height: "13rem"
        })
    }
    const HandledClick = () => {
        console.log(num);
        setNum(num - 0.25)
        setFont({
            fontSize: `${num}rem`,
            height: "13rem"
        })
    }
    const HandlelowClick = () => {
        setText(text.toLowerCase());
    }
    const HandleclrClick = () => {
        let ctext = '';
        setText(ctext);
    }
    const HandlecpyClick = () => {
        var copytext = document.getElementById('text');
        copytext.select();
        navigator.clipboard.writeText(copytext.value);
    }
    const HandleextspClick = () => {
        var newText = text.replace(/\s+/g, ' ').trim();
        setText(newText)
    }
    const speak = () => {
        let msg = new SpeechSynthesisUtterance();
        msg.text = text;
        window.speechSynthesis.speak(msg);
    }

    let FontStyle = {
        fontSize: "larger"
    }
    return (
        <div className="d-flex h-100 text-center" style={mystyle}>
            <div className="cover-container d-flex w-100 h-100 p-3 mx-auto flex-column my-2">
                <header className="mb-9">
                    <div className="mb-6">
                        <h3 className="float-md-start mb-3">Text-Utils</h3>
                        <nav className="nav nav-masthead justify-content-center float-md-end mt-2">
                            <div className="form-check form-switch">
                                <input className="form-check-input" onClick={ToggleMode} type="checkbox" role="switch" value={'on'} id="flexSwitchCheckChecked" />
                                <label className="form-check-label" htmlFor="flexSwitchCheckChecked">{mystyle.btntext}</label>
                            </div>
                        </nav>
                    </div>
                    <hr />
                </header>

                <main className="px-3">
                    <h2>Enter the text to analyze below</h2>
                    <textarea className="form-control" value={text} onChange={(e) => { setText(e.target.value) }} id="text" rows="7" style={font}></textarea>
                    <div className="my-2">
                        <button type="button" className="btn btn-primary mx-1 mb-1" onClick={HandleupClick}>Convert to UpperCase</button>
                        <button type="button" className="btn btn-secondary mx-1 mb-1" onClick={HandlelowClick}>Convert to LowerCase</button>
                        <button type="button" className="btn btn-success mx-1 mb-1" onClick={HandleclrClick}>Clear Text</button>
                        <button type="button" className="btn btn-primary mx-1 mb-1" onClick={HandlecpyClick}>Copy Text</button>
                        <button type="button" className="btn btn-secondary mx-1 mb-1" onClick=
                            {HandleextspClick}>Remove EXtra Spaces</button>
                        <button type="button" className="btn btn-success mx-1 mb-1" onClick={speak}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="23" height="23" fill="currentColor" className="bi bi-volume-down" viewBox="0 0 16 16">
                                <path d="M9 4a.5.5 0 0 0-.812-.39L5.825 5.5H3.5A.5.5 0 0 0 3 6v4a.5.5 0 0 0 .5.5h2.325l2.363 1.89A.5.5 0 0 0 9 12V4zM6.312 6.39 8 5.04v5.92L6.312 9.61A.5.5 0 0 0 6 9.5H4v-3h2a.5.5 0 0 0 .312-.11zM12.025 8a4.486 4.486 0 0 1-1.318 3.182L10 10.475A3.489 3.489 0 0 0 11.025 8 3.49 3.49 0 0 0 10 5.525l.707-.707A4.486 4.486 0 0 1 12.025 8z" />
                            </svg></button>
                        <div>
                            <button type="button" className="btn btn1 btn2 btn-info mxl-1 mb-1" onClick={HandledClick}>-</button>
                            <button type="button" className="btn  btn1 btn-primary mb-1" onClick={HandlenClick}>Font Size</button>
                            <button type="button" className="btn btn1 btn3 btn-info mxr-1 mb-1" onClick={HandleiClick}>+</button>
                        </div>
                    </div>
                    <p></p>
                </main>
                <div className='my-3'>
                    <h2>Your Text Summary</h2>

                    <span style={FontStyle}>{text.split(/\s+/).filter((e) => { return e.length !== 0 }).length} Words and {text.length} Characters</span>
                    <p style={FontStyle}>{0.008 * text.split(/\s+/).filter((e) => { return e.length !== 0 }).length} Minutes read</p>
                    <p style={FontStyle}> {text.split(/\n+/).filter((e) => { return e.length !== 0 }).length} Lines in Text</p>
                    <div className='my-4 preview px-1 py-1'>
                        <h3>Preview</h3> <hr />
                        <p style={FontStyle}>{text}</p>
                    </div>
                </div>
            </div>
        </div >
    )
}
