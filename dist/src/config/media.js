"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const cloudinary_1 = require("cloudinary");
const multer_1 = __importDefault(require("multer"));
class Media {
    constructor() {
        this._upload = (0, multer_1.default)({ storage: multer_1.default.memoryStorage() });
        cloudinary_1.v2.config({
            cloud_name: 'drmf1woku',
            api_key: '173446257541337',
            api_secret: 'tFYHheuFr78npgtGrEl4ozQSWUM',
        });
        this._storage = cloudinary_1.v2;
    }
    get upload() {
        return this._upload;
    }
    get storage() {
        return this._storage;
    }
}
exports.default = new Media();
