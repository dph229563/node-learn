var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
const adminAuth = require("./middlewares/admin-auth");
const userAuth = require('./middlewares/user-auth');
require("dotenv").config();

var indexRouter = require("./routes/index");
var usersRouter = require("./routes/users");
var adminArticlesRouter = require("./routes/admin/articles");
var adminCategoriesRouter = require("./routes/admin/categories");
const adminSettingsRouter = require("./routes/admin/settings");
const adminUsersRouter = require("./routes/admin/users");
const adminCoursesRouter = require("./routes/admin/courses");
const adminChaptersRouter = require("./routes/admin/chapters");
const adminAuthRouter = require("./routes/admin/auth");
// 前端路由
const categoriesRouter = require("./routes/categories");
const coursesRouter = require('./routes/courses');
const chaptersRouter = require('./routes/chapters');
const articlesRouter = require('./routes/articles');
const settingsRouter = require('./routes/settings');
const searchRouter = require('./routes/search');
const authRouter = require('./routes/auth');

var app = express();

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use("/", indexRouter);
// 后台路由配置
app.use("/admin/articles", adminAuth, adminArticlesRouter);
app.use("/admin/categories", adminAuth, adminCategoriesRouter);
app.use("/admin/settings", adminAuth, adminSettingsRouter);
app.use("/admin/users", adminAuth, adminUsersRouter);
app.use("/admin/courses", adminAuth, adminCoursesRouter);
app.use("/admin/chapters", adminAuth, adminChaptersRouter);
app.use("/admin/auth", adminAuthRouter);
// 前端路由
app.use("/categories", categoriesRouter);
app.use("/courses", coursesRouter);
app.use("/chapters", chaptersRouter);
app.use("/articles", articlesRouter);
app.use("/settings", settingsRouter);
app.use("/search", searchRouter);
app.use('/auth', authRouter);
app.use('/users', userAuth, usersRouter);

module.exports = app;
