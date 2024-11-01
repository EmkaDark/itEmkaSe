require("dotenv").config();
const cors = require("cors");
const mailer = require("./controllers/Mailer.js");
const express = require("express");

const app = express();

app.use(express.json());
app.use(cors());

app.post("/api", async (req, res) => {
  const data = req.body;
  try {
    await mailer.sendMail("nomad11kl@mail.ru", data);
    await mailer.sendMail("art.hacker@inbox.ru", data);
    await mailer.sendMail("kizune07@mail.ru", data);
    res.json({ ok: true });
  } catch (error) {
    res.json({ message: "непредвиденная ошибка!" });
  }
});

app.listen(3001, () => {
  console.log("[server] -- server listening on http://localhost:3001");
});
