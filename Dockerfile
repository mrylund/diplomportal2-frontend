# Step 1
FROM node:16-alpine as build-step
RUN mkdir /app
WORKDIR /app
COPY package.json /app
RUN npm install
COPY . /app
RUN npm run build

ENV REACT_APP_BACKEND_URL = ${BACKEND_URL}
ENV REACT_APP_FRONTEND_URL = ${FRONTEND_URL}


# Stage 2
FROM nginx:1.17.1-alpine
COPY --from=build-step /app/build /usr/share/nginx/html
