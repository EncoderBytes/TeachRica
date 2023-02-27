import "./common.css"
export default function Nav() {
    return (
        <>
            <nav className="navbar navbar-expand-lg ">
                <div className="container ">
                    <a className="navbar-brand" href="#"><Name/></a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav d-flex justify-content-end w-100 text-center">
                            <li className="nav-item mx-2 pr-auto mx-3 py-1">
                                <a className="nav-link py-0 active" aria-current="page" href="#">Home</a>
                            </li>
                            <li className="nav-item mx-2 pr-auto mx-3 py-1">
                                <a className="nav-link py-0" href="#about">About us</a>
                            </li>
                            <li className="nav-item mx-2 pr-auto mx-3 py-1">
                                <a className="nav-link py-0" href="#service">Services</a>
                            </li>
                            <li className="nav-item mx-2 pr-auto mx-3 py-1">
                                <a className="nav-link py-0 " href="#Testimonial">Testimonials</a>
                            </li>
                            <li className="nav-item mx-2 pr-auto mx-3 py-1">
                                <a className="nav-link py-0 " href="#contact">Contact</a>
                            </li>
                            <li className="nav-item mx-2 pr-auto mx-3 bg-info BorderRadius-round py-1">
                                <a className="nav-link py-0 text-white border-0" >+923046667704</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}



export function Name(){
    return(
        <>
            <span className="Name_text">
                Teach<img src="/Pictures/R_Png.png" className="R_png" alt="" />ica
            </span>
        </>
    )
}