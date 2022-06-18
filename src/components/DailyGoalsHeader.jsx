import React from 'react';

function DailyGoalsHeader() {
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