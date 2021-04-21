import mongoose from 'mongoose';
import 'dotenv/config';

mongoose
  .connect(
    `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@cluster0.s6iet.mongodb.net/courier?retryWrites=true&w=majority`,
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: true,
      useCreateIndex: true,
    }
  )
  .then((res) =>
    console.log(`Connected to Database ${res.connections[0].name}`)
  )
  .catch(console.error);
