# FProject_Frontend
Example URL: http://localhost:3000/FProject_Frontend/ (Delete this if you guys think its not necessary cause something when I run npm start it begin with http://localhost:3000 which it wouldn't output any, but he might not test our code)

## UI Requirements
### Create a topbar or sidebar component that is present throughout the app
- [Navbar.js](https://github.com/Shion1314/FProject_Frontend/blame/e96e14519755c08f1fe405376358fd640843435b/src/components/Navbar.js)

### Create 3 or more additional components
- [Name Search Component](https://github.com/Shion1314/FProject_Frontend/blame/e96e14519755c08f1fe405376358fd640843435b/src/components/NameSearch.js)
   - Search for universities based on user-inputted university names and display relevant information.

- [Filter Search Component](https://github.com/Shion1314/FProject_Frontend/blame/f93ca8e88a8076707214753eaa025e81222c10d3/src/components/FilterSearch.js)
   - Filter universities based on user-inputted SAT scores, GPA scores, tuition, and major, then display relevant information.

- [University Website Link Component](https://github.com/Shion1314/FProject_Frontend/blame/a88aa11a7e4ff498a46829a81b2ec611602c171e/src/components/UniversityWebsiteLink.js)
   - Fetch the official website of a university from an external API 

- [Search Results Component](https://github.com/Shion1314/FProject_Frontend/blame/e96e14519755c08f1fe405376358fd640843435b/src/components/SearchResults.js)
   - Display universities that match what the user searched for in a table that outlines their details

### 1 or more components should take text-based user input
- `NameSearch.js` in [lines 54-63](https://github.com/Shion1314/FProject_Frontend/blame/e96e14519755c08f1fe405376358fd640843435b/src/components/NameSearch.js#L54-L63)
- `FilterSearch.js` in [lines 38-88](https://github.com/Shion1314/FProject_Frontend/blame/f93ca8e88a8076707214753eaa025e81222c10d3/src/components/FilterSearch.js#L38-L88)

### 1 or more components should display data representing a single instance from a model
- `SearchResults.js` in [lines 37-46](https://github.com/Shion1314/FProject_Frontend/blob/e96e14519755c08f1fe405376358fd640843435b/src/components/SearchResults.js#L37-L46)
   - The table row displays data from a university model

### 1 or more components should display data based on store state
- Search Results component display data based on the `searchResults` store state
   - shown in `UniversitySearch.js` [line 43](https://github.com/Shion1314/FProject_Frontend/blob/cb0b9351b988fc67536a37ad4a0b553117c091ea/src/pages/UniversitySearch.js#L43)
- The `FilterSearch.js` in [line 31](https://github.com/Shion1314/FProject_Frontend/blame/cb0b9351b988fc67536a37ad4a0b553117c091ea/src/components/FilterSearch.js#L31) and `NameSearch.js` in [lines 36-42](https://github.com/Shion1314/FProject_Frontend/blame/bf1669ac94f3002261d99ebb0a92f2046c37f02b/src/components/NameSearch.js#L36-L42) modifies the `searchResults` store state

### Components should enable to user to perform CRUD operations on the backend models


## Client-Side Routing

### Create 2 our more routes that display different components based on the URL, that are accessible from the navbar/topbar

### Use dynamic segments to display appropriate info based on the segment info


## State Management
### Create a store and a reducer to handle incoming actions
### Create 1 or more action creators to create actions based on inputs
### Update store state using dispatch and actions
### Reflect updates to the state in the frontend UI

## API Calls
### Backend: Using the backend routes, should be able to perform CRUD operations on database models
### External: Should make 2 or more External API calls
1. Auto Fill
   - Automatically fill input fields for UniversityName search.
   - [UniversityAutofill.js](https://github.com/Shion1314/FProject_Frontend/blame/47af0c765c0aa48f8e3fe173dd0760b132827053/src/api/UniversityAutofill.js#L1-L4)(API)
   - Used in [NameSearch.js](https://github.com/Shion1314/FProject_Frontend/blame/8c1f8802e5b721fa68ed21afb5a138b3ab920acb/src/components/NameSearch.js#L64-L72)
2. University Website Link Component
   - Fetch university website link from external API based on the university name
   - [UniversityWebsite.js](https://github.com/Shion1314/FProject_Frontend/blame/a88aa11a7e4ff498a46829a81b2ec611602c171e/src/api/UniversityWebsite.js#L1-L4)(API)
   - Used in [SearchResult.js](https://github.com/Shion1314/FProject_Frontend/blame/a88aa11a7e4ff498a46829a81b2ec611602c171e/src/components/UniversityWebsiteLink.js#L39)

## EXTRA credit
### Develop a project that isn't the Employee Management System
### encrypt the password(Professor mention this in class but not sure why he didn't include it in bb)

