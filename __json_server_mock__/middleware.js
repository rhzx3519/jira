const user = {
  id: 1,
  name: "jira",
  token: btoa("123456"),
};

module.exports = (req, res, next) => {
  if (req.method === "POST" && req.path === "/login") {
    if (req.body.username === "jira" && req.body.password === "123456") {
      return res.status(200).json({
        user,
      });
    }

    return res.status(400).json({ message: "用户名或者密码错误" });
  } else if (req.path === "/me") {
    return res.status(200).json({
      user,
    });
  }
  next();
};
