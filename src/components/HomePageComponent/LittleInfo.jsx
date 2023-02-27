import { useState } from "react";

export default function LittleInfo() {
    const [data, setData] = useState([
        {
            title: "Cities",
            count: "05"
        },
        {
            title: "Years in Market",
            count: "02"
        },
        {
            title: "Student",
            count: "3000+"
        },
        {
            title: "Teachers",
            count: "200+"
        }
    ])
    return (
        <>
            <div className="mb-5">
            <div className="d-flex justify-content-end align-items-end">
                <img src="/Pictures/trangle.JPG" className="trangle" alt="" />

            </div>
            <div className="Flex-Item_count justify-content-evenly position-relative">
                {
                    data.map((d, i) => {
                        return (
                            <div className="item " key={i}>
                                <span className="Count fs-4">{d.count} </span> <span className="itemTitle fs-5" style={{ color: "whitesmoke" }}>{d.title}</span>
                            </div>
                        )
                    })
                }



            </div>
            </div>
        </>
    )
}