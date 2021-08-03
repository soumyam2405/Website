exports.ids = [193];
exports.modules = {

/***/ "./common/dom/downloadBlob.ts":
/*!************************************!*\
  !*** ./common/dom/downloadBlob.ts ***!
  \************************************/
/*! exports provided: downloadBlob */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "downloadBlob", function() { return downloadBlob; });
const downloadBlob = (blob, name) => {
  const url = URL.createObjectURL(blob);
  const anchor = document.createElement("a");
  document.body.append(anchor);
  anchor.href = url;
  anchor.download = name;
  anchor.click();
  anchor.remove();
  URL.revokeObjectURL(url);
};

/***/ }),

/***/ "./icons/save.tsx":
/*!************************!*\
  !*** ./icons/save.tsx ***!
  \************************/
/*! exports provided: save */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "save", function() { return save; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);

var _jsxFileName = "F:\\DiscordHookSite\\icons\\save.tsx";

const save = /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("svg", {
  width: "16",
  height: "16",
  viewBox: "0 0 16 16",
  fill: "none",
  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
    d: "M11 15V9H5V15M5 1L4.99999 5H10M13.6667 15H2.33333C1.97971 15 1.64057 14.8595 1.39052 14.6095C1.14048 14.3594 1 14.0203 1 13.6667V2.33333C1 1.97971 1.14048 1.64057 1.39052 1.39052C1.64057 1.14048 1.97971 1 2.33333 1H11.6667L15 4.33333V13.6667C15 14.0203 14.8595 14.3594 14.6095 14.6095C14.3594 14.8595 14.0203 15 13.6667 15Z",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 5,
    columnNumber: 5
  }, undefined)
}, void 0, false, {
  fileName: _jsxFileName,
  lineNumber: 4,
  columnNumber: 3
}, undefined);

/***/ }),

/***/ "./icons/trash.tsx":
/*!*************************!*\
  !*** ./icons/trash.tsx ***!
  \*************************/
/*! exports provided: trash */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "trash", function() { return trash; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);

var _jsxFileName = "F:\\DiscordHookSite\\icons\\trash.tsx";

const trash = /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("svg", {
  width: "16",
  height: "16",
  viewBox: "0 0 16 16",
  fill: "none",
  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
    d: "M1 4L2.99999 3.99998M2.99999 3.99998V13.5C2.99999 14.3284 3.67156 15 4.49999 15L11.5 15C12.3284 15 13 14.3284 13 13.5V4M2.99999 3.99998H5.33333M13 4H15M13 4L10.6667 3.99998M5.33333 3.99998V2.5C5.33333 1.67157 6.00491 1 6.83333 1H9.16667C9.99509 1 10.6667 1.67157 10.6667 2.5V3.99998M5.33333 3.99998H10.6667",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 5,
    columnNumber: 5
  }, undefined)
}, void 0, false, {
  fileName: _jsxFileName,
  lineNumber: 4,
  columnNumber: 3
}, undefined);

/***/ }),

/***/ "./icons/upload.tsx":
/*!**************************!*\
  !*** ./icons/upload.tsx ***!
  \**************************/
/*! exports provided: upload */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "upload", function() { return upload; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);

var _jsxFileName = "F:\\DiscordHookSite\\icons\\upload.tsx";

const upload = /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("svg", {
  width: "16",
  height: "16",
  viewBox: "0 0 16 16",
  fill: "none",
  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("path", {
    d: "M14 10V12.6667C14 13.0203 13.8595 13.3594 13.6095 13.6095C13.3594 13.8595 13.0203 14 12.6667 14H3.33333C2.97971 14 2.64057 13.8595 2.39052 13.6095C2.14048 13.3594 2 13.0203 2 12.6667V10M4.66667 5.33333L8 2M8 2L11.3333 5.33333M8 2V10",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 5,
    columnNumber: 5
  }, undefined)
}, void 0, false, {
  fileName: _jsxFileName,
  lineNumber: 4,
  columnNumber: 3
}, undefined);

/***/ }),

/***/ "./modules/database/DatabaseManager.ts":
/*!*********************************************!*\
  !*** ./modules/database/DatabaseManager.ts ***!
  \*********************************************/
/*! exports provided: DatabaseManager */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DatabaseManager", function() { return DatabaseManager; });
/* harmony import */ var mobx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mobx */ "mobx");
/* harmony import */ var mobx__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mobx__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _connection_openDatabase__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./connection/openDatabase */ "./modules/database/connection/openDatabase.ts");
var _class, _descriptor, _descriptor2, _temp;

function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }



let DatabaseManager = (_class = (_temp = class DatabaseManager {
  constructor() {
    this.initialized = void 0;
    this.database = void 0;

    _initializerDefineProperty(this, "persisted", _descriptor, this);

    _initializerDefineProperty(this, "persistenceMessageDismissed", _descriptor2, this);

    let markAsInitialized;
    this.initialized = new Promise(resolve => {
      markAsInitialized = resolve;
    });
    if (true) return;

    if ("storage" in navigator) {
      navigator.storage.persisted().then(persisted => {
        this.persisted = persisted;
      }).catch(() => {});
    }

    Object(_connection_openDatabase__WEBPACK_IMPORTED_MODULE_1__["openDatabase"])().then(database => {
      this.database = database;
      markAsInitialized();
    }).catch(error => {
      console.error("Failed to open database:", error);
    });
  }

  async requestPersistence() {
    if ("chrome" in window) {
      await Notification.requestPermission();
    }

    if ("storage" in navigator) {
      this.persisted = await navigator.storage.persist();
    }
  }

  get shouldShowPersistenceWarning() {
    return !this.persisted && !this.persistenceMessageDismissed;
  }

}, _temp), (_descriptor = _applyDecoratedDescriptor(_class.prototype, "persisted", [mobx__WEBPACK_IMPORTED_MODULE_0__["observable"]], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function () {
    return true;
  }
}), _descriptor2 = _applyDecoratedDescriptor(_class.prototype, "persistenceMessageDismissed", [mobx__WEBPACK_IMPORTED_MODULE_0__["observable"]], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function () {
    return false;
  }
}), _applyDecoratedDescriptor(_class.prototype, "shouldShowPersistenceWarning", [mobx__WEBPACK_IMPORTED_MODULE_0__["computed"]], Object.getOwnPropertyDescriptor(_class.prototype, "shouldShowPersistenceWarning"), _class.prototype)), _class);

/***/ }),

/***/ "./modules/database/DatabaseManagerContext.ts":
/*!****************************************************!*\
  !*** ./modules/database/DatabaseManagerContext.ts ***!
  \****************************************************/
/*! exports provided: DatabaseManagerContext, DatabaseManagerProvider */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DatabaseManagerContext", function() { return DatabaseManagerContext; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DatabaseManagerProvider", function() { return DatabaseManagerProvider; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

const DatabaseManagerContext = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_0__["createContext"])(null);
DatabaseManagerContext.displayName = "DatabaseManagerContext";
const DatabaseManagerProvider = DatabaseManagerContext.Provider;

/***/ }),

/***/ "./modules/database/backup/BackupManager.ts":
/*!**************************************************!*\
  !*** ./modules/database/backup/BackupManager.ts ***!
  \**************************************************/
/*! exports provided: BackupManager */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BackupManager", function() { return BackupManager; });
/* harmony import */ var mobx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mobx */ "mobx");
/* harmony import */ var mobx__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mobx__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _common_dom_downloadBlob__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../common/dom/downloadBlob */ "./common/dom/downloadBlob.ts");
/* harmony import */ var _common_object_toSnakeCase__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../common/object/toSnakeCase */ "./common/object/toSnakeCase.ts");
/* harmony import */ var _message_helpers_messageOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../message/helpers/messageOf */ "./modules/message/helpers/messageOf.ts");
var _class, _descriptor, _temp;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

/* eslint-disable no-await-in-loop */




let BackupManager = (_class = (_temp = class BackupManager {
  constructor(databaseManager, editorManager) {
    this.databaseManager = void 0;
    this.editorManager = void 0;

    _initializerDefineProperty(this, "backups", _descriptor, this);

    this.databaseManager = databaseManager;
    this.editorManager = editorManager;
    databaseManager.initialized.then(async () => {
      await this.loadBackupList();
    }).catch(() => {});
  }

  async loadBackupList() {
    const backups = [];
    let cursor = await this.databaseManager.database.transaction("backup").objectStore("backup").index("name").openKeyCursor();

    while (cursor) {
      backups.push({
        id: cursor.primaryKey,
        name: cursor.key
      });
      cursor = await cursor.continue();
    }

    Object(mobx__WEBPACK_IMPORTED_MODULE_0__["runInAction"])(() => {
      this.backups = backups;
    });
  }

  async getId(name) {
    return this.databaseManager.database.transaction("backup").objectStore("backup").index("name").getKey(name);
  }

  async loadBackup(name) {
    const backup = await this.databaseManager.database.transaction("backup").objectStore("backup").index("name").get(name);
    if (!backup) return;
    this.editorManager.set("messages", backup.messages.map((_ref) => {
      let {
        data
      } = _ref,
          message = _objectWithoutProperties(_ref, ["data"]);

      return _objectSpread(_objectSpread({}, Object(_message_helpers_messageOf__WEBPACK_IMPORTED_MODULE_3__["messageOf"])(data)), message);
    }));
    this.editorManager.set("targets", backup.targets);

    for (const target of this.editorManager.targets) {
      target.fetch().catch(() => {});
    }
  }

  async saveBackup(backup) {
    if (typeof backup === "string") {
      const id = await this.getId(backup);
      backup = {
        id,
        name: backup,
        messages: this.editorManager.messages.map(message => ({
          data: _objectSpread(_objectSpread({}, message.data), {}, {
            files: undefined
          }),
          reference: message.reference
        })),
        targets: this.editorManager.targets.map(target => ({
          url: target.url
        }))
      };
    } else {
      backup = _objectSpread(_objectSpread({}, backup), {}, {
        id: await this.getId(backup.name)
      });
    }

    if (!backup.id) delete backup.id;
    await this.databaseManager.database.transaction("backup", "readwrite").objectStore("backup").put(backup);
    await this.loadBackupList();
  }

  async deleteBackup(name) {
    const id = await this.getId(name);
    if (!id) return;
    await this.databaseManager.database.transaction("backup", "readwrite").objectStore("backup").delete(id);
    await this.loadBackupList();
  }

  async exportBackup(name) {
    const backup = await this.databaseManager.database.transaction("backup").objectStore("backup").index("name").get(name);
    if (!backup) return;
    const backupData = {
      version: 7,
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      backups: [backup].map((_ref2) => {
        let {
          id
        } = _ref2,
            backup = _objectWithoutProperties(_ref2, ["id"]);

        return backup;
      })
    };
    const blob = new Blob([JSON.stringify(backupData, undefined, 2), "\n"], {
      type: "application/json"
    });
    Object(_common_dom_downloadBlob__WEBPACK_IMPORTED_MODULE_1__["downloadBlob"])(blob, `${name}.json`);
  }

  async exportAll() {
    const backups = [];
    let cursor = await this.databaseManager.database.transaction("backup").objectStore("backup").openCursor();

    while (cursor) {
      backups.push(_objectSpread(_objectSpread({}, cursor.value), {}, {
        id: undefined
      }));
      cursor = await cursor.continue();
    }

    const backupData = {
      version: 7,
      backups
    };
    const blob = new Blob([JSON.stringify(backupData, undefined, 2), "\n"], {
      type: "application/json"
    });
    Object(_common_dom_downloadBlob__WEBPACK_IMPORTED_MODULE_1__["downloadBlob"])(blob, "backups.json");
  }

  async getSafeBackupName(name) {
    if (!(await this.getId(name))) {
      return name;
    }

    for (let number = 1; true; number++) {
      const proposedName = `${name} (${number})`;

      if (!(await this.getId(proposedName))) {
        return proposedName;
      }
    }
  }

  async importBackups(blob) {
    let exportData = JSON.parse(await blob.text());

    switch (exportData.version) {
      case 1:
      case 2:
        {
          exportData = {
            version: 3,
            backups: [{
              name: exportData.name,
              message: Object(_common_object_toSnakeCase__WEBPACK_IMPORTED_MODULE_2__["toSnakeCase"])(exportData.message)
            }]
          };
        }
      // falls through

      case 3:
        {
          exportData = {
            version: 4,
            backups: exportData.backups.map((_ref3) => {
              let {
                message
              } = _ref3,
                  backup = _objectWithoutProperties(_ref3, ["message"]);

              return _objectSpread(_objectSpread({}, backup), {}, {
                messages: [message]
              });
            })
          };
        }
      // falls through

      case 4:
        exportData = {
          version: 5,
          backups: exportData.backups.map((_ref4) => {
            let {
              webhookUrl
            } = _ref4,
                backup = _objectWithoutProperties(_ref4, ["webhookUrl"]);

            return _objectSpread(_objectSpread({}, backup), {}, {
              target: {
                url: webhookUrl
              }
            });
          })
        };
      // falls through

      case 5:
        exportData = {
          version: 6,
          backups: exportData.backups.map((_ref5) => {
            let {
              messages,
              target
            } = _ref5,
                backup = _objectWithoutProperties(_ref5, ["messages", "target"]);

            return _objectSpread(_objectSpread({}, backup), {}, {
              messages: messages.map(data => ({
                data,
                reference: target.message
              })),
              target: {
                url: target.url
              }
            });
          })
        };
      // falls through

      case 6:
        exportData = {
          version: 7,
          backups: exportData.backups.map((_ref6) => {
            var _target$url;

            let {
              target
            } = _ref6,
                backup = _objectWithoutProperties(_ref6, ["target"]);

            return _objectSpread(_objectSpread({}, backup), {}, {
              targets: [{
                url: (_target$url = target.url) !== null && _target$url !== void 0 ? _target$url : ""
              }]
            });
          })
        };
      // falls through

      case 7:
        for (const backup of exportData.backups) {
          await this.saveBackup(_objectSpread(_objectSpread({}, backup), {}, {
            name: await this.getSafeBackupName(backup.name),
            id: undefined
          }));
        }

    }
  }

}, _temp), (_descriptor = _applyDecoratedDescriptor(_class.prototype, "backups", [mobx__WEBPACK_IMPORTED_MODULE_0__["observable"]], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function () {
    return [];
  }
})), _class);

/***/ }),

/***/ "./modules/database/backup/BackupManagerContext.ts":
/*!*********************************************************!*\
  !*** ./modules/database/backup/BackupManagerContext.ts ***!
  \*********************************************************/
/*! exports provided: BackupManagerContext, BackupManagerProvider */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BackupManagerContext", function() { return BackupManagerContext; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BackupManagerProvider", function() { return BackupManagerProvider; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

const BackupManagerContext = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_0__["createContext"])(null);
BackupManagerContext.displayName = "BackupManagerContext";
const BackupManagerProvider = BackupManagerContext.Provider;

/***/ }),

/***/ "./modules/database/backup/modal/BackupCreationControls.tsx":
/*!******************************************************************!*\
  !*** ./modules/database/backup/modal/BackupCreationControls.tsx ***!
  \******************************************************************/
/*! exports provided: BackupCreationControls */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BackupCreationControls", function() { return BackupCreationControls; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var mobx_react_lite__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! mobx-react-lite */ "mobx-react-lite");
/* harmony import */ var mobx_react_lite__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(mobx_react_lite__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _common_input_button_PrimaryButton__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../common/input/button/PrimaryButton */ "./common/input/button/PrimaryButton.ts");
/* harmony import */ var _common_input_text_InputField__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../common/input/text/InputField */ "./common/input/text/InputField.tsx");
/* harmony import */ var _common_state_useRequiredContext__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../common/state/useRequiredContext */ "./common/state/useRequiredContext.ts");
/* harmony import */ var _BackupManagerContext__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../BackupManagerContext */ "./modules/database/backup/BackupManagerContext.ts");

var _jsxFileName = "F:\\DiscordHookSite\\modules\\database\\backup\\modal\\BackupCreationControls.tsx";






function BackupCreationControls() {
  const backupManager = Object(_common_state_useRequiredContext__WEBPACK_IMPORTED_MODULE_5__["useRequiredContext"])(_BackupManagerContext__WEBPACK_IMPORTED_MODULE_6__["BackupManagerContext"]);
  const {
    0: backupName,
    1: setBackupName
  } = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])("");
  return Object(mobx_react_lite__WEBPACK_IMPORTED_MODULE_1__["useObserver"])(() => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_common_input_text_InputField__WEBPACK_IMPORTED_MODULE_4__["InputField"], {
    id: "backup-name",
    value: backupName,
    onChange: setBackupName,
    label: "Backup name",
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_common_input_button_PrimaryButton__WEBPACK_IMPORTED_MODULE_3__["PrimaryButton"], {
      disabled: backupName.length === 0,
      onClick: async () => {
        await backupManager.saveBackup(backupName.trim());
        setBackupName("");
      },
      children: backupManager.backups.some(backup => backup.name === backupName.trim()) ? "Overwrite" : "Save"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 20,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 14,
    columnNumber: 5
  }, this));
}

/***/ }),

/***/ "./modules/database/backup/modal/BackupItem.tsx":
/*!******************************************************!*\
  !*** ./modules/database/backup/modal/BackupItem.tsx ***!
  \******************************************************/
/*! exports provided: BackupItem */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BackupItem", function() { return BackupItem; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var mobx_react_lite__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! mobx-react-lite */ "mobx-react-lite");
/* harmony import */ var mobx_react_lite__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(mobx_react_lite__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var polished__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! polished */ "polished");
/* harmony import */ var polished__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(polished__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _common_input_button_Button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../common/input/button/Button */ "./common/input/button/Button.ts");
/* harmony import */ var _common_layout_ActionButtons__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../common/layout/ActionButtons */ "./common/layout/ActionButtons.tsx");
/* harmony import */ var _common_modal_ModalManagerContext__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../common/modal/ModalManagerContext */ "./common/modal/ModalManagerContext.tsx");
/* harmony import */ var _common_state_useRequiredContext__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../common/state/useRequiredContext */ "./common/state/useRequiredContext.ts");
/* harmony import */ var _icons_copy__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../icons/copy */ "./icons/copy.tsx");
/* harmony import */ var _icons_save__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../icons/save */ "./icons/save.tsx");
/* harmony import */ var _icons_trash__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../../icons/trash */ "./icons/trash.tsx");
/* harmony import */ var _icons_upload__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../../icons/upload */ "./icons/upload.tsx");
/* harmony import */ var _BackupManagerContext__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../BackupManagerContext */ "./modules/database/backup/BackupManagerContext.ts");
/* harmony import */ var _DeletionConfirmationModal__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./DeletionConfirmationModal */ "./modules/database/backup/modal/DeletionConfirmationModal.tsx");

var _jsxFileName = "F:\\DiscordHookSite\\modules\\database\\backup\\modal\\BackupItem.tsx";














const Container = styled_components__WEBPACK_IMPORTED_MODULE_4___default.a.li.withConfig({
  displayName: "BackupItem__Container",
  componentId: "sc-4y1qwg-0"
})(["height:48px;display:flex;align-items:center;list-style:none;border:0 solid ", ";& + &{border-top-width:1px;}& > ", "{margin:0;}"], ({
  theme
}) => theme.backgroundModifier.accent, _common_input_button_Button__WEBPACK_IMPORTED_MODULE_5__["Button"]);
const BackupName = styled_components__WEBPACK_IMPORTED_MODULE_4___default.a.div.withConfig({
  displayName: "BackupItem__BackupName",
  componentId: "sc-4y1qwg-1"
})(["", ";flex:1;font-weight:500;"], Object(polished__WEBPACK_IMPORTED_MODULE_2__["ellipsis"])());
function BackupItem(props) {
  const {
    backup
  } = props;
  const modalManager = Object(_common_state_useRequiredContext__WEBPACK_IMPORTED_MODULE_8__["useRequiredContext"])(_common_modal_ModalManagerContext__WEBPACK_IMPORTED_MODULE_7__["ModalManagerContext"]);
  const backupManager = Object(_common_state_useRequiredContext__WEBPACK_IMPORTED_MODULE_8__["useRequiredContext"])(_BackupManagerContext__WEBPACK_IMPORTED_MODULE_13__["BackupManagerContext"]);
  return Object(mobx_react_lite__WEBPACK_IMPORTED_MODULE_1__["useObserver"])(() => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Container, {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(BackupName, {
      children: backup.name
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_common_layout_ActionButtons__WEBPACK_IMPORTED_MODULE_6__["ActionButtons"], {
      actions: [{
        icon: _icons_upload__WEBPACK_IMPORTED_MODULE_12__["upload"],
        label: "Load",
        handler: async () => backupManager.loadBackup(backup.name)
      }, {
        icon: _icons_save__WEBPACK_IMPORTED_MODULE_10__["save"],
        label: "Export",
        handler: async () => backupManager.exportBackup(backup.name),
        overflow: true
      }, {
        icon: _icons_copy__WEBPACK_IMPORTED_MODULE_9__["copy"],
        label: "Overwrite",
        handler: async () => backupManager.saveBackup(backup.name),
        overflow: true
      }, {
        icon: _icons_trash__WEBPACK_IMPORTED_MODULE_11__["trash"],
        label: "Delete",
        handler: () => modalManager.spawn({
          render: () => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_DeletionConfirmationModal__WEBPACK_IMPORTED_MODULE_14__["DeletionConfirmationModal"], {
            backupManager: backupManager,
            backup: backup
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 81,
            columnNumber: 19
          }, this)
        }),
        overflow: true
      }]
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 54,
    columnNumber: 5
  }, this));
}

/***/ }),

