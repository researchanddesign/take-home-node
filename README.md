# Take Home Project

Build a simple todo list ordered by length. We've allotted 4 hours to finish this project. If you have not completed the project in that time, we ask that you submit the code you have. This will better help us evaluate your proficiency and will ultimately help us ensure that we're a good fit for you and that you're a good fit for us.

If you have any questions please reach out to us on our slack channel. If a slack channel has not been setup for you yet, please get in touch with us via email.

## Requirements

- Fix bug in server. The front-end is unable to communicate with the API. If you can't find the bug in 15 mins, ping us on slack so we can help you figure it out and get on your way.
- A user should be able to add a new todo item.
- A user should be able to edit a todo item.
- A user should be able to delete a todo item.
- All items should be ordered according to the length of the item.
- All items should be paginated (10 items per page).
- There should be a visual distinction between complete and incomplete items.
- All items, and any related state, should persist upon reload.
- Code should pass lint checks and get auto formatted with prettier settings.

## Development

- To start the dev server run `npm start` which will concurrently run the back-end and front-end.
- The back-end runs on port 4000 and the front-end runs on port 4200.

## Dependencies

- This app uses [knexjs](http://knexjs.org/) for interacting with the database. It has been setup to use sqlite, and no configuration is needed.
- Typescript
- Angular 9
- We've included [material](https://material.angular.io/), in case you have extra time and want to add a little extra pop to the app.