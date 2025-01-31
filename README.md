# HNG12 Task 0
Simple Api built with Node.js and Express.js. It returns my regisered email, current datetime in ISO 8601 format and githubUrl.

## SetUp
1. Clone the repository
```bash
git clone https://github.com/mwihoti/HNGTask0
```
2. Navigate to the project directory:
```bash
cd HNGTask0
```
3. Install dependencies
```bash
npm install
```
4. Run application:
```bash
node app.js
```

## API Documentation
#### GET /
returns a JSON response (200):
```{
 "email":"danielmwihoti@gmail.com",
 "current_datetime":"2025-01-31T02:31:56.812Z",
 github_url":"https://github.com/mwihoti/HNGTask0"
}
```

Node.js: https://hng.tech/hire/nodejs-developers