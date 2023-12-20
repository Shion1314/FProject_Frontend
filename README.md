# FProject_Frontend
Example URL: http://localhost:3000/FProject_Frontend/ (Delete this if you guys think its not necessary cause something when I run npm start it begin with http://localhost:3000 which it wouldn't output any, but he might not test our code)

## UI Requirements
### Create a topbar or sidebar component that is present throughout the app




### Create 3 or more additional components
#### 1. Search Component
Search for universities based on user input on the university name and display relevant information.
- [FilterSearch](https://github.com/Shion1314/FProject_Frontend/blame/e96e14519755c08f1fe405376358fd640843435b/src/components/NameSearch.js#L49-L83)

#### 2. Filter Component
Filter universities based on user input on scores and more, then display relevant information.
- [University Search by Name](https://github.com/Shion1314/FProject_Frontend/blame/f93ca8e88a8076707214753eaa025e81222c10d3/src/components/FilterSearch.js#L38-L88)

#### 3. Auto Fill Component
Automatically fill input fields.
- [UniversityAutofill.js](https://github.com/Shion1314/FProject_Frontend/blame/47af0c765c0aa48f8e3fe173dd0760b132827053/src/api/UniversityAutofill.js#L1-L4)(API)
- [NameSearch.js](https://github.com/Shion1314/FProject_Frontend/blame/8c1f8802e5b721fa68ed21afb5a138b3ab920acb/src/components/NameSearch.js#L64-L72)(@ccheung check if this is correct for AUTO FILL)

#### 4. University Website Component
Show the official website of a university.
- [UniversityWebsite.js](https://github.com/Shion1314/FProject_Frontend/blame/a88aa11a7e4ff498a46829a81b2ec611602c171e/src/api/UniversityWebsite.js#L1-L4)(API)
- [SearchResult.js](https://github.com/Shion1314/FProject_Frontend/blame/35867805811e3bf93704975c773a52c027bb99fc/src/components/SearchResults.js#L39)(@ccheung check if this is correct at SearchResult.js)

  
### 1 or more components should take text-based user input
- [Search Based University Name inputed](https://github.com/Shion1314/FProject_Frontend/blame/e96e14519755c08f1fe405376358fd640843435b/src/components/NameSearch.js#L49-L83)
- [Filter University based on inputs](https://github.com/Shion1314/FProject_Frontend/blame/f93ca8e88a8076707214753eaa025e81222c10d3/src/components/FilterSearch.js#L38-L88)

### 1 or more components should display data representing a single instance from a model
- [Search Based University Name inputed](https://github.com/Shion1314/FProject_Frontend/blame/e96e14519755c08f1fe405376358fd640843435b/src/components/NameSearch.js#L49-L83)
Only output the university info that fit the inputed value which is the university Name

### 1 or more components should display data based on store state

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



## EXTRA credit
### Develop a project that isn't the Employee Management System
### encrypt the password(Professor mention this in class but not sure why he didn't include it in bb)
* Link here
