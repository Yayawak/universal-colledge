import { ReactElement, useState } from "react";
import { ItemBoxInterface } from "./ItemBoxTypes";
import { NavbarReducerEnum } from "./NavbarReducerEnum";

export type NavbarState = {
    minorNavbar: ReactElement
    currentComponent: ReactElement
    isSelected: boolean;
}
export type NavbarAction = {
    // type: string;
    type: NavbarReducerEnum;
    // payload?: any;
    // payload: NavbarItemInterface;
    payload: {
        minorNavBar?: ReactElement,
        // component: NavbarItemInterface,
        navbarItem?: NavbarItemInterface,
    }

}

// useState<NavbarState>();
export type NavbarContextType = {
    state: NavbarState;
    // state: typeof useState<NavbarState | null>,
    // action: NavbarAction;
    dispatch: React.Dispatch<NavbarAction>
}

export interface NavbarItemInterface extends ItemBoxInterface {
    component: ReactElement
}
