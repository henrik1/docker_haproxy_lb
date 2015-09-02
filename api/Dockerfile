FROM phusion/baseimage:latest

MAINTAINER Henrik Larsen Toft <henrik@vimond.com>

ENV REFRESHED_AT 2015-05-28 13:36:00

EXPOSE 80

RUN apt-get update && apt-get -yqq install nodejs && apt-get -yqq install npm

RUN mkdir /app
COPY . /app
RUN cd /app && npm install


CMD ["nodejs", "/app/app.js"]
