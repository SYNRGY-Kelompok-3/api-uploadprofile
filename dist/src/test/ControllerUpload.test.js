"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const supertest_1 = __importDefault(require("supertest"));
const express_1 = __importDefault(require("express"));
const multer_1 = __importDefault(require("multer"));
const path_1 = __importDefault(require("path"));
const ControllerUpload_1 = __importDefault(require("../controllers/api/ControllerUpload"));
describe('ControllerUpload', () => {
    let app;
    beforeEach(() => {
        app = (0, express_1.default)();
        const upload = (0, multer_1.default)();
        const controllerUpload = new ControllerUpload_1.default();
        app.post('/upload', upload.single('file'), controllerUpload.upload());
    });
    it('should respond with 200 and upload result when file is provided', () => __awaiter(void 0, void 0, void 0, function* () {
        const response = yield (0, supertest_1.default)(app)
            .post('/upload')
            .attach('file', path_1.default.join(__dirname, '../../logos_netflix.png'));
        expect(response.status).toBe(200);
        expect(response.body).toHaveProperty('data');
    }));
    it('should respond with 404 when no file is provided', () => __awaiter(void 0, void 0, void 0, function* () {
        const response = yield (0, supertest_1.default)(app).post('/upload');
        expect(response.status).toBe(404);
    }));
});
