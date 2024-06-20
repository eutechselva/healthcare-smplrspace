/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/@smplrspace/smplr-loader/dist lazy recursive":
/*!***************************************************************************!*\
  !*** ./node_modules/@smplrspace/smplr-loader/dist/ lazy namespace object ***!
  \***************************************************************************/
/***/ ((module) => {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(() => {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = () => ([]);
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./node_modules/@smplrspace/smplr-loader/dist lazy recursive";
module.exports = webpackEmptyAsyncContext;

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles.scss":
/*!******************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles.scss ***!
  \******************************************************************************************************/
/***/ ((module, exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.id, "@font-face {\n  font-family: \"RNSSanz-Normal\";\n  src: url(\"https://docs.smplrspace.com/static/fonts/RNSSanz-Normal.woff2\") format(\"woff2\");\n}\n@font-face {\n  font-family: \"RNSSanz-Bold\";\n  src: url(\"https://docs.smplrspace.com/static/fonts/RNSSanz-Bold.woff2\") format(\"woff2\");\n}\nbody {\n  background-color: #fafcfc;\n  font-family: \"RNSSanz-Normal\";\n  color: #3a3c3c;\n}\n\nh1,\nh2,\nh3,\nh4,\nh5,\nh6 {\n  font-family: \"RNSSanz-Bold\";\n}\n\n.smplr-wrapper {\n  position: relative;\n  width: 100%;\n  aspect-ratio: 16/9;\n  background-color: #ecf1f5;\n}\n\n.smplr-embed {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n}\n\n#map {\n  width: 100%;\n  height: 70vh;\n}\n\n.view-back-position {\n  position: absolute;\n  left: 6px;\n  top: 132px;\n  z-index: 1000;\n}\n.view-back-position .view-back-container {\n  cursor: pointer;\n  width: 35px;\n  height: 35px;\n  background-color: #e62c2c;\n  border-radius: 50%;\n  position: relative;\n}\n.view-back-position .view-back-container .view-back-icon {\n  width: 23px;\n  height: 23px;\n  position: absolute;\n  left: 5px;\n  top: 6px;\n  transform: rotate(180deg);\n  filter: invert(100%) sepia(100%) saturate(2%) hue-rotate(301deg) brightness(107%) contrast(101%);\n}\n\n.building-view-tooltip {\n  background-color: #0066ff;\n  font-size: large;\n  font-weight: bold;\n}\n\n.building-marker > div {\n  width: 30px;\n  height: 30px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  font-size: 10px;\n  font-weight: bold;\n  font-weight: bold;\n  transform: translate(-50%, -100%);\n  color: white;\n  word-break: break-all;\n}\n\n.tool-tips {\n  display: flex;\n  gap: 10px;\n  padding: 10px;\n  border-radius: 10px;\n}\n.tool-tips .incident-management {\n  background-color: rgb(88, 86, 214);\n  color: white;\n}\n.tool-tips .corrective-workorder {\n  background-color: rgb(255, 149, 0);\n}\n\n.modal-container .modal-panel {\n  min-width: 30%;\n  min-height: 50%;\n}\n.modal-container .modal-panel .modal-title {\n  font-size: large;\n}\n\n.tooltip-item {\n  padding: 10px;\n  font-size: 14px;\n}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (useSourceMap) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item, useSourceMap);

      if (item[2]) {
        return "@media ".concat(item[2], " {").concat(content, "}");
      }

      return content;
    }).join('');
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery, dedupe) {
    if (typeof modules === 'string') {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, '']];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var i = 0; i < this.length; i++) {
        // eslint-disable-next-line prefer-destructuring
        var id = this[i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = [].concat(modules[_i]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        // eslint-disable-next-line no-continue
        continue;
      }

      if (mediaQuery) {
        if (!item[2]) {
          item[2] = mediaQuery;
        } else {
          item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
        }
      }

      list.push(item);
    }
  };

  return list;
};

function cssWithMappingToString(item, useSourceMap) {
  var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring

  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (useSourceMap && typeof btoa === 'function') {
    var sourceMapping = toComment(cssMapping);
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || '').concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
  }

  return [content].join('\n');
} // Adapted from convert-source-map (MIT)


function toComment(sourceMap) {
  // eslint-disable-next-line no-undef
  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
  var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
  return "/*# ".concat(data, " */");
}

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var isOldIE = function isOldIE() {
  var memo;
  return function memorize() {
    if (typeof memo === 'undefined') {
      // Test for IE <= 9 as proposed by Browserhacks
      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
      // Tests for existence of standard globals is to allow style-loader
      // to operate correctly into non-standard environments
      // @see https://github.com/webpack-contrib/style-loader/issues/177
      memo = Boolean(window && document && document.all && !window.atob);
    }

    return memo;
  };
}();

var getTarget = function getTarget() {
  var memo = {};
  return function memorize(target) {
    if (typeof memo[target] === 'undefined') {
      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
        try {
          // This will throw an exception if access to iframe is blocked
          // due to cross-origin restrictions
          styleTarget = styleTarget.contentDocument.head;
        } catch (e) {
          // istanbul ignore next
          styleTarget = null;
        }
      }

      memo[target] = styleTarget;
    }

    return memo[target];
  };
}();

