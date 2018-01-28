# Serverless Ethereum Wallet (Frontend)
This is the frontend application for a lightweight Ethereum wallet. This is written with ReactJS, and assumes that you are using Amazon S3 for storage as well as Auth0 for authentication. 

To use this you must have already set up the backend companion app which can be found here: [Serverless Ethereum Wallet Backend](https://github.com/seanvm/Serverless-Ethereum-Wallet-Backend)

This is both a WIP, and a proof of concept, and as such is very limited in functionality.

## [Demo](http://eth-wallet.s3-website-us-west-2.amazonaws.com/)

## Requirements
- You must have set up the backend companion app.
- You must have an Amazon s3 bucket created, and have the AWS cli installed.
- You must have an Auth0 account.

## Setup

1. Install npm dependencies:
```
npm install
```
2. Configure environment variables
Within the root directory of the app you will find a file called `.env.example.local`. You will want to configure the values within this file, and then rename it to `.env.local`. You will also want to created a production version of this file with your production endpoints. This file should be called `.env.production`.

3. To run the app locally:
```
npm start
```

## Deploying

1. Configure the s3 destination

Within the `package.json` file you will need to replace the `s3://eth-wallet` destination in the build command with the name of your own s3 bucket.

2. Run the deploy command:
```
npm run deploy
```
This will run `npm run build:production` followed by `sync build/ s3://YOUR_S3_BUCKET_NAME`. For the sync command to work you must be logged in via the AWS cli.
