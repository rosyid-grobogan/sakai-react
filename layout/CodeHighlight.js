import React, { useEffect, useRef } from 'react';
import Prism from 'prismjs/components/prism-core';
import 'prismjs/components/prism-clike';
import 'prismjs/components/prism-markup';
import 'prismjs/components/prism-jsx';
import 'prismjs/components/prism-javascript';
import 'prismjs/components/prism-css';
import 'prismjs/components/prism-scss';

export default function CodeHighlight(props) {

    const codeElement = useRef();
    const languageClassName = `language-${props.lang || 'jsx'}`;

    useEffect(() => {
        window.Prism.highlightElement(codeElement.current);
    }, []);

    return (
        <pre style={props.style}>
            <code ref={codeElement} className={languageClassName}>
                {props.children}&nbsp;
                </code>
        </pre>
    );
}
