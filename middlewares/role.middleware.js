require("dotenv");
const jwt = require("jsonwebtoken");

module.exports = function (roles) {
  return function (req, res, next) {
    if (req.method === "OPTIONS") {
      next();
    }

    const { authorization } = req.headers;

    if (!authorization) {
      return res.status(401).json({
        error: "Нет доступа (no authorization header)",
      });
    }
    const [type, token] = authorization.split(" ");
    if (type !== "Bearer") {
      return res.status(401).json({
        error: "Неверный тип токена ",
      });
    }

    try {
      if (!token) {
        return res.status(403).json({ error: "Пользователь не авторизован" });
      }
      const { roles: userRole } = jwt.verify(
        token,
        process.env.SECRET_JWT_KEY
      );
      let hasRole = false;
      userRole.forEach((role) => {
        if (roles.includes(role)) {
          hasRole = true;
        }
      });
      if (!hasRole) {
        return res.status(403).json({ error: "У вас не достаточно прав" });
      }
      next();
    } catch (e) {
      console.log(e);
      return res.status(403).json({ error: "Пользователь не авторизован" });
    }
  };
};