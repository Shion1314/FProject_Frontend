# FProject_Frontend
Home Page URL: http://localhost:3000/FProject_Frontend/ 

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
- Search Results component display data based on the searchResults store state
   - shown in `UniversitySearch.js` [line 43](https://github.com/Shion1314/FProject_Frontend/blob/cb0b9351b988fc67536a37ad4a0b553117c091ea/src/pages/UniversitySearch.js#L43)
- The `FilterSearch.js` in [line 31](https://github.com/Shion1314/FProject_Frontend/blame/cb0b9351b988fc67536a37ad4a0b553117c091ea/src/components/FilterSearch.js#L31) and `NameSearch.js` in [lines 36-42](https://github.com/Shion1314/FProject_Frontend/blame/bf1669ac94f3002261d99ebb0a92f2046c37f02b/src/components/NameSearch.js#L36-L42) modifies the searchResults store state

### Components should enable to user to perform CRUD operations on the backend models
- CREATE
   - The Add Favorite button from `SearchResults.js` [lines 61-71](https://github.com/Shion1314/FProject_Frontend/blame/e96e14519755c08f1fe405376358fd640843435b/src/components/SearchResults.js#L61-L71) uses the `addFavorite()` function from `api/favorites.js` in [lines 3-18](https://github.com/Shion1314/FProject_Frontend/blob/e96e14519755c08f1fe405376358fd640843435b/src/api/Favorites.js#L3-L18) to create a new favorite university into the database
- READ
  - The favorites page uses the `getFavorite()` function from `api/favorites.js` [lines 20-26](https://github.com/Shion1314/FProject_Frontend/blob/e96e14519755c08f1fe405376358fd640843435b/src/api/Favorites.js#L20-L26) return the list of favorited universities for the current user
- UPDATE
  - The Up and Down button within each university displayed in the favorites page uses the `rankFavorite()` function from `api/favorites.js` [lines 39-57](https://github.com/Shion1314/FProject_Frontend/blob/cb0b9351b988fc67536a37ad4a0b553117c091ea/src/api/Favorites.js#L39-L57) updates the ranking of their favorited universities
- DELETE
  - The Remove Favorite button from `SearchResults.js` [lines 49-59](https://github.com/Shion1314/FProject_Frontend/blame/e96e14519755c08f1fe405376358fd640843435b/src/components/SearchResults.js#L49-L59) uses the `removeFavorite()` function from `api/favorites.js` [lines 28-37](https://github.com/Shion1314/FProject_Frontend/blob/cb0b9351b988fc67536a37ad4a0b553117c091ea/src/api/Favorites.js#L28-L37) remove the indicated university from the database

## Client-Side Routing

### Create 2 our more routes that display different components based on the URL, that are accessible from the navbar/topbar
- Home Page (accessible from NavBar [lines 48-51](https://github.com/Shion1314/FProject_Frontend/blob/e96e14519755c08f1fe405376358fd640843435b/src/components/Navbar.js#L48-L51))
- Favorite Page (accessible from NavBar [lines 66-71](https://github.com/Shion1314/FProject_Frontend/blob/e96e14519755c08f1fe405376358fd640843435b/src/components/Navbar.js#L66-L71))

### Use dynamic segments to display appropriate info based on the segment info


## State Management
### Create a store and a reducer to handle incoming actions
- store and reducers are created in [store.js](https://github.com/Shion1314/FProject_Frontend/blob/e96e14519755c08f1fe405376358fd640843435b/src/store.js)

### Create 1 or more action creators to create actions based on inputs
- `setSearchResults()` from `store.js` [lines 56-58](https://github.com/Shion1314/FProject_Frontend/blob/e96e14519755c08f1fe405376358fd640843435b/src/store.js#L56-L58) modifies the searchResults store state

### Update store state using dispatch and actions
- The `FilterSearch.js` in [line 31](https://github.com/Shion1314/FProject_Frontend/blame/cb0b9351b988fc67536a37ad4a0b553117c091ea/src/components/FilterSearch.js#L31) and `NameSearch.js` in [lines 36-42](https://github.com/Shion1314/FProject_Frontend/blame/bf1669ac94f3002261d99ebb0a92f2046c37f02b/src/components/NameSearch.js#L36-L42) uses `dispatch(setSearchResults())` to modify the searchResults store state to the appropriate search results

### Reflect updates to the state in the frontend UI
- `SearchResults.js` display data based on the searchResults store state
   - shown in `UniversitySearch.js` [line 43](https://github.com/Shion1314/FProject_Frontend/blob/cb0b9351b988fc67536a37ad4a0b553117c091ea/src/pages/UniversitySearch.js#L43)

## API Calls
### Backend: Using the backend routes, should be able to perform CRUD operations on database models
- the [utils/call-api.js](https://github.com/Shion1314/FProject_Frontend/blob/e96e14519755c08f1fe405376358fd640843435b/src/utils/call-api.js) and functions from `api/favorites.js` are used to perform CRUD operations on database models
  - more information is shown above
    
### External: Should make 2 or more External API calls
- Auto Fill
   - Automatically fill input fields for UniversityName search using [College Scorecard](https://collegescorecard.ed.gov/data/documentation/)
   - [api/UniversityAutofill.js](https://github.com/Shion1314/FProject_Frontend/blame/47af0c765c0aa48f8e3fe173dd0760b132827053/src/api/UniversityAutofill.js#L1-L4)(API)
   - Used in [components/NameSearch.js](https://github.com/Shion1314/FProject_Frontend/blame/8c1f8802e5b721fa68ed21afb5a138b3ab920acb/src/components/NameSearch.js#L64-L72)
- University Website Link Component
   - Fetch university website link from external API based on the university name using [University Domains List API](https://github.com/Hipo/university-domains-list)
   - [api/UniversityWebsite.js](https://github.com/Shion1314/FProject_Frontend/blame/a88aa11a7e4ff498a46829a81b2ec611602c171e/src/api/UniversityWebsite.js#L1-L4)(API)
   - Used in [components/SearchResult.js](https://github.com/Shion1314/FProject_Frontend/blame/a88aa11a7e4ff498a46829a81b2ec611602c171e/src/components/UniversityWebsiteLink.js#L39)

## EXTRA credit
### Develop a project that isn't the Employee Management System
### Have at least one child component, within a parent component, within a parent component that you create 
- The `UniversityWebsiteLink.js` is a child component of `SearchResults.js` which is a child component of `UniversitySearch.js`
### Encrypt Password

