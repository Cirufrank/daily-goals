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
                <span className='emoji' role="img" aria-label="A little paper and pencil icon unicode character next to the Daily Goals header for jotting down your goals for the day" focusable="false">📝</span>
            </div>
            <div className='pageEndPadding'>
                <span className='emoji' onClick={handlePrint} role="button" focusable="true" aria-label='A gray printer incon unicode character signifying that pressing this button will allow you to print out your daily goals and wins for the day'>🖨</span>
                <span className='emoji' id="refreshPage" onClick={resetLocalStorage} focusable="true" role="button" aria-label='A blue icon with two white arrows pointing in a cricle signifying that pressing this button will reset and erase your daily goals'>🔃</span>
            </div>
        </header>
    )
}

export default DailyGoalsHeader;