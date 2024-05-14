const contactUs = require("../admin/models/contactUsModel");
exports.createMessage = async (req, res, next) => {
  const { name, email, requestType, message } = req.body;
  if (!name || !email || !requestType || !message) {
    res.status(400).json({
      status: "fail",
      message: "All fields are required to send a message",
    });
  }
  try {
    await contactUs.create({
      name,
      email,
      requestType,
      message,
    });
    res
      .status(201)
      .json({ status: "success", message: "Request has sent successfully" });
  } catch (err) {
    console.log(err);
    res
      .status(400)
      .json({ status: "fail", message: "Error Reqesting a message" });
  }
};
