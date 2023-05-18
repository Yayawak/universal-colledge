import Image from "next/image"
import React, { useContext, useEffect, useReducer, useState } from "react"
import { ItemBox } from "@/components/universals/ItemBox"
import { NavbarContext, useNavContext } from "@/app/contexts/NavbarContext"
import { ItemBoxInterface } from "@/app/typing/ItemBoxTypes"
import NBitsPerPixel from "./radare2/twoBpp/twoBpp"
import DumpHex from "./radare2/dumpHex/dumpHex"
import { NavbarItemInterface } from "@/app/typing/NavbarTypes"
import { NavbarReducerEnum } from "@/app/typing/NavbarReducerEnum"

const Radare2List : NavbarItemInterface[] = [
    {
        id: 2,
        name: "2bpp",
        component: <NBitsPerPixel />,
        // image_url: "https://computerscience.chemeketa.edu/cs160Reader/_images/face.png"
        // image_url: "https://cdn.cambridgeincolour.com/images/tutorials/bitdepth_08bpp_580.png"
        image_url: "https://slideplayer.com/slide/11955720/67/images/7/Increasing+the+number+of+colours.jpg",
        bg_color: "rgb(50, 0, 230, 0.5)"
    },
    {
        id: 3,
        name: "hex dump",
        component: <DumpHex />,
        image_url: "https://static.vecteezy.com/system/resources/thumbnails/008/075/499/small/initial-letter-o-hexagon-logo-template-suitable-for-businesses-and-product-names-vector.jpg"
    },
]


const MinorNavbar = () => {
    const {state, dispatch} = useNavContext();
    const handleClick = (newNvBItem: NavbarItemInterface) => {
        console.log("clicking on radare2 sub navbar : \t" + newNvBItem.name);
        dispatch({
            type: NavbarReducerEnum.CHANGE_CURRENT_COMPONENT,
            payload: {
                navbarItem: newNvBItem,
            },
        });
    }
    return (
        <>
            {
                Radare2List.map(item => (
                    <div key={item.id}
                        className="inline-flex "
                        onClick={() => {handleClick(item)}}
                    >
                        <ItemBox
                            item={item}
                        />
                    </div>
                ))
            }
        </>
    )
}

const Radare2 = () => {
    // ! bug no inital value
    // const {state, dispatch} = useNavContext();
    // useEffect(() => {
    //     console.log("use effect from radare2 activated! ")
    //     dispatch({
    //         type: NavbarReducerEnum.SET_MINOR_NAV,
    //         payload: {
    //             minorNavBar: <MinorNavbar />
    //         }
    //     })
    // // }, [dispatch])
    // },)
    return (
        <>
            <MinorNavbar />
            <br />
            <br />
            {
            // todo : sub component of radare2
                // state.
                // state.currentComponent
                // state
            }
        </>
    )
}

export default Radare2;
