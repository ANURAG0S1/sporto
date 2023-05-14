const express = require("express");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

const app = express();
app.use(express.json());

const users = [
  {
    id: 1,
    email: "user@example.com",
    password: "$2b$10$3v2Za71jafyzfrtIvkRdL.XvKjJ82a1pyRudnJweaLH07aq/x2XgK", // hashed password
  },
];

const secretKey = "mysecretkey";

app.post("/login", (req, res) => {
  const { email, password } = req.body;
  const user = users.find((user) => user.email === email);
  if (!user) {
    return res.status(401).json({ message: "Invalid credentials" });
  }
  bcrypt.compare(password, user.password, (err, result) => {
    if (err || !result) {
      return res.status(401).json({ message: "Invalid credentials" });
    }
    const token = jwt.sign({ userId: user.id }, secretKey, { expiresIn: "1h" });
    res.json({ token });
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
  jwt.verify(token, secretKey, (err, decoded) => {
    if (err) {
      return res.status(401).json({ message: "Invalid token" });
    }
    req.userId = decoded.userId;
    next();
  });
}

app.listen(3000, () => console.log("Server started on port 3000"));
