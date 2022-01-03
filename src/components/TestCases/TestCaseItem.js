import React from 'react';
import Card from '../UI/Card';
import Explanation from '../NewTestCase/Explanation';
import './TestCaseItem.css';


const TestCaseItem = (props) => {
    console.log(props);
    if (props.dsTransId) {
        return (
            <Card className='testcase-item'>
                <div> status = {props.status} </div>
                <div> <h3>testcase = {props.testcase}</h3> </div>
                <div className='testcase-item__description'>
                    <h2>{props.dsTransId}</h2>
                    <h3>{props.ctl}</h3>
                </div>
                <div>
                    {props.reason && <Explanation reason={props.reason} />}
                </div>
            </Card>
        );
    }
    else {
        return <Card></Card>;
    }

}

export default TestCaseItem;