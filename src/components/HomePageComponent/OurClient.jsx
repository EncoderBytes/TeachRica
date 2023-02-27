import { useState } from "react";
export default function OurClient() {
    const [client, setClient] = useState([
        {
            Name: "Dr. Shafi",
            feedback: "I highly recomend Teachrica tuition service, it has helped my child excel in school.",
            Stars: ""
        },
        {
            Name: "Mrs. Nadeem",
            feedback: "I am extremely satisfied with the service and the improvement in my child's grades",
            Stars: ""
        },
        {
            Name: "Zara Khan",
            feedback: "I am so grateful for the personalized lesson plans and support form tutor.",
            Stars: ""
        }
    ])
    return (
        <>
            <div className="container-fluid OurClient" id="Testimonial">
                <div className="Contact_div">
                    <h1 className="text-center">
                        <span className="left_trangle"></span> What Our Client Say About Us
                    </h1>
                    <p className="text-center">
                        Our valuable clients are our assets we value there feedback,
                        suggestions and question. The follwoing are few feedbacks
                        from our clients.
                    </p>
                </div>

                <div className=" container feedbacks my-5">
                    {
                        client.map((d, i) => {
                            return (
                                <div className="feedback position-relative" key={i}>
                                    <div className={i === 1 ? "card borderBottom" : "card"}>
                                        <div className="quotation">
                                            <i className="bi bi-quote"></i>
                                        </div>
                                        <div className="card-body">
                                            <div className="card-title text-center fs-4 fw-bold">
                                                {d.Name}
                                            </div>
                                            <p className="py-3 card-text w-100 text-center">
                                                {d.feedback}
                                            </p>
                                            <div className="d-flex justify-content-center align-items-center gap-1 ">
                                                <i className="bi bi-star-fill text-warning"></i>
                                                <i className="bi bi-star-fill text-warning"></i>
                                                <i className="bi bi-star-fill text-warning"></i>
                                                <i className="bi bi-star-fill text-warning"></i>
                                                <i className="bi bi-star text-warning"></i>
                                            </div>
                                        </div>
                                    </div>

                                    {
                                        i === 0 ? <>

                                            <div className="trangleTopLeft">

                                            </div>
                                        </> :
                                            i === 2 ? <>
                                                <div className="trangleTopRight"></div>
                                            </> : ""
                                    }
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </>
    )
}