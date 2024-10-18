# Bigquery on Edge
Using this repo, let's learn how bigquery can exist as edge functions on Fleek, popularily known as Fleek Functions

## Getting Started
1. Clone the repo
2. Install dependencies - `npm i`
3. Build the Fleek Function - `npm run build`
4. Create and Deploy the Fleek Function using the Fleek CLI
   1. `fleek functions create --name bgquery`
   2. `fleek functions deploy --name bgquery --path ./dist/bundle.js`

## Fundamentals
- Fleek functions enable serverless code execution and minimal devops overhead. These functions can be fetched from any data origin and Fleek can host them and ensure maximum performance and low latency. In our case we are using IPFS to store them, as at the time of writing this, the Fleek CLI supports it. JS runtime is a service on Fleek that enables javascript Fleek Functions.

![image](https://github.com/KanishkKhurana/solana-blink-on-edge/assets/74613246/7459e2d6-b1c9-4a3f-b9f1-56a0e9be5d93)


[Learn more about Fleek Functions and JS Runtime here](https://blog.fleek.network/post/fleek-network-developer-guide-js-runtime/)

