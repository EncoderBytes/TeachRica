import { useState } from "react";
export default function HelpUs() {
    const [data, setData] = useState({
        title:"Best Tuition Services in Peshawar",
        content:"Good news for all the parents and students looking for affordable and best tuition services. We offer a full variety of in-home tutoring services in Peshawar. Our qualified, competent, and experienced tutors will visit your home to teach your children. They experience in all subject areas.",
        Color:'rgb(4, 152, 158)'
    })
    return (
        <>
            <div className="helpusmain">
            <div className="HelpUs">
                <div className="imgDivWithTrangle">
                    
                    <img src="/Pictures/Girl.png" className="imgHelpUs" style={{ height: "100%" }} alt="" />
                    <div className="trangleBig"></div>
                </div>

                <div className="Content">
                    <div className="title">
                    <span className="left_trangle-white"></span> We are here to help! Call Us Today!
                    </div>
                    <div className="mx-auto gap-3 d-flex justify-content-center">
                        <div className="btn-round-register ">Register Now</div>
                        <div className="btn-contact">Contact Us</div>
                    </div>
                </div>
            </div>
            </div>

            <div className="AboutDiv container-xxl ">
                <div className="row mx-auto  ">
                    <div className="col-md-6 col-md-6Text col-sm-12 mx-auto my-3 ">
                        <div className="title text-black">
                            <span className="left_trangle"></span> {data.title}
                        </div>
                        <p>
                           {data.content}
                        </p>
                        <div className="btn-round-blue">Explore More</div>
                    </div>
                    <div className="col-md-6 col-sm-12 mx-auto AboutImgDiv position-relative">
                        <img src="/Pictures/contectGroup.JPG" alt="" />
                        <div className="trangle_picture-blue " style={{}}>

                        </div>
                    </div>
                </div>


                {/* for Services */}
             
            </div>
        </>
    )
}