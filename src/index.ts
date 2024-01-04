import express from "express";

const app = express();
const PORT = process.env.PORT || 4000;

app.get('/', (_req, res) => {
  res.send('Hello World!')
})

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));

