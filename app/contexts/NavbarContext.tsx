import { createContext, useContext } from "react";
import { NavbarContextType, NavbarState } from "../typing/NavbarTypes";
import { NavbarItems } from "@/components/navbar/NavbarItemsData";

// console.log("from NavbarContext")
// console.log(NavbarItems[0].name);

export const initialNavbarState : NavbarState= {
    minorNavbar: <>DEFAULT MINOR NAV</>,
    currentComponent: NavbarItems[0].component,
    isSelected: true,
}

export const NavbarContext = createContext<NavbarContextType>({
    state: initialNavbarState,
    dispatch: () => {},
});

export const useNavContext = () => useContext(NavbarContext);