/***/ "./modules/database/backup/modal/BackupList.tsx":
/*!******************************************************!*\
  !*** ./modules/database/backup/modal/BackupList.tsx ***!
  \******************************************************/
/*! exports provided: BackupList */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BackupList", function() { return BackupList; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var mobx_react_lite__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! mobx-react-lite */ "mobx-react-lite");
/* harmony import */ var mobx_react_lite__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(mobx_react_lite__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _common_input_text_InputField__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../common/input/text/InputField */ "./common/input/text/InputField.tsx");
/* harmony import */ var _common_state_useRequiredContext__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../common/state/useRequiredContext */ "./common/state/useRequiredContext.ts");
/* harmony import */ var _markdown_Markdown__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../markdown/Markdown */ "./modules/markdown/Markdown.tsx");
/* harmony import */ var _BackupManagerContext__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../BackupManagerContext */ "./modules/database/backup/BackupManagerContext.ts");
/* harmony import */ var _BackupItem__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./BackupItem */ "./modules/database/backup/modal/BackupItem.tsx");


var _jsxFileName = "F:\\DiscordHookSite\\modules\\database\\backup\\modal\\BackupList.tsx";








const Container = styled_components__WEBPACK_IMPORTED_MODULE_3___default.a.ul.withConfig({
  displayName: "BackupList__Container",
  componentId: "sc-1bbv68x-0"
})(["padding:0;margin:0;max-height:420px;overflow-x:hidden;"]);
function BackupList() {
  const backupManager = Object(_common_state_useRequiredContext__WEBPACK_IMPORTED_MODULE_5__["useRequiredContext"])(_BackupManagerContext__WEBPACK_IMPORTED_MODULE_7__["BackupManagerContext"]);
  const {
    0: search,
    1: setSearch
  } = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])("");
  return Object(mobx_react_lite__WEBPACK_IMPORTED_MODULE_1__["useObserver"])(() => backupManager.backups.length > 0 ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_common_input_text_InputField__WEBPACK_IMPORTED_MODULE_4__["InputField"], {
      id: "backups-search",
      label: "Search Backups",
      value: search,
      onChange: setSearch
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 9
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Container, {
      children: backupManager.backups.filter(backup => backup.name.toLocaleLowerCase().includes(search.toLocaleLowerCase())).map(backup => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_BackupItem__WEBPACK_IMPORTED_MODULE_8__["BackupItem"], {
        backup: backup
      }, backup.id, false, {
        fileName: _jsxFileName,
        lineNumber: 40,
        columnNumber: 15
      }, this))
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 9
    }, this)]
  }, void 0, true) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_markdown_Markdown__WEBPACK_IMPORTED_MODULE_6__["Markdown"], {
    content: "You haven't made any backups yet." + " Enter a name below and click on the Save button to make one."
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 45,
    columnNumber: 7
  }, this));
}

/***/ }),

/***/ "./modules/database/backup/modal/BackupsModal.tsx":
/*!********************************************************!*\
  !*** ./modules/database/backup/modal/BackupsModal.tsx ***!
  \********************************************************/
/*! exports provided: BackupsModal */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BackupsModal", function() { return BackupsModal; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var mobx_react_lite__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! mobx-react-lite */ "mobx-react-lite");
/* harmony import */ var mobx_react_lite__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(mobx_react_lite__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _common_input_button_PrimaryButton__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../common/input/button/PrimaryButton */ "./common/input/button/PrimaryButton.ts");
/* harmony import */ var _common_input_button_SecondaryButton__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../common/input/button/SecondaryButton */ "./common/input/button/SecondaryButton.ts");
/* harmony import */ var _common_modal_layout_ModalAction__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../common/modal/layout/ModalAction */ "./common/modal/layout/ModalAction.ts");
/* harmony import */ var _common_modal_layout_ModalBody__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../common/modal/layout/ModalBody */ "./common/modal/layout/ModalBody.ts");
/* harmony import */ var _common_modal_layout_ModalContainer__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../common/modal/layout/ModalContainer */ "./common/modal/layout/ModalContainer.ts");
/* harmony import */ var _common_modal_layout_ModalFooter__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../common/modal/layout/ModalFooter */ "./common/modal/layout/ModalFooter.ts");
/* harmony import */ var _common_modal_layout_ModalHeader__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../common/modal/layout/ModalHeader */ "./common/modal/layout/ModalHeader.ts");
/* harmony import */ var _common_modal_layout_ModalTitle__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../common/modal/layout/ModalTitle */ "./common/modal/layout/ModalTitle.ts");
/* harmony import */ var _common_modal_ModalContext__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../../common/modal/ModalContext */ "./common/modal/ModalContext.ts");
/* harmony import */ var _common_state_useLazyValue__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../../common/state/useLazyValue */ "./common/state/useLazyValue.ts");
/* harmony import */ var _common_state_useRequiredContext__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../../common/state/useRequiredContext */ "./common/state/useRequiredContext.ts");
/* harmony import */ var _icons_remove__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../../icons/remove */ "./icons/remove.tsx");
/* harmony import */ var _DatabaseManager__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../DatabaseManager */ "./modules/database/DatabaseManager.ts");
/* harmony import */ var _DatabaseManagerContext__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../DatabaseManagerContext */ "./modules/database/DatabaseManagerContext.ts");
/* harmony import */ var _persist_PersistentStorageWarning__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../persist/PersistentStorageWarning */ "./modules/database/persist/PersistentStorageWarning.tsx");
/* harmony import */ var _BackupManager__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../BackupManager */ "./modules/database/backup/BackupManager.ts");
/* harmony import */ var _BackupManagerContext__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../BackupManagerContext */ "./modules/database/backup/BackupManagerContext.ts");
/* harmony import */ var _BackupCreationControls__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./BackupCreationControls */ "./modules/database/backup/modal/BackupCreationControls.tsx");
/* harmony import */ var _BackupList__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./BackupList */ "./modules/database/backup/modal/BackupList.tsx");

var _jsxFileName = "F:\\DiscordHookSite\\modules\\database\\backup\\modal\\BackupsModal.tsx";





















function BackupsModal(props) {
  const {
    editorManager
  } = props;
  const databaseManager = Object(_common_state_useLazyValue__WEBPACK_IMPORTED_MODULE_12__["useLazyValue"])(() => new _DatabaseManager__WEBPACK_IMPORTED_MODULE_15__["DatabaseManager"]());
  const backupManager = Object(_common_state_useLazyValue__WEBPACK_IMPORTED_MODULE_12__["useLazyValue"])(() => new _BackupManager__WEBPACK_IMPORTED_MODULE_18__["BackupManager"](databaseManager, editorManager));
  const modal = Object(_common_state_useRequiredContext__WEBPACK_IMPORTED_MODULE_13__["useRequiredContext"])(_common_modal_ModalContext__WEBPACK_IMPORTED_MODULE_11__["ModalContext"]);
  const fileInputRef = Object(react__WEBPACK_IMPORTED_MODULE_2__["useRef"])(null);
  return Object(mobx_react_lite__WEBPACK_IMPORTED_MODULE_1__["useObserver"])(() => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_DatabaseManagerContext__WEBPACK_IMPORTED_MODULE_16__["DatabaseManagerProvider"], {
    value: databaseManager,
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_BackupManagerContext__WEBPACK_IMPORTED_MODULE_19__["BackupManagerProvider"], {
      value: backupManager,
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_common_modal_layout_ModalContainer__WEBPACK_IMPORTED_MODULE_7__["ModalContainer"], {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
          ref: fileInputRef,
          type: "file",
          style: {
            display: "none"
          },
          onChange: async event => {
            var _event$target$files, _event$target$files$i;

            const file = (_event$target$files = event.target.files) === null || _event$target$files === void 0 ? void 0 : (_event$target$files$i = _event$target$files.item(0)) === null || _event$target$files$i === void 0 ? void 0 : _event$target$files$i.slice();
            event.target.files = null;

            if (file) {
              await backupManager.importBackups(file);
            }
          }
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 44,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_common_modal_layout_ModalHeader__WEBPACK_IMPORTED_MODULE_9__["ModalHeader"], {
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_common_modal_layout_ModalTitle__WEBPACK_IMPORTED_MODULE_10__["ModalTitle"], {
            children: "Backups"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 57,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_common_modal_layout_ModalAction__WEBPACK_IMPORTED_MODULE_5__["ModalAction"], {
            icon: _icons_remove__WEBPACK_IMPORTED_MODULE_14__["remove"],
            label: "Close",
            onClick: () => modal.dismiss()
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 58,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 56,
          columnNumber: 11
        }, this), databaseManager.shouldShowPersistenceWarning && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_common_modal_layout_ModalBody__WEBPACK_IMPORTED_MODULE_6__["ModalBody"], {
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_persist_PersistentStorageWarning__WEBPACK_IMPORTED_MODULE_17__["PersistentStorageWarning"], {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 66,
            columnNumber: 15
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 65,
          columnNumber: 13
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_common_modal_layout_ModalBody__WEBPACK_IMPORTED_MODULE_6__["ModalBody"], {
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_BackupList__WEBPACK_IMPORTED_MODULE_21__["BackupList"], {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 70,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 69,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_common_modal_layout_ModalBody__WEBPACK_IMPORTED_MODULE_6__["ModalBody"], {
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_BackupCreationControls__WEBPACK_IMPORTED_MODULE_20__["BackupCreationControls"], {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 73,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 72,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_common_modal_layout_ModalFooter__WEBPACK_IMPORTED_MODULE_8__["ModalFooter"], {
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_common_input_button_SecondaryButton__WEBPACK_IMPORTED_MODULE_4__["SecondaryButton"], {
            onClick: async () => backupManager.exportAll(),
            children: "Export All"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 76,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_common_input_button_SecondaryButton__WEBPACK_IMPORTED_MODULE_4__["SecondaryButton"], {
            onClick: () => {
              var _fileInputRef$current;

              return (_fileInputRef$current = fileInputRef.current) === null || _fileInputRef$current === void 0 ? void 0 : _fileInputRef$current.click();
            },
            children: "Import"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 79,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_common_input_button_PrimaryButton__WEBPACK_IMPORTED_MODULE_3__["PrimaryButton"], {
            onClick: () => modal.dismiss(),
            children: "Close"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 82,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 75,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 43,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 41,
    columnNumber: 5
  }, this));
}

/***/ }),

/***/ "./modules/database/backup/modal/DeletionConfirmationModal.tsx":
/*!*********************************************************************!*\
  !*** ./modules/database/backup/modal/DeletionConfirmationModal.tsx ***!
  \*********************************************************************/
/*! exports provided: DeletionConfirmationModal */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeletionConfirmationModal", function() { return DeletionConfirmationModal; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var mobx_react_lite__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! mobx-react-lite */ "mobx-react-lite");
/* harmony import */ var mobx_react_lite__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(mobx_react_lite__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _common_input_button_PrimaryButton__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../common/input/button/PrimaryButton */ "./common/input/button/PrimaryButton.ts");
/* harmony import */ var _common_input_button_SecondaryButton__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../common/input/button/SecondaryButton */ "./common/input/button/SecondaryButton.ts");
/* harmony import */ var _common_modal_layout_ModalAction__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../common/modal/layout/ModalAction */ "./common/modal/layout/ModalAction.ts");
/* harmony import */ var _common_modal_layout_ModalBody__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../common/modal/layout/ModalBody */ "./common/modal/layout/ModalBody.ts");
/* harmony import */ var _common_modal_layout_ModalContainer__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../common/modal/layout/ModalContainer */ "./common/modal/layout/ModalContainer.ts");
/* harmony import */ var _common_modal_layout_ModalFooter__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../common/modal/layout/ModalFooter */ "./common/modal/layout/ModalFooter.ts");
/* harmony import */ var _common_modal_layout_ModalHeader__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../common/modal/layout/ModalHeader */ "./common/modal/layout/ModalHeader.ts");
/* harmony import */ var _common_modal_layout_ModalTitle__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../common/modal/layout/ModalTitle */ "./common/modal/layout/ModalTitle.ts");
/* harmony import */ var _common_modal_ModalContext__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../../common/modal/ModalContext */ "./common/modal/ModalContext.ts");
/* harmony import */ var _common_state_useRequiredContext__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../../common/state/useRequiredContext */ "./common/state/useRequiredContext.ts");
/* harmony import */ var _icons_remove__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../../icons/remove */ "./icons/remove.tsx");
/* harmony import */ var _markdown_Markdown__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../markdown/Markdown */ "./modules/markdown/Markdown.tsx");

var _jsxFileName = "F:\\DiscordHookSite\\modules\\database\\backup\\modal\\DeletionConfirmationModal.tsx";














function DeletionConfirmationModal(props) {
  const {
    backupManager,
    backup
  } = props;
  const modal = Object(_common_state_useRequiredContext__WEBPACK_IMPORTED_MODULE_12__["useRequiredContext"])(_common_modal_ModalContext__WEBPACK_IMPORTED_MODULE_11__["ModalContext"]);
  return Object(mobx_react_lite__WEBPACK_IMPORTED_MODULE_1__["useObserver"])(() => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_common_modal_layout_ModalContainer__WEBPACK_IMPORTED_MODULE_7__["ModalContainer"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_common_modal_layout_ModalHeader__WEBPACK_IMPORTED_MODULE_9__["ModalHeader"], {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_common_modal_layout_ModalTitle__WEBPACK_IMPORTED_MODULE_10__["ModalTitle"], {
        children: "Delete Backup"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 33,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_common_modal_layout_ModalAction__WEBPACK_IMPORTED_MODULE_5__["ModalAction"], {
        icon: _icons_remove__WEBPACK_IMPORTED_MODULE_13__["remove"],
        label: "Close",
        onClick: () => modal.dismiss()
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 34,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_common_modal_layout_ModalBody__WEBPACK_IMPORTED_MODULE_6__["ModalBody"], {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_markdown_Markdown__WEBPACK_IMPORTED_MODULE_14__["Markdown"], {
        content: `Are you sure you want to delete "${backup.name}"? This action` + " cannot be undone."
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 41,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_common_modal_layout_ModalFooter__WEBPACK_IMPORTED_MODULE_8__["ModalFooter"], {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_common_input_button_SecondaryButton__WEBPACK_IMPORTED_MODULE_4__["SecondaryButton"], {
        onClick: () => modal.dismiss(),
        children: "Cancel"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 49,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_common_input_button_PrimaryButton__WEBPACK_IMPORTED_MODULE_3__["PrimaryButton"], {
        onClick: async () => {
          await backupManager.deleteBackup(backup.name);
          modal.dismiss();
        },
        children: "Delete"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 52,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 31,
    columnNumber: 5
  }, this));
}

/***/ }),

/***/ "./modules/database/connection/openDatabase.ts":
/*!*****************************************************!*\
  !*** ./modules/database/connection/openDatabase.ts ***!
  \*****************************************************/
/*! exports provided: openDatabase */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "openDatabase", function() { return openDatabase; });
/* harmony import */ var idb__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! idb */ "idb");
/* harmony import */ var idb__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(idb__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _showUpgradeBlockedMessage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./showUpgradeBlockedMessage */ "./modules/database/connection/showUpgradeBlockedMessage.ts");
/* harmony import */ var _upgradeDatabase__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./upgradeDatabase */ "./modules/database/connection/upgradeDatabase.ts");



const openDatabase = async () => {
  return Object(idb__WEBPACK_IMPORTED_MODULE_0__["openDB"])("discohook", 10, {
    upgrade: (database, oldVersion, newVersion, transaction) => {
      // Casting to unknown schema, because upgrades shouldn't assume how the
      // schema looks at that time
      Object(_upgradeDatabase__WEBPACK_IMPORTED_MODULE_2__["upgradeDatabase"])(database, transaction, oldVersion).then(() => {
        var _document$querySelect;

        localStorage.setItem("database-upgraded-version", "10");
        (_document$querySelect = document.querySelector("#db-upgrade-blocked")) === null || _document$querySelect === void 0 ? void 0 : _document$querySelect.remove();
      }).catch(error => {
        console.error("Error on database upgrade:", error);
      });
    },
    blocked: _showUpgradeBlockedMessage__WEBPACK_IMPORTED_MODULE_1__["showUpgradeBlockedMessage"]
  });
};

/***/ }),

/***/ "./modules/database/connection/showUpgradeBlockedMessage.ts":
/*!******************************************************************!*\
  !*** ./modules/database/connection/showUpgradeBlockedMessage.ts ***!
  \******************************************************************/
/*! exports provided: showUpgradeBlockedMessage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "showUpgradeBlockedMessage", function() { return showUpgradeBlockedMessage; });
const showUpgradeBlockedMessage = () => {
  const container = document.createElement("div");
  container.id = "db-upgrade-blocked";
  container.style.position = "absolute";
  container.style.top = "0";
  container.style.right = "0";
  container.style.bottom = "0";
  container.style.left = "0";
  container.style.background = "rgba(0, 0, 0, 0.85)";
  container.style.padding = "16px";
  const header = document.createElement("h1");
  header.style.color = "#ffffff";
  header.append("Discohook's local database needs an upgrade");
  const blockedMessage = document.createElement("p");
  blockedMessage.append("However, the upgrade can't proceed because there are older sessions of Discohook open.");
  const closeTabsMessage = document.createElement("p");
  closeTabsMessage.append("Please close all Discohook tabs before continuing.");
  container.append(header, blockedMessage, closeTabsMessage);
  document.body.append(container);
};

/***/ }),

/***/ "./modules/database/connection/upgradeDatabase.ts":
/*!********************************************************!*\
  !*** ./modules/database/connection/upgradeDatabase.ts ***!
  \********************************************************/
/*! exports provided: upgradeDatabase */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "upgradeDatabase", function() { return upgradeDatabase; });
/* harmony import */ var _common_object_toSnakeCase__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../common/object/toSnakeCase */ "./common/object/toSnakeCase.ts");
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/* eslint-disable no-await-in-loop */

