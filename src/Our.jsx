import "./HeadCss.css"
import our1 from "./images/our1.svg"
import our2 from "./images/our2.svg"
import our3 from "./images/our3.svg"

export function Our(){
    return (
        <>
            <div className="Our_main">
                <div className="Our_pin">
                    <h1>Location</h1>
                    <p>101 Cuba St,</p>
                    <p>Te Aro, Wellington</p>
                </div>
                <div className="Our_pin">
                    <h1>Hours</h1>
                    <p>Tuesday to Friday</p>
                    <p>7AM - 3PM</p>
                    <p>Saturday to Sunday</p>
                    <p>8AM - 3PM</p>
                </div>
                <div className="Our_pin">
                <h1>Mondays?</h1>
                    <p>We are closed on Mondays</p>
                    <p>to reflect and refuel</p>
                </div>
            </div>
            <div>
                <div className="Our_Img">
                    <div className="Our_left_img">
                        <img src={our1} alt=""/>
                        <img src={our2} alt=""/>
                    </div>
                    <div className="Our_right_img">
                        <img src={our3} alt=""/>
                    </div>
                </div>
            </div>
        </>
    )
}