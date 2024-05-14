const homemodel = require("../models/homeModel");

exports.getHome = async (req, res) => {
  try {
    const home = await homemodel.findOne();
    if (!home) {
      return res.status(404).json({ error: "Home not found" });
    }
    res.status(200).json({ status: "success", data: { home } });
  } catch (err) {
    res.status(400).json({ status: "fail", message: "Error getting home" });
  }
};
exports.update=async (req,res)=>{
  try{
    const updatedHome=findOneAndUpdate({},req.body,{new:true})
    res.status(200).json({ status: "success", data: { updatedHome } });
  }catch (err) {
    res.status(400).json({ status: "fail", message: "Error updating home" });
};
}
exports.updateTitle = async (req, res) => {
  try {
    const { title } = req.body;
    const updatedHome = await homemodel
      .findOneAndUpdate({}, { title }, { new: true })
      .select("title");
    if (!updatedHome) {
      return res.status(404).json({ error: "Home not found" });
    }
    res.status(200).json({ status: "success", data: { updatedHome } });
  } catch (err) {
    res.status(400).json({ status: "fail", message: "Error updating home" });
  }
};
exports.updateSubTitle = async (req, res) => {
  try {
    const { subTitle } = req.body;
    const updatedHome = await homemodel
      .findOneAndUpdate({}, { subTitle }, { new: true })
      .select("subTitle");
    if (!updatedHome) {
      return res.status(404).json({ error: "Home not found" });
    }
    res.status(200).json({
      status: "success",
      results: updatedHome.subTitle.length,
      data: { updatedHome },
    });
  } catch (err) {
    res.status(400).json({ status: "fail", message: "Error updating home" });
  }
};
exports.updateStatisticTitle = async (req, res) => {
  try {
    const { statisticTitle } = req.body;
    const updatedHome = await homemodel
      .findOneAndUpdate({}, { statisticTitle }, { new: true })
      .select("statisticTitle");
    if (!updatedHome) {
      return res.status(404).json({ error: "Home not found" });
    }
    res.status(200).json({ status: "success", data: { updatedHome } });
  } catch (err) {
    res.status(400).json({ status: "fail", message: "Error updating home" });
  }
};

exports.updateStatistic = async (req, res) => {
  try {
    const { statistic } = req.body;
    const updatedHome = await homemodel
      .findOneAndUpdate({}, { statistic }, { new: true })
      .select("statistic");
    if (!updatedHome) {
      return res.status(404).json({ error: "Home not found" });
    }
    res.status(200).json({
      status: "success",
      results: updatedHome.statistic.length,
      data: { updatedHome },
    });
  } catch (err) {
    res.status(400).json({ status: "fail", message: "Error updating home" });
  }
};
exports.updateQuote = async (req, res) => {
  try {
    const { quote } = req.body;
    const updatedHome = await homemodel
      .findOneAndUpdate({}, { quote }, { new: true })
      .select("quote");
    if (!updatedHome) {
      return res.status(404).json({ error: "Home not found" });
    }
    res.status(200).json({ status: "success", data: { updatedHome } });
  } catch (err) {
    res.status(400).json({ status: "fail", message: "Error updating home" });
  }
};

exports.updateTestimonialTitle = async (req, res) => {
  try {
    const { testimonialTitle } = req.body;
    const updatedHome = await homemodel
      .findOneAndUpdate({}, { testimonialTitle }, { new: true })
      .select("testimonialTitle");
    if (!updatedHome) {
      return res.status(404).json({ error: "Home not found" });
    }
    res.status(200).json({ status: "success", data: { updatedHome } });
  } catch (err) {
    res.status(400).json({ status: "fail", message: "Error updating home" });
  }
};

exports.updateTestimonialSubTitle = async (req, res) => {
  try {
    const { testimonialSubTitle } = req.body;
    const updatedHome = await homemodel
      .findOneAndUpdate({}, { testimonialSubTitle }, { new: true })
      .select("testimonialSubTitle");
    if (!updatedHome) {
      return res.status(404).json({ error: "Home not found" });
    }
    res.status(200).json({
      status: "success",
      data: updatedHome,
    });
  } catch (err) {
    res.status(400).json({ status: "fail", message: "Error updating home" });
  }
};

exports.updateTestimonials = async (req, res) => {
  try {
    const { testimonials } = req.body;
    const updatedHome = await homemodel
      .findOneAndUpdate({}, { testimonials }, { new: true })
      .select("testimonials");
    if (!updatedHome) {
      return res.status(404).json({ error: "Home not found" });
    }
    res.status(200).json({
      status: "success",
      results: updatedHome.testimonials.length,
      data: { updatedHome },
    });
  } catch (err) {
    res.status(400).json({ status: "fail", message: "Error updating home" });
  }
};
exports.updateCertificatesTitle = async (req, res) => {
  try {
    const { certificatesTitle } = req.body;
    const updatedHome = await homemodel
      .findOneAndUpdate({}, { certificatesTitle }, { new: true })
      .select("certificatesTitle");
    if (!updatedHome) {
      return res.status(404).json({ error: "Home not found" });
    }
    res.status(200).json({ status: "success", data: { updatedHome } });
  } catch (err) {
    res.status(400).json({ status: "fail", message: "Error updating home" });
  }
};

exports.updateCertificates = async (req, res) => {
  try {
    const { certificates } = req.body;
    const updatedHome = await homemodel
      .findOneAndUpdate({}, { certificates }, { new: true })
      .select("certificates");
    if (!updatedHome) {
      return res.status(404).json({ error: "Home not found" });
    }
    res.status(200).json({
      status: "success",
      results: updatedHome.certificates.length,
      data: { updatedHome },
    });
  } catch (err) {
    res.status(400).json({ status: "fail", message: "Error updating home" });
  }
};
