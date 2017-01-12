import mongoose, { Schema } from 'mongoose';

const JavascriptProjects = new Schema({
  title: {
    type: String,
    required: true,
  },
  codeURL: {
    type: String,
    required: true,
  },
  demoURL: {
    type: String,
    required: false,
  },
  description: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  alt: {
    type: String,
    required: true,
  },
});

// JavascriptProjects.index({ });

export default mongoose.model('JavascriptProjects', JavascriptProjects);
