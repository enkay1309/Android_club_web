import mongoose, { Schema, models } from "mongoose";

const memberSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  position: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
});

const Member = models.Member || mongoose.model("Member", memberSchema);

export default Member;