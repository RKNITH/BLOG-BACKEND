import mongoose from "mongoose"

const postSchema = new mongoose.Schema(
  {
    userId: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
      unique: true,
    },
    category: {
      type: String,
      default: "uncategorized",
    },
    image: {
      type: String,
      default:
        "https://images.pexels.com/photos/723072/pexels-photo-723072.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    content: {
      type: String,
      required: true,
    },
    slug: {
      type: String,
      required: true,
      unique: true,
    },
  },
  { timestamps: true }
)

const Post = mongoose.model("Post", postSchema)

export default Post
