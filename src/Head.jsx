import Logos from './images/Logos.svg'
import face from './images/face.svg'
import inst from './images/inst.svg'
import mail from './images/mail.svg'
import Preview from './images/Preview.svg'
import "./HeadCss.css"

function Headers(){
    return (
        <>
            <div className="headers">
                <div className="logos">
                    <div className="left-container">
                        <a href="">About</a>
                        <a href="">Menu</a>
                        <a href="">Info</a>
                        <a href="">Booking</a>
                    </div>
                    <div className="mid-container">
                        <img src={Logos} alt=""/>
                    </div>
                    <div className="right-container">
                        <img src={face} alt=""/>
                        <img src={inst} alt=""/>
                        <img src={mail} alt=""/>
                    </div>
                </div>
                <div className="Head_prev">
                    <img src={Preview} alt=""/>
                </div>
            </div>
        </>
    )


}

export default Headers