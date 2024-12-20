# last-repo-api

This is an application that list the five oldest C# repositories in https://github.com/takenet organization

## Setup

This projects requires Node.js version greather or equal than 22. If you meet this requirement then follow the setup instructions:

0. Get your [github token](https://github.com/settings/tokens);
1. This project is environment based, so please copy ./Api/.env.example as ./Api/.env or ./Api/.env.dev before running it;
2. First you need to set an github api key, then stores it on the environment file;
3. Change NODE_ENV to `development` or `production` as you want. Note that if you want to set development you have to set ./Api/.env.dev file;
4. Set a custom port if you need at 11 loc of ./Api/index.js;
5. Run `npm i` inside ./Api.

## Running

Go to the Api folder and run `npm run start` to execute the production-ready server, with some telemetry info; run `npm run watch` you have a pretty printing interface for debugging server.


