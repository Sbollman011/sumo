

function openNavBar () {
   let menu =  document.getElementsByClassName('navDrawer')[0];
   if(menu.style.visibility == 'visible'){
    menu.style.visibility = 'hidden'
    console.log(menu.style.visibility);
   }
   else{
    menu.style.visibility = 'visible'
   }

}


function clearMenu(){
    let menu =  document.getElementsByClassName('navDrawer')[0];
    menu.style.visibility = 'hidden'
}

function makeGetRequest() {
    clearMenu();
    fetch('http://localhost:3000/').then(function (response) {
        // The API call was successful!
        return response.json();
    }).then(function (data) {
        // This is the JSON from our response
        document.getElementById("response").innerHTML = data;
    });
    
    }

function clearApi() {
    clearMenu();
    document.getElementById("response").innerHTML = "Info cleared";
}

function homeworkHelp() {
    clearMenu();
    document.getElementById("response").innerHTML = toggleHelp;
}



















































































const toggleHelp =`
<h2 id="toggle">TOGGLE</h2>
<h3 id="the-first-challenge-other-than-situating-the-divs-in-html-index-html-and-styling-them-in-css-style-css-which-will-undoubtedly-be-a-pain-will-be-toggling-the-navigation-drawer-when-someone-clicks-on-the-menu-icon-the-end-goal-is-to-click-the-icon-then-the-navigation-drawer-will-open-click-again-and-it-will-close-">The first challenge other than situating the divs in html (index.html) and styling them in CSS (style.css) (which will undoubtedly be a pain :) ), will be toggling the navigation drawer when someone clicks on the menu icon. The end goal is to click the icon, then the navigation drawer will open, click again, and it will close.</h3>
<h2 id="here-are-some-hints-and-instructions-to-complete-this-">Here are some hints and instructions to complete this.</h2>
<h3 id="first-build-all-the-components-in-html-css-build-out-the-components-as-if-the-navigation-drawer-is-open-don-t-worry-about-the-toggle-right-away-just-get-the-drawer-on-the-page-once-you-have-the-drawer-and-menu-button-on-the-page-you-can-now-move-on-to-having-it-toggle-">First, build all the components in html/css. Build out the components as if the navigation drawer is open. Don&#39;t worry about the toggle right away, just get the drawer on the page. Once you have the drawer and menu button on the page, you can now move on to having it toggle.</h3>
<h3 id="steps-to-setup-html-and-css-to-get-ready-to-toggle-">Steps to setup html and css to get ready to toggle:</h3>
<ul>
<li>First, add an attribute in css on your navigation drawer div class called visibility and set it to &quot;hidden&quot; <strong>(visibility: hidden)</strong>. This should immediately result in you no longer being able to see the navigation drawer. Changing this attribute to visible <strong>(visibility: visible)</strong>, will allow you to see the navigation drawer again. </li>
<li>Toggling will involve 1 Javascript function in main.js. You can name the function <strong>openNavMenu()</strong>, but we aren&#39;t quite there yet.</li>
<li>Before you build out the function, we will add an onClick event to the menu div (not the navigation drawer div, the menu icon div) to set off the function once it is clicked. Here is an example:<ul>
<li><strong>&lt; div class=&quot;hamburger&quot; onClick =&#39;openNavMenu()&#39;&gt; &lt; img src=&#39;HAMBURGER IMAGE HERE&#39;&gt; &lt; /div&gt;</strong> (The onClick=&#39;&#39; is the important part)</li>
</ul>
</li>
<li>Now you have set up an event that will happen if the the div is clicked. It will call the function (that you still need to write) <strong>openNavBar() that lives in main.js.</strong> You have also set up the css attribute to hide or display a div. Changing this css attribute with javascript in the openNavMenu() function is how we will toggle the navigation drawer. You are all set up except for the function. Let&#39;s get to it!</li>
</ul>
<h3 id="setting-up-your-javascript-function-in-main-js-and-finishing-up-toggle-">Setting up your javascript function in main.js and finishing up toggle:</h3>
<ul>
<li>First, create a function in main.js called <strong>openNavMenu()</strong><ul>
<li>In this function, you will need to do 3 things. Get the div you want to work with, check the current value of the visibility attribute on that div (hidden or visible), and then set the visibility attribute to the opposite to whatever it is currently. If it&#39;s currently visible, change it to hidden, if it&#39;s currently hidden, change it to visible. All work under this will happen inside of the openNavMenu function you have created.</li>
</ul>
</li>
<li>Step 1: Getting the div<ul>
<li>To get the div, we have things we can do. Either one works.</li>
<li><strong>Option 1: &quot;document.getElementsByClassName(&#39;navMenu&#39;);&quot;</strong><ul>
<li>This piece of code assumes you named the class &#39;navMenu&#39; for the navigation drawer div. If you named it something else, just switch &#39;navMenu&#39; to whatever you named it. This code gets all the elements of your html page with the class name you pass in. Once you get it, you can then adjust it&#39;s css values and more. A key thing to note here is the fact that Elements is plural here. So with this option, you will grab a <strong>LIST</strong> of all elements with that class name, even if you already have one. This is import because you will have to use [0] to get the element you want from the list. So, document.getElementsByClassName(&#39;navMenu&#39;)[0] would get you the div you want.<ul>
<li><strong>Option 2: &quot;document.getElementById(&#39;navMenu&#39;);&quot;</strong></li>
<li>This piece of code only gets you a single element, but you have to give that element an ID. No need to worry about a list or any indexes here, but you will need to give the div an ID in index.html. <ul>
<li>An example of adding an id in index.html:</li>
<li><strong>&lt; div class=&quot;navMenu&quot; id=&quot;navMenu&quot;&gt; ALL YOUR NAV DRAWER CONTENT HERE &lt; div&gt;</strong></li>
<li>the id=&quot;navMenu&quot; is the important part.</li>
</ul>
</li>
<li>Once you choose which way you want to get your div, it&#39;s best to save it as a variable to make it easier to work with</li>
<li>examples:<ul>
<li><strong>let menu = document.getElementsByClassName(&#39;navMenu&#39;)[0];</strong></li>
<li><strong>let menu = document.getElementById(&#39;navMenu&#39;);</strong></li>
</ul>
</li>
</ul>
</li>
</ul>
</li>
</ul>
</li>
<li><p>Step 2: Check the current visibility of the div</p>
<ul>
<li>To check the current visibility, you can access the style attributes of the menu variable you just set by <strong>menu.style.visibility</strong>. Keep in mind, this would work on any css attribute for the menu div... so you could get the width, height, display, anything.</li>
<li>We will use an <strong>if statement</strong> to determine how we want to switch to the visibility so <strong>if (menu.style.visibility == &quot;hidden&quot;)</strong> we will want to switch the visibility to <strong>visibie</strong>. If <strong>if (menu.style.visibility == &quot;visible&quot;)</strong> we will want to switch the visibility to <strong>hidden</strong></li>
</ul>
</li>
<li><p>Step 3: Setting the visibility of the diV and finishing up.</p>
<ul>
<li>The last step will be changing the visibility after we determine if it&#39;s currently hidden or visible, as suggested above. To change the visibility, we just do <strong>menu.style.visibility = &quot;hidden&quot;</strong> if we want to change it to hidden and <strong>menu.style.visibility = &quot;visible&quot;</strong> if we want to change it to visible.</li>
<li>I don&#39;t want to give too much away, but basically all you will do in the function is create an if statement that checks if the current state is hidden or visible, if it&#39;s hidden, switch it visible, if it&#39;s visible, switch it to hidden.</li>
<li><strong>That&#39;s it! Happy Hacking!</strong></li>
</ul>
</li>
</ul>`;
