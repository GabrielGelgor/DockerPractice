# Use the 'as' tag to indicate a new phase named 'x' has begun. By deafult though, build stages are numbered.
FROM node:alpine
WORKDIR '/app'
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build
#/app/build will contain all our files

#Every phase can have only ONE FROM statement. As soon as another has been seen, we know a new phase has started.
FROM nginx
#Expose a specific port
EXPOSE 80
#Copy something from the builder phase: Only the results of the build, not needing to worry about that metric ton of dependencies!
COPY --from=0 /app/build /usr/share/nginx/html
