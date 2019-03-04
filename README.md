# DevFund - front end

### Author: Becca Lee, Brent Woodward, George Raymond, Jacob Anderson, Jonathan DiQuattro

### Links and Resources
* [Front end repo](https://github.com/jbjbg/devfund-fe)
* [DevFund.io](https://www.devfund.io/)
* [Back end repo](https://github.com/jbjbg/devfund-be)
* [Mock partner repo](https://github.com/jbjbg/devfund-mock-partner)

## Project Info
The DevFund project is a proof-of-concept for a site that helps fund learning resources for new developers looking to break into the industry. It's an easy way for new devs to request the resources they need to learn to code, and for folks looking to give back to help fund them. DevFund was built to help grow the developer community and make giving back to it a little easier.

## Technology Used - Front End
- React
- SASS
- Superagent
- react-router-dom
- Netlify

### Modules
- `public/_redirects` sets up site to handle different routes on the SPA
- `index.html`  contains React boilerplate
- `src/index.js` renders the main app
- `assets/` folder contains the images used on the website
- `components/auth/auth.js` handles auth, verifying token to provide permissions to the user
- `components/auth/context.js` sets the login context so the user can access specific pages of the website
- `components/modules/modal.js` contains the modal scaffolding and some rendering functionality
- `components/about.js` contains the about page, including mission statement and team bios
- `components/accepted.js` sets the accepted page that the user is directed to after submitting a request. It also provides routing to the browse page
- `components/app.js` sets the main routing and rendering functionality for the site
- `components/browse.js` brings in all pitches from the database and renders them to the page. Users may then select a pitch from the page and view its details
- `components/conditionals.js` sets conditional logic used on other pages. Contains conditional for If/Then/Else, When, and Unless.
- `components/detail.js` renders a specific pitch from the database in a modal. If a user would like to fund that pitch, they may then hit the fund button to begin the payment process for the item
- `components/editprofile.js` provides functionality for the user to update their account details via a form
- `footer.js` contains the footer styling and functionality
- `components.js` contains the header functionality and styling, including conditional rendering that changes based on the user's login state
- `components/homepage.js` renders the homepage content
- `components/login.js` sets a login modal where the user can either log in with an existing account, or be directed to the sign up page to create one
- `components/pitch.js` allows the user to submit a pitch if they are logged in and can open the login modal on button click if not. The pitch is then added to the database and the user is redirected to a success page while the browse page updates
- `components/profile.js` pulls the user record from the database and shows the user's existing account information
- `components/signup.js` allows the user to create an account. Upon account creation, the user is added to the database and redirected to the account page, which pulls the newly created record to render the information they entered
- `component/success.js` confirms success of a payment after the user is re-routed to paybal and successfully completes a transaction
- `styles/` folder contains SASS files that style each component of the site


#### Running the app
- to run locally, fork and clone the repo, run `npm i`, and then run `npm start`
- Otherwise, visit the [DevFund](https://www.devfund.io/) site to use the app


#### Sources
Special thanks to [verticalgrain](https://gist.github.com/verticalgrain) for their [gist](https://gist.github.com/verticalgrain/195468e69f2ac88f3d9573d285b09764) on React Router V4 Redirect after form submission. It was a great help with our redirects!

Image credits:
- background images sourced from [Pexels](https://www.pexels.com/)
- social icons sourced from [ionic icons on iconfinder](https://www.iconfinder.com/iconsets/ionicons)
- helping hand icon sourced from [Zlatko Najdenovski on iconfinder](https://www.flaticon.com/authors/zlatko-najdenovski)
- gifs from giphy.com
- placeholder images sourced from [PlaceIMG](http://placeimg.com/)
