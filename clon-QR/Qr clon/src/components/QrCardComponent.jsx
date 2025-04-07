import logo from "../assets/image-qr-code.png";
import "../Styles/main.scss";

export function QrCardComponent() {
return (
    <>
        <div className="container">
            <img src={logo} alt="QrCode"/>
            <section>
                <h1 className="titleText">
                Improve your front-end skills by building projects
                </h1>

                <p className="pText">
                Scan the QR code to visit Frontend Mentor and take your coding 
                skills to the next level
                </p>
            </section>
        </div>
        
    </>
    );
}

