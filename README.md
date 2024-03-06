<h1 align="center">
  Unit 4 Project - NHL Now
</h1>

<h2 align="center">
  <a href="https://nhl-now-app-ae956f6db9fd.herokuapp.com">Click the link to visit!</a>
</h2>

<img src="https://github.com/rswagner13/NHL-Team-Tracker/assets/152703739/512d9595-8a3f-4f9c-b258-fd03172af439"/>

### 📝Description
<p>
  This app provides current standings and stats for each NHL team. It also provide season, career, and previous game stats for each individual player.
</p>

### 🖥️ Technologies Used
<p align="center">
  <img src="https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white"/>
  <img src="https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white"/>
  <img src="https://img.shields.io/badge/Bulma-00D1B2.svg?style=for-the-badge&logo=Bulma&logoColor=white"/>
  <img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black"/>
  <img src="https://img.shields.io/badge/JSON%20Web%20Tokens-000000.svg?style=for-the-badge&logo=JSON-Web-Tokens&logoColor=white"/>
  <img src="https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white"/>
  <img src="https://img.shields.io/badge/Express.js-404D59?style=for-the-badge"/>
  <img src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB"/>
  <img src="https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white"/>
  <img src="https://img.shields.io/badge/Heroku-430098?style=for-the-badge&logo=heroku&logoColor=white"/>
</p>


### ⬇️ Installation
* Fork the repository
* On your forked repository page, click on the code button, then copy the web url provided
<img src="https://github.com/rswagner13/NHL-Team-Tracker/assets/152703739/7f228b30-0a25-4773-b3d9-2c3f282d3e75"/>

* Open up Terminal, and go to the file directory you want to connect your local repository to the forked repository
* Enter the following code into Terminal:
  
```
git clone https://github.com/YOUR-GITHUB-USERNAME-HERE/NHL-Team-Tracker.git
```

* Once your linked the repositories, enter the next line of code to download all dependencies for this app:

```
npm install
```

* You will then need to connect the app to a MongoDB database, and provide a new JWT secret key, by first creating a '.env' file within the project's root folder, and then enter the following into your '.env' file:

```
PORT=3000
MONGOBURI="mongodb+srv://YOUR-USERNAME:YOUR-PASSWORD@cluster0.qpgx2wg.mongodb.net/NAME-OF-YOUR-DATABASE"
JWT_SECRET_KEY="WHATEVER YOU WANT TO BE HERE"
```
> This part of the MONGODBURI string, @cluster0.qpgx2wg.mongodb.net, might be different for you based on the server your chose for your MongoDB database to be hosted on

### 🧔‍♂️👩 User Stories
* As an NHL fan, I want an app that provides up-to-date NHL stats across all 32 teams.
* As a software engineer who's on a team to interview potential new employees, I want to make sure they have a solid understanding of React, how to make frontend and backend connect, and incorporate a third-party API.

<details>
  <summary>Wireframes</summary>
  <br>
  <img src="https://github.com/rswagner13/NHL-Team-Tracker/assets/152703739/a4e68558-1251-4616-916c-4dda6cbdfe13"/>
  <img src="https://github.com/rswagner13/NHL-Team-Tracker/assets/152703739/e7cdd641-cb07-473a-b88a-37e833d37ac5"/>
  <img src="https://github.com/rswagner13/NHL-Team-Tracker/assets/152703739/7a15ab29-85fd-4faf-aac8-fc88bdac1893"/>
  <img src="https://github.com/rswagner13/NHL-Team-Tracker/assets/152703739/03ed9e2c-a3e1-4fbd-ab80-25f4ae9daa40"/>
  <img src="https://github.com/rswagner13/NHL-Team-Tracker/assets/152703739/62383495-7286-4a95-99d7-7e6d555925a9"/>
</details>

### Route Table

|            URL          |   HTTP Verb    |  CRUD Action  |         React Component(s)      | Created Yet? |
| ----------------------- | -------------- | ------------- | ------------------------------- | ------------ |
|             /           |      GET       |      read     |        HomePage                 |      YES     |
|          /teams         |      GET       |      read     |         TeamsPage               |      YES     |
|       /teams/:id        |      GET       |      read     |    TeamDetails/CommentSection   |      YES     |
|       /teams/:id        |       CREATE   |      create   |    TeamDetails/CommentSection   |      YES     |
|       /teams/:id        |    PATCH/PUT   |      update   |            Comments             |      YES     |
|       /teams/:id        |       DELETE   |      delete   |            Comments             |      YES     |
|    /teams/:id/roster    |       GET      |      read     |            TeamRoster           |      YES     |
|   /teams/:id/:playerId  |       GET      |      read     |            PlayerInfo           |      YES     |
|       /auth/signup      |      CREATE    |      create   |          AuthFormPage           |      YES     |
|       /auth/login       |       POST     |      update   |           AuthFormPage          |      YES     |

### ⚠️❌💫 Unsolved Problems/Major Hurtles
* Continuous issues with API requests when refreshing pages
* Back and forth when/when not to use Bulma keywords for styling

### ▶️ Next Steps
* Make the app more mobile-friendly
* Allow users to "favorite" teams
* Prevent users from having any ability to change other users' comments
