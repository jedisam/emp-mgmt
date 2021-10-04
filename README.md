# Emp Mgmt
## Empmgmt


### About
<p>A simple employee management sys</p>
**version 1.0.0**


## Getting Started
- These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.


### <b>Docker</b>
  
  This is the easiest way to get it up and runing.

  It is containerized application with docker image put on docker hub.A docker image is available with all pre-requisites installed. Here is how you use it

<b>Pull docker image</b>

 ```bash
docker pull jedisam/empmgmt:latest
```
<b>Run the docker Image</b>
 ```bash
docker run --rm -it -p 7000:7000/tcp jedisam/empmgmt:latest
```

### <b>Machine Setup</b>
  First, you need to have <b>NodeJS</b> installed on your system.
  
  <b>Clone the project into your local machine </b>

 ```bash
git clone https://github.com/jedisam/empmgmt.git
```

  <b>Install the packages</b>

 ```bash
 cd emp-mgmt && yarn install
```

  <b>Start the server</b>

 ```bash
yarn start
```

## Author

- **Yididya Samuel** [Website](https://jedisam.github.io/)