var stylesInDom = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDom.length; i++) {
    if (stylesInDom[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var index = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3]
    };

    if (index !== -1) {
      stylesInDom[index].references++;
      stylesInDom[index].updater(obj);
    } else {
      stylesInDom.push({
        identifier: identifier,
        updater: addStyle(obj, options),
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function insertStyleElement(options) {
  var style = document.createElement('style');
  var attributes = options.attributes || {};

  if (typeof attributes.nonce === 'undefined') {
    var nonce =  true ? __webpack_require__.nc : 0;

    if (nonce) {
      attributes.nonce = nonce;
    }
  }

  Object.keys(attributes).forEach(function (key) {
    style.setAttribute(key, attributes[key]);
  });

  if (typeof options.insert === 'function') {
    options.insert(style);
  } else {
    var target = getTarget(options.insert || 'head');

    if (!target) {
      throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
    }

    target.appendChild(style);
  }

  return style;
}

function removeStyleElement(style) {
  // istanbul ignore if
  if (style.parentNode === null) {
    return false;
  }

  style.parentNode.removeChild(style);
}
/* istanbul ignore next  */


var replaceText = function replaceText() {
  var textStore = [];
  return function replace(index, replacement) {
    textStore[index] = replacement;
    return textStore.filter(Boolean).join('\n');
  };
}();

function applyToSingletonTag(style, index, remove, obj) {
  var css = remove ? '' : obj.media ? "@media ".concat(obj.media, " {").concat(obj.css, "}") : obj.css; // For old IE

  /* istanbul ignore if  */

  if (style.styleSheet) {
    style.styleSheet.cssText = replaceText(index, css);
  } else {
    var cssNode = document.createTextNode(css);
    var childNodes = style.childNodes;

    if (childNodes[index]) {
      style.removeChild(childNodes[index]);
    }

    if (childNodes.length) {
      style.insertBefore(cssNode, childNodes[index]);
    } else {
      style.appendChild(cssNode);
    }
  }
}

function applyToTag(style, options, obj) {
  var css = obj.css;
  var media = obj.media;
  var sourceMap = obj.sourceMap;

  if (media) {
    style.setAttribute('media', media);
  } else {
    style.removeAttribute('media');
  }

  if (sourceMap && typeof btoa !== 'undefined') {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    while (style.firstChild) {
      style.removeChild(style.firstChild);
    }

    style.appendChild(document.createTextNode(css));
  }
}

var singleton = null;
var singletonCounter = 0;

function addStyle(obj, options) {
  var style;
  var update;
  var remove;

  if (options.singleton) {
    var styleIndex = singletonCounter++;
    style = singleton || (singleton = insertStyleElement(options));
    update = applyToSingletonTag.bind(null, style, styleIndex, false);
    remove = applyToSingletonTag.bind(null, style, styleIndex, true);
  } else {
    style = insertStyleElement(options);
    update = applyToTag.bind(null, style, options);

    remove = function remove() {
      removeStyleElement(style);
    };
  }

  update(obj);
  return function updateStyle(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
        return;
      }

      update(obj = newObj);
    } else {
      remove();
    }
  };
}

module.exports = function (list, options) {
  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
  // tags it will allow on a page

  if (!options.singleton && typeof options.singleton !== 'boolean') {
    options.singleton = isOldIE();
  }

  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    if (Object.prototype.toString.call(newList) !== '[object Array]') {
      return;
    }

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDom[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDom[_index].references === 0) {
        stylesInDom[_index].updater();

        stylesInDom.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./src/styles.scss":
/*!*************************!*\
  !*** ./src/styles.scss ***!
  \*************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var api = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!../node_modules/sass-loader/dist/cjs.js!./styles.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles.scss");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.id, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);



module.exports = content.locals || {};

/***/ }),

/***/ "./src/SpaceView/FloorView.tsx":
/*!*************************************!*\
  !*** ./src/SpaceView/FloorView.tsx ***!
  \*************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

// 3d integration of selected space of particular space
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.IOT = void 0;
const React = __importStar(__webpack_require__(/*! react */ "react"));
const components_1 = __webpack_require__(/*! uxp/components */ "uxp/components");
// import './styles.scss';
const react_1 = __webpack_require__(/*! react */ "react");
const smplr_loader_1 = __webpack_require__(/*! @smplrspace/smplr-loader */ "./node_modules/@smplrspace/smplr-loader/dist/index.umd.cjs");
const webserv_data_1 = __webpack_require__(/*! ./webserv_data */ "./src/SpaceView/webserv_data.tsx");
const INITIAL_MODE = '3d';
const occupancyImage = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAACyklEQVR4nO2YTYhNURzAf4yvMt5kwURKslA+krCZ2AiNj40NssEgCa9ZspnxMSnJZMGUWMhCGbGSjUQWxmfCkJFMUoPGSAbJ19O/zqvTce655717p3efzq/+m3vPOf/zP+f/dS8EAoFAIBAI+FIHrAAagRxVylbgC1BQMghspMpYDPzRjCiKPGugirhuMaIoV6kSaoCvDkPE3YZXcoMNQB7YBNQ7xo0AfjkMGfQwZB6wW8XZlLQMGA1ctJzqWsec2w5DxO1ct3naGP8d2J6GIfsiNiQKpkXMWe0I9kUOXTsjdP1Wt5ToNvQUasoJx1xxi8+GS22J0dfn0NWZxJC5joVF7sbMz6li6FMQJ8fo6k1iyJyYxa+RHpNidD1OsrhkoPeOxSV+0uR5mW7sxbaIhfuGoH9aE5EkPqkbS8wOYMCIjZkeDWMbcEvJfmCch64NwFtN1xNgISkyCpgNTPUYKxt+ajnZR0Ctx/waYBYwnZSoU7dxCXihbkVO6yHQASwBhlnmtZURV2OBJuA80AN8AN6pID8FrCqntZHNNRt1IEruWYrV6xLTaJPhuoUIeRZTUP8x4qzHorpIk7hcc0FbwOpVWrJhkaMl6voBrPMxJG+ZLFd8DjgMHFOt+E9jzEcts/Q7NvJK07Xe8n5AudcRoB24otohfcw3YEacIW8sJyhBet8Qc5xIi1rjuMOQQ5quB5b33RZdvZZxosMZ3IUEUuyHxkdkrW4ja5knXShBbsTFx8sEi+/R1sqpDNWl1RGzgHYl0NUe51ryIdOqAr7TUzrUB5fk/yJjgPnASiUL1DOdCcBe4EwJuk6q7xPpzIeUxogALahnl4FlZJha4EKJ8SRFMFOMBG6WGbB6Tak4zREZ6gCwWcnBiEwmdSsz3EmQfeRHRWboSWCIfExlhrylZfHtm3aRMerVP9+lniJjJ1Z604FAIBAI/Ff8Bctn99hqdLNAAAAAAElFTkSuQmCC';
const IOT = (props) => {
    const spaceRef = React.useRef();
    const [viewerReady, setViewerReady] = React.useState(false);
    const [modalId, setModalId] = React.useState(null);
    const [onOpen, setOnOpen] = React.useState(null);
    const [location, setLocation] = React.useState(null);
    // handle 2d/3d modes
    const [mode, setMode] = React.useState(INITIAL_MODE);
    const onModeChange = React.useCallback(setMode, []);
    // start viewer
    (0, react_1.useEffect)(() => {
        // we recommend using the default value 'esm' in your code but stackblitz required 'umd'
        (0, smplr_loader_1.loadSmplrJs)('umd')
            .then((smplr) => {
            spaceRef.current = new smplr.Space({
                spaceId: '78b842f9-0416-43b3-9496-9a6668ab73ad',
                clientToken: 'pub_eb760fee77634cdab2fe31146fc371c2',
                containerId: 'test',
            });
            spaceRef.current.startViewer({
                preview: true,
                mode,
                allowModeChange: true,
                onModeChange,
                onReady: () => setViewerReady(true),
                onError: (error) => console.error('Could not start viewer', error),
            });
        })
            .catch((error) => console.error(error));
    }, []);
    let [modalItem, setModelItem] = React.useState({
        "id": '',
        "type": '',
        "assetType": '',
        "status": '',
        "tagNo": '',
        "name": '',
        "condition": '',
        "dt": '',
        "Battery": '',
        "title": '',
        "locationBlock": '',
        "locationFloor": '',
        "locationBuilding": '',
    });
    const openPopup = () => {
        // Define the URL of the page you want to open in the popup
        const url = 'https://example.com/live-location';
        // Define the size and position of the popup window
        const width = 1000;
        const height = 400;
        const left = (window.innerWidth - width) / 2;
        const top = (window.innerHeight - height) / 2;
        // Open the popup window
        window.open(url, '_blank', `width=${width},height=${height},left=${left},top=${top}`);
    };
    React.useEffect(() => {
        console.log('Healthcare_mappingWidget mounted');
        props.uxpContext.executeAction('TestChainy', 'GetDataMapping', {}).then((data) => {
            console.log(data);
            debugger;
            setLocation(JSON.parse(data));
        });
    }, []);
    (0, react_1.useEffect)(() => {
        if (!viewerReady) {
            return;
        }
        spaceRef.current.addDataLayer({
            id: 'location',
            type: 'polygon',
            data: (location),
            tooltip: (d) => `${d.title} - ${d.name}`,
            color: (d) => {
                if (d.status === 'in-use') {
                    return '#ff3f34'; // Red color for status equal to 'in-use'
                }
                else if (d.status === 'available') {
                    return '#3aa655'; // Green color for status equal to 'available'
                }
                else {
                    return '#000000'; // Default color if status is neither 'in-use' nor 'available'
                }
            },
            alpha: 0.7,
            height: mode === '3d' ? 1.9 : 0.0045,
            /*onClick: d => {
                setModalId(d.name)
                setModelItem({ id: d.name, type: 'location', status: d.status,
                title: d.title, locationBlock:d.locationBlock, locationFloor:d.locationFloor,
                locationBuilding:d.locationBuilding })
            }*/
        });
        spaceRef.current.addDataLayer({
            id: 'asset_id',
            type: 'point',
            // data: autoElevation(asset_id),
            //data: (asset_id),
            data: (webserv_data_1.Assets),
            tooltip: (d) => `ID : ${d.id} - ${d.status}`,
            color: '#357afc',
            diameter: 0.4,
            // onClick: d => showAlert(` is too loud!`)
            onClick: d => {
                setModalId(d.id);
                setModelItem({
                    id: d.id, type: 'point', assetType: d.assetType, status: d.status,
                    tagNo: d.tagNo, name: d.name, condition: d.condition, dt: d.dt, Battery: d.Battery, title: d.title, locationBlock: d.locationBlock, locationFloor: d.locationFloor,
                    locationBuilding: d.locationBuilding
                });
            }
        });
        return () => {
            spaceRef.current.removeDataLayer('location');
            spaceRef.current.removeDataLayer('asset_id');
        };
    }, [viewerReady, mode,]);
    let renderTooltipWithModal = () => {
        // let _id = id
        let _title = '';
        let _type = '';
        console.log(modalId);
        console.log(modalItem);
        if (modalItem["type"] == 'point') {
            _title = ` ${modalItem.assetType} : ${modalItem.id}`;
            _type = 'asset_id';
        }
        else {
            _title = `${modalItem.title} : ${modalItem.name}`;
            _type = 'rooms';
        }
        return (React.createElement(components_1.Modal
        // title={`Asset_ID ${modalId}`}
        , { 
            // title={`Asset_ID ${modalId}`}
            title: _title, show: modalId, onClose: () => {
                setModalId(null);
                setOnOpen(false);
                setModelItem({});
            }, className: "custom-modal" },
            React.createElement("div", { className: 'tool-tips' },
                React.createElement(components_1.Button, { className: 'incident-management', title: 'View History', onClick: () => openPopup() })),
            React.createElement("div", { className: "tooltip-list" },
                React.createElement("div", { className: "tooltip-item", style: { display: 'flex', gap: '5px' } },
                    React.createElement("img", { style: { width: '15px', height: '15px' }, src: "https://demo.iviva.cloud/Resources/DigitalTwin/icon/workorder.svg" }),
                    React.createElement("div", null,
                        "Tag Number: ",
                        modalItem.tagNo)),
                React.createElement("div", { className: "tooltip-item", style: { display: 'flex', gap: '5px' } },
                    React.createElement("img", { style: { width: '15px', height: '15px' }, src: "https://demo.iviva.cloud/Resources/DigitalTwin/icon/workorder.svg" }),
                    React.createElement("div", null,
                        "Date/Time: ",
                        modalItem.dt)),
                React.createElement("div", { className: "tooltip-item", style: { display: 'flex', gap: '5px' } },
                    React.createElement("img", { style: { width: '15px', height: '15px' }, src: "https://demo.iviva.cloud/Resources/DigitalTwin/icon/workorder.svg" }),
                    React.createElement("div", null,
                        "Status: ",
                        modalItem.status)),
                React.createElement("div", { className: "tooltip-item", style: { display: 'flex', gap: '5px' } },
                    React.createElement("img", { style: { width: '15px', height: '15px' }, src: "https://demo.iviva.cloud/Resources/DigitalTwin/icon/workorder.svg" }),
                    React.createElement("div", null,
                        "Condition: ",
                        modalItem.condition)),
                React.createElement("div", { className: "tooltip-item", style: { display: 'flex', gap: '5px' } },
                    React.createElement("img", { style: { width: '15px', height: '15px' }, src: "https://demo.iviva.cloud/Resources/DigitalTwin/icon/workorder.svg" }),
                    React.createElement("div", null,
                        "Battery: ",
                        modalItem.Battery)),
                React.createElement("div", { className: "tooltip-item", style: { display: 'flex', gap: '5px' } },
                    React.createElement("img", { style: { width: '15px', height: '15px' }, src: "https://demo.iviva.cloud/Resources/DigitalTwin/icon/workorder.svg" }),
                    React.createElement("div", null,
                        "Location: ",
                        modalItem.name,
                        " - ",
                        modalItem.title,
                        " - ",
                        modalItem.locationBlock,
                        " - ",
                        modalItem.locationFloor,
                        " - ",
                        modalItem.locationBuilding)),
                _type == 'rooms' && React.createElement("div", { className: "tooltip-item", style: { display: 'flex', gap: '5px' } },
                    React.createElement("img", { style: { width: '15px', height: '15px' }, src: occupancyImage }),
                    React.createElement("div", null, `Occupancy :${modalItem.status}`)))));
    };
    return (
    // <WidgetWrapper>
    React.createElement(React.Fragment, null,
        React.createElement(components_1.TitleBar, { title: 'Location Tracking' }),
        React.createElement("div", { className: "smplr-wrapper" },
            React.createElement("div", { id: "test", className: "smplr-embed" })),
        modalId && renderTooltipWithModal())
    // </WidgetWrapper>
    );
};
exports.IOT = IOT;


