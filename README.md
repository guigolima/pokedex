# Pokedex Application

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/guigolima/pokedex.git
cd pokedex
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm start
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

### Available Scripts

- `npm start` - Runs the app in development mode
- `npm test` - Launches the test runner in interactive watch mode
- `npm run build` - Builds the app for production to the `build` folder

## Project Structure

```
src/
├── api/                    # API client and request functions
├── components/             # React components
│   ├── atoms/             # Basic components (TypeChip, LoadingSpinner, etc.)
│   ├── molecules/         # Composite components (PokemonCard, SearchBar, etc.)
│   ├── organisms/         # Complex components (PokemonGrid, AppHeader, etc.)
│   └── templates/         # Layout components
├── constants/             # Type colors and other constants
├── hooks/                 # Custom React hooks (useDebounce)
├── pages/                 # Page components (App)
├── redux/                 # Redux store, slices, and state management
│   └── slices/           # Redux slices (pokemon, favorites, compare, types)
├── styles/               # Theme configuration
└── types/                # TypeScript type definitions
```

## Testing

Run the test suite:
```bash
npm test
```

Press `a` to run all tests, or `q` to quit watch mode.

## Problem description:

Build a Pokedex application using React and Poke API (https://pokeapi.co/). A Pokedex is an
indexer for pokemons containing the description of each pokemon and its attributes. The API
you will consume is the Pokémon API which can be found in this link: https://pokeapi.co/

**The user should be able to search and filter by Pokemons and the Pokemon should have a details page.**

While not required, it would be great if the application allowed:

* Users to compare Pokemons, attributes, etc. and/or included elements like charts to visualize
  some data.

* Also be able to add Pokemons to a “favorites” list and filter by only favorite Pokemons.

You will have two days to complete the challenge, but you can deliver the challenge before
the deadline. You can use create-react-app to get started and design the visual layout as you’d
like.

## Guidelines (What we’re looking for):

* We will evaluate the way you structure and write your code—from the standards you use
to how you name your functions and structure your folders. We’re looking for consistency
and human-readable code.

* We want to see your process (i.e., how often you commit your changes, the clarity of
your commit messages, whether you break large tasks into smaller ones, etc.). Please
do not make a single commit with two weeks’ worth of changes.

* We expect to be able to run your code locally on our machines. Please ensure you
include any environment variables necessary to clone and start up your application.

* We expect a detailed README.md file outlining steps on how to run your project (feel free to overwite this one).

* We will also test the usability of your application from a UX perspective, so please
ensure your application runs properly.

* We don’t require that you write in Typescript—this is optional. Plain JavaScript is fine.
But if you do opt to write in Typescript, don’t type everything as any.

## Suggestions:

* Plot charts with the Pokemons attributes (our suggestion is https://www.amcharts.com/)

* Create a comparison table between the Pokemon attributes (our suggestion is
  https://www.ag-grid.com/ sorting, reordering, etc…)

* Unit tests using https://testing-library.com/docs/react-testing-library/intro/ and jest

* Any knowledge in automated tests software (cypress, webdriver I/O, selenium)