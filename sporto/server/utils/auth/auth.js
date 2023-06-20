const express = require("express");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const mongoose = require("mongoose");
require("dotenv").config();

const app = express();
app.use(express.json());

mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const userSchema = new mongoose.Schema({
  email: { type: String, required: true },
  password: { type: String, required: true },
});

const User = mongoose.model("User", userSchema);

app.post("/login", (req, res) => {
  const { email, password } = req.body;
  User.findOne({ email }, (err, user) => {
    if (err || !user) {
      return res.status(401).json({ message: "Invalid credentials" });
    }
    bcrypt.compare(password, user.password, (err, result) => {
      if (err || !result) {
        return res.status(401).json({ message: "Invalid credentials" });
      }
      const token = jwt.sign({ userId: user._id }, process.env.SECRET, {
        expiresIn: "1h",
      });
      res.json({ token });
    });
  });
});

app.post("/signup", (req, res) => {
  const { email, password } = req.body;
  bcrypt.hash(password, 10, (err, hashedPassword) => {
    if (err) {
      return res.status(500).json({ message: "Server error" });
    }
    const user = new User({ email, password: hashedPassword });
    user.save((err, savedUser) => {
      if (err) {
        return res.status(400).json({ message: "Validation error" });
      }
      const token = jwt.sign({ userId: savedUser._id }, process.env.SECRET, {
        expiresIn: "1h",
      });
      res.json({ token });
    });
  });
});

app.get("/protected", verifyToken, (req, res) => {
  res.json({ message: "Protected content" });
});

function verifyToken(req, res, next) {
  const token = req.headers.authorization?.split(" ")[1];
  if (!token) {
    return res.status(401).json({ message: "Token not provided" });
  }
  jwt.verify(token, process.env.SECRET, (err, decoded) => {
    if (err) {
      return res.status(401).json({ message: "Invalid token" });
    }
    req.userId = decoded.userId;
    next();
  });
}

app.listen(3000, () => console.log("Server started on port 3000"));
