import mongoose from 'mongoose';

const projectSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, 'Project title is required'],
    trim: true,
  },
  description: {
    type: String,
    required: [true, 'Project description is required'],
  },
  techStack: {
    type: [String],
    required: [true, 'At least one tech stack item is required'],
  },
  image: {
    type: String,
    required: [true, 'Project image URL is required'],
  },
  githubLink: {
    type: String,
    match: [/^https?:\/\/(www\.)?github\.com/, 'Please provide a valid GitHub URL'],
  },
  liveLink: {
    type: String,
    match: [/^https?:\/\//, 'Please provide a valid HTTP/HTTPS URL'],
  }
}, { timestamps: true });

const Project = mongoose.model('Project', projectSchema);
export default Project;
