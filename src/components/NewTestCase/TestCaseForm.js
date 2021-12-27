import React, { useState } from 'react';

import './TestCaseForm.css';

const TestCaseForm = (props) => {
    const [enteredDsTransId, setEnteredDsTransId] = useState('');
    const [enteredCtlNum, setEnteredCtlNum] = useState('');

    const dsTransIdChangeHandler = (event) => {
        setEnteredDsTransId(event.target.value);
    };

    const ctlNumChangeHandler = (event) => {
        setEnteredCtlNum(event.target.value);
    };

    const submitHandler = (event) => {
        event.preventDefault();

        const testcaseData = {
            dsTransId: enteredDsTransId,
            ctlNum: enteredCtlNum,
            status: "un-verified"
        };
        props.onSaveTestCaseData(testcaseData);
        setEnteredDsTransId('');
        setEnteredCtlNum(testcaseData.ctlNum);
    };

    return (
        <form onSubmit={submitHandler}>
            <div className='new-testcase__controls'>
                <div className='new-testcase__control'>
                    <label>CTL Number</label>
                    <input
                        type='number'
                        min='1'
                        step='1'
                        value={enteredCtlNum}
                        onChange={ctlNumChangeHandler}
                    />
                </div>
                <div className='new-testcase__control'>
                    <label>DS Transaction ID</label>
                    <input
                        type='text'
                        value={enteredDsTransId}
                        onChange={dsTransIdChangeHandler}
                    />
                </div>
                <div className='new-testcase__control'>
                    <button type='submit'>Verify TestCase</button>
                </div>
            </div>
        </form >
    );
};

export default TestCaseForm;