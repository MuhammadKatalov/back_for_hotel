const userService = require("../services/user-services");
const { validationResult } = require("express-validator");
const ApiError = require("../exceptions/api-error");
const User = require("../models/User.model")
const Role = require("../models/Role.model")

class UserController {
  async registration(req, res, next) {
    try {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return next(ApiError.BadRequest("Некорректный email", errors.array()));
      }
      const { email, password } = req.body;
      const userData = await userService.registration(email, password);
      res.cookie("refreshToken", userData.refreshToken, {
        maxAge: 30 * 24 * 60 * 60 * 1000,
        httpOnly: true,
      });
      return res.json(userData);
    } catch (e) {
      next(e);
    }
  }

  async login(req, res, next) {
    try {
      const { email, password } = req.body;
      const userData = await userService.login(email, password);
      res.cookie("refreshToken", userData.refreshToken, {
        maxAge: 30 * 24 * 60 * 60 * 1000,
        httpOnly: true,
      });
      return res.json(userData);
    } catch (e) {
      next(e);
    }
  }

  async logout(req, res, next) {
    try {
      const { refreshToken } = req.cookies;
      const token = await userService.logout(refreshToken);
      res.clearCookie("refreshToken");
      return res.json(token);
    } catch (e) {
      next(e);
    }
  }

  async activate(req, res, next) {
    try {
      const activationLink = req.params.link;
      await userService.activate(activationLink);
      return res.redirect(process.env.CLIENT_URL);
    } catch (e) {
      next(e);
    }
  }

  async refresh(req, res, next) {
    try {
      const { refreshToken } = req.cookies;
      const userData = await userService.refresh(refreshToken);
      res.cookie("refreshToken", userData.refreshToken, {
        maxAge: 30 * 24 * 60 * 60 * 1000,
        httpOnly: true,
      });
      return res.json(userData);
    } catch (e) {
      next(e);
    }
  }

  async getUsers(req, res, next) {
    try {
      // const userRole = new Role()
      // const adminRole = new Role({value: "ADMIN"})
      // await userRole.save()
      // await adminRole.save()

      res.json("dslfkn")
    } catch (e) {
      next(e);
    }
  }

  async favoriteTest(req, res) {
    try {
      await User.findByIdAndUpdate(req.user.id, {
        $addToSet: { favoriteTest: req.params.id },
      });

      res.json("Тест добавлен в избранное");
    } catch (e) {
      res.json({
        error: e.toString(),
      });
    }
  }

  async removeFavorite(req, res) {
    try {
      await User.findByIdAndUpdate(req.user.id, {
        $pull: { favoriteTest: req.params.id },
      });

      res.json("Тест убран из избранного");
    } catch (e) {
      res.json({
        error: e.toString(),
      });
    }
  }
}

module.exports = new UserController();
