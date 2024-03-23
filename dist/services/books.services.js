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
Object.defineProperty(exports, "__esModule", { value: true });
var client_1 = require("@prisma/client");
var prisma = new client_1.PrismaClient();
var services = {
    getByPagination: function (params) { return __awaiter(void 0, void 0, void 0, function () {
        var page, limit, offset, search, searchBy, sortBy, sort, whereClause, _a, totalData, result, totalPage, pagination;
        var _b, _c;
        return __generator(this, function (_d) {
            switch (_d.label) {
                case 0:
                    page = params.page, limit = params.limit, offset = params.offset, search = params.search, searchBy = params.searchBy, sortBy = params.sortBy, sort = params.sort;
                    whereClause = {};
                    if (search) {
                        whereClause = (_b = {},
                            _b[searchBy] = {
                                contains: search,
                                mode: "insensitive",
                            },
                            _b);
                    }
                    return [4 /*yield*/, Promise.all([
                            prisma.books.count({ where: whereClause }),
                            prisma.books.findMany({
                                take: limit,
                                skip: offset,
                                orderBy: (_c = {},
                                    _c[sortBy] = sort,
                                    _c),
                                where: whereClause,
                                include: {
                                    categories: true,
                                },
                            }),
                        ])];
                case 1:
                    _a = _d.sent(), totalData = _a[0], result = _a[1];
                    totalPage = Math.ceil(totalData / limit);
                    pagination = {
                        page: page,
                        limit: limit,
                        totalData: totalData,
                        totalPage: totalPage,
                    };
                    return [2 /*return*/, [result, pagination]];
            }
        });
    }); },
    getById: function (id) { return __awaiter(void 0, void 0, void 0, function () {
        var result, error;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, prisma.books.findUnique({
                        where: {
                            id: id,
                        },
                        include: {
                            categories: true,
                        },
                    })];
                case 1:
                    result = _a.sent();
                    if (!result) {
                        error = new Error("Data not found");
                        error.statusCode = 404;
                        throw error;
                    }
                    return [2 /*return*/, result];
            }
        });
    }); },
    getByIdCount: function (id) { return __awaiter(void 0, void 0, void 0, function () {
        var result, error;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, prisma.books.count({
                        where: {
                            id: id,
                        },
                    })];
                case 1:
                    result = _a.sent();
                    if (!result || result === 0) {
                        error = new Error("Data not found");
                        error.statusCode = 404;
                        throw error;
                    }
                    return [2 /*return*/, result];
            }
        });
    }); },
    create: function (data) { return __awaiter(void 0, void 0, void 0, function () {
        var result, error;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, prisma.books.create({
                        data: data,
                    })];
                case 1:
                    result = _a.sent();
                    if (!result) {
                        error = new Error("Failed created");
                        error.statusCode = 400;
                        throw error;
                    }
                    return [2 /*return*/, result];
            }
        });
    }); },
    updateById: function (id, data) { return __awaiter(void 0, void 0, void 0, function () {
        var result, error;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, prisma.books.update({
                        where: {
                            id: id,
                        },
                        data: data,
                    })];
                case 1:
                    result = _a.sent();
                    if (!result) {
                        error = new Error("Failed updated");
                        error.statusCode = 400;
                        throw error;
                    }
                    return [2 /*return*/, result];
            }
        });
    }); },
    deleteById: function (id) { return __awaiter(void 0, void 0, void 0, function () {
        var result, error;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, prisma.books.delete({
                        where: {
                            id: id,
                        },
                    })];
                case 1:
                    result = _a.sent();
                    if (!result) {
                        error = new Error("Failed deleted");
                        error.statusCode = 400;
                        throw error;
                    }
                    return [2 /*return*/, result];
            }
        });
    }); },
};
exports.default = services;
