# MYSPACE:  a travel review website for space

[Our app on Heroku](https://myspace-taja.herokuapp.com/)

## User stories

* On welcome page I can search by distance

* As a user I can a list of planet destinations

* I can view individual planet pages
    * I can rate and review planets
    * I can view reviews and write reviews
    * I can rate reviews, good and bad

* **SG** I can log in
* **SG** I can see a map of the planets



## Requirements

- [ ]  Build an app using the Express framework.
- [ ] Use a PostgreSQL database to store and retrieve your data.
- [ ] Use the retrieved data to populate a Handlebars template for server-side rendering to be displayed on the front-end.
- [ ] Include tests and set up code coverage.
- [ ] Use Heroku or a similar service to host the app and the database.
- [ ] Try to include ES6 syntax on the server.


## Architecture

**Planets**


| Column  | Type |
| -------- | --------
| id    | serial primary key     
| name    | varchar(20)      
| distance     | float      
| description     | text     
| temperature     | integer      
| weather     | varchar(200)     
| interest     | integer     

**Reviews**


| Column  | Type |
| -------- | --------
| id    | serial primary key     
| planet    | foreign key planet id      
| user     | varchar(20)      
| content     | text     
| likes     | integer     
| dislikes     | integer     
