import mongoose from "mongoose";

const jobSchema = new mongoose.Schema({
  title: String,
  desc: String,
  createdAt: {
    type:Date,
    default: new Date()
  },
})

const PostJob = mongoose.model('PostJob',jobSchema);

export default PostJob