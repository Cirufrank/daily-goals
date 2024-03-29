# Daily Goals Application

![](https://media.giphy.com/media/jO2VAnKyAtgcSWxxVf/giphy.gif)

Hey, I get it. You sometimes don't feel like you're getting anything done in the sea of tasks you have on your plate. Well let me let you in on a secret... you are accomplishing FAR more than you know. Don't believe me? Well, <a href="https://my-daily-goals.netlify.app/" target="_blank">try out this lovely daily goals web application</a>! Each day come on over and set some goals that you'd like to complete by the end of the day. Then, as you finish them, retrun to the website and give them a nice, satisfying checkmark ☑. The goal will then pop into your daily wins section so that you can lookover all that you've done at the end of each day!

Need a fresh start? We got you covered! Just press the restart button 🔃 and all your goals will be wiped away clean, and you'll be ready for a new day to conquer. Use this site to celebrate yourself and see just all you've accomplished each day. Stay present and no matter what happens, tomorrow is a new day, with a fresh set of accomplshments to take on.

## **Daily Goals live site:** https://my-daily-goals.netlify.app/</br>

![](./public/dailyGoalsGif.GIF)

## How It's Made:
This is a fully-responsize Single Page Application created with React. Why React you say? Well, through use of the virtual DOM, React is able to update only the parts of the page that have changed. This greatly enhances the speed of the website's performance when updating the elements rendered through the DOM. Additionally, through use of JSX (or JavaScript if preferred) you are able to conditionally write the compontents of HTML to be rendered on the client's side, and use JavaScript directly within your code. Additionally, components allow you to render the same code within different pages or places within the application without having to re-wite the code. This makes for a more modular application. 

Additionally, through use of the localStorage API, this application sets a variable on the client device that contains an array of daily goals objects, containing the goals' text and assocaited properties. This allows users to navigate away from the site at any time, and as long as they access the site on the same device, they'll be able to still have their goals saved.

## Optimizations
<ul>
  <li>
  Used the useReactToPrint module's functionality in order to allow users to print out their daily goals and wins after clicking the print icon unicode character button, thus allowing them to save pages of their goals and wins if they'd like to look back on them 
  </li>
  <li>Used localStorage to save the daily goals objects on the client's device in order to inrease the speed of accessing and rendering the goals without having to make a request to a database for the inforamtion (through use of a custom API) </li>
  <li>Used React for the project so that each time the page is updated, only the changes pieces of the DOM are re-rendered</li>
</ul>


## Lessons Learned:
<ul>
  <li>I learned to be very intentional when setting and maintaining a variable in local storage. This application can remove the variable, and ensure that each time the page is re-loaded, either the same variable is maintained, or the variable is re-created and initialized to an empty array</li>
  <li>I learned to be more intentional in brainstorming ways to improve time and space complexity. An optimization I would like to make the application is using hash tables to add, remove, and keep track of goals so that goals can be accessed by their ids in constant time.</li>
  <li>Lastly, I also learned of the importance of keeping the user in mind, and made sure to allow users to add goals to their wins, change goals from a win to a goal to complete, edit goals, and remove goals</li>
  </br>
  This project was a ton of fun to create, while getting mroe intimate knowledge of React. Thanks for stopping by, enjoy the application, and don't forget to celerate your accomplishments!

  ![](https://media.giphy.com/media/UUyxgSQXI6mzbC8Lsw/giphy-downsized-large.gif)
    
