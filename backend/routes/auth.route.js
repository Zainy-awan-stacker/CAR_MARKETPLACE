import express from "express";
import User from "../model/User.js";
import { protect } from "../middleware/auth.middleware.js";
import jwt from "jsonwebtoken";

const JWT_SECRET = process.env.JWT_SECRET;

//generate token
const generateToken = (id) => {
  if (!process.env.JWT_SECRET) {
    console.warn(
      "Warning: JWT_SECRET is not set. Using local fallback secret.",
    );
  }
  return jwt.sign({ id }, JWT_SECRET, { expiresIn: "3d" });
};

const router = express.Router();
router.post("/register", async (req, res) => {
  const { username, email, password } = req.body;

  try {
    if (!username || !email || !password) {
      return res.status(400).json({ message: "Please fill all fields" });
    }

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "Email already exists" });
    }

    const user = await User.create({ username, email, password });

    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
      expiresIn: "3d",
    });

    res.status(200).json({
      id: user._id,
      username: user.username,
      email: user.email,
      token,
    });
  } catch (error) {
    console.log("ERROR:", error); 
    res.status(500).json({ message: "Server error" });
  }
});

// for login

router.post("/login", async (req, res) => {
  console.log(req.body);
  const { email, password } = req.body;
  try {
    if (!email || !password) {
      return res.status(400).json({ message: "please fill the all fields" });
    }
    const user = await User.findOne({ email });
    if (!user || !(await user.matchPassword(password))) {
      return res.status(401).json({ message: "invalid credentials" });
    }
    const token = generateToken(user._id);
    res.status(200).json({
      user:{
        id: user._id,
        username: user.username,
        email: user.email,
      },
      token,
    });
  } catch (error) {
    res.status(500).json({ message: "server error" });
  }
});
//get me
router.get("/me", protect, async (req, res) => {
  res.status(200).json(req.user);
});

export default router;
