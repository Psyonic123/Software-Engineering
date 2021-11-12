# SWE-Assignment1
TEAM ALPHA BABY WOOO (team 5 of course)!!!!

The best way to test the application would be to use the link: https://sweteamalpha.herokuapp.com/

If you REALLY wanted to run the code on your machine (boooo), you could either:
1. Use the branch called 'Main-Localhost' and run main in "DemoApplication.java". We usually do this by using Visual Studio Code and running a Java debugger in main.

2. Manually change the URL_get/set links to localhost and comment out those linking to the heroku app. There's four links inside 'sprint-2-frontend-player-entry.js' that need to be changed and also change '@CrossOrigin(origins = "https://sweteamalpha.herokuapp.com/")' to '@CrossOrigin(origins = "http://localhost:8080")'. Once those links are set correctly, you just run the debugger on main just like the first option.

Once you run the debugger on main, you can connect to the application using 'localhost:8080' in your browser (CHROME WOO). From there, you can do whatever you want (except SQL injection).

Note: If you want to transition from the player-screen to the action-screen, one must press the "Enter" key.

Note for us students:
NO FORKS AND NO ACCEPTING PULL REQUESTS WITHOUT OUR GREAT LEADER NATHAN.
SIMPLE TERMS: MAKE BRANCH, PR IF YOU WANT YOUR CHANGES IN MAIN TO MERGE LATER, ELSE, DON'T!!!


