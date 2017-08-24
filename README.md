# truffle-init-webpack
Example webpack project with Truffle. Includes contracts, migrations, tests, user interface and webpack build pipeline.

## Usage

To initialize a project with this example, run `truffle init webpack` inside an empty directory.

## Building and the frontend

1. First run `truffle compile`, then run `truffle migrate` to deploy the contracts onto your network of choice (default "development").
1. Then run `npm run dev` to build the app and serve it on http://localhost:8080

## Possible upgrades

* Use the webpack hotloader to sense when contracts or javascript have been recompiled and rebuild the application. Contributions welcome!



DAPPSYS implementation
1) DSauth DSRoles integrated into the contract
2) Only creator can send coins at the moment
3) adding protocol for assiging users and checking assigned roles based on addresses


....Another demo would be using Hiddentao role assignment model
