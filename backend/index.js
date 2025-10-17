import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
import Task from './models/task.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.get("/tasks", async (req, res) => {
  try {
    const tasks = await Task.find();
    res.json({ data: tasks, meta: { count: tasks.length } });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});
app.post('/tasks/create', async (req, res) => {
  try {
    const task = await Task.create(req.body);
    res.status(201).json({ success: true, data: task });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
});
app.patch('/tasks/update', async (req, res) => {
  try {
    const { _id, status } = req.body;

    if (!_id || !status) {
      return res.status(400).json({ success: false, message: "Missing _id or status" });
    }

    const task = await Task.findByIdAndUpdate(
      _id,
      { status },
      { new: true }
    );

    if (!task) {
      return res.status(404).json({ success: false, message: "Task not found" });
    }

    res.status(200).json({ success: true, data: task });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
});

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log('MongoDB connected');
    app.listen(PORT, () => {
      console.log(`Server running http://localhost:${PORT}`);
    });
  })
  .catch((err) => console.error('Error:', err));