/***/ }),

/***/ "./src/SpaceView/webserv_data.tsx":
/*!****************************************!*\
  !*** ./src/SpaceView/webserv_data.tsx ***!
  \****************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Assets = void 0;
exports.Assets = [
    {
        "id": "QW34",
        "status": "In Use",
        "assetType": "Laptop",
        "tagNo": "48796054II",
        "condition": "Dirty",
        "dt": "2024-02-23T11:31:10Z",
        "Battery": "50%",
        "name": "Room 104",
        "title": "Laboratory",
        "locationBlock": "B",
        "locationFloor": "5th Floor",
        "locationBuilding": "A",
        "position": {
            "levelIndex": 0,
            "x": 25,
            "z": -31,
            "elevation": 2
        }
    },
    {
        "id": "RT10",
        "status": "In Use",
        "assetType": "Laptop",
        "tagNo": "98765439II",
        "condition": "Good",
        "dt": "2024-02-23T11:31:05Z",
        "Battery": "80%",
        "name": "Room 101",
        "title": "Emergency Room",
        "locationBlock": "A",
        "locationFloor": "5th Floor",
        "locationBuilding": "A",
        "position": {
            "levelIndex": 0,
            "x": 29,
            "z": -18,
            "elevation": 2
        }
    },
    {
        "id": "MK87",
        "status": "In Use",
        "assetType": "Hospital Bed",
        "tagNo": "34567898II",
        "condition": "For Repair",
        "dt": "2024-02-23T11:31:43Z",
        "Battery": "10%",
        "name": "Room 109",
        "title": "Patient Room",
        "locationBlock": "F",
        "locationFloor": "5th Floor",
        "locationBuilding": "A",
        "position": {
            "levelIndex": 0,
            "x": 39,
            "z": -33,
            "elevation": 2
        }
    },
    {
        "id": "TY39",
        "status": "Available",
        "assetType": "Laptop",
        "tagNo": "23456765II",
        "condition": "Dirty",
        "dt": "2024-02-23T11:34:03Z",
        "Battery": "30%",
        "name": "Room 123",
        "title": "Surgical Ward",
        "locationBlock": "F",
        "locationFloor": "5th Floor",
        "locationBuilding": "A",
        "position": {
            "levelIndex": 0,
            "x": 18,
            "z": -31,
            "elevation": 2
        }
    },
    {
        "id": "RH99",
        "status": "In Use",
        "assetType": "IV Pump",
        "tagNo": "30450003II",
        "condition": "Good",
        "dt": "2024-02-23T11:33:58Z",
        "Battery": "66%",
        "name": "Room 122",
        "title": "Pharmacy",
        "locationBlock": "E",
        "locationFloor": "5th Floor",
        "locationBuilding": "A",
        "position": {
            "levelIndex": 0,
            "x": 10,
            "z": -23,
            "elevation": 2
        }
    },
    {
        "id": "WE12",
        "status": "Available",
        "assetType": "Wheelchair ",
        "tagNo": "76543453II",
        "condition": "Good",
        "dt": "2024-02-23T11:33:52Z",
        "Battery": "100%",
        "name": "Room 121",
        "title": "Patient Room",
        "locationBlock": "E",
        "locationFloor": "5th Floor",
        "locationBuilding": "A",
        "position": {
            "levelIndex": 0,
            "x": 13,
            "z": -25,
            "elevation": 2
        }
    },
    {
        "id": "CH69",
        "status": "In Use",
        "assetType": "Wheelchair ",
        "tagNo": "73487777II",
        "condition": "Good",
        "dt": "2024-02-23T11:32:57Z",
        "Battery": "45%",
        "name": "Room 117",
        "title": "Patient Room",
        "locationBlock": "F",
        "locationFloor": "5th Floor",
        "locationBuilding": "A",
        "position": {
            "levelIndex": 0,
            "x": 11,
            "z": -18,
            "elevation": 2
        }
    },
    {
        "id": "EB56",
        "status": "In Use",
        "assetType": "Wheelchair ",
        "tagNo": "45676543II",
        "condition": "Good",
        "dt": "2024-02-23T11:34:14Z",
        "Battery": "59%",
        "name": "Room 125",
        "title": "ENT Department ",
        "locationBlock": "F",
        "locationFloor": "5th Floor",
        "locationBuilding": "A",
        "position": {
            "levelIndex": 0,
            "x": 13,
            "z": -31,
            "elevation": 2
        }
    },
    {
        "id": "UK67",
        "status": "Available",
        "assetType": "Wheelchair ",
        "tagNo": "87634563II",
        "condition": "Good",
        "dt": "2024-02-23T11:33:12Z",
        "Battery": "78%",
        "name": "Room 120",
        "title": "Patient Room",
        "locationBlock": "C",
        "locationFloor": "5th Floor",
        "locationBuilding": "A",
        "position": {
            "levelIndex": 0,
            "x": 16,
            "z": -23,
            "elevation": 2
        }
    },
    {
        "id": "TG67",
        "status": "Available",
        "assetType": "Laptop",
        "tagNo": "87654321II",
        "condition": "Good",
        "dt": "2024-02-23T11:31:35Z",
        "Battery": "65%",
        "name": "Room 108",
        "title": "Patient Room",
        "locationBlock": "F",
        "locationFloor": "5th Floor",
        "locationBuilding": "A",
        "position": {
            "levelIndex": 0,
            "x": 36,
            "z": -31,
            "elevation": 2
        }
    },
    {
        "id": "ZX45",
        "status": "Available",
        "assetType": "IV Pump",
        "tagNo": "09215467II",
        "condition": "Good",
        "dt": "2024-02-23T11:31:26Z",
        "Battery": "70%",
        "name": "Room 107",
        "title": "AAAAAAAAH",
        "locationBlock": "LBLOCK",
        "locationFloor": "LFLOOR",
        "locationBuilding": "LBUILDING",
        "position": {
            "levelIndex": 0,
            "x": 33,
            "z": -33,
            "elevation": 2
        }
    },
    {
        "id": "VB56",
        "status": "In Use",
        "assetType": "Wheelchair ",
        "tagNo": "56107958II",
        "condition": "Good",
        "dt": "2024-02-23T11:31:20Z",
        "Battery": "75%",
        "name": "Room 106",
        "title": "Patient Room",
        "locationBlock": "D",
        "locationFloor": "5th Floor",
        "locationBuilding": "A",
        "position": {
            "levelIndex": 0,
            "x": 30,
            "z": -31,
            "elevation": 2
        }
    },
    {
        "id": "KU87",
        "status": "Available",
        "assetType": "Hospital Bed",
        "tagNo": "37684950II",
        "condition": "Dirty",
        "dt": "2024-02-23T11:31:15Z",
        "Battery": "30%",
        "name": "Room 105",
        "title": "Patient Room",
        "locationBlock": "C",
        "locationFloor": "5th Floor",
        "locationBuilding": "A",
        "position": {
            "levelIndex": 0,
            "x": 28,
            "z": -33,
            "elevation": 2
        }
    },
    {
        "id": "YU39",
        "status": "Available",
        "assetType": "IV Pump",
        "tagNo": "65701923II",
        "condition": "Good",
        "dt": "2024-02-23T11:31:00Z",
        "Battery": "85%",
        "name": "Room 103",
        "title": "Radiology ",
        "locationBlock": "A",
        "locationFloor": "5th Floor",
        "locationBuilding": "A",
        "position": {
            "levelIndex": 0,
            "x": 37,
            "z": -17,
            "elevation": 2
        }
    },
    {
        "id": "ER67",
        "status": "Available",
        "assetType": "Wheelchair ",
        "tagNo": "45672345II",
        "condition": "Good",
        "dt": "2024-02-23T11:25:51Z",
        "Battery": "90%",
        "name": "Room 102",
        "title": "Pharmacy",
        "locationBlock": "A",
        "locationFloor": "5th Floor",
        "locationBuilding": "A",
        "position": {
            "levelIndex": 0,
            "x": 33,
            "z": -18,
            "elevation": 2
        }
    },
    {
        "id": "WS67",
        "status": "Available",
        "assetType": "Wheelchair ",
        "tagNo": "34567877II",
        "condition": "For Repair",
        "dt": "2024-02-23T11:32:24Z",
        "Battery": "40%",
        "name": "Room 112",
        "title": "Physiotherapy Room",
        "locationBlock": "B",
        "locationFloor": "5th Floor",
        "locationBuilding": "A",
        "position": {
            "levelIndex": 0,
            "x": 33,
            "z": -25,
            "elevation": 2
        }
    },
    {
        "id": "KO98",
        "status": "Available",
        "assetType": "Wheelchair ",
        "tagNo": "09876345II",
        "condition": "For Repair",
        "dt": "2024-02-23T11:32:51Z",
        "Battery": "63%",
        "name": "Room 124, Patient Room, C block, 3rd Floor",
        "title": "AAAAAAAAH",
        "locationBlock": "LBLOCK",
        "locationFloor": "LFLOOR",
        "locationBuilding": "LBUILDING",
        "position": {
            "levelIndex": 0,
            "x": 15,
            "z": -18,
            "elevation": 2
        }
    },
    {
        "id": "YT09",
        "status": "Available",
        "assetType": "Hospital Bed",
        "tagNo": "34567752II",
        "condition": "Good",
        "dt": "2024-02-23T11:33:05Z",
        "Battery": "93%",
        "name": "Room 119",
        "title": "Patient Room",
        "locationBlock": "A",
        "locationFloor": "5th Floor",
        "locationBuilding": "A",
        "position": {
            "levelIndex": 0,
            "x": 18,
            "z": -25,
            "elevation": 2
        }
    },
    {
        "id": "ZA23",
        "status": "Available",
        "assetType": "IV Pump ",
        "tagNo": "12345121II",
        "condition": "For Repair",
        "dt": "2024-02-23T11:33:02Z",
        "Battery": "89%",
        "name": "Room 118",
        "title": "Patient Room",
        "locationBlock": "F",
        "locationFloor": "5th Floor",
        "locationBuilding": "A",
        "position": {
            "levelIndex": 0,
            "x": 7,
            "z": -18,
            "elevation": 2
        }
    },
    {
        "id": "WD38",
        "status": "Available",
        "assetType": "Wheelchair ",
        "tagNo": "76542233II",
        "condition": "Dirty",
        "dt": "2024-02-23T11:34:08Z",
        "Battery": "20%",
        "name": "Room 124",
        "title": "Laboratory ",
        "locationBlock": "D",
        "locationFloor": "5th Floor",
        "locationBuilding": "A",
        "position": {
            "levelIndex": 0,
            "x": 16,
            "z": -33,
            "elevation": 2
        }
    },
    {
        "id": "GN34",
        "status": "In Use",
        "assetType": "Wheelchair ",
        "tagNo": "89345548II",
        "condition": "Dirty",
        "dt": "2024-02-23T11:32:43Z",
        "Battery": "80%",
        "name": "Room 115",
        "title": "Patient Room",
        "locationBlock": "E",
        "locationFloor": "5th Floor",
        "locationBuilding": "A",
        "position": {
            "levelIndex": 0,
            "x": 25,
            "z": -23,
            "elevation": 2
        }
    },
    {
        "id": "AL19",
        "status": "Available",
        "assetType": "Wheelchair ",
        "tagNo": "12345665II",
        "condition": "For Repair",
        "dt": "2024-02-23T11:32:39Z",
        "Battery": "67%",
        "name": "Room 114",
        "title": "Maintenance Room",
        "locationBlock": "D",
        "locationFloor": "5th Floor",
        "locationBuilding": "A",
        "position": {
            "levelIndex": 0,
            "x": 28,
            "z": -25,
            "elevation": 2
        }
    },
    {
        "id": "ED19",
        "status": "In Use",
        "assetType": "Wheelchair ",
        "tagNo": "87654323II",
        "condition": "For Repair",
        "dt": "2024-02-23T11:32:31Z",
        "Battery": "55%",
        "name": "Room 113",
        "title": "Dermatology Department",
        "locationBlock": "D",
        "locationFloor": "5th Floor",
        "locationBuilding": "A",
        "position": {
            "levelIndex": 0,
            "x": 30,
            "z": -23,
            "elevation": 2
        }
    },
    {
        "id": "DE51",
        "status": "Available",
        "assetType": "Wheelchair ",
        "tagNo": "67898764II",
        "condition": "Good",
        "dt": "2024-02-23T11:31:51Z",
        "Battery": "88%",
        "name": "Room 110",
        "title": "Billing Department ",
        "locationBlock": "D",
        "locationFloor": "5th Floor",
        "locationBuilding": "A",
        "position": {
            "levelIndex": 0,
            "x": 39,
            "z": -26,
            "elevation": 2
        }
    },
    {
        "id": "KI87",
        "status": "Available",
        "assetType": "Wheelchair ",
        "tagNo": "76543456II",
        "condition": "Good",
        "dt": "2024-02-23T11:31:55Z",
        "Battery": "100%",
        "name": "Room 111",
        "title": "Maintenance Room",
        "locationBlock": "B",
        "locationFloor": "5th Floor",
        "locationBuilding": "A",
        "position": {
            "levelIndex": 0,
            "x": 36,
            "z": -23,
            "elevation": 2
        }
    }
];


/***/ }),

