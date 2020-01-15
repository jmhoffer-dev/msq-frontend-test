# msq-frontend-test

## Objective:

Build out the front end of the application using any libraries, components, UI frameworks etc. to match the requirements identified in the zeplin project available @ https://app.zeplin.io/project/5e1cd84fadbc3abce5f7d4e3/dashboard. For access to the zeplin project, please create a free zeplin account and then notify matchsquare that you have registered and what email you used to register so that you can be added to the project.

The intent of the scenario is to be less than or around one hour. You do not have to spend more than an hour on this exercise.

### Setup

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

Required software:

- node
- npm

Fork this repo and use this React project as a starting point. Clone to your machine and run the following from command line:

```
cd msq-frontend-test/
npm install
# yarn works too
npm start
```

Open http://localhost:3000 in your browser if it doesn't open automatically.

Sample image assets and mock data endpoints necessary for you to begin are available in the /public path from the project root.

### Functional Requirements

The concept of these requirements are that the user is looking at a list of stores and can favorite a store. Each store can have a minimum order amount and may have new items. Due to time constraints, this exercise is limited to to front end implementation implementation. Whether not a store is favorited will reset on a page load to the defaults in the data file.

- _The search input field does not need to work but should be present in the html as appropriate for the designs_
- _Mobile navigation is not part of the requirements and does not need to be implemented, however the header for the mobile version must reflect appropriately as per the designs_
- Number of results should reflect the actual number of results that are presented to the user in the current state
- A user can favorite/unfavorite a store by clicking the favorite icon (heart)
- A user can view only their favorite stores by selecting the box to view only favorites. Changing to view favorites updates the number of results to be the number of favorites.
- A user can view all stores by unselecting the box to view only favorites. The number of results should be updated to reflect the number of stores in the mock data.

### Technical Requirements

- Site will be rendered in latest version of Chrome (mac/windows/android), latest version of Firefox (mac/windows), Safari (iphone), and latest version of IE (windows)
- CSS should be implemented using SCSS
- Data loaded must come from the MOCK_DATA.json file which can be accessed through the public folder
- The site must be responsive using the following breakpoints:

  - Desktop > 768px -> https://app.zeplin.io/project/5e1cd84fadbc3abce5f7d4e3/screen/5e1cf6837b1d237bccda2709
  - Tablet 376px - 768px -> https://app.zeplin.io/project/5e1cd84fadbc3abce5f7d4e3/screen/5e1cf268ff24c3be01bd39e6
  - Mobile <= 375px -> https://app.zeplin.io/project/5e1cd84fadbc3abce5f7d4e3/screen/5e1cebbcc98a8003f193de67

### UX/UI Requirements

- Please see the style guide for text styles and colors - https://app.zeplin.io/project/5e1cd84fadbc3abce5f7d4e3/styleguide/
- Fonts are available from googlefonts (fallback font is sans-serif) - https://fonts.googleapis.com/css?family=Noto+Serif+JP:600|Poppins:400,500&display=swap
- For simplicity, animations are not required.
- Hovering over the favorites icon changes the state to active/inactive accordingly (there are only 2 states)
- The state for favorites is only changed by a user clicking or touching the icon
