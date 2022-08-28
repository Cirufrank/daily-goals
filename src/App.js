import './App.css';
import DailyGoalsHeader from './components/DailyGoalsHeader';
import DailyGoals from './components/DailyGoals';
import DailySuccessesHeader from './components/DailySuccessesHeader';
import DailySuccesses from './components/DailySuccesses';
import DailyGoalsFooter from './components/DailyGoalsFooter';

function App() {
  return (
    <div className="App">
      <DailyGoalsHeader />
      <DailyGoals />
      <DailySuccessesHeader />
      <DailySuccesses />
      <DailyGoalsFooter />
    </div>
  );
}

export default App;
