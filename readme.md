# Setup
1. Download the repository to your local machine
1. Rename `.env.example` to `.env`
1. Fill out missing info in `.env`

# Build and run the docker image
1. Run `docker build -t {PROJECT-NAME} -f Dockerfile.local .` to create a docker image
1. Run `docker run -d -p 443:80 {PROJECT-NAME}`
1. You should now have a docker container running on port 443