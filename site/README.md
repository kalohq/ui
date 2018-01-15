# @kalo/ui documentation site

Welcome to the @kalo-ui documentation. The docs are built using [Gatsby](https://www.gatsbyjs.org).

## Running locally
- Clone the UI repo locally.
- `cd site` to change in to the site directory
- `npm install`
- `npm run start`
- And you should be up and running at [localhost:3000](http://localhost:3000)

## Deploying
There are currently a few gotchas to deploying the site.

Rather than building the site during deployment, it must first be built locally. The following sequence should help resolve this:

- `npm run build` - (in this directory (ui/site))
- `cf push` - (to push to CloudFoundry)

*This first command will do two things:*
- *Build the site using the Gatsby buildsystem*
- *Create an empty `Staticfile` in the public directory. This allows us to deploy just the public directory, rather than the whole site directory*