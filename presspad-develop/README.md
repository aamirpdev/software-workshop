# Presspad
Marketplace introducing diversity in media through mentorship &amp; hosting

- [Alpha version for user acceptance testing](https://presspad-production.herokuapp.com)
- [Deployed version](https://app.presspad.co.uk/)

## Summary
In this repo you can find links to all documentation required. For those working on the project who need real log ins and production env vars, please refer to the Resources issue #1

## Tech stack

As a summary:
- Front end >> ReactJS
- Back end >> NodeJS
- Database >> MongoDB


### Front end technologies

| Package  | Logo  | Description |
| :------------ |:---------------:| :-----:|
| ReactJS      | <img width="55" src="https://raw.githubusercontent.com/gilbarbara/logos/master/logos/react.svg"/>        |   JavaScript library that is used for building user interfaces specifically for single-page applications. |
| React router      | <img width="55" src="https://raw.githubusercontent.com/gilbarbara/logos/master/logos/react-router.svg"/>        |  It keeps our UI in sync with the URL, dynamic route matching, and location transition handling. |
| Axios     | <img width="55" src="https://user-images.githubusercontent.com/19708921/116078311-58c7fb80-a68e-11eb-8f6e-0d873aae8497.png"/>        |  Making HTTP requests to fetch or save data and connect client-side with server-side |
| Styled Components     | <img width="55" src="https://user-images.githubusercontent.com/19708921/116078185-346c1f00-a68e-11eb-9ad6-f17fd3281155.png"/>        |  Style system using ES6 and CSS |
| Antd    | <img width="55" src="https://user-images.githubusercontent.com/19708921/116078113-23bba900-a68e-11eb-840f-ed30945441f7.png"/>        |  Adaptable system of components and tools that support the best practices of user interface design and enable faster development |
| Yup     | <img width="55" src="https://theaplus.org/wp-content/uploads/2018/01/Yup-Logo.png"/>       | JavaScript schema builder for value parsing and validation |
| Momentjs      | <img width="55" src="https://raw.githubusercontent.com/gilbarbara/logos/master/logos/momentjs.svg"/>       |  JavaScript library which helps is parsing, validating, manipulating and displaying date/time in JavaScript |

### Back end technologies

| Package  | Logo  | Description |
| :------------ |:---------------:| :-----:|
| NodeJS      | <img width="55" src="https://nodejs.org/static/images/logo.svg"/>        |  JavaScript runtime environment used to build our server |
| ExpressJS      | <img width="65" src="https://www.resourcifi.com/wp-content/themes/resourcifi-child/img/express-min.png"/>        | back end web application framework for Node.js to build our API |
| Mongoose      | <img width="55" src="https://user-images.githubusercontent.com/19708921/116078368-6a110800-a68e-11eb-99f9-30bfc7189915.png"/>       |  Non-blocking PostgreSQL client for Node.js to contact to our Database |
| Stripe      | <img width="55" src="https://user-images.githubusercontent.com/19708921/116077838-d8a19600-a68d-11eb-910a-92311675c2b5.png" />       |  Integrated suite of payment systems and APIs |
| Firebase      | <img width="55" src="https://user-images.githubusercontent.com/19708921/116078415-79905100-a68e-11eb-90d1-68d34555d471.png"/>       | to store and retrieve images data |
| Sentry      | <img width="55" src="https://cdn.icon-icons.com/icons2/2622/PNG/512/brand_sentry_icon_157807.png"/>       |  Sentry's SDKs enable automatic reporting of errors and exceptions. |
| Sqreen     | <img width="55" src="https://images.g2crowd.com/uploads/product/hd_favicon/1546509776/sqreen-rasp.svg"/>       |  unified platform to secure web apps |
| Momentjs      | <img width="55" src="https://raw.githubusercontent.com/gilbarbara/logos/master/logos/momentjs.svg"/>       |  JavaScript library which helps is parsing, validating, manipulating and displaying date/time in JavaScript |
| Nodemailer      | <img width="55" src="https://user-images.githubusercontent.com/19708921/116078458-89a83080-a68e-11eb-9c5a-aad0339b2f2d.png"/>       |  Automate emails when users complete tasks |

### Development dependencies

| Package  | Logo  | Description |
| :------------ |:---------------:| :-----:|
| Storybook      | <img src="https://pbs.twimg.com/profile_images/1100804485616566273/sOct-Txm.png" width="55" height="55" /> | is a tool for UI development. It improves development by isolating components. |
| Jest      | <img src="https://user-images.githubusercontent.com/19708921/116078487-962c8900-a68e-11eb-96d7-de0f7be15d5e.png" width="55" height="55" /> | Code testing suite  |
| Codecov      | <img width="55" src="https://raw.githubusercontent.com/gilbarbara/logos/master/logos/codecov.svg"/> | to measure the test coverage of our codebase and insure the code quality |
| Eslint      | <img width="55" src="https://raw.githubusercontent.com/gilbarbara/logos/master/logos/eslint.svg"/> |  tool for identifying and reporting on patterns, Maintain and improve your code quality |
| prettier      | <img width="55" src="https://raw.githubusercontent.com/gilbarbara/logos/master/logos/prettier.svg"/> |  code formatter to insure the code consistent code style patterns   |
<br />


## Getting Started
How to get a copy of the project up and running on your local machine.

Please ensure you have this software installed and running on your local machine before you attempt to run this webapp.

Node (via nvm recomended) see: https://github.com/creationix/nvm

MongoDB see: https://docs.mongodb.com/manual/installation/

Setup
1. Clone the repo
2. Install Dependencies

```cd presspad```

```$ npm run init:both```

3. Get Mongo running on your local computer
Connect to mongo in a separate terminal tab/window.

```mongod```

4. Add some more Environment Variables
Create a .env file in the root.

PLEASE CONTACT THE TEAM TO GET THE INFORMATION YOU NEED TO PUT INTO THE ENV FILE AS THIS CAN INCLUDE SENSITIVE DATA

5. Build the Database

```npm run build:data:dev```

6. Run the Tests
To make sure everything is working as it should.

```$ npm test```

8. Run the Server

```npm run dev```

Wait for a compiled successfully message.

9. Have Fun
The webapp should now be running on localhost:3000 Now you can play with the code all you like 🎉

If you notice anything wrong with the instructions or the project isn't running as expected don't hesitate to raise an issue and we'll try to figure it out.
