"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
// controllers
const ControllerUpload_1 = __importDefault(require("../../controllers/api/ControllerUpload"));
const media_1 = __importDefault(require("../../config/media"));
const router = (0, express_1.Router)();
const controllerUpload = new ControllerUpload_1.default();
router.post('/profil/upload', [media_1.default.upload.single('profilePicture')], controllerUpload.upload());
exports.default = router;
