const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const bodyParser = require("body-parser");
dotenv.config();
const sendEmaliRoute = require("./website/sendEmaliRoute.js");
const aboutUsRouter = require("./admin/routes/aboutUsRouter.js");
const contactUsRouter = require("./admin/routes/contactUsRouter.js");
const ourServicesRouter = require("./admin/routes/ourServicesRouter.js");
const homeRouter = require("./admin/routes/homeRouter.js");
const services = require("./admin/models/ourServicesModel.js");
// Start express app
const app = express();
// const dummyServices = [
//   {
//     icon: "https://example.com/icon1.png",
//     title: "Service 1",
//     paragraph: "This is the description of service 1.",
//   },
//   {
//     icon: "https://example.com/icon2.png",
//     title: "Service 2",
//     paragraph: "This is the description of service 2.",
//   },
//   {
//     icon: "https://example.com/icon3.png",
//     title: "Service 3",
//     paragraph: "This is the description of service 3.",
//   },
//   // Add more dummy service objects as needed
// ];

// services.insertMany(dummyServices); // Insert dummy data
// console.log("Dummy data seeded successfully");
// Define middleware
app.use(express.json()); // Parse JSON bodies
app.use("/", sendEmaliRoute);
app.use("/admin/about-us", aboutUsRouter);
app.use("/admin/contact-us", contactUsRouter);
app.use("/admin/services", ourServicesRouter);
app.use("/admin/home", homeRouter);
const DB = process.env.URL_DB;
mongoose.connect(DB).then(() => console.log("DB connection successful!"));

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`App running on port ${port}...`);
});
