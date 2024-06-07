const express = require('express');
const app = express();
const PORT = 3000;
const { connectDB, checkConnection } = require('./db/db');
const RegistrationModel = require('./db/regschema');
const bcrypt = require('bcrypt');

connectDB();
setTimeout(checkConnection, 3000);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.post('/registrationform', async (req, res) => {
  const { login, password } = req.body;
  const hashpassword = await bcrypt.hash(password, 10);
  try {
    const newUser = new RegistrationModel({
      login: login,
      password: hashpassword,
    });
    newUser.save();
    res.send(`Данные успешно получены и сохранены ${login} и ${password}`);
  } catch (error) {
    console.log(error);
  }
});

app.post('/loginform', async (req, res) => {
  const { login, password } = req.body;
  try {
    const user = await RegistrationModel.findOne({ login: login });
    if (user) {
      const isMatch = await bcrypt.compare(password, user.password);
      if (isMatch) {
        res.send(`Вы успешно залогинились ${user._id}`);
      } else {
        res.send(`Неправильный пароль`);
      }
    } else {
      res.send(`Такого пользователя нет`);
    }
  } catch (error) {
    console.error('Ошибка при обработке запроса:', error);
    res.status(500).send('Произошла ошибка при обработке запроса');
  }
});

app.post('/close', async (req, res) => {});

app.listen(PORT, () => {
  console.log(`Сервер прослушивается на порту ${PORT}`);
});
