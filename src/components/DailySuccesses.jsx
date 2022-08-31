import React, {useState} from 'react';

function DailySuccesses() {
    //This grabs all of the daily goals from the local storage 'dailyGoals' local storage item
    let dailyGoals = JSON.parse(localStorage.getItem(process.env.REACT_APP_LOCAL_STORAGE_GOALS_NAME));
    //This intiializes the dailySuccesses variable to an array of daily goal object that have been completed
    let dailySuccesses = dailyGoals.filter(goal => goal.success === true);
    
    //This changes a successfully completed goal back to a goal to complete if a user presses the '-' button
    function makeGoal(idOfSuccess) {
        dailyGoals = dailyGoals.map(goal => {
            if (goal.id === idOfSuccess) goal.success = false;
            return goal;
        })
        localStorage.setItem(process.env.REACT_APP_LOCAL_STORAGE_GOALS_NAME, JSON.stringify(dailyGoals));
        //Reload the current page so that the daily goals are updated when the page it re-rendered
        document.location.reload();
    }

    //Returns the goals that have been successfully completed
    return (
        <section>
            {
                dailySuccesses.map(success => (
                    <div className='singleSuccessContainer' id={success.id} key={success.key}>
                        <span className='successText'>{success.goal}</span>
                        <span className='emoji pageEndPadding' onClick={() =>makeGoal(success.id)}>⤴</span>
                    </div>
                    )
                )
            }
        </section>
    )
}

export default DailySuccesses;