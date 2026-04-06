import mongoose from 'mongoose';
import dotenv from 'dotenv';
import Project from './models/project.model.js';
import User from './models/user.model.js';

dotenv.config();

const dummyProjects = [
  {
    title: 'Nexus E-Commerce Platform',
    description: 'A full-featured e-commerce platform built with the MERN stack. Features include user authentication, product management, shopping cart, and Stripe payment integration for seamless checkout.',
    techStack: ['MongoDB', 'Express', 'React', 'Node.js', 'Stripe API'],
    image: 'https://images.unsplash.com/photo-1557821552-17105153ce67?q=80&w=1000&auto=format&fit=crop',
    githubLink: 'https://github.com/example/ecommerce',
    liveLink: 'https://example-ecommerce.com'
  },
  {
    title: 'Echo Real-time Chat',
    description: 'A robust message application utilizing Socket.io for instant communication. Includes private messaging, group chats, dynamic typing indicators, and reliable online status detection.',
    techStack: ['React', 'Socket.io', 'Node.js', 'Tailwind', 'Redis'],
    image: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=1000&auto=format&fit=crop',
    githubLink: 'https://github.com/example/chatapp',
    liveLink: 'https://example-chatapp.com'
  },
  {
    title: 'Sync Task Management',
    description: 'A Kanban-style task management board allowing teams to intuitively organize workflows, assign tasks, and track their daily progress using beautiful drag-and-drop functionality.',
    techStack: ['React', 'Redux Toolkit', 'MongoDB', 'Framer Motion'],
    image: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=1000&auto=format&fit=crop',
    githubLink: 'https://github.com/example/taskboard',
    liveLink: 'https://example-taskboard.com'
  },
  {
    title: 'CloudVault File Storage',
    description: 'A secure cloud storage solution modeled after Google Drive. Implements AWS S3 for binary storage, folder hierarchies, and secure sharing links with expiration dates.',
    techStack: ['React', 'AWS S3', 'Node.js', 'PostgreSQL'],
    image: 'https://images.unsplash.com/photo-1544396821-4dd40b938ad3?q=80&w=1000&auto=format&fit=crop',
    githubLink: 'https://github.com/example/cloudvault',
    liveLink: 'https://example-cloudvault.com'
  },
  {
    title: 'Pulse Financial Dashboard',
    description: 'A dynamic financial tracking dashboard rendering complex data visualizations. Connects to real-time stock APIs to display live market trends and portfolio metrics.',
    techStack: ['React', 'Chart.js', 'Tailwind CSS', 'Axios'],
    image: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?q=80&w=1000&auto=format&fit=crop',
    githubLink: 'https://github.com/example/pulse',
    liveLink: 'https://example-pulse.com'
  },
  {
    title: 'AI Image Generator',
    description: 'An AI-powered application that leverages the OpenAI DALL-E 3 REST APIs to generate stunning images from user prompts, complete with a gallery and download utility.',
    techStack: ['React Vite', 'OpenAI API', 'Express', 'Tailwind CSS'],
    image: 'https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?q=80&w=1000&auto=format&fit=crop',
    githubLink: 'https://github.com/example/ai-image',
    liveLink: 'https://example-ai-generator.com'
  }
];

const seedData = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log('MongoDB Connected for Seeding');

    await Project.deleteMany(); // Clear existing
    console.log('Cleared existing projects');

    await Project.insertMany(dummyProjects);
    console.log('Added 6 beautiful projects to database!');

    process.exit();
  } catch (error) {
    console.error('Error seeding data:', error);
    process.exit(1);
  }
};

seedData();
