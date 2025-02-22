import mongoose from "mongoose";

const ResignationSchema = new mongoose.Schema({
  employeeId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  lwd: { type: String, required: true }, // Last working day in format "YYYY-MM-DD"
  status: {
    type: String,
    enum: ["pending", "approved", "rejected"],
    default: "pending",
  },
  reason: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
});

const Resignation = mongoose.model("Resignation", ResignationSchema);
export default Resignation;
