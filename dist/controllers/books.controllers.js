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
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var books_services_1 = __importDefault(require("../services/books.services"));
var sellers_services_1 = __importDefault(require("../services/sellers.services"));
var general_utils_1 = require("../utils/general.utils");
var response_utils_1 = __importDefault(require("../utils/response.utils"));
var controllers = {
    getByPagination: function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
        var _a, _b, pageNumber, _c, limitNumber, search, _d, searchBy, _e, sortBy, _f, sort, page, limit, offset, _g, result, pagination, error_1;
        return __generator(this, function (_h) {
            switch (_h.label) {
                case 0:
                    _h.trys.push([0, 2, , 3]);
                    _a = req.query, _b = _a.page, pageNumber = _b === void 0 ? 1 : _b, _c = _a.limit, limitNumber = _c === void 0 ? 10 : _c, search = _a.search, _d = _a.searchBy, searchBy = _d === void 0 ? "name" : _d, _e = _a.sortBy, sortBy = _e === void 0 ? "createdAt" : _e, _f = _a.sort, sort = _f === void 0 ? "desc" : _f;
                    page = Number(pageNumber);
                    limit = Number(limitNumber);
                    offset = (page - 1) * limit;
                    return [4 /*yield*/, books_services_1.default.getByPagination({
                            page: page,
                            limit: limit,
                            offset: offset,
                            search: search,
                            searchBy: searchBy,
                            sortBy: sortBy,
                            sort: sort,
                        })];
                case 1:
                    _g = _h.sent(), result = _g[0], pagination = _g[1];
                    return [2 /*return*/, (0, response_utils_1.default)(res, result, 200, "Success get data", pagination)];
                case 2:
                    error_1 = _h.sent();
                    return [2 /*return*/, (0, general_utils_1.customError)(error_1, res)];
                case 3: return [2 /*return*/];
            }
        });
    }); },
    getById: function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
        var id, result, error_2;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    id = Number(req.params.id);
                    return [4 /*yield*/, books_services_1.default.getById(id)];
                case 1:
                    result = _a.sent();
                    return [2 /*return*/, (0, response_utils_1.default)(res, result, 200)];
                case 2:
                    error_2 = _a.sent();
                    return [2 /*return*/, (0, general_utils_1.customError)(error_2, res)];
                case 3: return [2 /*return*/];
            }
        });
    }); },
    create: function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
        var _a, title, description, author, image, price, _b, status_1, sellerId, error_3;
        return __generator(this, function (_c) {
            switch (_c.label) {
                case 0:
                    _c.trys.push([0, 3, , 4]);
                    _a = req.body, title = _a.title, description = _a.description, author = _a.author, image = _a.image, price = _a.price, _b = _a.status, status_1 = _b === void 0 ? true : _b, sellerId = _a.sellerId;
                    return [4 /*yield*/, sellers_services_1.default.getByIdCount(sellerId)];
                case 1:
                    _c.sent();
                    return [4 /*yield*/, books_services_1.default.create({
                            title: title,
                            description: description,
                            author: author,
                            image: image,
                            price: price,
                            status: status_1,
                            seller: { connect: { id: sellerId } },
                        })];
                case 2:
                    _c.sent();
                    return [2 /*return*/, (0, response_utils_1.default)(res, null, 200, "Success created")];
                case 3:
                    error_3 = _c.sent();
                    return [2 /*return*/, (0, general_utils_1.customError)(error_3, res)];
                case 4: return [2 /*return*/];
            }
        });
    }); },
    updateById: function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
        var id, _a, title, description, author, image, price, status_2, sellerId, error_4;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    _b.trys.push([0, 5, , 6]);
                    id = Number(req.params.id);
                    return [4 /*yield*/, books_services_1.default.getByIdCount(id)];
                case 1:
                    _b.sent();
                    _a = req.body, title = _a.title, description = _a.description, author = _a.author, image = _a.image, price = _a.price, status_2 = _a.status, sellerId = _a.sellerId;
                    if (!sellerId) return [3 /*break*/, 3];
                    return [4 /*yield*/, sellers_services_1.default.getByIdCount(sellerId)];
                case 2:
                    _b.sent();
                    _b.label = 3;
                case 3: return [4 /*yield*/, books_services_1.default.updateById(id, {
                        title: title,
                        description: description,
                        author: author,
                        image: image,
                        price: price,
                        status: status_2,
                        seller: { connect: { id: sellerId } },
                    })];
                case 4:
                    _b.sent();
                    return [2 /*return*/, (0, response_utils_1.default)(res, null, 200, "Success updated")];
                case 5:
                    error_4 = _b.sent();
                    return [2 /*return*/, (0, general_utils_1.customError)(error_4, res)];
                case 6: return [2 /*return*/];
            }
        });
    }); },
    deleteById: function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
        var id, error_5;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 3, , 4]);
                    id = Number(req.params.id);
                    return [4 /*yield*/, books_services_1.default.getByIdCount(id)];
                case 1:
                    _a.sent();
                    return [4 /*yield*/, books_services_1.default.deleteById(id)];
                case 2:
                    _a.sent();
                    return [2 /*return*/, (0, response_utils_1.default)(res, null, 200, "Success deleted")];
                case 3:
                    error_5 = _a.sent();
                    return [2 /*return*/, (0, general_utils_1.customError)(error_5, res)];
                case 4: return [2 /*return*/];
            }
        });
    }); },
};
exports.default = controllers;
