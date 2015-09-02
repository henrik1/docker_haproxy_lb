# docker_haproxy_lb
Simple example for setting up haproxy to loadbalance http requests. This example uses a header (hdr) based algorithm to balance http requests on both frontend and backend servers.

## Prerequisites
I order to run this example you need to have Docker set up on your local machine.
You can get it here (mac): [https://docs.docker.com/installation/mac/](https://docs.docker.com/installation/mac/)
or here (windows): [https://docs.docker.com/installation/windows/](https://docs.docker.com/installation/windows/), but who uses windows anyways?

## Clone the repository
` $ git clone git@github.com:henrik1/docker_haproxy_lb.git `

## Docker
Startup the docker containers by running: 
` $ docker-compose up -d `
from the root folder of the example

## Example web page
Open the example web page by navigating to the ip address of your docker machine eg http://192.168.99.100 in your browser.
If you do not know the ip simply do
` $ docker-machine ls `

## View the logs
To view the logs you can either do
` $ docker-compose up `
instead of the example above, or simply do
` $ docker-compose logs `

