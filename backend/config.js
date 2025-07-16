const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/OnlineComplaint", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => {
  console.log("✅ Connected to MongoDB: OnlineComplaint");
})
.catch((err) => {
  console.error("❌ Failed to connect to MongoDB:", err);
});
