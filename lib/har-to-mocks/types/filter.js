"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ResourceType = exports.Method = void 0;
var Method;
(function (Method) {
    Method["GET"] = "GET";
    Method["POST"] = "POST";
    Method["PUT"] = "PUT";
    Method["DELETE"] = "DELETE";
    Method["PATCH"] = "PATCH";
})(Method = exports.Method || (exports.Method = {}));
var ResourceType;
(function (ResourceType) {
    ResourceType["xhr"] = "xhr";
    ResourceType["fetch"] = "fetch";
    ResourceType["doc"] = "document";
})(ResourceType = exports.ResourceType || (exports.ResourceType = {}));
