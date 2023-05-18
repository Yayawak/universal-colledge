import { NavbarReducerEnum } from "../typing/NavbarReducerEnum";
import { NavbarAction, NavbarState } from "../typing/NavbarTypes";

export const navbarReducer = (state:NavbarState, action:NavbarAction): NavbarState => {
    switch (action.type) {
        case NavbarReducerEnum.CHANGE_CURRENT_COMPONENT:
            console.log("current main section COMPONENT changed !!!");
            if (action.payload.navbarItem)
                return {
                    ...state,
                    // currentComponent: action.payload.component,
                    currentComponent: action.payload.navbarItem.component,
                    // currentComponent: action.payload.navbarItem?.component || state.currentComponent,
                    isSelected: !state.isSelected,
                };
            else {
                console.log("no payload navbarItem provided")
            }
        case NavbarReducerEnum.SET_MINOR_NAV:
            console.log("set minor navbar")
            if (action.payload.minorNavBar) {
                return {
                    ...state,
                    minorNavbar: action.payload.minorNavBar
                    // minorNavbar: action.payload.minorNavBar !?? state.minorNavbar
                }
            } else {
                console.log("no minor navbar provided")
            }

        default:
            return state;
    }
}
