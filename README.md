## What is TRANSITT?

This is a simple app that integrates with `https://transport.opendata.ch/docs.html` Swiss public transport API.

We enable users to input a place of origin (**FROM**) and a destination (**TO**), choose a *date* and *time* and some additional options (like choosing trains that have support for bike transport or sleeper cabins). More options will be added later (when i get the time to come back and revisit this app.)

## How to use Transitt?

Very simple. There's only 1 page, it's the homepage. A user will be presented with a form which has 2 input fields (**from**, and **to**)[see above]. These are autocomplete fields and will output hints as the users types (their destination for example). This will be displayed beneath the search fields. 

In order for the system to function properlly the user must click/select an option from the dropdown list of possible matches (if the user can't find what they're looking for they'll have to retype as most likly there was a spelling error.)

Once both the destinationa and point of origin have been selected Transitt will lookup and show 4 (if available) results.

Transitt will automatically use the current *date* and *time* but these can both be changed.

If there are available connection to display to the user, Transitt will render pagination buttons above/bellow the results. (**important**: by default the previous button will not be shown on initial render only the next button, once the user navigates to any other page then Transitt will show the prev button. Additionally there is a limit how many upcoming connections we can show from the Public API.)

The user can also use the *cog* to apply addiitonal filters to their search. (icons are missing from connection view: to indicate if the train has an ability requested by the user, this is on the roadmap).

## Technologies Used
- NextJS (Framework)

### Additional Libraries
- Lodash (Utility)
- HotTostr (Notifications)
- DayJS (DateTime formatter)
- ReactHookForm (Form handling)
- Ant Design (Icons & Date/Time picker)
- Axios (Api calls)

## Getting Started

First install dependacies:

```bash
npm i
# or
yarn install 
```

Then run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```
Or you can run the build version (recommended):

```bash
npm run build && npx next start -p 4000
```
The build version is hosted on PORT:4000 so that we don't have conflicts between the `dev` and `build` servers. (espeficaly on certain Linux distros where if you don't wait for the dev server to shut down gracefully it will lock the port in use from being re-assigned.)

## Vercel

This app is hosted on vercel and can be accessed anytime by visiting this link `https://transitt.vercel.app/`

## Tests

To run the majority of the test run the following commands from the root (./) folder:

```
npm run tests [TODO]
```

## CI/CD

Is handled by Vercel. Just push to the `main` branch and it will trigger a web hook to start the build phase.

[TODO]: create a deploy hook on Vercel (so that a deploy can be trigger by a unique webhook)

## TODOS
- create the expanded Transit view for each element (when a user clicks on any connection we show them more in depth view)
- integrate the Theme context
- add i18 support
- add OAuth (just for fun, we don't really need it)
- create a deploy hook on Vercel (so that a deploy can be trigger by a unique webhook)
- write tests (see if we can use vitest outside of vite)

## Known Bugs
- when pressing the swap button to change the destination and origin the app will process the request and display the accurate data but will keep the location names [**expected**: the strings within the search input fields should swap palces as well]