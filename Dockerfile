FROM node:argon

# Create app directory
RUN mkdir -p /angular2/itinerary-planner
WORKDIR /angular2/itinerary-planner

# Install app dependencies
COPY package.json /angular2/itinerary-planner/
RUN npm install

# Bundle app source
ADD . /angular2/itinerary-planner
