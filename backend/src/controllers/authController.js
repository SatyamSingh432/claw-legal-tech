import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import User from "../models/User.js";

export const registerUser = async (req, res) => {
  try {
    const { username, password } = req.body;

    // Check if user already exists
    const existingUser = await User.findOne({ username });
    if (existingUser) {
      return res.status(400).json({ message: "Username already exists" });
    }

    // Hash password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    // Create new user
    const user = new User({
      username,
      password: hashedPassword,
      role: "employee", // Setting employee as default role
    });

    await user.save();
    res.status(201).json({ message: "User registered successfully" });
  } catch (error) {
    console.error("Registration error:", error);
    res.status(500).json({ message: "Server error during registration" });
  }
};

export const loginUser = async (req, res) => {
  try {
    const { username, password } = req.body;

    // Find user
    const user = await User.findOne({ username });
    if (!user) {
      return res.status(400).json({ message: "Invalid username or password" });
    }

    // Validate password
    const validPassword = await bcrypt.compare(password, user.password);
    if (!validPassword) {
      return res.status(400).json({ message: "Invalid username or password" });
    }

    // Generate token
    const token = jwt.sign(
      { id: user._id, username: user.username, role: user.role },
      process.env.JWT_SECRET,
      { expiresIn: "24h" }
    );
    const isAdmin = user.role === "admin";

    res.status(200).json({ token, is_admin: isAdmin });
  } catch (error) {
    console.error("Login error:", error);
    res.status(500).json({ message: "Server error during login" });
  }
};

export const verifyUser = async (req, res) => {
  const token = req.header("Authorization");
  if (!token)
    return res.status(401).json({ valid: false, message: "No token provided" });

  try {
    const verified = jwt.verify(token, process.env.JWT_SECRET);
    res.json({ valid: true, userId: verified.id });
  } catch (err) {
    res.status(401).json({ valid: false, message: "Invalid token" });
  }
};
