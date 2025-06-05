"use strict";
var _a, _b, _c;
Object.defineProperty(exports, "__esModule", { value: true });
var path_1 = require("path");
var dotenv_1 = require("dotenv");
var express_1 = require("express");
// Load environment variables based on NODE_ENV
var env = (_a = process.env.NODE_ENV) !== null && _a !== void 0 ? _a : 'development';
switch (env) {
    case 'development':
        dotenv_1.default.config({ path: '.env.development' });
        break;
    case 'test':
        dotenv_1.default.config({ path: '.env.test' });
        break;
    case 'staging':
        dotenv_1.default.config({ path: '.env.staging' });
        break;
    case 'production':
        dotenv_1.default.config({ path: '.env.production' });
        break;
    default:
        throw new Error("Unknown environment: ".concat(env));
}
// Get base path from env (fallback to '/')
var basePath = (_b = process.env.VITE_BASE_PATH) !== null && _b !== void 0 ? _b : '/';
var port = (_c = process.env.PORT) !== null && _c !== void 0 ? _c : 3000;
var app = (0, express_1.default)();
// Serve static files under the base path
app.use(basePath, express_1.default.static(path_1.default.join(__dirname, 'dist')));
// SPA fallback route
app.get("".concat(basePath, "/*"), function (req, res) {
    res.sendFile(path_1.default.join(__dirname, 'dist', 'index.html'));
});
app.listen(port, function () {
    console.log("Server running at http://localhost:".concat(port).concat(basePath));
});
