# CREW APPLICATION

Simple application which represents dashboard with candidates.


### Action points:
- Cypress framework was used for end-to-end tests
- `Filters` and `moving items between columns` functionalities were covered by tests
- All test-suites can be found in `cypress/e2e` directory
- npm script `test:e2e:dev` was added for local cypress development 
- `docker-compose.yml` file was added

### Build and test
`docker-compose up`


### Running locally
`yarn install`

`yarn start`

App will be available on http://localhost:3000


### Running in docker
`docker build -t crew-app .`

`docker run -it --rm -p 5000:5000 --name crew-container crew-app`

App will be available on http://localhost:5000
