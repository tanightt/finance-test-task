## Description

This is a solution to display price tickers data on the UI in realtime.

Description:

- application connect to the locally running service
- application render price changes for some tickers in real time
- application has additional visual effects to highlight positive or negative changes in the prices
- the possibility to add/remove ticker from favorites

Technologies:

- React
- Redux (Redux-Thunk, Redux Toolkit)
- Socket.io
- Styled-components
- Testing Library (redux-mock-store)

## Running the local service

1. Open a new bash shell
2. `cd server`
3. `npm install` or `yarn install`
4. `npm run start` or `yarn start`
5. You can visit [http://localhost:4000](http://localhost:4000) to check that the service is working correctly and inspect the data it produces.

## Run an application

1. Open a new bash shell
2. `cd client`
3. `npm install` or `yarn install`
4. `npm run start` or `yarn start`

## Run the tests

1. Open a new bash shell
2. `cd client`
3. `npm run test` or `yarn test`

# Price Service Usage

URL:
`http://localhost:4000`

Price tickers are real-time via web-sockets.
