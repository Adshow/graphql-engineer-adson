# GraphQL API Challenge

## How to Run the Application

1. **Clone the repository:**
git clone git@github.com:Adshow/graphql-engineer-adson.git
cd graphql-engineer-adson

2. **Build the Docker image:**
docker build -t graphql-api .

3. **Run the container:**
docker run -p 4000:4000 graphql-api

The API will be available at [http://localhost:4000](http://localhost:4000)
---

## How to Run the Tests Manually
docker run graphql-api npx jest

---

**Feel free to reach out if you have any questions!**