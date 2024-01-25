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
const ResponseBuilder_1 = __importDefault(require("../../utils/ResponseBuilder"));
const media_1 = __importDefault(require("../../config/media"));
class ControllerUpload {
    upload() {
        return (req, res, _) => __awaiter(this, void 0, void 0, function* () {
            try {
                let resultUpload;
                if (req.file) {
                    const fileBase64 = req.file.buffer.toString('base64');
                    const file = `data:${req.file.mimetype};base64,${fileBase64}`;
                    resultUpload = yield new Promise((resolve, reject) => {
                        media_1.default.storage.uploader.upload(file, (err, result) => {
                            if (err) {
                                reject(err);
                            }
                            else {
                                resolve(result);
                            }
                        });
                    });
                    return ResponseBuilder_1.default.response({
                        code: 200,
                        res,
                        data: resultUpload,
                    });
                }
                else {
                    return ResponseBuilder_1.default.response({
                        code: 404,
                        res,
                        data: 'file not found',
                    });
                }
            }
            catch (error) {
                return ResponseBuilder_1.default.response({
                    code: 500,
                    data: 'upload failed',
                    res,
                });
            }
        });
    }
}
exports.default = ControllerUpload;
