"use strict";
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var smallint_exports = {};
__export(smallint_exports, {
  SingleStoreSmallInt: () => SingleStoreSmallInt,
  SingleStoreSmallIntBuilder: () => SingleStoreSmallIntBuilder,
  smallint: () => smallint
});
module.exports = __toCommonJS(smallint_exports);
var import_entity = require("../../entity.cjs");
var import_utils = require("../../utils.cjs");
var import_common = require("./common.cjs");
class SingleStoreSmallIntBuilder extends import_common.SingleStoreColumnBuilderWithAutoIncrement {
  static [import_entity.entityKind] = "SingleStoreSmallIntBuilder";
  constructor(name, config) {
    super(name, "number", "SingleStoreSmallInt");
    this.config.unsigned = config ? config.unsigned : false;
  }
  /** @internal */
  build(table) {
    return new SingleStoreSmallInt(
      table,
      this.config
    );
  }
}
class SingleStoreSmallInt extends import_common.SingleStoreColumnWithAutoIncrement {
  static [import_entity.entityKind] = "SingleStoreSmallInt";
  getSQLType() {
    return `smallint${this.config.unsigned ? " unsigned" : ""}`;
  }
  mapFromDriverValue(value) {
    if (typeof value === "string") {
      return Number(value);
    }
    return value;
  }
}
function smallint(a, b) {
  const { name, config } = (0, import_utils.getColumnNameAndConfig)(a, b);
  return new SingleStoreSmallIntBuilder(name, config);
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  SingleStoreSmallInt,
  SingleStoreSmallIntBuilder,
  smallint
});
//# sourceMappingURL=smallint.cjs.map