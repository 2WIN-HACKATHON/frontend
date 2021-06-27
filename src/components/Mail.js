import React from 'react'
import './resources/Mail.css';


function Mail() {
    return (
        <>
            <div className="Modal">
                <form className="Mail__form">
                    <div className="Mail__send"> 
                            <input type="email" required placeholder="From" required/><br />                      
                            <input type="email" required placeholder="To" /><br />
                            <input type="email" placeholder="CC"/><br />
                            <input type="text" placeholder="Subject"/><br />
                            <textarea className="Mail__data" type="text" placeholder="Mail body"/><br />
                        
                    </div><br/>
                    <select className="select__menu">
                        <option>30 Min</option>
                        <option>1 hr</option>
                        <option>6 hr</option>
                        <option>12 hr</option>
                    </select>&nbsp;&nbsp;&nbsp;
                    <button className="send__butt">Send</button>
                </form>
            </div>
        </>
    )
}

export default Mail;