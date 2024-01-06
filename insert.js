// Insert data from MongoDB

//**Insert data in mongoDb from nodejs */


const dbConnect = require('./mongodb');

const insert = async () => {
    const collection = await dbConnect();

    const result = await collection.insertOne({
        name: "note 11",
        brand: "vivo",
        price: 620,
        category: "products"
    });

    console.log("result", result);

    if (result.acknowledged) {
        console.log("Data inserted");
    } else {
        console.log("Failed to insert data");
    }
};

insert();
