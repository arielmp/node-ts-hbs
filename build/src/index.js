"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
//Initializations
const app = express_1.default();
//Settings
app.set("port", 3000);
//Middlewares
//Ruotes
//Static Files
// Start server
app.listen(app.get("port"), () => {
    console.log(`server on port ${app.get("port")}`);
});
