import "./HeadCss.css"
import MenuImg from "./images/MenuImg.svg"
export function Menu(){
    return (
        <>
            <div className="menu_main">
                <div className="menu_left">
                    <h1>Menu</h1>
                    <p>We change our menu every season. Here is what we are currently dishing up.</p>
                    <div className="menu_button">
                        <button>Food Menu</button>
                        <button>Drinks Menu</button>
                        <button>Takeaway Menu</button>
                    </div>
                </div>
                <div className="menu_right">
                    <img src={MenuImg} alt=""/>
                </div>
            </div>
        </>
    )
}