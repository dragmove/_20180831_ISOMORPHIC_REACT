module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 7);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = require("babel-runtime/core-js/object/get-prototype-of");

/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = require("babel-runtime/helpers/classCallCheck");

/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = require("babel-runtime/helpers/createClass");

/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = require("babel-runtime/helpers/possibleConstructorReturn");

/***/ }),
/* 6 */
/***/ (function(module, exports) {

module.exports = require("babel-runtime/helpers/inherits");

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(8);

var _path = __webpack_require__(9);

var _path2 = _interopRequireDefault(_path);

var _express = __webpack_require__(10);

var _express2 = _interopRequireDefault(_express);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _server = __webpack_require__(11);

var _server2 = _interopRequireDefault(_server);

var _Router = __webpack_require__(12);

var _Router2 = _interopRequireDefault(_Router);

var _Html = __webpack_require__(18);

var _Html2 = _interopRequireDefault(_Html);

var _App = __webpack_require__(19);

var _App2 = _interopRequireDefault(_App);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/*
 * Learning Isomorphic Web Application Development
 * Copyright © 2015 Konstantin Tarkus, Packt Publishing
 * All rights reserved.
 */

var server = (0, _express2.default)();
var port = process.env.PORT || 3000;

server.use(_express2.default.static(_path2.default.join(__dirname, 'public')));

server.get('*', function (req, res) {
  var component = _Router2.default.match(req);

  var body = _server2.default.renderToString(component);

  var html = _server2.default.renderToStaticMarkup(_react2.default.createElement(_Html2.default, {
    title: 'My App',
    description: 'Isomorphic web application sample',
    body: body
  }));

  res.send('<!doctype html>\n' + html);
});

server.listen(port, function () {
  return console.log('Node.js server is listening at http://localhost:' + port + '/');
});

/***/ }),
/* 8 */
/***/ (function(module, exports) {

module.exports = require("babel-core/register");

/***/ }),
/* 9 */
/***/ (function(module, exports) {

module.exports = require("path");

/***/ }),
/* 10 */
/***/ (function(module, exports) {

module.exports = require("express");

/***/ }),
/* 11 */
/***/ (function(module, exports) {

module.exports = require("react-dom/server");

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
/*
 * Learning Isomorphic Web Application Development
 * Copyright © 2016 Konstantin Tarkus, Packt Publishing
 */

var routes = [__webpack_require__(13).default, __webpack_require__(17).default];

var router = {
  match: function match(location) {
    var route = routes.find(function (x) {
      return x.path === location.path;
    });

    if (route) {
      try {
        return route.action();
      } catch (err) {
        return routes.find(function (x) {
          return x.path === '/500';
        }).action();
      }
    } else {
      return routes.find(function (x) {
        return x.path === '/404';
      }).action();
    }
  }
};

exports.default = router;

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getPrototypeOf = __webpack_require__(2);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(3);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(4);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(5);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(6);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _Layout = __webpack_require__(14);

var _Layout2 = _interopRequireDefault(_Layout);

var _Hero = __webpack_require__(16);

var _Hero2 = _interopRequireDefault(_Hero);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var path = '/'; /*
                 * Learning Isomorphic Web Application Development
                 * Copyright © 2016 Konstantin Tarkus, Packt Publishing
                 */

var action = function action() {
  return _react2.default.createElement(
    _Layout2.default,
    { hero: _react2.default.createElement(_Hero2.default, null) },
    _react2.default.createElement(Home, null)
  );
};

var Home = function (_Component) {
  (0, _inherits3.default)(Home, _Component);

  function Home() {
    (0, _classCallCheck3.default)(this, Home);
    return (0, _possibleConstructorReturn3.default)(this, (Home.__proto__ || (0, _getPrototypeOf2.default)(Home)).apply(this, arguments));
  }

  (0, _createClass3.default)(Home, [{
    key: 'handleClick',
    value: function handleClick(event) {
      event.preventDefault();
      window.location = event.currentTarget.pathname;
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          'h2',
          null,
          'Popular things to rent'
        ),
        _react2.default.createElement(
          'div',
          null,
          _react2.default.createElement(
            'a',
            { href: '/s/Tools', onClick: this.handleClick },
            _react2.default.createElement(
              'span',
              null,
              'Tools'
            )
          ),
          _react2.default.createElement(
            'a',
            { href: '/s/Books', onClick: this.handleClick },
            _react2.default.createElement(
              'span',
              null,
              'Books'
            )
          ),
          '...'
        )
      );
    }
  }]);
  return Home;
}(_react.Component);

exports.default = { path: path, action: action };

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _Header = __webpack_require__(15);

var _Header2 = _interopRequireDefault(_Header);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function Layout(_ref) {
  var hero = _ref.hero,
      children = _ref.children;

  return _react2.default.createElement(
    'div',
    null,
    _react2.default.createElement(
      _Header2.default,
      null,
      hero
    ),
    _react2.default.createElement(
      'main',
      null,
      children
    ),
    _react2.default.createElement(
      'footer',
      null,
      _react2.default.createElement(
        'span',
        null,
        '\xA9 Company Name'
      )
    )
  );
} /*
   * Learning Isomorphic Web Application Development
   * Copyright © 2016 Konstantin Tarkus, Packt Publishing
   */

