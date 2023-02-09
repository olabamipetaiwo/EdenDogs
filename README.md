**Task::** Develop a SPA to consume a REST API

**API to be consumed:** [https://dog.ceo/dog-api/](https://dog.ceo/dog-api/)

Description EdenDogs is a web app that allows a user to see a list of dogs , search through it by their breeds and view more details on the dog.

**Features the Application should have:**

1. Users should be able to see a list of at least 100 dog images by default when they load the application.
2. Users should be able to click on a dog image and be routed to a page where there’s more information about the dog.
3. Users should be able to search for a dog via their breeds.

Github Repo: https://github.com/olabamipetaiwo/EdenDogs.git.

Live Web App: https://edendogs.netlify.app/

- Git clone the repository via https://github.com/olabamipetaiwo/EdenDogs.git.
- Run yarn install to get the neccessary dependencies
- Mirror .env.sample to create your env file locally
- Run yarn serve to start the application locally

**Approach Taken**

- Managed State with the Vuex Separated the Store into modules for the purpose of scalability (WE can decide to add authentication or any aother module to the app later) Tailwind CSS and DartSCSS was used for the styling of the app
- Skeleton Loader and a spinner were used to indicate loading state
- Implemented a client-side cache with localStoarage APIs, the cache has a refrsh time of 30 minutes to refetch latest data from Database

**Areas For Improvement**

- Implemt server side pagination on the backend and infinte scroll on the frontend for better user Experince
- Implemnt notification on frontend
