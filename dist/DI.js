var DI = /** @class */ (function () {
    function DI() {
    }
    DI.get = function (TypeElement) {
        if (!TypeElement)
            throw new Error("Tipo o servicio indefinido");
        if (typeof TypeElement === "string") {
            for (var _i = 0, _a = this.services; _i < _a.length; _i++) {
                var item = _a[_i];
                if (item.name == TypeElement) {
                    return item.service;
                }
            }
        }
        else {
            for (var _b = 0, _c = this.services; _b < _c.length; _b++) {
                var item = _c[_b];
                if (item.service instanceof TypeElement) {
                    return item.service;
                }
            }
        }
        return null;
    };
    DI.add = function (service, name) {
        if (name === void 0) { name = null; }
        if (name) {
            for (var _i = 0, _a = this.services; _i < _a.length; _i++) {
                var item = _a[_i];
                if (item.name == name) {
                    throw new Error("Ya existe un servicio con este nombre");
                }
            }
        }
        this.services.push({ service: service, name: name });
    };
    DI.del = function (TypeElement) {
        if (!TypeElement)
            throw new Error("Tipo o servicio indefinido");
        if (typeof TypeElement === "string") {
            var cont = 0;
            for (var _i = 0, _a = this.services; _i < _a.length; _i++) {
                var item = _a[_i];
                if (item.name == TypeElement) {
                    this.services.splice(cont, 1);
                }
                cont++;
            }
        }
        else {
            for (var _b = 0, _c = this.services; _b < _c.length; _b++) {
                var item = _c[_b];
                var cont = 0;
                if (item.service instanceof TypeElement) {
                    this.services.splice(cont, 1);
                }
                cont++;
            }
        }
    };
    DI.services = [];
    return DI;
}());
export { DI };