Layout.propTypes = {
  hero: _propTypes2.default.element,
  children: _propTypes2.default.element.isRequired
};

exports.default = Layout;

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/*
 * Learning Isomorphic Web Application Development
 * Copyright © 2016 Konstantin Tarkus, Packt Publishing
 */

function Header(_ref) {
  var children = _ref.children;

  return _react2.default.createElement(
    'header',
    null,
    _react2.default.createElement(
      'div',
      null,
      _react2.default.createElement(
        'span',
        null,
        'My App'
      ),
      !children && _react2.default.createElement(
        'form',
        null,
        _react2.default.createElement('input', { type: 'search' })
      ),
      _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          'span',
          null,
          'Username'
        ),
        _react2.default.createElement('img', { src: '#' })
      )
    ),
    children
  );
}

Header.propTypes = {
  children: _propTypes2.default.element
};

exports.default = Header;

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function Hero() {
  return _react2.default.createElement(
    "div",
    null,
    _react2.default.createElement(
      "h2",
      null,
      "Rent Anything You Want"
    ),
    _react2.default.createElement(
      "p",
      null,
      "From people around you"
    ),
    _react2.default.createElement(
      "form",
      null,
      _react2.default.createElement("input", { type: "search", placeholder: "I want to rent..." }),
      _react2.default.createElement(
        "button",
        null,
        "Search"
      )
    )
  );
} /*
   * Learning Isomorphic Web Application Development
   * Copyright © 2016 Konstantin Tarkus, Packt Publishing
   */

exports.default = Hero;

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var path = '/404'; /*
                    * Learning Isomorphic Web Application Development
                    * Copyright © 2016 Konstantin Tarkus, Packt Publishing
                    */

var action = function action() {
  return _react2.default.createElement(NotFound, null);
};

function NotFound() {
  return _react2.default.createElement(
    'div',
    null,
    _react2.default.createElement(
      'h1',
      null,
      'Page Not Found'
    ),
    _react2.default.createElement(
      'p',
      null,
      'Sorry, but the page you were trying to view does not exist.'
    )
  );
}

exports.default = { path: path, action: action };

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/*
 * Learning Isomorphic Web Application Development
 * Copyright © 2015 Konstantin Tarkus, Packt Publishing
 * All rights reserved.
 */

function Html(_ref) {
  var title = _ref.title,
      description = _ref.description,
      body = _ref.body;

  return _react2.default.createElement(
    'html',
    null,
    _react2.default.createElement(
      'head',
      null,
      _react2.default.createElement('meta', { charSet: 'utf-8' }),
      _react2.default.createElement('meta', { httpEquiv: 'x-ua-compatible', content: 'ie=edge' }),
      _react2.default.createElement(
        'title',
        null,
        title
      ),
      _react2.default.createElement('meta', { name: 'description', content: description }),
      _react2.default.createElement('meta', { name: 'viewport', content: 'width=device-width, initial-scale=1' }),
      _react2.default.createElement('script', { src: 'client.js', async: true })
    ),
    _react2.default.createElement(
      'body',
      null,
      _react2.default.createElement('div', { id: 'app', dangerouslySetInnerHTML: { __html: body } })
    )
  );
}

Html.propTypes = {
  title: _propTypes2.default.string.isRequired,
  description: _propTypes2.default.string.isRequired,
  body: _propTypes2.default.string.isRequired
};

exports.default = Html;

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getPrototypeOf = __webpack_require__(2);

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = __webpack_require__(3);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(4);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(5);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(6);

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _moment = __webpack_require__(20);

var _moment2 = _interopRequireDefault(_moment);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/*
 * Learning Isomorphic Web Application Development
 * Copyright © 2016 Konstantin Tarkus, Packt Publishing
 */

var App = function (_Component) {
  (0, _inherits3.default)(App, _Component);

  function App(props) {
    (0, _classCallCheck3.default)(this, App);

    var _this = (0, _possibleConstructorReturn3.default)(this, (App.__proto__ || (0, _getPrototypeOf2.default)(App)).call(this, props));

    _this.state = { time: null };
    return _this;
  }

  (0, _createClass3.default)(App, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.tick();
      this.interval = setInterval(this.tick.bind(this), 200);
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      clearInterval(this.interval);
    }
  }, {
    key: 'tick',
    value: function tick() {
      this.setState({ time: new Date() });
    }
  }, {
    key: 'render',
    value: function render() {
      var time = this.state.time;
      var timeString = time && (0, _moment2.default)(time).format('h:mm:ss a');
      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          'h1',
          null,
          'Sample Application'
        ),
        _react2.default.createElement(
          'p',
          null,
          'Current date and time is ',
          timeString
        )
      );
    }
  }]);
  return App;
}(_react.Component);

exports.default = App;

/***/ }),
/* 20 */
/***/ (function(module, exports) {

module.exports = require("moment");

/***/ })
/******/ ]);