import mongoose from 'mongoose';

const profileSchema = new mongoose.Schema({
  about: {
    type: String,
    default: 'I am a full stack developer.',
  },
  skills: {
    type: [String],
    default: ['HTML', 'CSS', 'JavaScript', 'React', 'Node.js', 'MongoDB']
  },
  experience: [
    {
      company: String,
      role: String,
      duration: String,
      description: String
    }
  ],
  education: [
    {
      school: String,
      degree: String,
      duration: String,
      description: String
    }
  ],
  socialLinks: {
    github: { type: String, default: '' },
    linkedin: { type: String, default: '' },
    twitter: { type: String, default: '' }
  }
}, { timestamps: true });

const Profile = mongoose.model('Profile', profileSchema);
export default Profile;
