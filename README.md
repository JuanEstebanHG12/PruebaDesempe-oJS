# JS Performance Test CRUDZASO
Educational project created for JavaScript performance testing in riwi
***Test performed with json-web server and vite***

## Steps to run this test
- Run the following command to download all dependencies:
```
npm install
```
- After the dependencies are downloaded, run:
```
npm run dev
```
This will start a local environment with vite. This will give you a localhost URL similar to this:
```
http://localhost:5173/
```
Paste this URL into your browser.

- Now you just need to start your json-server service with the command:
```
npm run api
```

> npm run api and npm run dev are scripts previously configured in package.json.

# Project Architecture
```
├── 📁 components
│ ├── 📁 Admin
│ │ ├── 📄 CardManagement.js
│ │ └── 📄 CardTaskManagement.js
│ ├── 📁 User
│ │ ├── 📄 ListTask.js
│ │ ├── 📄 TaskCard.js
│ │ └── 📄 UpdateTask.js
│ ├── 📄 Aside.js
│ ├── 📄 HeaderDashboard.js
│ └── 📄 Navbar.js
├── 📁 core
│ └── 📄 render.js
├── 📁 router
│ └── 📄 router.js
├── 📁 services
│ ├── 📄 tasksServices.js
│ └── 📄 userServices.js
├── 📁 store
├── 📁 useful
│ └── 📄 utils.js
└── 📁 views 
├── 📁 Admin 
│ ├── 📄 DashboardAdmin.js 
│ └── 📄 index.js 
├── 📁 Global 
│ ├── 📄 Login.js 
│ ├── 📄 Register.js 
│ └── 📄 index.js 
└── 📁 User 
├── 📄 CreateTasks.js 
├── 📄 DashboardUser.js 
├── 📄 MyTasks.js
└── 📄 index.js
```
- **The project includes protective views, login validation, a user view, and an administrator view.**
- **And on the services side:**
  - Users:

    - Login

    - Registration

  - Tasks:

    - Create

  - List

  - Update

  - Delete
