import React, { useState } from 'react';

import TestCaseForm from './TestCaseForm';
import './NewTestCase.css';

async function fetchTestResultsHandler(url, dsTransId, ctl, setIsLoading) {
    setIsLoading(true);
    console.log("Just before fetch");
    const apiUrl = 'https://' + url + '/verify?dstransid=' + dsTransId + '&ctl=' + ctl;
    console.log(apiUrl);
    let results = null;
    await fetch(apiUrl)
        .then((response) => {
            return response.json();
        })
        .then((data) => {
            results = JSON.parse(data);
            //TO DO - utilize all these values in Parents
            results.dsTransId = dsTransId;
            results.ctl = ctl;
            results.authCode = url;
        })
        .catch((error) => {
            console.log(error.message);
            results = null;
        });
    setIsLoading(false);
    return results;
}

const locateFailure = (testVerificationResults) => {
    // Read through the Message type for a false
    // return failure string
    let failures = [''];
    let count = 0;
    // TODO - move msgTypes to a constant file - low priority
    const msgTypes = ['AReq', 'ARes', 'RReq', 'RRes', 'Erro'];
    for (let i in msgTypes) {
        let msgType = msgTypes[i];
        for (let key in testVerificationResults) {
            if (key === msgType) {
                for (let subkey in testVerificationResults[msgType]) {
                    if (!testVerificationResults[msgType][subkey]) {
                        failures[count++] = (msgType + " " + subkey + " ");
                    }
                }
            }
        }
    }
    return failures;
};

const NewTestCase = (props) => {
    const [isLoading, setIsLoading] = useState(false);

    const saveTestCaseDataHandler = async (enteredTestCaseData) => {
        let testVerificationResults = await fetchTestResultsHandler(
            enteredTestCaseData.backendUrl, enteredTestCaseData.dsTransId,
            enteredTestCaseData.ctlNum, setIsLoading);

        if (testVerificationResults) {
            testVerificationResults.ctl = enteredTestCaseData.ctlNum;
            testVerificationResults.dsTransId = enteredTestCaseData.dsTransId;
            console.log(testVerificationResults.status);
            if (testVerificationResults.status === "Fail") {
                testVerificationResults.reason = locateFailure(testVerificationResults);
            }
            props.onAddTestCase(testVerificationResults);
        }
    };

    return (
        <div className='new-testcase'>
            {!isLoading && < TestCaseForm onSaveTestCaseData={saveTestCaseDataHandler} />}
            {isLoading && <p>Running Verification...</p>}
        </div>
    );
};

export default NewTestCase;