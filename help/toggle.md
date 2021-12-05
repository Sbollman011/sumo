## TOGGLE

### The first challenge other than situating the divs in html (index.html) and styling them in CSS (style.css) (which will undoubtedly be a pain :) ), will be toggling the navigation drawer when someone clicks on the menu icon. The end goal is to click the icon, then the navigation drawer will open, click again, and it will close.

## Here are some hints and instructions to complete this.
### First, build all the components in html/css. Build out the components as if the navigation drawer is open. Don't worry about the toggle right away, just get the drawer on the page. Once you have the drawer and menu button on the page, you can now move on to having it toggle.


### Steps to setup html and css to get ready to toggle:
- First, add an attribute in css on your navigation drawer div class called visibility and set it to "hidden" (visibility: hidden). This should immediately result in you no longer being able to see the navigation drawer. Changing this attribute to visible (visibility: visible), will allow you to see the navigation drawer again. 
- Toggling will involve 1 Javascript function in main.js. You can name the function openNavMenu(), but we aren't quite there yet.
- Before you build out the function, we will add an onClick event to the menu div (not the navigation drawer div, the menu icon div) to set off the function once it is clicked. Here is an example:
   - < div class="hamburger" onClick ='openNavMenu()'> 
        < img src='HAMBURGER IMAGE HERE'>
     < /div>  **(The onClick='' is the important part)
- Now you have set up an event that will happen if the the div is clicked. It will call the function (that you still need to write) openNavBar() that lives in main.js. You have also set up the css attribute to hide or display a div. Changing this css attribute with javascript in the openNavMenu() function is how we will toggle the navigation drawer. You are all set up except for the function. Let's get to it!


### Setting up your javascript function in main.js and finishing up toggle:
- First, create a function in main.js called openNavMenu()
   - In this function, you will need to do 3 things. Get the div you want to work with, check the current value of the visibility attribute on that div (hidden or visible), and then set the visibility attribute to the opposite to whatever it is currently. If it's currently visible, change it to hidden, if it's currently hidden, change it to visible. All work under this will happen inside of the openNavMenu function you have created.
- Step 1: Getting the div
   - To get the div, we have things we can do. Either one works.
   - Option 1: "document.getElementsByClassName('navMenu');"
      -  This piece of code assumes you named the class 'navMenu' for the navigation drawer div. If you named it something else, just switch 'navMenu' to whatever you named it. This code gets all the elements of your html page with the class name you pass in. Once you get it, you can then adjust it's css values and more. A key thing to note here is the fact that Elements is plural here. So with this option, you will grab a **LIST** of all elements with that class name, even if you already have one. This is import because you will have to use [0] to get the element you want from the list. So, document.getElementsByClassName('navMenu')[0] would get you the div you want.
    - Option 2: "document.getElementById('navMenu');"
       - This piece of code only gets you a single element, but you have to give that element an ID. No need to worry about a list or any indexes here, but you will need to give the div an ID in index.html. 
          - An example of adding an id in index.html:
          - < div class="navMenu" id="navMenu"> ALL YOUR NAV DRAWER CONTENT HERE < div>
          - the id="navMenu" is the important part.
    - Once you choose which way you want to get your div, it's best to save it as a variable to make it easier to work with
       - examples:
          - **let menu = document.getElementsByClassName('navMenu')[0];**
          - **let menu = document.getElementById('navMenu');**
- Step 2: Check the current visibility of the div
    - To check the current visibility, you can access the style attributes of the menu variable you just set by **menu.style.visibility**. Keep in mind, this would work on any css attribute for the menu div... so you could get the width, height, display, anything.
    - We will use an **if statement** to determine how we want to switch to the visibility so **if (menu.style.visibility == "hidden")** we will want to switch the visibility to **visibie**. If **if (menu.style.visibility == "visible")** we will want to switch the visibility to **hidden**

- Step 3: Setting the visibility of the diV and finishing up.
    - The last step will be changing the visibility after we determine if it's currently hidden or visible, as suggested above. To change the visibility, we just do **menu.style.visibility = "hidden"** if we want to change it to hidden and **menu.style.visibility = "visible"** if we want to change it to visible.
    - I don't want to give too much away, but basically all you will do in the function is create an if statement that checks if the current state is hidden or visible, if it's hidden, switch it visible, if it's visible, switch it to hidden.
    - **That's it! Happy Hacking!**
