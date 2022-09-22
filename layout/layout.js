import React, { useRef, useContext } from "react";
import Head from "next/head";
import { CSSTransition } from "react-transition-group";
import AppTopbar from "./AppTopbar";
import AppFooter from "./AppFooter";
import AppMenu from "./AppMenu";
import AppConfig from "./AppConfig";
import ScrollToTop from "../demo/utils/ScrollToTop";
import PrimeReact from "primereact/api";
import { Tooltip } from "primereact/tooltip";
import getConfig from "next/config";
import { LayoutContext } from "./layoutcontext";

function Layout({ children }) {
    const { wrapperClass, onWrapperClick, onSidebarClick, mobileMenuActive } = useContext(LayoutContext);
    const copyTooltipRef = useRef();
    const contextPath = getConfig().publicRuntimeConfig.contextPath;
    PrimeReact.ripple = true;

    return (
        <>
            <ScrollToTop>
                <Head>
                    <base href={contextPath}></base>
                    <title>Sakai React with NextJS</title>
                    <meta charSet="UTF-8" />
                    <link rel="icon" href={`${contextPath}/favicon.ico`} type="image/x-icon"></link>
                    {/* eslint-disable */}
                    <script src={`${contextPath}/layout/scripts/prism/prism.js`} data-manual></script>
                    {/* eslint-enable */}
                </Head>

                <div className={wrapperClass} onClick={onWrapperClick}>
                    <Tooltip ref={copyTooltipRef} target=".block-action-copy" position="bottom" content="Copied to clipboard" event="focus" />

                    <AppTopbar />

                    <div className="layout-sidebar" onClick={onSidebarClick}>
                        <AppMenu />
                    </div>

                    <div className="layout-main-container">
                        <div className="layout-main">{children}</div>

                        <AppFooter />
                    </div>
                    <AppConfig />

                    <CSSTransition classNames="layout-mask" timeout={{ enter: 200, exit: 200 }} in={mobileMenuActive} unmountOnExit>
                        <div className="layout-mask p-component-overlay"></div>
                    </CSSTransition>
                </div>
            </ScrollToTop>
        </>
    );
}

export default Layout;
