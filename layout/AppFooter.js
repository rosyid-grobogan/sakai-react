import React from "react";

export default function AppFooter(props) {
    return (
        <div className="layout-footer">
            <img src={props.layoutColorMode === "light" ? "/layout/images/logo-dark.svg" : "/layout/images/logo-white.svg"} alt="Logo" height="20" className="mr-2" />
            by
            <span className="font-medium ml-2">PrimeReact</span>
        </div>
    );
}
