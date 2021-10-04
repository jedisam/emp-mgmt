"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var employeeController_1 = require("../../controllers/employeeController");
var router = express_1.default.Router();
router
    .route('/')
    .get(employeeController_1.getAllEmployees)
    .post(employeeController_1.addEmployee);
router.route('/:id')
    .get(employeeController_1.getEmployee)
    .patch(employeeController_1.updateEmployee)
    .delete(employeeController_1.removeEmployee);
exports.default = router;
