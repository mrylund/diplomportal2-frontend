# Step 1
FROM node:16-alpine as build-step
RUN mkdir /app
WORKDIR /app

ARG BACKEND_URL=${BACKEND_URL}
ARG FRONTEND_URL=${FRONTEND_URL}

RUN if [$BACKEND_URL != ''] ; then ENV REACT_APP_BACKEND_URL=${BACKEND_URL} ; fi
RUN if [$FRONTEND_URL != ''] ; then ENV REACT_APP_FRONTEND_URL=${FRONTEND_URL} ; fi

COPY package.json /app
RUN npm install
COPY . /app
RUN npm run build




# Stage 2
FROM nginx:1.17.1-alpine
COPY --from=build-step /app/build /usr/share/nginx/html
