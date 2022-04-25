const authentication = require("./authentication");
const authorization = require("./authorization");
const upload = require("./uploadPhotos");
module.exports = {
  authorization,
  authentication,
  upload,
};
