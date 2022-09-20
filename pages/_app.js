import React, { useState, useEffect } from "react";
import "primereact/resources/primereact.css";
import "primeicons/primeicons.css";
import "primeflex/primeflex.css";
import "prismjs/themes/prism-coy.css";
import "../assets/demo/flags/flags.css";
import "../assets/demo/Demos.scss";
import "../assets/layout/layout.scss";
import Layout from "../components/layout/layout";

import { useRouter } from "next/router";

export default function MyApp({ Component, pageProps }) {
    const router = useRouter();

    useEffect(() => {
        const handleRouteChange = (url, { shallow }) => {
            console.log(`App is changing to ${url} ${shallow ? "with" : "without"} shallow routing`);
        };

        router.events.on("routeChangeStart", handleRouteChange);

        // If the component is unmounted, unsubscribe
        // from the event with the `off` method:
        return () => {
            router.events.off("routeChangeStart", handleRouteChange);
        };
    }, []);

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
