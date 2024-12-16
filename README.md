# LEMA.AI Assessment 

## Github Url
[Click here to go](https://github.com/dondxniel/lema)

## Live Url
[Click here to go](https://lema-seven.vercel.app)

## Contents
1. [Introduction](#introduction)
2. [Prerequisites](#prerequisites)
3. [Running the project and DB setup](#running-the-project-and-db-setup)

---

## Introduction
This is the official submission of the Senior Frontend Developer coding assessment test for Don Daniel. This README is meant to guide anyone through running and using the project. 

## Prerequisites
Tools and versions required to run the project:
- [Node.js](https://nodejs.org/) (v21.6.2)
- [Yarn](https://www.yarnpkg.com/) (v1.22.22)

---

## Running the project and DB setup
1. Clone the repository:
```bash
git clone https://github.com/dondxniel/lema.git
```
2. Install dependencies:
```bash
cd <project-folder> && yarn && cd frontend && yarn && cd ../backend && yarn
   ```
3. Run the project:
```bash
yarn dev
   ```

The last command runs both the frontend and backend with the help of "concurrently", a library used to run multiple commands concurrently in your node environment. 

4. Setup Database:
For simplicity sake, the database file was left in the code base as it was sent. If you would like to visualize the tables as you create, delete or modify records, try [Table Plus](https://tableplus.com/). 
<br />
If you're already familiar with it or are more comfortable with an alternative, you can skip the next few bullet points. 
- Once you have it installed, open it. 
- Click the plus button next to the input on the top of the new window to create a new connection. 
- Select a database-for this project, select SQLite. 
- Click "Create" at the bottom right. 
- Enter the name of your Connection and select the path to the Database file in our code base. 
- Click "Connect" and there you go. 
