# How to Run

## Prerequisites

- Install [Node.js](https://nodejs.org/)
- Install [MongoDB Community Edition](https://www.mongodb.com/try/download/community) locally, or create a free [MongoDB Atlas](https://www.mongodb.com/atlas/database) cluster.
- Clone this repository to your local machine.

## Setup

1. Open a terminal and navigate to the project folder.
2. Install dependencies:
   ```
   npm install
   ```
3. If using MongoDB Atlas, update the connection URI in `insert_books.js`:
   ```js
   // ...existing code...
   const uri = 'your-mongodb-atlas-connection-string';
   // ...existing code...
   ```

## Running the Script

1. Make sure MongoDB is running (locally or Atlas).
2. Run the script to insert sample book data:
   ```
   node insert_books.js
   ```
   - If you converted to ES modules, use:
     ```
     node insert_books.mjs
     ```

## Verifying Data

- Open MongoDB Compass or connect with MongoDB Shell (`mongosh`).
- Connect to your MongoDB server.
- Find the `plp_bookstore` database and the `books` collection.
- You should see the sample book documents inserted by the script.

## Troubleshooting

- If you see a "require is not defined" error, ensure your `package.json` does not contain `"type": "module"` (unless using ES modules).
- If using Atlas, ensure your IP is whitelisted and your connection string is correct.

## Additional Notes

- All queries for CRUD, advanced, and aggregation operations are in `queries.js`.
- For performance testing, use the `explain()` method in MongoDB Shell or Compass.