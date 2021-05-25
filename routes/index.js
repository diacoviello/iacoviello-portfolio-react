const path = require("path");
const router = require("express").Router();
const homeRoutes = require("./");
const projectsRoutes = require("./projects");
const contactRoutes = require("./contact");
const resumeRoutes = require("./resume");

router.use("/", homeRoutes);
router.use("/projects", projectsRoutes);
router.use("/contact", contactRoutes);
router.use("/resume", resumeRoutes);

router.use(function (req, res) {
  res.sendFile(path.join(__dirname, "../../client/public/index.html"));
});

module.exports = router;