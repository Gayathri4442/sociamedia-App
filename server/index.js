import express from "express";
import mongoose from "mongoose";
import bodyParser from 'body-parser'
import cors from 'cors'
import dotenv from "dotenv";
import AuthRoute from './Routes/AuthRoute.js'
import UserRoute from './Routes/UserRoute.js'
import PostRoute from './Routes/PostRoute.js'
import UploadRoute from './Routes/UploadRoute.js'


// Routes

const app = express();

app.use(express.static('public'))
app.use('/images', express.static('images'))

app.use(cors({origin: "http://localhost:3000",}))

app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));

dotenv.config();

mongoose.connect(process.env.MONGO_DB,
  {useNewUrlParser: true, useUnifiedTopology: true}

) 

  .then(() =>
    app.listen(process.env.PORT, () =>
      console.log(`Listening at ${process.env.PORT}`)
    )
  )
  .catch((error) => console.log(error));

  

   // usage of routes
   app.use('/auth', AuthRoute)
   app.use('/user', UserRoute)
   app.use('/posts', PostRoute)
   app.use('/upload', UploadRoute)
