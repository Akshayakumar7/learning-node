// const fs = require("fs")
// const app = require('./app')

// console.log(typeof app.x)
// console.log("Hello");
// var  a = 20;
// var b = 30;
// var c = 50;
// console.error(a+b+c);
// console.log(app.z());
// fs.writeFileSync("hello.txt","Code step ny step");
// console.log(typeof fs);
// console.log("-->>>",__filename);
// console.log("-->>>",__dirname);
// fs.writeFileSync("helloone.js","var value = 200;console.log(value)");

// const gs = require("fs").writeFileSync;
// gs("xyz.txt","abc");



// const http = require("http");
// http.createServer((req, res) => {
//     res.write("<h1>Hello Node JS<h1>");
//     res.end()
// }).listen(4500);

// http.createServer((req, res) => {
//     res.write("<p>Hello>>>>> Node JS<p>");
//     res.end()
// }).listen(4600)



// console.log("Called >>>>>")

// const http = require("http");
// const data = require("./data.js");
// http.createServer((req, resp) => {
//     resp.writeHead(200, { "Content-Type": "application/json" });
//     resp.write(JSON.stringify(data));
//     resp.end()
// }).listen(4000)


// console.log("Hello",process.argv[3])



// const fs = require('fs');
// const input = process.argv;
// fs.writeFileSync(input[2],input[3]);



// const fs = require('fs');
// const input = process.argv;

// if (input[2] == "add") {
//     fs.writeFileSync(input[3], input[4])
// } else if (input[2] == "remove") {
//     fs.unlinkSync(input[3])
// } else {
//     console.log("invalid input")
// }


// const fs = require('fs');
// fs.writeFile("apple.txt", "this is apple file")

// const path = require('path');
// const dirPath = path.join(__dirname, "file");
// for (let i = 0; i < 5; i++) {
//     fs.writeFileSync(dirPath + "/hello" + i + ".txt", "this is simple file")
// }

// fs.readdir(dirPath, (err, fls) => {
//     fls.forEach((item) => {
//         console.log(">>>>", item)
//     })
// })



// const fs = require("fs");
// const path = require('path');

// const dirPath = path.join(__dirname, "crud");
// const filePath = `${dirPath}/fruit.txt`;


//create new file

// fs.writeFileSync(filePath, "This is initial simple text")

//------------------------------------------------------------
// read content of file 

// fs.readFile(filePath, "utf8", (err, item) => {
//     console.log(item)
// })

//------------------------------------------------------------

// add more text to file

// fs.appendFile(filePath, " and file name is apple.txt", (err) => {
//     if (!err) {
//         console.log("File is Updated")
//     }
// })

//------------------------------------------------------------


//  update file name

// fs.rename(filePath, `${dirPath}/fruit.txt`, (err) => {
//     if (!err) {
//         console.log("File is Updated")
//     }
// })


//------------------------------------------------------------

// delete file

// fs.unlinkSync(filePath)


// let a = 20;
// let b = 0;

// let waitingData = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve(30)
//     }, 2000)
// })

// waitingData.then((data) => {
//     b = data;
//     console.log(a + b)
// })

//------------------------------------------------------------



// setTimeout(() => {
//     console.log("Zero Sec")
// }, 0)
// console.log("1")

// setTimeout(() => {
//     console.log("Two Sec")
// }, 2000)

// setTimeout(() => {
//     console.log("Zero Sec")
// }, 0)

// console.log("2")
// console.log("3")
// console.log("4")
// console.log("5")
// console.log("6")




//------------------------------------------------------------







// const express = require("express");
// const app = express()

// app.get("", (req, res) => {
//     res.send("Hello, this is Home Page");
// });

// app.get("/about", (req, res) => {
//     res.send("Hello, this is About Page");
// });

// app.get("/help", (req, res) => {
//     res.send("Hello, this is help Page");
// });

// app.get("", (req, res) => {
//     console.log(req.query?.name)
//     res.send("Hello, this is Home Page");
// });

// app.get("/about", (req, res) => {
//     res.send(`
//     <input type="text" placeholder="user name" value=${req?.query?.name}/>
//     <button>Click me</button>
//     <a href="/" > Go to Home Page</a>
//     `);
// });

// app.get("/about", (req, res) => {
//     res.send([
//         {
//             name: "Akshay",
//             email: "akshay@gmail.com"
//         }
//     ]);
// });

// app.listen(4000)





//------------------------------------------------------------




// const express = require("express");
// const path = require("path");


// const app = express();
// const publicPath = path.join(__dirname, "public")
// app.use(express.static(publicPath))



// app.listen(4000)



//------------------------------------------------------------



// const express = require("express");
// const path = require("path");


// const app = express();
// const publicPath = path.join(__dirname, "public");

// app.get("", (_, resp) => {
//     resp.sendFile(`${publicPath}/index.html`)
// });

// app.get("/about", (_, resp) => {
//     resp.sendFile(`${publicPath}/about.html`)
// });

// app.get("*", (_, resp) => {
//     resp.sendFile(`${publicPath}/nopage.html`)
// });


// app.listen(4000);

//------------------------------------------------------------




// const express = require("express");
// const path = require("path");


// const app = express();
// const publicPath = path.join(__dirname, "public");

// app.set('view engine','ejs');

// app.get("/profile", (_, resp) => {
//     const user = {
//         name:"akshay s",
//         email : "akshay@gmail.com",
//         city:"Bengaluru",
//         skills:["Java","Pyton","JavaScript","React","Node"]
//     }
//     resp.render('profile',{user})
// });

