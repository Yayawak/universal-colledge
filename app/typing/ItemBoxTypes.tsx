import { ReactElement } from "react";

export interface ItemBoxInterface {
    id: number;
    name: string;
    // component: React.JSX.Element;
    // component: ReactElement;
    // path: string;
    image_url: string;
    bg_color?: string;
}
