import React, { useContext } from "react";
import { LayoutContext } from "./layoutcontext";

export default function AppFooter() {
    const { layoutColorMode } = useContext(LayoutContext);

    return (
        <div className="layout-footer">
            <img src={layoutColorMode === "light" ? "/layout/images/logo-dark.svg" : "/layout/images/logo-white.svg"} alt="Logo" height="20" className="mr-2" />
            by
            <span className="font-medium ml-2">PrimeReact</span>
        </div>
    );
}
