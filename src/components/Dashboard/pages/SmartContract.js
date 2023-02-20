import SyntaxHighlighter from 'react-syntax-highlighter';
import { tomorrowNightBright } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import { useState, useEffect } from 'react';
import contract from "./../../../chain-info/contracts/PaidPromotion.txt"

function SmartContract() {






    const [textFileContent, setTextFileContent] = useState('');

    useEffect(() => {
        fetch(contract)
            .then(response => response.text())
            .then(data => setTextFileContent(data));
        console.log(textFileContent)
    }, []);





    return (
        <div className='code' >
            <SyntaxHighlighter language="java" style={tomorrowNightBright}>
                {textFileContent}
            </SyntaxHighlighter>
        </div >
    );
}

export default SmartContract;