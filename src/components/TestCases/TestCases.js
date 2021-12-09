import React from 'react';

import TestCaseItem from './TestCaseItem';
import Card from '../UI/Card';
import './TestCases.css';

const TestCases = (props) => {

    return (
        <div>
            <Card className='testcases'>
                {props.items.map((testcase) => (
                    <TestCaseItem
                        testcase={testcase.testcase}
                        dsTransId={testcase.dsTransId}
                        status={testcase.status}
                        ctlNum={testcase.ctlNum}
                        reason={testcase.reason}
                    />
                ))}
            </Card>
        </div>
    );
};

export default TestCases;