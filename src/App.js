import './App.css';
import DailyGoalsHeader from './components/DailyGoalsHeader';
import DailyGoals from './components/DailyGoals';
import DailySuccessesHeader from './components/DailySuccessesHeader';
import DailySuccesses from './components/DailySuccesses';
import DailyGoalsFooter from './components/DailyGoalsFooter';
import React, {useRef} from 'react';

function App(props) {
  //This provides a reference that we can give to our div with a class of 'App' in order to pass this content to our useReactToPrint 'handlePrint' function within the DailyGoalsHeader component, so that when the print button is clicked the page can be printed
  const componentRef = useRef();
  return (
    <div className="App" ref={componentRef}>
      <DailyGoalsHeader content={componentRef} />
      <DailyGoals />
      <DailySuccessesHeader />
      <DailySuccesses />
      <DailyGoalsFooter />
    </div>
  );
}

export default App;
