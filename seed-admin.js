import mongoose from 'mongoose';
import dotenv from 'dotenv';
import bcrypt from 'bcryptjs';
import User from './models/user.model.js';

dotenv.config();

const seedAdmin = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log('MongoDB Connected for Seeding Admin');

    // Delete admin if already exists to ensure it has correct password hash
    await User.deleteOne({ email: 'admin@example.com' });

    await User.create({
      email: 'admin@example.com',
      password: 'password123'
    });

    console.log('Admin User injected! Email: admin@example.com | Password: password123');
    process.exit();
  } catch (error) {
    console.error('Error seeding admin:', error);
    process.exit(1);
  }
};

seedAdmin();
