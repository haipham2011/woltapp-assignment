FROM node:14-alpine3.10

ENV PORT 3000

WORKDIR /usr/src/app

#Check node version and npm version
RUN echo "======Node version and npm version======"
RUN node -v && npm -v

# Copy all of the content from the project to the image
COPY . .

RUN npm install

RUN npm run build

# Install serve, found from readme
RUN npm install -g serve

# And finally the command to run the application
CMD serve -s -l ${PORT} build
