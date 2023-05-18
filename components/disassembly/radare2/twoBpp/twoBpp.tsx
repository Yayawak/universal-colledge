import {ImageCustom} from "../../../universals/ImageCustom"

const NBitsPerPixel = () => {
    return (
        <>
            <div className="inline-flex">
                <h1 className="mr-2 text-xl text-extrabold">
                    2 Bits per Pixel
                </h1>
                <button className="bg-blue-500 hover:bg-blue-700
                    text-white font-bold py-1 px-2 rounded
                ">
                    p2
                </button>
            </div>
            {/* <p className="text-xl"></p> */}
            <h6 className="font-mono text-sm">
                คืออยากจะแก้บัคแบบเท่ๆเทพๆดูเบียวๆ เลยไปเจอ debugger ระดับเก่าพ่อเรียกปู่
                มันคือพวก disassembly เลยแหละซึ่งตัวนี้มันมีชื่อว่า
            </h6>
            <h4 className="text-bold"> radare2 </h4>
            <br />
            <p className="text-lg"> Indexed color </p>
            <p className="text-sm">
                <p>
                    คือปกติภาพในคอมอ่ะ แต่ละช่อง entry เราจะเก็บค่าสีไปเลย
                    เช่นสีเขียวๆหน่อยก็เก็บเป็น [1, 255, 2]
                </p>
                <p>
                    แต่ว่าสำหรับ indexed color มันแค่เก็บเลขโง่ๆที่ใช้แทนสีซักสี
                </p>
            </p>
            <p className="text-base text-bold">Indexed Image</p>
            <ImageCustom src="https://sneslab.net/mw/images/c/c6/saa03_1bpp.png" />
            <ImageCustom src="/r2->print2.png" />
            <ImageCustom src="https://sneslab.net/mw/images/4/41/saa03_2bpp.png" />

            <p>
                read more :
                <a href="https://sneslab.net/wiki/Graphics_Format">
                    orignal forum
                </a>
            </p>
        </>
    )}

export default NBitsPerPixel
