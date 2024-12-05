CS 602_Term Project_Merna Saad
Application for Shopping Wedding Essentials called MN (Fake name)

Project built with:
Node.js
Express.js
MongoDB
Express Handlebars

Public REST API:
GET /store --> List products. Query params include maxPrice, minPrice, and desc. Returns XML or JSON depending upon requestor.

Public routes: 
GET /store --> Showcases the principal store and its offerings. Supports query parameters such as maxPrice, minPrice.
GET /login --> Directs to the login form.
POST /login --> Sends the login form information. Upon successful submission, a JSON Web Token will be stored in a secure cookie.
GET /logout --> Logs out the user by deleting the JWT cookie.
GET /register --> A form for a new user to create account.
POST /register --> Generates a new account using the information provided in the form. The password is encrypted using bcrypt.

Routes for customers who have been authenticated:
GET /orders --> Manage order history.
POST /buy --> Direct to purchase confirmation screen.
POST /confirmedPurchase --> Purchase item.

Administrator Routes
GET  -->  Display all customer orders.
GET  --> Edit selected customer order.
POST --> Saves edited customer order to DB.
GET  --> Delete selected customer order.
POST --> Remove customer order from DB.
GET  --> Manage the product catalog.
GET  --> Form to add product to catalog.
GET  --> Form to delete selected user.
POST --> Save new product to DB.
GET  --> Form to edit the selected product.
POST --> Save edited product to DB.
GET  --> Confirm delete of selected product.
POST --> Save edited user to DB.
POST --> Remove product from DB.
POST --> Remove user from DB.
GET  --> Manage user accounts.
GET  --> Form to edit selected user.

Middleware:
checkToken --> Verifies whether a token is present in the cookie to determine whether the user is logged in. The token contains the username and an "isAdmin" flag.
customerOnly --> Allow access to routes only to users who have logged in, redirecting to the login page.
employeeOnly --> Allow access to management routes only to administrators. If the user is not an admin, the function responds with a 404 error.
