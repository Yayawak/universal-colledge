import { useNavContext } from "@/app/contexts/NavbarContext"
import { NavbarReducerEnum } from "@/app/typing/NavbarReducerEnum";
import Image from "next/image"
import { useEffect } from "react";

const Notes = () => {
    const {state, dispatch} = useNavContext();
    useEffect(() => {
        dispatch({
            type: NavbarReducerEnum.SET_MINOR_NAV,
            payload: {
                minorNavBar:
                <>
                    This is minor from notes
                </>
            }
        })
    // }, [dispatch])
    })
    return (
        <>
            <h1>
                Notes
            </h1>
            <p className="text-sm md:text-base">
                วันนี้ 15 / May / 23 01:33 น่าเบื่อมากๆ พรุ่งนี้ผมกำลังจะสอบ สถาปัตยกรรมคอม
                (computer architecture) แล้วบรรยากาศชวนง่วงมากๆ ความเย็นจากปรอยฝน
                งานที่ยังไม่เสร็จจากมหาลัย 42 บางกอก งานเว็บ เรื่องเพื่อนก็ด้วยอยากมีคนสนิทจริงๆจังๆกว่านี้
                คิดไอเดียงานที่อยากเขียนก็ไม่ออก เอือยมากครับ อ่านเอกสารไปเรื่อยจนสุดท้ายยย ก็วนกลับมาสู่การเขียน next
                อยากเขียน blog แบบ custom โดยอยู่ๆตอนนี้ก็คิดถึงพี่ phyblas ที่เป็นแรงบัลดาลใจให้ผมเขียน blog ในตอนนี้
            </p>
            {/* <Image
                src="//boring_argh_day.png"
                alt="img"
                width={3}
                height={3}
            /> */}

        </>
    )
}

export default Notes
