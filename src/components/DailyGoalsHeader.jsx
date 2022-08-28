import React from 'react';

function DailyGoalsHeader() {
    //This removes all goals from local storage by deleting the 'dailyGoals' variable from local storage then reloading the page whenever the reset button is clicked
    function resetLocalStorage() {
        localStorage.removeItem(process.env.REACT_APP_LOCAL_STORAGE_GOALS_NAME);
        document.location.reload();
    }
    
    return (
        <header>
            <div>
                <h1>DAILY GOALS</h1>
                <span className='emoji'>📝</span>
            </div>
            <span className='emoji pageEndPadding' id="refreshPage" onClick={resetLocalStorage}>🔃</span>
        </header>
    )
}

export default DailyGoalsHeader;