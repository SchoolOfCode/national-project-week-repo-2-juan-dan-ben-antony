# CampFire - An app for bootcampers to reflect on their learnings, provide feedback and track their progress.

CampFire is an app created by Juan Castel, Dan Sutton, Ben Holloway and
[Antony Parnell](https://www.linkedin.com/in/antony-parnell/) for our one week project during the School of Code.

See our app here: https://campfire-app.netlify.app/

Fill out and submit the form and you will be taken to a dashboard showing the a week in the life of a theoretical bootcamper, with
the colours of the days correllating to how they were rated. In one week, we put together a full stack app, with a prototype dashboard that
is responsive to data input in the survey form.

## Documentation

### Planning

[Planning documents](https://github.com/SchoolOfCode/national-project-week-juan-dan-ben-antony/tree/main/planning)

We spent the first day of our week purely planning out our project. Our challenge was to come up with something to improve the life of a bootcamper. After discussing with ourselves and other students,
we decided to create an app to improve the user experience for providing feedback and recording reflections. Some of the techniques and tools we used in our inital planning:

- Disney Ideation
- Miro board for wireframing / researching other apps for inspiration
- Figma for lofi/hifi designs

### Tech stack

We decided on the following technologies to create our app:

- React
- Node.js
- Postgres
- Heroku
- Netlify

We opted for a back end made in Node.js, using Postgres for a database and deploying this to Heroku. The Front end was
made seperately in React and deployed to Netlify. This allowed clean seperation of these functions in our codebase, with
the react front end updating and fetching from our database as required.

### Work flow

We used Trello to manage the project and split tasks into manageable tickets. As a team of 4, we would begin the day with a stand up, then split off
and use pair programming to work on tickets. We would catch up regularly and end the day with a retro to make sure everyone was clear with progress,
and make sure each member of the team got a chance to work on all aspects of the project.

## Lessons Learned

### Deploy early and keep iterating

We made sure to get our front end and back end deployed as soon as possible, and this was invaluable in letting us have things progress smoothly for the week. By making small, manageable changes we were able to maintain a stable backend and front end that integrated smoothly.

### Don't underestimate a task

Some of the tickets we thought would be simple proved to be a lot tougher than anticipated. For example, getting buttons to add text to input fields seemed easy, but having it intergrate smoothly with normal typing inputs as well proved to be a bigger challenge than expected!
