import { Name } from "./Nav";
import "./common.css";
import { useState } from "react";
export default function Footer() {
    const [ data, setData] = useState([
        {
            icon:"bi bi-envelope-fill",
            title:"Email",
            info1:"info@teachrica.com",
            info2:"hr@teachrica.com"
        },
        {
            icon:"bi bi-telephone-fill",
            title:"Phone",
            info1:"0092-345 1234567",
            info2:"0092-300 7654321"
        },
        {
            icon:"bi bi-geo-alt-fill",
            title:"Location",
            info1:"PTCL Traning Center, "
            , info2:" Board Bazar, Peshawar"
            
        }
    ])
    return (
        <>
            <div className="container F_Flex">
                <div className="F_Flex_flex">
                    <a class="pe-auto bi bi-linkedin " href="#"  style={{color:"rgb(4, 152, 158)"}}></a>
                    <a class="pe-auto bi bi-facebook" href="#" style={{color:"rgb(4, 152, 158)"}}></a>
                    <a  class="pe-auto bi bi-twitter" href="#" style={{color:"rgb(4, 152, 158)"}}></a>
                </div>

                <Name  />

             <div className=" F_Flex_flex">
             <a class="pe-auto bi bi-tiktok" href="#" style={{color:"rgb(4, 152, 158)"}}></a>
             <a class="pe-auto bi bi-instagram" href="#" style={{color:"rgb(4, 152, 158)"}}></a>
             <a class="pe-auto bi bi-youtube" href="#" style={{color:"rgb(4, 152, 158)"}}></a>
                </div>
            </div>


            <div className="F_Flex_2 py-5">

            {
                data.map((d,i)=>{
                    return(
                        <div className="F_Flex_column my-3" key={i}>
                            <i className={d.icon +" F_icon"} ></i>
                            <div className="title2 py-3">{d.title}</div>
                            <p>
                                {d.info1}
                                <br />
                                {d.info2}
                            </p>
                        </div>
        
                    )
                })
            }
            </div>

            <div className="py-5 mx-auto">
                <p className="text-center fw-bold" style={{color:"rgb(4, 152, 158)"}}>
                    Copyright &#169; 2023 <span className="text-black" style={{cursor:"pointer"}}>Teachrica</span>. All rights reserved.
                </p>
            </div>
        </>
    )
}