import React from 'react';

const Explanation = (props) => {

    return (
        <div>
            <hr Style="height:4px;border-width:0;color:red;background-color:red"></hr>
            <h2>Reason for Fail status</h2>
            {props.reason.map((fail) =>
                <ul>{fail}</ul>
            )}
            <hr Style="height:4px;border-width:0;color:red;background-color:red"></hr>
        </div>

    );
}

export default Explanation;