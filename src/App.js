import './App.css';
import DailyGoalsHeader from './components/DailyGoalsHeader';
import DailyGoals from './components/DailyGoals';
import DailySuccessesHeader from './components/DailySuccessesHeader';
import DailySuccesses from './components/DailySuccesses';

function App() {
  return (
    <div className="App">
      <DailyGoalsHeader />
      <DailyGoals />
      <DailySuccessesHeader />
      <DailySuccesses />
    </div>
  );
}

export default App;
