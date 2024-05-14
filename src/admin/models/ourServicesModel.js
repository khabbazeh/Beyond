const mongoose = require("mongoose");
const ourServiceSchema = new mongoose.Schema({
  icon: {
    type: String,
  },
  title: {
    type: String,
    required: true,
    trim: true,
  },
  paragraph: {
    type: String,
    required: true,
    trim: true,
  },
});

const Services = mongoose.model("Services", ourServiceSchema);
module.exports = Services;

// //Dummy data
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

// // Function to seed the dummy data
// exports.seedDummyData = async () => {
//   try {
//     await Services.deleteMany(); // Clear existing data
//     await Services.insertMany(dummyServices); // Insert dummy data
//     console.log("Dummy data seeded successfully");
//   } catch (error) {
//     console.error("Failed to seed dummy data:", error);
//   }
// };
