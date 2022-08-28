import React from 'react';

//This creates a header component for the daily wins (completed goals) to go under
function DailySuccessesHeader() {
    return (
        <header>
            <div className='successesHeaderContainer'>
                <h2>DAILY WINS</h2>
                <span className='emoji'>🏆</span>
            </div>
        </header>
    )
}

export default DailySuccessesHeader;