/***/ "./src/index.tsx":
/*!***********************!*\
  !*** ./src/index.tsx ***!
  \***********************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
const React = __importStar(__webpack_require__(/*! react */ "react"));
const uxp_1 = __webpack_require__(/*! ./uxp */ "./src/uxp.ts");
const components_1 = __webpack_require__(/*! uxp/components */ "uxp/components");
__webpack_require__(/*! ./styles.scss */ "./src/styles.scss");
//import { Floor_View } from "./SpaceView/FloorView";
const FloorView_1 = __webpack_require__(/*! ./SpaceView/FloorView */ "./src/SpaceView/FloorView.tsx");
const MappingWidget = (props) => {
    const [isFloorView, setIsFloorView] = React.useState(false);
    return (React.createElement(components_1.WidgetWrapper, null,
        React.createElement(components_1.TitleBar, { title: 'Mapping' },
            React.createElement(components_1.FilterPanel, null)),
        React.createElement(FloorView_1.IOT, { uxpContext: props.uxpContext })));
};
/**
 * Register as a Widget
 */
(0, uxp_1.registerWidget)({
    id: "Mapping",
    widget: MappingWidget,
    configs: {
        layout: {
        // w: 12,
        // h: 12,
        // minH: 12,
        // minW: 12
        }
    }
});


