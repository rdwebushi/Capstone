let express=require("express");
let mongoose=require("mongoose");
let cors=require("cors");

let userRouter=require("./router/userRouter");
let productRouter=require("./router/productRoter");

//let cartRouter=require("./router/cartRouter");
//let orderRouter=require("./router/orderRouter"); 
let url="mongodb://localhost:27017/E-commerce";
let app=express();

app.use(express.json());    //enable bodyparser
app.use(cors());
mongoose.connect(url).then(res=>console.log("connected"),err=>console.log(err));

app.use("/api",userRouter);
app.use("/api/product",productRouter);
//app.use("/api/cart",cartRouter);
//app.use("/api/order",orderRouter);


app.listen(8080,console.log("app is running on port no 8080"));