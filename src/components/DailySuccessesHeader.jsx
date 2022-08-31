import React from 'react';

//This creates a header component for the daily wins (completed goals) to go under
function DailySuccessesHeader() {
    return (
        <header>
            <div className='successesHeaderContainer'>
                <h2>DAILY WINS</h2>
                <span className='emoji' role="img"  aria-label="A little trophy icon unicode character next to the Daily Wins header for celebrating your wins" focusable="false">🏆</span>
            </div>
        </header>
    )
}

export default DailySuccessesHeader;