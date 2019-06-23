<h2>TEST  HUBTEC  - Tutorial step by step to run this api</h2>
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

<hr/>

<h5>Commits Structure</h5>

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