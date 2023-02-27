import { useState } from "react"
export default function About() {
    const [data, setData] = useState([
        {
            title: "Home Tuition",
            Img: "/Pictures/help1st.jpg",
            Detail: "Providing the best quilty Home Tuition service the most qualified teachers at your..."
        },
        {
            title: "Online Tuition",
            Img: "/Pictures/help2nd.jpg",
            Detail: "Get the best quality without compromising the time or location."
        },
        {
            title: "Soft Skills Courses",
            Img: "/Pictures/help3rd.jpg",
            Detail: "Courses to help your child grow into a confident, smart and well rounded."
        }
    ])
    return (
        <>
            <div className="AboutDiv container-xxl " id="about">
                <div className="row mx-auto  ">
                    <div className="col-md-6 col-md-6Text col-sm-12 mx-auto my-3 ">
                        <div className="title ">
                            <span className="left_trangle"></span> About Us
                        </div>
                        <p>
                            Teachrica offers top-level home tuition services in Peshawar and online tutors
                            throughout the globe. Hire a professional home tutor in Peshawar, either a male or female
                            instructor, for in-home tuition or online at guideway.pk. We teach the concepts so that our
                            students might excel in and out of academic education. Our at-home tutors are accomplished teachers
                            who are prepared to come to your house and instruct your children. They have knowledge of every subject. They present tuition
                            for all the prominent education systems of Peshawar and they can teach all subjects and grades
                        </p>
                        <div className="btn-round-blue">Explore More</div>
                    </div>
                    <div className="col-md-6 col-sm-12 mx-auto AboutImgDiv position-relative">
                        <img src="/Pictures/aboutUs.JPG" alt="" />
                        <div className="trangle_picture">

                        </div>
                    </div>
                </div>


                {/* for Services */}
                <div className="Services" id="service">
                    <h1 className="w-100 mt-5 text-center my-4">
                        <span className="left_trangle_yellow"></span> How Can We Help You?
                    </h1>
                    <div className="ServiceList container-xxl">

                        {
                            data.map((d, i) => {
                                return (
                                    <div className="Service " key={i}>
                                        <div className="ImgDiv overflow-hidden position-relative">
                                            <img src={d.Img} class="serviceImg"alt="" />
                                            {
                                                i === 0 ? <>
                                                    <div className="trangle_picture_small">
                                                    </div>
                                                </>:
                                                i===2?<>
                                                    <div className="trangle_picture_right_small">

                                                    </div>
                                                </>:""
                                            }
                                           
                                        </div>
                                        <div className="subtitle">{d.title}</div>
                                        {/* <p>{d.Detail}</p> */}
                                        <div className="Paragraph ">
                                            {d.Detail}
                                        </div>

                                    </div>
                                )
                            })
                        }

                    </div>

                    <div className="text-center my-5">
                    <div className="btn btn-round-blue">
                        Explore More Services
                    </div>
                    </div>
                </div>
            </div>
        </>
    )
}