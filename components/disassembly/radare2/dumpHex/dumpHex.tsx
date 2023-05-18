import "@/styles/globals.css"
import { ImageCustom } from "@/components/universals/ImageCustom"

const DumpHex = () => {
    return (
        <>
            <p className="text-lg rounded bg-green-500 m-3 px-2">
                Dump hex : px (print x : x = hex)
            </p>
            <p className="text-6xl">
                Ship hai
            </p>
            <p>
                ดูบล็อคเมมตรงนั้นว่ามี content ยังไงบ้าง
                แสดงเป็นรูปแบบ Hex
            </p>
            <ImageCustom src="https://www.goldencode.com/jta/docs/content/rpt_hexdump2.jpg" />
        </>
    )
}

export default DumpHex;
