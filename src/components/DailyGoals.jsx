import React, {useState} from 'react';

function DailyGoals() {
    const FIRST_GOAL_ID = 1;
    
    const [dailyGoals, setDailyGoals] = useState(() => {
        //Grabs goals from local storage and if no goals are found, defaults to an empty array
        const goalsFromStorage = JSON.parse(localStorage.getItem(process.env.REACT_APP_LOCAL_STORAGE_GOALS_NAME)) ||[];
        //Sets the local storage variable named 'dailyGoals' to the value of the goals found or an empty array
        //This is done to account for no goals being present and making sure the variable has been created in the event a user has not visited this site before
        localStorage.setItem(process.env.REACT_APP_LOCAL_STORAGE_GOALS_NAME, JSON.stringify(goalsFromStorage))
        //intializes the dailyGoals variable state to the goals from storage or an empty array
        return goalsFromStorage
    });


    
    //Sets state for the next create goal's ID by counting the amount of current daily goals and incrementing thsi by one
    const [currentGoalId, setCurrentGoalId] = useState(() => {
        if (dailyGoals.length > 0) {
            return Number(dailyGoals[dailyGoals.length - 1].id) + 1
        } else {
            return FIRST_GOAL_ID
            }   
        })

    //Sets tracking of state for the input value whenever a person is tracking daily goals
    const [goalInput, setGoalInput] = useState('');
    
    //Adds goal whenever a user presses the add goal button
    function addGoal(event) {
        event.preventDefault();
        if (goalInput.trim().length === 0) return
        const newGoal = {
            id: currentGoalId,
            key: currentGoalId,
            goal: goalInput,
            success: false
        }

        //Updates the state of the daily goals to now be an array that includes the new daily goals
        setDailyGoals(
            [...dailyGoals, newGoal]);
            localStorage.setItem(process.env.REACT_APP_LOCAL_STORAGE_GOALS_NAME, JSON.stringify([...dailyGoals, newGoal]))
            setGoalInput('');
             setCurrentGoalId(prevId => prevId + 1);
    }

    //Deletes a goal from the daily goals array whenever the delete button next to a goals is pressed
    function deleteGoal(idOfGoal) {
        const newDailyGoals = dailyGoals.filter(goal => goal.id !== idOfGoal);
        setDailyGoals(newDailyGoals)
        localStorage.setItem(process.env.REACT_APP_LOCAL_STORAGE_GOALS_NAME, JSON.stringify(newDailyGoals))
    }

    //Sets the success property of the goal specified to true whenever a user has completed a goal
    function makeSuccess(idOfGoal) {
        const updatedDailyGoals = dailyGoals.map(goal => {
           if (goal.id === idOfGoal) {
            goal.success = true
           } 
           return goal;
        })
        setDailyGoals(updatedDailyGoals)
        localStorage.setItem(process.env.REACT_APP_LOCAL_STORAGE_GOALS_NAME, JSON.stringify(updatedDailyGoals))
        document.location.reload();
    }

    //Deletes a goals from the daily goals present, and takes the text of the goals and places it as the value of the input fields for a goals so that users can change this input and re-add the goal
    function updateGoal(idOfGoal) {
        const goalToUpdate = dailyGoals.filter(goal => goal.id === idOfGoal)[0];
        setGoalInput(goalToUpdate.goal);
        deleteGoal(idOfGoal)
    }

    //This updates the value of the input field to the current input provided by the user
    function handleInput(event) {
        setGoalInput(event.target.value)
    }

    //This returns the goals that have not yet been completed
    return (
        <section>
            <div>
                <input name="goal" type="text" placeholder="Win the day" onChange={handleInput} value={goalInput}></input>
                <button role="submit" onClick={addGoal}>Add Goal</button>
            </div>
            {
                dailyGoals.filter(goal => goal.success !== true).map((goal) => (
                        <div className="singleGoalsContainer" id={goal.id} key={goal.id}>
                            <span className="goalText">{goal.goal}</span>
                            <div className="singleGoalEmojiContainer pageEndPadding">
                                <span className="emoji" onClick={() =>makeSuccess(goal.id)}>☑</span>
                                <span className="emoji" onClick={() => deleteGoal(goal.id)}>❌</span>
                                <span className="emoji" onClick={() => updateGoal(goal.id)}>✏</span>
                            </div>
                        </div>
                    )
                )
            }
        </section>
    )
}


export default DailyGoals;