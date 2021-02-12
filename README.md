[![General Assembly Logo](https://camo.githubusercontent.com/1a91b05b8f4d44b5bbfb83abac2b0996d8e26c92/687474703a2f2f692e696d6775722e636f6d2f6b6538555354712e706e67)](https://generalassemb.ly/education/web-development-immersive)

# Restaurant App

This is the full-stack application project of General Assembly's SEI course.

## Project Objective 

Create a full CRUD app utilzing RESTful route methods taught in unit 2.

## Description of the app

There are a certain number of tables in a restaurant to serve customers. Each table is identified by its name and only has one waiter associated with it. the customers at each table can order multiple food items from the restaurant menu.

There are several waiters/waitresses in the restaurant, each of whom can serve a number of tables at the same time. 

Not in scope: it is assumed that the app can access the dataset which contains the order information (list) as to which table has ordered which and how many menu items. Such a list will be created and updated by another app whereas this app only has visibility and access to that information. 


## instructionss

The landing page is at https://jdseiunit2project.herokuapp.com/
  
- Click the signup to set up a new waiter in the system. Click the login and then enter the credentials will bring up the waiter's profile. The logout function is not implemented.
  
- It is possible to modify personal information after logged in, as well as to do deletion, i.e remove that person from the database. 
  
- The profile page also shows that individual is responsible for which and how many tables currently.

- There is an index page that lists all the tables currently being in use. Click the Add new table will bring an additional table into service (for example: new customers had arrived). A new waiter can be assigned to the newly added table from this page.

- From the list of table page, it is possible to remove a table (for example: custumers finished eating and left). Click the Edit will make it possible to assign this table to a different waiter from its current one if so desired.

- From the list of table page, click the name of the table will redirect to a SHOW page where waiter's name and menu items ordered are shown.  

## Known issues

- The app lacks the logic to allow deletion of a waiter only when no table is being served by this individual. If deleted while a certain dine table is associated with this person, click the table name to see info on that table will cause error.

- The order list (which dine table has ordered what) is manually seeded and not updated by this app. For demo purpose it just contains table ID equals to 1 and 2. Therefore, after certain number of add/delete users those tableId won't exist anymore. This will cause error.

## Future improvement

- The app in its current form lacks accessibility. A pointer device (mouse and/or track pad) is required.
  In the future, functionality should be added such that it is possible to only use the keyboard.    

- The above mentioned known issue should be addressed by adding some interlock logic.

- Add functionality to be able to edit menu items ordered (add/subtract) as well as to include other info such as menu item's unit price, billed amount, and tips.

- Additional logic can be implemented to prevent adding infinite number of dine tables because right now no capacity limit is being taken into consideration.


## User stories

- As the dining hall manager, I would like to be able to see a list the dine tables that are occupied by customers.

- As the dining hall manager, I would like to know what menu items are purchased by customers at any given table.

- As a waiter, I shall be able see which dine tables are being served by me.

- As a waiter, I shall be able to log in and edit my profile info and only by me.

- As the dining hall manager, I would like to know which table is being served by which waiter.

- As the dining hall manager, I should be able to remove a table when customers finished eating and left.

- As the dining hall manager, I would like to be able to reassign a different waiter to a table.

- As waiter, I should be able to remove myself (e.g. quit or sick).

- As the dining hall manager, I should be able to add a tables to the in-use list when new customers arrive.

- As the dining hall manager, I should be able to sign up a new waiter.

