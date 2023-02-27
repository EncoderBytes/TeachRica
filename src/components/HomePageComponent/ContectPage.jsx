export default function () {
    return (
        <>
            <div className="Contact " id="contact">
                <div className="Contact_div">
                    <div className="items1">
                        <form action="/" method="post">
                            <div className="title text-center text-white pb-5">
                                <span className="left_trangle_yellow"></span> Contact Us Now
                            </div>
                            <div className="mb-3">
                                <input type="text" placeholder="Name" className="form-control" />
                            </div>
                            <div className="mb-3">
                                <input type="email" placeholder="Email" className="form-control" />
                            </div>

                            <div className="mb-3">
                                <textarea className="form-control" placeholder="Your Message" id="floatingTextarea" rows={"5"}></textarea>
                            </div>

                            <div className="mb-3 mx-auto text-center py-5">
                            <button type="submit" className="btn btn-submit">Submit</button>
                            </div>
                        </form>
                    </div>
                    <div className="items2">
                        <img src="/Pictures/phone.JPG" alt="" />
                    </div>
                </div>
            </div>
        </>
    )
}