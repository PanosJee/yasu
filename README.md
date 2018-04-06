# YASU - Yet Another Splunk UI

React UI for Splunk Enterprise

This app uses [Create-React-App](https://github.com/facebook/create-react-app)

## How to Run
- Prerequisited:
    - `git clone` the repository
    - Run `yarn install`
    - Copy `config.example.js` to `./src/config.js`
    - In order to query splunk, a middle HTTP server is requires (`serverUrl` in config.js). The URL should point to an endpoint that recieve POST request with the parameter `q` (as the query) in the body. The endpoint should return search results as json.
- Development mode: 
    - Run `yarn start`
- Production mode:
    - Run `yarn build`
    - Serve `./build` folder