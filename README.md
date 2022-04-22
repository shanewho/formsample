## Project

### Summary

A carrier has an API we can use to get quotes for their insurance policies.
Because the questions they require are dynamic and change often, they also have
an API we can use to build our application form, rather than hard coding all of the 
questions. 

They have given us an API simulator to use that mimics their production API. They 
want us to use this for development instead of their production environment.
That simulator is included in this repo in the `carrierapi` folder with instructions 
in the readme on how to run and call it.

### Task

Create a new, separate service that calls the carrier sample API's `GET /application` route,
then render a form dynamically using the data in the response. When the user
clicks the form's submit button, submit the values to the `POST /submit` route. Show the
submit respone's `message` string on successful submission (a simple `alert` will do).

Be sure to build the form dynamically, with your code using the results of the API to generate the form 
(i.e., don't hard code the form/input tags)

When you are done, create a pull request to this repo with the code.

### Tips
- Use next.js (https://nextjs.org/) to create the server and UI.
  It is a popular framework with tons of documentation that makes it fairly easy to build
  a server and React UI without having to write any boilerplate.
- Next has a feature called `getServerSideProps` where you can query for data to use when
  rendering the React page. Consider using this to make your API call to the carrier server to 
  get the data needed to render the form.
  Example and docs here: https://nextjs.org/docs/basic-features/data-fetching/get-server-side-props#using-getserversideprops-to-fetch-data-at-request-time
- No need to get fancy with anything. This doesn't need to look good, have any validation, css styleing, etc.
- This project is meant to resemble something like a real world scenario where we often
  consult available resources when faced with something new. Feel free to use any online
  resources you need (google, tutorials, documentation, stackoverflow, etc).
  If you get stuck or need any help or anything clarified, you can reach out with questions, 
  just like you would if you were on our team and needed some help.
- A screenshot is included to show you roughly what the finished version of this could look like.
