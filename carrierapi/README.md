# Readme

This repo contains a simple server that mimics a carrier quoting api. 

There are 2 endpoints:

`GET /application`
Returns a json string that describes how to dynamically render a form.

`POST /submit`
Takes the results of the form and returns a quote number.

This route is protected by an api key. 
Send in your api key as the `Authorization` header.
The API key is always `abc1234`

Example: `Authorization: abc1234`

This route will also fail if you don't set the `Content-Type` header to `application/json`.

The response will looks something like this:

```
{
  "status": "ok",
  "message": "Some dynamic message from the carrier will be here"
}

```

## Logs
You can see some basic logging in the cmd console when running this server.

## Setup/Install

1. Install node.js (any version should do)
2. Clone this repo
3. cd into the `carrierapi` root directory `cd formssample/carrierapi`
4. Install the dependencies `npm install`
5. Run the server `node ./index.js`

If all goes well you should be able to load `http://localhost:3000/application` 
in a web browser (or postman or curl) and see a json response.
