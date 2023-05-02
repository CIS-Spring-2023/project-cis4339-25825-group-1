const express = require("express");
const router = express.Router();
const { MongoClient } = require("mongodb");

// Connection URI
const uri = "mongodb+srv://<username>:<password>@<cluster>.mongodb.net/<database>?retryWrites=true&w=majority";

// MongoDB client
const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Connect to the MongoDB Atlas
client.connect((error) => {
  if (error) {
    console.error("Failed to connect to MongoDB Atlas: ", error);
  } else {
    console.log("Connected to MongoDB Atlas");
  }
});

// Route to get clients by zip code
router.get("/clients-by-zipcode", async (req, res) => {
  try {
    // Get the clients collection from the database
    const collection = client.db("mydatabase").collection("clients");

    // Aggregate the clients by zip code and count the number of clients in each zip code
    const results = await collection.aggregate([
      {
        $group: {
          _id: "$zipCode",
          count: { $sum: 1 },
        },
      },
      {
        $project: {
          _id: 0,
          zipCode: "$_id",
          count: 1,
        },
      },
    ]).toArray();

    // Convert the results to an object with zip codes as keys and counts as values
    const data = {};
    for (const { zipCode, count } of results) {
      data[zipCode] = count;
    }

    res.json(data);
  } catch (error) {
    console.error(error);
    res.status(500).send("An error occurred while fetching the data");
  }
});

module.exports = router;