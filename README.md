# Social Network API

![GitHub license badge](https://img.shields.io/github/license/Tydomx/Social-Network-API)
![GitHub issues badge](https://img.shields.io/github/issues/Tydomx/Social-Network-API)
![GitHub forks badge](https://img.shields.io/github/forks/Tydomx/Social-Network-API)
![GitHub stars badge](https://img.shields.io/github/stars/Tydomx/Social-Network-API)

[![made-with-javascript](https://img.shields.io/badge/Made%20with-JavaScript-1f425f.svg)](https://www.javascript.com)
[![GitHub branches](https://badgen.net/github/branches/Tydomx/Social-Network-API)](https://github.com/Tydomx/Social-Network-API/)


## Table of Contents: 
### [Video](#walkthrough-video-💻)
### [Installation](#installation)
### [Usage](#usage)
### [Project Description](#project-description)
### [Technologies](#technologies-used)
### [Future Development](#future-development)
### [Screenshots](#screenshots-📷)
### [Author](#author)
### [License](#license)

---

## Walkthrough Video: 💻
Link to video: [Walkthrough Video](https://youtu.be/Y_i6sbIqwzM)

## Installation
	npm init
	npm install

## Usage
	npm start

---

## Project Description:
	The purpose of this application is to allow users to share their thoughts, react to friends' thoughts, and create a friends list. The app is run via a node server.


### Technologies Used:
	JavaScript
	Node.js
	Mongoose
	Express.js
	DateFormat

#### Team Member Roles:
- `/api/users`

	- `GET` all users
	- `GET` single user by ID
	- `POST` new user
	- `PUT` update user by ID
	- `DELETE` remove user by ID

	`/api/users/:userId/friends/:friendId`

	- `POST` add a new friend to user's friend list
	- `DELETE` remove friend from user's friend list

- `/api/thoughts`

	- `GET` all thoughts
	- `GET` single thought by ID
	- `POST` create new thought
	- `PUT` update thought by ID
	- `DELETE` remove thought by ID

	`/api/thoughts/:thoughtId/:reactions`
	- `POST` create a reaction
	- `DELTE` delete a reaction

	
### Future development:
- Adding a front-end
- Allowing users to add a user profile
 
 ---


## Screenshot(s) 📷



## Author

👤 **Michael Thai**

- Gmail 📧: [Michael Thai](mailto:https://michaelthai16@gmail.com)
- Github: [@tydomx](https://github.com/tydomx)

## 📝 License

This project is [MIT](https://choosealicense.com/licenses/mit/) licensed.
