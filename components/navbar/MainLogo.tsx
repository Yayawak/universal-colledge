import Image from "next/image"

const MainLogo = () => {
    return (
        <>
            {/* <div className="flex items-center justify-center bg-#BF7132"> */}
            <div className="flex items-center justify-center bg-yellow-100 m-3 p-2 h-20">
                <div className="flex items-center">
                    <Image
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUCwTzmHxU6N8oh_vb9qxQyE-hEss9zUKDyzMwnpKZDxBWb-dXDoi7I47FE33wsVcpeng&usqp=CAU"
                        // src=""
                        alt="logo"
                        width={150}
                        height={150}
                        // className="rounded-full hover:animate-spin ..."
                        // className="rounded-full hover:-translate-x-0.5 motion-safe:transition"
                        // className="rounded-full hover:animate-ping motion-safe:transition"
                        className="rounded-full hover:animate-bounce motion-safe:transition"
                        // llayout="responsive"
                        // fill
                    />
                    <p className="text-5xl text-bold font-sans px-4"
                        style={{color : "#EF7133"}} >
                        Universal
                    </p>
                </div>
            </div>
        </>
    )
}

export default MainLogo
