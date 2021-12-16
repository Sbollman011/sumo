# Basic Routing
Basic routing is adding a reference to another page so you are able to navigate to it. We will do this by adding onClick events to items in the navdrawer.

### Step 1
Create a new html file for every page you want. You will want a new page for each navigable link. So, likely, something like **rankings.html**, **settings.html**, **tournaments.html**, etc. Leave these empty for now.

### Step 2
Add an onClick event on each navigation item that will navigate the user to the next page. The navigation items I am discussing are the items in **< div class="NavItems">**. I will prove you with one example. </br> Change   ***< h4>Sumo Tournament< /h4>*** to ***< h4 onClick="document.location = './tournaments.html'">Sumo Tournament< /h4>***. </br> Then change all other items.</br>
 A couple things to note:
 - The onClick="document.location" is just saying hey, when I click this I want to render whatever is at the location I provide, so you provide the *relative* file location. The *relative* location is signaled by the **./**. You are also able to prove the *exact* file location, but this is usually not preffered.
 - Adding ***cursor: pointer** in your css file under the NavItems style will let you have a pointer when your mouse inside of that div, which will let users know that they can click the links.

### Step 3
Copy over all your **< head>** divs and all the navigation divs to each of the files. Anything you want on each page you will need to copy over. You will want the navigation bar and the navigation drawer so you can navigate on every page. Basically, you want to copy the top of the file down to the end of the last navigation div to each file.

# Building a table
A table is a very useful way to organize and present data. We will practice on the **rankings** page. We will build a very simple table. Please refer to this *https://www.w3schools.com/html/html_tables.asp* tutorial. You can make a table that matches mine or a table that is more appropriate to real sumo. I don't have much time right now. :)


***Good luck! This will hopefully be relatively simple,but I wanted to get your started on something. Next, we will work on inputs and forms which will use a bit of javascript. Also, I encourage you to continue to decorate and design the pages better. It will really help with your html and css skills and with the right attitude can be good fun***