const upgradeDatabase = async (database, transaction, oldVersion) => {
  if (oldVersion < 2 && oldVersion >= 1) {
    let cursor = await transaction.objectStore("backups").openCursor();

    while (cursor) {
      await cursor.update({
        name: cursor.key,
        message: cursor.value
      });
      cursor = await cursor.continue();
    }
  }

  if (oldVersion < 3) {
    database.createObjectStore("backup", {
      keyPath: "id",
      autoIncrement: true
    });
    const backupStore = transaction.objectStore("backup");
    backupStore.createIndex("name", "name", {
      unique: true
    });
  }

  if (oldVersion < 4 && oldVersion >= 1) {
    const backupStore = transaction.objectStore("backup");
    const existingBackups = new Set();
    let nameCursor = await backupStore.index("name").openKeyCursor();

    while (nameCursor) {
      existingBackups.add(nameCursor.key);
      nameCursor = await nameCursor.continue();
    }

    let cursor = await transaction.objectStore("backups").openCursor();

    while (cursor) {
      if (!existingBackups.has(cursor.key)) {
        await backupStore.put(_objectSpread(_objectSpread({}, cursor.value), {}, {
          name: cursor.key,
          message: Object(_common_object_toSnakeCase__WEBPACK_IMPORTED_MODULE_0__["toSnakeCase"])(cursor.value.message)
        }));
      }

      cursor = await cursor.continue();
    }
  }

  if (oldVersion < 5 && oldVersion >= 1) {
    const backupStore = transaction.objectStore("backup");
    let cursor = await backupStore.openCursor();

    while (cursor) {
      const _cursor$value = cursor.value,
            {
        message
      } = _cursor$value,
            rest = _objectWithoutProperties(_cursor$value, ["message"]);

      await backupStore.put(_objectSpread(_objectSpread({}, rest), {}, {
        messages: [message]
      }));
      cursor = await cursor.continue();
    }
  }

  if (oldVersion < 6 && oldVersion >= 1) {
    const backupStore = transaction.objectStore("backup");
    let cursor = await backupStore.openCursor();

    while (cursor) {
      const _cursor$value2 = cursor.value,
            {
        webhookUrl
      } = _cursor$value2,
            rest = _objectWithoutProperties(_cursor$value2, ["webhookUrl"]);

      await backupStore.put(_objectSpread(_objectSpread({}, rest), {}, {
        target: {
          url: webhookUrl
        }
      }));
      cursor = await cursor.continue();
    }
  }

  if (oldVersion < 9 && oldVersion >= 1) {
    const backupStore = transaction.objectStore("backup");
    let cursor = await backupStore.openCursor();

    while (cursor) {
      const {
        id,
        name,
        messages,
        target
      } = cursor.value;

      if (name) {
        await backupStore.put({
          id,
          name,
          messages: messages.map(data => ({
            data: "data" in data ? data.data : data,
            reference: "reference" in data ? data.reference : target.message
          })),
          target: {
            url: target.url
          }
        });
      } else {
        await backupStore.delete(id);
      }

      cursor = await cursor.continue();
    }
  }

  if (oldVersion < 10 && oldVersion >= 1) {
    const backupStore = transaction.objectStore("backup");
    let cursor = await backupStore.openCursor();

    while (cursor) {
      var _target$url;

      const _cursor$value3 = cursor.value,
            {
        target
      } = _cursor$value3,
            backup = _objectWithoutProperties(_cursor$value3, ["target"]);

      await backupStore.put(_objectSpread(_objectSpread({}, backup), {}, {
        targets: [{
          url: (_target$url = target.url) !== null && _target$url !== void 0 ? _target$url : ""
        }]
      }));
      cursor = await cursor.continue();
    }
  }
};

/***/ }),

/***/ "./modules/database/persist/PersistentStorageWarning.tsx":
/*!***************************************************************!*\
  !*** ./modules/database/persist/PersistentStorageWarning.tsx ***!
  \***************************************************************/
/*! exports provided: PersistentStorageWarning */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PersistentStorageWarning", function() { return PersistentStorageWarning; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var mobx_react_lite__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! mobx-react-lite */ "mobx-react-lite");
/* harmony import */ var mobx_react_lite__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(mobx_react_lite__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _common_input_button_PrimaryButton__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../common/input/button/PrimaryButton */ "./common/input/button/PrimaryButton.ts");
/* harmony import */ var _common_input_button_SecondaryButton__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../common/input/button/SecondaryButton */ "./common/input/button/SecondaryButton.ts");
/* harmony import */ var _common_layout_ButtonRow__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../common/layout/ButtonRow */ "./common/layout/ButtonRow.ts");
/* harmony import */ var _common_modal_ModalManagerContext__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../common/modal/ModalManagerContext */ "./common/modal/ModalManagerContext.tsx");
/* harmony import */ var _common_state_useRequiredContext__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../common/state/useRequiredContext */ "./common/state/useRequiredContext.ts");
/* harmony import */ var _markdown_Markdown__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../markdown/Markdown */ "./modules/markdown/Markdown.tsx");
/* harmony import */ var _DatabaseManagerContext__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../DatabaseManagerContext */ "./modules/database/DatabaseManagerContext.ts");
/* harmony import */ var _PushNotificationModal__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./PushNotificationModal */ "./modules/database/persist/PushNotificationModal.tsx");

var _jsxFileName = "F:\\DiscordHookSite\\modules\\database\\persist\\PersistentStorageWarning.tsx";











const Container = styled_components__WEBPACK_IMPORTED_MODULE_3___default.a.div.withConfig({
  displayName: "PersistentStorageWarning__Container",
  componentId: "sc-3x6mdx-0"
})(["margin-top:16px;padding:16px;background:", ";border-radius:3px;"], ({
  theme
}) => theme.background.secondary);
const Header = styled_components__WEBPACK_IMPORTED_MODULE_3___default.a.h5.withConfig({
  displayName: "PersistentStorageWarning__Header",
  componentId: "sc-3x6mdx-1"
})(["margin:0 0 8px;color:", ";font-size:1em;font-weight:500;line-height:1.375;"], ({
  theme
}) => theme.header.primary);
const Buttons = styled_components__WEBPACK_IMPORTED_MODULE_3___default()(_common_layout_ButtonRow__WEBPACK_IMPORTED_MODULE_6__["ButtonRow"]).withConfig({
  displayName: "PersistentStorageWarning__Buttons",
  componentId: "sc-3x6mdx-2"
})(["margin-top:16px;"]);
function PersistentStorageWarning() {
  const modalManager = Object(_common_state_useRequiredContext__WEBPACK_IMPORTED_MODULE_8__["useRequiredContext"])(_common_modal_ModalManagerContext__WEBPACK_IMPORTED_MODULE_7__["ModalManagerContext"]);
  const databaseManager = Object(_common_state_useRequiredContext__WEBPACK_IMPORTED_MODULE_8__["useRequiredContext"])(_DatabaseManagerContext__WEBPACK_IMPORTED_MODULE_10__["DatabaseManagerContext"]);
  return Object(mobx_react_lite__WEBPACK_IMPORTED_MODULE_1__["useObserver"])(() => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Container, {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Header, {
      children: "Warning"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_markdown_Markdown__WEBPACK_IMPORTED_MODULE_9__["Markdown"], {
      content: "Your browser did not grant permission to use persistent storage" + " for this site. Data stored might be deleted by the browser when" + " this permission is not granted."
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Buttons, {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_common_input_button_PrimaryButton__WEBPACK_IMPORTED_MODULE_4__["PrimaryButton"], {
        onClick: async () => {
          if ("chrome" in window) {
            modalManager.spawn({
              render: () => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_PushNotificationModal__WEBPACK_IMPORTED_MODULE_11__["PushNotificationModal"], {
                databaseManager: databaseManager
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 54,
                columnNumber: 19
              }, this)
            });
          } else {
            await databaseManager.requestPersistence();
          }
        },
        children: "Request permission"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 49,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_common_input_button_SecondaryButton__WEBPACK_IMPORTED_MODULE_5__["SecondaryButton"], {
        onClick: () => {
          databaseManager.persistenceMessageDismissed = true;
        },
        children: "Dismiss"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 64,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 39,
    columnNumber: 5
  }, this));
}

/***/ }),

/***/ "./modules/database/persist/PushNotificationModal.tsx":
/*!************************************************************!*\
  !*** ./modules/database/persist/PushNotificationModal.tsx ***!
  \************************************************************/
/*! exports provided: PushNotificationModal */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PushNotificationModal", function() { return PushNotificationModal; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _common_input_button_PrimaryButton__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../common/input/button/PrimaryButton */ "./common/input/button/PrimaryButton.ts");
/* harmony import */ var _common_input_button_SecondaryButton__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../common/input/button/SecondaryButton */ "./common/input/button/SecondaryButton.ts");
/* harmony import */ var _common_modal_layout_ModalAction__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../common/modal/layout/ModalAction */ "./common/modal/layout/ModalAction.ts");
/* harmony import */ var _common_modal_layout_ModalBody__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../common/modal/layout/ModalBody */ "./common/modal/layout/ModalBody.ts");
/* harmony import */ var _common_modal_layout_ModalContainer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../common/modal/layout/ModalContainer */ "./common/modal/layout/ModalContainer.ts");
/* harmony import */ var _common_modal_layout_ModalFooter__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../common/modal/layout/ModalFooter */ "./common/modal/layout/ModalFooter.ts");
/* harmony import */ var _common_modal_layout_ModalHeader__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../common/modal/layout/ModalHeader */ "./common/modal/layout/ModalHeader.ts");
/* harmony import */ var _common_modal_layout_ModalTitle__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../common/modal/layout/ModalTitle */ "./common/modal/layout/ModalTitle.ts");
/* harmony import */ var _common_modal_ModalContext__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../common/modal/ModalContext */ "./common/modal/ModalContext.ts");
/* harmony import */ var _common_state_useRequiredContext__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../common/state/useRequiredContext */ "./common/state/useRequiredContext.ts");
/* harmony import */ var _icons_remove__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../icons/remove */ "./icons/remove.tsx");
/* harmony import */ var _markdown_Markdown__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../markdown/Markdown */ "./modules/markdown/Markdown.tsx");

var _jsxFileName = "F:\\DiscordHookSite\\modules\\database\\persist\\PushNotificationModal.tsx";













