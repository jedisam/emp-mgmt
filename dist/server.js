"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var mongoose_1 = __importDefault(require("mongoose"));
var cors_1 = __importDefault(require("cors"));
var path_1 = __importDefault(require("path"));
require("dotenv/config");
var employeeRoute_1 = __importDefault(require("./routes/api/employeeRoute"));
var app = (0, express_1.default)();
app.use(express_1.default.json());
app.use((0, cors_1.default)());
var uri = "" + process.env.db;
mongoose_1.default.connect(uri);
var connection = mongoose_1.default.connection;
connection.once('open', function () {
    console.log("Succsessfully connected to DB");
});
app.use(express_1.default.static(path_1.default.join(__dirname, 'public')));
app.use('/api/employees', employeeRoute_1.default);
var PORT = process.env.PORT || 7000;
app.listen(PORT, function () {
    console.log("server started on port " + PORT);
});
module.exports = app;