/***/ }),

/***/ "./src/uxp.ts":
/*!********************!*\
  !*** ./src/uxp.ts ***!
  \********************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.registerUI = exports.registerMenuItem = exports.registerLink = exports.registerWidget = void 0;
const bundle_json_1 = __importDefault(__webpack_require__(/*! ../bundle.json */ "./bundle.json"));
function registerWidget(_widget) {
    var _a;
    let id = (bundle_json_1.default.id + '/widget/' + _widget.id).toLowerCase();
    if (!window.registerWidget) {
        console.error('This code is not being run within the context of UXP');
        return;
    }
    // get widget details from bundle.json 
    // get widget
    let _widgetDetails = (_a = bundle_json_1.default.widgets) === null || _a === void 0 ? void 0 : _a.find((w) => w.id == _widget.id);
    if (!_widgetDetails) {
        console.log("Please update the bundle.json");
        throw "Error: The widget you are trying to register is not in the bundle.json. Please update the bundle.json before continue";
    }
    // merge them
    let updatedWidget = Object.assign(Object.assign(Object.assign({}, _widget), _widgetDetails), { id });
    window.registerWidget(updatedWidget);
}
exports.registerWidget = registerWidget;
function registerLink(_link) {
    var _a;
    let id = (bundle_json_1.default.id + '/sidebarlink/' + _link.id).toLowerCase();
    if (!window.registerLink) {
        console.error('This is not is not being run within the UXP context');
        return;
    }
    console.log('registering link....', id);
    // get widget details from bundle.json 
    // get widget
    let _linkDetails = (_a = bundle_json_1.default.sidebarLinks) === null || _a === void 0 ? void 0 : _a.find((s) => s.id == _link.id);
    if (!_linkDetails) {
        console.log("Please update the bundle.json");
        throw "Error: The sidebar link you are trying to register is not in the bundle.json. Please update the bundle.json before continue";
    }
    // merge them
    let updatedLink = Object.assign(Object.assign(Object.assign({}, _link), _linkDetails), { id });
    window.registerLink(updatedLink);
}
exports.registerLink = registerLink;
function registerMenuItem(_menuItem) {
    let id = (bundle_json_1.default.id + '/menuitem/' + _menuItem.id).toLowerCase();
    if (!window.registerMenuItem) {
        console.error('This is not is not being run within the UXP context');
        return;
    }
    console.log('registering menu item....', id);
    // get widget details from bundle.json 
    // get widget
    let _menuItemDetails = bundle_json_1.default.menuItems.find((s) => s.id == _menuItem.id);
    if (!_menuItemDetails) {
        console.log("Please update the bundle.json");
        throw "Error: The menu item you are trying to register is not in the bundle.json. Please update the bundle.json before continue";
    }
    // merge them
    let updatedMenuItem = Object.assign(Object.assign(Object.assign({}, _menuItem), _menuItemDetails), { id });
    window.registerMenuItem(updatedMenuItem);
}
exports.registerMenuItem = registerMenuItem;
function registerUI(_ui) {
    let id = (bundle_json_1.default.id + '/ui/' + _ui.id).toLowerCase();
    if (!window.registerUI) {
        console.error('This is not is not being run within the UXP context');
        return;
    }
    console.log('registering link....', id);
    // get widget details from bundle.json 
    // get widget
    let _uiDetails = bundle_json_1.default.uis.find((s) => s.id == _ui.id);
    if (!_uiDetails) {
        console.log("Please update the bundle.json");
        throw "Error: The ui you are trying to register is not in the bundle.json. Please update the bundle.json before continue";
    }
    // merge them
    let updatedUI = Object.assign(Object.assign(Object.assign({}, _ui), _uiDetails), { id });
    window.registerUI(updatedUI);
}
exports.registerUI = registerUI;


