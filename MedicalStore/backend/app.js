const express = require("express");
const cors = require('cors')
const app = express();
app.use(express.json());
app.use(cors());

// database imports
const mongoose = require("./db/mongoose");
const ProductRoutes = require("./db/routes/product.routes");
const FavRoutes = require('./db/routes/fav.routes')
const CartRoutes = require('./db/routes/cart.routes')
const AuthRoutes = require('./db/routes/auth.routes')
const UserRoutes = require('./db/routes/user.routes')

// import middleware
const passportJWT = require('./db/middleware/passport.JWT')()
// middleware
app.use(passportJWT.initialize())


/*****  ROUTE HANDLERS *****/

// /*** PRODUCT ROUTES ***/
// app.use('/product', passportJWT.authenticate(), ProductRoutes);
app.use('/product',  ProductRoutes);
// /*** WISH LIST ROUTES ***/
app.use('/wish-list', FavRoutes);
// /*** CART ROUTES ***/
app.use('/cart', CartRoutes);
// /*** Auth ROUTES ***/
app.use('/auth', AuthRoutes);
// /*** User ROUTES ***/
app.use('/user', UserRoutes);




app.listen(9090, () => console.log("Server is running on port 9090"));
