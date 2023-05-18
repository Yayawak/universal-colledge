'use client'

import Image from "next/image"
import { ImageCustom } from "../universals/ImageCustom"
import React, { useContext, useEffect, useReducer, useState } from "react";
import Radare2 from "@/components/disassembly/radare2";
import Link from "next/link";
import { NavbarContext, useNavContext } from "@/app/contexts/NavbarContext";
import { ItemBoxInterface } from "@/app/typing/ItemBoxTypes";
import { ItemBox } from "../universals/ItemBox";
import { NavbarItemInterface } from "@/app/typing/NavbarTypes";
import { NavbarItems } from "./NavbarItemsData";
import Notes from "../notes/Notes";
import MainLogo from "./MainLogo";
import { NavbarReducerEnum } from "@/app/typing/NavbarReducerEnum";



const Navbar = () => {
    const navbarContext = useNavContext();
    const {isSelected, currentComponent} = navbarContext.state;
    const handleClick = (navbarItem: NavbarItemInterface) => {
        navbarContext.dispatch({
            type: NavbarReducerEnum.CHANGE_CURRENT_COMPONENT,
            payload: {
                navbarItem: navbarItem,
            }
        })
        // console.log("navbar changed." + navbarItem)
    }
    useEffect(() => {
        console.log("changed minor navbar")
    }, [navbarContext])
    // }, [navbarContext.state])
    // }, [navbarContext.state.minorNavbar])
    return (
        <>
            <MainLogo />
            <div className="inline-flex" id="major-nav-bar">
                {
                    NavbarItems.map((item) => (
                        <div key={item.id}
                            className={"mx-4 p-2 bg-orange-300 rounded-xl inline-flex hover:bg-red-500"}
                            // className={"mx-4 p-2 bg-orange-300 rounded-xl inline-flex hover:bg-red-500 hover:animate-spin ..."}
                            // className={"mx-4 p-2 bg-orange-300 rounded-xl inline-flex hover:bg-fuchsia-500"}
                            onClick={() => handleClick(item) }
                        >
                            <Image
                                src={item.image_url || ""}
                                width={25}
                                height={25}
                                alt="icon"
                                className="rounded-full mx-1
                                    motion-reduce:hidden
                                    hover:animate-spin
                                "
                            />
                            <p className={
                                item.component === currentComponent ??
                                    isSelected ? "underline" : ""
                            }>
                                {item.name}
                            </p>
                        </div>
                    ))
                }
            </div>
            {/* // ! no result : no minorNavbar visible */}
            <br />
            <div className="inline-flex" id="minor-nav-bar">
            {
                navbarContext.state.minorNavbar
                // currentComponent
            }
            </div>
        </>
    )
}

export default Navbar
