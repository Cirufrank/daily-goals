import React, {useState} from 'react';

function DailyGoals() {
    
    const [dailyGoals, setDailyGoals] = useState(() => {
        const goalsFromStorage = JSON.parse(localStorage.getItem(process.env.REACT_APP_LOCAL_STORAGE_GOALS_NAME)) ||[];

    localStorage.setItem(process.env.REACT_APP_LOCAL_STORAGE_GOALS_NAME, JSON.stringify(goalsFromStorage))
    return goalsFromStorage
    });


    

    const [currentGoalId, setCurrentGoalId] = useState(1);
    const [goalInput, setGoalInput] = useState('');
    

    function addGoal(event) {
        event.preventDefault();
        if (goalInput.trim().length === 0) return
        const newGoal = {
            id: currentGoalId,
            key: currentGoalId,
            goal: goalInput
        }
        setDailyGoals(
            [...dailyGoals, newGoal]);
        localStorage.setItem(process.env.REACT_APP_LOCAL_STORAGE_GOALS_NAME, JSON.stringify([...dailyGoals, newGoal]))
        setGoalInput('');
        setCurrentGoalId(prevId => prevId + 1);
    }

    function deleteGoal(idOfGoal) {
        const newDailyGoals = dailyGoals.filter(goal => goal.id !== idOfGoal);
        setDailyGoals(newDailyGoals)
        localStorage.setItem(process.env.REACT_APP_LOCAL_STORAGE_GOALS_NAME, JSON.stringify(newDailyGoals))
    }

    function handleInput(event) {
        setGoalInput(event.target.value)
    }

    return (
        <section>
            <div>
                <input name="goal" type="text" placeholder="Win the day" onChange={handleInput} value={goalInput}></input>
                <button role="submit" onClick={addGoal}>Add Goal</button>
            </div>
            {
                dailyGoals.map((goal) => (
                        <div className="singleGoalsContainer" id={goal.id} key={goal.id}>
                            <span className="goalText">{goal.goal}</span>
                            <div className="singleGoalEmojiContainer pageEndPadding">
                                <span className="emoji">☑</span>
                                <span className="emoji" onClick={() => deleteGoal(goal.id)}>❌</span>
                                <span className="emoji">✏</span>
                            </div>
                        </div>
                    )
                )
            }
        </section>
    )
}


export default DailyGoals;