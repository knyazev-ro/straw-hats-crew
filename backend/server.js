const express = require("express");
const { PrismaClient } = require("@prisma/client");
const bcrypt = require("bcryptjs");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
const prisma = new PrismaClient();

// Опции для CORS
const corsOptions = {
  origin: 'http://localhost:3000', // Добавлен протокол
  methods: ['GET', 'POST', 'PUT', 'DELETE'], // Указан массив методов
  allowedHeaders: ['Content-Type', 'Authorization'], // Указан массив заголовков
  credentials: true, // Разрешить передачу кук или сессий
};

app.use(cors(corsOptions));

// Middleware для обработки JSON
app.use(bodyParser.json());

app.get('/login', (req, res) => {
  // Обработка логики авторизации здесь (если требуется)
  console.log(req.query);
  return res.status(200).json({ message:req.query});
});


// Эндпоинт для регистрации пользователя
app.post("/register", async (req, res) => {
  const { email, password, lastname, name, goals } = req.body;

  try {
    // Хеширование пароля
    const hashedPassword = await bcrypt.hash(password, 10);

    // Создание нового пользователя
    const newUser = await prisma.user.create({
      data: {
        email,
        password: hashedPassword,
        lastname,
        name,
        goals,
      },
    });

    res
      .status(201)
      .json({ message: "User registered successfully", user: newUser });
  } catch (error) {
    if (error.code === "P2002") {
      // Ошибка уникальности
      return res.status(400).json({ error: "Email already exists" });
    }
    res.status(500).json({ error: "Something went wrong" });
  }
});

// Запуск сервера
const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
