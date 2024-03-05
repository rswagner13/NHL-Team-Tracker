<h1 align="center">
  Unit 4 Project - NHL Now
</h1>

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



### 🧔‍♂️👩 User Stories


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


### ▶️ Next Steps
* 
