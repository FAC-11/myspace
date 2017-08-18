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
| filename | varchar(40)     
| thumbnailname | varchar(40)     

**Reviews**


| Column  | Type |
| -------- | --------
| id    | serial primary key     
| planet_id    | integer references planets(id)      
| user     | varchar(20)      
| content     | text     
| likes     | integer     
| dislikes     | integer     

**Setup**

To setup myspace with a database running on a local installation of PostgreSQL,

```
createdb myspace
sudo -u postgres createuser majortom
sudo -u postgres createdb myspace ```
and in `psql`,
```
GRANT ALL PRIVILEGES ON DATABASE myspace TO majortom ;
ALTER USER majortom WITH PASSWORD 'milkymilkyway'; ```
Create a `config.env` for the project if you don't have one already and add to it the line

```
DB_TEST_URL = postgres://majortom:milkymilkyway@localhost:5432/myspace
 ```

Finally build the database:

`npm run dbinit`


## Learnings & Links

* Express makes most things simpler but routing in express carries its own new risk of bugs.
* `transform-origin` is kewl.
* `:after` allows you to define CSS properties to be applied after others, so they will take effect no matter what the properties are changed to previously.