/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "React" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = React;

/***/ }),

/***/ "uxp/components":
/*!********************************!*\
  !*** external "UXPComponents" ***!
  \********************************/
/***/ ((module) => {

"use strict";
module.exports = UXPComponents;

/***/ }),

/***/ "./node_modules/@smplrspace/smplr-loader/dist/index.umd.cjs":
/*!******************************************************************!*\
  !*** ./node_modules/@smplrspace/smplr-loader/dist/index.umd.cjs ***!
  \******************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

(function(r,l){ true?l(exports):0})(this,function(r){"use strict";const l=o=>new Promise((s,t)=>{try{const e=document.createElement("script");e.type="text/javascript",e.async=!0,e.src=o,e.addEventListener("load",()=>{s("ok")}),e.addEventListener("error",()=>{t(`Failed to load the script from ${o}`)}),document.body.appendChild(e)}catch(e){t(e)}}),n=o=>__webpack_require__("./node_modules/@smplrspace/smplr-loader/dist lazy recursive")(o),c=o=>new Promise((s,t)=>{try{const e=document.createElement("link");e.type="text/css",e.href=o,e.rel="stylesheet",e.addEventListener("load",()=>{s("ok")}),e.addEventListener("error",()=>{const d=new Error(`Failed to load the stylesheet from ${o}`);console.error(d),t(d)}),document.head.appendChild(e)}catch(e){console.error(e),t(e)}}),p={umd:{prod:"https://app.smplrspace.com/lib/smplr.js",dev:"https://dev.smplrspace.com/lib/smplr.js",local:"http://localhost:3000/lib/smplr.umd.js"},esm:{prod:"https://app.smplrspace.com/lib/smplr.mjs",dev:"https://dev.smplrspace.com/lib/smplr.mjs",local:"http://localhost:3000/lib/smplr.mjs"},css:{prod:"https://app.smplrspace.com/lib/smplr.css",dev:"https://dev.smplrspace.com/lib/smplr.css",local:"http://localhost:3000/lib/style.css"}};async function m(o="esm",s="prod"){try{c(p.css[s])}catch{console.warn("oops")}try{if(o==="esm"){const t=await n(p.esm[s]);return console.log("loaded esm",t.toString()),t}else{await l(p.umd[s]);const t=window.smplr;if(!t)throw new Error("Failed to load smplr.js");return console.log("loaded umd",t.toString()),t}}catch(t){throw console.error(t),new Error("Failed to load smplr.js")}}r.loadSmplrJs=m,Object.defineProperty(r,Symbol.toStringTag,{value:"Module"})});


/***/ }),

/***/ "./bundle.json":
/*!*********************!*\
  !*** ./bundle.json ***!
  \*********************/
/***/ ((module) => {

"use strict";
module.exports = /*#__PURE__*/JSON.parse('{"id":"032812a8-4994-4d22-a5d6-b81b4e92d917","author":"","widgets":[{"id":"Mapping","name":"Mapping","description":"A sample widget","icon":"","tags":[]}],"sidebarLinks":[],"uis":[],"menuItems":[]}');

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.tsx");
/******/ 	
/******/ })()
;
//# sourceMappingURL=main.js.map