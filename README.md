# Myspace:  a travel review website for space :earth_asia: :rocket: :sun_with_face: 
*because in space no one can hear you Yelp*

## User stories

* On the welcome page I can search for planetary destinations by their distance from Earth

* As a user I can a list of clickable search results, or choose to view all the options

* As a user I can view individual planet pages and:
    * I can upvote planets
    * I can see reviews and add my own reviews
    * I can rate reviews, good or bad

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

Put the database folder in the model folder.
## Schema

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
| filename | varchar(20)     
| thumbnailname | varchar(20)     

**Reviews**


| Column  | Type |
| -------- | --------
| id    | serial primary key     
| planet_id    | integer references planets(id)      
| user     | varchar(20)      
| content     | text     
| likes     | integer     
| dislikes     | integer     
 
