const logMessages = require("../../configs/logMessages");

function info(key, req) {
  const message = logMessages.INFO[key] || key;
  console.log(`[INFO] ${message}`, req ? { path: req.originalUrl } : "");
}

function error(key, err, req) {
  const message = logMessages.ERROR[key] || key;
  console.error(`[ERROR] ${message}`, err, req ? { path: req.originalUrl } : "");
}

module.exports = { info, error };
