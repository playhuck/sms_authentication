const express = require("express");
const app = express();

require("dotenv").config();

const { send_message } = require("./send_message");

const port = process.env.PORT

app.use(express.json());

app.post("/sms", async (req, res) => {
  try {
    const { phoneNumber, authNumber, userName } = req.body;

    await send_message(authNumber, userName, phoneNumber);

    return res.send({ isSuccess: true });
  } catch (err) {
    console.log(err);
    return res.send({ isSuccess: false });
  }
});

app.listen(port, () => {
  console.log(`App Started Port is ${port}`);
});
