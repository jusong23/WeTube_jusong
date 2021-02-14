import app from "./app"; //node_module에서 express가져온거 처럼
// app object(ex. app.use 등등)을 ./app 에서 가져온다는 것

const PORT = 4000;

const handleListening = () =>
  console.log(`Listening on http://localhost:${PORT}`);

app.listen(PORT, handleListening);
