"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const os_1 = __importDefault(require("os"));
const systeminformation_1 = __importDefault(require("systeminformation"));
const app = express_1.default();
const host = '0.0.0.0';
const port = 3001;
//localhost:3000/node will return system info
app.get('/', (req, res) => __awaiter(this, void 0, void 0, function* () {
    res.send({
        architecture: os_1.default.arch(),
        platform: os_1.default.platform(),
        release: os_1.default.release(),
        cpu: yield systeminformation_1.default.cpu(),
        mem: yield systeminformation_1.default.mem()
    });
}));
app.listen(port, host, () => {
    console.log(`Listening on ${host} port ${port}!`);
});
//# sourceMappingURL=main.js.map