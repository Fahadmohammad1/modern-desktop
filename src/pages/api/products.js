
const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://dbUser:kKvD6WMzaHm6XEtL@cluster0.qxyhrlo.mongodb.net/?retryWrites=true&w=majority";


const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function run(req, res) {
  try {
    
    await client.connect();

    const productCollection = client.db('productCollection').collection('product')
  
    if (req.method === "GET") {
      const products = await productCollection.find({}).toArray();
      res.send({ message: "success", status: 200, data: products });
    }
  } finally {

  }
}

export default run
