const User = require("../models/User.model");
const Role = require("../models/Role.model");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

module.exports.usersController = {
  registerUser: async (req, res) => {
    try {
      const { firstName, lastName, phoneNumber, country, login, password } =
        req.body;

      const hash = await bcrypt.hash(
        password,
        Number(process.env.BCRYPT_ROUNDS)
      );

      const userRole = await Role.findOne({ value: "USER" });
      const user = await User.create({
        firstName,
        lastName,
        phoneNumber,
        country,
        login,
        password: hash,
        roles: [userRole.value],
      });

      res.json(user);
    } catch (e) {
      return res.status(400).json("Ошибка регистрации " + e.toString());
    }
  },

  login: async (req, res) => {
    try {
      const { login, password } = req.body;

      const candidate = await User.findOne({ login });

      if (!candidate) {
        return res
          .status(401)
          .json(`Пользователь с таким адресом '${login}' не найден`);
      }

      const valid = await bcrypt.compare(password, candidate.password);

      if (!valid) {
        return res.status(401).json("Неверный пароль");
      }

      const payload = {
        id: candidate._id,
        login: candidate.login,
        roles: candidate.roles,
      };

      const token = await jwt.sign(payload, process.env.SECRET_JWT_KEY, {
        expiresIn: "24h",
      });

      res.json({ token, id: payload.id });
    } catch (e) {
      return res.status(400).json("Ошибка авторизации " + e.toString());
    }
  },

  getUsers: async (req, res) => {
    try {
      res.json("dkscjbskcj");
    } catch {
      res.json("Жаг1");
    }
  },
};
