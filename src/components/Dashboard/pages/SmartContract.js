import 'highlight.js/styles/monokai-sublime.css';

import { useState, useEffect } from 'react';
import contract from "./../../../chain-info/contracts/PaidPromotion.txt"

function SmartContract() {
    var hljs = require('highlight.js/lib/core.js');
    var hljsDefineSolidity = require('highlightjs-solidity');



    const [textFileContent, setTextFileContent] = useState('');

    useEffect(() => {
        fetch(contract)
            .then(response => response.text())
            .then(data => setTextFileContent(data));
        console.log(textFileContent)
    }, []);

    hljsDefineSolidity(hljs);
    hljs.initHighlightingOnLoad();
    return (
        <div style={{ width: '800px', overflow: 'auto', maxHeight: '36rem', whiteSpace: 'pre-wrap', marginTop: "66px" }}>
            {/* <code class="language-solidity hljs" data-lang="solidity">
                <span class="hljs-comment">// contracts/MyNFT.sol</span><br />
                <span class="hljs-comment">// SPDX-License-Identifier: MIT</span><br /><br />

                <span class="hljs-meta">
                    <span class="hljs-keyword">pragma</span>
                    <span class="hljs-keyword">solidity</span>
                    "^0.8.0;"
                </span>

            </code> */}
            <pre class="highlightjs highlight" >
                <code class="language-solidity hljs" data-lang="solidity">
                    {textFileContent}
                </code>
            </pre>
        </div >
    );
}

export default SmartContract;