// app.get("/login",(_,resp)=>{
//     resp.render('login')
// })


// app.listen(4000);


//------------------------------------------------------------------

//middleware creating

// const express = require('express');
// const reqFilter = require('./middleware')
// const app = express();
// const route = express.Router();

// const DB_PATH = "mongodb+srv://akshayakumaras:CykgOqzgM57YQVXv@cluster0.ukmau3c.mongodb.net/?retryWrites=true&w=majority"


// console.log("DB_PATH",DB_PATH)

// // app.use(reqFilter)
// route.use(reqFilter)
// app.get('/', (req, res) => {
//     res.send("Welcome to Home Page")
// })

// app.get('/users', (req, res) => {
//     res.send("Welcome to Users Page")
// });

// route.get('/contact', (req, res) => {
//     res.send("Welcome to contact Page")
// });

// route.get('/users', (req, res) => {
//     res.send("Welcome to Users Page")
// });

// app.use("/", route)

// app.get('*', (req, res) => {
//     res.send("Error 404 , Page not found")
// });

// app.listen(4000);



//---------------------------------------------------------------------

//get started with mongodb

// const { MongoClient } = require('mongodb');
// const url = "mongodb+srv://akshayakumaras:CykgOqzgM57YQVXv@cluster0.ukmau3c.mongodb.net/?retryWrites=true&w=majority";
// const client = new MongoClient(url);
// const database = "products";


// async function getData() {

//     let result = await client.connect();
//     let db = result.db(database);
//     let connection = db.collection("mobiles");
//     let response = await connection.find({}).toArray();
//     console.log("response", response[0]);

// }

// getData();

//---------------------------------------------------------------------


// const app = require("express")();
// const http = require('http').Server(app);

// const mongoose = require('mongoose');

// mongoose.connect("mongodb+srv://akshayakumaras:CykgOqzgM57YQVXv@cluster0.ukmau3c.mongodb.net/?retryWrites=true&w=majority");

// const user = require("./module/userModule")

// const addUser = async () => {
//     await user.create({
//         name: "Akshay",
//         email: "akshay@gmail.com"
//     })
// }

// addUser()


//---------------------------------------------------------------------


// Real data from MongoDB


// const dbConnect = require('./mongodb')

// method one using promise handle

// dbConnect().then((resp) => {
//     resp.find().toArray().then((data) => {
//         console.warn(data[0])
//     })
// })

// method two using promise handle

// const main = async () => {
//     let data = await dbConnect();
//     data = await data.find().toArray();
//     console.warn(data)
// }

// main()


// const dbConnect = require('./mongodb');

// const insert = async () => {
//     const db = await dbConnect();
//     const result = db.insert(
//         { name: "note 5", brand: "vivo", price: 320, category: "products" }
//     )
//     console.log("resultu", result)
//     if (result.acknowledge) {
//         console.log("Data inserted")
//     }
// }

// insert()














//--------------------------------------------------------------------------------



//****Start with Mongooso ****/


// const mongoose = require("mongoose");

// mongoose.connect("mongodb+srv://akshayakumaras:CykgOqzgM57YQVXv@cluster0.ukmau3c.mongodb.net/?retryWrites=true&w=majority");


// const productSchema = new mongoose.Schema({
//     name: String,
//     price: Number,
//     brand: String,
//     category: String

// });


// const saveDataInDB = async () => {
//     const Product = mongoose.model("products", productSchema);
//     let data = new Product({ name: "max 9", price: 1000, brand: "Micromax", category: "Mobile" });
//     const result = await data.save();
//     console.log("result", result)
// }

// saveDataInDB();







//--------------------------------------------------------------------------------



//****Update data Mongooso ****/

// const updateData = async () => {
//     const Product = mongoose.model("products", productSchema);
//     let data = await Product.updateOne(
//         { brand: "Micromax" },
//         {
//             $set: { price: 700 }
//         }
//     )
//     console.log("data", data)
// }

// updateData();

//-------------------------------------------------------------

//****delete data in db using Mongooso ****/


// const deleteData = async () => {
//     const Product = mongoose.model("products", productSchema);
//     let data = await Product.deleteOne(
//         { name: "max 8" }
//     )
//     console.log("data delete", data)
// }

// deleteData();

//-------------------------------------------------------------

//****Find data in db using Mongooso ****/


// const findInDb = async () => {
//     const Product = mongoose.model("products", productSchema);
//     let data = await Product.find({ name: "max 90" })
//     console.log("data find>>", data)
// }

// findInDb();


//-------------------------------------------------------------

//****Post API with Mongooso ****/

const express = require('express');
require("./config");
const product = require("./product");
const app = express();

app.use(express.json())

app.post("/create", async (req, resp) => {
    try {
        let data = new product(req.body);
        let result = await data.save();
        console.log("result", result);
        resp.send(result);
    } catch (error) {
        console.error("Error creating product:", error);
        resp.status(500).send("Internal Server Error");
    }
});



// GET API


app.get("/v1/list", async (req, resp) => {
    let data = await product.find();
    resp.send(data)
})


// DELETE API

app.delete("/delete/:_id", async (req, resp) => {
    console.log(req.params);
    let data = await product.deleteOne(req.params);
    resp.send(data)
})


// UPDATE API

app.put("/update/:_id", async (req, resp) => {
    console.log(req.params);
    let data = await product.updateOne(
        req.params,
        {
            $set : req.body
        }
    );
    resp.send(data);
    console.log(data)
})

app.listen(4000)








