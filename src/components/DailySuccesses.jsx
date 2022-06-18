import React, {useState} from 'react';



function DailySuccesses() {
    let dailyGoals = JSON.parse(localStorage.getItem(process.env.REACT_APP_LOCAL_STORAGE_GOALS_NAME));
    let dailySuccesses = dailyGoals.filter(goal => goal.success === true);
    

    function makeGoal(idOfSuccess) {
        dailyGoals = dailyGoals.map(goal => {
            if (goal.id === idOfSuccess) goal.success = false;
            return goal;
        })
        localStorage.setItem(process.env.REACT_APP_LOCAL_STORAGE_GOALS_NAME, JSON.stringify(dailyGoals));
        document.location.reload();
    }

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