function PushNotificationModal(props) {
  const {
    databaseManager
  } = props;
  const modal = Object(_common_state_useRequiredContext__WEBPACK_IMPORTED_MODULE_11__["useRequiredContext"])(_common_modal_ModalContext__WEBPACK_IMPORTED_MODULE_10__["ModalContext"]);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_common_modal_layout_ModalContainer__WEBPACK_IMPORTED_MODULE_6__["ModalContainer"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_common_modal_layout_ModalHeader__WEBPACK_IMPORTED_MODULE_8__["ModalHeader"], {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_common_modal_layout_ModalTitle__WEBPACK_IMPORTED_MODULE_9__["ModalTitle"], {
        children: "Notice"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 28,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_common_modal_layout_ModalAction__WEBPACK_IMPORTED_MODULE_4__["ModalAction"], {
        icon: _icons_remove__WEBPACK_IMPORTED_MODULE_12__["remove"],
        label: "Close",
        onClick: () => modal.dismiss()
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 29,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_common_modal_layout_ModalBody__WEBPACK_IMPORTED_MODULE_5__["ModalBody"], {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_markdown_Markdown__WEBPACK_IMPORTED_MODULE_13__["Markdown"], {
        content: "Chrome based browsers do not allow manual control of persistent" + " storage. As a workaround, you can grant this site permission to" + " send notifications to allow the site to use persistent storage."
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 36,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_common_modal_layout_ModalFooter__WEBPACK_IMPORTED_MODULE_7__["ModalFooter"], {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_common_input_button_SecondaryButton__WEBPACK_IMPORTED_MODULE_3__["SecondaryButton"], {
        onClick: () => modal.dismiss(),
        children: "Cancel"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 45,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_common_input_button_PrimaryButton__WEBPACK_IMPORTED_MODULE_2__["PrimaryButton"], {
        onClick: async () => {
          modal.dismiss();
          await databaseManager.requestPersistence();
        },
        children: "Request permission"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 48,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 26,
    columnNumber: 5
  }, this);
}

/***/ })

};;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21tb24vZG9tL2Rvd25sb2FkQmxvYi50cyIsIndlYnBhY2s6Ly8vLi9pY29ucy9zYXZlLnRzeCIsIndlYnBhY2s6Ly8vLi9pY29ucy90cmFzaC50c3giLCJ3ZWJwYWNrOi8vLy4vaWNvbnMvdXBsb2FkLnRzeCIsIndlYnBhY2s6Ly8vLi9tb2R1bGVzL2RhdGFiYXNlL0RhdGFiYXNlTWFuYWdlci50cyIsIndlYnBhY2s6Ly8vLi9tb2R1bGVzL2RhdGFiYXNlL0RhdGFiYXNlTWFuYWdlckNvbnRleHQudHMiLCJ3ZWJwYWNrOi8vLy4vbW9kdWxlcy9kYXRhYmFzZS9iYWNrdXAvQmFja3VwTWFuYWdlci50cyIsIndlYnBhY2s6Ly8vLi9tb2R1bGVzL2RhdGFiYXNlL2JhY2t1cC9CYWNrdXBNYW5hZ2VyQ29udGV4dC50cyIsIndlYnBhY2s6Ly8vLi9tb2R1bGVzL2RhdGFiYXNlL2JhY2t1cC9tb2RhbC9CYWNrdXBDcmVhdGlvbkNvbnRyb2xzLnRzeCIsIndlYnBhY2s6Ly8vLi9tb2R1bGVzL2RhdGFiYXNlL2JhY2t1cC9tb2RhbC9CYWNrdXBJdGVtLnRzeCIsIndlYnBhY2s6Ly8vLi9tb2R1bGVzL2RhdGFiYXNlL2JhY2t1cC9tb2RhbC9CYWNrdXBMaXN0LnRzeCIsIndlYnBhY2s6Ly8vLi9tb2R1bGVzL2RhdGFiYXNlL2JhY2t1cC9tb2RhbC9CYWNrdXBzTW9kYWwudHN4Iiwid2VicGFjazovLy8uL21vZHVsZXMvZGF0YWJhc2UvYmFja3VwL21vZGFsL0RlbGV0aW9uQ29uZmlybWF0aW9uTW9kYWwudHN4Iiwid2VicGFjazovLy8uL21vZHVsZXMvZGF0YWJhc2UvY29ubmVjdGlvbi9vcGVuRGF0YWJhc2UudHMiLCJ3ZWJwYWNrOi8vLy4vbW9kdWxlcy9kYXRhYmFzZS9jb25uZWN0aW9uL3Nob3dVcGdyYWRlQmxvY2tlZE1lc3NhZ2UudHMiLCJ3ZWJwYWNrOi8vLy4vbW9kdWxlcy9kYXRhYmFzZS9jb25uZWN0aW9uL3VwZ3JhZGVEYXRhYmFzZS50cyIsIndlYnBhY2s6Ly8vLi9tb2R1bGVzL2RhdGFiYXNlL3BlcnNpc3QvUGVyc2lzdGVudFN0b3JhZ2VXYXJuaW5nLnRzeCIsIndlYnBhY2s6Ly8vLi9tb2R1bGVzL2RhdGFiYXNlL3BlcnNpc3QvUHVzaE5vdGlmaWNhdGlvbk1vZGFsLnRzeCJdLCJuYW1lcyI6WyJkb3dubG9hZEJsb2IiLCJibG9iIiwibmFtZSIsInVybCIsIlVSTCIsImNyZWF0ZU9iamVjdFVSTCIsImFuY2hvciIsImRvY3VtZW50IiwiY3JlYXRlRWxlbWVudCIsImJvZHkiLCJhcHBlbmQiLCJocmVmIiwiZG93bmxvYWQiLCJjbGljayIsInJlbW92ZSIsInJldm9rZU9iamVjdFVSTCIsInNhdmUiLCJ0cmFzaCIsInVwbG9hZCIsIkRhdGFiYXNlTWFuYWdlciIsImNvbnN0cnVjdG9yIiwiaW5pdGlhbGl6ZWQiLCJkYXRhYmFzZSIsIm1hcmtBc0luaXRpYWxpemVkIiwiUHJvbWlzZSIsInJlc29sdmUiLCJuYXZpZ2F0b3IiLCJzdG9yYWdlIiwicGVyc2lzdGVkIiwidGhlbiIsImNhdGNoIiwib3BlbkRhdGFiYXNlIiwiZXJyb3IiLCJjb25zb2xlIiwicmVxdWVzdFBlcnNpc3RlbmNlIiwid2luZG93IiwiTm90aWZpY2F0aW9uIiwicmVxdWVzdFBlcm1pc3Npb24iLCJwZXJzaXN0Iiwic2hvdWxkU2hvd1BlcnNpc3RlbmNlV2FybmluZyIsInBlcnNpc3RlbmNlTWVzc2FnZURpc21pc3NlZCIsIm9ic2VydmFibGUiLCJjb21wdXRlZCIsIkRhdGFiYXNlTWFuYWdlckNvbnRleHQiLCJjcmVhdGVDb250ZXh0IiwiZGlzcGxheU5hbWUiLCJEYXRhYmFzZU1hbmFnZXJQcm92aWRlciIsIlByb3ZpZGVyIiwiQmFja3VwTWFuYWdlciIsImRhdGFiYXNlTWFuYWdlciIsImVkaXRvck1hbmFnZXIiLCJsb2FkQmFja3VwTGlzdCIsImJhY2t1cHMiLCJjdXJzb3IiLCJ0cmFuc2FjdGlvbiIsIm9iamVjdFN0b3JlIiwiaW5kZXgiLCJvcGVuS2V5Q3Vyc29yIiwicHVzaCIsImlkIiwicHJpbWFyeUtleSIsImtleSIsImNvbnRpbnVlIiwicnVuSW5BY3Rpb24iLCJnZXRJZCIsImdldEtleSIsImxvYWRCYWNrdXAiLCJiYWNrdXAiLCJnZXQiLCJzZXQiLCJtZXNzYWdlcyIsIm1hcCIsImRhdGEiLCJtZXNzYWdlIiwibWVzc2FnZU9mIiwidGFyZ2V0cyIsInRhcmdldCIsImZldGNoIiwic2F2ZUJhY2t1cCIsImZpbGVzIiwidW5kZWZpbmVkIiwicmVmZXJlbmNlIiwicHV0IiwiZGVsZXRlQmFja3VwIiwiZGVsZXRlIiwiZXhwb3J0QmFja3VwIiwiYmFja3VwRGF0YSIsInZlcnNpb24iLCJCbG9iIiwiSlNPTiIsInN0cmluZ2lmeSIsInR5cGUiLCJleHBvcnRBbGwiLCJvcGVuQ3Vyc29yIiwidmFsdWUiLCJnZXRTYWZlQmFja3VwTmFtZSIsIm51bWJlciIsInByb3Bvc2VkTmFtZSIsImltcG9ydEJhY2t1cHMiLCJleHBvcnREYXRhIiwicGFyc2UiLCJ0ZXh0IiwidG9TbmFrZUNhc2UiLCJ3ZWJob29rVXJsIiwiQmFja3VwTWFuYWdlckNvbnRleHQiLCJCYWNrdXBNYW5hZ2VyUHJvdmlkZXIiLCJCYWNrdXBDcmVhdGlvbkNvbnRyb2xzIiwiYmFja3VwTWFuYWdlciIsInVzZVJlcXVpcmVkQ29udGV4dCIsImJhY2t1cE5hbWUiLCJzZXRCYWNrdXBOYW1lIiwidXNlU3RhdGUiLCJ1c2VPYnNlcnZlciIsImxlbmd0aCIsInRyaW0iLCJzb21lIiwiQ29udGFpbmVyIiwic3R5bGVkIiwibGkiLCJ0aGVtZSIsImJhY2tncm91bmRNb2RpZmllciIsImFjY2VudCIsIkJ1dHRvbiIsIkJhY2t1cE5hbWUiLCJkaXYiLCJlbGxpcHNpcyIsIkJhY2t1cEl0ZW0iLCJwcm9wcyIsIm1vZGFsTWFuYWdlciIsIk1vZGFsTWFuYWdlckNvbnRleHQiLCJpY29uIiwibGFiZWwiLCJoYW5kbGVyIiwib3ZlcmZsb3ciLCJjb3B5Iiwic3Bhd24iLCJyZW5kZXIiLCJ1bCIsIkJhY2t1cExpc3QiLCJzZWFyY2giLCJzZXRTZWFyY2giLCJmaWx0ZXIiLCJ0b0xvY2FsZUxvd2VyQ2FzZSIsImluY2x1ZGVzIiwiQmFja3Vwc01vZGFsIiwidXNlTGF6eVZhbHVlIiwibW9kYWwiLCJNb2RhbENvbnRleHQiLCJmaWxlSW5wdXRSZWYiLCJ1c2VSZWYiLCJkaXNwbGF5IiwiZXZlbnQiLCJmaWxlIiwiaXRlbSIsInNsaWNlIiwiZGlzbWlzcyIsImN1cnJlbnQiLCJEZWxldGlvbkNvbmZpcm1hdGlvbk1vZGFsIiwib3BlbkRCIiwidXBncmFkZSIsIm9sZFZlcnNpb24iLCJuZXdWZXJzaW9uIiwidXBncmFkZURhdGFiYXNlIiwibG9jYWxTdG9yYWdlIiwic2V0SXRlbSIsInF1ZXJ5U2VsZWN0b3IiLCJibG9ja2VkIiwic2hvd1VwZ3JhZGVCbG9ja2VkTWVzc2FnZSIsImNvbnRhaW5lciIsInN0eWxlIiwicG9zaXRpb24iLCJ0b3AiLCJyaWdodCIsImJvdHRvbSIsImxlZnQiLCJiYWNrZ3JvdW5kIiwicGFkZGluZyIsImhlYWRlciIsImNvbG9yIiwiYmxvY2tlZE1lc3NhZ2UiLCJjbG9zZVRhYnNNZXNzYWdlIiwidXBkYXRlIiwiY3JlYXRlT2JqZWN0U3RvcmUiLCJrZXlQYXRoIiwiYXV0b0luY3JlbWVudCIsImJhY2t1cFN0b3JlIiwiY3JlYXRlSW5kZXgiLCJ1bmlxdWUiLCJleGlzdGluZ0JhY2t1cHMiLCJTZXQiLCJuYW1lQ3Vyc29yIiwiYWRkIiwiaGFzIiwicmVzdCIsInNlY29uZGFyeSIsIkhlYWRlciIsImg1IiwicHJpbWFyeSIsIkJ1dHRvbnMiLCJCdXR0b25Sb3ciLCJQZXJzaXN0ZW50U3RvcmFnZVdhcm5pbmciLCJQdXNoTm90aWZpY2F0aW9uTW9kYWwiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUE7QUFBQTtBQUFPLE1BQU1BLFlBQVksR0FBRyxDQUFDQyxJQUFELEVBQWFDLElBQWIsS0FBOEI7QUFDeEQsUUFBTUMsR0FBRyxHQUFHQyxHQUFHLENBQUNDLGVBQUosQ0FBb0JK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Z0ZBQUQ7QUFDRSxlQUFPLEVBQUUsWUFBWTtBQUNuQlQsZUFBSyxDQUFDUyxPQUFOO0FBQ0EsZ0JBQU0xRyxlQUFlLENBQUNmLGtCQUFoQixFQUFOO0FBQ0QsU0FKSDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUpGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQWxCRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERjtBQWtDRCxDIiwiZmlsZSI6IjE5My5qcyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjb25zdCBkb3dubG9hZEJsb2IgPSAoYmxvYjogQmxvYiwgbmFtZTogc3RyaW5nKSA9PiB7XHJcbiAgY29uc3QgdXJsID0gVVJMLmNyZWF0ZU9iamVjdFVSTChibG9iKVxyXG5cclxuICBjb25zdCBhbmNob3IgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYVwiKVxyXG4gIGRvY3VtZW50LmJvZHkuYXBwZW5kKGFuY2hvcilcclxuXHJcbiAgYW5jaG9yLmhyZWYgPSB1cmxcclxuICBhbmNob3IuZG93bmxvYWQgPSBuYW1lXHJcblxyXG4gIGFuY2hvci5jbGljaygpXHJcblxyXG4gIGFuY2hvci5yZW1vdmUoKVxyXG4gIFVSTC5yZXZva2VPYmplY3RVUkwodXJsKVxyXG59XHJcbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIlxyXG5cclxuZXhwb3J0IGNvbnN0IHNhdmUgPSAoXHJcbiAgPHN2ZyB3aWR0aD1cIjE2XCIgaGVpZ2h0PVwiMTZcIiB2aWV3Qm94PVwiMCAwIDE2IDE2XCIgZmlsbD1cIm5vbmVcIj5cclxuICAgIDxwYXRoXHJcbiAgICAgIGQ9XCJNMTEgMTVWOUg1VjE1TTUgMUw0Ljk5OTk5IDVIMTBNMTMuNjY2NyAxNUgyLjMzMzMzQzEuOTc5NzEgMTUgMS42NDA1NyAxNC44NTk1IDEuMzkwNTIgMTQuNjA5NUMxLjE0MDQ4IDE0LjM1OTQgMSAxNC4wMjAzIDEgMTMuNjY2N1YyLjMzMzMzQzEgMS45Nzk3MSAxLjE0MDQ4IDEuNjQwNTcgMS4zOTA1MiAxLjM5MDUyQzEuNjQwNTcgMS4xNDA0OCAxLjk3OTcxIDEgMi4zMzMzMyAxSDExLjY2NjdMMTUgNC4zMzMzM1YxMy42NjY3QzE1IDE0LjAyMDMgMTQuODU5NSAxNC4zNTk0IDE0LjYwOTUgMTQuNjA5NUMxNC4zNTk0IDE0Ljg1OTUgMTQuMDIwMyAxNSAxMy42NjY3IDE1WlwiXHJcbiAgICAgIHN0cm9rZT1cImN1cnJlbnRDb2xvclwiXHJcbiAgICAgIHN0cm9rZVdpZHRoPVwiMlwiXHJcbiAgICAgIHN0cm9rZUxpbmVjYXA9XCJyb3VuZFwiXHJcbiAgICAgIHN0cm9rZUxpbmVqb2luPVwicm91bmRcIlxyXG4gICAgLz5cclxuICA8L3N2Zz5cclxuKVxyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCJcclxuXHJcbmV4cG9ydCBjb25zdCB0cmFzaCA9IChcclxuICA8c3ZnIHdpZHRoPVwiMTZcIiBoZWlnaHQ9XCIxNlwiIHZpZXdCb3g9XCIwIDAgMTYgMTZcIiBmaWxsPVwibm9uZVwiPlxyXG4gICAgPHBhdGhcclxuICAgICAgZD1cIk0xIDRMMi45OTk5OSAzLjk5OTk4TTIuOTk5OTkgMy45OTk5OFYxMy41QzIuOTk5OTkgMTQuMzI4NCAzLjY3MTU2IDE1IDQuNDk5OTkgMTVMMTEuNSAxNUMxMi4zMjg0IDE1IDEzIDE0LjMyODQgMTMgMTMuNVY0TTIuOTk5OTkgMy45OTk5OEg1LjMzMzMzTTEzIDRIMTVNMTMgNEwxMC42NjY3IDMuOTk5OThNNS4zMzMzMyAzLjk5OTk4VjIuNUM1LjMzMzMzIDEuNjcxNTcgNi4wMDQ5MSAxIDYuODMzMzMgMUg5LjE2NjY3QzkuOTk1MDkgMSAxMC42NjY3IDEuNjcxNTcgMTAuNjY2NyAyLjVWMy45OTk5OE01LjMzMzMzIDMuOTk5OThIMTAuNjY2N1wiXHJcbiAgICAgIHN0cm9rZT1cImN1cnJlbnRDb2xvclwiXHJcbiAgICAgIHN0cm9rZVdpZHRoPVwiMlwiXHJcbiAgICAgIHN0cm9rZUxpbmVjYXA9XCJyb3VuZFwiXHJcbiAgICAgIHN0cm9rZUxpbmVqb2luPVwicm91bmRcIlxyXG4gICAgLz5cclxuICA8L3N2Zz5cclxuKVxyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCJcclxuXHJcbmV4cG9ydCBjb25zdCB1cGxvYWQgPSAoXHJcbiAgPHN2ZyB3aWR0aD1cIjE2XCIgaGVpZ2h0PVwiMTZcIiB2aWV3Qm94PVwiMCAwIDE2IDE2XCIgZmlsbD1cIm5vbmVcIj5cclxuICAgIDxwYXRoXHJcbiAgICAgIGQ9XCJNMTQgMTBWMTIuNjY2N0MxNCAxMy4wMjAzIDEzLjg1OTUgMTMuMzU5NCAxMy42MDk1IDEzLjYwOTVDMTMuMzU5NCAxMy44NTk1IDEzLjAyMDMgMTQgMTIuNjY2NyAxNEgzLjMzMzMzQzIuOTc5NzEgMTQgMi42NDA1NyAxMy44NTk1IDIuMzkwNTIgMTMuNjA5NUMyLjE0MDQ4IDEzLjM1OTQgMiAxMy4wMjAzIDIgMTIuNjY2N1YxME00LjY2NjY3IDUuMzMzMzNMOCAyTTggMkwxMS4zMzMzIDUuMzMzMzNNOCAyVjEwXCJcclxuICAgICAgc3Ryb2tlPVwiY3VycmVudENvbG9yXCJcclxuICAgICAgc3Ryb2tlV2lkdGg9XCIyXCJcclxuICAgICAgc3Ryb2tlTGluZWNhcD1cInJvdW5kXCJcclxuICAgICAgc3Ryb2tlTGluZWpvaW49XCJyb3VuZFwiXHJcbiAgICAvPlxyXG4gIDwvc3ZnPlxyXG4pXHJcbiIsImltcG9ydCB0eXBlIHsgSURCUERhdGFiYXNlIH0gZnJvbSBcImlkYlwiXHJcbmltcG9ydCB7IGNvbXB1dGVkLCBvYnNlcnZhYmxlIH0gZnJvbSBcIm1vYnhcIlxyXG5pbXBvcnQgeyBvcGVuRGF0YWJhc2UgfSBmcm9tIFwiLi9jb25uZWN0aW9uL29wZW5EYXRhYmFzZVwiXHJcbmltcG9ydCB0eXBlIHsgU2NoZW1hIH0gZnJvbSBcIi4vU2NoZW1hXCJcclxuXHJcbmV4cG9ydCBjbGFzcyBEYXRhYmFzZU1hbmFnZXIge1xyXG4gIGluaXRpYWxpemVkOiBQcm9taXNlPHZvaWQ+XHJcbiAgZGF0YWJhc2UhOiBJREJQRGF0YWJhc2U8U2NoZW1hPlxyXG5cclxuICBAb2JzZXJ2YWJsZSBwZXJzaXN0ZWQgPSB0cnVlXHJcbiAgQG9ic2VydmFibGUgcGVyc2lzdGVuY2VNZXNzYWdlRGlzbWlzc2VkID0gZmFsc2VcclxuXHJcbiAgY29uc3RydWN0b3IoKSB7XHJcbiAgICBsZXQgbWFya0FzSW5pdGlhbGl6ZWQ6ICgpID0+IHZvaWRcclxuICAgIHRoaXMuaW5pdGlhbGl6ZWQgPSBuZXcgUHJvbWlzZShyZXNvbHZlID0+IHtcclxuICAgICAgbWFya0FzSW5pdGlhbGl6ZWQgPSByZXNvbHZlXHJcbiAgICB9KVxyXG5cclxuICAgIGlmICh0eXBlb2Ygd2luZG93ID09PSBcInVuZGVmaW5lZFwiKSByZXR1cm5cclxuXHJcbiAgICBpZiAoXCJzdG9yYWdlXCIgaW4gbmF2aWdhdG9yKSB7XHJcbiAgICAgIG5hdmlnYXRvci5zdG9yYWdlXHJcbiAgICAgICAgLnBlcnNpc3RlZCgpXHJcbiAgICAgICAgLnRoZW4ocGVyc2lzdGVkID0+IHtcclxuICAgICAgICAgIHRoaXMucGVyc2lzdGVkID0gcGVyc2lzdGVkXHJcbiAgICAgICAgfSlcclxuICAgICAgICAuY2F0Y2goKCkgPT4ge30pXHJcbiAgICB9XHJcblxyXG4gICAgb3BlbkRhdGFiYXNlKClcclxuICAgICAgLnRoZW4oZGF0YWJhc2UgPT4ge1xyXG4gICAgICAgIHRoaXMuZGF0YWJhc2UgPSBkYXRhYmFzZVxyXG4gICAgICAgIG1hcmtBc0luaXRpYWxpemVkKClcclxuICAgICAgfSlcclxuICAgICAgLmNhdGNoKGVycm9yID0+IHtcclxuICAgICAgICBjb25zb2xlLmVycm9yKFwiRmFpbGVkIHRvIG9wZW4gZGF0YWJhc2U6XCIsIGVycm9yKVxyXG4gICAgICB9KVxyXG4gIH1cclxuXHJcbiAgYXN5bmMgcmVxdWVzdFBlcnNpc3RlbmNlKCkge1xyXG4gICAgaWYgKFwiY2hyb21lXCIgaW4gd2luZG93KSB7XHJcbiAgICAgIGF3YWl0IE5vdGlmaWNhdGlvbi5yZXF1ZXN0UGVybWlzc2lvbigpXHJcbiAgICB9XHJcblxyXG4gICAgaWYgKFwic3RvcmFnZVwiIGluIG5hdmlnYXRvcikge1xyXG4gICAgICB0aGlzLnBlcnNpc3RlZCA9IGF3YWl0IG5hdmlnYXRvci5zdG9yYWdlLnBlcnNpc3QoKVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgQGNvbXB1dGVkIGdldCBzaG91bGRTaG93UGVyc2lzdGVuY2VXYXJuaW5nKCkge1xyXG4gICAgcmV0dXJuICF0aGlzLnBlcnNpc3RlZCAmJiAhdGhpcy5wZXJzaXN0ZW5jZU1lc3NhZ2VEaXNtaXNzZWRcclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgY3JlYXRlQ29udGV4dCB9IGZyb20gXCJyZWFjdFwiXHJcbmltcG9ydCB0eXBlIHsgRGF0YWJhc2VNYW5hZ2VyIH0gZnJvbSBcIi4vRGF0YWJhc2VNYW5hZ2VyXCJcclxuXHJcbmV4cG9ydCBjb25zdCBEYXRhYmFzZU1hbmFnZXJDb250ZXh0ID0gY3JlYXRlQ29udGV4dDxEYXRhYmFzZU1hbmFnZXIgfCBudWxsPihcclxuICBudWxsLFxyXG4pXHJcblxyXG5EYXRhYmFzZU1hbmFnZXJDb250ZXh0LmRpc3BsYXlOYW1lID0gXCJEYXRhYmFzZU1hbmFnZXJDb250ZXh0XCJcclxuXHJcbmV4cG9ydCBjb25zdCBEYXRhYmFzZU1hbmFnZXJQcm92aWRlciA9IERhdGFiYXNlTWFuYWdlckNvbnRleHQuUHJvdmlkZXJcclxuIiwiLyogZXNsaW50LWRpc2FibGUgbm8tYXdhaXQtaW4tbG9vcCAqL1xyXG5cclxuaW1wb3J0IHsgb2JzZXJ2YWJsZSwgcnVuSW5BY3Rpb24gfSBmcm9tIFwibW9ieFwiXHJcbmltcG9ydCB7IGRvd25sb2FkQmxvYiB9IGZyb20gXCIuLi8uLi8uLi9jb21tb24vZG9tL2Rvd25sb2FkQmxvYlwiXHJcbmltcG9ydCB7IHRvU25ha2VDYXNlIH0gZnJvbSBcIi4uLy4uLy4uL2NvbW1vbi9vYmplY3QvdG9TbmFrZUNhc2VcIlxyXG5pbXBvcnQgdHlwZSB7IEVkaXRvck1hbmFnZXJMaWtlIH0gZnJvbSBcIi4uLy4uL2VkaXRvci9FZGl0b3JNYW5hZ2VyXCJcclxuaW1wb3J0IHsgbWVzc2FnZU9mIH0gZnJvbSBcIi4uLy4uL21lc3NhZ2UvaGVscGVycy9tZXNzYWdlT2ZcIlxyXG5pbXBvcnQgdHlwZSB7IE1lc3NhZ2VEYXRhIH0gZnJvbSBcIi4uLy4uL21lc3NhZ2Uvc3RhdGUvZGF0YS9NZXNzYWdlRGF0YVwiXHJcbmltcG9ydCB0eXBlIHsgRGF0YWJhc2VNYW5hZ2VyIH0gZnJvbSBcIi4uL0RhdGFiYXNlTWFuYWdlclwiXHJcbmltcG9ydCB0eXBlIHsgQmFja3VwIH0gZnJvbSBcIi4vdHlwZXMvQmFja3VwXCJcclxuaW1wb3J0IHR5cGUgeyBCYWNrdXBEYXRhIH0gZnJvbSBcIi4vdHlwZXMvQmFja3VwRGF0YVwiXHJcbmltcG9ydCB0eXBlIHsgRXhwb3J0RGF0YSB9IGZyb20gXCIuL3R5cGVzL0V4cG9ydERhdGFcIlxyXG5cclxuZXhwb3J0IGNsYXNzIEJhY2t1cE1hbmFnZXIge1xyXG4gIHByaXZhdGUgcmVhZG9ubHkgZGF0YWJhc2VNYW5hZ2VyOiBEYXRhYmFzZU1hbmFnZXJcclxuICBwcml2YXRlIHJlYWRvbmx5IGVkaXRvck1hbmFnZXI6IEVkaXRvck1hbmFnZXJMaWtlXHJcblxyXG4gIEBvYnNlcnZhYmxlIGJhY2t1cHM6IEJhY2t1cERhdGFbXSA9IFtdXHJcblxyXG4gIGNvbnN0cnVjdG9yKFxyXG4gICAgZGF0YWJhc2VNYW5hZ2VyOiBEYXRhYmFzZU1hbmFnZXIsXHJcbiAgICBlZGl0b3JNYW5hZ2VyOiBFZGl0b3JNYW5hZ2VyTGlrZSxcclxuICApIHtcclxuICAgIHRoaXMuZGF0YWJhc2VNYW5hZ2VyID0gZGF0YWJhc2VNYW5hZ2VyXHJcbiAgICB0aGlzLmVkaXRvck1hbmFnZXIgPSBlZGl0b3JNYW5hZ2VyXHJcblxyXG4gICAgZGF0YWJhc2VNYW5hZ2VyLmluaXRpYWxpemVkXHJcbiAgICAgIC50aGVuKGFzeW5jICgpID0+IHtcclxuICAgICAgICBhd2FpdCB0aGlzLmxvYWRCYWNrdXBMaXN0KClcclxuICAgICAgfSlcclxuICAgICAgLmNhdGNoKCgpID0+IHt9KVxyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBhc3luYyBsb2FkQmFja3VwTGlzdCgpIHtcclxuICAgIGNvbnN0IGJhY2t1cHM6IEJhY2t1cERhdGFbXSA9IFtdXHJcblxyXG4gICAgbGV0IGN1cnNvciA9IGF3YWl0IHRoaXMuZGF0YWJhc2VNYW5hZ2VyLmRhdGFiYXNlXHJcbiAgICAgIC50cmFuc2FjdGlvbihcImJhY2t1cFwiKVxyXG4gICAgICAub2JqZWN0U3RvcmUoXCJiYWNrdXBcIilcclxuICAgICAgLmluZGV4KFwibmFtZVwiKVxyXG4gICAgICAub3BlbktleUN1cnNvcigpXHJcblxyXG4gICAgd2hpbGUgKGN1cnNvcikge1xyXG4gICAgICBiYWNrdXBzLnB1c2goe1xyXG4gICAgICAgIGlkOiBjdXJzb3IucHJpbWFyeUtleSxcclxuICAgICAgICBuYW1lOiBjdXJzb3Iua2V5LFxyXG4gICAgICB9KVxyXG5cclxuICAgICAgY3Vyc29yID0gYXdhaXQgY3Vyc29yLmNvbnRpbnVlKClcclxuICAgIH1cclxuXHJcbiAgICBydW5JbkFjdGlvbigoKSA9PiB7XHJcbiAgICAgIHRoaXMuYmFja3VwcyA9IGJhY2t1cHNcclxuICAgIH0pXHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGFzeW5jIGdldElkKG5hbWU6IHN0cmluZykge1xyXG4gICAgcmV0dXJuIHRoaXMuZGF0YWJhc2VNYW5hZ2VyLmRhdGFiYXNlXHJcbiAgICAgIC50cmFuc2FjdGlvbihcImJhY2t1cFwiKVxyXG4gICAgICAub2JqZWN0U3RvcmUoXCJiYWNrdXBcIilcclxuICAgICAgLmluZGV4KFwibmFtZVwiKVxyXG4gICAgICAuZ2V0S2V5KG5hbWUpXHJcbiAgfVxyXG5cclxuICBhc3luYyBsb2FkQmFja3VwKG5hbWU6IHN0cmluZykge1xyXG4gICAgY29uc3QgYmFja3VwID0gYXdhaXQgdGhpcy5kYXRhYmFzZU1hbmFnZXIuZGF0YWJhc2VcclxuICAgICAgLnRyYW5zYWN0aW9uKFwiYmFja3VwXCIpXHJcbiAgICAgIC5vYmplY3RTdG9yZShcImJhY2t1cFwiKVxyXG4gICAgICAuaW5kZXgoXCJuYW1lXCIpXHJcbiAgICAgIC5nZXQobmFtZSlcclxuXHJcbiAgICBpZiAoIWJhY2t1cCkgcmV0dXJuXHJcblxyXG4gICAgdGhpcy5lZGl0b3JNYW5hZ2VyLnNldChcclxuICAgICAgXCJtZXNzYWdlc1wiLFxyXG4gICAgICBiYWNrdXAubWVzc2FnZXMubWFwKCh7IGRhdGEsIC4uLm1lc3NhZ2UgfSkgPT4gKHtcclxuICAgICAgICAuLi5tZXNzYWdlT2YoZGF0YSksXHJcbiAgICAgICAgLi4ubWVzc2FnZSxcclxuICAgICAgfSkpLFxyXG4gICAgKVxyXG4gICAgdGhpcy5lZGl0b3JNYW5hZ2VyLnNldChcInRhcmdldHNcIiwgYmFja3VwLnRhcmdldHMpXHJcbiAgICBmb3IgKGNvbnN0IHRhcmdldCBvZiB0aGlzLmVkaXRvck1hbmFnZXIudGFyZ2V0cykge1xyXG4gICAgICB0YXJnZXQuZmV0Y2goKS5jYXRjaCgoKSA9PiB7fSlcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGFzeW5jIHNhdmVCYWNrdXAoYmFja3VwOiBzdHJpbmcgfCBCYWNrdXApIHtcclxuICAgIGlmICh0eXBlb2YgYmFja3VwID09PSBcInN0cmluZ1wiKSB7XHJcbiAgICAgIGNvbnN0IGlkID0gYXdhaXQgdGhpcy5nZXRJZChiYWNrdXApXHJcblxyXG4gICAgICBiYWNrdXAgPSB7XHJcbiAgICAgICAgaWQsXHJcbiAgICAgICAgbmFtZTogYmFja3VwLFxyXG4gICAgICAgIG1lc3NhZ2VzOiB0aGlzLmVkaXRvck1hbmFnZXIubWVzc2FnZXMubWFwKG1lc3NhZ2UgPT4gKHtcclxuICAgICAgICAgIGRhdGE6IHtcclxuICAgICAgICAgICAgLi4ubWVzc2FnZS5kYXRhLFxyXG4gICAgICAgICAgICBmaWxlczogdW5kZWZpbmVkLFxyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIHJlZmVyZW5jZTogbWVzc2FnZS5yZWZlcmVuY2UsXHJcbiAgICAgICAgfSkpLFxyXG4gICAgICAgIHRhcmdldHM6IHRoaXMuZWRpdG9yTWFuYWdlci50YXJnZXRzLm1hcCh0YXJnZXQgPT4gKHtcclxuICAgICAgICAgIHVybDogdGFyZ2V0LnVybCxcclxuICAgICAgICB9KSksXHJcbiAgICAgIH1cclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGJhY2t1cCA9IHtcclxuICAgICAgICAuLi5iYWNrdXAsXHJcbiAgICAgICAgaWQ6IGF3YWl0IHRoaXMuZ2V0SWQoYmFja3VwLm5hbWUpLFxyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKCFiYWNrdXAuaWQpIGRlbGV0ZSBiYWNrdXAuaWRcclxuXHJcbiAgICBhd2FpdCB0aGlzLmRhdGFiYXNlTWFuYWdlci5kYXRhYmFzZVxyXG4gICAgICAudHJhbnNhY3Rpb24oXCJiYWNrdXBcIiwgXCJyZWFkd3JpdGVcIilcclxuICAgICAgLm9iamVjdFN0b3JlKFwiYmFja3VwXCIpXHJcbiAgICAgIC5wdXQoYmFja3VwKVxyXG5cclxuICAgIGF3YWl0IHRoaXMubG9hZEJhY2t1cExpc3QoKVxyXG4gIH1cclxuXHJcbiAgYXN5bmMgZGVsZXRlQmFja3VwKG5hbWU6IHN0cmluZykge1xyXG4gICAgY29uc3QgaWQgPSBhd2FpdCB0aGlzLmdldElkKG5hbWUpXHJcbiAgICBpZiAoIWlkKSByZXR1cm5cclxuXHJcbiAgICBhd2FpdCB0aGlzLmRhdGFiYXNlTWFuYWdlci5kYXRhYmFzZVxyXG4gICAgICAudHJhbnNhY3Rpb24oXCJiYWNrdXBcIiwgXCJyZWFkd3JpdGVcIilcclxuICAgICAgLm9iamVjdFN0b3JlKFwiYmFja3VwXCIpXHJcbiAgICAgIC5kZWxldGUoaWQpXHJcblxyXG4gICAgYXdhaXQgdGhpcy5sb2FkQmFja3VwTGlzdCgpXHJcbiAgfVxyXG5cclxuICBhc3luYyBleHBvcnRCYWNrdXAobmFtZTogc3RyaW5nKSB7XHJcbiAgICBjb25zdCBiYWNrdXAgPSBhd2FpdCB0aGlzLmRhdGFiYXNlTWFuYWdlci5kYXRhYmFzZVxyXG4gICAgICAudHJhbnNhY3Rpb24oXCJiYWNrdXBcIilcclxuICAgICAgLm9iamVjdFN0b3JlKFwiYmFja3VwXCIpXHJcbiAgICAgIC5pbmRleChcIm5hbWVcIilcclxuICAgICAgLmdldChuYW1lKVxyXG5cclxuICAgIGlmICghYmFja3VwKSByZXR1cm5cclxuXHJcbiAgICBjb25zdCBiYWNrdXBEYXRhOiBFeHBvcnREYXRhID0ge1xyXG4gICAgICB2ZXJzaW9uOiA3LFxyXG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25vLXVudXNlZC12YXJzXHJcbiAgICAgIGJhY2t1cHM6IFtiYWNrdXBdLm1hcCgoeyBpZCwgLi4uYmFja3VwIH0pID0+IGJhY2t1cCksXHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgYmxvYiA9IG5ldyBCbG9iKFtKU09OLnN0cmluZ2lmeShiYWNrdXBEYXRhLCB1bmRlZmluZWQsIDIpLCBcIlxcblwiXSwge1xyXG4gICAgICB0eXBlOiBcImFwcGxpY2F0aW9uL2pzb25cIixcclxuICAgIH0pXHJcblxyXG4gICAgZG93bmxvYWRCbG9iKGJsb2IsIGAke25hbWV9Lmpzb25gKVxyXG4gIH1cclxuXHJcbiAgYXN5bmMgZXhwb3J0QWxsKCkge1xyXG4gICAgY29uc3QgYmFja3VwczogQmFja3VwW10gPSBbXVxyXG5cclxuICAgIGxldCBjdXJzb3IgPSBhd2FpdCB0aGlzLmRhdGFiYXNlTWFuYWdlci5kYXRhYmFzZVxyXG4gICAgICAudHJhbnNhY3Rpb24oXCJiYWNrdXBcIilcclxuICAgICAgLm9iamVjdFN0b3JlKFwiYmFja3VwXCIpXHJcbiAgICAgIC5vcGVuQ3Vyc29yKClcclxuXHJcbiAgICB3aGlsZSAoY3Vyc29yKSB7XHJcbiAgICAgIGJhY2t1cHMucHVzaCh7XHJcbiAgICAgICAgLi4uY3Vyc29yLnZhbHVlLFxyXG4gICAgICAgIGlkOiB1bmRlZmluZWQsXHJcbiAgICAgIH0pXHJcblxyXG4gICAgICBjdXJzb3IgPSBhd2FpdCBjdXJzb3IuY29udGludWUoKVxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGJhY2t1cERhdGE6IEV4cG9ydERhdGEgPSB7XHJcbiAgICAgIHZlcnNpb246IDcsXHJcbiAgICAgIGJhY2t1cHMsXHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgYmxvYiA9IG5ldyBCbG9iKFtKU09OLnN0cmluZ2lmeShiYWNrdXBEYXRhLCB1bmRlZmluZWQsIDIpLCBcIlxcblwiXSwge1xyXG4gICAgICB0eXBlOiBcImFwcGxpY2F0aW9uL2pzb25cIixcclxuICAgIH0pXHJcblxyXG4gICAgZG93bmxvYWRCbG9iKGJsb2IsIFwiYmFja3Vwcy5qc29uXCIpXHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGFzeW5jIGdldFNhZmVCYWNrdXBOYW1lKG5hbWU6IHN0cmluZykge1xyXG4gICAgaWYgKCEoYXdhaXQgdGhpcy5nZXRJZChuYW1lKSkpIHtcclxuICAgICAgcmV0dXJuIG5hbWVcclxuICAgIH1cclxuXHJcbiAgICBmb3IgKGxldCBudW1iZXIgPSAxOyB0cnVlOyBudW1iZXIrKykge1xyXG4gICAgICBjb25zdCBwcm9wb3NlZE5hbWUgPSBgJHtuYW1lfSAoJHtudW1iZXJ9KWBcclxuXHJcbiAgICAgIGlmICghKGF3YWl0IHRoaXMuZ2V0SWQocHJvcG9zZWROYW1lKSkpIHtcclxuICAgICAgICByZXR1cm4gcHJvcG9zZWROYW1lXHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIGFzeW5jIGltcG9ydEJhY2t1cHMoYmxvYjogQmxvYikge1xyXG4gICAgbGV0IGV4cG9ydERhdGEgPSBKU09OLnBhcnNlKGF3YWl0IGJsb2IudGV4dCgpKSBhcyBFeHBvcnREYXRhXHJcblxyXG4gICAgc3dpdGNoIChleHBvcnREYXRhLnZlcnNpb24pIHtcclxuICAgICAgY2FzZSAxOlxyXG4gICAgICBjYXNlIDI6IHtcclxuICAgICAgICBleHBvcnREYXRhID0ge1xyXG4gICAgICAgICAgdmVyc2lvbjogMyxcclxuICAgICAgICAgIGJhY2t1cHM6IFtcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgIG5hbWU6IGV4cG9ydERhdGEubmFtZSxcclxuICAgICAgICAgICAgICBtZXNzYWdlOiB0b1NuYWtlQ2FzZShleHBvcnREYXRhLm1lc3NhZ2UpIGFzIE1lc3NhZ2VEYXRhLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgXSxcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgLy8gZmFsbHMgdGhyb3VnaFxyXG4gICAgICBjYXNlIDM6IHtcclxuICAgICAgICBleHBvcnREYXRhID0ge1xyXG4gICAgICAgICAgdmVyc2lvbjogNCxcclxuICAgICAgICAgIGJhY2t1cHM6IGV4cG9ydERhdGEuYmFja3Vwcy5tYXAoKHsgbWVzc2FnZSwgLi4uYmFja3VwIH0pID0+ICh7XHJcbiAgICAgICAgICAgIC4uLmJhY2t1cCxcclxuICAgICAgICAgICAgbWVzc2FnZXM6IFttZXNzYWdlXSxcclxuICAgICAgICAgIH0pKSxcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgLy8gZmFsbHMgdGhyb3VnaFxyXG4gICAgICBjYXNlIDQ6XHJcbiAgICAgICAgZXhwb3J0RGF0YSA9IHtcclxuICAgICAgICAgIHZlcnNpb246IDUsXHJcbiAgICAgICAgICBiYWNrdXBzOiBleHBvcnREYXRhLmJhY2t1cHMubWFwKCh7IHdlYmhvb2tVcmwsIC4uLmJhY2t1cCB9KSA9PiAoe1xyXG4gICAgICAgICAgICAuLi5iYWNrdXAsXHJcbiAgICAgICAgICAgIHRhcmdldDoge1xyXG4gICAgICAgICAgICAgIHVybDogd2ViaG9va1VybCxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgIH0pKSxcclxuICAgICAgICB9XHJcbiAgICAgIC8vIGZhbGxzIHRocm91Z2hcclxuICAgICAgY2FzZSA1OlxyXG4gICAgICAgIGV4cG9ydERhdGEgPSB7XHJcbiAgICAgICAgICB2ZXJzaW9uOiA2LFxyXG4gICAgICAgICAgYmFja3VwczogZXhwb3J0RGF0YS5iYWNrdXBzLm1hcChcclxuICAgICAgICAgICAgKHsgbWVzc2FnZXMsIHRhcmdldCwgLi4uYmFja3VwIH0pID0+ICh7XHJcbiAgICAgICAgICAgICAgLi4uYmFja3VwLFxyXG4gICAgICAgICAgICAgIG1lc3NhZ2VzOiBtZXNzYWdlcy5tYXAoZGF0YSA9PiAoe1xyXG4gICAgICAgICAgICAgICAgZGF0YSxcclxuICAgICAgICAgICAgICAgIHJlZmVyZW5jZTogdGFyZ2V0Lm1lc3NhZ2UsXHJcbiAgICAgICAgICAgICAgfSkpLFxyXG4gICAgICAgICAgICAgIHRhcmdldDoge1xyXG4gICAgICAgICAgICAgICAgdXJsOiB0YXJnZXQudXJsLFxyXG4gICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIH0pLFxyXG4gICAgICAgICAgKSxcclxuICAgICAgICB9XHJcbiAgICAgIC8vIGZhbGxzIHRocm91Z2hcclxuICAgICAgY2FzZSA2OlxyXG4gICAgICAgIGV4cG9ydERhdGEgPSB7XHJcbiAgICAgICAgICB2ZXJzaW9uOiA3LFxyXG4gICAgICAgICAgYmFja3VwczogZXhwb3J0RGF0YS5iYWNrdXBzLm1hcCgoeyB0YXJnZXQsIC4uLmJhY2t1cCB9KSA9PiAoe1xyXG4gICAgICAgICAgICAuLi5iYWNrdXAsXHJcbiAgICAgICAgICAgIHRhcmdldHM6IFt7IHVybDogdGFyZ2V0LnVybCA/PyBcIlwiIH1dLFxyXG4gICAgICAgICAgfSkpLFxyXG4gICAgICAgIH1cclxuICAgICAgLy8gZmFsbHMgdGhyb3VnaFxyXG4gICAgICBjYXNlIDc6XHJcbiAgICAgICAgZm9yIChjb25zdCBiYWNrdXAgb2YgZXhwb3J0RGF0YS5iYWNrdXBzKSB7XHJcbiAgICAgICAgICBhd2FpdCB0aGlzLnNhdmVCYWNrdXAoe1xyXG4gICAgICAgICAgICAuLi5iYWNrdXAsXHJcbiAgICAgICAgICAgIG5hbWU6IGF3YWl0IHRoaXMuZ2V0U2FmZUJhY2t1cE5hbWUoYmFja3VwLm5hbWUpLFxyXG4gICAgICAgICAgICBpZDogdW5kZWZpbmVkLFxyXG4gICAgICAgICAgfSlcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCB7IGNyZWF0ZUNvbnRleHQgfSBmcm9tIFwicmVhY3RcIlxyXG5pbXBvcnQgdHlwZSB7IEJhY2t1cE1hbmFnZXIgfSBmcm9tIFwiLi9CYWNrdXBNYW5hZ2VyXCJcclxuXHJcbmV4cG9ydCBjb25zdCBCYWNrdXBNYW5hZ2VyQ29udGV4dCA9IGNyZWF0ZUNvbnRleHQ8QmFja3VwTWFuYWdlciB8IG51bGw+KG51bGwpXHJcblxyXG5CYWNrdXBNYW5hZ2VyQ29udGV4dC5kaXNwbGF5TmFtZSA9IFwiQmFja3VwTWFuYWdlckNvbnRleHRcIlxyXG5cclxuZXhwb3J0IGNvbnN0IEJhY2t1cE1hbmFnZXJQcm92aWRlciA9IEJhY2t1cE1hbmFnZXJDb250ZXh0LlByb3ZpZGVyXHJcbiIsImltcG9ydCB7IHVzZU9ic2VydmVyIH0gZnJvbSBcIm1vYngtcmVhY3QtbGl0ZVwiXHJcbmltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiXHJcbmltcG9ydCB7IFByaW1hcnlCdXR0b24gfSBmcm9tIFwiLi4vLi4vLi4vLi4vY29tbW9uL2lucHV0L2J1dHRvbi9QcmltYXJ5QnV0dG9uXCJcclxuaW1wb3J0IHsgSW5wdXRGaWVsZCB9IGZyb20gXCIuLi8uLi8uLi8uLi9jb21tb24vaW5wdXQvdGV4dC9JbnB1dEZpZWxkXCJcclxuaW1wb3J0IHsgdXNlUmVxdWlyZWRDb250ZXh0IH0gZnJvbSBcIi4uLy4uLy4uLy4uL2NvbW1vbi9zdGF0ZS91c2VSZXF1aXJlZENvbnRleHRcIlxyXG5pbXBvcnQgeyBCYWNrdXBNYW5hZ2VyQ29udGV4dCB9IGZyb20gXCIuLi9CYWNrdXBNYW5hZ2VyQ29udGV4dFwiXHJcblxyXG5leHBvcnQgZnVuY3Rpb24gQmFja3VwQ3JlYXRpb25Db250cm9scygpIHtcclxuICBjb25zdCBiYWNrdXBNYW5hZ2VyID0gdXNlUmVxdWlyZWRDb250ZXh0KEJhY2t1cE1hbmFnZXJDb250ZXh0KVxyXG5cclxuICBjb25zdCBbYmFja3VwTmFtZSwgc2V0QmFja3VwTmFtZV0gPSB1c2VTdGF0ZShcIlwiKVxyXG5cclxuICByZXR1cm4gdXNlT2JzZXJ2ZXIoKCkgPT4gKFxyXG4gICAgPElucHV0RmllbGRcclxuICAgICAgaWQ9XCJiYWNrdXAtbmFtZVwiXHJcbiAgICAgIHZhbHVlPXtiYWNrdXBOYW1lfVxyXG4gICAgICBvbkNoYW5nZT17c2V0QmFja3VwTmFtZX1cclxuICAgICAgbGFiZWw9XCJCYWNrdXAgbmFtZVwiXHJcbiAgICA+XHJcbiAgICAgIDxQcmltYXJ5QnV0dG9uXHJcbiAgICAgICAgZGlzYWJsZWQ9e2JhY2t1cE5hbWUubGVuZ3RoID09PSAwfVxyXG4gICAgICAgIG9uQ2xpY2s9e2FzeW5jICgpID0+IHtcclxuICAgICAgICAgIGF3YWl0IGJhY2t1cE1hbmFnZXIuc2F2ZUJhY2t1cChiYWNrdXBOYW1lLnRyaW0oKSlcclxuICAgICAgICAgIHNldEJhY2t1cE5hbWUoXCJcIilcclxuICAgICAgICB9fVxyXG4gICAgICA+XHJcbiAgICAgICAge2JhY2t1cE1hbmFnZXIuYmFja3Vwcy5zb21lKGJhY2t1cCA9PiBiYWNrdXAubmFtZSA9PT0gYmFja3VwTmFtZS50cmltKCkpXHJcbiAgICAgICAgICA/IFwiT3ZlcndyaXRlXCJcclxuICAgICAgICAgIDogXCJTYXZlXCJ9XHJcbiAgICAgIDwvUHJpbWFyeUJ1dHRvbj5cclxuICAgIDwvSW5wdXRGaWVsZD5cclxuICApKVxyXG59XHJcbiIsImltcG9ydCB7IHVzZU9ic2VydmVyIH0gZnJvbSBcIm1vYngtcmVhY3QtbGl0ZVwiXHJcbmltcG9ydCB7IGVsbGlwc2lzIH0gZnJvbSBcInBvbGlzaGVkXCJcclxuaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiXHJcbmltcG9ydCBzdHlsZWQgZnJvbSBcInN0eWxlZC1jb21wb25lbnRzXCJcclxuaW1wb3J0IHsgQnV0dG9uIH0gZnJvbSBcIi4uLy4uLy4uLy4uL2NvbW1vbi9pbnB1dC9idXR0b24vQnV0dG9uXCJcclxuaW1wb3J0IHsgQWN0aW9uQnV0dG9ucyB9IGZyb20gXCIuLi8uLi8uLi8uLi9jb21tb24vbGF5b3V0L0FjdGlvbkJ1dHRvbnNcIlxyXG5pbXBvcnQgeyBNb2RhbE1hbmFnZXJDb250ZXh0IH0gZnJvbSBcIi4uLy4uLy4uLy4uL2NvbW1vbi9tb2RhbC9Nb2RhbE1hbmFnZXJDb250ZXh0XCJcclxuaW1wb3J0IHsgdXNlUmVxdWlyZWRDb250ZXh0IH0gZnJvbSBcIi4uLy4uLy4uLy4uL2NvbW1vbi9zdGF0ZS91c2VSZXF1aXJlZENvbnRleHRcIlxyXG5pbXBvcnQgeyBjb3B5IH0gZnJvbSBcIi4uLy4uLy4uLy4uL2ljb25zL2NvcHlcIlxyXG5pbXBvcnQgeyBzYXZlIH0gZnJvbSBcIi4uLy4uLy4uLy4uL2ljb25zL3NhdmVcIlxyXG5pbXBvcnQgeyB0cmFzaCB9IGZyb20gXCIuLi8uLi8uLi8uLi9pY29ucy90cmFzaFwiXHJcbmltcG9ydCB7IHVwbG9hZCB9IGZyb20gXCIuLi8uLi8uLi8uLi9pY29ucy91cGxvYWRcIlxyXG5pbXBvcnQgeyBCYWNrdXBNYW5hZ2VyQ29udGV4dCB9IGZyb20gXCIuLi9CYWNrdXBNYW5hZ2VyQ29udGV4dFwiXHJcbmltcG9ydCB0eXBlIHsgQmFja3VwRGF0YSB9IGZyb20gXCIuLi90eXBlcy9CYWNrdXBEYXRhXCJcclxuaW1wb3J0IHsgRGVsZXRpb25Db25maXJtYXRpb25Nb2RhbCB9IGZyb20gXCIuL0RlbGV0aW9uQ29uZmlybWF0aW9uTW9kYWxcIlxyXG5cclxuY29uc3QgQ29udGFpbmVyID0gc3R5bGVkLmxpYFxyXG4gIGhlaWdodDogNDhweDtcclxuXHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG5cclxuICBsaXN0LXN0eWxlOiBub25lO1xyXG5cclxuICBib3JkZXI6IDAgc29saWQgJHsoeyB0aGVtZSB9KSA9PiB0aGVtZS5iYWNrZ3JvdW5kTW9kaWZpZXIuYWNjZW50fTtcclxuXHJcbiAgJiArICYge1xyXG4gICAgYm9yZGVyLXRvcC13aWR0aDogMXB4O1xyXG4gIH1cclxuXHJcbiAgJiA+ICR7QnV0dG9ufSB7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgfVxyXG5gXHJcblxyXG5jb25zdCBCYWNrdXBOYW1lID0gc3R5bGVkLmRpdmBcclxuICAke2VsbGlwc2lzKCl9O1xyXG5cclxuICBmbGV4OiAxO1xyXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbmBcclxuXHJcbmV4cG9ydCB0eXBlIEJhY2t1cEl0ZW1Qcm9wcyA9IHtcclxuICBiYWNrdXA6IEJhY2t1cERhdGFcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIEJhY2t1cEl0ZW0ocHJvcHM6IEJhY2t1cEl0ZW1Qcm9wcykge1xyXG4gIGNvbnN0IHsgYmFja3VwIH0gPSBwcm9wc1xyXG5cclxuICBjb25zdCBtb2RhbE1hbmFnZXIgPSB1c2VSZXF1aXJlZENvbnRleHQoTW9kYWxNYW5hZ2VyQ29udGV4dClcclxuICBjb25zdCBiYWNrdXBNYW5hZ2VyID0gdXNlUmVxdWlyZWRDb250ZXh0KEJhY2t1cE1hbmFnZXJDb250ZXh0KVxyXG5cclxuICByZXR1cm4gdXNlT2JzZXJ2ZXIoKCkgPT4gKFxyXG4gICAgPENvbnRhaW5lcj5cclxuICAgICAgPEJhY2t1cE5hbWU+e2JhY2t1cC5uYW1lfTwvQmFja3VwTmFtZT5cclxuICAgICAgPEFjdGlvbkJ1dHRvbnNcclxuICAgICAgICBhY3Rpb25zPXtbXHJcbiAgICAgICAgICB7XHJcbiAgICAgICAgICAgIGljb246IHVwbG9hZCxcclxuICAgICAgICAgICAgbGFiZWw6IFwiTG9hZFwiLFxyXG4gICAgICAgICAgICBoYW5kbGVyOiBhc3luYyAoKSA9PiBiYWNrdXBNYW5hZ2VyLmxvYWRCYWNrdXAoYmFja3VwLm5hbWUpLFxyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIHtcclxuICAgICAgICAgICAgaWNvbjogc2F2ZSxcclxuICAgICAgICAgICAgbGFiZWw6IFwiRXhwb3J0XCIsXHJcbiAgICAgICAgICAgIGhhbmRsZXI6IGFzeW5jICgpID0+IGJhY2t1cE1hbmFnZXIuZXhwb3J0QmFja3VwKGJhY2t1cC5uYW1lKSxcclxuICAgICAgICAgICAgb3ZlcmZsb3c6IHRydWUsXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAge1xyXG4gICAgICAgICAgICBpY29uOiBjb3B5LFxyXG4gICAgICAgICAgICBsYWJlbDogXCJPdmVyd3JpdGVcIixcclxuICAgICAgICAgICAgaGFuZGxlcjogYXN5bmMgKCkgPT4gYmFja3VwTWFuYWdlci5zYXZlQmFja3VwKGJhY2t1cC5uYW1lKSxcclxuICAgICAgICAgICAgb3ZlcmZsb3c6IHRydWUsXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgICAge1xyXG4gICAgICAgICAgICBpY29uOiB0cmFzaCxcclxuICAgICAgICAgICAgbGFiZWw6IFwiRGVsZXRlXCIsXHJcbiAgICAgICAgICAgIGhhbmRsZXI6ICgpID0+XHJcbiAgICAgICAgICAgICAgbW9kYWxNYW5hZ2VyLnNwYXduKHtcclxuICAgICAgICAgICAgICAgIHJlbmRlcjogKCkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICA8RGVsZXRpb25Db25maXJtYXRpb25Nb2RhbFxyXG4gICAgICAgICAgICAgICAgICAgIGJhY2t1cE1hbmFnZXI9e2JhY2t1cE1hbmFnZXJ9XHJcbiAgICAgICAgICAgICAgICAgICAgYmFja3VwPXtiYWNrdXB9XHJcbiAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICApLFxyXG4gICAgICAgICAgICAgIH0pLFxyXG4gICAgICAgICAgICBvdmVyZmxvdzogdHJ1ZSxcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgXX1cclxuICAgICAgLz5cclxuICAgIDwvQ29udGFpbmVyPlxyXG4gICkpXHJcbn1cclxuIiwiaW1wb3J0IHsgdXNlT2JzZXJ2ZXIgfSBmcm9tIFwibW9ieC1yZWFjdC1saXRlXCJcclxuaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCJcclxuaW1wb3J0IHN0eWxlZCBmcm9tIFwic3R5bGVkLWNvbXBvbmVudHNcIlxyXG5pbXBvcnQgeyBJbnB1dEZpZWxkIH0gZnJvbSBcIi4uLy4uLy4uLy4uL2NvbW1vbi9pbnB1dC90ZXh0L0lucHV0RmllbGRcIlxyXG5pbXBvcnQgeyB1c2VSZXF1aXJlZENvbnRleHQgfSBmcm9tIFwiLi4vLi4vLi4vLi4vY29tbW9uL3N0YXRlL3VzZVJlcXVpcmVkQ29udGV4dFwiXHJcbmltcG9ydCB7IE1hcmtkb3duIH0gZnJvbSBcIi4uLy4uLy4uL21hcmtkb3duL01hcmtkb3duXCJcclxuaW1wb3J0IHsgQmFja3VwTWFuYWdlckNvbnRleHQgfSBmcm9tIFwiLi4vQmFja3VwTWFuYWdlckNvbnRleHRcIlxyXG5pbXBvcnQgeyBCYWNrdXBJdGVtIH0gZnJvbSBcIi4vQmFja3VwSXRlbVwiXHJcblxyXG5jb25zdCBDb250YWluZXIgPSBzdHlsZWQudWxgXHJcbiAgcGFkZGluZzogMDtcclxuICBtYXJnaW46IDA7XHJcblxyXG4gIG1heC1oZWlnaHQ6IDQyMHB4O1xyXG4gIG92ZXJmbG93LXg6IGhpZGRlbjtcclxuYFxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIEJhY2t1cExpc3QoKSB7XHJcbiAgY29uc3QgYmFja3VwTWFuYWdlciA9IHVzZVJlcXVpcmVkQ29udGV4dChCYWNrdXBNYW5hZ2VyQ29udGV4dClcclxuXHJcbiAgY29uc3QgW3NlYXJjaCwgc2V0U2VhcmNoXSA9IHVzZVN0YXRlKFwiXCIpXHJcblxyXG4gIHJldHVybiB1c2VPYnNlcnZlcigoKSA9PlxyXG4gICAgYmFja3VwTWFuYWdlci5iYWNrdXBzLmxlbmd0aCA+IDAgPyAoXHJcbiAgICAgIDw+XHJcbiAgICAgICAgPElucHV0RmllbGRcclxuICAgICAgICAgIGlkPVwiYmFja3Vwcy1zZWFyY2hcIlxyXG4gICAgICAgICAgbGFiZWw9XCJTZWFyY2ggQmFja3Vwc1wiXHJcbiAgICAgICAgICB2YWx1ZT17c2VhcmNofVxyXG4gICAgICAgICAgb25DaGFuZ2U9e3NldFNlYXJjaH1cclxuICAgICAgICAvPlxyXG4gICAgICAgIDxDb250YWluZXI+XHJcbiAgICAgICAgICB7YmFja3VwTWFuYWdlci5iYWNrdXBzXHJcbiAgICAgICAgICAgIC5maWx0ZXIoYmFja3VwID0+XHJcbiAgICAgICAgICAgICAgYmFja3VwLm5hbWVcclxuICAgICAgICAgICAgICAgIC50b0xvY2FsZUxvd2VyQ2FzZSgpXHJcbiAgICAgICAgICAgICAgICAuaW5jbHVkZXMoc2VhcmNoLnRvTG9jYWxlTG93ZXJDYXNlKCkpLFxyXG4gICAgICAgICAgICApXHJcbiAgICAgICAgICAgIC5tYXAoYmFja3VwID0+IChcclxuICAgICAgICAgICAgICA8QmFja3VwSXRlbSBrZXk9e2JhY2t1cC5pZH0gYmFja3VwPXtiYWNrdXB9IC8+XHJcbiAgICAgICAgICAgICkpfVxyXG4gICAgICAgIDwvQ29udGFpbmVyPlxyXG4gICAgICA8Lz5cclxuICAgICkgOiAoXHJcbiAgICAgIDxNYXJrZG93blxyXG4gICAgICAgIGNvbnRlbnQ9e1xyXG4gICAgICAgICAgXCJZb3UgaGF2ZW4ndCBtYWRlIGFueSBiYWNrdXBzIHlldC5cIiArXHJcbiAgICAgICAgICBcIiBFbnRlciBhIG5hbWUgYmVsb3cgYW5kIGNsaWNrIG9uIHRoZSBTYXZlIGJ1dHRvbiB0byBtYWtlIG9uZS5cIlxyXG4gICAgICAgIH1cclxuICAgICAgLz5cclxuICAgICksXHJcbiAgKVxyXG59XHJcbiIsImltcG9ydCB7IHVzZU9ic2VydmVyIH0gZnJvbSBcIm1vYngtcmVhY3QtbGl0ZVwiXHJcbmltcG9ydCBSZWFjdCwgeyB1c2VSZWYgfSBmcm9tIFwicmVhY3RcIlxyXG5pbXBvcnQgeyBQcmltYXJ5QnV0dG9uIH0gZnJvbSBcIi4uLy4uLy4uLy4uL2NvbW1vbi9pbnB1dC9idXR0b24vUHJpbWFyeUJ1dHRvblwiXHJcbmltcG9ydCB7IFNlY29uZGFyeUJ1dHRvbiB9IGZyb20gXCIuLi8uLi8uLi8uLi9jb21tb24vaW5wdXQvYnV0dG9uL1NlY29uZGFyeUJ1dHRvblwiXHJcbmltcG9ydCB7IE1vZGFsQWN0aW9uIH0gZnJvbSBcIi4uLy4uLy4uLy4uL2NvbW1vbi9tb2RhbC9sYXlvdXQvTW9kYWxBY3Rpb25cIlxyXG5pbXBvcnQgeyBNb2RhbEJvZHkgfSBmcm9tIFwiLi4vLi4vLi4vLi4vY29tbW9uL21vZGFsL2xheW91dC9Nb2RhbEJvZHlcIlxyXG5pbXBvcnQgeyBNb2RhbENvbnRhaW5lciB9IGZyb20gXCIuLi8uLi8uLi8uLi9jb21tb24vbW9kYWwvbGF5b3V0L01vZGFsQ29udGFpbmVyXCJcclxuaW1wb3J0IHsgTW9kYWxGb290ZXIgfSBmcm9tIFwiLi4vLi4vLi4vLi4vY29tbW9uL21vZGFsL2xheW91dC9Nb2RhbEZvb3RlclwiXHJcbmltcG9ydCB7IE1vZGFsSGVhZGVyIH0gZnJvbSBcIi4uLy4uLy4uLy4uL2NvbW1vbi9tb2RhbC9sYXlvdXQvTW9kYWxIZWFkZXJcIlxyXG5pbXBvcnQgeyBNb2RhbFRpdGxlIH0gZnJvbSBcIi4uLy4uLy4uLy4uL2NvbW1vbi9tb2RhbC9sYXlvdXQvTW9kYWxUaXRsZVwiXHJcbmltcG9ydCB7IE1vZGFsQ29udGV4dCB9IGZyb20gXCIuLi8uLi8uLi8uLi9jb21tb24vbW9kYWwvTW9kYWxDb250ZXh0XCJcclxuaW1wb3J0IHsgdXNlTGF6eVZhbHVlIH0gZnJvbSBcIi4uLy4uLy4uLy4uL2NvbW1vbi9zdGF0ZS91c2VMYXp5VmFsdWVcIlxyXG5pbXBvcnQgeyB1c2VSZXF1aXJlZENvbnRleHQgfSBmcm9tIFwiLi4vLi4vLi4vLi4vY29tbW9uL3N0YXRlL3VzZVJlcXVpcmVkQ29udGV4dFwiXHJcbmltcG9ydCB7IHJlbW92ZSB9IGZyb20gXCIuLi8uLi8uLi8uLi9pY29ucy9yZW1vdmVcIlxyXG5pbXBvcnQgdHlwZSB7IEVkaXRvck1hbmFnZXJMaWtlIH0gZnJvbSBcIi4uLy4uLy4uL2VkaXRvci9FZGl0b3JNYW5hZ2VyXCJcclxuaW1wb3J0IHsgRGF0YWJhc2VNYW5hZ2VyIH0gZnJvbSBcIi4uLy4uL0RhdGFiYXNlTWFuYWdlclwiXHJcbmltcG9ydCB7IERhdGFiYXNlTWFuYWdlclByb3ZpZGVyIH0gZnJvbSBcIi4uLy4uL0RhdGFiYXNlTWFuYWdlckNvbnRleHRcIlxyXG5pbXBvcnQgeyBQZXJzaXN0ZW50U3RvcmFnZVdhcm5pbmcgfSBmcm9tIFwiLi4vLi4vcGVyc2lzdC9QZXJzaXN0ZW50U3RvcmFnZVdhcm5pbmdcIlxyXG5pbXBvcnQgeyBCYWNrdXBNYW5hZ2VyIH0gZnJvbSBcIi4uL0JhY2t1cE1hbmFnZXJcIlxyXG5pbXBvcnQgeyBCYWNrdXBNYW5hZ2VyUHJvdmlkZXIgfSBmcm9tIFwiLi4vQmFja3VwTWFuYWdlckNvbnRleHRcIlxyXG5pbXBvcnQgeyBCYWNrdXBDcmVhdGlvbkNvbnRyb2xzIH0gZnJvbSBcIi4vQmFja3VwQ3JlYXRpb25Db250cm9sc1wiXHJcbmltcG9ydCB7IEJhY2t1cExpc3QgfSBmcm9tIFwiLi9CYWNrdXBMaXN0XCJcclxuXHJcbmV4cG9ydCB0eXBlIEJhY2t1cHNNb2RhbFByb3BzID0ge1xyXG4gIGVkaXRvck1hbmFnZXI6IEVkaXRvck1hbmFnZXJMaWtlXHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBCYWNrdXBzTW9kYWwocHJvcHM6IEJhY2t1cHNNb2RhbFByb3BzKSB7XHJcbiAgY29uc3QgeyBlZGl0b3JNYW5hZ2VyIH0gPSBwcm9wc1xyXG5cclxuICBjb25zdCBkYXRhYmFzZU1hbmFnZXIgPSB1c2VMYXp5VmFsdWUoKCkgPT4gbmV3IERhdGFiYXNlTWFuYWdlcigpKVxyXG4gIGNvbnN0IGJhY2t1cE1hbmFnZXIgPSB1c2VMYXp5VmFsdWUoXHJcbiAgICAoKSA9PiBuZXcgQmFja3VwTWFuYWdlcihkYXRhYmFzZU1hbmFnZXIsIGVkaXRvck1hbmFnZXIpLFxyXG4gIClcclxuXHJcbiAgY29uc3QgbW9kYWwgPSB1c2VSZXF1aXJlZENvbnRleHQoTW9kYWxDb250ZXh0KVxyXG5cclxuICBjb25zdCBmaWxlSW5wdXRSZWYgPSB1c2VSZWY8SFRNTElucHV0RWxlbWVudD4obnVsbClcclxuXHJcbiAgcmV0dXJuIHVzZU9ic2VydmVyKCgpID0+IChcclxuICAgIDxEYXRhYmFzZU1hbmFnZXJQcm92aWRlciB2YWx1ZT17ZGF0YWJhc2VNYW5hZ2VyfT5cclxuICAgICAgPEJhY2t1cE1hbmFnZXJQcm92aWRlciB2YWx1ZT17YmFja3VwTWFuYWdlcn0+XHJcbiAgICAgICAgPE1vZGFsQ29udGFpbmVyPlxyXG4gICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgIHJlZj17ZmlsZUlucHV0UmVmfVxyXG4gICAgICAgICAgICB0eXBlPVwiZmlsZVwiXHJcbiAgICAgICAgICAgIHN0eWxlPXt7IGRpc3BsYXk6IFwibm9uZVwiIH19XHJcbiAgICAgICAgICAgIG9uQ2hhbmdlPXthc3luYyBldmVudCA9PiB7XHJcbiAgICAgICAgICAgICAgY29uc3QgZmlsZSA9IGV2ZW50LnRhcmdldC5maWxlcz8uaXRlbSgwKT8uc2xpY2UoKVxyXG4gICAgICAgICAgICAgIGV2ZW50LnRhcmdldC5maWxlcyA9IG51bGxcclxuICAgICAgICAgICAgICBpZiAoZmlsZSkge1xyXG4gICAgICAgICAgICAgICAgYXdhaXQgYmFja3VwTWFuYWdlci5pbXBvcnRCYWNrdXBzKGZpbGUpXHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9fVxyXG4gICAgICAgICAgLz5cclxuICAgICAgICAgIDxNb2RhbEhlYWRlcj5cclxuICAgICAgICAgICAgPE1vZGFsVGl0bGU+QmFja3VwczwvTW9kYWxUaXRsZT5cclxuICAgICAgICAgICAgPE1vZGFsQWN0aW9uXHJcbiAgICAgICAgICAgICAgaWNvbj17cmVtb3ZlfVxyXG4gICAgICAgICAgICAgIGxhYmVsPVwiQ2xvc2VcIlxyXG4gICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IG1vZGFsLmRpc21pc3MoKX1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgIDwvTW9kYWxIZWFkZXI+XHJcbiAgICAgICAgICB7ZGF0YWJhc2VNYW5hZ2VyLnNob3VsZFNob3dQZXJzaXN0ZW5jZVdhcm5pbmcgJiYgKFxyXG4gICAgICAgICAgICA8TW9kYWxCb2R5PlxyXG4gICAgICAgICAgICAgIDxQZXJzaXN0ZW50U3RvcmFnZVdhcm5pbmcgLz5cclxuICAgICAgICAgICAgPC9Nb2RhbEJvZHk+XHJcbiAgICAgICAgICApfVxyXG4gICAgICAgICAgPE1vZGFsQm9keT5cclxuICAgICAgICAgICAgPEJhY2t1cExpc3QgLz5cclxuICAgICAgICAgIDwvTW9kYWxCb2R5PlxyXG4gICAgICAgICAgPE1vZGFsQm9keT5cclxuICAgICAgICAgICAgPEJhY2t1cENyZWF0aW9uQ29udHJvbHMgLz5cclxuICAgICAgICAgIDwvTW9kYWxCb2R5PlxyXG4gICAgICAgICAgPE1vZGFsRm9vdGVyPlxyXG4gICAgICAgICAgICA8U2Vjb25kYXJ5QnV0dG9uIG9uQ2xpY2s9e2FzeW5jICgpID0+IGJhY2t1cE1hbmFnZXIuZXhwb3J0QWxsKCl9PlxyXG4gICAgICAgICAgICAgIEV4cG9ydCBBbGxcclxuICAgICAgICAgICAgPC9TZWNvbmRhcnlCdXR0b24+XHJcbiAgICAgICAgICAgIDxTZWNvbmRhcnlCdXR0b24gb25DbGljaz17KCkgPT4gZmlsZUlucHV0UmVmLmN1cnJlbnQ/LmNsaWNrKCl9PlxyXG4gICAgICAgICAgICAgIEltcG9ydFxyXG4gICAgICAgICAgICA8L1NlY29uZGFyeUJ1dHRvbj5cclxuICAgICAgICAgICAgPFByaW1hcnlCdXR0b24gb25DbGljaz17KCkgPT4gbW9kYWwuZGlzbWlzcygpfT5DbG9zZTwvUHJpbWFyeUJ1dHRvbj5cclxuICAgICAgICAgIDwvTW9kYWxGb290ZXI+XHJcbiAgICAgICAgPC9Nb2RhbENvbnRhaW5lcj5cclxuICAgICAgPC9CYWNrdXBNYW5hZ2VyUHJvdmlkZXI+XHJcbiAgICA8L0RhdGFiYXNlTWFuYWdlclByb3ZpZGVyPlxyXG4gICkpXHJcbn1cclxuIiwiaW1wb3J0IHsgdXNlT2JzZXJ2ZXIgfSBmcm9tIFwibW9ieC1yZWFjdC1saXRlXCJcclxuaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiXHJcbmltcG9ydCB7IFByaW1hcnlCdXR0b24gfSBmcm9tIFwiLi4vLi4vLi4vLi4vY29tbW9uL2lucHV0L2J1dHRvbi9QcmltYXJ5QnV0dG9uXCJcclxuaW1wb3J0IHsgU2Vjb25kYXJ5QnV0dG9uIH0gZnJvbSBcIi4uLy4uLy4uLy4uL2NvbW1vbi9pbnB1dC9idXR0b24vU2Vjb25kYXJ5QnV0dG9uXCJcclxuaW1wb3J0IHsgTW9kYWxBY3Rpb24gfSBmcm9tIFwiLi4vLi4vLi4vLi4vY29tbW9uL21vZGFsL2xheW91dC9Nb2RhbEFjdGlvblwiXHJcbmltcG9ydCB7IE1vZGFsQm9keSB9IGZyb20gXCIuLi8uLi8uLi8uLi9jb21tb24vbW9kYWwvbGF5b3V0L01vZGFsQm9keVwiXHJcbmltcG9ydCB7IE1vZGFsQ29udGFpbmVyIH0gZnJvbSBcIi4uLy4uLy4uLy4uL2NvbW1vbi9tb2RhbC9sYXlvdXQvTW9kYWxDb250YWluZXJcIlxyXG5pbXBvcnQgeyBNb2RhbEZvb3RlciB9IGZyb20gXCIuLi8uLi8uLi8uLi9jb21tb24vbW9kYWwvbGF5b3V0L01vZGFsRm9vdGVyXCJcclxuaW1wb3J0IHsgTW9kYWxIZWFkZXIgfSBmcm9tIFwiLi4vLi4vLi4vLi4vY29tbW9uL21vZGFsL2xheW91dC9Nb2RhbEhlYWRlclwiXHJcbmltcG9ydCB7IE1vZGFsVGl0bGUgfSBmcm9tIFwiLi4vLi4vLi4vLi4vY29tbW9uL21vZGFsL2xheW91dC9Nb2RhbFRpdGxlXCJcclxuaW1wb3J0IHsgTW9kYWxDb250ZXh0IH0gZnJvbSBcIi4uLy4uLy4uLy4uL2NvbW1vbi9tb2RhbC9Nb2RhbENvbnRleHRcIlxyXG5pbXBvcnQgeyB1c2VSZXF1aXJlZENvbnRleHQgfSBmcm9tIFwiLi4vLi4vLi4vLi4vY29tbW9uL3N0YXRlL3VzZVJlcXVpcmVkQ29udGV4dFwiXHJcbmltcG9ydCB7IHJlbW92ZSB9IGZyb20gXCIuLi8uLi8uLi8uLi9pY29ucy9yZW1vdmVcIlxyXG5pbXBvcnQgeyBNYXJrZG93biB9IGZyb20gXCIuLi8uLi8uLi9tYXJrZG93bi9NYXJrZG93blwiXHJcbmltcG9ydCB0eXBlIHsgQmFja3VwTWFuYWdlciB9IGZyb20gXCIuLi9CYWNrdXBNYW5hZ2VyXCJcclxuaW1wb3J0IHR5cGUgeyBCYWNrdXBEYXRhIH0gZnJvbSBcIi4uL3R5cGVzL0JhY2t1cERhdGFcIlxyXG5cclxuZXhwb3J0IHR5cGUgRGVsZXRpb25Db25maXJtYXRpb25Nb2RhbFByb3BzID0ge1xyXG4gIGJhY2t1cE1hbmFnZXI6IEJhY2t1cE1hbmFnZXJcclxuICBiYWNrdXA6IEJhY2t1cERhdGFcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIERlbGV0aW9uQ29uZmlybWF0aW9uTW9kYWwoXHJcbiAgcHJvcHM6IERlbGV0aW9uQ29uZmlybWF0aW9uTW9kYWxQcm9wcyxcclxuKSB7XHJcbiAgY29uc3QgeyBiYWNrdXBNYW5hZ2VyLCBiYWNrdXAgfSA9IHByb3BzXHJcblxyXG4gIGNvbnN0IG1vZGFsID0gdXNlUmVxdWlyZWRDb250ZXh0KE1vZGFsQ29udGV4dClcclxuXHJcbiAgcmV0dXJuIHVzZU9ic2VydmVyKCgpID0+IChcclxuICAgIDxNb2RhbENvbnRhaW5lcj5cclxuICAgICAgPE1vZGFsSGVhZGVyPlxyXG4gICAgICAgIDxNb2RhbFRpdGxlPkRlbGV0ZSBCYWNrdXA8L01vZGFsVGl0bGU+XHJcbiAgICAgICAgPE1vZGFsQWN0aW9uXHJcbiAgICAgICAgICBpY29uPXtyZW1vdmV9XHJcbiAgICAgICAgICBsYWJlbD1cIkNsb3NlXCJcclxuICAgICAgICAgIG9uQ2xpY2s9eygpID0+IG1vZGFsLmRpc21pc3MoKX1cclxuICAgICAgICAvPlxyXG4gICAgICA8L01vZGFsSGVhZGVyPlxyXG4gICAgICA8TW9kYWxCb2R5PlxyXG4gICAgICAgIDxNYXJrZG93blxyXG4gICAgICAgICAgY29udGVudD17XHJcbiAgICAgICAgICAgIGBBcmUgeW91IHN1cmUgeW91IHdhbnQgdG8gZGVsZXRlIFwiJHtiYWNrdXAubmFtZX1cIj8gVGhpcyBhY3Rpb25gICtcclxuICAgICAgICAgICAgXCIgY2Fubm90IGJlIHVuZG9uZS5cIlxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIC8+XHJcbiAgICAgIDwvTW9kYWxCb2R5PlxyXG4gICAgICA8TW9kYWxGb290ZXI+XHJcbiAgICAgICAgPFNlY29uZGFyeUJ1dHRvbiBvbkNsaWNrPXsoKSA9PiBtb2RhbC5kaXNtaXNzKCl9PlxyXG4gICAgICAgICAgQ2FuY2VsXHJcbiAgICAgICAgPC9TZWNvbmRhcnlCdXR0b24+XHJcbiAgICAgICAgPFByaW1hcnlCdXR0b25cclxuICAgICAgICAgIG9uQ2xpY2s9e2FzeW5jICgpID0+IHtcclxuICAgICAgICAgICAgYXdhaXQgYmFja3VwTWFuYWdlci5kZWxldGVCYWNrdXAoYmFja3VwLm5hbWUpXHJcbiAgICAgICAgICAgIG1vZGFsLmRpc21pc3MoKVxyXG4gICAgICAgICAgfX1cclxuICAgICAgICA+XHJcbiAgICAgICAgICBEZWxldGVcclxuICAgICAgICA8L1ByaW1hcnlCdXR0b24+XHJcbiAgICAgIDwvTW9kYWxGb290ZXI+XHJcbiAgICA8L01vZGFsQ29udGFpbmVyPlxyXG4gICkpXHJcbn1cclxuIiwiaW1wb3J0IHsgSURCUERhdGFiYXNlLCBJREJQVHJhbnNhY3Rpb24sIG9wZW5EQiB9IGZyb20gXCJpZGJcIlxyXG5pbXBvcnQgdHlwZSB7IFNjaGVtYSB9IGZyb20gXCIuLi9TY2hlbWFcIlxyXG5pbXBvcnQgeyBzaG93VXBncmFkZUJsb2NrZWRNZXNzYWdlIH0gZnJvbSBcIi4vc2hvd1VwZ3JhZGVCbG9ja2VkTWVzc2FnZVwiXHJcbmltcG9ydCB7IHVwZ3JhZGVEYXRhYmFzZSB9IGZyb20gXCIuL3VwZ3JhZGVEYXRhYmFzZVwiXHJcblxyXG5leHBvcnQgY29uc3Qgb3BlbkRhdGFiYXNlID0gYXN5bmMgKCkgPT4ge1xyXG4gIHJldHVybiBvcGVuREI8U2NoZW1hPihcImRpc2NvaG9va1wiLCAxMCwge1xyXG4gICAgdXBncmFkZTogKGRhdGFiYXNlLCBvbGRWZXJzaW9uLCBuZXdWZXJzaW9uLCB0cmFuc2FjdGlvbikgPT4ge1xyXG4gICAgICAvLyBDYXN0aW5nIHRvIHVua25vd24gc2NoZW1hLCBiZWNhdXNlIHVwZ3JhZGVzIHNob3VsZG4ndCBhc3N1bWUgaG93IHRoZVxyXG4gICAgICAvLyBzY2hlbWEgbG9va3MgYXQgdGhhdCB0aW1lXHJcbiAgICAgIHVwZ3JhZGVEYXRhYmFzZShcclxuICAgICAgICBkYXRhYmFzZSBhcyBJREJQRGF0YWJhc2UsXHJcbiAgICAgICAgdHJhbnNhY3Rpb24gYXMgSURCUFRyYW5zYWN0aW9uPHVua25vd24sIHN0cmluZ1tdLCBcInZlcnNpb25jaGFuZ2VcIj4sXHJcbiAgICAgICAgb2xkVmVyc2lvbixcclxuICAgICAgKVxyXG4gICAgICAgIC50aGVuKCgpID0+IHtcclxuICAgICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwiZGF0YWJhc2UtdXBncmFkZWQtdmVyc2lvblwiLCBcIjEwXCIpXHJcbiAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2RiLXVwZ3JhZGUtYmxvY2tlZFwiKT8ucmVtb3ZlKClcclxuICAgICAgICB9KVxyXG4gICAgICAgIC5jYXRjaChlcnJvciA9PiB7XHJcbiAgICAgICAgICBjb25zb2xlLmVycm9yKFwiRXJyb3Igb24gZGF0YWJhc2UgdXBncmFkZTpcIiwgZXJyb3IpXHJcbiAgICAgICAgfSlcclxuICAgIH0sXHJcbiAgICBibG9ja2VkOiBzaG93VXBncmFkZUJsb2NrZWRNZXNzYWdlLFxyXG4gIH0pXHJcbn1cclxuIiwiZXhwb3J0IGNvbnN0IHNob3dVcGdyYWRlQmxvY2tlZE1lc3NhZ2UgPSAoKSA9PiB7XHJcbiAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKVxyXG4gIGNvbnRhaW5lci5pZCA9IFwiZGItdXBncmFkZS1ibG9ja2VkXCJcclxuICBjb250YWluZXIuc3R5bGUucG9zaXRpb24gPSBcImFic29sdXRlXCJcclxuICBjb250YWluZXIuc3R5bGUudG9wID0gXCIwXCJcclxuICBjb250YWluZXIuc3R5bGUucmlnaHQgPSBcIjBcIlxyXG4gIGNvbnRhaW5lci5zdHlsZS5ib3R0b20gPSBcIjBcIlxyXG4gIGNvbnRhaW5lci5zdHlsZS5sZWZ0ID0gXCIwXCJcclxuICBjb250YWluZXIuc3R5bGUuYmFja2dyb3VuZCA9IFwicmdiYSgwLCAwLCAwLCAwLjg1KVwiXHJcbiAgY29udGFpbmVyLnN0eWxlLnBhZGRpbmcgPSBcIjE2cHhcIlxyXG5cclxuICBjb25zdCBoZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDFcIilcclxuICBoZWFkZXIuc3R5bGUuY29sb3IgPSBcIiNmZmZmZmZcIlxyXG4gIGhlYWRlci5hcHBlbmQoXCJEaXNjb2hvb2sncyBsb2NhbCBkYXRhYmFzZSBuZWVkcyBhbiB1cGdyYWRlXCIpXHJcblxyXG4gIGNvbnN0IGJsb2NrZWRNZXNzYWdlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIilcclxuICBibG9ja2VkTWVzc2FnZS5hcHBlbmQoXHJcbiAgICBcIkhvd2V2ZXIsIHRoZSB1cGdyYWRlIGNhbid0IHByb2NlZWQgYmVjYXVzZSB0aGVyZSBhcmUgb2xkZXIgc2Vzc2lvbnMgb2YgRGlzY29ob29rIG9wZW4uXCIsXHJcbiAgKVxyXG5cclxuICBjb25zdCBjbG9zZVRhYnNNZXNzYWdlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIilcclxuICBjbG9zZVRhYnNNZXNzYWdlLmFwcGVuZChcIlBsZWFzZSBjbG9zZSBhbGwgRGlzY29ob29rIHRhYnMgYmVmb3JlIGNvbnRpbnVpbmcuXCIpXHJcblxyXG4gIGNvbnRhaW5lci5hcHBlbmQoaGVhZGVyLCBibG9ja2VkTWVzc2FnZSwgY2xvc2VUYWJzTWVzc2FnZSlcclxuICBkb2N1bWVudC5ib2R5LmFwcGVuZChjb250YWluZXIpXHJcbn1cclxuIiwiLyogZXNsaW50LWRpc2FibGUgbm8tYXdhaXQtaW4tbG9vcCAqL1xyXG5cclxuaW1wb3J0IHR5cGUgeyBJREJQRGF0YWJhc2UsIElEQlBUcmFuc2FjdGlvbiB9IGZyb20gXCJpZGJcIlxyXG5pbXBvcnQgeyB0b1NuYWtlQ2FzZSB9IGZyb20gXCIuLi8uLi8uLi9jb21tb24vb2JqZWN0L3RvU25ha2VDYXNlXCJcclxuXHJcbmV4cG9ydCBjb25zdCB1cGdyYWRlRGF0YWJhc2UgPSBhc3luYyAoXHJcbiAgZGF0YWJhc2U6IElEQlBEYXRhYmFzZSxcclxuICB0cmFuc2FjdGlvbjogSURCUFRyYW5zYWN0aW9uPHVua25vd24sIHN0cmluZ1tdLCBcInZlcnNpb25jaGFuZ2VcIj4sXHJcbiAgb2xkVmVyc2lvbjogbnVtYmVyLFxyXG4pID0+IHtcclxuICBpZiAob2xkVmVyc2lvbiA8IDIgJiYgb2xkVmVyc2lvbiA+PSAxKSB7XHJcbiAgICBsZXQgY3Vyc29yID0gYXdhaXQgdHJhbnNhY3Rpb24ub2JqZWN0U3RvcmUoXCJiYWNrdXBzXCIpLm9wZW5DdXJzb3IoKVxyXG5cclxuICAgIHdoaWxlIChjdXJzb3IpIHtcclxuICAgICAgYXdhaXQgY3Vyc29yLnVwZGF0ZSh7XHJcbiAgICAgICAgbmFtZTogY3Vyc29yLmtleSxcclxuICAgICAgICBtZXNzYWdlOiBjdXJzb3IudmFsdWUsXHJcbiAgICAgIH0pXHJcblxyXG4gICAgICBjdXJzb3IgPSBhd2FpdCBjdXJzb3IuY29udGludWUoKVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgaWYgKG9sZFZlcnNpb24gPCAzKSB7XHJcbiAgICBkYXRhYmFzZS5jcmVhdGVPYmplY3RTdG9yZShcImJhY2t1cFwiLCB7XHJcbiAgICAgIGtleVBhdGg6IFwiaWRcIixcclxuICAgICAgYXV0b0luY3JlbWVudDogdHJ1ZSxcclxuICAgIH0pXHJcblxyXG4gICAgY29uc3QgYmFja3VwU3RvcmUgPSB0cmFuc2FjdGlvbi5vYmplY3RTdG9yZShcImJhY2t1cFwiKVxyXG4gICAgYmFja3VwU3RvcmUuY3JlYXRlSW5kZXgoXCJuYW1lXCIsIFwibmFtZVwiLCB7XHJcbiAgICAgIHVuaXF1ZTogdHJ1ZSxcclxuICAgIH0pXHJcbiAgfVxyXG5cclxuICBpZiAob2xkVmVyc2lvbiA8IDQgJiYgb2xkVmVyc2lvbiA+PSAxKSB7XHJcbiAgICBjb25zdCBiYWNrdXBTdG9yZSA9IHRyYW5zYWN0aW9uLm9iamVjdFN0b3JlKFwiYmFja3VwXCIpXHJcblxyXG4gICAgY29uc3QgZXhpc3RpbmdCYWNrdXBzID0gbmV3IFNldDxJREJWYWxpZEtleT4oKVxyXG4gICAgbGV0IG5hbWVDdXJzb3IgPSBhd2FpdCBiYWNrdXBTdG9yZS5pbmRleChcIm5hbWVcIikub3BlbktleUN1cnNvcigpXHJcblxyXG4gICAgd2hpbGUgKG5hbWVDdXJzb3IpIHtcclxuICAgICAgZXhpc3RpbmdCYWNrdXBzLmFkZChuYW1lQ3Vyc29yLmtleSlcclxuICAgICAgbmFtZUN1cnNvciA9IGF3YWl0IG5hbWVDdXJzb3IuY29udGludWUoKVxyXG4gICAgfVxyXG5cclxuICAgIGxldCBjdXJzb3IgPSBhd2FpdCB0cmFuc2FjdGlvbi5vYmplY3RTdG9yZShcImJhY2t1cHNcIikub3BlbkN1cnNvcigpXHJcblxyXG4gICAgd2hpbGUgKGN1cnNvcikge1xyXG4gICAgICBpZiAoIWV4aXN0aW5nQmFja3Vwcy5oYXMoY3Vyc29yLmtleSkpIHtcclxuICAgICAgICBhd2FpdCBiYWNrdXBTdG9yZS5wdXQoe1xyXG4gICAgICAgICAgLi4uY3Vyc29yLnZhbHVlLFxyXG4gICAgICAgICAgbmFtZTogY3Vyc29yLmtleSxcclxuICAgICAgICAgIG1lc3NhZ2U6IHRvU25ha2VDYXNlKGN1cnNvci52YWx1ZS5tZXNzYWdlKSxcclxuICAgICAgICB9KVxyXG4gICAgICB9XHJcblxyXG4gICAgICBjdXJzb3IgPSBhd2FpdCBjdXJzb3IuY29udGludWUoKVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgaWYgKG9sZFZlcnNpb24gPCA1ICYmIG9sZFZlcnNpb24gPj0gMSkge1xyXG4gICAgY29uc3QgYmFja3VwU3RvcmUgPSB0cmFuc2FjdGlvbi5vYmplY3RTdG9yZShcImJhY2t1cFwiKVxyXG5cclxuICAgIGxldCBjdXJzb3IgPSBhd2FpdCBiYWNrdXBTdG9yZS5vcGVuQ3Vyc29yKClcclxuXHJcbiAgICB3aGlsZSAoY3Vyc29yKSB7XHJcbiAgICAgIGNvbnN0IHsgbWVzc2FnZSwgLi4ucmVzdCB9ID0gY3Vyc29yLnZhbHVlXHJcblxyXG4gICAgICBhd2FpdCBiYWNrdXBTdG9yZS5wdXQoe1xyXG4gICAgICAgIC4uLnJlc3QsXHJcbiAgICAgICAgbWVzc2FnZXM6IFttZXNzYWdlXSxcclxuICAgICAgfSlcclxuXHJcbiAgICAgIGN1cnNvciA9IGF3YWl0IGN1cnNvci5jb250aW51ZSgpXHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBpZiAob2xkVmVyc2lvbiA8IDYgJiYgb2xkVmVyc2lvbiA+PSAxKSB7XHJcbiAgICBjb25zdCBiYWNrdXBTdG9yZSA9IHRyYW5zYWN0aW9uLm9iamVjdFN0b3JlKFwiYmFja3VwXCIpXHJcblxyXG4gICAgbGV0IGN1cnNvciA9IGF3YWl0IGJhY2t1cFN0b3JlLm9wZW5DdXJzb3IoKVxyXG5cclxuICAgIHdoaWxlIChjdXJzb3IpIHtcclxuICAgICAgY29uc3QgeyB3ZWJob29rVXJsLCAuLi5yZXN0IH0gPSBjdXJzb3IudmFsdWVcclxuXHJcbiAgICAgIGF3YWl0IGJhY2t1cFN0b3JlLnB1dCh7XHJcbiAgICAgICAgLi4ucmVzdCxcclxuICAgICAgICB0YXJnZXQ6IHtcclxuICAgICAgICAgIHVybDogd2ViaG9va1VybCxcclxuICAgICAgICB9LFxyXG4gICAgICB9KVxyXG5cclxuICAgICAgY3Vyc29yID0gYXdhaXQgY3Vyc29yLmNvbnRpbnVlKClcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGlmIChvbGRWZXJzaW9uIDwgOSAmJiBvbGRWZXJzaW9uID49IDEpIHtcclxuICAgIGNvbnN0IGJhY2t1cFN0b3JlID0gdHJhbnNhY3Rpb24ub2JqZWN0U3RvcmUoXCJiYWNrdXBcIilcclxuXHJcbiAgICBsZXQgY3Vyc29yID0gYXdhaXQgYmFja3VwU3RvcmUub3BlbkN1cnNvcigpXHJcblxyXG4gICAgd2hpbGUgKGN1cnNvcikge1xyXG4gICAgICBjb25zdCB7IGlkLCBuYW1lLCBtZXNzYWdlcywgdGFyZ2V0IH0gPSBjdXJzb3IudmFsdWVcclxuXHJcbiAgICAgIGlmIChuYW1lKSB7XHJcbiAgICAgICAgYXdhaXQgYmFja3VwU3RvcmUucHV0KHtcclxuICAgICAgICAgIGlkLFxyXG4gICAgICAgICAgbmFtZSxcclxuICAgICAgICAgIG1lc3NhZ2VzOiBtZXNzYWdlcy5tYXAoKGRhdGE6IFJlY29yZDxzdHJpbmcsIHVua25vd24+KSA9PiAoe1xyXG4gICAgICAgICAgICBkYXRhOiBcImRhdGFcIiBpbiBkYXRhID8gZGF0YS5kYXRhIDogZGF0YSxcclxuICAgICAgICAgICAgcmVmZXJlbmNlOiBcInJlZmVyZW5jZVwiIGluIGRhdGEgPyBkYXRhLnJlZmVyZW5jZSA6IHRhcmdldC5tZXNzYWdlLFxyXG4gICAgICAgICAgfSkpLFxyXG4gICAgICAgICAgdGFyZ2V0OiB7XHJcbiAgICAgICAgICAgIHVybDogdGFyZ2V0LnVybCxcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgfSlcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBhd2FpdCBiYWNrdXBTdG9yZS5kZWxldGUoaWQpXHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGN1cnNvciA9IGF3YWl0IGN1cnNvci5jb250aW51ZSgpXHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBpZiAob2xkVmVyc2lvbiA8IDEwICYmIG9sZFZlcnNpb24gPj0gMSkge1xyXG4gICAgY29uc3QgYmFja3VwU3RvcmUgPSB0cmFuc2FjdGlvbi5vYmplY3RTdG9yZShcImJhY2t1cFwiKVxyXG5cclxuICAgIGxldCBjdXJzb3IgPSBhd2FpdCBiYWNrdXBTdG9yZS5vcGVuQ3Vyc29yKClcclxuXHJcbiAgICB3aGlsZSAoY3Vyc29yKSB7XHJcbiAgICAgIGNvbnN0IHsgdGFyZ2V0LCAuLi5iYWNrdXAgfSA9IGN1cnNvci52YWx1ZVxyXG5cclxuICAgICAgYXdhaXQgYmFja3VwU3RvcmUucHV0KHtcclxuICAgICAgICAuLi5iYWNrdXAsXHJcbiAgICAgICAgdGFyZ2V0czogW3sgdXJsOiB0YXJnZXQudXJsID8/IFwiXCIgfV0sXHJcbiAgICAgIH0pXHJcblxyXG4gICAgICBjdXJzb3IgPSBhd2FpdCBjdXJzb3IuY29udGludWUoKVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgeyB1c2VPYnNlcnZlciB9IGZyb20gXCJtb2J4LXJlYWN0LWxpdGVcIlxyXG5pbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCJcclxuaW1wb3J0IHN0eWxlZCBmcm9tIFwic3R5bGVkLWNvbXBvbmVudHNcIlxyXG5pbXBvcnQgeyBQcmltYXJ5QnV0dG9uIH0gZnJvbSBcIi4uLy4uLy4uL2NvbW1vbi9pbnB1dC9idXR0b24vUHJpbWFyeUJ1dHRvblwiXHJcbmltcG9ydCB7IFNlY29uZGFyeUJ1dHRvbiB9IGZyb20gXCIuLi8uLi8uLi9jb21tb24vaW5wdXQvYnV0dG9uL1NlY29uZGFyeUJ1dHRvblwiXHJcbmltcG9ydCB7IEJ1dHRvblJvdyB9IGZyb20gXCIuLi8uLi8uLi9jb21tb24vbGF5b3V0L0J1dHRvblJvd1wiXHJcbmltcG9ydCB7IE1vZGFsTWFuYWdlckNvbnRleHQgfSBmcm9tIFwiLi4vLi4vLi4vY29tbW9uL21vZGFsL01vZGFsTWFuYWdlckNvbnRleHRcIlxyXG5pbXBvcnQgeyB1c2VSZXF1aXJlZENvbnRleHQgfSBmcm9tIFwiLi4vLi4vLi4vY29tbW9uL3N0YXRlL3VzZVJlcXVpcmVkQ29udGV4dFwiXHJcbmltcG9ydCB7IE1hcmtkb3duIH0gZnJvbSBcIi4uLy4uL21hcmtkb3duL01hcmtkb3duXCJcclxuaW1wb3J0IHsgRGF0YWJhc2VNYW5hZ2VyQ29udGV4dCB9IGZyb20gXCIuLi9EYXRhYmFzZU1hbmFnZXJDb250ZXh0XCJcclxuaW1wb3J0IHsgUHVzaE5vdGlmaWNhdGlvbk1vZGFsIH0gZnJvbSBcIi4vUHVzaE5vdGlmaWNhdGlvbk1vZGFsXCJcclxuXHJcbmNvbnN0IENvbnRhaW5lciA9IHN0eWxlZC5kaXZgXHJcbiAgbWFyZ2luLXRvcDogMTZweDtcclxuICBwYWRkaW5nOiAxNnB4O1xyXG5cclxuICBiYWNrZ3JvdW5kOiAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLmJhY2tncm91bmQuc2Vjb25kYXJ5fTtcclxuICBib3JkZXItcmFkaXVzOiAzcHg7XHJcbmBcclxuXHJcbmNvbnN0IEhlYWRlciA9IHN0eWxlZC5oNWBcclxuICBtYXJnaW46IDAgMCA4cHg7XHJcblxyXG4gIGNvbG9yOiAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLmhlYWRlci5wcmltYXJ5fTtcclxuICBmb250LXNpemU6IDFlbTtcclxuICBmb250LXdlaWdodDogNTAwO1xyXG4gIGxpbmUtaGVpZ2h0OiAxLjM3NTtcclxuYFxyXG5cclxuY29uc3QgQnV0dG9ucyA9IHN0eWxlZChCdXR0b25Sb3cpYFxyXG4gIG1hcmdpbi10b3A6IDE2cHg7XHJcbmBcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBQZXJzaXN0ZW50U3RvcmFnZVdhcm5pbmcoKSB7XHJcbiAgY29uc3QgbW9kYWxNYW5hZ2VyID0gdXNlUmVxdWlyZWRDb250ZXh0KE1vZGFsTWFuYWdlckNvbnRleHQpXHJcbiAgY29uc3QgZGF0YWJhc2VNYW5hZ2VyID0gdXNlUmVxdWlyZWRDb250ZXh0KERhdGFiYXNlTWFuYWdlckNvbnRleHQpXHJcblxyXG4gIHJldHVybiB1c2VPYnNlcnZlcigoKSA9PiAoXHJcbiAgICA8Q29udGFpbmVyPlxyXG4gICAgICA8SGVhZGVyPldhcm5pbmc8L0hlYWRlcj5cclxuICAgICAgPE1hcmtkb3duXHJcbiAgICAgICAgY29udGVudD17XHJcbiAgICAgICAgICBcIllvdXIgYnJvd3NlciBkaWQgbm90IGdyYW50IHBlcm1pc3Npb24gdG8gdXNlIHBlcnNpc3RlbnQgc3RvcmFnZVwiICtcclxuICAgICAgICAgIFwiIGZvciB0aGlzIHNpdGUuIERhdGEgc3RvcmVkIG1pZ2h0IGJlIGRlbGV0ZWQgYnkgdGhlIGJyb3dzZXIgd2hlblwiICtcclxuICAgICAgICAgIFwiIHRoaXMgcGVybWlzc2lvbiBpcyBub3QgZ3JhbnRlZC5cIlxyXG4gICAgICAgIH1cclxuICAgICAgLz5cclxuICAgICAgPEJ1dHRvbnM+XHJcbiAgICAgICAgPFByaW1hcnlCdXR0b25cclxuICAgICAgICAgIG9uQ2xpY2s9e2FzeW5jICgpID0+IHtcclxuICAgICAgICAgICAgaWYgKFwiY2hyb21lXCIgaW4gd2luZG93KSB7XHJcbiAgICAgICAgICAgICAgbW9kYWxNYW5hZ2VyLnNwYXduKHtcclxuICAgICAgICAgICAgICAgIHJlbmRlcjogKCkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICA8UHVzaE5vdGlmaWNhdGlvbk1vZGFsIGRhdGFiYXNlTWFuYWdlcj17ZGF0YWJhc2VNYW5hZ2VyfSAvPlxyXG4gICAgICAgICAgICAgICAgKSxcclxuICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgIGF3YWl0IGRhdGFiYXNlTWFuYWdlci5yZXF1ZXN0UGVyc2lzdGVuY2UoKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9fVxyXG4gICAgICAgID5cclxuICAgICAgICAgIFJlcXVlc3QgcGVybWlzc2lvblxyXG4gICAgICAgIDwvUHJpbWFyeUJ1dHRvbj5cclxuICAgICAgICA8U2Vjb25kYXJ5QnV0dG9uXHJcbiAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XHJcbiAgICAgICAgICAgIGRhdGFiYXNlTWFuYWdlci5wZXJzaXN0ZW5jZU1lc3NhZ2VEaXNtaXNzZWQgPSB0cnVlXHJcbiAgICAgICAgICB9fVxyXG4gICAgICAgID5cclxuICAgICAgICAgIERpc21pc3NcclxuICAgICAgICA8L1NlY29uZGFyeUJ1dHRvbj5cclxuICAgICAgPC9CdXR0b25zPlxyXG4gICAgPC9Db250YWluZXI+XHJcbiAgKSlcclxufVxyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCJcclxuaW1wb3J0IHsgUHJpbWFyeUJ1dHRvbiB9IGZyb20gXCIuLi8uLi8uLi9jb21tb24vaW5wdXQvYnV0dG9uL1ByaW1hcnlCdXR0b25cIlxyXG5pbXBvcnQgeyBTZWNvbmRhcnlCdXR0b24gfSBmcm9tIFwiLi4vLi4vLi4vY29tbW9uL2lucHV0L2J1dHRvbi9TZWNvbmRhcnlCdXR0b25cIlxyXG5pbXBvcnQgeyBNb2RhbEFjdGlvbiB9IGZyb20gXCIuLi8uLi8uLi9jb21tb24vbW9kYWwvbGF5b3V0L01vZGFsQWN0aW9uXCJcclxuaW1wb3J0IHsgTW9kYWxCb2R5IH0gZnJvbSBcIi4uLy4uLy4uL2NvbW1vbi9tb2RhbC9sYXlvdXQvTW9kYWxCb2R5XCJcclxuaW1wb3J0IHsgTW9kYWxDb250YWluZXIgfSBmcm9tIFwiLi4vLi4vLi4vY29tbW9uL21vZGFsL2xheW91dC9Nb2RhbENvbnRhaW5lclwiXHJcbmltcG9ydCB7IE1vZGFsRm9vdGVyIH0gZnJvbSBcIi4uLy4uLy4uL2NvbW1vbi9tb2RhbC9sYXlvdXQvTW9kYWxGb290ZXJcIlxyXG5pbXBvcnQgeyBNb2RhbEhlYWRlciB9IGZyb20gXCIuLi8uLi8uLi9jb21tb24vbW9kYWwvbGF5b3V0L01vZGFsSGVhZGVyXCJcclxuaW1wb3J0IHsgTW9kYWxUaXRsZSB9IGZyb20gXCIuLi8uLi8uLi9jb21tb24vbW9kYWwvbGF5b3V0L01vZGFsVGl0bGVcIlxyXG5pbXBvcnQgeyBNb2RhbENvbnRleHQgfSBmcm9tIFwiLi4vLi4vLi4vY29tbW9uL21vZGFsL01vZGFsQ29udGV4dFwiXHJcbmltcG9ydCB7IHVzZVJlcXVpcmVkQ29udGV4dCB9IGZyb20gXCIuLi8uLi8uLi9jb21tb24vc3RhdGUvdXNlUmVxdWlyZWRDb250ZXh0XCJcclxuaW1wb3J0IHsgcmVtb3ZlIH0gZnJvbSBcIi4uLy4uLy4uL2ljb25zL3JlbW92ZVwiXHJcbmltcG9ydCB7IE1hcmtkb3duIH0gZnJvbSBcIi4uLy4uL21hcmtkb3duL01hcmtkb3duXCJcclxuaW1wb3J0IHR5cGUgeyBEYXRhYmFzZU1hbmFnZXIgfSBmcm9tIFwiLi4vRGF0YWJhc2VNYW5hZ2VyXCJcclxuXHJcbmV4cG9ydCB0eXBlIFB1c2hOb3RpZmljYXRpb25Nb2RhbFByb3BzID0ge1xyXG4gIGRhdGFiYXNlTWFuYWdlcjogRGF0YWJhc2VNYW5hZ2VyXHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBQdXNoTm90aWZpY2F0aW9uTW9kYWwocHJvcHM6IFB1c2hOb3RpZmljYXRpb25Nb2RhbFByb3BzKSB7XHJcbiAgY29uc3QgeyBkYXRhYmFzZU1hbmFnZXIgfSA9IHByb3BzXHJcblxyXG4gIGNvbnN0IG1vZGFsID0gdXNlUmVxdWlyZWRDb250ZXh0KE1vZGFsQ29udGV4dClcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxNb2RhbENvbnRhaW5lcj5cclxuICAgICAgPE1vZGFsSGVhZGVyPlxyXG4gICAgICAgIDxNb2RhbFRpdGxlPk5vdGljZTwvTW9kYWxUaXRsZT5cclxuICAgICAgICA8TW9kYWxBY3Rpb25cclxuICAgICAgICAgIGljb249e3JlbW92ZX1cclxuICAgICAgICAgIGxhYmVsPVwiQ2xvc2VcIlxyXG4gICAgICAgICAgb25DbGljaz17KCkgPT4gbW9kYWwuZGlzbWlzcygpfVxyXG4gICAgICAgIC8+XHJcbiAgICAgIDwvTW9kYWxIZWFkZXI+XHJcbiAgICAgIDxNb2RhbEJvZHk+XHJcbiAgICAgICAgPE1hcmtkb3duXHJcbiAgICAgICAgICBjb250ZW50PXtcclxuICAgICAgICAgICAgXCJDaHJvbWUgYmFzZWQgYnJvd3NlcnMgZG8gbm90IGFsbG93IG1hbnVhbCBjb250cm9sIG9mIHBlcnNpc3RlbnRcIiArXHJcbiAgICAgICAgICAgIFwiIHN0b3JhZ2UuIEFzIGEgd29ya2Fyb3VuZCwgeW91IGNhbiBncmFudCB0aGlzIHNpdGUgcGVybWlzc2lvbiB0b1wiICtcclxuICAgICAgICAgICAgXCIgc2VuZCBub3RpZmljYXRpb25zIHRvIGFsbG93IHRoZSBzaXRlIHRvIHVzZSBwZXJzaXN0ZW50IHN0b3JhZ2UuXCJcclxuICAgICAgICAgIH1cclxuICAgICAgICAvPlxyXG4gICAgICA8L01vZGFsQm9keT5cclxuICAgICAgPE1vZGFsRm9vdGVyPlxyXG4gICAgICAgIDxTZWNvbmRhcnlCdXR0b24gb25DbGljaz17KCkgPT4gbW9kYWwuZGlzbWlzcygpfT5cclxuICAgICAgICAgIENhbmNlbFxyXG4gICAgICAgIDwvU2Vjb25kYXJ5QnV0dG9uPlxyXG4gICAgICAgIDxQcmltYXJ5QnV0dG9uXHJcbiAgICAgICAgICBvbkNsaWNrPXthc3luYyAoKSA9PiB7XHJcbiAgICAgICAgICAgIG1vZGFsLmRpc21pc3MoKVxyXG4gICAgICAgICAgICBhd2FpdCBkYXRhYmFzZU1hbmFnZXIucmVxdWVzdFBlcnNpc3RlbmNlKClcclxuICAgICAgICAgIH19XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgUmVxdWVzdCBwZXJtaXNzaW9uXHJcbiAgICAgICAgPC9QcmltYXJ5QnV0dG9uPlxyXG4gICAgICA8L01vZGFsRm9vdGVyPlxyXG4gICAgPC9Nb2RhbENvbnRhaW5lcj5cclxuICApXHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==