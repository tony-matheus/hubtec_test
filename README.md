<h2>TEST  HUBTEC  - Tutorial step by step to run this api</h2>
<h5>Click <a href="https://hubtec-front.herokuapp.com/auth/sign-up">Here</a>, to see the project running on heroku.</h5>
<h4>Description</h4>
this is software that allows people to manage their day to day tasks.
React and Ruby on Rails API, because I really like rails, I fell in love with the ruby language, I chose to use react and not Rails MVC, because I'm learning React, I accepted the challenge of doing it in React, I really enjoyed the challenge and thank you Hubtec for the opportunity.

Regarding the decisions, I followed a basic idea of simply each user being able to register their tasks, and tell the status of it, the plan itself, I followed the cards I created in the GitHub project, link during the course of the README, in the commits section .
<hr/>
<h3>System Dependencies</h3>
<hr/>
* Docker (https://www.docker.com/)
* Docker-compose

<h5>Gems</h5>
* gem 'rspec' for tests together with:
  * gem 'factory-bot' to generate useful object models.
  * gem 'ffaker' to generate fake data.
  * gem 'shoulda matchers' to reduce sife of code in some parts.
  * gem 'database cleaner' to ensure a clean state during tests.
* gem 'pry' and 'pry-byebug' to debug ruby code.
* gem 'rack-cors' for handling Cross-Origin Resource Sharing (CORS).
* gem 'rack-attack' rack middleware for blocking & throttling abusive requests.
* gem 'devise_token_auth' simple, multi-client and secure token-based authentication for Rails.

<h5>Node Packages</h5>
- Axios - Promise based HTTP client for the browser and node.js
- React-materialize - Css library build for react.
- Redux - Library to manage application state.
- Styled-components - To create components with logic and styled.
<h5>GitHub App</h5>
- EbertApp - Continuos Static Analysis to improve your code. ( changed to sourcelevel in 23/06/2019 )
<hr/>
<h3>Step by step to run the project in localhost using docker-compose</h3>
1. Download the project from GitHub

```bash
git clone https://github.com/tony-matheus/hubtec_test.git
```

2. Open the project folder.

3. Build the containers.

```bash
docker-compose build
```

4. Install dependencies.

```bash
docker-compose run --rm app bundle install
```

5. Run migrations

```bash
docker-compose run --rm app bundle exec rake db:create db:migrate
```

6. Start the server

```bash
docker-compose up
```

   

<hr/>
<h3>To run Rails Tests </h3>
```bash
docker-compose run --rm app bundle exec rspec
```

<hr/>
<h3>Links</h3>
<a href="https://documenter.getpostman.com/view/6888921/S1a1bUJc?version=latest">Api Documentation</a> by postman 

<a href="https://www.linkedin.com/in/tony-matheus-55909313b">My LinkedIn</a>

<a href="https://gitlab.com/Tony_matheus">My GitLab</a>

<a href="https://github.com/tony-matheus">My GitHub</a>

<hr/>
<h5>Commits Structure and decisions</h5>
was been created a project in GitHub, with task management, with the follow structure:

```
CODE-ID - NAME_TASK

OBJECTIVES
```

For Example:

- HTAPI-01 crud user with authentication
  - HT - HUBTEC.
  - API  or FRONT - identify if for back-end or front-end.
  - 01 - id to identify different HTAPI or HTFRONT tasks.
- BugFixie-01
  - - Sign Up and redirect login

<a href="https://github.com/tony-matheus/hubtec_test/projects/1">Project Link </a>