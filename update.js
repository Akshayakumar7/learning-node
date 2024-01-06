const dbConnect = require('./mongodb');


const updateData = async () => {
    const db = await dbConnect();
    const result = await db.updateMany(
        { name: "note 6 max pro" },
        { $set: { name: "note 6 max pro",price:2000 ,model:2024} }
    );
    console.log(result, "res")

}

updateData()