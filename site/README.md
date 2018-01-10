# Design system documentation site

Welcome to the innards of the Kalo Design System documentation site. The docs are built using [next.js](https://github.com/zeit/next.js), and hosted on [Now](https://github.com/zeit/now-cli).

## Running locally
- Clone the UI repo locally.
- `cd site` to change in to the site directory
- `npm install`
- `npm run dev`
- And you should be up and running at [localhost:3000](http://localhost:3000)

## Deploying
There are currently a few gotchas to deploying the site.

Rather than building the site during deployment, it must first be built locally. The following sequence should help resolve this:

- `npm run build` - (in this directory (ui/site))
- `cd ../` - (to move up one directory to ui)
- `cf push` - (to push to CloudFoundry)