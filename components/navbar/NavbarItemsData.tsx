import Radare2 from "@/components/disassembly/radare2";
import NBitsPerPixel from "@/components/disassembly/radare2/twoBpp/twoBpp";
import { ItemBoxInterface } from "@/app/typing/ItemBoxTypes";
import { NavbarItemInterface } from "@/app/typing/NavbarTypes";
import Notes from "../notes/Notes";

export const NavbarItems : NavbarItemInterface[] = [
    {
        id: 88,
        name: "Notes",
        component: <Notes />,
        image_url: "https://static.wikia.nocookie.net/dota2_gamepedia/images/4/46/Town_Portal_Scroll_icon.png/revision/latest/scale-to-width-down/60?cb=20160530173822"
    },
    {
        id: 99,
        name: "Radare2",
        // ! bug
        component: <Radare2 />,
        // component: <NBitsPerPixel />,
        // component: <Notes />,
        image_url: "https://i.stack.imgur.com/5ROMC.png"
    },
]
