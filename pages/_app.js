import React, { useState } from "react";
import "primereact/resources/primereact.css";
import "primeicons/primeicons.css";
import "primeflex/primeflex.css";
import "prismjs/themes/prism-coy.css";
import "../styles/demo/flags/flags.css";
import "../styles/demo/Demos.scss";
import "../styles/layout/layout.scss";
import Layout from "../layout/layout";

export default function MyApp({ Component, pageProps }) {
    const [layoutColorMode, setLayoutColorMode] = useState("light");
    if (Component.getLayout) {
        return Component.getLayout(<Component {...pageProps} />);
    } else {
        return (
            <Layout layoutColorMode={layoutColorMode} setLayoutColorMode={setLayoutColorMode}>
                <Component {...pageProps} colorMode={layoutColorMode} />
            </Layout>
        );
    }
}
