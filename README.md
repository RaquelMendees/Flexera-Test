Welcome to My GitHub Repo Listing!

- This is a simple React and TypeScript application that lists repositories from GitHub using their API. It includes functionality to toggle the visibility of each repository, paginates the results, and persists the visibility flag even after a page refresh.

Features:

- Fetches the list of repositories from the GitHub API (sorted by stars, filtered by `javascript`).
- Allows the user to toggle the visibility flag of repositories (Show/Hide).
- Implements pagination to navigate through the repository results (10 items per page).
- Displays the repository's avatar, full name, and description.

Requirements:

- Node.js
- npm or yarn (for package management)

Setup instructions:

1. Unzip the File:
   After downloading the project zip file, unzip it to a folder on your local machine.

2. Install Dependencies
   In the project directory, open your terminal or command prompt and run the following command to install the required dependencies:

```bash
npm install
```

or if you're using `yarn`:

```bash
yarn install
```

3. Run the Application
   Once the dependencies are installed, start the development server by running:

```bash
npm start
```

or with `yarn`:

```bash
yarn start
```

This will start the application in development mode, and you will be able to view it in your browser:

http://localhost:3000

4. Test the Application
   We can test the functionality of the app by running 'npm run test'

It was not a requirement for me to do but I wanted to attempt it to show that I can go above and beyond.

How it works?

The app fetches data from the GitHub API and displays the results in a list.
Each repository has a button that toggles its visibility, which is saved in `localStorage` to persist the state even after page refresh.
The pagination allows users to browse through multiple pages of repositories.
Repositories that are not visible are hidden from the display, and the visibility setting is retained for future sessions.

What you added and why:

- The user interface is enhanced to be clean and responsive using flexbox and specific styling for screen sizes.

- I used Axios instead of the fetch API because it’s more straightforward when working with data, like automatically turning the response into JSON, which saves time. It also handles errors better with less code, making it easier to debug.

- I also created a separate RepoItem component to handle how each repository is displayed. This makes the code more organized and reusable. If we require to change how a repo looks, we only have to update one component instead of the whole app.

What would you have done if you had more time?:

I would have updated how I handle promises from the old way to using async/await

```

    const handleRequest = async () => {
      return await axios.get("https://url...");
    };
    handleRequest();
```

I would have broken down the code further to make it easier to read and have better structure.
e.g. Moved the pagination stuff into its own component

I would have use localStorage to save the visitibility state of each repo and cache the repository data. This way when the user refreshes the page, the app doesn’t have to re-fetch everything, which would improve performance. local storage is also for saving the state of the app on page refresh

I have added some unit tests. But I would have done more unit testing given I had more time.

I would like to use more semantic HTML (for example: <article>, <section>) to make the app more accessible for users with screen readers.
