// Task 2: Basic CRUD Operations

// Find all books in a specific genre
db.books.find({ genre: "Fiction" })

// Find books published after a certain year (example: 1950)
db.books.find({ published_year: { $gt: 1950 } })

// Find books by a specific author
db.books.find({ author: "George Orwell" })

// Update the price of a specific book
db.books.updateOne({ title: "1984" }, { $set: { price: 15.99 } })

// Delete a book by its title
db.books.deleteOne({ title: "Moby Dick" })

// Task 3: Advanced Queries

// Find books that are both in stock and published after 2010
db.books.find({ in_stock: true, published_year: { $gt: 2010 } })

// Projection: return only title, author, and price
db.books.find({}, { title: 1, author: 1, price: 1, _id: 0 })

// Sort by price ascending
db.books.find().sort({ price: 1 })

// Sort by price descending
db.books.find().sort({ price: -1 })

// Pagination: 5 books per page, skip first 5 (page 2)
db.books.find().skip(5).limit(5)

// Task 4: Aggregation Pipeline

// Average price of books by genre
db.books.aggregate([
  { $group: { _id: "$genre", avgPrice: { $avg: "$price" } } }
])

// Author with the most books
db.books.aggregate([
  { $group: { _id: "$author", count: { $sum: 1 } } },
  { $sort: { count: -1 } },
  { $limit: 1 }
])

// Group books by publication decade and count
db.books.aggregate([
  { $project: { decade: { $concat: [ { $toString: { $multiply: [ { $floor: { $divide: [ "$published_year", 10 ] } }, 10 ] } }, "s" ] } } },
  { $group: { _id: "$decade", count: { $sum: 1 } } }
])

// Task 5: Indexing

// Create an index on the title field
db.books.createIndex({ title: 1 })

// Create a compound index on author and published_year
db.books.createIndex({ author: 1, published_year: 1 })

// Use explain() to show performance improvement
db.books.find({ title: "1984" }).explain("executionStats")
