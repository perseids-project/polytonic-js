# Polytonic Keyboard

This is a virtual keyboard that can be used to type polytonic Greek on systems that lack native support.

## Try it Out

[https://apps.perseids.org/polytonic/](https://apps.perseids.org/polytonic/)

### How to Use

Click on the keys in the virtual keyboard and the characters will appear in the text area above.
The `copy` button in place of the right shift will copy the text to the clipboard.

## Installation

`yarn install`

## Running the development server

`yarn start`

## Building for deployment

Before creating a production build you need to know the path where it will be accessed.
Then run the command `PUBLIC_URL='./path/of/app' yarn build`.
This will generate a set of static files in the `build/` directory that you can serve.

For example, if you want to deploy it at `www.example.com/` then run `PUBLIC_URL='./' yarn build`.
If you want to deploy it at `www.example.com/polytonic` then run
`PUBLIC_URL='./polytonic' yarn build`.

## Running tests

`yarn test`

## Linting the code

`yarn lint`

## Deploying a new version to github.io

`yarn deploy-github`

## Deploying a new version to Perseids

`yarn deploy-perseids`
