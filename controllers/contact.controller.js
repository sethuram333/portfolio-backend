import Contact from '../models/contact.model.js';

// @desc    Submit a message
// @route   POST /api/contact
export const submitMessage = async (req, res) => {
  try {
    const message = await Contact.create(req.body);
    res.status(201).json({ success: true, message: 'Message sent successfully!' });
  } catch (error) {
    res.status(400).json({ success: false, message: 'Failed to send message', error: error.message });
  }
};

// @desc    Get all messages (ADMIN ONLY)
// @route   GET /api/contact
export const getMessages = async (req, res) => {
  try {
    const messages = await Contact.find().sort({ createdAt: -1 });
    res.status(200).json({ success: true, data: messages });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Server Error' });
  }
};
