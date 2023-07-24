const { default: mongoose } = require("mongoose");

const dbConnect = () => {
  try {
    mongoose.set("strictQuery", false);
    mongoose.connect(process.env.MONGODB_URL, () => {
      console.log("Connected to MongoDB");
    });
    console.log("Database Connected Successfully");
  } catch (error) {
    console.log("DAtabase error");
  }
};
module.exports = dbConnect;
