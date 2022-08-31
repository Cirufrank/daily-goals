import React from 'react';
import {useReactToPrint} from 'react-to-print';

function DailyGoalsHeader(props) {
    //This function grabs the reference of the main App (passed from props) and uses useReactToPrint to print the contents of the app (the full page)
    const handlePrint = useReactToPrint({
        content: () => props.content.current
    })
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
            <div className='pageEndPadding'>
                <span className='emoji' onClick={handlePrint}>🖨</span>
                <span className='emoji' id="refreshPage" onClick={resetLocalStorage}>🔃</span>
            </div>
        </header>
    )
}

export default DailyGoalsHeader;