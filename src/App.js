import React, { useState } from 'react';
import NewTestCase from './components/NewTestCase/NewTestCase';
import TestCases from './components/TestCases/TestCases';


const EMPTY = [{}];

const App = () => {
  const [testcases, setTestCases] = useState(EMPTY);

  const addTestCaseHandler = (testcase) => {
    console.log(testcase.dsTransId);
    setTestCases((prevTestCases) => {
      return [testcase, ...prevTestCases];
    });
  };


  return (
    <div>
      <NewTestCase onAddTestCase={addTestCaseHandler} />
      {testcases && <TestCases items={testcases} />}
    </div>
  );
}

export default App;
