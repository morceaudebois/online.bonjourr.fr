"use strict";
(() => {
  var __create = Object.create;
  var __defProp = Object.defineProperty;
  var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __getProtoOf = Object.getPrototypeOf;
  var __hasOwnProp = Object.prototype.hasOwnProperty;
  var __commonJS = (cb, mod) => function __require() {
    return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
  };
  var __copyProps = (to, from, except, desc) => {
    if (from && typeof from === "object" || typeof from === "function") {
      for (let key of __getOwnPropNames(from))
        if (!__hasOwnProp.call(to, key) && key !== except)
          __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
    }
    return to;
  };
  var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
    isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
    mod
  ));

  // node_modules/.pnpm/lodash.debounce@4.0.8/node_modules/lodash.debounce/index.js
  var require_lodash = __commonJS({
    "node_modules/.pnpm/lodash.debounce@4.0.8/node_modules/lodash.debounce/index.js"(exports, module) {
      var FUNC_ERROR_TEXT = "Expected a function";
      var NAN = 0 / 0;
      var symbolTag = "[object Symbol]";
      var reTrim = /^\s+|\s+$/g;
      var reIsBadHex = /^[-+]0x[0-9a-f]+$/i;
      var reIsBinary = /^0b[01]+$/i;
      var reIsOctal = /^0o[0-7]+$/i;
      var freeParseInt = parseInt;
      var freeGlobal = typeof global == "object" && global && global.Object === Object && global;
      var freeSelf = typeof self == "object" && self && self.Object === Object && self;
      var root = freeGlobal || freeSelf || Function("return this")();
      var objectProto = Object.prototype;
      var objectToString = objectProto.toString;
      var nativeMax = Math.max;
      var nativeMin = Math.min;
      var now = function() {
        return root.Date.now();
      };
      function debounce3(func, wait, options) {
        var lastArgs, lastThis, maxWait, result, timerId, lastCallTime, lastInvokeTime = 0, leading = false, maxing = false, trailing = true;
        if (typeof func != "function") {
          throw new TypeError(FUNC_ERROR_TEXT);
        }
        wait = toNumber(wait) || 0;
        if (isObject(options)) {
          leading = !!options.leading;
          maxing = "maxWait" in options;
          maxWait = maxing ? nativeMax(toNumber(options.maxWait) || 0, wait) : maxWait;
          trailing = "trailing" in options ? !!options.trailing : trailing;
        }
        function invokeFunc(time) {
          var args = lastArgs, thisArg = lastThis;
          lastArgs = lastThis = void 0;
          lastInvokeTime = time;
          result = func.apply(thisArg, args);
          return result;
        }
        function leadingEdge(time) {
          lastInvokeTime = time;
          timerId = setTimeout(timerExpired, wait);
          return leading ? invokeFunc(time) : result;
        }
        function remainingWait(time) {
          var timeSinceLastCall = time - lastCallTime, timeSinceLastInvoke = time - lastInvokeTime, result2 = wait - timeSinceLastCall;
          return maxing ? nativeMin(result2, maxWait - timeSinceLastInvoke) : result2;
        }
        function shouldInvoke(time) {
          var timeSinceLastCall = time - lastCallTime, timeSinceLastInvoke = time - lastInvokeTime;
          return lastCallTime === void 0 || timeSinceLastCall >= wait || timeSinceLastCall < 0 || maxing && timeSinceLastInvoke >= maxWait;
        }
        function timerExpired() {
          var time = now();
          if (shouldInvoke(time)) {
            return trailingEdge(time);
          }
          timerId = setTimeout(timerExpired, remainingWait(time));
        }
        function trailingEdge(time) {
          timerId = void 0;
          if (trailing && lastArgs) {
            return invokeFunc(time);
          }
          lastArgs = lastThis = void 0;
          return result;
        }
        function cancel() {
          if (timerId !== void 0) {
            clearTimeout(timerId);
          }
          lastInvokeTime = 0;
          lastArgs = lastCallTime = lastThis = timerId = void 0;
        }
        function flush() {
          return timerId === void 0 ? result : trailingEdge(now());
        }
        function debounced() {
          var time = now(), isInvoking = shouldInvoke(time);
          lastArgs = arguments;
          lastThis = this;
          lastCallTime = time;
          if (isInvoking) {
            if (timerId === void 0) {
              return leadingEdge(lastCallTime);
            }
            if (maxing) {
              timerId = setTimeout(timerExpired, wait);
              return invokeFunc(lastCallTime);
            }
          }
          if (timerId === void 0) {
            timerId = setTimeout(timerExpired, wait);
          }
          return result;
        }
        debounced.cancel = cancel;
        debounced.flush = flush;
        return debounced;
      }
      function isObject(value) {
        var type = typeof value;
        return !!value && (type == "object" || type == "function");
      }
      function isObjectLike(value) {
        return !!value && typeof value == "object";
      }
      function isSymbol(value) {
        return typeof value == "symbol" || isObjectLike(value) && objectToString.call(value) == symbolTag;
      }
      function toNumber(value) {
        if (typeof value == "number") {
          return value;
        }
        if (isSymbol(value)) {
          return NAN;
        }
        if (isObject(value)) {
          var other = typeof value.valueOf == "function" ? value.valueOf() : value;
          value = isObject(other) ? other + "" : other;
        }
        if (typeof value != "string") {
          return value === 0 ? value : +value;
        }
        value = value.replace(reTrim, "");
        var isBinary = reIsBinary.test(value);
        return isBinary || reIsOctal.test(value) ? freeParseInt(value.slice(2), isBinary ? 2 : 8) : reIsBadHex.test(value) ? NAN : +value;
      }
      module.exports = debounce3;
    }
  });

  // node_modules/.pnpm/lodash.throttle@4.1.1/node_modules/lodash.throttle/index.js
  var require_lodash2 = __commonJS({
    "node_modules/.pnpm/lodash.throttle@4.1.1/node_modules/lodash.throttle/index.js"(exports, module) {
      var FUNC_ERROR_TEXT = "Expected a function";
      var NAN = 0 / 0;
      var symbolTag = "[object Symbol]";
      var reTrim = /^\s+|\s+$/g;
      var reIsBadHex = /^[-+]0x[0-9a-f]+$/i;
      var reIsBinary = /^0b[01]+$/i;
      var reIsOctal = /^0o[0-7]+$/i;
      var freeParseInt = parseInt;
      var freeGlobal = typeof global == "object" && global && global.Object === Object && global;
      var freeSelf = typeof self == "object" && self && self.Object === Object && self;
      var root = freeGlobal || freeSelf || Function("return this")();
      var objectProto = Object.prototype;
      var objectToString = objectProto.toString;
      var nativeMax = Math.max;
      var nativeMin = Math.min;
      var now = function() {
        return root.Date.now();
      };
      function debounce3(func, wait, options) {
        var lastArgs, lastThis, maxWait, result, timerId, lastCallTime, lastInvokeTime = 0, leading = false, maxing = false, trailing = true;
        if (typeof func != "function") {
          throw new TypeError(FUNC_ERROR_TEXT);
        }
        wait = toNumber(wait) || 0;
        if (isObject(options)) {
          leading = !!options.leading;
          maxing = "maxWait" in options;
          maxWait = maxing ? nativeMax(toNumber(options.maxWait) || 0, wait) : maxWait;
          trailing = "trailing" in options ? !!options.trailing : trailing;
        }
        function invokeFunc(time) {
          var args = lastArgs, thisArg = lastThis;
          lastArgs = lastThis = void 0;
          lastInvokeTime = time;
          result = func.apply(thisArg, args);
          return result;
        }
        function leadingEdge(time) {
          lastInvokeTime = time;
          timerId = setTimeout(timerExpired, wait);
          return leading ? invokeFunc(time) : result;
        }
        function remainingWait(time) {
          var timeSinceLastCall = time - lastCallTime, timeSinceLastInvoke = time - lastInvokeTime, result2 = wait - timeSinceLastCall;
          return maxing ? nativeMin(result2, maxWait - timeSinceLastInvoke) : result2;
        }
        function shouldInvoke(time) {
          var timeSinceLastCall = time - lastCallTime, timeSinceLastInvoke = time - lastInvokeTime;
          return lastCallTime === void 0 || timeSinceLastCall >= wait || timeSinceLastCall < 0 || maxing && timeSinceLastInvoke >= maxWait;
        }
        function timerExpired() {
          var time = now();
          if (shouldInvoke(time)) {
            return trailingEdge(time);
          }
          timerId = setTimeout(timerExpired, remainingWait(time));
        }
        function trailingEdge(time) {
          timerId = void 0;
          if (trailing && lastArgs) {
            return invokeFunc(time);
          }
          lastArgs = lastThis = void 0;
          return result;
        }
        function cancel() {
          if (timerId !== void 0) {
            clearTimeout(timerId);
          }
          lastInvokeTime = 0;
          lastArgs = lastCallTime = lastThis = timerId = void 0;
        }
        function flush() {
          return timerId === void 0 ? result : trailingEdge(now());
        }
        function debounced() {
          var time = now(), isInvoking = shouldInvoke(time);
          lastArgs = arguments;
          lastThis = this;
          lastCallTime = time;
          if (isInvoking) {
            if (timerId === void 0) {
              return leadingEdge(lastCallTime);
            }
            if (maxing) {
              timerId = setTimeout(timerExpired, wait);
              return invokeFunc(lastCallTime);
            }
          }
          if (timerId === void 0) {
            timerId = setTimeout(timerExpired, wait);
          }
          return result;
        }
        debounced.cancel = cancel;
        debounced.flush = flush;
        return debounced;
      }
      function throttle2(func, wait, options) {
        var leading = true, trailing = true;
        if (typeof func != "function") {
          throw new TypeError(FUNC_ERROR_TEXT);
        }
        if (isObject(options)) {
          leading = "leading" in options ? !!options.leading : leading;
          trailing = "trailing" in options ? !!options.trailing : trailing;
        }
        return debounce3(func, wait, {
          "leading": leading,
          "maxWait": wait,
          "trailing": trailing
        });
      }
      function isObject(value) {
        var type = typeof value;
        return !!value && (type == "object" || type == "function");
      }
      function isObjectLike(value) {
        return !!value && typeof value == "object";
      }
      function isSymbol(value) {
        return typeof value == "symbol" || isObjectLike(value) && objectToString.call(value) == symbolTag;
      }
      function toNumber(value) {
        if (typeof value == "number") {
          return value;
        }
        if (isSymbol(value)) {
          return NAN;
        }
        if (isObject(value)) {
          var other = typeof value.valueOf == "function" ? value.valueOf() : value;
          value = isObject(other) ? other + "" : other;
        }
        if (typeof value != "string") {
          return value === 0 ? value : +value;
        }
        value = value.replace(reTrim, "");
        var isBinary = reIsBinary.test(value);
        return isBinary || reIsOctal.test(value) ? freeParseInt(value.slice(2), isBinary ? 2 : 8) : reIsBadHex.test(value) ? NAN : +value;
      }
      module.exports = throttle2;
    }
  });

  // src/scripts/index.ts
  var import_lodash3 = __toESM(require_lodash());

  // node_modules/.pnpm/snarkdown@2.0.0/node_modules/snarkdown/dist/snarkdown.es.js
  var e = { "": ["<em>", "</em>"], _: ["<strong>", "</strong>"], "*": ["<strong>", "</strong>"], "~": ["<s>", "</s>"], "\n": ["<br />"], " ": ["<br />"], "-": ["<hr />"] };
  function n(e2) {
    return e2.replace(RegExp("^" + (e2.match(/^(\t| )+/) || "")[0], "gm"), "");
  }
  function r(e2) {
    return (e2 + "").replace(/"/g, "&quot;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
  }
  function t(a, c) {
    var o, l, g, s, p, u = /((?:^|\n+)(?:\n---+|\* \*(?: \*)+)\n)|(?:^``` *(\w*)\n([\s\S]*?)\n```$)|((?:(?:^|\n+)(?:\t|  {2,}).+)+\n*)|((?:(?:^|\n)([>*+-]|\d+\.)\s+.*)+)|(?:!\[([^\]]*?)\]\(([^)]+?)\))|(\[)|(\](?:\(([^)]+?)\))?)|(?:(?:^|\n+)([^\s].*)\n(-{3,}|={3,})(?:\n+|$))|(?:(?:^|\n+)(#{1,6})\s*(.+)(?:\n+|$))|(?:`([^`].*?)`)|(  \n\n*|\n{2,}|__|\*\*|[_*]|~~)/gm, m = [], h = "", i = c || {}, d = 0;
    function f(n2) {
      var r2 = e[n2[1] || ""], t2 = m[m.length - 1] == n2;
      return r2 ? r2[1] ? (t2 ? m.pop() : m.push(n2), r2[0 | t2]) : r2[0] : n2;
    }
    function $2() {
      for (var e2 = ""; m.length; )
        e2 += f(m[m.length - 1]);
      return e2;
    }
    for (a = a.replace(/^\[(.+?)\]:\s*(.+)$/gm, function(e2, n2, r2) {
      return i[n2.toLowerCase()] = r2, "";
    }).replace(/^\n+|\n+$/g, ""); g = u.exec(a); )
      l = a.substring(d, g.index), d = u.lastIndex, o = g[0], l.match(/[^\\](\\\\)*\\$/) || ((p = g[3] || g[4]) ? o = '<pre class="code ' + (g[4] ? "poetry" : g[2].toLowerCase()) + '"><code' + (g[2] ? ' class="language-' + g[2].toLowerCase() + '"' : "") + ">" + n(r(p).replace(/^\n+|\n+$/g, "")) + "</code></pre>" : (p = g[6]) ? (p.match(/\./) && (g[5] = g[5].replace(/^\d+/gm, "")), s = t(n(g[5].replace(/^\s*[>*+.-]/gm, ""))), ">" == p ? p = "blockquote" : (p = p.match(/\./) ? "ol" : "ul", s = s.replace(/^(.*)(\n|$)/gm, "<li>$1</li>")), o = "<" + p + ">" + s + "</" + p + ">") : g[8] ? o = '<img src="' + r(g[8]) + '" alt="' + r(g[7]) + '">' : g[10] ? (h = h.replace("<a>", '<a href="' + r(g[11] || i[l.toLowerCase()]) + '">'), o = $2() + "</a>") : g[9] ? o = "<a>" : g[12] || g[14] ? o = "<" + (p = "h" + (g[14] ? g[14].length : g[13] > "=" ? 1 : 2)) + ">" + t(g[12] || g[15], i) + "</" + p + ">" : g[16] ? o = "<code>" + r(g[16]) + "</code>" : (g[17] || g[1]) && (o = f(g[17] || "--"))), h += l, h += o;
    return (h + a.substring(d) + $2()).replace(/^\n+|\n+$/g, "");
  }

  // src/scripts/lang.ts
  var dict = {
    "New tab": {
      fr: "Nouvel onglet",
      sv: "Ny flik",
      nl: "Nieuw tabblad",
      pl: "Nowa karta",
      pt_BR: "Nova Aba",
      ru: "\u041D\u043E\u0432\u0430\u044F \u0432\u043A\u043B\u0430\u0434\u043A\u0430",
      zh_CN: "\u65B0\u6807\u7B7E\u9875",
      sk: "Nov\xE1 karta",
      de: "Neuer Tab",
      it: "Nuova scheda",
      es: "Nueva Pesta\xF1a",
      tr: "Yeni Sekme",
      uk: "\u041D\u043E\u0432\u0430 \u0432\u043A\u043B\u0430\u0434\u043A\u0430",
      id: "Tab Baru",
      da: "Nyt faneblad"
    },
    Consider: {
      fr: "N'h\xE9sitez pas \xE0",
      sv: "\xD6verv\xE4ga",
      nl: "Overweeg te",
      pl: "Rozwa\u017C",
      pt_BR: "Considere",
      ru: "\u0420\u0430\u0441\u0441\u043C\u043E\u0442\u0440\u0438\u0442\u0435 \u0432\u043E\u0437\u043C\u043E\u0436\u043D\u043E\u0441\u0442\u044C",
      zh_CN: "\u60A8\u53EF\u4EE5\u8003\u8651",
      sk: "Zv\xE1\u017Ete",
      de: "Erw\xE4gen Sie eine",
      it: "Considera di",
      es: "Considera",
      tr: "\u0130stersen",
      uk: "\u041F\u043E\u0434\u0443\u043C\u0430\u0439\u0442\u0435 \u043F\u0440\u043E \u0442\u0435,",
      id: "Mempertimbangkan",
      da: "Overvej"
    },
    donating: {
      fr: "faire un don",
      sv: "donera",
      nl: "doneren",
      pl: "przekazanie darowizny",
      pt_BR: "fazer uma doa\xE7\xE3o",
      ru: "\u043F\u043E\u0436\u0435\u0440\u0442\u0432\u043E\u0432\u0430\u043D\u0438\u044F",
      zh_CN: "\u5411\u6211\u4EEC\u6350\u6B3E",
      sk: "darovanie",
      de: "Spende",
      it: "fare una donazione",
      es: "hacer una donaci\xF3n",
      tr: "ba\u011F\u0131\u015F yap",
      uk: "\u0449\u043E\u0431 \u0437\u0440\u043E\u0431\u0438\u0442\u0438 \u043F\u043E\u0436\u0435\u0440\u0442\u0432\u0443\u0432\u0430\u043D\u043D\u044F,",
      id: "menyumbang",
      da: "at donere"
    },
    "if you love Bonjourr": {
      fr: "si vous aimez Bonjourr",
      sv: "om du \xE4lskar Bonjourr",
      nl: "als je van Bonjourr houdt",
      pl: "je\u015Bli kochasz Bonjourr",
      pt_BR: "se voc\xEA ama o Bonjourr",
      ru: "\u0435\u0441\u043B\u0438 \u0432\u0430\u043C \u043D\u0440\u0430\u0432\u0438\u0442\u0441\u044F Bonjourr",
      zh_CN: "\u6765\u652F\u6301 Bonjourr",
      sk: "Ak miluje\u0161 Bonjourra",
      de: "wenn Sie Bonjourr lieben",
      it: "se ami Bonjourr",
      es: "si amas Bonjourr",
      tr: "tabi Bonjourr'u seviyorsan",
      uk: "\u044F\u043A\u0449\u043E \u0412\u0430\u043C \u043F\u043E\u0434\u043E\u0431\u0430\u0454\u0442\u044C\u0441\u044F Bonjourr",
      id: "jika Anda menyukai Bonjourr",
      da: "hvis du elsker Bonjourr"
    },
    "Love using Bonjourr? Consider giving us a review or donating, that would help a lot! \u{1F607}": {
      fr: "Vous aimez utiliser Bonjourr ? Pensez \xE0 nous noter ou faire un don, \xE7a serait super ! \u{1F607}",
      sv: "\xC4lskar du att anv\xE4nda Bonjourr? \xD6verv\xE4g att ge oss en recension eller donera, det skulle hj\xE4lpa mycket! \u{1F607}",
      nl: "Ben je dol op het gebruik van Bonjourr? Overweeg om ons een recensie te geven of te doneren, dat zou veel helpen! \u{1F607}",
      pl: "Uwielbiasz korzysta\u0107 z Bonjourr? Zastan\xF3w si\u0119 nad wystawieniem nam recenzji lub darowizny, bardzo nam to pomo\u017Ce! \u{1F607}",
      pt_BR: "Gosta de usar o Bonjourr? Considere nos avaliar ou fa\xE7a uma doa\xE7\xE3o, isso ajudaria muito! \u{1F607}",
      ru: "\u041D\u0440\u0430\u0432\u0438\u0442\u0441\u044F Bonjourr? \u041F\u043E\u0434\u0443\u043C\u0430\u0439\u0442\u0435 \u043E \u0442\u043E\u043C, \u0447\u0442\u043E\u0431\u044B \u043E\u0441\u0442\u0430\u0432\u0438\u0442\u044C \u043E\u0442\u0437\u044B\u0432 \u0438\u043B\u0438 \u0441\u0434\u0435\u043B\u0430\u0442\u044C \u043D\u0430\u043C \u043F\u043E\u0436\u0435\u0440\u0442\u0432\u043E\u0432\u0430\u043D\u0438\u0435, \u044D\u0442\u043E \u043E\u0447\u0435\u043D\u044C \u043F\u043E\u043C\u043E\u0436\u0435\u0442! \u{1F607}",
      zh_CN: "\u559C\u6B22\u4F7F\u7528 Bonjourr\uFF1F \u8003\u8651\u7ED9\u6211\u4EEC\u4E00\u4E2A\u8BC4\u8BBA\u6216\u6350\u8D60\uFF0C\u8FD9\u4F1A\u5F88\u6709\u5E2E\u52A9\uFF01 \u{1F607}",
      sk: "M\xE1te radi pou\u017E\xEDvanie Bonjourru? Sk\xFAste n\xE1m da\u0165 recenziu alebo darova\u0165, to by ve\u013Emi pomohlo! \u{1F607}",
      de: "Lieben Sie es, Bonjourr zu nutzen? Erw\xE4gen Sie, uns eine Bewertung zu geben oder zu spenden, das w\xFCrde viel helfen! \u{1F607}",
      it: "Ti piace usare Bonjourr? Considera di darci una recensione o di fare una donazione, sarebbe di grande aiuto! ?",
      es: "\xBFTe encanta usar Bonjourr? Considera darnos una rese\xF1a o hacer una donaci\xF3n, \xA1eso nos ayudar\xEDa mucho! \u{1F607}",
      tr: "Bonjourr'u kullanmay\u0131 seviyor musunuz? Bize bir inceleme yazmay\u0131 veya ba\u011F\u0131\u015F yapmay\u0131 d\xFC\u015F\xFCn\xFCn, bu \xE7ok yard\u0131mc\u0131 olacakt\u0131r! \u{1F607}",
      uk: "\u041F\u043E\u0434\u043E\u0431\u0430\u0454\u0442\u044C\u0441\u044F Bonjourr? \u0417\u0430\u043B\u0438\u0448\u0442\u0435 \u0432\u0456\u0434\u0433\u0443\u043A \u0430\u0431\u043E \u043F\u043E\u0436\u0435\u0440\u0442\u0432\u0443\u0439\u0442\u0435, \u0446\u0435 \u0434\u0443\u0436\u0435 \u043D\u0430\u043C \u0434\u043E\u043F\u043E\u043C\u043E\u0436\u0435! \u{1F607}",
      id: "Suka menggunakan Bonjourr? Pertimbangkan untuk memberi kami ulasan atau donasi, itu akan sangat membantu! ",
      da: "Elsker du at bruge Bonjourr? Overvej at give os en anmeldelse eller en donation, det vil hj\xE6lpe meget \u{1F607}"
    },
    Review: {
      fr: "Noter",
      sv: "Recension",
      nl: "Beoordeling",
      pl: "Przejrzyj",
      pt_BR: "Avalie",
      ru: "\u041E\u0441\u0442\u0430\u0432\u0438\u0442\u044C \u043E\u0442\u0437\u044B\u0432",
      zh_CN: "\u5BA1\u67E5",
      sk: "Presk\xFAmanie",
      de: "Rezension",
      it: "Recensione",
      es: "Revisar",
      tr: "\u0130nceleme",
      uk: "\u0417\u0430\u043B\u0438\u0448\u0438\u0442\u0438 \u0432\u0456\u0434\u0433\u0443\u043A",
      id: "Ulasan",
      da: "Anmeldelse"
    },
    Donate: {
      fr: "Faire un don",
      sv: "Donera",
      nl: "Doneer",
      pl: "Podarowa\u0107",
      pt_BR: "Doe",
      ru: "\u041F\u043E\u0436\u0435\u0440\u0442\u0432\u043E\u0432\u0430\u0442\u044C",
      zh_CN: "\u6350",
      sk: "Darova\u0165",
      de: "Spenden",
      it: "Donare",
      es: "Donar",
      tr: "Ba\u011F\u0131\u015F",
      uk: "\u041F\u043E\u0436\u0435\u0440\u0442\u0432\u0443\u0432\u0430\u0442\u0438",
      id: "Donasi",
      da: "Donere"
    },
    Cancel: {
      fr: "Annuler",
      sv: "Avbryt",
      nl: "Annuleren",
      pl: "Anuluj",
      pt_BR: "Cancelar",
      ru: "\u041E\u0442\u043C\u0435\u043D\u0430",
      zh_CN: "\u53D6\u6D88",
      sk: "Zru\u0161i\u0165",
      de: "Abbrechen",
      it: "Annulla",
      es: "Cancelar",
      tr: "\u0130ptal",
      uk: "\u0421\u043A\u0430\u0441\u0443\u0432\u0430\u0442\u0438",
      id: "Batal",
      da: "Afbryd"
    },
    Delete: {
      fr: "Supprimer",
      sv: "Radera",
      nl: "Verwijderen",
      pl: "Usu\u0144",
      pt_BR: "Deletar",
      ru: "\u0423\u0434\u0430\u043B\u0438\u0442\u044C",
      zh_CN: "\u5220\u9664\u5FEB\u901F\u94FE\u63A5",
      sk: "Odstr\xE1ni\u0165",
      de: "L\xF6schen",
      it: "Elimina",
      es: "Eliminar",
      tr: "Sil",
      uk: "\u0412\u0438\u0434\u0430\u043B\u0438\u0442\u0438",
      id: "Hapus",
      da: "Slet"
    },
    "Apply changes": {
      fr: "Enregistrer",
      sv: "Applicera f\xF6r\xE4ndringar",
      nl: "Wijzigingen toepassen",
      pl: "Zatwierd\u017A zmiany",
      pt_BR: "Aplicar mudan\xE7as",
      ru: "\u041F\u0440\u0438\u043C\u0435\u043D\u0438\u0442\u044C \u0438\u0437\u043C\u0435\u043D\u0435\u043D\u0438\u044F",
      zh_CN: "\u4FDD\u5B58\u66F4\u6539",
      sk: "Aplikova\u0165 zmeny",
      de: "\xC4nderungen \xFCbernehmen",
      it: "Applica modifiche",
      es: "Aplicar cambios",
      tr: "De\u011Fi\u015Fiklikleri uygula",
      uk: "\u0417\u0431\u0435\u0440\u0435\u0433\u0442\u0438 \u0437\u043C\u0456\u043D\u0438",
      id: "Terapkan Perubahan",
      da: "Anvend \xE6ndringer"
    },
    Monday: {
      fr: "Lundi",
      sv: "M\xE5ndag",
      nl: "Maandag",
      pl: "poniedzia\u0142ek",
      pt_BR: "Segunda",
      ru: "\u041F\u043E\u043D\u0435\u0434\u0435\u043B\u044C\u043D\u0438\u043A",
      zh_CN: "\u661F\u671F\u4E00",
      sk: "Pondelok",
      de: "Montag",
      it: "Luned\xEC",
      es: "Lunes",
      tr: "Pazartesi",
      uk: "\u041F\u043E\u043D\u0435\u0434\u0456\u043B\u043E\u043A",
      id: "Senin",
      da: "Mandag"
    },
    Tuesday: {
      fr: "Mardi",
      sv: "Tisdag",
      nl: "Dinsdag",
      pl: "wtorek",
      pt_BR: "Ter\xE7a",
      ru: "\u0412\u0442\u043E\u0440\u043D\u0438\u043A",
      zh_CN: "\u661F\u671F\u4E8C",
      sk: "Utorok",
      de: "Dienstag",
      it: "Marted\xEC",
      es: "Martes",
      tr: "Sal\u0131",
      uk: "\u0412\u0456\u0432\u0442\u043E\u0440\u043E\u043A",
      id: "Selasa",
      da: "Tirsdag"
    },
    Wednesday: {
      fr: "Mercredi",
      sv: "Onsdag",
      nl: "Woensdag",
      pl: "\u015Broda",
      pt_BR: "Quarta",
      ru: "\u0421\u0440\u0435\u0434\u0430",
      zh_CN: "\u661F\u671F\u4E09",
      sk: "Streda",
      de: "Mittwoch",
      it: "Mercoled\xEC",
      es: "Mi\xE9rcoles",
      tr: "\xC7ar\u015Famba",
      uk: "\u0421\u0435\u0440\u0435\u0434\u0430",
      id: "Rabu",
      da: "Onsdag"
    },
    Thursday: {
      fr: "Jeudi",
      sv: "Torsdag",
      nl: "Donderdag",
      pl: "czwartek",
      pt_BR: "Quinta",
      ru: "\u0427\u0435\u0442\u0432\u0435\u0440\u0433",
      zh_CN: "\u661F\u671F\u56DB",
      sk: "\u0160tvrtok",
      de: "Donnerstag",
      it: "Gioved\xEC",
      es: "Jueves",
      tr: "Per\u015Fembe",
      uk: "\u0427\u0435\u0442\u0432\u0435\u0440",
      id: "Kamis",
      da: "Torsdag"
    },
    Friday: {
      fr: "Vendredi",
      sv: "Fredag",
      nl: "Vrijdag",
      pl: "pi\u0105tek",
      pt_BR: "Sexta",
      ru: "\u041F\u044F\u0442\u043D\u0438\u0446\u0430",
      zh_CN: "\u661F\u671F\u4E94",
      sk: "Piatok",
      de: "Freitag",
      it: "Venerd\xEC",
      es: "Viernes",
      tr: "Cuma",
      uk: "\u041F'\u044F\u0442\u043D\u0438\u0446\u044F",
      id: "Jumat",
      da: "Fredag"
    },
    Saturday: {
      fr: "Samedi",
      sv: "L\xF6rdag",
      nl: "Zaterdag",
      pl: "sobota",
      pt_BR: "S\xE1bado",
      ru: "\u0421\u0443\u0431\u0431\u043E\u0442\u0430",
      zh_CN: "\u661F\u671F\u516D",
      sk: "Sobota",
      de: "Samstag",
      it: "Sabato",
      es: "S\xE1bado",
      tr: "Cumartesi",
      uk: "\u0421\u0443\u0431\u0431\u043E\u0442\u0430",
      id: "Sabtu",
      da: "L\xF8rdag"
    },
    Sunday: {
      fr: "Dimanche",
      sv: "S\xF6ndag",
      nl: "Zondag",
      pl: "niedziela",
      pt_BR: "Domingo",
      ru: "\u0412\u043E\u0441\u043A\u0440\u0435\u0441\u0435\u043D\u044C\u0435",
      zh_CN: "\u661F\u671F\u65E5",
      sk: "Nede\u013Ea",
      de: "Sonntag",
      it: "Domenica",
      es: "Domingo",
      tr: "Pazar",
      uk: "\u041D\u0435\u0434\u0456\u043B\u044F",
      id: "Minggu",
      da: "S\xF8ndag"
    },
    January: {
      fr: "Janvier",
      sv: "Januari",
      nl: "Januari",
      pl: "stycze\u0144",
      pt_BR: "Janeiro",
      ru: "\u044F\u043D\u0432\u0430\u0440\u044F",
      zh_CN: "1\u6708",
      sk: "Janu\xE1r",
      de: "Januar",
      it: "Gennaio",
      es: "Enero",
      tr: "Ocak",
      uk: "\u0441\u0456\u0447\u043D\u044F",
      id: "Januari",
      da: "januar"
    },
    February: {
      fr: "F\xE9vrier",
      sv: "Februari",
      nl: "Februari",
      pl: "luty",
      pt_BR: "Fevereiro",
      ru: "\u0444\u0435\u0432\u0440\u0430\u043B\u044F",
      zh_CN: "2\u6708",
      sk: "Febru\xE1r",
      de: "Februar",
      it: "Febbraio",
      es: "Febrero",
      tr: "\u015Eubat",
      uk: "\u043B\u044E\u0442\u0435",
      id: "Februari",
      da: "februar"
    },
    March: {
      fr: "Mars",
      sv: "Mars",
      nl: "Maart",
      pl: "marzec",
      pt_BR: "Mar\xE7o",
      ru: "\u043C\u0430\u0440\u0442\u0430",
      zh_CN: "3\u6708",
      sk: "Marec",
      de: "M\xE4rz",
      it: "Marzo",
      es: "Marzo",
      tr: "Mart",
      uk: "\u0431\u0435\u0440\u0435\u0437\u043D\u044F",
      id: "Maret",
      da: "marts"
    },
    April: {
      fr: "Avril",
      sv: "April",
      nl: "April",
      pl: "kwiecie\u0144",
      pt_BR: "Abril",
      ru: "\u0430\u043F\u0440\u0435\u043B\u044F",
      zh_CN: "4\u6708",
      sk: "Apr\xEDl",
      de: "April",
      it: "Aprile",
      es: "Abril",
      tr: "Nisan",
      uk: "\u043A\u0432\u0456\u0442\u043D\u044F",
      id: "April",
      da: "april"
    },
    May: {
      fr: "Mai",
      sv: "Maj",
      nl: "Mei",
      pl: "maj",
      pt_BR: "Maio",
      ru: "\u043C\u0430\u044F",
      zh_CN: "5\u6708",
      sk: "M\xE1j",
      de: "Mai",
      it: "Maggio",
      es: "Mayo",
      tr: "May\u0131s",
      uk: "\u0442\u0440\u0430\u0432\u043D\u044F",
      id: "Mei",
      da: "maj"
    },
    June: {
      fr: "Juin",
      sv: "Juni",
      nl: "Juni",
      pl: "czerwiec",
      pt_BR: "Junho",
      ru: "\u0438\u044E\u043D\u044F",
      zh_CN: "6\u6708",
      sk: "J\xFAn",
      de: "Juni",
      it: "Giugno",
      es: "Junio",
      tr: "Haziran",
      uk: "\u0447\u0435\u0440\u0432\u043D\u044F",
      id: "Juni",
      da: "juni"
    },
    July: {
      fr: "Juillet",
      sv: "Juli",
      nl: "Juli",
      pl: "lipiec",
      pt_BR: "Julho",
      ru: "\u0438\u044E\u043B\u044F",
      zh_CN: "7\u6708",
      sk: "J\xFAl",
      de: "Juli",
      it: "Luglio",
      es: "Julio",
      tr: "Temmuz",
      uk: "\u043B\u0438\u043F\u043D\u044F",
      id: "Juli",
      da: "juli"
    },
    August: {
      fr: "Ao\xFBt",
      sv: "Augusti",
      nl: "Augustus",
      pl: "sierpie\u0144",
      pt_BR: "Agosto",
      ru: "\u0430\u0432\u0433\u0443\u0441\u0442\u0430",
      zh_CN: "8\u6708",
      sk: "August",
      de: "August",
      it: "Agosto",
      es: "Agosto",
      tr: "A\u011Fustos",
      uk: "\u0441\u0435\u0440\u043F\u043D\u044F",
      id: "Agustus",
      da: "august"
    },
    September: {
      fr: "Septembre",
      sv: "September",
      nl: "September",
      pl: "wrzesie\u0144",
      pt_BR: "Setembro",
      ru: "\u0441\u0435\u043D\u0442\u044F\u0431\u0440\u044F",
      zh_CN: "9\u6708",
      sk: "Spetember",
      de: "September",
      it: "Settembre",
      es: "Septiembre",
      tr: "Eyl\xFCl",
      uk: "\u0432\u0435\u0440\u0435\u0441\u043D\u044F",
      id: "September",
      da: "september"
    },
    October: {
      fr: "Octobre",
      sv: "Oktober",
      nl: "Oktober",
      pl: "pa\u017Adziernik",
      pt_BR: "Outubro",
      ru: "\u043E\u043A\u0442\u044F\u0431\u0440\u044F",
      zh_CN: "10\u6708",
      sk: "Okt\xF3ber",
      de: "Oktober",
      it: "Ottobre",
      es: "Octubre",
      tr: "Ekim",
      uk: "\u0436\u043E\u0432\u0442\u043D\u044F",
      id: "Oktober",
      da: "oktober"
    },
    November: {
      fr: "Novembre",
      sv: "November",
      nl: "november",
      pl: "listopad",
      pt_BR: "Novembro",
      ru: "\u043D\u043E\u044F\u0431\u0440\u044F",
      zh_CN: "11\u6708",
      sk: "November",
      de: "November",
      it: "Novembre",
      es: "Noviembre",
      tr: "Kas\u0131m",
      uk: "\u043B\u0438\u0441\u0442\u043E\u043F\u0430\u0434\u0430",
      id: "November",
      da: "november"
    },
    December: {
      fr: "D\xE9cembre",
      sv: "December",
      nl: "December",
      pl: "grudzie\u0144",
      pt_BR: "Dezembro",
      ru: "\u0434\u0435\u043A\u0430\u0431\u0440\u044F",
      zh_CN: "12\u6708",
      sk: "December",
      de: "Dezember",
      it: "Dicembre",
      es: "Diciembre",
      tr: "Aral\u0131k",
      uk: "\u0433\u0440\u0443\u0434\u043D\u044F",
      id: "Desember",
      da: "december"
    },
    "Good morning": {
      fr: "Bonjour",
      sv: "Godmorgon",
      nl: "Goedemorgen",
      pl: "Dzie\u0144 dobry",
      pt_BR: "Bom dia",
      ru: "\u0414\u043E\u0431\u0440\u043E\u0435 \u0443\u0442\u0440\u043E!",
      zh_CN: "\u65E9\u4E0A\u597D",
      sk: "Dobr\xE9 r\xE1no",
      de: "Guten Morgen",
      it: "Buongiorno",
      es: "Buenos d\xEDas",
      tr: "G\xFCnayd\u0131n",
      uk: "\u0414\u043E\u0431\u0440\u043E\u0433\u043E \u0440\u0430\u043D\u043A\u0443",
      id: "Selamat pagi",
      da: "Godmorgen"
    },
    "Good afternoon": {
      fr: "Bonjour",
      sv: "Goddag",
      nl: "Goedemiddag",
      pl: "Mi\u0142ego popo\u0142udia",
      pt_BR: "Boa tarde",
      ru: "\u0414\u043E\u0431\u0440\u044B\u0439 \u0434\u0435\u043D\u044C!",
      zh_CN: "\u4E0B\u5348\u597D",
      sk: "Dobr\xFD de\u0148",
      de: "Guten Tag",
      it: "Buon pomeriggio",
      es: "Buenas tardes",
      tr: "T\xFCnayd\u0131n",
      uk: "\u0414\u043E\u0431\u0440\u0438\u0439 \u0434\u0435\u043D\u044C",
      id: "Selamat siang",
      da: "God eftermiddag"
    },
    "Good evening": {
      fr: "Bonsoir",
      sv: "God kv\xE4ll",
      nl: "Goedenavond",
      pl: "Dobry wiecz\xF3r",
      pt_BR: "Boa noite",
      ru: "\u0414\u043E\u0431\u0440\u044B\u0439 \u0432\u0435\u0447\u0435\u0440!",
      zh_CN: "\u665A\u4E0A\u597D",
      sk: "Dobr\xFD ve\u010Der",
      de: "Guten Abend",
      it: "Buonasera",
      es: "Buenas noches",
      tr: "\u0130yi ak\u015Famlar",
      uk: "\u0414\u043E\u0431\u0440\u0438\u0439 \u0432\u0435\u0447\u0456\u0440",
      id: "Selamat sore",
      da: "Godaften"
    },
    "Good night": {
      fr: "Bonne nuit",
      sv: "God natt",
      nl: "Goedennacht",
      pl: "Dobranoc",
      pt_BR: "Boa noite",
      ru: "\u0414\u043E\u0431\u0440\u043E\u0439 \u043D\u043E\u0447\u0438!",
      zh_CN: "\u665A\u5B89",
      sk: "Dobr\xFA noc",
      de: "Gute Nacht",
      it: "Buonanotte",
      es: "Buenas noches",
      tr: "\u0130yi geceler",
      uk: "\u0414\u043E\u0431\u0440\u043E\u0457 \u043D\u043E\u0447\u0456",
      id: "Selamat malam",
      da: "God nat"
    },
    "It is currently": {
      fr: "Il fait actuellement",
      sv: "Det \xE4r just nu",
      nl: "Het is nu",
      pl: "Obecnie jest",
      pt_BR: "Atualmente faz",
      ru: "\u0421\u0435\u0439\u0447\u0430\u0441",
      zh_CN: "\u73B0\u5728\u6C14\u6E29",
      sk: "Moment\xE1lne je",
      de: "Es ist derzeit",
      it: "Ci sono",
      es: "Actualmente est\xE1",
      tr: "\u015Eu anda",
      uk: "\u0417\u0430\u0440\u0430\u0437",
      id: "Saat ini",
      da: "Det er lige nu"
    },
    "It currently feels like": {
      fr: "Il y a actuellement un ressenti de",
      sv: "Just nu k\xE4nns det som",
      nl: "Het voelt nu als",
      pl: "Obecnie odczuwalna jest",
      pt_BR: "A Sensa\xE7\xE3o t\xE9rmica \xE9 de",
      ru: "\u0421\u0435\u0439\u0447\u0430\u0441 \u043E\u0449\u0443\u0449\u0430\u0435\u0442\u0441\u044F \u043A\u0430\u043A",
      zh_CN: "\u76EE\u524D\u611F\u89C9\u50CF",
      sk: "Aktu\xE1lne je pocitovo",
      de: "Es f\xFChlt sich aktuell an wie",
      it: "Attualmente sembra",
      es: "Actualmente se siente como",
      tr: "\u015Eu anda hissedilen",
      uk: "\u0412\u0456\u0434\u0447\u0443\u0432\u0430\u0454\u0442\u044C\u0441\u044F \u044F\u043A",
      id: "Saat ini terasa seperti",
      da: "Lige nu f\xF8les det som"
    },
    "feels like": {
      fr: "avec un ressenti de",
      sv: "K\xE4nns som",
      nl: "voelt als",
      pl: "odczuwalna",
      pt_BR: "com sensa\xE7\xE3o de",
      ru: "\u041F\u043E \u043E\u0449\u0443\u0449\u0435\u043D\u0438\u044F\u043C",
      zh_CN: "\u611F\u89C9\u50CF",
      sk: "pocitovo",
      de: "es f\xFChlt sich an wie",
      it: "sembrano",
      es: "se siente como",
      tr: "hissedilen",
      uk: "\u0432\u0456\u0434\u0447\u0443\u0432\u0430\u0454\u0442\u044C\u0441\u044F \u044F\u043A",
      id: "terasa seperti",
      da: "f\xF8les som"
    },
    "with a high of": {
      fr: "avec une maximale de",
      sv: "med h\xF6gsta",
      nl: "Met maximaal",
      pl: "maksymalnie",
      pt_BR: "a m\xE1xima \xE9 de",
      ru: "\u043C\u0430\u043A\u0441\u0438\u043C\u0430\u043B\u044C\u043D\u0430\u044F \u0442\u0435\u043C\u043F\u0435\u0440\u0430\u0442\u0443\u0440\u0430 \u0432\u043E\u0437\u0434\u0443\u0445\u0430 \u0441\u0435\u0433\u043E\u0434\u043D\u044F",
      zh_CN: "\u6700\u9AD8\u6C14\u6E29",
      sk: "z maxim\xE1lnych",
      de: "mit maximal",
      it: "con una massima di",
      es: "con un m\xE1ximo de",
      tr: "maksimum ile",
      uk: "\u0437 \u043C\u0430\u043A\u0441\u0438\u043C\u0430\u043B\u044C\u043D\u043E\u044E \u0442\u0435\u043C\u043F\u0435\u0440\u0430\u0442\u0443\u0440\u043E\u044E",
      id: "dengan tinggi",
      da: "med op til"
    },
    today: {
      fr: "aujourd'hui",
      sv: "idag",
      nl: "vandaag",
      pl: "dzisiaj",
      pt_BR: "hoje",
      ru: "\u0441\u0435\u0433\u043E\u0434\u043D\u044F",
      zh_CN: ", \u4EE5\u4E0A\u662F\u4ECA\u65E5\u5929\u6C14",
      sk: "dnes",
      de: "heute",
      it: "oggi",
      es: "hoy",
      tr: "bug\xFCn",
      uk: "\u0441\u044C\u043E\u0433\u043E\u0434\u043D\u0456",
      id: "hari ini",
      da: "i dag"
    },
    tomorrow: {
      fr: "demain",
      sv: "jutri",
      nl: "morgen",
      pl: "jutro",
      pt_BR: "amanh\xE3",
      ru: "\u0437\u0430\u0432\u0442\u0440\u0430",
      zh_CN: ", \u4EE5\u4E0A\u662F\u660E\u5929\u7684\u5929\u6C14",
      sk: "zajtra",
      de: "morgen",
      it: "domani",
      es: "ma\xF1ana",
      tr: "yar\u0131n",
      uk: "\u0437\u0430\u0432\u0442\u0440\u0430",
      id: "besok",
      da: "i morgen"
    },
    Title: {
      fr: "Titre",
      sv: "Titel",
      nl: "Titel",
      pl: "Tytu\u0142",
      pt_BR: "T\xEDtulo",
      ru: "\u041D\u0430\u0437\u0432\u0430\u043D\u0438\u0435",
      zh_CN: "\u6807\u9898",
      sk: "N\xE1zov",
      de: "Titel",
      it: "Titolo",
      es: "T\xEDtulo",
      tr: "Ba\u015Fl\u0131k",
      uk: "\u041D\u0430\u0437\u0432\u0430",
      id: "Judul",
      da: "Titel"
    },
    Link: {
      fr: "Lien",
      sv: "L\xE4nk",
      nl: "Koppeling",
      pl: "Po\u0142\u0105cz",
      pt_BR: "Link",
      ru: "\u0421\u0441\u044B\u043B\u043A\u0430",
      zh_CN: "\u5173\u8054",
      sk: "Odkaz",
      de: "Link",
      it: "Link",
      es: "Link",
      tr: "Ba\u011Flant\u0131",
      uk: "\u041F\u043E\u0441\u0438\u043B\u0430\u043D\u043D\u044F",
      id: "Tautan",
      da: "Link"
    },
    "on Unsplash": {
      fr: "sur Unsplash",
      sv: "p\xE5 Unsplash",
      nl: "op Unsplash",
      pl: "na Unsplash",
      pt_BR: "no Unsplash",
      ru: "\u043D\u0430 Unsplash",
      zh_CN: "\u5728 Unsplash",
      sk: "na Unsplash",
      de: "auf Unsplash",
      it: "su Unsplash",
      es: "en Unsplash",
      tr: "Unsplash'ta",
      uk: "\u043D\u0430 Unsplash",
      id: "di Unsplash",
      da: "p\xE5 Unsplash"
    },
    "Photo by ": {
      fr: "Photo par ",
      sv: "Foto av ",
      nl: "Foto door ",
      pl: "Zdj\u0119cie wykonane przez ",
      pt_BR: "Foto por ",
      ru: "\u0424\u043E\u0442\u043E ",
      zh_CN: "\u62CD\u6444\u8005 ",
      sk: "Fotka od ",
      de: "Foto von ",
      it: "Fotografato da ",
      es: "Foto por ",
      tr: "Foto\u011Fraf\u0131 \xE7eken ",
      uk: "\u0424\u043E\u0442\u043E \u0432\u0456\u0434 ",
      id: "Foto oleh ",
      da: "Foto af "
    },
    "Icon must be < 8kB": {
      fr: "L'icone doit etre < 8kB",
      sv: "Ikonen m\xE5ste vara <8kB",
      nl: "Icoon moet < 8kB zijn",
      pl: "Ikona musi by\u0107 mniejsza ni\u017C 8 kB",
      pt_BR: "O \xEDcone deve ser < 8kB",
      ru: "\u0418\u043A\u043E\u043D\u043A\u0430 \u0434\u043E\u043B\u0436\u043D\u0430 \u0432\u0435\u0441\u0438\u0442\u044C < 8 \u041A\u0411",
      zh_CN: "\u56FE\u6807\u5FC5\u987B< 8kB",
      sk: "Ikona mus\xED by\u0165 <8 kB",
      de: "Das Symbol muss < 8kB sein",
      it: "L'icona deve essere < 8 kB",
      es: "El icono debe ser <8 kB",
      tr: "Simge 8kB boyutundan k\xFC\xE7\xFCk olmal\u0131",
      uk: "\u0406\u043A\u043E\u043D\u043A\u0430 \u043F\u043E\u0432\u0438\u043D\u043D\u0430 \u0431\u0443\u0442\u0438 \u043C\u0435\u043D\u0448\u0435 8 \u041A\u0411",
      id: "Ikon harus <8kB",
      da: "Ikonet skal v\xE6re < 8kB"
    },
    General: {
      fr: "G\xE9n\xE9ral",
      sv: "Allm\xE4n",
      nl: "Algemeen",
      pl: "Og\xF3lne",
      pt_BR: "Geral",
      ru: "\u041E\u0441\u043D\u043E\u0432\u043D\u044B\u0435",
      zh_CN: "\u901A\u7528",
      sk: "Gener\xE1l",
      de: "Allgemein",
      it: "Generale",
      es: "General",
      tr: "Genel",
      uk: "\u0417\u0430\u0433\u0430\u043B\u044C\u043D\u0456",
      id: "Umum",
      da: "Generelt"
    },
    "Show all settings": {
      fr: "Afficher tous les r\xE9glages",
      sv: "Visa alla inst\xE4llningar",
      nl: "Toon alle instellingen",
      pl: "Poka\u017C wszystkie ustawienia",
      pt_BR: "Mostrar todas configura\xE7\xF5es",
      ru: "\u041F\u043E\u043A\u0430\u0437\u0430\u0442\u044C \u0432\u0441\u0435 \u043D\u0430\u0441\u0442\u0440\u043E\u0439\u043A\u0438",
      zh_CN: "\u663E\u793A\u6240\u6709\u8BBE\u7F6E",
      sk: "Zobrazi\u0165 v\u0161etky nastavenia",
      de: "Alle Einstellungen anzeigen",
      it: "Mostra tutte le impostazioni",
      es: "Mostrar todos los ajustes",
      tr: "T\xFCm ayarlar\u0131 g\xF6ster",
      uk: "\u041F\u043E\u043A\u0430\u0437\u0443\u0432\u0430\u0442\u0438 \u0432\u0441\u0456 \u043D\u0430\u043B\u0430\u0448\u0442\u0443\u0432\u0430\u043D\u043D\u044F",
      id: "Tampilkan semua pengaturan",
      da: "Vis alle indstillingerne"
    },
    "Tab appearance": {
      fr: "Onglet",
      sv: "Flikens utseende",
      nl: "Tabbladweergave",
      pl: "Wygl\u0105d karty",
      pt_BR: "Apar\xEAncia da guia",
      ru: "\u0412\u043D\u0435\u0448\u043D\u0438\u0439 \u0432\u0438\u0434 \u0432\u043A\u043B\u0430\u0434\u043A\u0438",
      zh_CN: "\u9009\u9879\u5361\u5916\u89C2",
      sk: "Vzh\u013Ead karty",
      de: "Tab-Erscheinungsbild",
      it: "Aspetto della scheda",
      es: "Aspecto de la pesta\xF1a",
      tr: "Sekme g\xF6r\xFCn\xFCm\xFC",
      uk: "\u0417\u043E\u0432\u043D\u0456\u0448\u043D\u0456\u0439 \u0432\u0438\u0433\u043B\u044F\u0434 \u0432\u043A\u043B\u0430\u0434\u043A\u0438",
      id: "Tampilan tab",
      da: "Faneudseende"
    },
    "Learn more": {
      fr: "En savoir plus",
      sv: "L\xE4s mer",
      nl: "Leer meer",
      pl: "Ucz si\u0119 wi\u0119cej",
      pt_BR: "Saber mais",
      ru: "\u0423\u0447\u0438\u0442\u044C \u0431\u043E\u043B\u044C\u0448\u0435",
      zh_CN: "\u5B66\u5230\u66F4\u591A",
      sk: "U\u010D sa viac",
      de: "Mehr erfahren",
      it: "Scopri di pi\xF9",
      es: "Aprende m\xE1s",
      tr: "En iyi art\u0131",
      uk: "\u0412\u0438\u0432\u0447\u0430\u0439\u0442\u0435 \u0431\u0456\u043B\u044C\u0448\u0435",
      id: "Belajarlah lagi",
      da: "L\xE6r mere"
    },
    "The icon and title that appear on your tab. You can put any emoji.": {
      fr: "L'ic\xF4ne et le titre qui apparaissent sur votre onglet. Vous pouvez mettre un emoji de votre choix.",
      sv: "Ikonen och titeln som visas p\xE5 din flik. Du kan l\xE4gga in vilken emoji som helst.",
      nl: "Het pictogram en de titel die op uw tabblad verschijnen. Je kunt elke emoji plaatsen.",
      pl: "Tytu\u0142 oraz ikona, kt\xF3ra pojawi si\u0119 na Twojej karcie. Mo\u017Cesz umie\u015Bci\u0107 dowolny emotikon.",
      pt_BR: "O \xEDcone e o t\xEDtulo que aparecem na sua guia. Voc\xEA pode colocar qualquer emoji.",
      ru: "\u0417\u043D\u0430\u0447\u043E\u043A \u0438 \u0437\u0430\u0433\u043E\u043B\u043E\u0432\u043E\u043A, \u043A\u043E\u0442\u043E\u0440\u044B\u0435 \u043F\u043E\u044F\u0432\u043B\u044F\u044E\u0442\u0441\u044F \u043D\u0430 \u0432\u0430\u0448\u0435\u0439 \u0432\u043A\u043B\u0430\u0434\u043A\u0435. \u0412\u044B \u043C\u043E\u0436\u0435\u0442\u0435 \u043F\u043E\u0441\u0442\u0430\u0432\u0438\u0442\u044C \u043B\u044E\u0431\u043E\u0439 \u0441\u043C\u0430\u0439\u043B\u0438\u043A.",
      zh_CN: "\u6807\u7B7E\u4E0A\u663E\u793A\u7684\u56FE\u6807\u548C\u6807\u9898\u3002 \u4F60\u53EF\u4EE5\u653E\u4EFB\u4F55\u8868\u60C5\u7B26\u53F7\u3002",
      sk: "Ikona a n\xE1zov, ktor\xE9 sa zobrazuj\xFA na va\u0161ej karte. M\xF4\u017Eete vlo\u017Ei\u0165 ak\xE9ko\u013Evek emotikony.",
      de: "Das Symbol und der Titel, die auf Ihrem Tab angezeigt werden. Sie k\xF6nnen jedes Emoji einf\xFCgen.",
      it: "L'icona e il titolo che appaiono nella tua scheda. Puoi mettere qualsiasi emoji.",
      es: "El icono y el t\xEDtulo que aparecen en tu ficha. Puedes poner cualquier emoji.",
      tr: "Sekmenizde g\xF6r\xFCnen simge ve ba\u015Fl\u0131k. Herhangi bir emoji koyabilirsiniz.",
      uk: "\u0417\u043D\u0430\u0447\u043E\u043A \u0456 \u043D\u0430\u0437\u0432\u0430, \u044F\u043A\u0456 \u0432\u0456\u0434\u043E\u0431\u0440\u0430\u0436\u0430\u044E\u0442\u044C\u0441\u044F \u043D\u0430 \u0432\u0430\u0448\u0456\u0439 \u0432\u043A\u043B\u0430\u0434\u0446\u0456. \u0412\u0438 \u043C\u043E\u0436\u0435\u0442\u0435 \u043F\u043E\u0441\u0442\u0430\u0432\u0438\u0442\u0438 \u0431\u0443\u0434\u044C-\u044F\u043A\u0438\u0439 \u0435\u043C\u043E\u0434\u0437\u0456.",
      id: "Ikon dan judul yang muncul di tab Anda. Anda dapat menempatkan emoji apa pun.",
      da: "Ikonet og titlen, der vises p\xE5 din fane. Du kan s\xE6tte enhver emoji."
    },
    "More info": {
      fr: "En savoir plus",
      sv: "Mer information",
      nl: "Meer informatie",
      pl: "Wi\u0119cej informacji",
      pt_BR: "Mais informa\xE7\xF5es",
      ru: "\u0411\u043E\u043B\u044C\u0448\u0435 \u0438\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0438\u0438",
      zh_CN: "\u66F4\u591A\u4FE1\u606F",
      sk: "Viac inform\xE1ci\xED",
      de: "Weitere Infos",
      it: "Ulteriori informazioni",
      es: "M\xE1s informaci\xF3n",
      tr: "Daha fazla bilgi",
      uk: "\u0411\u0456\u043B\u044C\u0448\u0435",
      id: "Info Selengkapnya",
      da: "Mere information"
    },
    "These are Bonjourr's bookmarks. ": {
      fr: "",
      sv: "Det h\xE4r \xE4r Bonjourrs bokm\xE4rken. ",
      nl: "Dit zijn de bladwijzers van Bonjourr. ",
      pl: "To s\u0105 zak\u0142adki Bonjourr. ",
      pt_BR: "Esses s\xE3o os favoritos do Bonjourr. ",
      ru: "\u042D\u0442\u043E \u0437\u0430\u043A\u043B\u0430\u0434\u043A\u0438 Bonjourr. ",
      zh_CN: "\u8FD9\u4E9B\u662F Bonjourr \u7684\u4E66\u7B7E\u3002",
      sk: "Toto s\xFA z\xE1lo\u017Eky Bonjourru. ",
      de: "Dies sind Bonjourrs Lesezeichen. ",
      it: "Questi sono i segnalibri di Bonjourr. ",
      es: "Estos son los marcadores de Bonjourr. ",
      tr: "Bunlar Bonjourr'un h\u0131zl\u0131 ba\u011Flant\u0131lar\u0131. ",
      uk: "\u0428\u0432\u0438\u0434\u043A\u0456 \u043F\u043E\u0441\u0438\u043B\u0430\u043D\u043D\u044F Bonjourr. ",
      id: "Ini adalah bookmark Bonjourr. ",
      da: "De her er Bonjourrs bogm\xE6rker. "
    },
    "Edit your Quick Links by right clicking the icon.": {
      fr: "\xC9ditez un lien favori en faisant un clic droit sur l'ic\xF4ne.",
      sv: "Redigera dina snabbl\xE4nkar genom att h\xF6gerklicka p\xE5 deras ikon.",
      nl: "Bewerk uw snelkoppelingen door met de rechtermuisknop op hun pictogram te klikken.",
      pl: "Edytuj swoje szybkie linki, klikaj\u0105c prawym przyciskiem na ikon\u0119.",
      pt_BR: "Altere seus Links R\xE1pidos clicando com o bot\xE3o direito do mouse em seu \xEDcone.",
      ru: " \u041E\u0442\u0440\u0435\u0434\u0430\u043A\u0442\u0438\u0440\u0443\u0439\u0442\u0435 \u0411\u044B\u0441\u0442\u0440\u044B\u0435 \u0441\u0441\u044B\u043B\u043A\u0438, \u0449\u0435\u043B\u043A\u043D\u0443\u0432 \u043F\u043E \u043D\u0438\u043C \u043F\u0440\u0430\u0432\u043E\u0439 \u043A\u043D\u043E\u043F\u043A\u043E\u0439 \u043C\u044B\u0448\u0438.",
      zh_CN: "\u901A\u8FC7\u53F3\u952E\u5355\u51FB\u5B83\u4EEC\u7684\u56FE\u6807\u6765\u7F16\u8F91\u60A8\u7684\u5FEB\u901F\u94FE\u63A5\u3002",
      sk: "Upravte svoje Quick Links kliknut\xEDm prav\xFDm tla\u010Didlom na ikone.",
      de: "Bearbeiten Sie Ihre Schnelllinks, indem Sie mit der rechten Maustaste auf das Symbol klicken.",
      it: "Modifica i tuoi collegamenti Quick Links clic con il pulsante destro del mouse sull'icona.",
      es: "Edita tus Links Favoritos d\xE1ndole clic derecho a un \xEDcono.",
      tr: "Simgeye sa\u011F t\u0131klayarak H\u0131zl\u0131 Ba\u011Flant\u0131lar\u0131n\u0131z\u0131 d\xFCzenleyin.",
      uk: "\u0420\u0435\u0434\u0430\u0433\u0443\u0439\u0442\u0435 \u0432\u0430\u0448\u0456 \u0448\u0432\u0438\u0434\u043A\u0456 \u043F\u043E\u0441\u0438\u043B\u0430\u043D\u043D\u044F \u043D\u0430\u0442\u0438\u0441\u043D\u0443\u0432\u0448\u0438 \u043F\u0440\u0430\u0432\u043E\u044E \u043A\u043D\u043E\u043F\u043A\u043E\u044E \u043C\u0438\u0448\u0456 \u043D\u0430 \u043F\u0456\u043A\u0442\u043E\u0433\u0440\u0430\u043C\u0456.",
      id: "Edit Tautan Cepat Anda dengan mengeklik kanan ikon.",
      da: "Rediger dine Hurtig Links ved at h\xF8jreklikke p\xE5 ikonet."
    },
    "Edit your Quick Links by long-pressing the icon.": {
      fr: "\xC9ditez un lien favori en appuyant longtemps sur l'ic\xF4ne.",
      sv: "Redigera dina snabbl\xE4nkar genom att trycka l\xE4nge p\xE5 ikonen i 300 ms.",
      nl: "Bewerk uw snelkoppelingen door 300 ms lang op het pictogram te drukken.",
      pl: "Edytuj swoje szybkie linki poprzez d\u0142u\u017Csze przytrzymanie ikony.",
      pt_BR: "Altere seus Links R\xE1pidos pressionando o \xEDcone por 300ms.",
      ru: "\u041E\u0442\u0440\u0435\u0434\u0430\u043A\u0442\u0438\u0440\u0443\u0439\u0442\u0435 \u0431\u044B\u0441\u0442\u0440\u044B\u0435 \u0441\u0441\u044B\u043B\u043A\u0438, \u043D\u0430\u0436\u0430\u0432 \u0438 \u0443\u0434\u0435\u0440\u0436\u0438\u0432\u0430\u044F \u0437\u043D\u0430\u0447\u043E\u043A \u0432 \u0442\u0435\u0447\u0435\u043D\u0438\u0435 300 \u043C\u0441.",
      zh_CN: "\u957F\u6309\u56FE\u6807 300 \u6BEB\u79D2\u6765\u7F16\u8F91\u60A8\u7684\u5FEB\u901F\u94FE\u63A5\u3002",
      sk: "Upravte svoje Quick Links dlh\xFDm podr\u017Ean\xEDm ikony po dobu 300 ms.",
      de: "Bearbeiten Sie Ihre Schnelllinks, indem Sie das Symbol 300 ms lang gedr\xFCckt halten.",
      it: "Modifica i tuoi collegamenti rapidi premendo a lungo per 300 ms l'icona.",
      es: "Edita tus Links Favoritos dejando un \xEDcono presionado por 300 ms.",
      tr: "Simgeye uzun s\xFCre basarak H\u0131zl\u0131 Ba\u011Flant\u0131lar\u0131n\u0131z\u0131 d\xFCzenleyin.",
      uk: "\u0420\u0435\u0434\u0430\u0433\u0443\u0439\u0442\u0435 \u0432\u0430\u0448\u0456 \u0448\u0432\u0438\u0434\u043A\u0456 \u043F\u043E\u0441\u0438\u043B\u0430\u043D\u043D\u044F \u0443\u0442\u0440\u0438\u043C\u0443\u044E\u0447\u0438 \u043F\u0456\u043A\u0442\u043E\u0433\u0440\u0430\u043C\u0443 \u043F\u0440\u043E\u0442\u044F\u0433\u043E\u043C 300 \u043C\u0441",
      id: "Edit Tautan Cepat Anda dengan menekan lama ikon selama 300 md.",
      da: "Rediger dine Hurtig Links ved at trykke l\xE6nge p\xE5 ikonet."
    },
    "Type the collection ID from its URL, add more by separating them with a comma.": {
      fr: "Entrez l'ID de l'URL de la collection. Ajoutez en plusieurs en les s\xE9parant par une virgule.",
      sv: "Skriv samlings ID fr\xE5n dess URL. L\xE4gg till mer genom att separera dem med ett komma.",
      nl: "Typ de collectie ID van de URL. Voeg meer toe door ze te scheiden met een komma.",
      pl: "Wpisz identyfikator kolekcji z adresu URL. Dodaj wi\u0119cej, oddzielaj\u0105c je przecinkiem.",
      pt_BR: "Digite a identifica\xE7\xE3o da cole\xE7\xE3o atrav\xE9s da URL, adicione mais separando-os com uma v\xEDrgula.",
      ru: "\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0438\u0434\u0435\u043D\u0442\u0438\u0444\u0438\u043A\u0430\u0442\u043E\u0440 \u043A\u043E\u043B\u043B\u0435\u043A\u0446\u0438\u0438 \u0438\u0437 \u0435\u0435 URL-\u0430\u0434\u0440\u0435\u0441\u0430. \u0414\u043E\u0431\u0430\u0432\u044C\u0442\u0435 \u0434\u0440\u0443\u0433\u0438\u0435, \u0440\u0430\u0437\u0434\u0435\u043B\u0438\u0432 \u0438\u0445 \u0437\u0430\u043F\u044F\u0442\u044B\u043C\u0438.",
      zh_CN: "\u4ECE\u5176 URL \u4E2D\u8F93\u5165\u96C6\u5408 ID\u3002\u901A\u8FC7\u7528\u9017\u53F7\u5206\u9694\u5B83\u4EEC\u6765\u6DFB\u52A0\u66F4\u591A\u3002",
      sk: "Zadajte ID zbierky z jej adresy URL. Pridajte \u010Fal\u0161ie ich oddelen\xEDm \u010Diarkou.",
      de: "Geben Sie die Sammlungs ID aus ihrer URL ein. F\xFCgen Sie weitere hinzu, indem Sie diese durch ein Komma trennen.",
      it: "Digita l'ID della raccolta dal relativo URL. Aggiungine altri separandoli con una virgola.",
      es: "Escribe el ID de la colecci\xF3n de tu URL. Agrega m\xE1s separ\xE1ndolos con una coma.",
      tr: "Koleksiyon kimli\u011Fini URL'den kopyalay\u0131n, virg\xFClle ay\u0131rarak daha fazlas\u0131n\u0131 ekleyin.",
      uk: "\u0412\u0432\u0435\u0434\u0456\u0442\u044C \u0456\u0434\u0435\u043D\u0442\u0438\u0444\u0456\u043A\u0430\u0442\u043E\u0440 \u043A\u043E\u043B\u0435\u043A\u0446\u0456\u0457 \u0437 URL-\u0430\u0434\u0440\u0435\u0441\u0438 \u0430\u0431\u043E \u0432\u043A\u0430\u0436\u0456\u0442\u044C \u0434\u0435\u043A\u0456\u043B\u044C\u043A\u0430 \u0447\u0435\u0440\u0435\u0437 \u043A\u043E\u043C\u0443",
      id: "Ketik ID koleksi dari URL-nya, tambahkan lebih banyak dengan memisahkannya dengan koma.",
      da: "Skriv samlingsid'et fra dens URL, tilf\xF8j flere ved at adskille dem med komma."
    },
    Name: {
      fr: "Nom",
      sv: "Namn",
      nl: "Naam",
      pl: "Nazwa",
      pt_BR: "Nome",
      ru: "\u041D\u0430\u0437\u0432\u0430\u043D\u0438\u0435",
      zh_CN: "\u540D\u79F0",
      sk: "n\xE1zov",
      de: "Name",
      it: "nome",
      es: "Nombre",
      tr: "\u0130sim",
      uk: "\u041D\u0430\u0437\u0432\u0430",
      id: "Nama",
      da: "Navn"
    },
    Add: {
      fr: "Ajouter",
      sv: "L\xE4gg till",
      nl: "Voeg toe",
      pl: "Dodaj",
      pt_BR: "Adicionar",
      ru: "\u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C",
      zh_CN: "\u6DFB\u52A0",
      sk: "Prida\u0165",
      de: "Hinzuf\xFCgen",
      it: "Aggiungere",
      es: "A\xF1adir",
      tr: "Ekle",
      uk: "\u0414\u043E\u0434\u0430\u0442\u0438",
      id: "Tambah",
      da: "Tilf\xF8j"
    },
    "No bookmarks found": {
      fr: "Aucun favori trouv\xE9",
      sv: "Inga bokm\xE4rken hittades",
      nl: "Geen bladwijzers gevonden",
      pl: "Nie znaleziono zak\u0142adek",
      pt_BR: "Nenhum favorito encontrado",
      ru: "\u0417\u0430\u043A\u043B\u0430\u0434\u043E\u043A \u043D\u0435 \u043D\u0430\u0439\u0434\u0435\u043D\u043E",
      zh_CN: "\u672A\u627E\u5230\u4E66\u7B7E",
      sk: "Nena\u0161li sa \u017Eiadne z\xE1lo\u017Eky",
      de: "Keine Lesezeichen gefunden",
      it: "Nessun segnalibro trovato",
      es: "No se encontraron marcadores",
      tr: "Yer i\u015Fareti bulunamad\u0131",
      uk: "\u0417\u0430\u043A\u043B\u0430\u0434\u043E\u043A \u043D\u0435 \u0437\u043D\u0430\u0439\u0434\u0435\u043D\u043E",
      id: "Tidak ada bookmark yang ditemukan",
      da: "Ingen bogm\xE6rker fundet"
    },
    "Select bookmarks to import": {
      fr: "S\xE9lectionnez les favoris \xE0 importer",
      sv: "V\xE4lj de bokm\xE4rken som ska importeras",
      nl: "Selecteer de bladwijzers om te importeren",
      pl: "Wybierz zak\u0142adki do zaimportowania",
      pt_BR: "Selecione os favoritos para importar",
      ru: "\u0412\u044B\u0431\u0435\u0440\u0438\u0442\u0435 \u0437\u0430\u043A\u043B\u0430\u0434\u043A\u0438 \u0434\u043B\u044F \u0438\u043C\u043F\u043E\u0440\u0442\u0430",
      zh_CN: "\u9009\u62E9\u8981\u5BFC\u5165\u7684\u4E66\u7B7E",
      sk: "Vyberte z\xE1lo\u017Eky, ktor\xE9 chcete importova\u0165",
      de: "W\xE4hlen Sie die zu importierenden Lesezeichen aus",
      it: "Seleziona i segnalibri da importare",
      es: "Selecciona marcadores para importar",
      tr: "\u0130\xE7e aktar\u0131lacak yer i\u015Faretlerini se\xE7in",
      uk: "\u041E\u0431\u0435\u0440\u0456\u0442\u044C \u0437\u0430\u043A\u043B\u0430\u0434\u043A\u0438 \u0434\u043B\u044F \u0456\u043C\u043F\u043E\u0440\u0442\u0443",
      id: "Pilih bookmark untuk diimpor",
      da: "V\xE6lg bogm\xE6rker som skal importeres"
    },
    "Import this bookmark": {
      fr: "Importer ce favori",
      sv: "Importera detta bokm\xE4rke",
      nl: "Deze bladwijzer importeren",
      pl: "Importuj t\u0119 zak\u0142adk\u0119",
      pt_BR: "Importar este favorito",
      ru: "\u0418\u043C\u043F\u043E\u0440\u0442\u0438\u0440\u043E\u0432\u0430\u0442\u044C \u044D\u0442\u0443 \u0437\u0430\u043A\u043B\u0430\u0434\u043A\u0443",
      zh_CN: "\u5BFC\u5165\u6B64\u4E66\u7B7E",
      sk: "Importova\u0165 t\xFAto z\xE1lo\u017Eku",
      de: "Dieses Lesezeichen importieren",
      it: "Importa questo segnalibro",
      es: "Importar este marcador",
      tr: "Bu yer i\u015Faretini i\xE7e aktar",
      uk: "\u0406\u043C\u043F\u043E\u0440\u0442\u0443\u0432\u0430\u0442\u0438 \u0446\u044E \u0437\u0430\u043A\u043B\u0430\u0434\u043A\u0443",
      id: "Impor bookmark ini",
      da: "Importer dette bogm\xE6rke"
    },
    "Import these bookmarks": {
      fr: "Importer ces favoris",
      sv: "Importera dessa bokm\xE4rken",
      nl: "Importeer deze bladwijzers",
      pl: "Importuj te zak\u0142adki",
      pt_BR: "Importar esses favoritos",
      ru: "\u0418\u043C\u043F\u043E\u0440\u0442\u0438\u0440\u043E\u0432\u0430\u0442\u044C \u044D\u0442\u0438 \u0437\u0430\u043A\u043B\u0430\u0434\u043A\u0438",
      zh_CN: "\u5BFC\u5165\u8FD9\u4E9B\u4E66\u7B7E",
      sk: "Importujte tieto z\xE1lo\u017Eky",
      de: "Diese Lesezeichen importieren",
      it: "Importa questi segnalibri",
      es: "Importar estos marcadores",
      tr: "Bu yer i\u015Faretlerini i\xE7e aktar",
      uk: "\u0406\u043C\u043F\u043E\u0440\u0442\u0443\u0432\u0430\u0442\u0438 \u0446\u0456 \u0437\u0430\u043A\u043B\u0430\u0434\u043A\u0438",
      id: "Import these bookmarks",
      da: "Importer disse bogm\xE6rker"
    },
    "Links per row": {
      fr: "Liens par ligne",
      sv: "L\xE4nkar per rad",
      nl: "Links per rij",
      pl: "Linki na wiersz",
      pt_BR: "Links por linha",
      ru: "\u0421\u0441\u044B\u043B\u043E\u043A \u0432 \u0441\u0442\u0440\u043E\u043A\u0435",
      zh_CN: "\u6BCF\u884C\u94FE\u63A5",
      sk: "Odkazy na riadok",
      de: "Links pro Zeile",
      it: "Link per riga",
      es: "Links por fila",
      tr: "Her sat\u0131r bir ba\u011Flant\u0131",
      uk: "\u041F\u043E\u0441\u0438\u043B\u0430\u043D\u044C \u0432 \u0440\u044F\u0434\u043A\u0443",
      id: "Tautan per baris",
      da: "Links per r\xE6kke"
    },
    Background: {
      fr: "Arri\xE8re-plan",
      sv: "Bakgrund",
      nl: "Achtergrond",
      pl: "T\u0142o",
      pt_BR: "Fundo",
      ru: "\u0424\u043E\u043D",
      zh_CN: "\u901A\u7528",
      sk: "Pozadie",
      de: "Hintergrund",
      it: "Sfondo",
      es: "Fondo",
      tr: "Arka plan",
      uk: "\u0442\u043B\u0430",
      id: "Latar belakang",
      da: "Baggrund"
    },
    "Background type": {
      fr: "Type d'arri\xE8re-plan",
      sv: "Bakgrundstyp",
      nl: "Achtergrondtype",
      pl: "Rodzaj t\u0142a",
      pt_BR: "Tipo de background",
      ru: "\u0422\u0438\u043F \u0444\u043E\u043D\u0430",
      zh_CN: "\u80CC\u666F\u7C7B\u578B",
      sk: "Pozadie",
      de: "Hintergrund Typ",
      it: "Tipo di sfondo",
      es: "Tipo de fondo",
      tr: "Arka plan t\xFCr\xFC",
      uk: "\u0422\u0438\u043F \u0442\u043B\u0430",
      id: "Jenis latar belakang",
      da: "Baggrundstype"
    },
    Default: {
      fr: "Par d\xE9faut",
      sv: "Standard",
      nl: "Standaard",
      pl: "Domy\u015Blne",
      pt_BR: "Padr\xE3o",
      ru: "\u041F\u043E \u0443\u043C\u043E\u043B\u0447\u0430\u043D\u0438\u044E",
      zh_CN: "\u9ED8\u8BA4",
      sk: "Predvolen\xE9",
      de: "Standard",
      it: "Predefinito",
      es: "Por Defecto",
      tr: "Varsay\u0131lan",
      uk: "\u0417\u0430 \u0437\u0430\u043C\u043E\u0432\u0447\u0443\u0432\u0430\u043D\u043D\u044F\u043C",
      id: "Bawaan",
      da: "Standard"
    },
    Dynamic: {
      fr: "Dynamique",
      sv: "Dynamisk",
      nl: "Dynamisch",
      pl: "Dynamiczne",
      pt_BR: "Din\xE2mico",
      ru: "\u0414\u0438\u043D\u0430\u043C\u0438\u0447\u0435\u0441\u043A\u0438\u0439",
      zh_CN: "\u52A8\u6001",
      sk: "Dynamick\xFD",
      de: "Dynamisch",
      it: "Dinamico",
      es: "Din\xE1mico",
      tr: "Dinamik",
      uk: "\u0414\u0438\u043D\u0430\u043C\u0456\u0447\u043D\u0438\u0439",
      id: "Dinamis",
      da: "Dynamisk"
    },
    Custom: {
      fr: "Personnalis\xE9",
      sv: "Best\xE4llnings",
      nl: "Aangepast",
      pl: "W\u0142asne",
      pt_BR: "Personalizado",
      ru: "\u041F\u0435\u0440\u0441\u043E\u043D\u0430\u043B\u0438\u0437\u0438\u0440\u043E\u0432\u0430\u043D\u043D\u044B\u0439",
      zh_CN: "\u81EA\u5B9A\u4E49",
      sk: "Vlastn\xE9",
      de: "Benutzerdefiniert",
      it: "Personalizzato",
      es: "Personalizado",
      tr: "\xD6zel",
      uk: "\u0412\u043B\u0430\u0441\u043D\u0438\u0439",
      id: "Personalisasi",
      da: "Brugerdefineret"
    },
    Frequency: {
      fr: "Fr\xE9quence",
      sv: "Frekvens",
      nl: "Frequentie",
      pl: "Cz\u0119stotliwo\u015B\u0107",
      pt_BR: "Frequ\xEAncia de atualiza\xE7\xE3o",
      ru: "\u0427\u0430\u0441\u0442\u043E\u0442\u0430 \u043E\u0431\u043D\u043E\u0432\u043B\u0435\u043D\u0438\u044F",
      zh_CN: "\u80CC\u666F\u5207\u6362\u9891\u7387",
      sk: "Frekvencia",
      de: "H\xE4ufigkeit",
      it: "Frequenza",
      es: "Frecuencia",
      tr: "Frekans",
      uk: "\u0427\u0430\u0441\u0442\u043E\u0442\u0430",
      id: "Frekuensi",
      da: "Hyppighed"
    },
    Daylight: {
      fr: "Lumi\xE8re du jour",
      sv: "Dagsljus",
      nl: "Daglicht",
      pl: "Ka\u017Cdego poranka",
      pt_BR: "Luz do dia",
      ru: "\u0414\u043D\u0435\u0432\u043D\u043E\u0435 \u0432\u0440\u0435\u043C\u044F",
      zh_CN: "\u767D\u5929",
      sk: "Denn\xE9 svetlo",
      de: "Tageslicht",
      it: "Luce del giorno",
      es: "Luz diario",
      tr: "G\xFCn \u0131\u015F\u0131\u011F\u0131",
      uk: "\u0434\u0435\u043D\u043D\u0435 \u0441\u0432\u0456\u0442\u043B\u043E",
      id: "Siang hari",
      da: "Dagslys"
    },
    "Every tab": {
      fr: "Chaque onglet",
      sv: "Varje flik",
      nl: "Elk tabblad",
      pl: "Co zak\u0142adk\u0119",
      pt_BR: "A cada aba",
      ru: "\u041A\u0430\u0436\u0434\u0430\u044F \u0432\u043A\u043B\u0430\u0434\u043A\u0430",
      zh_CN: "\u6BCF\u6B21\u65B0\u5EFA\u6807\u7B7E\u9875",
      sk: "Ka\u017Ed\xE1 karta",
      de: "Jeden Tab",
      it: "Ogni scheda",
      es: "Cada Pesta\xF1a",
      tr: "Sekmede bir",
      uk: "\u041A\u043E\u0436\u043D\u0443 \u0432\u043A\u043B\u0430\u0434\u043A\u0443",
      id: "Setiap tab",
      da: "Hvert faneblad"
    },
    "Every hour": {
      fr: "Chaque heure",
      sv: "Varje timme",
      nl: "Elk uur",
      pl: "Co godzin\u0119",
      pt_BR: "A cada hora",
      ru: "\u041A\u0430\u0436\u0434\u044B\u0439 \u0447\u0430\u0441",
      zh_CN: "\u6BCF\u5C0F\u65F6",
      sk: "Ka\u017Ed\xFA hodinu",
      de: "Jede Stunde",
      it: "Ogni ora",
      es: "Cada hora",
      tr: "Saatte bir",
      uk: "\u041A\u043E\u0436\u043D\u0443 \u0433\u043E\u0434\u0438\u043D\u0443",
      id: "Setiap jam",
      da: "Hver time"
    },
    "Every day": {
      fr: "Chaque jour",
      sv: "Varje dag",
      nl: "Elke dag",
      pl: "Codziennie",
      pt_BR: "Diariamente",
      ru: "\u041A\u0430\u0436\u0434\u044B\u0439 \u0434\u0435\u043D\u044C",
      zh_CN: "\u6BCF\u5929",
      sk: "Ka\u017Ed\xFD de\u0148",
      de: "Jeden Tag",
      it: "Ogni giorno",
      es: "Cada d\xEDa",
      tr: "G\xFCnde bir",
      uk: "\u041A\u043E\u0436\u043D\u043E\u0433\u043E \u0434\u043D\u044F",
      id: "Setiap hari",
      da: "Hver dag"
    },
    Pause: {
      fr: "Pause",
      sv: "Paus",
      nl: "Pauze",
      pl: "Wstrzymaj",
      pt_BR: "Pausar",
      ru: "\u041F\u0430\u0443\u0437\u0430",
      zh_CN: "\u4E0D\u5207\u6362",
      sk: "Pauza",
      de: "Pause",
      it: "Pausa",
      es: "Pausa",
      tr: "Durdur",
      uk: "\u041F\u0430\u0443\u0437\u0430",
      id: "Jeda",
      da: "Pause"
    },
    "Unsplash collection": {
      fr: "Collection Unsplash",
      sv: "Unsplash samling",
      nl: "Unsplash verzameling",
      pl: "Kolekcja Unsplash",
      pt_BR: "Cole\xE7\xE3o do Unsplash",
      ru: "\u041A\u043E\u043B\u043B\u0435\u043A\u0446\u0438\u044F Unsplash",
      zh_CN: "Unsplash \u6536\u85CF",
      sk: "Unsplash collection",
      de: "Unsplash Kollektion",
      it: "Raccolta Unsplash",
      es: "Colecci\xF3n Unsplash",
      tr: "Unsplash koleksiyonu",
      uk: "\u041A\u043E\u043B\u0435\u043A\u0446\u0456\u044F Unsplash",
      id: "Koleksi Unsplash",
      da: "Unsplash samling"
    },
    "Blur intensity": {
      fr: "Intensit\xE9 du flou",
      sv: "Osk\xE4rpans intensitet",
      nl: "Intensiviteit van het vervagingseffect",
      pl: "Intensywno\u015Bc rozmycia",
      pt_BR: "Intensidade do desfoque",
      ru: "\u0421\u0442\u0435\u043F\u0435\u043D\u044C \u0440\u0430\u0437\u043C\u044B\u0442\u0438\u044F \u0444\u043E\u043D\u0430",
      zh_CN: "\u6A21\u7CCA\u5EA6",
      sk: "Intenzita rozmazania",
      de: "Weichzeichner St\xE4rke",
      it: "Intensit\xE0 della sfocatura",
      es: "Intensidad de desenfoque",
      tr: "Bulan\u0131kl\u0131k yo\u011Funlu\u011Fu",
      uk: "\u0406\u043D\u0442\u0435\u043D\u0441\u0438\u0432\u043D\u0456\u0441\u0442\u044C \u0440\u043E\u0437\u043C\u0438\u0442\u0442\u044F",
      id: "Intensitas kabur",
      da: "Sl\xF8ringsintensitet"
    },
    Brightness: {
      fr: "Luminosit\xE9",
      sv: "Ljusstyrka",
      nl: "Helderheid",
      pl: "Jasno\u015B\u0107",
      pt_BR: "Brilho",
      ru: "\u042F\u0440\u043A\u043E\u0441\u0442\u044C",
      zh_CN: "\u4EAE\u5EA6",
      sk: "Jas",
      de: "Helligkeit",
      it: "Luminosit\xE0",
      es: "Brillo",
      tr: "Parlakl\u0131k",
      uk: "\u042F\u0441\u043A\u0440\u0430\u0432\u0456\u0441\u0442\u044C",
      id: "Kecerahan",
      da: "Lysstyrke"
    },
    "Dark mode": {
      fr: "Mode sombre",
      sv: "M\xF6rkt l\xE4ge",
      nl: "Nacht modus",
      pl: "Tryb ciemny",
      pt_BR: "Modo noturno",
      ru: "\u0422\u0451\u043C\u043D\u0430\u044F \u0442\u0435\u043C\u0430",
      zh_CN: "\u6DF1\u8272\u6A21\u5F0F",
      sk: "Tmav\xFD re\u017Eim",
      de: "Dunkelmodus",
      it: "Modalit\xE0 notturna",
      es: "Modo Oscuro",
      tr: "Karanl\u0131k mod",
      uk: "\u0422\u0435\u043C\u043D\u0438\u0439 \u0440\u0435\u0436\u0438\u043C",
      id: "Mode Gelap",
      da: "M\xF8rk tilstand"
    },
    "At night": {
      fr: "La nuit",
      sv: "P\xE5 natten",
      nl: "Nachts",
      pl: "W nocy",
      pt_BR: "Apenas \xE0 noite",
      ru: "\u041D\u043E\u0447\u044C\u044E",
      zh_CN: "\u53EA\u5728\u591C\u95F4",
      sk: "V noci",
      de: "Nachts",
      it: "Di notte",
      es: "De noche",
      tr: "Geceleyin",
      uk: "\u0412\u043D\u043E\u0447\u0456",
      id: "Di malam hari",
      da: "Om natten"
    },
    System: {
      fr: "Syst\xE8me",
      sv: "Systemet",
      nl: "Systeem",
      pl: "System",
      pt_BR: "Seguir sistema",
      ru: "\u0417\u0430\u0434\u0430\u0451\u0442\u0441\u044F \u0441\u0438\u0441\u0442\u0435\u043C\u043E\u0439",
      zh_CN: "\u7CFB\u7EDF\u8BBE\u7F6E",
      sk: "Syst\xE9mu",
      de: "System",
      it: "Sistema",
      es: "Sistema",
      tr: "Sistem",
      uk: "\u0421\u0438\u0441\u0442\u0435\u043C\u0430",
      id: "Sistem",
      da: "System"
    },
    Enabled: {
      fr: "Activ\xE9",
      sv: "Aktiverad",
      nl: "Ingeschakeld",
      pl: "W\u0142\u0105czony",
      pt_BR: "Ativado",
      ru: "\u0412\u043A\u043B\u044E\u0447\u0435\u043D\u0430",
      zh_CN: "\u5F00\u542F",
      sk: "Zapnut\xE9",
      de: "Aktiviert",
      it: "Abilitato",
      es: "Activado",
      tr: "Etkinle\u015Ftirildi",
      uk: "\u0412\u0432\u0456\u043C\u043A\u043D\u0435\u043D\u043E",
      id: "Diaktifkan",
      da: "Aktiveret"
    },
    Disabled: {
      fr: "D\xE9sactiv\xE9",
      sv: "Inaktiverad",
      nl: "Uitgeschakeld",
      pl: "Wy\u0142\u0105czony",
      pt_BR: "Desativado",
      ru: "\u0412\u044B\u043A\u043B\u044E\u0447\u0435\u043D\u0430",
      zh_CN: "\u5173\u95ED",
      sk: "Vypnut\xE9",
      de: "Deaktiviert",
      it: "Disabilitato",
      es: "Desactivado",
      tr: "Devre d\u0131\u015F\u0131",
      uk: "\u0412\u0438\u043C\u043A\u043D\u0435\u043D\u043E",
      id: "Dinonaktifkan",
      da: "Deaktiveret"
    },
    "New tab icon": {
      fr: "Ic\xF4ne nouvel onglet",
      sv: "Ikon f\xF6r ny flik",
      nl: "Nieuw tabbladpictogram",
      pl: "Ikona nowej karty",
      pt_BR: "\xCDcone de nova aba",
      ru: "\u0417\u043D\u0430\u0447\u043E\u043A \u043D\u043E\u0432\u043E\u0439 \u0432\u043A\u043B\u0430\u0434\u043A\u0438",
      zh_CN: "\u65B0\u6807\u7B7E\u56FE\u6807",
      sk: "Ikona novej karty",
      de: "Neues Tab-Symbol",
      it: "Icona Nuova scheda",
      es: "Icono para la nueva pesta\xF1a",
      tr: "Yeni sekme simgesi",
      uk: "\u041F\u0456\u043A\u0442\u043E\u0433\u0440\u0430\u043C\u0430 \u043D\u043E\u0432\u043E\u0457 \u0432\u043A\u043B\u0430\u0434\u043A\u0438",
      id: "Ikon tab baru",
      da: "Fanebladsikon"
    },
    "Any emoji": {
      fr: "N'importe quel emoji",
      sv: "Vilken emoji som helst",
      nl: "Elke emoji",
      pl: "Dowolny emotikon",
      pt_BR: "Qualquer emoji",
      ru: "\u041B\u044E\u0431\u044B\u0435 \u044D\u043C\u043E\u0434\u0437\u0438",
      zh_CN: "\u4EFB\u4F55\u8868\u60C5\u7B26\u53F7",
      sk: "Ak\xE9ko\u013Evek emoji",
      de: "Beliebiger Emoji",
      it: "Qualsiasi emoji",
      es: "Cualquier emoji",
      tr: "Herhangi bir emoji",
      uk: "\u0411\u0443\u0434\u044C-\u044F\u043A\u0438\u0439 \u0435\u043C\u043E\u0434\u0436\u0456",
      id: "Apa saja emojo",
      da: "Hvilken som helst emoji"
    },
    "New tab title": {
      fr: "Titre du nouvel onglet",
      sv: "New tab title",
      nl: "New tab title",
      pl: "Nowy tytu\u0142 karty",
      pt_BR: "New tab title",
      ru: "\u041D\u0430\u0437\u0432\u0430\u043D\u0438\u0435 \u043D\u043E\u0432\u043E\u0439 \u0432\u043A\u043B\u0430\u0434\u043A\u0438",
      zh_CN: "New tab title",
      sk: "New tab title",
      de: "New tab title",
      it: "New tab title",
      es: "New tab title",
      tr: "New tab title",
      uk: "New tab title",
      id: "New tab title",
      da: "Fanebladstitel"
    },
    "Hide elements": {
      fr: "Cacher des \xE9l\xE9ments",
      sv: "D\xF6lj element",
      nl: "Verberg elementen",
      pl: "Ukryj elementy",
      pt_BR: "Esconder elementos",
      ru: "\u0421\u043A\u0440\u044B\u0442\u044C \u044D\u043B\u0435\u043C\u0435\u043D\u0442\u044B",
      zh_CN: "\u9690\u85CF\u5143\u7D20",
      sk: "Skry\u0165 prvky",
      de: "Elemente ausblenden",
      it: "Nascondi elementi",
      es: "Esconder elementos",
      tr: "\xD6\u011Ferleri gizle",
      uk: "\u0421\u0445\u043E\u0432\u0430\u0442\u0438 \u0435\u043B\u0435\u043C\u0435\u043D\u0442\u0438",
      id: "Sembunyikan elements",
      da: "Skjul elementer"
    },
    Clock: {
      fr: "Horloge",
      sv: "Klocka",
      nl: "Klok",
      pl: "Zegar",
      pt_BR: "Rel\xF3gio",
      ru: "\u0427\u0430\u0441\u044B",
      zh_CN: "\u65F6\u949F",
      sk: "Hodiny",
      de: "Uhr",
      it: "Orologio",
      es: "Reloj",
      tr: "Saat",
      uk: "\u0413\u043E\u0434\u0438\u043D\u043D\u0438\u043A",
      id: "Jam",
      da: "Ur"
    },
    "Clock face": {
      fr: "Style d'horloge",
      sv: "Klockansikte",
      nl: "Wijzerplaat",
      pl: "Tarcza zegara",
      pt_BR: "Estilo do rel\xF3gio",
      ru: "\u0426\u0438\u0444\u0435\u0440\u0431\u043B\u0430\u0442",
      zh_CN: "\u949F\u9762",
      sk: "Cifern\xEDk",
      de: "Ziffernblatt",
      it: "Quadrante",
      es: "Estilo del reloj",
      tr: "Saat stili",
      uk: "\u0426\u0438\u0444\u0435\u0440\u0431\u043B\u0430\u0442",
      id: "Antarmuka Jam",
      da: "Urskive"
    },
    None: {
      fr: "Simple",
      sv: "Ingen",
      nl: "Geen",
      pl: "Nic",
      pt_BR: "Nenhum",
      ru: "\u041F\u0443\u0441\u0442\u043E",
      zh_CN: "\u6CA1\u6709\u4EFB\u4F55",
      sk: "\u017Diadne",
      de: "Keiner",
      it: "Nessuno",
      es: "Ninguno",
      tr: "Hi\xE7biri",
      uk: "\u041D\u0456\u0447\u043E\u0433\u043E",
      id: "Tidak ada",
      da: "Intet"
    },
    Numbers: {
      fr: "Chiffres",
      sv: "Tal",
      nl: "Nummers",
      pl: "Liczby",
      pt_BR: "N\xFAmeros",
      ru: "\u0410\u0440\u0430\u0431\u0441\u043A\u0438\u0435 \u0446\u0438\u0444\u0440\u044B",
      zh_CN: "\u6570\u5B57",
      sk: "\u010C\xEDsla",
      de: "Zahlen",
      it: "Numeri",
      es: "N\xFAmeros",
      tr: "Say\u0131lar",
      uk: "\u0427\u0438\u0441\u043B\u0430",
      id: "Nomor",
      da: "Tal"
    },
    Romans: {
      fr: "Chiffres romains",
      sv: "Romarna",
      nl: "Romeinen",
      pl: "Rzymianie",
      pt_BR: "Algarismos Romanos",
      ru: "\u0420\u0438\u043C\u0441\u043A\u0438\u0435 \u0446\u0438\u0444\u0440\u044B",
      zh_CN: "\u7F57\u9A6C\u4E66",
      sk: "Rimania",
      de: "R\xF6mer",
      it: "Romani",
      es: "Romanos",
      tr: "Roma",
      uk: "\u0420\u0438\u043C\u0441\u044C\u043A\u0438\u0439",
      id: "Roman",
      da: "Romertal"
    },
    Marks: {
      fr: "Graduations",
      sv: "Markera",
      nl: "Markering",
      pl: "Znakowanie",
      pt_BR: "Marca\xE7\xF5es",
      ru: "\u041C\u0430\u0440\u043A\u0438\u0440\u043E\u0432\u043A\u0430",
      zh_CN: "\u6253\u6807",
      sk: "Zna\u010Denie",
      de: "Markierung",
      it: "Marcatura",
      es: "Marcado",
      tr: "\u0130\u015Faretler",
      uk: "\u041C\u0456\u0442\u043A\u0438",
      id: "Tandai",
      da: "M\xE6rker"
    },
    Date: {
      fr: "Date",
      sv: "Datum",
      nl: "Datum",
      pl: "Data",
      pt_BR: "Data",
      ru: "\u0414\u0430\u0442\u0430",
      zh_CN: "\u65E5\u671F",
      sk: "D\xE1tum",
      de: "Datum",
      it: "Data",
      es: "Fecha",
      tr: "Tarih",
      uk: "\u0414\u0430\u0442\u0430",
      id: "Tanggal",
      da: "Dato"
    },
    Greetings: {
      fr: "Bienvenue",
      sv: "H\xE4lsningar",
      nl: "De groeten",
      pl: "Przywitanie",
      pt_BR: "Sauda\xE7\xF5es",
      ru: "\u041F\u0440\u0438\u0432\u0435\u0442",
      zh_CN: "\u4F60\u597D",
      sk: "Pozdravom",
      de: "Gr\xFC\xDFe",
      it: "Saluti",
      es: "Saludos",
      tr: "Selamlama",
      uk: "\u0412\u0456\u0442\u0430\u043D\u043D\u044F",
      id: "Salam",
      da: "Velkomst"
    },
    Weather: {
      fr: "M\xE9t\xE9o",
      sv: "V\xE4der",
      nl: "Het weer",
      pl: "Pogoda",
      pt_BR: "Tempo",
      ru: "\u041F\u043E\u0433\u043E\u0434\u0430",
      zh_CN: "\u5929\u6C14",
      sk: "Po\u010Dasie",
      de: "Wetter",
      it: "Tempo",
      es: "Clima",
      tr: "Hava durumu",
      uk: "\u041F\u043E\u0433\u043E\u0434\u0430",
      id: "Cuaca",
      da: "Vejr"
    },
    Icon: {
      fr: "Ic\xF4ne",
      sv: "Ikon",
      nl: "Icoon",
      pl: "Ikona",
      pt_BR: "\xCDcone",
      ru: "\u0418\u043A\u043E\u043D\u043A\u0430",
      zh_CN: "\u56FE\u6807",
      sk: "Ikona",
      de: "Symbol",
      it: "Icona",
      es: "Icono",
      tr: "Simge",
      uk: "\u0406\u043A\u043E\u043D\u043A\u0430",
      id: "Icon",
      da: "Ikon"
    },
    Style: {
      fr: "Apparence",
      sv: "Stil",
      nl: "Stijl",
      pl: "Styl",
      pt_BR: "Estilo",
      ru: "\u0421\u0442\u0438\u043B\u044C",
      zh_CN: "\u98CE\u683C",
      sk: "\u0160t\xFDl",
      de: "Stil",
      it: "Aspetto",
      es: "Apariencia",
      tr: "G\xF6r\xFCn\xFCm",
      uk: "\u0421\u0442\u0438\u043B\u044C",
      id: "Gaya",
      da: "Udseende"
    },
    Large: {
      fr: "Grands",
      sv: "Stor",
      nl: "Groot",
      pl: "Du\u017Cy",
      pt_BR: "Grande",
      ru: "\u0411\u043E\u043B\u044C\u0448\u043E\u0439",
      zh_CN: "\u5927\u7684",
      sk: "Ve\u013Ek\xFD",
      de: "Gro\xDF",
      it: "Largo",
      es: "Largo",
      tr: "B\xFCy\xFCk",
      uk: "\u0412\u0435\u043B\u0438\u043A\u0438\u0439",
      id: "Besar",
      da: "Stor"
    },
    Medium: {
      fr: "Moyens",
      sv: "Medium",
      nl: "Gemiddeld",
      pl: "\u015Aredni",
      pt_BR: "M\xE9dio",
      ru: "\u0421\u0440\u0435\u0434\u043D\u0438\u0439",
      zh_CN: "\u4E2D\u7B49",
      sk: "Stredn\xFD",
      de: "Mittel",
      it: "Medio",
      es: "Medio",
      tr: "Orta",
      uk: "\u0421\u0435\u0440\u0435\u0434\u043D\u0456\u0439",
      id: "Sedang",
      da: "Medium"
    },
    Small: {
      fr: "Petits",
      sv: "Liten",
      nl: "Klein",
      pl: "Ma\u0142y",
      pt_BR: "Pequeno",
      ru: "\u0411\u043E\u043B\u044C\u0448\u043E\u0439",
      zh_CN: "\u5C0F\u7684",
      sk: "Mal\xFD",
      de: "Klein",
      it: "Piccolo",
      es: "Peque\xF1a",
      tr: "K\xFC\xE7\xFCk",
      uk: "\u041C\u0430\u043B\u0435\u043D\u044C\u043A\u0438\u0439",
      id: "Kecil",
      da: "Lille"
    },
    Text: {
      fr: "Texte",
      sv: "Text",
      nl: "Tekst",
      pl: "Tekst",
      pt_BR: "Texto",
      ru: "\u0422\u0435\u043A\u0441\u0442",
      zh_CN: "\u6587\u672C",
      sk: "Text",
      de: "Text",
      it: "Testo",
      es: "Texto",
      tr: "Metin",
      uk: "\u0422\u0435\u043A\u0441\u0442",
      id: "Teks",
      da: "Tekst"
    },
    "Quick Links": {
      fr: "Liens favoris",
      sv: "Snabbl\xE4nkar",
      nl: "Snelle links",
      pl: "Szybkie linki",
      pt_BR: "Links R\xE1pidos",
      ru: "\u0411\u044B\u0441\u0442\u0440\u044B\u0435 \u0441\u0441\u044B\u043B\u043A\u0438",
      zh_CN: "\u5FEB\u901F\u94FE\u63A5",
      sk: "R\xFDchle odkazy",
      de: "Schnelllinks",
      it: "Link veloci",
      es: "Links Favoritos",
      tr: "H\u0131zl\u0131 Linkler",
      uk: "\u0428\u0432\u0438\u0434\u043A\u0456 \u043F\u043E\u0441\u0438\u043B\u0430\u043D\u043D\u044F",
      id: "Tautan Singkat",
      da: "Hurtig links"
    },
    "Settings icon": {
      fr: "Ic\xF4ne r\xE9glages",
      sv: "Inst\xE4llningsikon",
      nl: "Instellingen icoon",
      pl: "Ikona ustawie\u0144",
      pt_BR: "\xCDcone de configura\xE7\xE3o",
      ru: "\u0417\u043D\u0430\u0447\u043E\u043A \u043D\u0430\u0441\u0442\u0440\u043E\u0435\u043A",
      zh_CN: "\u8BBE\u7F6E\u56FE\u6807",
      sk: "Ikona nastaven\xED",
      de: "Einstellungssymbol",
      it: "Icona Impostazioni",
      es: "\xCDcono de la configuraci\xF3n",
      tr: "Ayarlar simgesi",
      uk: "\u0406\u043A\u043E\u043D\u043A\u0430 \u043D\u0430\u043B\u0430\u0448\u0442\u0443\u0432\u0430\u043D\u044C",
      id: "Pengaturan icon",
      da: "Indstillingsikon"
    },
    "Upload background here": {
      fr: "Ajoutez votre arri\xE8re-plan",
      sv: "Ladda upp bakgrunden h\xE4r",
      nl: "Upload hier achtergrond",
      pl: "Prze\u015Blij t\u0142o tutaj",
      pt_BR: "Suba o seu background aqui",
      ru: "\u0417\u0430\u0433\u0440\u0443\u0437\u0438\u0442\u0435 \u0444\u043E\u043D \u0437\u0434\u0435\u0441\u044C",
      zh_CN: "\u4E0A\u4F20\u80CC\u666F",
      sk: "Nahra\u0165 pozadie tu",
      de: "Hier Hintergrund hochladen",
      it: "Carica lo sfondo qui",
      es: "Sube el fondo aqu\xED",
      tr: "Arka plan\u0131 buraya y\xFCkleyin",
      uk: "\u0417\u0430\u0432\u0430\u043D\u0442\u0430\u0436\u0438\u0442\u0438 \u0437\u043E\u0431\u0440\u0430\u0436\u0435\u043D\u043D\u044F",
      id: "Unggah latar belakan disini",
      da: "Upload baggrund her"
    },
    "Analog clock": {
      fr: "Horloge analogue",
      sv: "Analog klocka",
      nl: "Analoge klok",
      pl: "Zegar analogowy",
      pt_BR: "Rel\xF3gio Anal\xF3gico",
      ru: "\u0410\u043D\u0430\u043B\u043E\u0433\u043E\u0432\u044B\u0435 \u0447\u0430\u0441\u044B",
      zh_CN: "\u6A21\u62DF\u65F6\u949F",
      sk: "Anal\xF3gov\xE9 hodiny",
      de: "Analoge Uhr",
      it: "Orologio analogico",
      es: "Reloj Anal\xF3gico",
      tr: "Analog saat",
      uk: "\u0410\u043D\u0430\u043B\u043E\u0433\u043E\u0432\u0438\u0439 \u0433\u043E\u0434\u0438\u043D\u043D\u0438\u043A",
      id: "Jam Analog",
      da: "Analog ur"
    },
    "Display Seconds": {
      fr: "Afficher les secondes",
      sv: "Visa sekunder",
      nl: "Weergave seconden",
      pl: "Wy\u015Bwietl sekundy",
      pt_BR: "Mostrar segundos",
      ru: "\u041F\u043E\u043A\u0430\u0437\u044B\u0432\u0430\u0442\u044C \u0441\u0435\u043A\u0443\u043D\u0434\u044B",
      zh_CN: "\u663E\u793A\u79D2",
      sk: "Zobrazi\u0165 sekundy",
      de: "Sekunden anzeigen",
      it: "Visualizza secondi",
      es: "Mostrar los segundos",
      tr: "Saniyeyi g\xF6ster",
      uk: "\u041F\u043E\u043A\u0430\u0437\u0443\u0432\u0430\u0442\u0438 \u0441\u0435\u043A\u0443\u043D\u0434\u0438",
      id: "Tampilkan keduanya",
      da: "Vis sekunder"
    },
    Automatic: {
      fr: "Automatique",
      sv: "Automatiskt",
      nl: "Automatisch ",
      pl: "Automatycznie",
      pt_BR: "Autom\xE1tico",
      ru: "\u0410\u0432\u0442\u043E\u043C\u0430\u0442\u0438\u0447\u0435\u0441\u043A\u0438",
      zh_CN: "\u81EA\u52A8\u8BBE\u7F6E",
      sk: "Automatick\xE9",
      de: "Automatisch",
      it: "Automatico",
      es: "Autom\xE1tico",
      tr: "Otomatik",
      uk: "\u0410\u0432\u0442\u043E\u043C\u0430\u0442\u0438\u0447\u043D\u043E",
      id: "Otomatis",
      da: "Automatisk"
    },
    Geolocation: {
      fr: "G\xE9olocalisation",
      sv: "Geolokalisering",
      nl: "Locatie",
      pl: "Lokalizacja",
      pt_BR: "Geolocaliza\xE7\xE3o",
      ru: "\u0413\u0435\u043E\u043B\u043E\u043A\u0430\u0446\u0438\u044F",
      zh_CN: "\u4F7F\u7528\u6211\u7684\u4F4D\u7F6E",
      sk: "Geolok\xE1cia",
      de: "Geolokalisierung",
      it: "Geolocalizzazione",
      es: "Geolocalizaci\xF3n",
      tr: "Co\u011Frafi konum",
      uk: "\u0413\u0435\u043E\u043B\u043E\u043A\u0430\u0446\u0456\u044F",
      id: "Geo-lokasi",
      da: "Geolokalisering"
    },
    "City not found": {
      fr: "Ville inconnue",
      sv: "Staden hittades inte",
      nl: "Stad niet gevonden",
      pl: "Nie znaleziono miasta",
      pt_BR: "Cidade n\xE3o encontrada",
      ru: "\u0413\u043E\u0440\u043E\u0434 \u043D\u0435 \u043D\u0430\u0439\u0434\u0435\u043D",
      zh_CN: "\u627E\u4E0D\u5230\u57CE\u5E02",
      sk: "Mesto nen\xE1jden\xE9",
      de: "Stadt nicht gefunden",
      it: "Citt\xE0 non trovata",
      es: "Ciudad no encontrada",
      tr: "\u015Eehir bulunamad\u0131",
      uk: "\u041C\u0456\u0441\u0442\u043E \u043D\u0435 \u0437\u043D\u0430\u0439\u0434\u0435\u043D\u043E",
      id: "Kota Ditemukan",
      da: "By ikke fundet"
    },
    "Change city": {
      fr: "Changer la ville",
      sv: "Byt stad",
      nl: "Verander locatie",
      pl: "Zmie\u0144 miasto",
      pt_BR: "Mudar cidade",
      ru: "\u0421\u043C\u0435\u043D\u0438\u0442\u044C \u0433\u043E\u0440\u043E\u0434",
      zh_CN: "\u66F4\u6539\u57CE\u5E02",
      sk: "Zmeni\u0165 mesto",
      de: "Stadt \xE4ndern",
      it: "Cambia citt\xE0",
      es: "Cambiar ciudad",
      tr: "\u015Eehri de\u011Fi\u015Ftir",
      uk: "\u0417\u043C\u0456\u043D\u0438\u0442\u0438 \u043C\u0456\u0441\u0442\u043E",
      id: "Ubah kota",
      da: "\xC6ndre by"
    },
    "There was a problem": {
      fr: "Il y a eu un probl\xE8me",
      sv: "Ett fel uppstod",
      nl: "Er is een probleem",
      pl: "Wyst\u0105pi\u0142 problem",
      pt_BR: "Houve um problema",
      ru: "\u0412\u043E\u0437\u043D\u0438\u043A\u043B\u0430 \u043F\u0440\u043E\u0431\u043B\u0435\u043C\u0430",
      zh_CN: "\u51FA\u73B0\u9519\u8BEF",
      sk: "Nastal probl\xE9m",
      de: "Ein Problem ist aufgetreten",
      it: "C'\xE8 stato un problema",
      es: "Hubo un problema",
      tr: "Bir problem vard\u0131",
      uk: "\u0412\u0438\u043D\u0438\u043A\u043B\u0430 \u043F\u0440\u043E\u0431\u043B\u0435\u043C\u0430",
      id: "Ada masalah",
      da: "Der opstod en fejl"
    },
    "Imperial units": {
      fr: "Unit\xE9s imp\xE9riales",
      sv: "Imperial enheter",
      nl: "Empirische eenheden",
      pl: "Jednostki imperialne",
      pt_BR: "Unidades imperiais",
      ru: "\u0418\u0441\u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u044C \u0424\u0430\u0440\u0435\u043D\u0433\u0435\u0439\u0442\u044B",
      zh_CN: "\u82F1\u5236\u5355\u4F4D",
      sk: "Imperi\xE1lne jednotky",
      de: "Imperiale Ma\xDFeinheiten",
      it: "Sistema imperiale",
      es: "Sistema imperial",
      uk: "\u0412\u0438\u043A\u043E\u0440\u0438\u0441\u0442\u043E\u0432\u0443\u0432\u0430\u0442\u0438 \u0448\u043A\u0430\u043B\u0443 \u0424\u0430\u0440\u0435\u043D\u0433\u0435\u0439\u0442\u0430",
      tr: "Emperyal birimler",
      id: "Kisaran Unit",
      da: "Engelske enheder"
    },
    Forecast: {
      fr: "Pr\xE9visions",
      sv: "Prognos",
      nl: "Voorspelling",
      pl: "Prognoza",
      pt_BR: "Previs\xE3o",
      ru: "\u041F\u0440\u043E\u0433\u043D\u043E\u0437",
      zh_CN: "\u9884\u62A5",
      sk: "Predpove\u010F",
      de: "Vorhersage",
      it: "Previsione",
      es: "Pron\xF3stico",
      tr: "Hava Durumu",
      uk: "\u041F\u0440\u043E\u0433\u043D\u043E\u0437",
      id: "Ramalan Cuaca",
      da: "Prognose"
    },
    "Every mornings": {
      fr: "Les matins",
      sv: "Varje morgon",
      nl: "Elke ochtend",
      pl: "Ka\u017Cdego poranka",
      pt_BR: "Toda manh\xE3",
      ru: "\u041A\u0430\u0436\u0434\u043E\u0435 \u0443\u0442\u0440\u043E",
      zh_CN: "\u6BCF\u5929\u65E9\u4E0A",
      sk: "Ka\u017Ed\xE9 r\xE1no",
      de: "Jeden Morgen",
      it: "Ogni mattina",
      es: "Cada ma\xF1ana",
      tr: "Her sabah",
      uk: "\u0429\u043E\u0440\u0430\u043D\u043A\u0443",
      id: "Setiap pagi",
      da: "Hver morgen"
    },
    "Always show": {
      fr: "Toujours",
      sv: "Alltid",
      nl: "Altijd",
      pl: "Zawsze pokazuj",
      pt_BR: "Mostrar",
      ru: "\u0412\u0441\u0435\u0433\u0434\u0430 \u043F\u043E\u043A\u0430\u0437\u044B\u0432\u0430\u0442\u044C",
      zh_CN: "\u603B\u662F",
      sk: "V\u017Edy",
      de: "Immer anzeigen",
      it: "Sempre",
      es: "Siempre",
      tr: "Her zaman g\xF6ster",
      uk: "\u0417\u0430\u0432\u0436\u0434\u0438",
      id: "Selalu tampilkan",
      da: "Vis altid"
    },
    "Never show": {
      fr: "Jamais",
      sv: "Aldrig",
      nl: "Nooit",
      pl: "Nigdy nie pokazuj",
      pt_BR: "Ocultar",
      ru: "\u041D\u0438\u043A\u043E\u0433\u0434\u0430 \u043D\u0435 \u043F\u043E\u043A\u0430\u0437\u044B\u0432\u0430\u0442\u044C",
      zh_CN: "\u7EDD\u4E0D",
      sk: "Nikdy",
      de: "Nie anzeigen",
      it: "Mai",
      es: "Nunca",
      tr: "Asla g\xF6sterme",
      uk: "\u041D\u0456\u043A\u043E\u043B\u0438",
      id: "Belum pernah upload",
      da: "Vis aldrig"
    },
    Temperature: {
      fr: "Temp\xE9rature",
      sv: "Temperatur",
      nl: "Temperatuur",
      pl: "Temperatura",
      pt_BR: "Temperatura",
      ru: "\u0422\u0435\u043C\u043F\u0435\u0440\u0430\u0442\u0443\u0440\u0430",
      zh_CN: "\u6E29\u5EA6",
      sk: "Teplota",
      de: "Temperatur",
      it: "Temperatura",
      es: "Temperatura",
      tr: "S\u0131cakl\u0131k",
      uk: "\u0422\u0435\u043C\u043F\u0435\u0440\u0430\u0442\u0443\u0440\u0430",
      id: "tempratur",
      da: "Temperatur"
    },
    Actual: {
      fr: "R\xE9elle",
      sv: "Faktisk",
      nl: "Werkelijke",
      pl: "Rzeczywista",
      pt_BR: "Real",
      ru: "\u0414\u0435\u0439\u0441\u0442\u0432\u0438\u0442\u0435\u043B\u044C\u043D\u044B\u0439",
      zh_CN: "\u5B9E\u9645\u7684",
      sk: "Re\xE1lny",
      de: "Tats\xE4chlich",
      it: "Real",
      es: "Real",
      tr: "Asl\u0131nda olan",
      uk: "\u0414\u0456\u0439\u0441\u043D\u0430",
      id: "Aktual",
      da: "Aktuel"
    },
    "Feels like": {
      fr: "Ressenti",
      sv: "K\xE4nsla",
      nl: "Gevoelsmatige",
      pl: "Odczuwalna",
      pt_BR: "Sensa\xE7\xE3o t\xE9rmica",
      ru: "\u041E\u0449\u0443\u0449\u0430\u0435\u0442\u0441\u044F \u043A\u0430\u043A",
      zh_CN: "\u611F\u89BA\u50CF",
      sk: "Pocit",
      de: "F\xFChlt Sich An Wie",
      it: "Si Sente Come",
      es: "Se Siente Como",
      tr: "Hissedilen",
      uk: "\u0412\u0456\u0434\u0447\u0443\u0442\u0442\u044F",
      id: "Terasa seperti",
      da: "F\xF8les som"
    },
    Both: {
      fr: "Les deux",
      sv: "B\xE5de",
      nl: "Beide",
      pl: "Obydwie",
      pt_BR: "Ambos",
      ru: "\u041E\u0431\u0430",
      zh_CN: "\u4E24\u4E2A\u90FD",
      sk: "Obaja",
      de: "Beide",
      it: "Entrambi",
      es: "Ambos",
      tr: "\u0130kisi birden",
      uk: "\u041E\u0431\u0438\u0434\u0432\u0456",
      id: "Keduanya",
      da: "Begge"
    },
    Notes: {
      fr: "Notes",
      sv: "Anteckningar",
      nl: "Opmerkingen",
      pl: "Uwagi",
      pt_BR: "Notas",
      ru: "\u041F\u0440\u0438\u043C\u0435\u0447\u0430\u043D\u0438\u044F",
      zh_CN: "\u7B14\u8BB0",
      sk: "Pozn\xE1mky",
      de: "Anmerkungen",
      it: "Note",
      es: "Notas",
      tr: "Notlar",
      uk: "\u041F\u0440\u0438\u043C\u0456\u0442\u043A\u0438",
      id: "Catatan",
      da: "Noter"
    },
    "Double click to edit": {
      fr: "Double-cliquez pour modifier",
      sv: "Dubbelklicka f\xF6r att redigera",
      nl: "Dubbelklik om te bewerken",
      pl: "Kliknij dwukrotnie, aby edytowa\u0107",
      pt_BR: "Clique duas vezes para editar",
      ru: "\u0414\u0432\u0430\u0436\u0434\u044B \u0449\u0435\u043B\u043A\u043D\u0438\u0442\u0435, \u0447\u0442\u043E\u0431\u044B \u0438\u0437\u043C\u0435\u043D\u0438\u0442\u044C",
      zh_CN: "\u53CC\u51FB\u7F16\u8F91",
      sk: "Ak chcete upravi\u0165, dvakr\xE1t kliknite",
      de: "Doppelklick zum bearbeiten",
      it: "Fare doppio clic per modificare",
      es: "Doble click para editar",
      tr: "D\xFCzenlemek i\xE7in \xE7ift t\u0131kla",
      uk: "\u0414\u0432\u0456\u0447\u0456 \u043A\u043B\u0430\u0446\u043D\u0456\u0442\u044C, \u0449\u043E\u0431 \u0440\u0435\u0434\u0430\u0433\u0443\u0432\u0430\u0442\u0438",
      id: "Klik dua kali untuk mengedit",
      da: "Dobbeltklik for at redigere"
    },
    "Supports Markdown and clickable checkboxes": {
      fr: "Compatible Markdown et cases \xE0 cocher cliquables",
      sv: "St\xF6der Markdown och klickbara kryssrutor",
      nl: "Ondersteunt Markdown en aanklikbare selectievakjes",
      pl: "Obs\u0142uguje Markdown i klikalne pola wyboru",
      pt_BR: "Suporta Markdown e caixas de sele\xE7\xE3o clic\xE1veis",
      ru: "\u041F\u043E\u0434\u0434\u0435\u0440\u0436\u0438\u0432\u0430\u0435\u0442 Markdown \u0438 \u0438\u043D\u0442\u0435\u0440\u0430\u043A\u0442\u0438\u0432\u043D\u044B\u0435 \u0444\u043B\u0430\u0436\u043A\u0438",
      zh_CN: "\u652F\u6301 Markdown \u548C\u53EF\u70B9\u51FB\u7684\u590D\u9009\u6846",
      sk: "Podporuje Markdown a klikacie za\u010Diarkavacie pol\xED\u010Dka",
      de: "Unterst\xFCtzt Markdown und anklickbare Kontrollk\xE4stchen",
      it: "Supporta Markdown e caselle di controllo selezionabili",
      es: "Admite Markdown y casillas de verificaci\xF3n en las que se puede hacer clic",
      tr: "Markdown ve t\u0131klanabilir onay kutular\u0131n\u0131 destekler",
      uk: "\u041F\u0456\u0434\u0442\u0440\u0438\u043C\u0443\u0454 Markdown \u0456 \u043A\u043B\u0456\u043A\u0430\u0431\u0435\u043B\u044C\u043D\u0456 \u043F\u0440\u0430\u043F\u043E\u0440\u0446\u0456",
      id: "Mendukung penurunan harga dan kotak centang yang dapat diklik",
      da: "Underst\xF8tter Markdown og klikbare afkrydsningsfelter"
    },
    "With keyboard shortcuts": {
      fr: "Avec des raccourcis clavier",
      sv: "Med kortkommandon",
      nl: "Met sneltoetsen",
      pl: "Za pomoc\u0105 skr\xF3t\xF3w klawiaturowych",
      pt_BR: "Com atalhos de teclado",
      ru: "\u0421 \u043F\u043E\u043C\u043E\u0449\u044C\u044E \u0441\u043E\u0447\u0435\u0442\u0430\u043D\u0438\u0439 \u043A\u043B\u0430\u0432\u0438\u0448",
      zh_CN: "\u4F7F\u7528\u952E\u76D8\u5FEB\u6377\u952E",
      sk: "S kl\xE1vesov\xFDmi skratkami",
      de: "Mit Tastaturk\xFCrzeln",
      it: "Con scorciatoie da tastiera",
      es: "Con atajos de teclado",
      tr: "Klavye k\u0131sayollar\u0131 ile",
      uk: "\u0417\u0430 \u0434\u043E\u043F\u043E\u043C\u043E\u0433\u043E\u044E \u043A\u043E\u043C\u0431\u0456\u043D\u0430\u0446\u0456\u0439 \u043A\u043B\u0430\u0432\u0456\u0448",
      id: "Dengan pintasan keyboard",
      da: "Med tastaturgenveje"
    },
    "see documentation": {
      fr: "voir la documentation",
      sv: "se i dokumentationen",
      nl: "zie in documentatie",
      pl: "patrz w dokumentacji",
      pt_BR: "veja na documenta\xE7\xE3o",
      ru: "\u0441\u043C. \u0432 \u0434\u043E\u043A\u0443\u043C\u0435\u043D\u0442\u0430\u0446\u0438\u0438",
      zh_CN: "\u89C1\u6587\u6863\u3002",
      sk: "pozri v dokument\xE1cii",
      de: "siehe Dokumentation",
      it: "vedere nella documentazione",
      es: "ver en la documentaci\xF3n",
      tr: "belgelere bak\u0131n",
      uk: "\u0434\u0438\u0432\u0456\u0442\u044C\u0441\u044F \u0432 \u0434\u043E\u043A\u0443\u043C\u0435\u043D\u0442\u0430\u0446\u0456\u0457",
      id: "lihat di dokumentasi",
      da: "se i dokumentationen"
    },
    "Text alignment": {
      fr: "Alignement du texte",
      sv: "Anpassning av text",
      nl: "Tekst uitlijnen",
      pl: "Wyr\xF3wnanie tekstu",
      pt_BR: "Alinhamento do texto",
      ru: "\u0412\u044B\u0440\u0430\u0432\u043D\u0438\u0432\u0430\u043D\u0438\u0435 \u0442\u0435\u043A\u0441\u0442\u0430",
      zh_CN: "\u6587\u672C\u5BF9\u9F50",
      sk: "Zarovnanie textu",
      de: "Text ausrichten",
      it: "Allineamento del testo",
      es: "Alineaci\xF3n del texto",
      tr: "Metin hizalama",
      uk: "\u0412\u0438\u0440\u0456\u0432\u043D\u044E\u0432\u0430\u043D\u043D\u044F \u0442\u0435\u043A\u0441\u0442\u0443",
      id: "Perataan teks",
      da: "Justering af tekst"
    },
    Left: {
      fr: "Gauche",
      sv: "V\xE4nster",
      nl: "Links",
      pl: "Lewa",
      pt_BR: "\xC0 esquerda",
      ru: "\u0421\u043B\u0435\u0432\u0430",
      zh_CN: "\u5DE6\u8FB9",
      sk: "V\u013Eavo",
      de: "Links",
      it: "A sinistra",
      es: "Izquierda",
      tr: "Sol",
      uk: "\u041B\u0456\u0432\u043E\u0440\u0443\u0447",
      id: "Kiri",
      da: "Venstre"
    },
    Center: {
      fr: "Centr\xE9",
      sv: "Centralt",
      nl: "Midden",
      pl: "\u015Arodek",
      pt_BR: "Centro",
      ru: "\u0426\u0435\u043D\u0442\u0440",
      zh_CN: "\u4E2D\u95F4",
      sk: "Stred",
      de: "Mitte",
      it: "Centro",
      es: "Centro",
      tr: "Merkez",
      uk: "\u0426\u0435\u043D\u0442\u0440",
      id: "Tengah",
      da: "Midt"
    },
    Right: {
      fr: "Droite",
      sv: "H\xF6ger",
      nl: "Rechts",
      pl: "Prawa",
      pt_BR: "Certo",
      ru: "\u041F\u0440\u0430\u0432\u044B\u0439",
      zh_CN: "\u53F3\u8FB9",
      sk: "Vpravo",
      de: "Rechts",
      it: "A destra",
      es: "Derecha",
      tr: "Do\u011Fru",
      uk: "\u041F\u0440\u0430\u0432\u043E\u0440\u0443\u0447",
      id: "Kanan",
      da: "H\xF8jre"
    },
    "Settings management": {
      fr: "Gestion des r\xE9glages",
      sv: "Settings management",
      nl: "Settings management",
      pl: "Settings management",
      pt_BR: "Settings management",
      ru: "Settings management",
      zh_CN: "Settings management",
      sk: "Settings management",
      de: "Settings management",
      it: "Settings management",
      es: "Settings management",
      tr: "Settings management",
      uk: "Settings management",
      id: "Settings management",
      da: "Settings management"
    },
    "Transfer your settings between multiple instances of Bonjourr.": {
      fr: "Transf\xE9rez vos r\xE9glages d'une instance de Bonjourr \xE0 une autre.",
      sv: "Transfer your settings between multiple instances of Bonjourr.",
      nl: "Transfer your settings between multiple instances of Bonjourr.",
      pl: "Transfer your settings between multiple instances of Bonjourr.",
      pt_BR: "Transfer your settings between multiple instances of Bonjourr.",
      ru: "Transfer your settings between multiple instances of Bonjourr.",
      zh_CN: "Transfer your settings between multiple instances of Bonjourr.",
      sk: "Transfer your settings between multiple instances of Bonjourr.",
      de: "Transfer your settings between multiple instances of Bonjourr.",
      it: "Transfer your settings between multiple instances of Bonjourr.",
      es: "Transfer your settings between multiple instances of Bonjourr.",
      tr: "Transfer your settings between multiple instances of Bonjourr.",
      uk: "Transfer your settings between multiple instances of Bonjourr.",
      id: "Transfer your settings between multiple instances of Bonjourr.",
      da: "Transfer your settings between multiple instances of Bonjourr."
    },
    "Search bar": {
      fr: "Barre de recherche",
      sv: "S\xF6kruta",
      nl: "Zoekbalk",
      pl: "Pasek wyszukiwania",
      pt_BR: "Barra de pesquisa",
      ru: "\u0421\u0442\u0440\u043E\u043A\u0430 \u043F\u043E\u0438\u0441\u043A\u0430",
      zh_CN: "\u641C\u7D22\u6846",
      sk: "VYH\u013DAD\xC1VAC\xCD PANEL",
      de: "Suchleiste",
      it: "Barra di ricerca",
      es: "Barra de b\xFAsqueda",
      tr: "Arama \xE7ubu\u011Fu",
      uk: "\u041F\u0430\u043D\u0435\u043B\u044C \u043F\u043E\u0448\u0443\u043A\u0443",
      id: "Bilah pencarian",
      da: "S\xF8gefelt"
    },
    "Search engine": {
      fr: "Moteur de recherche",
      sv: "S\xF6kmotor",
      nl: "Zoekmachine",
      pl: "Wyszukiwarka",
      pt_BR: "Buscadores",
      ru: "\u041F\u043E\u0438\u0441\u043A\u043E\u0432\u0430\u044F \u0441\u0438\u0441\u0442\u0435\u043C\u0430",
      zh_CN: "\u641C\u7D22\u5F15\u64CE",
      sk: "Vyh\u013Ead\xE1va\u010D",
      de: "Suchmaschine",
      it: "Motore di ricerca",
      es: "Motor de b\xFAsqueda",
      tr: "Arama motoru",
      uk: "\u041F\u043E\u0448\u0443\u043A\u043E\u0432\u0430 \u0441\u0438\u0441\u0442\u0435\u043C\u0430",
      id: "Mesin pencari",
      da: "S\xF8gemaskine"
    },
    Enable: {
      fr: "Activer",
      sv: "Aktivera",
      nl: "Activeren",
      pl: "Aktywuj",
      pt_BR: "Ativar",
      ru: "\u0412\u043A\u043B\u044E\u0447\u0438\u0442\u044C",
      zh_CN: "\u542F\u7528",
      sk: "Aktivova\u0165",
      de: "Aktivieren",
      it: "Abilita",
      es: "Activar",
      tr: "Aktif Et",
      uk: "\u0410\u043A\u0442\u0438\u0432\u043E\u0432\u0430\u043D\u043E",
      id: "Aktif",
      da: "Aktiver"
    },
    "Open in new tab": {
      fr: "Ouvrir dans un nouvel onglet",
      zh_CN: "\u5728\u65B0\u6807\u7B7E\u9875\u6253\u5F00\u94FE\u63A5",
      sv: "\xD6ppna i ny flik",
      nl: "Openen in nieuw tabblad",
      pl: "Otwieraj w nowej karcie",
      pt_BR: "Abrir em nova aba",
      ru: "\u041E\u0442\u043A\u0440\u044B\u0442\u044C \u0432 \u043D\u043E\u0432\u043E\u0439 \u0432\u043A\u043B\u0430\u0434\u043A\u0435",
      sk: "Otvori\u0165 v novej karte",
      de: "In einem neuen Tab \xF6ffnen",
      it: "Apri in una nuova scheda",
      es: "Abrir en una nueva pesta\xF1a",
      tr: "Yeni sekmede a\xE7",
      uk: "\u0412\u0456\u0434\u043A\u0440\u0438\u0442\u0438 \u0432 \u043D\u043E\u0432\u0456\u0439 \u0432\u043A\u043B\u0430\u0434\u0446\u0456",
      id: "Buka di tab baru",
      da: "\xC5ben i et nyt faneblad"
    },
    "URL request": {
      fr: "URL de requ\xEAte",
      sv: "URL beg\xE4ran",
      nl: "URL verzoek",
      pl: "\u017B\u0105danie adresu URL",
      pt_BR: "URL de pesquisa",
      ru: "URL-\u0437\u0430\u043F\u0440\u043E\u0441",
      zh_CN: "\u7F51\u5740\u8BF7\u6C42",
      sk: "\u017Diados\u0165 o adresu URL",
      de: "URL Anfrage",
      it: "Richiesta URL",
      es: "Solicitud de URL",
      tr: "URL iste\u011Fi",
      uk: "URL \u0437\u0430\u043F\u0438\u0442",
      id: "URL permintaan",
      da: "URL-anmodning"
    },
    "%s Not found": {
      fr: "%s Pas trouv\xE9",
      sv: "%s Hittades inte",
      nl: "%s Niet gevonden",
      pl: "Nie znaleziono %s",
      pt_BR: "% s N\xE3o encontrado",
      ru: "% s \u043D\u0435 \u043D\u0430\u0439\u0434\u0435\u043D\u043E",
      zh_CN: "%s \u672A\u627E\u5230",
      sk: "%s nebol n\xE1jden\xFD",
      de: "%s nicht gefunden",
      it: "%s non trovato",
      es: "% s no encontrado",
      tr: "%s bulunamad\u0131",
      uk: "%s \u043D\u0435 \u0437\u043D\u0430\u0439\u0434\u0435\u043D\u043E",
      id: "%s tidak ditemukan",
      da: "%s ikke fundet"
    },
    "Search query: %s": {
      fr: "Requ\xEAte: %s",
      sv: "S\xF6kfr\xE5ga: %s",
      nl: "Zoekopdracht: %s",
      pl: "Wyszukiwane has\u0142o: %s",
      pt_BR: "Buscador:% s",
      ru: "\u041F\u043E\u0438\u0441\u043A\u043E\u0432\u044B\u0439 \u0437\u0430\u043F\u0440\u043E\u0441: %s",
      zh_CN: "\u641C\u7D22\u67E5\u8BE2\uFF1A%s",
      sk: "Vyh\u013Ead\xE1vac\xED dopyt: %s",
      de: "Suchanfrage: %s",
      it: "Ricerca di ricerca: %s",
      es: "Consulta de b\xFAsqueda:% s",
      tr: "Arama sorgusu: %s",
      uk: "\u041F\u043E\u0448\u0443\u043A\u043E\u0432\u0438\u0439 \u0437\u0430\u043F\u0438\u0442: %s",
      id: "Pencarian kata kunci %s",
      da: "S\xF8geterm: %s"
    },
    Opacity: {
      fr: "Opacit\xE9",
      sv: "Opacitet",
      nl: "Dekking",
      pl: "Przezroczysto\u015B\u0107",
      pt_BR: "Opacidade",
      ru: "\u041D\u0435\u043F\u0440\u043E\u0437\u0440\u0430\u0447\u043D\u043E\u0441\u0442\u044C",
      zh_CN: "\u4E0D\u900F\u660E\u5EA6",
      sk: "Neprieh\u013Eadnos\u0165",
      de: "Deckkraft",
      it: "Opacit\xE0",
      es: "Opacidad",
      tr: "Opakl\u0131k",
      uk: "\u041D\u0435\u043F\u0440\u043E\u0437\u043E\u0440\u0456\u0441\u0442\u044C",
      id: "Transparansi",
      da: "Uigennemsigtighed"
    },
    "Time & Date": {
      fr: "Date & heure",
      sv: "Tid och datum",
      nl: "Datum en tijd",
      pl: "Data i godzina",
      pt_BR: "Data & Hora",
      ru: "\u0412\u0440\u0435\u043C\u044F \u0438 \u0434\u0430\u0442\u0430",
      zh_CN: "\u65F6\u95F4\u548C\u65E5\u671F",
      sk: "\u010Cas a d\xE1tum",
      de: "Zeit und Datum",
      it: "Ora dell'appuntamento",
      es: "Fecha & hora",
      tr: "Saat ve Tarih",
      uk: "\u0427\u0430\u0441 & \u0414\u0430\u0442\u0430",
      id: "Waktu & Tanggal",
      da: "Tid og dato"
    },
    "Custom Style": {
      fr: "Style personnalis\xE9",
      sv: "Anpassad stil",
      nl: "Aangepaste stijl",
      pl: "Niestandardowy styl",
      pt_BR: "Estilo Personalizado",
      ru: "\u041F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u044C\u0441\u043A\u0438\u0439 \u0441\u0442\u0438\u043B\u044C",
      zh_CN: "\u81EA\u5B9A\u4E49\u6837\u5F0F",
      sk: "Vlastn\xFD \u0161t\xFDl",
      de: "Benutzerdefinierter Stil",
      it: "Stile personalizzato",
      es: "Estilo personalizado",
      tr: "\xD6zel Stil",
      uk: "\u0412\u043B\u0430\u0441\u043D\u0456 \u0441\u0442\u0438\u043B\u0456",
      id: "Personalisasi Gaya",
      da: "Tilpasset stil"
    },
    "Type in your custom CSS": {
      fr: "Entrez votre CSS personnalis\xE9",
      sv: "Skriv in din anpassade CSS",
      nl: "Typ uw aangepaste CSS in",
      pl: "Wprowad\u017A sw\xF3j niestandardowy kod CSS",
      pt_BR: "Insira seu CSS personalizado",
      ru: "\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0441\u0432\u043E\u0439 \u0441\u043E\u0431\u0441\u0442\u0432\u0435\u043D\u043D\u044B\u0439 CSS",
      zh_CN: "\u8F93\u5165\u60A8\u7684\u81EA\u5B9A\u4E49 CSS",
      sk: "Zadajte svoj vlastn\xFD CSS",
      de: "Geben Sie Ihr benutzerdefiniertes CSS ein",
      it: "Digita il tuo CSS personalizzato",
      es: "Escribe aqu\xED tu CSS personalizado",
      tr: "\xD6zel CSS kodunuzu yaz\u0131n",
      uk: "\u0421\u043A\u043E\u043F\u0456\u044E\u0439\u0442\u0435 \u0432\u043B\u0430\u0441\u043D\u0438\u0439 CSS",
      id: "Ketik CSS khusus Anda",
      da: "Skriv dit tilpassede CSS"
    },
    "Make cool things happen with CSS. ": {
      fr: "Tentez de jolies choses en CSS. ",
      sv: "F\xE5 coola saker att h\xE4nda med CSS. ",
      nl: "Laat coole dingen gebeuren met CSS. ",
      pl: "Tw\xF3rz fajne rzeczy dzi\u0119ki CSS. ",
      pt_BR: "Fa\xE7a coisas legais acontecerem com CSS. ",
      ru: "\u0422\u0432\u043E\u0440\u0438\u0442\u0435 \u0441 \u043F\u043E\u043C\u043E\u0449\u044C\u044E CSS. ",
      zh_CN: "\u7528 CSS \u8BA9\u5F88\u9177\u7684\u4E8B\u60C5\u53D1\u751F\u3002 ",
      sk: "Urobte skvel\xE9 veci pomocou CSS. ",
      de: "Machen Sie mit CSS coole Dinge m\xF6glich. ",
      it: "Fai accadere cose interessanti con i CSS. ",
      es: "Haz que sucedan cosas geniales con CSS. ",
      tr: "CSS ile harika \u015Feyler yap\u0131n. ",
      uk: "\u0417\u0440\u043E\u0431\u0456\u0442\u044C \u043A\u0440\u0443\u0442\u0456 \u0440\u0435\u0447\u0456 \u0437\u0430 \u0434\u043E\u043F\u043E\u043C\u043E\u0433\u043E\u044E CSS. ",
      id: "Wujudkan hal-hal mewah dengan CSS. ",
      da: "F\xE5 smarte ting til at ske med CSS. "
    },
    "Check out our ": {
      fr: "Jetez un oeil \xE0 nos ",
      sv: "Kolla in v\xE5r ",
      nl: "Bekijk onze ",
      pl: "Sprawd\u017A nasze ",
      pt_BR: "Confira nosso ",
      ru: "\u041F\u043E\u0441\u043C\u043E\u0442\u0440\u0438\u0442\u0435 \u043D\u0430\u0448\u0438 ",
      zh_CN: "\u770B\u770B\u6211\u4EEC\u7684 ",
      sk: "Pozrite si na\u0161e ",
      de: "Schauen Sie sich unsere an ",
      it: "Dai un'occhiata al nostro ",
      es: "Echa un vistazo a nuestro ",
      tr: "G\xF6z at\u0131n ",
      uk: "Check out our ",
      id: "Lihat kami ",
      da: "Tjek vores "
    },
    "CSS snippets.": {
      fr: "extraits de CSS.",
      sv: "CSS-utdrag.",
      nl: "CSS-fragmenten.",
      pl: "Fragmenty kodu CSS.",
      pt_BR: "trechos de CSS.",
      ru: "CSS-\u0441\u043D\u0438\u043F\u043F\u0435\u0442\u044B.",
      zh_CN: "CSS \u7247\u6BB5\u3002",
      sk: "\xFAryvky CSS.",
      de: "CSS-Schnipsel.",
      it: "frammenti CSS.",
      es: "Fragmentos de CSS.",
      tr: "CSS snippet'lar\u0131",
      uk: "CSS snippets.",
      id: "Cuplikan CSS.",
      da: "CSS uddrag."
    },
    "US Date Format": {
      fr: "Date am\xE9ricaine",
      sv: "Amerikansk dejt",
      nl: "Amerikaanse datumnotatie",
      pl: "Ameryka\u0144ski format daty",
      pt_BR: "Formato de data dos EUA",
      ru: "\u0424\u043E\u0440\u043C\u0430\u0442 \u0434\u0430\u0442\u044B \u0421\u0428\u0410",
      zh_CN: "\u7F8E\u56FD\u65E5\u671F\u683C\u5F0F",
      sk: "Form\xE1t d\xE1tumu v USA",
      de: "US-Datumsformat",
      it: "Formato data USA",
      es: "Formato de fecha americano",
      tr: "Amerikan tarih format\u0131",
      uk: "\u0424\u043E\u0440\u043C\u0430\u0442 \u0434\u0430\u0442\u0438 \u0421\u0428\u0410",
      id: "Format Tanggal US",
      da: "Amerikansk datoformat"
    },
    "12-Hour Time": {
      fr: "Affichage 12h",
      sv: "12-timmars klocka",
      nl: "12 uur tijd",
      pl: "Czas 12-godzinny",
      pt_BR: "Formato de 12 horas",
      ru: "12-\u0447\u0430\u0441\u043E\u0432\u043E\u0439 \u0444\u043E\u0440\u043C\u0430\u0442 \u0432\u0440\u0435\u043C\u0435\u043D\u0438",
      zh_CN: "12\u5C0F\u65F6\u5236",
      sk: "12-hodinov\xFD \u010Das",
      de: "12-Stunden Uhrzeit",
      it: "Sistema orario a 12 ore",
      es: "Sistema horario de 12 horas",
      tr: "12 Saatlik zaman",
      uk: "12-\u0433\u043E\u0434\u0438\u043D\u043D\u0438\u0439 \u0444\u043E\u0440\u043C\u0430\u0442 \u0447\u0430\u0441\u0443",
      id: "Waktu 12-Jam",
      da: "12-timers ur"
    },
    "Time zone": {
      fr: "Fuseau horaire",
      sv: "Tidszon",
      nl: "Tijdzone",
      pl: "Strefa czasowa",
      pt_BR: "Fuso Hor\xE1rio",
      ru: "\u0427\u0430\u0441\u043E\u0432\u043E\u0439 \u043F\u043E\u044F\u0441",
      zh_CN: "\u65F6\u533A",
      sk: "\u010Casov\xE9 p\xE1smo",
      de: "Zeitzone",
      it: "Fuso orario",
      es: "Uso horario",
      tr: "Saat dilimi",
      uk: "\u0427\u0430\u0441\u043E\u0432\u0438\u0439 \u043F\u043E\u044F\u0441",
      id: "Zona Waktu",
      da: "Tidszone"
    },
    Language: {
      fr: "Langue",
      sv: "V\xE4lj spr\xE5k",
      nl: "Kies een taal",
      pl: "J\u0119zyk",
      pt_BR: "Idioma",
      ru: "\u042F\u0437\u044B\u043A",
      zh_CN: "\u9009\u62E9\u8BED\u8A00",
      sk: "Vybra\u0165 jazyk",
      de: "Sprache",
      it: "Lingua",
      es: "Lenguaje o idioma",
      tr: "Dil",
      uk: "\u041C\u043E\u0432\u0430",
      id: "Bahasa",
      da: "Sprog"
    },
    Greeting: {
      fr: "Bienvenue",
      sv: "H\xE4lsning",
      nl: "Groet",
      pl: "Powitanie",
      pt_BR: "Sauda\xE7\xE3o",
      ru: "\u041F\u0440\u0438\u0432\u0435\u0442\u0441\u0442\u0432\u0438\u0435",
      zh_CN: "\u95EE\u5019",
      sk: "S pozdravom",
      de: "Gru\xDF",
      it: "Saluto",
      es: "Saludo",
      tr: "Selamlama",
      uk: "\u041F\u0440\u0438\u0432\u0456\u0442\u0430\u043D\u043D\u044F",
      id: "Salam",
      da: "Velkomst"
    },
    Quotes: {
      fr: "Citations",
      sv: "Citat",
      nl: "Citaten",
      pl: "Cytaty",
      pt_BR: "Cita\xE7\xF5es",
      ru: "\u0426\u0438\u0442\u0430\u0442\u044B",
      zh_CN: "\u5F15\u53F7",
      sk: "Cit\xE1cie",
      de: "Zitate",
      it: "Citazioni",
      es: "Cotizaciones",
      tr: "Al\u0131nt\u0131lar",
      uk: "\u0426\u0438\u0442\u0430\u0442\u0438",
      id: "Kutipan",
      da: "Citater"
    },
    "Always show author": {
      fr: "Toujours afficher l'auteur",
      sv: "Visa alltid f\xF6rfattaren",
      nl: "Altijd auteur weergeven",
      pl: "Zawsze pokazuj autora",
      pt_BR: "Sempre mostrar autor",
      ru: "\u0412\u0441\u0435\u0433\u0434\u0430 \u043F\u043E\u043A\u0430\u0437\u044B\u0432\u0430\u0442\u044C \u0430\u0432\u0442\u043E\u0440\u0430",
      zh_CN: "\u59CB\u7EC8\u663E\u793A\u4F5C\u8005",
      sk: "V\u017Edy zobrazi\u0165 autora",
      de: "Autor immer anzeigen",
      it: "Mostra sempre l'autore",
      es: "Mostrar siempre el autor",
      tr: "Yazar\u0131 her zaman g\xF6ster",
      uk: "\u041F\u043E\u043A\u0430\u0437\u0443\u0432\u0430\u0442\u0438 \u0430\u0432\u0442\u043E\u0440\u0430",
      id: "Selalu tunjukkan penulis",
      da: "Vis altid forfatteren"
    },
    "Quote type": {
      fr: "Type de citations",
      sv: "Typ av citat",
      nl: "Soort citaten",
      pl: "Rodzaj cytatu",
      pt_BR: "Tipo de cita\xE7\xE3o",
      ru: "\u0412\u0438\u0434 \u0446\u0438\u0442\u0430\u0442\u044B",
      zh_CN: "\u4E00\u79CD\u62A5\u4EF7",
      sk: "Druh cit\xE1tu",
      de: "Art Zitat",
      it: "Tipo di citazione",
      es: "Tipo de cotizaci\xF3n",
      tr: "Al\u0131nt\u0131 t\xFCr\xFC",
      uk: "\u0432\u0438\u0434 \u0446\u0438\u0442\u0430\u0442\u0438",
      id: "Tipe kutipan",
      da: "Type af citat"
    },
    Classic: {
      fr: "Classique",
      sv: "Klassisk",
      nl: "Klassiek",
      pl: "Klasyczny",
      pt_BR: "Cl\xE1ssico",
      ru: "\u041A\u043B\u0430\u0441\u0441\u0438\u0447\u0435\u0441\u043A\u0438\u0439",
      zh_CN: "\u7ECF\u5178\u7684",
      sk: "klasick\xE9",
      de: "Klassisch",
      it: "Classico",
      es: "Cl\xE1sico",
      tr: "Klasik",
      uk: "\u041A\u043B\u0430\u0441\u0438\u0447\u043D\u0438\u0439",
      id: "Klasik",
      da: "Klassisk"
    },
    Fonts: {
      fr: "Polices",
      sv: "Anpassat teckensnitt",
      nl: "Aangepast lettertype",
      pl: "Czcionka",
      pt_BR: "Fonte Personalizada",
      ru: "\u041F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u044C\u0441\u043A\u0438\u0439 \u0448\u0440\u0438\u0444\u0442",
      zh_CN: "\u81EA\u5B9A\u4E49\u5B57\u4F53",
      sk: "Vlastn\xE9 p\xEDsmo",
      de: "Benutzerdefinierte Schriftart",
      it: "Carattere personalizzato",
      es: "Tipograf\xEDa personalizada",
      tr: "Yaz\u0131 tipleri",
      uk: "\u0412\u043B\u0430\u0441\u043D\u0438\u0439 \u0448\u0440\u0438\u0444\u0442",
      id: "Pernolasasi Font",
      da: "Skrifttyper"
    },
    "Font family": {
      fr: "Police",
      sv: "Typsnittsfamilj",
      nl: "Lettertypefamilie",
      pl: "Typ czcionki",
      pt_BR: "Fam\xEDlia de fontes",
      ru: "\u0421\u0435\u043C\u0435\u0439\u0441\u0442\u0432\u043E \u0448\u0440\u0438\u0444\u0442\u043E\u0432",
      zh_CN: "\u5B57\u4F53\u7CFB\u5217",
      sk: "Rodina p\xEDsem",
      de: "Schriftfamilie",
      it: "Famiglia di font",
      es: "Tipograf\xEDa",
      tr: "Yaz\u0131 tipi ailesi",
      uk: "\u0428\u0440\u0438\u0444\u0442",
      id: "Font family",
      da: "Skrifttype familie"
    },
    Weight: {
      fr: "\xC9paisseur",
      sv: "Vikt",
      nl: "Gewicht",
      pl: "Pogrubienie",
      pt_BR: "Peso",
      ru: "\u041C\u0430\u0441\u0441\u0430",
      zh_CN: "\u91CD\u91CF",
      sk: "Hmotnos\u0165",
      de: "Gewicht",
      it: "Il peso",
      es: "Peso",
      tr: "A\u011F\u0131rl\u0131k",
      uk: "\u041D\u0430\u0441\u0438\u0447\u0435\u043D\u0456\u0441\u0442\u044C",
      id: "Bobot",
      da: "V\xE6gt"
    },
    Size: {
      fr: "Taille",
      sv: "Storlek",
      nl: "Grootte",
      pl: "Rozmiar",
      pt_BR: "Tamanho",
      ru: "\u0420\u0430\u0437\u043C\u0435\u0440",
      zh_CN: "\u5C3A\u5BF8",
      sk: "Ve\u013Ekos\u0165",
      de: "Gr\xF6\xDFe",
      it: "Taglia",
      es: "Tama\xF1o",
      tr: "Boyut",
      uk: "\u0420\u043E\u0437\u043C\u0456\u0440",
      id: "Ukuran",
      da: "st\xF8rrelse"
    },
    Shadow: {
      fr: "Ombres",
      sv: "Shadow",
      nl: "Shadow",
      pl: "Cie\u0144",
      pt_BR: "Shadow",
      ru: "\u0422\u0435\u043D\u044C",
      zh_CN: "Shadow",
      sk: "Shadow",
      de: "Shadow",
      it: "Shadow",
      es: "Shadow",
      tr: "G\xF6lge",
      uk: "Shadow",
      id: "Shadow",
      da: "Skygge"
    },
    "Custom CSS": {
      fr: "CSS personnalis\xE9",
      sv: "Anpassad CSS",
      nl: "Aangepaste CSS",
      pl: "Niestandardowy kod CSS",
      pt_BR: "CSS Personalizado",
      ru: "\u041F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u044C\u0441\u043A\u0438\u0439 CSS",
      zh_CN: "\u81EA\u5B9A\u4E49 CSS",
      sk: "Vlastn\xFD CSS",
      de: "Benutzerdefinierte CSS",
      it: "CSS personalizzato",
      es: "CSS personalizado",
      tr: "\xD6zel CSS",
      uk: "\u0412\u043B\u0430\u0441\u043D\u0438\u0439 CSS",
      id: "Personalisasi CSS",
      da: "Tilpasset CSS"
    },
    Settings: {
      fr: "R\xE9glages",
      sv: "Inst\xE4llningar",
      nl: "Instellingen",
      pl: "Ustawienia",
      pt_BR: "Configura\xE7\xF5es",
      ru: "\u041D\u0430\u0441\u0442\u0440\u043E\u0439\u043A\u0438",
      zh_CN: "\u8BBE\u7F6E",
      sk: "Nastavenia",
      de: "Einstellungen",
      it: "Impostazioni",
      es: "Configuraci\xF3n",
      tr: "Ayarlar",
      uk: "\u041D\u0430\u043B\u0430\u0448\u0442\u0443\u0432\u0430\u043D\u043D\u044F",
      id: "Pengaturan",
      da: "Indstillinger"
    },
    Import: {
      fr: "Importer",
      sv: "Importera",
      nl: "Importeren",
      pl: "Importuj",
      pt_BR: "Importar",
      ru: "\u0418\u043C\u043F\u043E\u0440\u0442",
      zh_CN: "\u5BFC\u5165\u8BBE\u7F6E",
      sk: "Importova\u0165",
      de: "Importieren",
      it: "Importare",
      es: "Importar",
      tr: "\u0130\xE7e aktar",
      uk: "\u0406\u043C\u043F\u043E\u0440\u0442\u0443\u0432\u0430\u0442\u0438",
      id: "Impor",
      da: "Import\xE9r"
    },
    Export: {
      fr: "Exporter",
      sv: "Exportera",
      nl: "Exporteren",
      pl: "Eksport",
      pt_BR: "Exportar",
      ru: "\u042D\u043A\u0441\u043F\u043E\u0440\u0442",
      zh_CN: "\u5BFC\u51FA\u8BBE\u7F6E",
      sk: "Export",
      de: "Exportieren",
      it: "Esportare",
      es: "Exportar",
      tr: "D\u0131\u015Fa aktar",
      uk: "\u0415\u043A\u0441\u043F\u043E\u0440\u0442\u0443\u0432\u0430\u0442\u0438",
      id: "Ekspor",
      da: "Eksport\xE9r"
    },
    Copied: {
      fr: "Copi\xE9",
      sv: "Kopierat",
      nl: "Gekopieerd",
      pl: "Skopiowano",
      pt_BR: "Copiado",
      ru: "\u0421\u043A\u043E\u043F\u0438\u0440\u043E\u0432\u0430\u043D\u043E",
      zh_CN: "\u5DF2\u590D\u5236",
      sk: "Skop\xEDrovan\xE9",
      de: "Kopiert",
      it: "Copiato",
      es: "Copiado",
      tr: "Kopyaland\u0131",
      uk: "\u0421\u043A\u043E\u043F\u0456\u0439\u043E\u0432\u0430\u043D\u043E",
      id: "Disalin",
      da: "Kopieret"
    },
    "Copy text": {
      fr: "Copier texte",
      sv: "Kopiera text",
      nl: "Tekst kopi\xEBren",
      pl: "Kopiowanie tekstu",
      pt_BR: "Copiar texto",
      ru: "\u041A\u043E\u043F\u0438\u0440\u043E\u0432\u0430\u043D\u0438\u0435 \u0442\u0435\u043A\u0441\u0442\u0430",
      zh_CN: "\u590D\u5236\u6587\u672C",
      sk: "Kop\xEDrovanie textu",
      de: "Text kopieren",
      it: "Copiare il testo",
      es: "Copiar texto",
      tr: "Metni kopyala",
      uk: "\u041A\u043E\u043F\u0456\u044E\u0432\u0430\u0442\u0438 \u0442\u0435\u043A\u0441\u0442",
      id: "Salin teks",
      da: "Kopiering af tekst"
    },
    "Export as file": {
      fr: "Exporter comme fichier",
      sv: "Exportera som fil",
      nl: "Exporteer als bestand",
      pl: "Eksportuj jako plik",
      pt_BR: "Exportar como arquivo",
      ru: "\u042D\u043A\u0441\u043F\u043E\u0440\u0442 \u0432 \u0444\u0430\u0439\u043B",
      zh_CN: "\u5BFC\u51FA\u4E3A\u6587\u4EF6",
      sk: "Exportova\u0165 ako s\xFAbor",
      de: "Als Datei exportieren",
      it: "Esportazione come file",
      es: "Exportar como archivo",
      tr: "Dosya olarak d\u0131\u015Fa aktar",
      uk: "\u0415\u043A\u0441\u043F\u043E\u0440\u0442\u0443\u0432\u0430\u0442\u0438 \u0443 \u0444\u0430\u0439\u043B",
      id: "Ekspor sebagai file",
      da: "Eksport som fil"
    },
    "Drop file to import settings": {
      fr: "D\xE9poser le fichier pour importer les param\xE8tres",
      sv: "Sl\xE4pp fil f\xF6r att importera inst\xE4llningar",
      nl: "Drop bestand om instellingen te importeren",
      pl: "Upu\u015B\u0107 plik, aby zaimportowa\u0107 ustawienia",
      pt_BR: "Arquivo drop to import settings",
      ru: "\u0421\u043A\u0438\u043D\u044C\u0442\u0435 \u0444\u0430\u0439\u043B \u0434\u043B\u044F \u0438\u043C\u043F\u043E\u0440\u0442\u0430 \u043D\u0430\u0441\u0442\u0440\u043E\u0435\u043A",
      zh_CN: "\u5220\u9664\u6587\u4EF6\u4EE5\u5BFC\u5165\u8BBE\u7F6E",
      sk: "Spustenie s\xFAboru na import nastaven\xED",
      de: "Datei ablegen, um Einstellungen zu importieren",
      it: "Rilasciare il file per importare le impostazioni",
      es: "Soltar el archivo para importar la configuraci\xF3n",
      tr: "Ayarlar\u0131 i\xE7e aktarmak i\xE7in dosya b\u0131rak\u0131n",
      uk: "\u0421\u043A\u0438\u043D\u044C\u0442\u0435 \u0444\u0430\u0439\u043B \u0434\u043B\u044F \u0456\u043C\u043F\u043E\u0440\u0442\u0443 \u043D\u0430\u043B\u0430\u0448\u0442\u0443\u0432\u0430\u043D\u044C",
      id: "Jatuhkan file untuk mengimpor pengaturan",
      da: "Drop fil for at importere indstillinger"
    },
    "or paste as text": {
      fr: "ou coller en tant que texte",
      sv: "eller klistra in som text",
      nl: "of plakken als tekst",
      pl: "lub wklej jako tekst",
      pt_BR: "ou colar como texto",
      ru: "\u0438\u043B\u0438 \u0432\u0441\u0442\u0430\u0432\u044C\u0442\u0435 \u043A\u0430\u043A \u0442\u0435\u043A\u0441\u0442",
      zh_CN: "\u6216\u4F5C\u4E3A\u6587\u672C\u7C98\u8D34",
      sk: "alebo vlo\u017Ete ako text",
      de: "oder als Text einf\xFCgen",
      it: "o incollare come testo",
      es: "o pegar como texto",
      tr: "veya metin olarak yap\u0131\u015Ft\u0131r\u0131n",
      uk: "\u0430\u0431\u043E \u0432\u0441\u0442\u0430\u0432\u0438\u0442\u0438 \u044F\u043A \u0442\u0435\u043A\u0441\u0442",
      id: "atau tempelkan sebagai teks",
      da: "of plakken als tekst"
    },
    "Reset settings": {
      fr: "R\xE9initialiser les r\xE9glages",
      sv: "\xC5terst\xE4ll inst\xE4llningar",
      nl: "Reset instellingen",
      pl: "Przywr\xF3\u0107 ustawienia domy\u015Blne",
      pt_BR: "Redefinir configura\xE7\xF5es",
      ru: "\u0421\u0431\u0440\u043E\u0441\u0438\u0442\u044C \u043D\u0430\u0441\u0442\u0440\u043E\u0439\u043A\u0438",
      zh_CN: "\u91CD\u65B0\u8BBE\u7F6E",
      sk: "Obnovi\u0165 nastavenia",
      de: "Einstellungen zur\xFCcksetzen",
      it: "Impostazioni iniziali",
      es: "Restablecer configuraci\xF3n",
      tr: "Ayarlar\u0131 s\u0131f\u0131rla",
      uk: "\u0421\u043A\u0438\u043D\u0443\u0442\u0438 \u043D\u0430\u043B\u0430\u0448\u0442\u0443\u0432\u0430\u043D\u043D\u044F",
      id: "Setel ulang pengaturan",
      da: "Nulstil indstillingerne"
    },
    "Are you sure ?": {
      fr: "Vous \xEAtes s\xFBr ?",
      sv: "\xC4r du s\xE4ker?",
      nl: "Weet u het zeker ?",
      pl: "Czy jeste\u015B pewien?",
      pt_BR: "Voc\xEA tem certeza?",
      ru: "\u0412\u044B \u0443\u0432\u0435\u0440\u0435\u043D\u044B?",
      zh_CN: "\u4F60\u786E\u5B9A\u5417\uFF1F",
      sk: "Ste si ist\xED ?",
      de: "Sind Sie sicher?",
      it: "Sei sicuro?",
      es: "\xBFEst\xE1 seguro?",
      tr: "Emin misin?",
      uk: "\u0412\u0438 \u0432\u043F\u0435\u0432\u043D\u0435\u043D\u0456?",
      id: "Apakah Anda yakin?",
      da: "Er du sikker?"
    },
    "I am sure": {
      fr: "Je suis s\xFBr",
      sv: "Jag \xE4r s\xE4ker",
      nl: "Ik ben zeker",
      pl: "Jestem pewien.",
      pt_BR: "Sim",
      ru: "\u0423\u0432\u0435\u0440\u0435\u043D",
      zh_CN: "\u6211\u786E\u5B9A",
      sk: "Som si ist\xFD",
      de: "Ich bin sicher",
      it: "Sono sicuro",
      es: "Estoy seguro",
      tr: "Eminim.",
      uk: "\u0422\u0430\u043A",
      id: "Saya yakin",
      da: "Jeg er sikker"
    },
    "No, go back": {
      fr: "Finalement non",
      sv: "Nej, g\xE5 tillbaka",
      nl: "Nee, ga terug",
      pl: "Nie, wr\xF3\u0107",
      pt_BR: "N\xE3o, voltar",
      ru: "\u041D\u0435\u0442, \u0432\u0435\u0440\u043D\u0438\u0442\u0435\u0441\u044C \u043D\u0430\u0437\u0430\u0434",
      zh_CN: "\u4E0D\u786E\u5B9A\uFF0C\u56DE\u53BB\u5427",
      sk: "Nie, vr\xE1\u0165te sa sp\xE4\u0165",
      de: "Nein, zur\xFCckgehen",
      it: "No, torna indietro",
      es: "No, vuelva atr\xE1s",
      tr: "Hay\u0131r, geri d\xF6n.",
      uk: "\u041D\u0456, \u043F\u043E\u0432\u0435\u0440\u043D\u0456\u0442\u044C\u0441\u044F \u043D\u0430\u0437\u0430\u0434",
      id: "Tidak, kembali",
      da: "Nej, g\xE5 tilbage"
    },
    "Made in France with \u2764\uFE0F": {
      fr: "Fabriqu\xE9 en France avec \u2764\uFE0F",
      sv: "Tillverkad i frankrike med \u2764\uFE0F",
      nl: "Gemaakt in Frankrijk met \u2764\uFE0F",
      pl: "Stworzone we Francji z \u2764\uFE0F",
      pt_BR: "Feito na Fran\xE7a com \u2764\uFE0F",
      ru: "\u0421\u0434\u0435\u043B\u0430\u043D\u043E \u0432\u043E \u0424\u0440\u0430\u043D\u0446\u0438\u0438 \u0441 \u2764\uFE0F",
      zh_CN: "\u6E90\u81EA\u6CD5\u56FD \u5320\u2764\uFE0F\u6253\u9020",
      sk: "Spraven\xE9 vo Franc\xFAzsku s \u2764\uFE0F",
      de: "Gemacht in Frankreich mit \u2764\uFE0F",
      it: "Fatto in Francia con \u2764\uFE0F",
      es: "Hecho en Francia con \u2764\uFE0F",
      tr: "\u2764\uFE0F ile Fransa'da \xFCretilmi\u015Ftir",
      uk: "\u0421\u0442\u0432\u043E\u0440\u0435\u043D\u043E \u0432 \u0424\u0440\u0430\u043D\u0446\u0456\u0457 \u0437 \u2764\uFE0F",
      id: "Dibuat di Prancis dengan \u2764\uFE0F",
      da: "Lavet i Frankrig med \u2764\uFE0F"
    },
    by: {
      fr: "par",
      sv: "av",
      nl: "Door",
      pl: "przez",
      pt_BR: "por",
      ru: "\u0420\u0430\u0437\u0440\u0430\u0431\u043E\u0442\u0447\u0438\u043A\u0438:",
      zh_CN: "\u7531",
      sk: "od",
      de: "von",
      it: "Da",
      es: "por",
      tr: "taraf\u0131ndan",
      uk: "\u0420\u043E\u0437\u0440\u043E\u0431\u043D\u0438\u043A\u0438:",
      id: "oleh",
      da: "af"
    },
    Visit: {
      fr: "Rendez-vous sur",
      sv: "Bes\xF6k",
      nl: "Bezoek",
      pl: "Do zobaczenia na",
      pt_BR: "Veja",
      ru: "\u041F\u043E\u0441\u0435\u0442\u0438\u0442\u0435",
      zh_CN: "\u8BBF\u95EE",
      sk: "Nav\u0161t\xEDvte",
      de: "Besuche",
      it: "Visita",
      es: "Visita",
      tr: "Ziyaret Et",
      uk: "\u0412\u0456\u0434\u0432\u0456\u0434\u0430\u0439\u0442\u0435",
      id: "Kunjungi",
      da: "Bes\xF8g"
    },
    "our website": {
      fr: "notre site Internet",
      sv: "v\xE5r hemsida",
      nl: "onze website",
      pl: "nasza strona",
      pt_BR: "nosso site",
      ru: "\u043D\u0430\u0448 \u0441\u0430\u0439\u0442",
      zh_CN: "\u6211\u4EEC\u7684\u7F51\u7AD9",
      sk: "na\u0161u webstr\xE1nku",
      de: "unsere Website",
      it: "il nostro sito internet",
      es: "nuestro sitio web",
      tr: "websitemiz",
      uk: "\u043D\u0430\u0448 \u0441\u0430\u0439\u0442",
      id: "Website kami",
      da: "vores hjemmeside"
    },
    "for infos and donations": {
      fr: "pour en savoir plus ou faire un don",
      sv: "f\xF6r mera information och donationer",
      nl: "Voor informatie en donaties",
      pl: "aby dowiedzie\u0107 si\u0119 wi\u0119cej lub przekaza\u0107 darowizn\u0119",
      pt_BR: "para mais informa\xE7\xF5es e doa\xE7\xF5es",
      ru: "\u0447\u0442\u043E\u0431\u044B \u0443\u0437\u043D\u0430\u0442\u044C \u0431\u043E\u043B\u044C\u0448\u0435 \u0438\u043B\u0438 \u043F\u043E\u0434\u0434\u0435\u0440\u0436\u0430\u0442\u044C \u0440\u0430\u0437\u0440\u0430\u0431\u043E\u0442\u0447\u0438\u043A\u043E\u0432",
      zh_CN: "\u4EE5\u83B7\u53D6\u66F4\u591A\u8D44\u8BAF\uFF0C\u6216\u5411\u6211\u4EEC\u6350\u6B3E",
      sk: "pre inform\xE1cie a dary",
      de: "f\xFCr Informationen und Spenden",
      it: "per info e donazioni",
      es: "para m\xE1s info y donaciones",
      tr: "bilgi ve ba\u011F\u0131\u015F i\xE7in",
      uk: "\u0434\u043B\u044F \u043E\u0442\u0440\u0438\u043C\u0430\u043D\u043D\u044F \u0434\u043E\u0434\u0430\u0442\u043A\u043E\u0432\u043E\u0457 \u0456\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0456\u0457 \u0430\u0431\u043E \u043F\u043E\u0436\u0435\u0440\u0442\u0432\u0443\u0432\u0430\u043D\u043D\u044F",
      id: "untuk info dan donasi",
      da: "for at l\xE6re mere eller donere"
    }
  };
  var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  var months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
  ];
  var enginesUrls = {
    google: "https://www.google%l/search?q=%s",
    ddg: "https://duckduckgo.com/?q=%s&kl=%l",
    startpage: "https://www.startpage.com/do/search?query=%s&language=%l",
    qwant: "https://www.qwant.com/?q=%s&r=%l",
    yahoo: "https://%lsearch.yahoo.com/search?q=%s",
    bing: "https://www.bing.com/search?q=%s&cc=%l",
    brave: "https://search.brave.com/search?q=%s",
    ecosia: "https://www.ecosia.org/search?q=%s",
    lilo: "https://search.lilo.org/?q=%s"
  };
  var enginesLocales = {
    google: {
      fr: ".fr",
      en: ".com",
      ru: ".ru",
      pl: ".pl",
      pt_BR: ".com.br",
      sv: ".se",
      sl: ".sl",
      nl: ".nl",
      zh_CN: ".tw",
      sk: ".sk",
      de: ".de",
      it: ".it",
      es: ".es",
      no: ".no",
      tr: ".com.tr",
      uk: ".com.ua",
      id: ".co.id",
      da: ".dk"
    },
    ddg: {
      fr: "fr-fr",
      en: "en-US",
      ru: "ru-ru",
      pl: "pl-pl",
      pt_BR: "br-pt",
      sv: "se-se",
      sl: "sl-sl",
      nl: "nl-nl",
      zh_CN: "cn-zh",
      sk: "sk-sk",
      de: "de-de",
      it: "it-it",
      es: "es-es",
      no: "no-no",
      tr: "tr-tr",
      uk: "uk-UA",
      id: "id-ID",
      da: "dk-da"
    },
    startpage: {
      fr: "francais",
      en: "english",
      ru: "russian",
      pl: "polski",
      pt_BR: "br-pt",
      sv: "svenska",
      sl: "sl-sl",
      nl: "nl-nl",
      zh_CN: "cn-zh",
      sk: "sk-sk",
      de: "de-de",
      it: "italiano",
      es: "es-es",
      no: "norsk",
      tr: "tr-tr",
      uk: "ukrainian",
      id: "interlingua",
      da: "dansk"
    },
    qwant: {
      fr: "FR&sr=fr",
      en: "US&sr=en",
      ru: "RU&sr=ru",
      pl: "PL&sr=pl",
      pt_BR: "BR&sr=pt",
      sv: "SE&sr=sv",
      sl: "SL&sr=sl",
      nl: "NL&sr=nl",
      zh_CN: "SG&sr=en",
      sk: "en&sr=en",
      de: "DE&sr=de",
      it: "IT&sr=it",
      es: "ES&sr=es",
      no: "NO&sr=nb",
      tr: "US&sr=en",
      uk: "US&sr=en",
      id: "US&sr=en",
      da: "DK&sr=da"
    },
    yahoo: {
      fr: "fr.",
      en: "",
      ru: "ru.",
      pl: "pl.",
      pt_BR: "br.",
      sv: "se.",
      sl: "sl.",
      nl: "nl.",
      zh_CN: "",
      sk: "",
      de: "de.",
      it: "it.",
      es: "es.",
      no: "no.",
      tr: "tr.",
      uk: "ua.",
      id: "id.",
      da: "dk."
    },
    bing: {
      fr: "fr",
      en: "",
      ru: "ru",
      pl: "pl",
      pt_BR: "br",
      sv: "se",
      sl: "sl",
      nl: "nl",
      zh_CN: "",
      sk: "sk",
      de: "de",
      it: "it",
      es: "es",
      no: "no",
      tr: "tr",
      uk: "uk",
      id: "id",
      da: "da"
    }
  };

  // src/scripts/settings.ts
  var import_lodash = __toESM(require_lodash());
  var import_lodash2 = __toESM(require_lodash2());

  // src/scripts/utils.ts
  var $ = (name) => document.getElementById(name);
  var has = (dom, val) => {
    if (!dom)
      return false;
    else
      return dom.classList.length > 0 ? dom.classList.contains(val) : false;
  };
  var clas = (dom, add, str) => {
    if (dom === null)
      return;
    else
      add ? dom.classList.add(str) : dom.classList.remove(str);
  };
  var mobilecheck = () => navigator.userAgentData ? navigator.userAgentData.mobile : /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
  var stringMaxSize = (str, size) => str.length > size ? str.slice(0, size) : str;
  var minutator = (date) => date.getHours() * 60 + date.getMinutes();
  var extractDomain = (url) => {
    url.replace(/(^\w+:|^)\/\//, "");
    url.split("?")[0];
    return url;
  };
  var extractHostname = (url) => {
    const a = document.createElement("a");
    let res = "";
    a.href = url;
    res = a.hostname;
    a.remove();
    return res;
  };
  var randomString = (len) => {
    const chars = "abcdefghijklmnopqr";
    return Array.from({ length: len }, () => chars[Math.floor(Math.random() * chars.length)]).join("");
  };
  function detectPlatform() {
    const p = window.location.protocol;
    return p === "moz-extension:" ? "firefox" : p === "chrome-extension:" ? "chrome" : p === "safari-web-extension:" ? "safari" : "online";
  }
  var getBrowser = (agent = window.navigator.userAgent.toLowerCase()) => {
    return agent.indexOf("edg/") > -1 ? "edge" : agent.indexOf("chrome") > -1 ? "chrome" : agent.indexOf("firefox") > -1 ? "firefox" : agent.indexOf("safari") > -1 ? "safari" : "other";
  };
  var getFavicon = () => {
    return getBrowser() === "edge" ? "monochrome.png" : "favicon-128x128.png";
  };
  function periodOfDay(sunTime2, time) {
    const { rise, set, now } = sunTime2;
    if (!time)
      time = now;
    else
      time = minutator(new Date(time));
    if (time >= 0 && time <= rise - 60)
      return "night";
    if (time <= rise + 60)
      return "noon";
    if (time <= set - 60)
      return "day";
    if (time <= set + 60)
      return "evening";
    if (time >= set + 60)
      return "night";
    return "day";
  }
  function validateHideElem(hide) {
    let res = true;
    Array.isArray(hide) && hide.length > 0 ? hide.forEach((parent) => {
      Array.isArray(parent) ? parent.forEach((child) => {
        typeof child === "number" ? "" : res = false;
      }) : res = false;
    }) : res = false;
    return res;
  }
  function bundleLinks(storage) {
    let res = [];
    Object.entries(storage).map(([key, val]) => {
      if (key.length === 11 && key.startsWith("links"))
        res.push(val);
    });
    res.sort((a, b) => a.order - b.order);
    return res;
  }
  var inputThrottle = (elem, time = 800) => {
    let isThrottled = true;
    setTimeout(() => {
      isThrottled = false;
      elem.removeAttribute("disabled");
    }, time);
    if (isThrottled)
      elem.setAttribute("disabled", "");
  };
  function turnRefreshButton(button, canTurn) {
    const animationOptions = { duration: 600, easing: "ease-out" };
    button.animate(
      canTurn ? [{ transform: "rotate(360deg)" }] : [{ transform: "rotate(0deg)" }, { transform: "rotate(90deg)" }, { transform: "rotate(0deg)" }],
      animationOptions
    );
  }
  function closeEditLink() {
    const domedit = document.querySelector("#editlink");
    if (!domedit)
      return;
    clas(domedit, true, "hiding");
    document.querySelectorAll("#linkblocks img").forEach((img) => clas(img, false, "selected"));
    setTimeout(() => {
      domedit ? domedit.setAttribute("class", "") : "";
    }, 200);
  }
  var lsOnlineStorage = {
    get: (local, unused, callback) => {
      const key = local ? "bonjourrBackgrounds" : "bonjourr";
      const data = localStorage[key] ? JSON.parse(localStorage[key]) : {};
      callback(data);
    },
    set: (prop, callback) => {
      lsOnlineStorage.get(false, null, (data) => {
        if (typeof prop === "object") {
          const [key, val] = Object.entries(prop)[0];
          if (key === "import")
            data = val;
          else
            data[key] = val;
          try {
            localStorage.bonjourr = JSON.stringify(data);
            if (callback)
              callback;
          } catch (error) {
            console.warn(error);
            console.warn("Bonjourr couldn't save this setting \u{1F605}\nMemory might be full");
          }
          window.dispatchEvent(new Event("storage"));
        }
      });
    },
    clear: () => {
      localStorage.removeItem("bonjourr");
    },
    setLocal: (prop, callback) => {
      lsOnlineStorage.get(true, null, (data) => {
        if (typeof prop === "object") {
          data = { ...data, ...prop };
          try {
            localStorage.bonjourrBackgrounds = JSON.stringify(data);
            if (callback)
              callback;
          } catch (error) {
            console.log(error);
            console.log(console.warn("Bonjourr couldn't save this setting \u{1F605}\nMemory might be full"));
          }
        }
      });
    },
    remove: (isLocal, key) => {
      lsOnlineStorage.get(isLocal, null, (data) => {
        delete data[key];
        if (isLocal)
          localStorage.bonjourrBackgrounds = JSON.stringify(data);
        else
          localStorage.bonjourr = JSON.stringify(data);
      });
    },
    log: (isLocal) => lsOnlineStorage.get(isLocal, null, (data) => console.log(data)),
    del: () => localStorage.clear()
  };
  var getBrowserStorage = () => {
    lsOnlineStorage.get(true, null, (local) => {
      lsOnlineStorage.get(false, null, (sync) => console.log("local: ", local, "sync: ", sync));
    });
  };
  function deleteBrowserStorage() {
    if (detectPlatform() !== "online") {
      lsOnlineStorage.clear();
      lsOnlineStorage.local.clear();
    }
    localStorage.clear();
    setTimeout(() => {
      location.reload();
    }, 400);
  }
  function errorMessage(comment, error) {
    const dominterface2 = $("interface");
    function displayMessage(dataStr) {
      const warning = document.createElement("div");
      const title = document.createElement("h1");
      const subtitle = document.createElement("p");
      const errorcode = document.createElement("textarea");
      const explain = document.createElement("p");
      const resetButton = document.createElement("button");
      const closeError = document.createElement("button");
      const buttonWrap = document.createElement("div");
      title.textContent = comment + " \u{1F616}";
      subtitle.textContent = `Copy your settings below and contact us !`;
      explain.textContent = "Sharing your settings with us helps a lot in debugging. You can also reset Bonjourr, or close this window for now if you think it is a false alert.";
      explain.className = "error-explain";
      errorcode.textContent = dataStr;
      errorcode.setAttribute("spellcheck", "false");
      resetButton.textContent = "Reset Bonjourr";
      resetButton.addEventListener("click", () => {
        warning.style.opacity = "0";
        deleteBrowserStorage();
      });
      closeError.className = "error-buttons-close";
      closeError.textContent = "Close this window";
      closeError.addEventListener("click", () => {
        sessionStorage.errorMessage = "removed";
        warning.style.opacity = "0";
        setTimeout(() => warning.style.display = "none", 400);
      });
      buttonWrap.className = "error-buttons";
      buttonWrap.appendChild(resetButton);
      buttonWrap.appendChild(closeError);
      warning.appendChild(title);
      warning.appendChild(subtitle);
      warning.appendChild(errorcode);
      warning.appendChild(explain);
      warning.appendChild(buttonWrap);
      warning.id = "error";
      document.body.prepend(warning);
      dominterface2 ? dominterface2.style.opacity = "1" : "";
      setTimeout(() => warning.style.opacity = "1", 20);
    }
    console.error(error);
    if (sessionStorage.errorMessage === "removed" && dominterface2) {
      dominterface2.style.opacity = "1";
      return false;
    } else {
      lsOnlineStorage.get(false, null, (data) => {
        try {
          displayMessage(JSON.stringify(data, null, 4));
        } catch (e2) {
          displayMessage("");
        }
      });
    }
  }
  var testOS = {
    mac: window.navigator.appVersion.includes("Macintosh"),
    windows: window.navigator.appVersion.includes("Windows"),
    android: window.navigator.userAgent.includes("Android"),
    ios: ["iPad Simulator", "iPhone Simulator", "iPod Simulator", "iPad", "iPhone", "iPod"].includes(navigator.platform) || navigator.userAgent.includes("Mac") && "ontouchend" in document
  };
  var safeFontList = {
    fallback: { placeholder: "Arial", weights: ["500", "600", "800"] },
    windows: { placeholder: "Segoe UI", weights: ["300", "400", "600", "700", "800"] },
    android: { placeholder: "Roboto", weights: ["100", "300", "400", "500", "700", "900"] },
    linux: { placeholder: "Fira Sans", weights: ["100", "200", "300", "400", "500", "600", "700", "800", "900"] },
    apple: { placeholder: "SF Pro Display", weights: ["100", "200", "300", "400", "500", "600", "700", "800", "900"] }
  };
  var langList = {
    en: "English",
    fr: "Fran\xE7ais",
    sk: "Slovensk\xFD",
    sv: "Svenska",
    pl: "Polski",
    pt_BR: "Portugu\xEAs (Brasil)",
    nl: "Nederlandse",
    ru: "\u0420\u0443\u0441\u0441\u043A\u0438\u0439",
    zh_CN: "\u7B80\u4F53\u4E2D\u6587",
    de: "Deutsch",
    it: "Italiano",
    es: "Espa\xF1ol",
    tr: "T\xFCrk\xE7e",
    uk: "\u0423\u043A\u0440\u0430\u0457\u043D\u0441\u044C\u043A\u0430",
    id: "Indonesia",
    da: "Dansk"
  };
  var defaultLang = "en";
  var navLang = navigator.language.replace("-", "_");
  for (const [code] of Object.entries(langList)) {
    if (navLang === code || navLang.startsWith(code.substring(0, 2))) {
      defaultLang = code;
    }
  }
  function tradThis(str, lang) {
    if (!lang) {
      lang = document.documentElement.getAttribute("lang") || "en";
    }
    if (!Object.keys(dict.April).includes(lang)) {
      return str;
    }
    if (Object.keys(dict).includes(str)) {
      return dict[str][lang];
    }
    return str;
  }
  var syncDefaults = {
    usdate: false,
    showall: false,
    quicklinks: true,
    linksrow: 6,
    linknewtab: false,
    linkstyle: "large",
    cssHeight: 80,
    reviewPopup: 0,
    background_blur: 15,
    background_bright: 0.8,
    notes: {
      on: false,
      opacity: 0.1,
      align: "left",
      text: `### ${tradThis("Double click to edit", defaultLang)}!
[ ] ${tradThis(
        "Supports Markdown and clickable checkboxes",
        defaultLang
      )}  
[ ] ${tradThis("With keyboard shortcuts", defaultLang)}, [${tradThis(
        "see documentation",
        defaultLang
      )}](https://bonjourr.fr/misc#notes)`
    },
    css: "",
    lang: defaultLang,
    favicon: "",
    tabtitle: "",
    greeting: "",
    dark: "system",
    custom_time: 1650516688,
    custom_every: "pause",
    background_type: "dynamic",
    clock: {
      ampm: false,
      analog: false,
      seconds: false,
      face: "none",
      timezone: "auto"
    },
    dynamic: {
      every: "hour",
      collection: "",
      lastCollec: "day",
      time: Date.now()
    },
    weather: {
      ccode: "FR",
      city: "Paris",
      unit: "metric",
      location: [],
      forecast: "auto",
      temperature: "actual"
    },
    searchbar: {
      on: false,
      opacity: 0.1,
      newtab: false,
      engine: "google",
      request: ""
    },
    quotes: {
      on: false,
      author: false,
      type: "classic",
      frequency: "day",
      last: 1650516688
    },
    font: {
      url: "",
      family: "",
      size: "14",
      availWeights: [],
      weight: testOS.windows ? "400" : "300"
    },
    textShadow: 0.2,
    hide: [[0, 0], [0, 0, 0], [0], [0]],
    about: { browser: detectPlatform(), version: "1.15.0" }
  };
  var localDefaults = {
    waitingForPreload: false,
    selectedId: "",
    idsList: [],
    quotesCache: [],
    dynamicCache: {
      noon: [],
      day: [],
      evening: [],
      night: [],
      user: []
    }
  };

  // src/scripts/settings.ts
  function initParams(data, settingsDom) {
    if (settingsDom == null) {
      return;
    }
    const paramId = (str) => settingsDom.querySelector("#" + str);
    const paramClasses = (str) => settingsDom.querySelectorAll("." + str);
    const initCheckbox = (id, cat) => {
      ;
      paramId(id).checked = cat ? true : false;
    };
    const initInput = (id, val) => {
      const input = paramId(id);
      input.value = typeof val === "string" ? val : val.toString();
    };
    const whichFreq = data.background_type === "custom" ? data.custom_every : data.dynamic?.every || "hour";
    const whichFreqDefault = data.background_type === "custom" ? "pause" : "hour";
    initInput("i_blur", data.background_blur?.toString() || 15);
    initInput("i_bright", data.background_bright?.toString() || 0.8);
    initInput("cssEditor", data.css || "");
    initInput("i_row", data.linksrow || 8);
    initInput("i_linkstyle", data.linkstyle || "default");
    initInput("i_type", data.background_type || "dynamic");
    initInput("i_freq", whichFreq || whichFreqDefault);
    initInput("i_dark", data.dark || "system");
    initInput("i_favicon", data.favicon || "");
    initInput("i_tabtitle", data.tabtitle || "");
    initInput("i_greeting", data.greeting || "");
    initInput("i_textshadow", data.textShadow?.toString() || 0.2);
    initInput("i_notesopacity", data.notes?.opacity || 0.1);
    initInput("i_notesalign", data.notes?.align || "left");
    initInput("i_textshadow", data.textShadow || 0.2);
    initInput("i_sbengine", data.searchbar?.engine || "google");
    initInput("i_sbopacity", data.searchbar?.opacity || 0.1);
    initInput("i_sbrequest", data.searchbar?.request || "");
    initInput("i_qtfreq", data.quotes?.frequency || "day");
    initInput("i_qttype", data.quotes?.type || "classic");
    initInput("i_clockface", data.clock?.face || "none");
    initInput("i_timezone", data.clock?.timezone || "auto");
    initInput("i_collection", data.dynamic?.collection || "");
    initInput("i_ccode", data.weather?.ccode || "US");
    initInput("i_forecast", data.weather?.forecast || "auto");
    initInput("i_temp", data.weather?.temperature || "actual");
    initInput("i_customfont", data.font?.family || "");
    initInput("i_weight", data.font?.weight || "300");
    initInput("i_size", data.font?.size || (mobilecheck() ? 11 : 14));
    initCheckbox("i_showall", data.showall);
    initCheckbox("i_quicklinks", data.quicklinks);
    initCheckbox("i_linknewtab", data.linknewtab);
    initCheckbox("i_usdate", data.usdate);
    initCheckbox("i_geol", typeof data.weather?.location !== "boolean");
    initCheckbox("i_units", data.weather?.unit === "imperial" || false);
    initCheckbox("i_notes", data.notes?.on || false);
    initCheckbox("i_sb", data.searchbar?.on || false);
    initCheckbox("i_quotes", data.quotes?.on || false);
    initCheckbox("i_ampm", data.clock?.ampm || false);
    initCheckbox("i_sbnewtab", data.searchbar?.newtab || false);
    initCheckbox("i_qtauthor", data.quotes?.author || false);
    initCheckbox("i_seconds", data.clock?.seconds || false);
    initCheckbox("i_analog", data.clock?.analog || false);
    translatePlaceholders(settingsDom);
    if (mobilecheck()) {
      settingsDom.querySelector(".tooltiptext .instructions").textContent = tradThis(
        `Edit your Quick Links by long-pressing the icon.`
      );
    }
    const i_lang = paramId("i_lang");
    Object.entries(langList).forEach(([code, title]) => {
      let option = document.createElement("option");
      option.value = code;
      option.text = title;
      i_lang.appendChild(option);
    });
    initInput("i_lang", data.lang || "en");
    if (localStorage.hasUpdated === "true") {
      changelogControl(settingsDom);
    }
    if (detectPlatform() === "safari" || detectPlatform() === "online") {
      paramId("b_importbookmarks").setAttribute("style", "display: none");
    }
    clas(paramId("quicklinks_options"), data.quicklinks, "shown");
    hideElem(null, { is: "buttons", buttonList: settingsDom.querySelectorAll("#hideelem button") });
    safeFont(settingsDom);
    if (data.font?.family !== "")
      customFont(null, { is: "autocomplete", elem: settingsDom });
    if (data.font?.availWeights?.length > 0)
      modifyWeightOptions(data.font.availWeights, settingsDom);
    if (data.background_type === "custom") {
      paramId("custom").setAttribute("style", "display: block");
      settingsDom.querySelector(".as_collection")?.setAttribute("style", "display: none");
      localBackgrounds(null, { is: "thumbnail", settings: settingsDom });
    }
    const i_geol = paramId("i_geol");
    if (data.weather && Object.keys(data.weather).length > 0) {
      const isGeolocation = data.weather?.location?.length > 0;
      let cityName = data.weather?.city || "City";
      paramId("i_city").setAttribute("placeholder", cityName);
      clas(paramId("sett_city"), isGeolocation, "hidden");
      i_geol.checked = isGeolocation;
    } else {
      clas(paramId("sett_city"), true, "hidden");
      i_geol.checked = true;
    }
    clas(paramId("notes_options"), data.notes?.on || false, "shown");
    clas(paramId("searchbar_options"), data.searchbar?.on, "shown");
    clas(paramId("searchbar_request"), data.searchbar?.engine === "custom", "shown");
    if (data.cssHeight) {
      paramId("cssEditor").setAttribute("style", "height: " + data.cssHeight + "px");
    }
    clas(paramId("quotes_options"), data.quotes?.on, "shown");
    updateExportJSON(settingsDom);
    const enterBlurs = (elem) => {
      elem.onkeyup = (e2) => {
        e2.key === "Enter" ? e2.target.blur() : "";
      };
    };
    enterBlurs(paramId("i_favicon"));
    enterBlurs(paramId("i_tabtitle"));
    enterBlurs(paramId("i_greeting"));
    paramClasses("uploadContainer").forEach(function(uploadContainer) {
      const toggleDrag = () => uploadContainer.classList.toggle("dragover");
      const input = uploadContainer.querySelector('input[type="file"');
      input?.addEventListener("dragenter", toggleDrag);
      input?.addEventListener("dragleave", toggleDrag);
      input?.addEventListener("drop", toggleDrag);
    });
    if (mobilecheck()) {
      const instr = settingsDom.querySelector(".tooltiptext .instructions");
      if (instr)
        instr.textContent = tradThis(`Edit your Quick Links by long-pressing the icon.`);
    }
    settingsDom.querySelectorAll(".tooltip").forEach((elem) => {
      elem.addEventListener("click", function() {
        const cl = [...elem.classList].filter((c) => c.startsWith("tt"))[0];
        settingsDom.querySelector(".tooltiptext." + cl)?.classList.toggle("shown");
      });
    });
    if (mobilecheck()) {
      const touchHandler = (start) => settingsDom.style.opacity = start ? "0.2" : "1";
      const rangeInputs = settingsDom.querySelectorAll("input[type='range'");
      rangeInputs.forEach((input) => {
        input.addEventListener("touchstart", () => touchHandler(true), { passive: true });
        input.addEventListener("touchend", () => touchHandler(false), { passive: true });
      });
    }
    paramId("i_showall").addEventListener("change", function() {
      showall(this.checked, true);
    });
    paramId("i_lang").addEventListener("change", function() {
      switchLangs(this.value);
    });
    paramId("i_greeting").addEventListener("keyup", function() {
      clock(null, { is: "greeting", value: stringMaxSize(this.value, 32) });
    });
    paramId("i_favicon").addEventListener("input", function() {
      favicon(null, this);
    });
    paramId("i_tabtitle").addEventListener("input", function() {
      tabTitle(null, this);
    });
    paramId("i_dark").addEventListener("change", function() {
      darkmode(this.value, true);
    });
    paramId("hideelem").querySelectorAll("button").forEach((elem) => {
      elem.onclick = function() {
        elem.classList.toggle("clicked");
        hideElem(null, { is: "hide", button: elem });
      };
    });
    paramId("i_quicklinks").addEventListener("change", function() {
      quickLinks(null, { is: "toggle", checked: this.checked });
    });
    const submitLinkFunc = (0, import_lodash2.default)(() => quickLinks(null, { is: "add" }), 1200);
    paramId("i_title").onkeyup = (e2) => {
      if (e2.code === "Enter") {
        submitLinkFunc();
      }
    };
    paramId("i_url").onkeyup = (e2) => {
      if (e2.code === "Enter") {
        submitLinkFunc();
      }
    };
    paramId("submitlink").addEventListener("click", (e2) => {
      submitLinkFunc();
      inputThrottle(e2.target, 1200);
    });
    paramId("i_linknewtab").onchange = (e2) => {
      const input = e2.currentTarget;
      quickLinks(null, { is: "newtab", checked: input.checked });
    };
    paramId("i_linkstyle").onchange = (e2) => {
      const input = e2.currentTarget;
      quickLinks(null, { is: "style", value: input.value });
    };
    paramId("i_row").oninput = function(e2) {
      const input = e2.currentTarget;
      quickLinks(null, { is: "row", value: input.value });
    };
    paramId("b_importbookmarks").onclick = linksImport;
    paramId("i_type").addEventListener("change", function() {
      selectBackgroundType(this.value);
    });
    paramId("i_freq").addEventListener("change", function() {
      const i_type = paramId("i_type");
      if (i_type.value === "custom")
        lsOnlineStorage.set({ custom_every: this.value });
      else
        unsplash(null, { is: "every", value: this.value });
    });
    paramId("i_refresh").addEventListener("click", function() {
      const i_type = paramId("i_type");
      if (this.children[0]) {
        const arrow = this.children[0];
        const event = { is: "refresh", button: arrow };
        i_type.value === "custom" ? localBackgrounds(null, event) : unsplash(null, event);
      }
      inputThrottle(this);
    });
    paramId("i_collection").addEventListener("change", function() {
      unsplash(null, { is: "collection", value: stringMaxSize(this.value, 256) });
      this.blur();
    });
    paramId("i_bgfile").addEventListener("change", function() {
      localBackgrounds(null, { is: "newfile", file: this.files || void 0 });
    });
    paramId("i_blur").addEventListener("input", function() {
      backgroundFilter("blur", { blur: parseFloat(this.value) }, true);
    });
    paramId("i_bright").addEventListener("input", function() {
      backgroundFilter("bright", { bright: parseFloat(this.value) }, true);
    });
    paramId("i_analog").addEventListener("change", function() {
      clock(null, { is: "analog", checked: this.checked });
    });
    paramId("i_seconds").addEventListener("change", function() {
      clock(null, { is: "seconds", checked: this.checked });
    });
    paramId("i_clockface").addEventListener("change", function() {
      clock(null, { is: "face", value: this.value });
    });
    paramId("i_ampm").addEventListener("change", function() {
      clock(null, { is: "ampm", checked: this.checked });
    });
    paramId("i_timezone").addEventListener("change", function() {
      clock(null, { is: "timezone", value: this.value });
    });
    paramId("i_usdate").addEventListener("change", function() {
      clock(null, { is: "usdate", checked: this.checked });
    });
    const weatherDebounce = (0, import_lodash.default)(() => weather(null, { is: "city" }), 1600);
    paramId("i_city").onkeyup = (e2) => {
      weatherDebounce();
      if (e2.code === "Enter") {
        weather(null, { is: "city" });
        weatherDebounce.cancel();
      }
    };
    paramId("i_geol").addEventListener("change", function() {
      inputThrottle(this, 1200);
      weather(null, { is: "geol", checked: this.checked, elem: this });
    });
    paramId("i_units").addEventListener("change", function() {
      inputThrottle(this, 1200);
      weather(null, { is: "units", checked: this.checked });
    });
    paramId("i_forecast").addEventListener("change", function() {
      weather(null, { is: "forecast", value: this.value });
    });
    paramId("i_temp").addEventListener("change", function() {
      weather(null, { is: "temp", value: this.value });
    });
    paramId("i_notes").addEventListener("change", function() {
      notes(null, { is: "toggle", value: this.checked.toString() });
    });
    paramId("i_notesalign").addEventListener("change", function() {
      notes(null, { is: "align", value: this.value });
    });
    paramId("i_notesopacity").addEventListener("input", function() {
      notes(null, { is: "opacity", value: this.value });
    });
    paramId("i_sb").addEventListener("change", function() {
      searchbar(null, "searchbar", this);
    });
    paramId("i_sbengine").addEventListener("change", function() {
      searchbar(null, "engine", this);
    });
    paramId("i_sbopacity").addEventListener("input", function() {
      searchbar(null, "opacity", this);
    });
    paramId("i_sbrequest").addEventListener("change", function() {
      searchbar(null, "request", this);
    });
    paramId("i_sbnewtab").addEventListener("change", function() {
      searchbar(null, "newtab", this);
    });
    paramId("i_quotes").addEventListener("change", function() {
      quotes(null, { is: "toggle", checked: this.checked });
    });
    paramId("i_qtfreq").addEventListener("change", function() {
      quotes(null, { is: "frequency", value: this.value });
    });
    paramId("i_qttype").addEventListener("change", function() {
      quotes(null, { is: "type", value: this.value });
    });
    paramId("i_qtrefresh").addEventListener("click", function() {
      inputThrottle(this);
      turnRefreshButton(this.children[0], true);
      quotes(null, { is: "refresh" });
    });
    paramId("i_qtauthor").addEventListener("change", function() {
      quotes(null, { is: "author", checked: this.checked });
    });
    paramId("i_customfont").addEventListener("focus", function() {
      if (settingsDom.querySelector("#dl_fontfamily")?.childElementCount === 0) {
        customFont(null, { is: "autocomplete", elem: settingsDom });
      }
    });
    paramId("i_customfont").addEventListener("change", function() {
      customFont(null, { is: "family", value: this.value });
    });
    paramId("i_weight").addEventListener("input", function() {
      customFont(null, { is: "weight", value: this.value });
    });
    paramId("i_size").addEventListener("input", function() {
      customFont(null, { is: "size", value: this.value });
    });
    paramId("i_textshadow").addEventListener("input", function() {
      textShadow(null, parseFloat(this.value));
    });
    paramId("cssEditor").addEventListener("keyup", function(ev) {
      customCss(null, { is: "styling", val: ev.target.value });
    });
    cssInputSize(paramId("cssEditor"));
    const { exportAsFile, copyImportText, importAsText, importAsFile } = settingsMgmt();
    const toggleSettingsMgmt = (toggled) => {
      clas(paramId("export"), !toggled, "shown");
      clas(paramId("import"), toggled, "shown");
      clas(paramClasses("tabs")[0], toggled, "toggled");
    };
    paramId("s_export").addEventListener("click", () => toggleSettingsMgmt(false));
    paramId("s_import").addEventListener("click", () => toggleSettingsMgmt(true));
    paramId("b_exportfile").addEventListener("click", () => exportAsFile());
    paramId("b_exportcopy").addEventListener("click", (e2) => copyImportText(e2.target));
    paramId("i_importfile").addEventListener("change", (e2) => importAsFile(e2.target));
    paramId("i_importtext").addEventListener("keyup", (e2) => importAsText(e2.target.value));
    paramId("b_resetconf").addEventListener("click", () => paramsReset("conf"));
    paramId("b_resetyes").addEventListener("click", () => paramsReset("yes"));
    paramId("b_resetno").addEventListener("click", () => paramsReset("no"));
    paramId("b_importtext").addEventListener("click", function() {
      paramsImport(JSON.parse($("i_importtext").value));
    });
    const allHidingInputs = "#i_showall, .tooltip, #i_quicklinks, #i_geol, #i_notes, #i_sb, #i_sbengine, #i_quotes, #s_export, #s_import";
    function controlInputTabbability() {
      const toggleTabindex = (parent, on) => {
        settingsDom?.querySelectorAll(`${parent} :is(input,  select,  button,  a, textarea)`).forEach((dom) => {
          on ? dom.removeAttribute("tabindex") : dom.setAttribute("tabindex", "-1");
        });
      };
      const isAllSettings = paramId("i_showall").checked;
      if (isAllSettings) {
        toggleTabindex(".as", true);
      }
      settingsDom.querySelectorAll("#quicklinks_options, #searchbar_options, #quotes_options, #notes_options").forEach((dom) => toggleTabindex("#" + dom.id, has(dom, "shown")));
      if (isAllSettings === false) {
        toggleTabindex(".as", false);
      }
      settingsDom.querySelectorAll(".tooltiptext").forEach((dom) => {
        toggleTabindex("." + dom.classList[1], has(dom, "shown"));
      });
      toggleTabindex("#searchbar_request", has(paramId("searchbar_request"), "shown"));
      toggleTabindex("#sett_city", paramId("i_geol").checked === false);
      toggleTabindex("#import", has(paramId("import"), "shown"));
      toggleTabindex("#export", has(paramId("export"), "shown"));
      paramId("downloadfile").setAttribute("tabindex", "-1");
    }
    controlInputTabbability();
    settingsDom.querySelectorAll(allHidingInputs).forEach((dom) => {
      dom.addEventListener("click", () => setTimeout(() => controlInputTabbability(), 10));
    });
  }
  function settingsMgmt() {
    async function copyImportText(target) {
      try {
        const area = $("area_export");
        await navigator.clipboard.writeText(area.value);
        target.textContent = tradThis("Copied");
        setTimeout(() => {
          const domimport = $("b_exportcopy");
          if (domimport) {
            domimport.textContent = tradThis("Copy text");
          }
        }, 1e3);
      } catch (err) {
        console.error("Failed to copy: ", err);
      }
    }
    function exportAsFile() {
      const a = $("downloadfile");
      if (!a)
        return;
      lsOnlineStorage.get(false, null, (data) => {
        a.setAttribute("href", `data:text/plain;charset=utf-8,${window.btoa(JSON.stringify(data))}`);
        a.setAttribute("download", `bonjourrExport-${data?.about?.version}-${randomString(6)}.txt`);
        a.click();
      });
    }
    function importAsText(string) {
      try {
        JSON.parse(string);
        $("b_importtext")?.removeAttribute("disabled");
      } catch (error) {
        $("b_importtext")?.setAttribute("disabled", "");
      }
    }
    function importAsFile(target) {
      if (!target.files || target.files && target.files.length === 0) {
        return;
      }
      const file = target.files[0];
      const reader = new FileReader();
      reader.onload = () => {
        try {
          if (typeof reader.result === "string") {
            const json = JSON.parse(window.atob(reader.result));
            paramsImport(json);
          }
        } catch (err) {
          console.log(err);
        }
      };
      reader.readAsText(file);
    }
    return { exportAsFile, copyImportText, importAsText, importAsFile };
  }
  function cssInputSize(param) {
    setTimeout(() => {
      const cssResize = new ResizeObserver((e2) => {
        const rect = e2[0].contentRect;
        customCss(null, { is: "resize", val: rect.height + rect.top * 2 });
      });
      cssResize.observe(param);
    }, 400);
  }
  function changelogControl(settingsDom) {
    const domshowsettings = document.querySelector("#showSettings");
    const domchangelog = settingsDom.querySelector("#changelogContainer");
    if (!domchangelog)
      return;
    clas(domchangelog, true, "shown");
    clas(domshowsettings, true, "hasUpdated");
    const dismiss = () => {
      clas(domshowsettings, false, "hasUpdated");
      domchangelog.className = "dismissed";
      localStorage.removeItem("hasUpdated");
    };
    const loglink = settingsDom.querySelector("#link");
    const logdismiss = settingsDom.querySelector("#log_dismiss");
    loglink.onclick = () => dismiss();
    logdismiss.onclick = () => dismiss();
  }
  function translatePlaceholders(settingsDom) {
    if (!settingsDom) {
      return;
    }
    const cases = [
      ["#i_title", "Name"],
      ["#i_greeting", "Name"],
      ["#i_tabtitle", "New tab"],
      ["#i_sbrequest", "Search query: %s"],
      ["#cssEditor", "Type in your custom CSS"],
      ["#i_importtext", "or paste as text"]
    ];
    cases.forEach(([domId, text]) => {
      const input = settingsDom.querySelector(domId);
      input.setAttribute("placeholder", tradThis(text));
    });
  }
  function switchLangs(nextLang) {
    function langSwitchTranslation(langs2) {
      const getLangList = (l) => {
        return l === "en" ? Object.keys(dict) : Object.values(dict).map((t2) => t2[l]);
      };
      const { current, next } = langs2;
      const nextList = getLangList(next);
      const currentList = getLangList(current);
      let switchDict = {};
      currentList.forEach((curr, i) => switchDict[curr] = nextList[i]);
      document.querySelectorAll(".trn").forEach((trn) => {
        if (typeof trn.textContent === "string") {
          trn.textContent = switchDict[trn.textContent];
        }
      });
    }
    function isValidLang(val) {
      return Object.keys(langList).includes(val);
    }
    const htmllang = document.documentElement.getAttribute("lang") || "en";
    const langs = {
      current: isValidLang(htmllang) ? htmllang : "en",
      next: nextLang
    };
    sessionStorage.lang = nextLang;
    lsOnlineStorage.set({ lang: nextLang });
    document.documentElement.setAttribute("lang", nextLang);
    lsOnlineStorage.get(false, null, (data) => {
      data.lang = nextLang;
      langSwitchTranslation(langs);
      translatePlaceholders($("settings"));
      weather(data);
      clock(data);
      if (data.quotes?.type === "classic") {
        localStorage.removeItem("nextQuote");
        localStorage.removeItem("currentQuote");
        quotes(data);
      }
    });
  }
  function showall(val, event, settingsDom) {
    if (event)
      lsOnlineStorage.set({ showall: val });
    const settings = settingsDom || $("settings");
    clas(settings, val, "all");
  }
  function selectBackgroundType(cat) {
    function toggleType(sync, local) {
      $("custom")?.setAttribute("style", `display: ${cat === "custom" ? "block" : "none"}`);
      document.querySelector(".as_collection")?.setAttribute("style", `display: ${cat === "custom" ? "none" : "block"}`);
      if (cat === "custom" && local.selectedId !== "") {
        $("background_overlay").style.opacity = `0`;
        localBackgrounds(null, { is: "thumbnail", settings: $("settings") || void 0 });
        setTimeout(
          () => localBackgrounds({
            every: sync.custom_every,
            time: sync.custom_time
          }),
          400
        );
      }
      if (cat === "dynamic") {
        clas($("credit"), true, "shown");
        if (local.selectedId !== "") {
          $("background_overlay").style.opacity = `0`;
          setTimeout(() => unsplash(sync), 400);
        }
      }
      const c_every = sync.custom_every || "pause";
      const d_every = sync.dynamic.every || "hour";
      $("i_freq")?.setAttribute("value", cat === "custom" ? c_every : d_every);
      lsOnlineStorage.set({ background_type: cat });
    }
    lsOnlineStorage.get(true, "selectedId", (local) => {
      lsOnlineStorage.get(false, ["custom_every", "custom_time", "dynamic"], (sync) => {
        toggleType(sync, local);
      });
    });
  }
  function signature(dom) {
    const spans = dom.querySelectorAll("#rand span");
    const as = dom.querySelectorAll("#rand a");
    const us = [
      { href: "https://victr.me/", name: "Victor Azevedo" },
      { href: "https://tahoe.be/", name: "Tahoe Beetschen" }
    ];
    if (Math.random() > 0.5)
      us.reverse();
    spans[0].textContent = `${tradThis("by")} `;
    spans[1].textContent = ` & `;
    as.forEach((a, i) => {
      a.href = us[i].href;
      a.textContent = us[i].name;
    });
  }
  function fadeOut() {
    const dominterface2 = $("interface");
    dominterface2.click();
    dominterface2.style.transition = "opacity .4s";
    dominterface2.style.opacity = "0";
    setTimeout(() => location.reload(), 400);
  }
  function paramsImport(dataToImport) {
    try {
      lsOnlineStorage.get(false, null, (sync) => {
        lsOnlineStorage.get(true, "dynamicCache", (local) => {
          const newImport = dataToImport;
          if (sync.dynamic && newImport.dynamic) {
            if (sync.dynamic?.collection !== newImport.dynamic?.collection) {
              local.dynamicCache.user = [];
            }
          }
          if (newImport.links?.length > 0 || bundleLinks(newImport)?.length > 0) {
            bundleLinks(sync).forEach((elem) => {
              delete sync[elem._id];
            });
          }
          sync = { ...sync, ...newImport };
          lsOnlineStorage.clear();
          lsOnlineStorage.set(
            detectPlatform() === "online" ? { import: sync } : sync,
            () => lsOnlineStorage.setLocal(local)
          );
          sessionStorage.isImport = true;
          fadeOut();
        });
      });
    } catch (e2) {
      console.log(e2);
    }
  }
  function paramsReset(action) {
    if (action === "yes") {
      detectPlatform() === "online" ? lsOnlineStorage.del() : deleteBrowserStorage();
      fadeOut();
      return;
    }
    clas($("reset_first"), action === "no", "shown");
    clas($("reset_conf"), action === "conf", "shown");
  }
  function updateExportJSON(settingsDom) {
    if (!settingsDom && !$("settings")) {
      return false;
    }
    const dom = settingsDom || $("settings");
    const input = dom?.querySelector("#area_export");
    dom?.querySelector("#importtext")?.setAttribute("disabled", "");
    lsOnlineStorage.get(false, null, (data) => {
      if (data.weather && data.weather.lastCall)
        delete data.weather.lastCall;
      if (data.weather && data.weather.forecastLastCall)
        delete data.weather.forecastLastCall;
      data.about.browser = detectPlatform();
      const prettified = JSON.stringify(data, null, "	");
      input.value = prettified;
    });
  }
  function settingsInit(data) {
    function settingsCreator(html) {
      const domshowsettings = $("showSettings");
      const dominterface2 = $("interface");
      const domedit = $("editlink");
      const parser = new DOMParser();
      const settingsDom = document.createElement("aside");
      const contentList = [...parser.parseFromString(html, "text/html").body.childNodes];
      settingsDom.id = "settings";
      settingsDom.setAttribute("class", "init");
      contentList.forEach((elem) => settingsDom.appendChild(elem));
      traduction(settingsDom, data.lang);
      signature(settingsDom);
      initParams(data, settingsDom);
      showall(data.showall, false, settingsDom);
      document.body.appendChild(settingsDom);
      detectPlatform() === "online" ? window.onstorage = () => updateExportJSON() : lsOnlineStorage.onChanged.addListener(() => updateExportJSON());
      function toggleDisplay(dom) {
        const isClosed = !has(dom, "shown");
        clas(dom, false, "init");
        clas(dom, isClosed, "shown");
        clas(domshowsettings, isClosed, "shown");
        clas(domedit, isClosed, "pushed");
        clas(dominterface2, isClosed, "pushed");
        settingsDom.style.removeProperty("transform");
        settingsDom.style.removeProperty("transition");
      }
      $("skiptosettings")?.addEventListener("click", function() {
        toggleDisplay(settingsDom);
        settingsDom.scrollTo({ top: 0 });
        setTimeout(() => {
          const showall2 = settingsDom.querySelector("#i_showall");
          showall2.focus();
        }, 10);
      });
      domshowsettings?.addEventListener("click", function() {
        toggleDisplay(settingsDom);
      });
      document.onkeydown = function(e2) {
        if (e2.altKey && e2.code === "KeyS") {
          getBrowserStorage();
        }
        if (e2.code === "Escape") {
          has($("editlink"), "shown") ? closeEditLink() : toggleDisplay(settingsDom);
          return;
        }
        if (e2.code === "Tab") {
          clas(document.body, true, "tabbing");
          return;
        }
        if ($("error") && e2.ctrlKey) {
          return;
        }
      };
      window.addEventListener("click", function(e2) {
        const path = e2.composedPath();
        const clicksOnEdit = path.filter((d) => d.id === "editlink").length > 0;
        if (!clicksOnEdit && has($("editlink"), "shown")) {
          closeEditLink();
        }
      });
      dominterface2?.addEventListener("click", function(e2) {
        if (e2.composedPath().filter((d) => d.id === "linkblocks").length > 0) {
          return;
        }
        if (document.body.classList.contains("tabbing")) {
          clas(document.body, false, "tabbing");
        }
        if (has(settingsDom, "shown")) {
          toggleDisplay(settingsDom);
        }
      });
      function responsiveSettingsHeightDrag() {
        let firstPos = 0;
        let startTouchY = 0;
        function dragStart(e2) {
          e2.preventDefault();
          if (e2.type === "mousedown")
            startTouchY = e2.clientY;
          if (e2.type === "touchstart")
            startTouchY = e2.touches[0].clientY;
          if (firstPos === 0)
            firstPos = startTouchY;
          if (testOS.windows || testOS.android) {
            settingsDom.style.width = `calc(100% - 10px)`;
            settingsDom.style.paddingRight = `10px`;
          }
          settingsDom.style.overflow = `clip`;
          window.addEventListener("touchmove", dragMove);
          window.addEventListener("mousemove", dragMove);
        }
        function dragMove(e2) {
          let clientY = 0;
          if (e2.type === "mousemove")
            clientY = e2.clientY;
          if (e2.type === "touchmove")
            clientY = e2.touches[0].clientY;
          if (clientY > 60) {
            settingsDom.style.transform = `translateY(-${window.innerHeight + 30 - clientY}px)`;
            settingsDom.style.transition = `transform .0s`;
          }
        }
        function dragEnd(e2) {
          let clientY = 0;
          if (e2.type === "mouseup" || e2.type === "mouseleave")
            clientY = e2.clientY;
          if (e2.type === "touchend")
            clientY = e2.changedTouches[0].clientY;
          window.removeEventListener("touchmove", dragMove);
          window.removeEventListener("mousemove", dragMove);
          startTouchY = 0;
          settingsDom.style.removeProperty("padding");
          settingsDom.style.removeProperty("width");
          settingsDom.style.removeProperty("overflow");
          const signaturedom = document.querySelector(".signature");
          signaturedom.style.paddingBottom = clientY + 60 + "px";
          if (clientY > window.innerHeight - 100) {
            toggleDisplay(settingsDom);
          }
        }
        settingsDom.querySelector("#mobile-drag-zone")?.addEventListener("touchstart", dragStart);
        settingsDom.querySelector("#mobile-drag-zone")?.addEventListener("mousedown", dragStart);
        settingsDom.querySelector("#mobile-drag-zone")?.addEventListener("touchend", dragEnd);
        settingsDom.querySelector("#mobile-drag-zone")?.addEventListener("mouseup", dragEnd);
        document.body?.addEventListener("mouseleave", (e2) => {
          if (has(settingsDom, "shown") && window.innerWidth < 600) {
            dragEnd(e2);
          }
        });
      }
      const DrawerDragDebounce = (0, import_lodash.default)(() => {
        ;
        document.querySelector(".signature").style.removeProperty("padding");
        responsiveSettingsHeightDrag();
      }, 600);
      window.addEventListener("resize", DrawerDragDebounce);
      responsiveSettingsHeightDrag();
    }
    fetch("settings.html").then((resp) => resp.text().then(settingsCreator));
  }

  // src/scripts/index.ts
  var eventDebounce = (0, import_lodash3.default)(function(value) {
    lsOnlineStorage.set(value);
  }, 400);
  var freqControl = {
    set: function() {
      return new Date().getTime();
    },
    get: function(every, last) {
      const nowDate = new Date();
      const lastDate = new Date(last || 0);
      const changed = {
        date: nowDate.getDate() !== lastDate.getDate(),
        hour: nowDate.getHours() !== lastDate.getHours()
      };
      if (every === "day")
        return changed.date;
      if (every === "hour")
        return changed.date || changed.hour;
      if (every === "tabs")
        return true;
      if (every === "pause")
        return last === 0;
      if (every === "period") {
        const sun = sunTime();
        if (!sun)
          return "day";
        else
          return periodOfDay(sun) !== periodOfDay(sun, +lastDate);
      }
    }
  };
  function traduction(settingsDom, lang = "en") {
    if (!Object.keys(dict.April).includes(lang)) {
      return;
    }
    const trns = (settingsDom ? settingsDom : document).querySelectorAll(".trn");
    const dictKeys = Object.keys(dict);
    let text;
    trns.forEach((trn) => {
      if (trn.textContent) {
        text = trn.textContent;
        if (dictKeys.includes(text)) {
          trn.textContent = dict[text][lang];
        }
      }
    });
    document.documentElement.setAttribute("lang", lang);
  }
  function notes(init, event) {
    const container = $("notes_container");
    const parsed = $("notes_parsed");
    const editor = $("notes_editor");
    const doneBtn = $("b_notesdone");
    function parseMarkdownToHTML(val) {
      const aria = tradThis("Text field tick box");
      let html = t(val);
      html = html.replaceAll(`<a href="undefined"> </a>`, `<input type="checkbox" aria-label="${aria}">`);
      html = html.replaceAll(`<a href="undefined">x</a>`, `<input type="checkbox" aria-label="${aria}" checked>`);
      const replaceAt = (s, repl, i) => {
        return s.substring(0, i) + repl + s.substring(i + repl.length);
      };
      if (!parsed || !editor) {
        return false;
      }
      while (parsed.firstChild) {
        parsed.removeChild(parsed.firstChild);
      }
      const parser = new DOMParser();
      const doc = parser.parseFromString(html, "text/html");
      const allNodes = [...doc.body.childNodes];
      allNodes.forEach((node) => parsed.appendChild(node));
      if (parsed.childNodes.length > 0 && parsed.childNodes[0]?.nodeName.match(/(H[1-6])/g)) {
        parsed.children[0]?.setAttribute("style", "margin-top: 0px");
      }
      parsed.querySelectorAll('input[type="checkbox"]').forEach((checkbox, ii) => {
        checkbox.addEventListener("click", () => {
          let raw = editor.value;
          const matches = [...raw.matchAll(/(\[[x ]\])/g)];
          const matchIndex = matches[ii].index;
          if (typeof matchIndex === "number") {
            raw = replaceAt(raw, matches[ii][0].includes("x") ? ` ` : `x`, matchIndex + 1);
          }
          ;
          editor.value = raw;
          notes(null, { is: "change", value: raw });
        });
      });
    }
    function handleToggle(state) {
      if (container)
        clas(container, !state, "hidden");
    }
    function handleAlign(value) {
      if (container) {
        if (value === "center") {
          clas(container, true, "center-align");
        } else {
          clas(container, false, "center-align");
          clas(container, value === "right", "right-align");
        }
      }
    }
    function handleOpacity(value) {
      if (container) {
        clas(container, value > 0.45, "opaque");
        container.style.backgroundColor = "rgba(255, 255, 255, " + value + ")";
      }
    }
    function toggleEditable() {
      if (!editor || !parsed || !doneBtn) {
        return;
      }
      const isEditorHidden = editor.classList.contains("hidden");
      const isParsedHidden = parsed.classList.contains("hidden");
      if (isEditorHidden) {
        const padding = parseFloat($("interface")?.style.fontSize || "0") * 16 * 3;
        editor.style.height = ($("notes_container")?.offsetHeight || 0) - padding + "px";
        editor.focus();
      }
      editor.setAttribute("tabindex", isEditorHidden ? "0" : "-1");
      clas(editor, !isEditorHidden, "hidden");
      clas(parsed, !isParsedHidden, "hidden");
      doneBtn.textContent = tradThis(isEditorHidden ? "Done" : "Edit");
    }
    function editorKeybindings(key, cmd, shift) {
      const editordom = editor;
      const { selectionStart, selectionEnd } = editordom;
      if (cmd === false) {
        return;
      }
      function addDecoration(charStart, charEnd = charStart) {
        let result = editordom.value, start = result.substring(0, selectionStart), selection = result.substring(selectionStart, selectionEnd), end = result.substring(selectionEnd);
        const isRemoval = selection.startsWith(charStart) && (selection.endsWith(charEnd) || charEnd === "");
        selection = isRemoval ? selection.substring(charStart.length, selection.length - charEnd.length) : charStart + selection + charEnd;
        result = start + selection + end;
        editordom.value = result;
        notes(null, { is: "change", value: result });
        const addLength = charStart.length + charEnd.length;
        const remLength = -(charStart.length + charEnd.length);
        editordom.selectionStart = selectionStart;
        editordom.selectionEnd = selectionEnd + (isRemoval ? remLength : addLength);
      }
      switch (key) {
        case "KeyC": {
          if (shift)
            addDecoration("[ ] ", "");
          break;
        }
        case "KeyI":
          addDecoration("_");
          break;
        case "KeyB":
          addDecoration("**");
          break;
        case "KeyS":
          addDecoration("~~");
          break;
        case "KeyU":
          addDecoration("[", "](url)");
          break;
        case "Enter":
          toggleEditable();
          break;
      }
    }
    if (event) {
      lsOnlineStorage.get(false, "notes", (data) => {
        let notes2 = data.notes || syncDefaults.notes;
        switch (event?.is) {
          case "toggle": {
            const on = event.value === "true";
            const { align, opacity, text } = notes2;
            interfaceWidgetToggle(null, "notes");
            handleToggle(on);
            notes2.on = on;
            if (on && editor) {
              handleAlign(align);
              handleOpacity(opacity);
              parseMarkdownToHTML(text);
              editor.value = text;
            }
            break;
          }
          case "change": {
            parseMarkdownToHTML(event.value);
            notes2.text = event.value;
            break;
          }
          case "align": {
            handleAlign(event.value);
            notes2.align = event.value;
            break;
          }
          case "opacity": {
            handleOpacity(parseFloat(event.value));
            notes2.opacity = parseFloat(event.value);
            break;
          }
        }
        eventDebounce({ notes: notes2 });
      });
      return;
    }
    if (!editor || !init) {
      return;
    }
    if (init.on) {
      handleAlign(init.align);
      handleOpacity(init.opacity);
      handleToggle(init.on);
      parseMarkdownToHTML(init.text);
      editor.value = init.text;
    }
    function doubleClickToggle(e2) {
      const path = e2.composedPath();
      const isCheckbox = path[0].tagName === "INPUT";
      let string = "";
      if ((window.getSelection()?.rangeCount || -1) > 0) {
        string = window.getSelection()?.getRangeAt(0)?.toString().trim() || "";
      }
      if (!isCheckbox && string.length < 2) {
        toggleEditable();
      }
    }
    if (mobilecheck()) {
      let last = 0;
      parsed?.addEventListener("touchstart", (e2) => {
        if (last !== 0 && e2.timeStamp - last < 300)
          doubleClickToggle(e2);
        last = e2.timeStamp;
      });
    } else
      parsed?.addEventListener("dblclick", doubleClickToggle);
    doneBtn?.addEventListener("click", () => {
      toggleEditable();
    });
    editor?.addEventListener("input", function() {
      notes(null, { is: "change", value: this.value });
    });
    editor?.addEventListener("keydown", (e2) => {
      const otherKeys = ["KeyI", "KeyB", "KeyS", "KeyU", "KeyT"];
      const modifier = testOS.mac ? e2.metaKey : e2.ctrlKey;
      const chbxKeys = modifier && e2.shiftKey && e2.code === "KeyC";
      if (chbxKeys || modifier && otherKeys.includes(e2.code)) {
        e2.preventDefault();
      }
      if (!testOS.windows) {
        editorKeybindings(e2.code, modifier, e2.shiftKey);
      }
    });
    editor?.addEventListener("keyup", (e2) => {
      testOS.windows ? editorKeybindings(e2.code, e2.ctrlKey, e2.shiftKey) : "";
    });
  }
  function favicon(init, event) {
    function createFavicon(emoji) {
      const svg = `data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><text y=".9em" font-size="85">${emoji}</text></svg>`;
      document.querySelector("link[rel~='icon']")?.setAttribute("href", emoji ? svg : `src/assets/${getFavicon()}`);
    }
    if (init !== void 0 && init !== null) {
      createFavicon(init);
    }
    if (event) {
      const val = event.value;
      const isEmoji = val.match(/\p{Emoji}/gu) && !val.match(/[0-9a-z]/g);
      if (isEmoji)
        createFavicon(val);
      else
        event.value = "";
      eventDebounce({ favicon: isEmoji ? val : "" });
    }
  }
  function tabTitle(init, event) {
    const title = init ? init : event ? stringMaxSize(event.value, 80) : tradThis("New tab");
    if (event) {
      eventDebounce({ tabtitle: title });
    }
    document.title = title;
  }
  function clock(init, event) {
    function zonedDate(timezone = "auto") {
      const date = new Date();
      if (timezone === "auto")
        return date;
      const offset = date.getTimezoneOffset() / 60;
      const utcHour = date.getHours() + offset;
      date.setHours(utcHour + parseInt(timezone));
      return date;
    }
    function clockDate(date, usdate) {
      const jour = tradThis(days[date.getDay()]), mois = tradThis(months[date.getMonth()]), chiffre = date.getDate();
      $("date").textContent = usdate ? `${jour}, ${mois} ${chiffre}` : `${jour} ${chiffre} ${mois}`;
    }
    function greetings(date, name) {
      const greets = [
        { text: "Good night", hour: 7 },
        { text: "Good morning", hour: 12 },
        { text: "Good afternoon", hour: 18 },
        { text: "Good evening", hour: 24 }
      ];
      const domgreetings = $("greetings");
      const greetResult = greets.filter((greet) => date.getHours() < greet.hour)[0];
      domgreetings.style.textTransform = name ? "none" : "capitalize";
      domgreetings.textContent = tradThis(greetResult.text) + (name ? `, ${name}` : "");
    }
    function changeAnalogFace(face = "none") {
      const chars = {
        none: ["", "", "", ""],
        number: ["12", "3", "6", "9"],
        roman: ["XII", "III", "VI", "IX"],
        marks: ["\u2502", "\u2500", "\u2502", "\u2500"]
      };
      document.querySelectorAll("#analogClock .numbers").forEach((mark, i) => mark.textContent = chars[face][i]);
    }
    function startClock(clock3, greeting, usdate) {
      function displayControl() {
        const numeric = $("clock"), analog = $("analogClock"), analogSec = $("analogSeconds");
        clas(numeric, clock3.analog, "hidden");
        clas(analog, !clock3.analog, "hidden");
        clas(analogSec, !clock3.seconds && clock3.analog, "hidden");
      }
      function clockInterval() {
        function numerical(date2) {
          function toAmpm(val) {
            if (val > 12)
              val -= 12;
            else if (val === 0)
              val = 12;
            else
              val;
            return val;
          }
          function fixunits(val) {
            let res = val < 10 ? "0" + val.toString() : val.toString();
            return res;
          }
          let h = clock3.ampm ? toAmpm(date2.getHours()) : date2.getHours(), m = fixunits(date2.getMinutes()), s = fixunits(date2.getSeconds());
          $("clock").textContent = `${h}:${m}${clock3.seconds ? ":" + s : ""}`;
        }
        function analog(date2) {
          function rotation(that, val) {
            that.style.transform = `rotate(${val}deg)`;
          }
          let s = date2.getSeconds() * 6, m = date2.getMinutes() * 6, h = date2.getHours() * 30;
          if (true)
            rotation($("minutes"), m);
          if (true)
            rotation($("hours"), h);
          if (clock3.seconds)
            rotation($("analogSeconds"), s);
        }
        const date = zonedDate(clock3.timezone);
        clock3.analog ? analog(date) : numerical(date);
        if (date.getHours() === 0 && date.getMinutes() === 0) {
          clockDate(date, usdate);
        }
        if (date.getMinutes() === 0) {
          greetings(date, greeting);
        }
      }
      clearInterval(lazyClockInterval);
      displayControl();
      clockInterval();
      lazyClockInterval = setInterval(clockInterval, 1e3);
    }
    if (event) {
      lsOnlineStorage.get(false, ["clock", "usdate", "greeting"], (data) => {
        let clock3 = data.clock || {
          analog: false,
          seconds: false,
          ampm: false,
          timezone: "auto",
          face: "none"
        };
        switch (event.is) {
          case "usdate": {
            clockDate(zonedDate(data.clock.timezone), event.checked || false);
            lsOnlineStorage.set({ usdate: event.checked });
            break;
          }
          case "greeting": {
            greetings(zonedDate(data.clock.timezone), event.value);
            lsOnlineStorage.set({ greeting: event.value });
            break;
          }
          case "timezone": {
            clockDate(zonedDate(event.value), data.usdate);
            greetings(zonedDate(event.value), data.greeting);
            clock3.timezone = event.value;
            break;
          }
          case "ampm":
            clock3.ampm = event.checked;
            break;
          case "analog":
            clock3.analog = event.checked;
            break;
          case "face":
            clock3.face = event.value;
            break;
          case "seconds":
            clock3.seconds = event.checked;
            break;
        }
        lsOnlineStorage.set({ clock: clock3 });
        startClock(clock3, data.greeting, data.usdate);
        changeAnalogFace(clock3.face);
      });
      return;
    }
    let clock2 = init?.clock || {
      analog: false,
      seconds: false,
      ampm: false,
      timezone: "auto",
      face: "none"
    };
    try {
      startClock(clock2, init?.greeting || "", init?.usdate || false);
      clockDate(zonedDate(clock2.timezone), init?.usdate || false);
      greetings(zonedDate(clock2.timezone), init?.greeting || "");
      changeAnalogFace(clock2.face);
      canDisplayInterface("clock");
    } catch (e2) {
      errorMessage("Clock or greetings failed at init", e2);
    }
  }
  function quickLinks(init, event) {
    const domlinkblocks = $("linkblocks");
    async function initblocks(links, isnewtab) {
      function createBlock(link) {
        let title = stringMaxSize(link.title, 64);
        let url = stringMaxSize(link.url, 512);
        const img = document.createElement("img");
        const span = document.createElement("span");
        const atag = document.createElement("a");
        const li = document.createElement("li");
        img.alt = "";
        img.loading = "lazy";
        img.setAttribute("draggable", "false");
        atag.appendChild(img);
        atag.appendChild(span);
        atag.setAttribute("draggable", "false");
        atag.href = url;
        atag.setAttribute("rel", "noreferrer noopener");
        if (isnewtab) {
          atag.setAttribute("target", "_blank");
        }
        li.id = link._id;
        li.setAttribute("class", "block");
        li.appendChild(atag);
        textOnlyControl(li, title, domlinkblocks.className === "text");
        domlinkblocks.appendChild(li);
        return { icon: img, block: li };
      }
      async function fetchNewIcon(dom, url) {
        dom.src = "src/assets/interface/loading.svg";
        const img = new Image();
        let result = `https://icons.duckduckgo.com/ip3/${extractHostname(url)}.ico`;
        const bonjourrAPI = await fetch(`https://favicon.bonjourr.fr/api/${extractHostname(url)}`);
        const apiText = await bonjourrAPI.text();
        if (apiText.length > 0) {
          result = apiText;
        }
        img.onload = () => dom.src = result;
        img.src = result;
        img.remove();
        return result;
      }
      if (links.length > 0) {
        if (!init) {
          ;
          [...domlinkblocks.children].forEach((li) => li.remove());
        }
        try {
          const blocklist = links.map((l) => createBlock(l));
          blocklist.forEach(({ block }) => addEvents(block));
          linksDragging();
          canDisplayInterface("links");
          links.map(async (link, index) => {
            const dom = blocklist[index].icon;
            const needsToChange = ["api.faviconkit.com", "loading.svg"].some((x) => link.icon.includes(x));
            if (needsToChange) {
              link.icon = await fetchNewIcon(dom, link.url);
              lsOnlineStorage.set({ [link._id]: link });
            } else
              dom.src = link.icon;
          });
        } catch (e2) {
          errorMessage("Failed to load links", e2);
        }
      } else
        canDisplayInterface("links");
    }
    function removeLinkSelection() {
      domlinkblocks.querySelectorAll("img").forEach(function(e2) {
        clas(e2, false, "selected");
      });
    }
    function addEvents(elem) {
      if (testOS.ios) {
        let timer = 0;
        elem.addEventListener(
          "touchstart",
          function(e2) {
            timer = setTimeout(() => {
              e2.preventDefault();
              removeLinkSelection();
              displayEditWindow(elem, { x: 0, y: 0 });
            }, 600);
          },
          false
        );
        elem.addEventListener("touchmove", () => clearTimeout(timer), false);
        elem.addEventListener("touchend", () => clearTimeout(timer), false);
      }
      elem.oncontextmenu = function(e2) {
        e2.preventDefault();
        removeLinkSelection();
        displayEditWindow(this, { x: e2.x, y: e2.y });
      };
      elem.onkeyup = function(e2) {
        if (e2.key === "e") {
          const { offsetLeft, offsetTop } = e2.target;
          displayEditWindow(this, { x: offsetLeft, y: offsetTop });
        }
      };
    }
    function linksDragging() {
      let draggedId = "";
      let draggedClone;
      let updatedOrder = {};
      let coords = {};
      let coordsEntries = [];
      let startsDrag = false;
      let push = 0;
      let [cox, coy] = [0, 0];
      const deplaceElem = (dom, x, y) => {
        dom.style.transform = `translateX(${x}px) translateY(${y}px)`;
      };
      const initDrag = (ex, ey, path) => {
        let block = path.find((t2) => t2.className === "block");
        if (!block) {
          return;
        }
        startsDrag = true;
        draggedId = block.id;
        push = dominterface.classList.contains("pushed") ? 100 : 0;
        dominterface.style.cursor = "grabbing";
        document.querySelectorAll("#linkblocks li").forEach((block2, i) => {
          const { x, y, width, height } = block2.getBoundingClientRect();
          const blockid = block2.id;
          updatedOrder[blockid] = i;
          coords[blockid] = {
            order: i,
            pos: { x, y },
            triggerbox: {
              x: [x + width * 0.1, x + width * 0.9],
              y: [y + height * 0.1, y + height * 0.9]
            }
          };
        });
        coordsEntries = Object.entries(coords);
        const draggedDOM = $(draggedId);
        const draggedCoord = coords[draggedId];
        if (draggedDOM) {
          draggedDOM.style.opacity = "0";
          draggedClone = draggedDOM.cloneNode(true);
          draggedClone.id = "";
          draggedClone.className = "block dragging-clone on";
          domlinkblocks.appendChild(draggedClone);
        }
        if (draggedCoord) {
          cox = ex - draggedCoord.pos.x;
          coy = ey - draggedCoord.pos.y;
        }
        deplaceElem(draggedClone, ex - cox + push, ey - coy);
        clas(domlinkblocks, true, "dragging");
      };
      const applyDrag = (ex, ey) => {
        deplaceElem(draggedClone, ex + push - cox, ey - coy);
        coordsEntries.forEach(function parseThroughCoords([key, val]) {
          if (ex > val.triggerbox.x[0] && ex < val.triggerbox.x[1] && ey > val.triggerbox.y[0] && ey < val.triggerbox.y[1]) {
            const drgO = coords[draggedId]?.order || 0;
            const keyO = coords[key]?.order || 0;
            let interval = [drgO, keyO];
            let direction = 0;
            if (drgO < keyO)
              direction = -1;
            if (drgO > keyO)
              direction = 1;
            if (direction > 0)
              interval[0] -= 1;
            if (direction < 0)
              interval[0] += 1;
            interval = interval.sort((a, b) => a - b);
            coordsEntries.forEach(([keyBis, coord], index) => {
              const neighboor = $(keyBis);
              if (!neighboor) {
                return;
              }
              if (index >= interval[0] && index <= interval[1]) {
                const ox = coordsEntries[index + direction][1].pos.x - coord.pos.x;
                const oy = coordsEntries[index + direction][1].pos.y - coord.pos.y;
                updatedOrder[keyBis] = index + direction;
                deplaceElem(neighboor, ox, oy);
                return;
              }
              updatedOrder[keyBis] = index;
              deplaceElem(neighboor, 0, 0);
            });
            updatedOrder[draggedId] = keyO;
          }
        });
      };
      const endDrag = () => {
        if (draggedId && startsDrag) {
          const neworder = updatedOrder[draggedId];
          const { x, y } = coordsEntries[neworder][1].pos;
          startsDrag = false;
          draggedId = "";
          coords = {};
          coordsEntries = [];
          deplaceElem(draggedClone, x + push, y);
          draggedClone.className = "block dragging-clone";
          dominterface.style.cursor = "";
          setTimeout(() => {
            lsOnlineStorage.get(false, null, (data) => {
              Object.entries(updatedOrder).forEach(([key, val]) => {
                const link = data[key];
                link.order = val;
              });
              clas(domlinkblocks, false, "dragging");
              eventDebounce({ ...data });
              [...domlinkblocks.children].forEach((li) => li.remove());
              initblocks(bundleLinks(data), data.linknewtab);
            });
          }, 200);
        }
      };
      if (testOS.ios || mobilecheck()) {
        domlinkblocks.ontouchmove = function(e2) {
          e2.preventDefault();
          !startsDrag ? initDrag(e2.touches[0]?.clientX || 0, e2.touches[0]?.clientY || 0, e2.composedPath()) : applyDrag(e2.touches[0]?.clientX || 0, e2.touches[0]?.clientY || 0);
        };
        domlinkblocks.ontouchend = endDrag;
      } else {
        dominterface.onmousemove = function(e2) {
          if (e2.buttons !== 1)
            return;
          !startsDrag ? initDrag(e2.x, e2.y, e2.composedPath()) : applyDrag(e2.x, e2.y);
        };
        dominterface.onmouseup = endDrag;
        dominterface.onmouseleave = endDrag;
      }
    }
    function editEvents() {
      function submitEvent() {
        return updatesEditedLink($("editlink").getAttribute("data-linkid") || "");
      }
      function inputSubmitEvent(e2) {
        if (e2.code === "Enter") {
          submitEvent();
          const input = e2.target;
          input.blur();
        }
      }
      $("e_delete")?.addEventListener("click", function() {
        removeLinkSelection();
        removeblock($("editlink").getAttribute("data-linkid") || "");
        clas($("editlink"), false, "shown");
      });
      $("e_submit")?.addEventListener("click", function() {
        const noErrorOnEdit = submitEvent();
        if (noErrorOnEdit) {
          closeEditLink();
          removeLinkSelection();
        }
      });
      $("e_title")?.addEventListener("keyup", inputSubmitEvent);
      $("e_url")?.addEventListener("keyup", inputSubmitEvent);
      $("e_iconurl")?.addEventListener("keyup", inputSubmitEvent);
    }
    function displayEditWindow(domlink, { x, y }) {
      function positionsEditWindow() {
        const { innerHeight, innerWidth } = window;
        removeLinkSelection();
        if (x + 250 > innerWidth)
          x -= x + 250 - innerWidth;
        if (y + 200 > innerHeight)
          y -= 200;
        document.querySelector("#editlink")?.setAttribute("style", `transform: translate(${x + 3}px, ${y + 3}px)`);
      }
      const linkId = domlink.id;
      const domicon = domlink.querySelector("img");
      const domedit = document.querySelector("#editlink");
      const opendedSettings = has($("settings"), "shown");
      lsOnlineStorage.get(false, linkId, (data) => {
        const { title, url, icon } = data[linkId];
        const domtitle = $("e_title");
        const domurl = $("e_url");
        const domiconurl = $("e_iconurl");
        domtitle.setAttribute("placeholder", tradThis("Title"));
        domurl.setAttribute("placeholder", tradThis("Link"));
        domiconurl.setAttribute("placeholder", tradThis("Icon"));
        domtitle.value = title;
        domurl.value = url;
        domiconurl.value = icon;
        positionsEditWindow();
        clas(domicon, true, "selected");
        clas(domedit, true, "shown");
        clas(domedit, opendedSettings, "pushed");
        domedit?.setAttribute("data-linkid", linkId);
        domtitle.focus();
      });
    }
    function updatesEditedLink(linkId) {
      const e_title = $("e_title");
      const e_url = $("e_url");
      const e_iconurl = $("e_iconurl");
      if (e_iconurl.value.length === 7500) {
        e_iconurl.value = "";
        e_iconurl.setAttribute("placeholder", tradThis("Icon must be < 8kB"));
        return false;
      }
      lsOnlineStorage.get(false, linkId, (data) => {
        const domlink = $(linkId);
        const domicon = domlink.querySelector("img");
        const domurl = domlink.querySelector("a");
        let link = data[linkId];
        link = {
          ...link,
          title: stringMaxSize(e_title.value, 64),
          url: stringMaxSize(e_url.value, 512),
          icon: stringMaxSize(e_iconurl.value, 7500)
        };
        textOnlyControl(domlink, link.title, domlinkblocks.className === "text");
        domurl.href = link.url;
        domicon.src = link.icon;
        lsOnlineStorage.set({ [linkId]: link });
      });
      return true;
    }
    function removeblock(linkId) {
      lsOnlineStorage.get(false, [linkId], (data) => {
        const links = bundleLinks(data);
        let link = data[linkId];
        const linkDOM = $(linkId);
        if (!link || !linkDOM) {
          return;
        }
        const rowDOM = linkDOM.parentElement;
        const height = linkDOM.getBoundingClientRect().height;
        const isLastOnRow = rowDOM.childElementCount === 1;
        linkDOM.setAttribute("style", "height: " + height + "px");
        clas(linkDOM, true, "removed");
        if (isLastOnRow) {
          rowDOM.setAttribute("style", "max-height: 0; overflow: hidden");
        }
        setTimeout(function() {
          linkDOM.remove();
          if (isLastOnRow) {
            rowDOM.remove();
          }
        }, 600);
        links.forEach((l) => {
          l.order -= l.order > link.order ? 1 : 0;
          data[l._id] = l;
        });
        lsOnlineStorage.set(isExtension ? data : { import: data });
        lsOnlineStorage.remove(false, link._id);
      });
    }
    function linkSubmission(type, importList) {
      lsOnlineStorage.get(false, null, (data) => {
        const links = bundleLinks(data);
        let newLinksList = [];
        const validator = (title, url, order) => {
          url = stringMaxSize(url, 512);
          const to = (scheme) => url.startsWith(scheme);
          const acceptableSchemes = to("http://") || to("https://");
          const unacceptable = to("about:") || to("chrome://");
          return {
            order,
            _id: "links" + randomString(6),
            title: stringMaxSize(title, 64),
            icon: "src/assets/interface/loading.svg",
            url: acceptableSchemes ? url : unacceptable ? "false" : "https://" + url
          };
        };
        if (type === "add") {
          const titledom = $("i_title");
          const urldom = $("i_url");
          const title = titledom.value;
          const url = urldom.value;
          if (url.length < 3)
            return;
          titledom.value = "";
          urldom.value = "";
          newLinksList.push(validator(title, url, links.length));
        }
        if (type === "import" && importList) {
          if (importList?.length === 0)
            return;
          importList.forEach(({ title, url }, i) => {
            if (url !== "false") {
              newLinksList.push(validator(title, url, links.length + i));
            }
          });
        }
        newLinksList.forEach((newlink) => {
          lsOnlineStorage.set({ [newlink._id]: newlink });
        });
        links.push(...newLinksList);
        initblocks(links, data.linknewtab);
        domlinkblocks.style.visibility = "visible";
      });
    }
    function textOnlyControl(block, title, toText) {
      const span = block.querySelector("span");
      const a = block.querySelector("a");
      if (span && a) {
        span.textContent = toText && title === "" ? extractDomain(a.href) : title;
      }
    }
    function setRows(amount, style) {
      const sizes = {
        large: { width: 4.8, gap: 2.3 },
        medium: { width: 3.5, gap: 2 },
        small: { width: 2.5, gap: 2 },
        text: { width: 5, gap: 2 }
      };
      const { width, gap } = sizes[style];
      domlinkblocks.style.maxWidth = (width + gap) * amount + "em";
    }
    if (event) {
      switch (event.is) {
        case "add":
          linkSubmission("add");
          break;
        case "import":
          linkSubmission("import", event.bookmarks);
          break;
        case "toggle": {
          clas($("linkblocks"), !event.checked, "hidden");
          interfaceWidgetToggle(null, "quicklinks");
          lsOnlineStorage.set({ quicklinks: event.checked });
          break;
        }
        case "newtab": {
          const val = event.checked || false;
          lsOnlineStorage.set({ linknewtab: val });
          document.querySelectorAll(".block a").forEach((a) => {
            if (val)
              a.setAttribute("target", "_blank");
            else
              a.removeAttribute("target");
          });
          break;
        }
        case "style": {
          lsOnlineStorage.get(false, null, (data) => {
            const links = bundleLinks(data);
            const classes = ["large", "medium", "small", "text"];
            const blocks = document.querySelectorAll("#linkblocks .block");
            const chosenClass = event.value?.toString() || "";
            links.forEach(({ title }, i) => textOnlyControl(blocks[i], title, chosenClass === "text"));
            classes.forEach((c) => domlinkblocks.classList.remove(c));
            domlinkblocks.classList.add(chosenClass);
            setRows(data.linksrow, chosenClass);
            lsOnlineStorage.set({ linkstyle: chosenClass });
          });
          break;
        }
        case "row": {
          let domStyle = domlinkblocks.className || "large";
          const row = parseInt(event.value || "6");
          setRows(row, domStyle);
          eventDebounce({ linksrow: row });
          break;
        }
      }
      return;
    }
    if (!init) {
      errorMessage("No data for quick links !");
      return;
    }
    domlinkblocks.className = init.linkstyle;
    clas($("linkblocks"), !init.quicklinks, "hidden");
    initblocks(bundleLinks(init), init.linknewtab);
    setRows(init.linksrow, init.linkstyle);
    setTimeout(() => editEvents(), 150);
    window.addEventListener("resize", (e2) => {
      if (document.querySelector("#editlink")?.classList.contains("shown")) {
        closeEditLink();
      }
    });
  }
  async function linksImport() {
    const closeBookmarks = (container) => {
      container.classList.add("hiding");
      setTimeout(() => container.setAttribute("class", ""), 400);
    };
    function main(links, bookmarks) {
      const listdom = document.createElement("ol");
      let bookmarksList = [];
      let selectedList = [];
      bookmarks[0].children?.forEach((cat) => {
        const list = cat.children;
        if (Array.isArray(list)) {
          bookmarksList.push(...list);
        }
      });
      function selectBookmark(elem) {
        const isSelected = elem.classList.toggle("selected");
        const index = elem.getAttribute("data-index");
        let counter = listdom.querySelectorAll("li.selected").length;
        if (!index)
          return;
        isSelected ? selectedList.push(index) : selectedList.pop();
        if (counter === 0)
          $("bmk_apply").textContent = tradThis("Select bookmarks to import");
        if (counter === 1)
          $("bmk_apply").textContent = tradThis("Import this bookmark");
        if (counter > 1)
          $("bmk_apply").textContent = tradThis("Import these bookmarks");
        clas($("bmk_apply"), counter === 0, "none");
      }
      bookmarksList.forEach((mark, index) => {
        const elem = document.createElement("li");
        const titleWrap = document.createElement("p");
        const title = document.createElement("span");
        const favicon2 = document.createElement("img");
        const url = document.createElement("pre");
        const markURL = mark.url;
        if (!markURL || markURL === "") {
          return;
        }
        favicon2.src = "https://icons.duckduckgo.com/ip3/" + extractHostname(markURL) + ".ico";
        favicon2.alt = "";
        title.textContent = mark.title;
        url.textContent = markURL;
        titleWrap.appendChild(favicon2);
        titleWrap.appendChild(title);
        elem.setAttribute("data-index", index.toString());
        elem.setAttribute("tabindex", "0");
        elem.appendChild(titleWrap);
        elem.appendChild(url);
        elem.onclick = () => selectBookmark(elem);
        elem.onkeydown = (e2) => e2.code === "Enter" ? selectBookmark(elem) : "";
        if (links.filter((x) => x.url === stringMaxSize(markURL, 512)).length === 0) {
          listdom.appendChild(elem);
        }
      });
      const oldList = document.querySelector("#bookmarks ol");
      if (oldList)
        oldList.remove();
      $("bookmarks").prepend(listdom);
      if (bookmarksList.length === 0) {
        clas($("bookmarks"), true, "noneFound");
        return;
      }
      $("bmk_apply").onclick = function() {
        let bookmarkToApply = selectedList.map((i) => ({
          title: bookmarksList[parseInt(i)].title,
          url: bookmarksList[parseInt(i)].url || ""
        }));
        if (bookmarkToApply.length > 0) {
          closeBookmarks($("bookmarks_container"));
          quickLinks(null, { is: "import", bookmarks: bookmarkToApply });
        }
      };
      const lidom = document.querySelector("#bookmarks ol li");
      lidom.focus();
    }
    chrome.permissions.request({ permissions: ["bookmarks"] }, (granted) => {
      if (!granted)
        return;
      lsOnlineStorage.get(false, null, (data) => {
        const extAPI = window.location.protocol === "moz-extension:" ? browser : chrome;
        extAPI.bookmarks.getTree().then((response) => {
          clas($("bookmarks_container"), true, "shown");
          main(bundleLinks(data), response);
        });
      });
    });
    $("bmk_close").onclick = () => closeBookmarks($("bookmarks_container"));
    $("bookmarks_container").addEventListener("click", function(e2) {
      if (e2.target.id === "bookmarks_container")
        closeBookmarks(this);
    });
  }
  function weather(init, event) {
    const date = new Date();
    const i_city = $("i_city");
    const i_ccode = $("i_ccode");
    const sett_city = $("sett_city");
    const current = $("current");
    const forecast = $("forecast");
    const tempContainer = $("tempContainer");
    async function request(storage) {
      function getRequestURL(isForecast) {
        const WEATHER_API_KEY = [
          "YTU0ZjkxOThkODY4YTJhNjk4ZDQ1MGRlN2NiODBiNDU=",
          "Y2U1M2Y3MDdhZWMyZDk1NjEwZjIwYjk4Y2VjYzA1NzE=",
          "N2M1NDFjYWVmNWZjNzQ2N2ZjNzI2N2UyZjc1NjQ5YTk="
        ];
        const type = isForecast ? "forecast" : "weather";
        const lang = document.documentElement.getAttribute("lang");
        const key = window.atob(WEATHER_API_KEY[forecast ? 0 : 1]);
        const units = storage.unit || "metric";
        let location2 = "";
        if (storage.location?.length === 2) {
          location2 = `&lat=${storage.location[0]}&lon=${storage.location[1]}`;
        } else {
          location2 = `&q=${encodeURI(storage.city)},${storage.ccode}`;
        }
        return `https://api.openweathermap.org/data/2.5/${type}?appid=${key}${location2}&units=${units}&lang=${lang}`;
      }
      if (!navigator.onLine) {
        return storage;
      }
      let currentResponse;
      let forecastResponse;
      let currentJSON;
      let forecastJSON;
      try {
        currentResponse = await fetch(getRequestURL(false));
        forecastResponse = await fetch(getRequestURL(true));
        currentJSON = await currentResponse.json();
        forecastJSON = await forecastResponse.json();
      } catch (error) {
        console.error(error);
        return storage;
      }
      if (!currentResponse.ok || !forecastResponse.ok) {
        return storage;
      }
      const { temp, feels_like, temp_max } = currentJSON.main;
      const { sunrise: sunrise2, sunset: sunset2 } = currentJSON.sys;
      const { description, id } = currentJSON.weather[0];
      storage = {
        ...storage,
        lastCall: Math.floor(new Date().getTime() / 1e3),
        lastState: {
          temp,
          feels_like,
          temp_max,
          sunrise: sunrise2,
          sunset: sunset2,
          description,
          icon_id: id
        }
      };
      const thisdate = new Date();
      const todayHour = thisdate.getHours();
      let forecastDay = thisdate.getDate();
      let maxTempFromList = -273.15;
      if (todayHour > 18) {
        const tomorrow = thisdate.setDate(thisdate.getDate() + 1);
        forecastDay = new Date(tomorrow).getDate();
      }
      forecastJSON.list.forEach((elem) => {
        if (new Date(elem.dt * 1e3).getDate() === forecastDay)
          maxTempFromList < elem.main.temp_max ? maxTempFromList = elem.main.temp_max : "";
      });
      storage.fcHigh = Math.round(maxTempFromList);
      return storage;
    }
    async function weatherCacheControl(storage) {
      const now = Math.floor(date.getTime() / 1e3);
      if (typeof storage.lastCall === "number") {
        if (navigator.onLine && (now > storage.lastCall + 1800 || sessionStorage.lang)) {
          sessionStorage.removeItem("lang");
          storage = await request(storage);
          lsOnlineStorage.set({ weather: storage });
        }
        displayWeather(storage);
      } else
        initWeather(storage);
    }
    async function initWeather(storage) {
      try {
        const ipapi = await fetch("https://ipapi.co/json");
        if (ipapi.ok) {
          const json = await ipapi.json();
          if (!json.error) {
            storage = { ...storage, city: json.city, ccode: json.country };
          }
        }
      } catch (error) {
        console.log(error);
      }
      async function setWeatherAfterGeolocation(location2) {
        if (location2) {
          storage.location = location2;
        }
        storage = await request(storage);
        displayWeather(storage);
        lsOnlineStorage.set({ weather: storage });
        setTimeout(() => {
          if ($("settings")) {
            const i_ccode2 = $("i_ccode");
            const i_city2 = $("i_city");
            const i_geol = $("i_geol");
            const sett_city2 = $("sett_city");
            i_ccode2.value = storage.ccode;
            i_city2.setAttribute("placeholder", storage.city);
            if (location2) {
              clas(sett_city2, true, "hidden");
              i_geol.checked = true;
            }
          }
        }, 150);
      }
      navigator.geolocation.getCurrentPosition(
        (pos) => setWeatherAfterGeolocation([pos.coords.latitude, pos.coords.longitude]),
        () => setWeatherAfterGeolocation()
      );
    }
    function displayWeather(storage) {
      const currentState = storage.lastState;
      if (!currentState) {
        return;
      }
      const handleDescription = () => {
        const desc = currentState.description;
        const feels = Math.floor(currentState.feels_like);
        const actual = Math.floor(currentState.temp);
        let tempText = "";
        switch (storage.temperature) {
          case "feelslike": {
            tempText = `${tradThis("It currently feels like")} ${feels}\xB0`;
            break;
          }
          case "both": {
            tempText = `${tradThis("It is currently")} ${actual}\xB0, ${tradThis("feels like")} ${feels}\xB0`;
            break;
          }
          default: {
            tempText = `${tradThis("It is currently")} ${actual}\xB0`;
          }
        }
        const iconText = tempContainer?.querySelector("p");
        if (current && iconText) {
          current.textContent = `${desc[0].toUpperCase() + desc.slice(1)}. ${tempText}`;
          iconText.textContent = actual + "\xB0";
        }
      };
      const handleWidget = () => {
        let filename = "lightrain";
        const categorieIds = [
          [[200, 201, 202, 210, 211, 212, 221, 230, 231, 232], "thunderstorm"],
          [[300, 301, 302, 310], "lightdrizzle"],
          [[312, 313, 314, 321], "showerdrizzle"],
          [[500, 501, 502, 503], "lightrain"],
          [[504, 520, 521, 522], "showerrain"],
          [[511, 600, 601, 602, 611, 612, 613, 615, 616, 620, 621, 622], "snow"],
          [[701, 711, 721, 731, 741, 751, 761, 762, 771, 781], "mist"],
          [[800], "clearsky"],
          [[801], "fewclouds"],
          [[802], "brokenclouds"],
          [[803, 804], "overcastclouds"]
        ];
        categorieIds.forEach((category) => {
          if (category[0].includes(currentState.icon_id))
            filename = category[1];
        });
        if (!tempContainer) {
          return;
        }
        const widgetIcon = tempContainer.querySelector("img");
        const { now, rise, set } = sunTime();
        const timeOfDay = now < rise || now > set ? "night" : "day";
        const iconSrc = `src/assets/weather/${timeOfDay}/${filename}.png`;
        if (widgetIcon) {
          widgetIcon.setAttribute("src", iconSrc);
          return;
        }
        const icon = document.createElement("img");
        icon.src = iconSrc;
        icon.setAttribute("alt", "");
        icon.setAttribute("draggable", "false");
        tempContainer.prepend(icon);
        setTimeout(() => tempContainer.style.transition = "opacity 0.4s, max-height 0.4s, transform 0.4s", 400);
      };
      const handleForecast = () => {
        if (forecast) {
          forecast.textContent = `${tradThis("with a high of")} ${storage.fcHigh}\xB0 ${tradThis(
            date.getHours() > 21 ? "tomorrow" : "today"
          )}.`;
          clas(forecast, false, "wait");
        }
      };
      handleWidget();
      handleDescription();
      handleForecast();
      clas(current, false, "wait");
      clas(tempContainer, false, "wait");
    }
    function forecastVisibilityControl(value = "auto") {
      let isTimeForForecast = false;
      if (value === "auto")
        isTimeForForecast = date.getHours() < 12 || date.getHours() > 21;
      else
        isTimeForForecast = value === "always";
      clas(forecast, isTimeForForecast, "shown");
    }
    async function updatesWeather() {
      lsOnlineStorage.get(false, "weather", async (data) => {
        switch (event?.is) {
          case "units": {
            data.weather.unit = event.checked ? "imperial" : "metric";
            data.weather = await request(data.weather);
            break;
          }
          case "city": {
            if (i_city.value.length < 3 || !navigator.onLine) {
              return false;
            }
            data.weather.ccode = i_ccode.value;
            data.weather.city = stringMaxSize(i_city.value, 64);
            const inputAnim = i_city.animate([{ opacity: 1 }, { opacity: 0.6 }], {
              direction: "alternate",
              easing: "linear",
              duration: 800,
              iterations: Infinity
            });
            data.weather = await request(data.weather);
            i_city.value = "";
            i_city.blur();
            inputAnim.cancel();
            i_city.setAttribute("placeholder", data.weather.city);
            break;
          }
          case "geol": {
            data.weather.location = [];
            if (event.checked) {
              navigator.geolocation.getCurrentPosition(
                async (pos) => {
                  clas(sett_city, event.checked || true, "hidden");
                  data.weather.location = [pos.coords.latitude, pos.coords.longitude];
                  data.weather = await request(data.weather);
                  lsOnlineStorage.set({ weather: data.weather });
                  displayWeather(data.weather);
                },
                () => {
                  setTimeout(() => event.checked = false, 400);
                }
              );
              return;
            } else {
              i_city.setAttribute("placeholder", data.weather.city);
              i_ccode.value = data.weather.ccode;
              clas(sett_city, event.checked || false, "hidden");
              data.weather.location = [];
              data.weather = await request(data.weather);
            }
            break;
          }
          case "forecast": {
            data.weather.forecast = event.value;
            forecastVisibilityControl(event.value);
            break;
          }
          case "temp": {
            data.weather.temperature = event.value;
            break;
          }
        }
        lsOnlineStorage.set({ weather: data.weather });
        displayWeather(data.weather);
      });
    }
    if (event) {
      updatesWeather();
      return;
    }
    if (init) {
      try {
        if (validateHideElem(init.hide)) {
          if (init.hide[1][1] + init.hide[1][2] === 2)
            return false;
        }
      } catch (e2) {
        errorMessage("Could not validate Hide in Weather", e2);
      }
      try {
        forecastVisibilityControl(init.weather.forecast);
        weatherCacheControl(init.weather);
      } catch (e2) {
        errorMessage("Weather init did not work", e2);
      }
    }
  }
  function initBackground(data) {
    const type = data.background_type || "dynamic";
    const blur = data.background_blur;
    const bright = data.background_bright;
    backgroundFilter("init", { blur, bright });
    if (type === "custom") {
      localBackgrounds({ every: data.custom_every, time: data.custom_time });
      return;
    }
    unsplash(data);
  }
  function imgBackground(url, loadTime = 0, isInit) {
    const overlaydom = $("background_overlay");
    const backgrounddom = $("background");
    let img = new Image();
    img.onload = () => {
      if (loadTime) {
        const animDuration = loadTime > 1e3 ? 1400 : loadTime + 400;
        const changeDuration = (time) => {
          overlaydom.style.transition = `transform .4s, opacity ${time}ms`;
        };
        changeDuration(animDuration);
        setTimeout(() => changeDuration(400), animDuration);
      }
      const applyBackground = () => {
        overlaydom.style.opacity = `1`;
        backgrounddom.style.backgroundImage = `url(${url})`;
        localIsLoading = false;
      };
      isInit ? applyBackground() : setTimeout(applyBackground, 400);
    };
    img.src = url;
    img.remove();
  }
  function localBackgrounds(init, event) {
    function isOnlineStorageAtCapacity(newFile) {
      if (detectPlatform() === "online") {
        const ls = localStorage.bonjourrBackgrounds;
        const potentialFontList = JSON.parse(ls).googleFonts ? 0 : 76e4;
        const lsSize = ls.length + potentialFontList + 1e5;
        if (lsSize + newFile.length > 5e6) {
          alert(`Image size exceeds storage: ${Math.abs(lsSize - 5e6) / 1e3}ko left`);
          $("background_overlay").style.opacity = "1";
          return true;
        }
      }
      return false;
    }
    function b64toBlobUrl(b64Data, callback) {
      fetch(`data:image/jpeg;base64,${b64Data}`).then((res) => {
        res.blob().then((blob) => callback(URL.createObjectURL(blob)));
      });
    }
    function thumbnailSelection(id) {
      document.querySelectorAll(".thumbnail").forEach((thumb) => clas(thumb, false, "selected"));
      clas(document.querySelector(".thumbnail#" + id), true, "selected");
    }
    function addNewImage(files) {
      const filesArray = [...files];
      let filesIdsList = [];
      let selected = "";
      filesArray.forEach(() => {
        const _id = randomString(6);
        selected = _id;
        filesIdsList.push(_id);
      });
      filesArray.forEach((file, i) => {
        let reader = new FileReader();
        reader.onload = function(event2) {
          const result = event2.target?.result;
          if (typeof result === "string" && isOnlineStorageAtCapacity(result)) {
            return console.warn("Uploaded image was not saved");
          }
          compress(result, "thumbnail", filesIdsList[i]);
          compress(result);
          lsOnlineStorage.setLocal({ ["custom_" + filesIdsList[i]]: result });
        };
        localIsLoading = true;
        $("background_overlay").style.opacity = "0";
        reader.readAsDataURL(file);
      });
      lsOnlineStorage.get(true, ["idsList"], (local) => {
        let list = [...local.idsList];
        list.push(...filesIdsList);
        if (local.idsList.length === 0) {
          lsOnlineStorage.set({ background_type: "custom" });
        }
        setTimeout(() => thumbnailSelection(selected), 400);
        lsOnlineStorage.setLocal({
          ...local,
          idsList: list,
          selectedId: selected
        });
      });
    }
    function compress(file, state, _id) {
      if (state !== "thumbnail") {
        clas($("credit"), false, "shown");
        $("background_overlay").style.opacity = `0`;
      }
      const compressStart = performance.now();
      const img = new Image();
      img.onload = () => {
        const elem = document.createElement("canvas");
        const ctx = elem.getContext("2d");
        if (!ctx)
          return;
        const height = state === "thumbnail" ? 140 * window.devicePixelRatio : img.height;
        const scaleFactor = height / img.height;
        elem.width = img.width * scaleFactor;
        elem.height = height;
        ctx.drawImage(img, 0, 0, img.width * scaleFactor, height);
        const data = ctx.canvas.toDataURL(img.src);
        const cleanData = data.slice(data.indexOf(",") + 1, data.length);
        if (state === "thumbnail" && _id) {
          lsOnlineStorage.setLocal({ ["customThumb_" + _id]: cleanData });
          addThumbnails(cleanData, _id, null, true);
          return;
        }
        b64toBlobUrl(cleanData, (bloburl) => {
          const compressTime = performance.now() - compressStart;
          setTimeout(() => imgBackground(bloburl, compressTime), 400 - compressTime);
        });
      };
      img.src = file;
    }
    function addThumbnails(data, _id, settingsDom, isSelected) {
      const settings = settingsDom ? settingsDom : $("settings");
      const thb = document.createElement("button");
      const rem = document.createElement("button");
      const thbimg = document.createElement("img");
      const remimg = document.createElement("img");
      const wrap = settings.querySelector("#fileContainer");
      thb.id = _id;
      thb.setAttribute("class", "thumbnail" + (isSelected ? " selected" : ""));
      clas(rem, true, "b_removethumb");
      clas(rem, !mobilecheck(), "hidden");
      thb.setAttribute("aria-label", "Select this background");
      rem.setAttribute("aria-label", "Remove this background");
      remimg.setAttribute("alt", "");
      thbimg.setAttribute("alt", "");
      remimg.setAttribute("src", "src/assets/interface/close.svg");
      rem.appendChild(remimg);
      b64toBlobUrl(data, (bloburl) => thbimg.src = bloburl);
      thb.appendChild(thbimg);
      thb.appendChild(rem);
      wrap?.prepend(thb);
      thb.onclick = (e2) => {
        if (e2.button !== 0 || localIsLoading || !e2.target) {
          return;
        }
        const thumbnailButton = e2.composedPath().find((d) => {
          return d.className.includes("thumbnail");
        });
        const _id2 = thumbnailButton.id;
        const bgKey = "custom_" + _id2;
        lsOnlineStorage.get(true, "selectedId", (local) => {
          if (_id2 !== local.selectedId) {
            thumbnailSelection(_id2);
            $("background_overlay").style.opacity = `0`;
            localIsLoading = true;
            lsOnlineStorage.setLocal({ selectedId: _id2 });
            lsOnlineStorage.get(true, [bgKey], (local2) => compress(local2[bgKey]));
          }
        });
      };
      rem.onclick = (e2) => {
        const path = e2.composedPath();
        if (e2.button !== 0 || localIsLoading) {
          return;
        }
        lsOnlineStorage.get(true, ["idsList", "selectedId"], (local) => {
          const thumbnail = path.find((d) => {
            return d.className.includes("thumbnail");
          });
          const _id2 = thumbnail.id;
          let { idsList, selectedId } = local;
          let poppedList = idsList.filter((s) => !s.includes(_id2));
          thumbnail.remove();
          lsOnlineStorage.remove(true, "custom_" + _id2);
          lsOnlineStorage.remove(true, ["customThumb_" + _id2]);
          lsOnlineStorage.setLocal({ idsList: poppedList });
          if (_id2 === selectedId) {
            if (poppedList.length > 0) {
              selectedId = poppedList[0];
              thumbnailSelection(selectedId);
              const toShowId = "custom_" + poppedList[0];
              lsOnlineStorage.get(true, [toShowId], (local2) => compress(local2[toShowId]));
            } else {
              $("background_overlay").style.opacity = "0";
              lsOnlineStorage.set({ background_type: "dynamic" });
              setTimeout(() => {
                lsOnlineStorage.get(false, "dynamic", (data2) => unsplash(data2));
              }, 400);
              selectedId = "";
            }
            lsOnlineStorage.setLocal({ selectedId });
          }
        });
      };
    }
    function displayCustomThumbnails(settingsDom) {
      const thumbnails = settingsDom.querySelectorAll("#bg_tn_wrap .thumbnail");
      lsOnlineStorage.get(true, ["idsList", "selectedId"], (local) => {
        const { idsList, selectedId } = local;
        if (idsList.length > 0 && thumbnails.length < idsList.length) {
          const thumbsKeys = idsList.map((id) => "customThumb_" + id);
          lsOnlineStorage.get(true, thumbsKeys, (local2) => {
            Object.entries(local2).forEach(([key, val]) => {
              if (!key.startsWith("customThumb_"))
                return;
              const _id = key.replace("customThumb_", "");
              const blob = val.replace("data:image/jpeg;base64,", "");
              const isSelected = _id === selectedId;
              addThumbnails(blob, _id, settingsDom, isSelected);
            });
          });
        }
      });
    }
    function refreshCustom(button) {
      lsOnlineStorage.get(false, "custom_every", (sync) => {
        $("background_overlay").style.opacity = "0";
        turnRefreshButton(button, true);
        localIsLoading = true;
        setTimeout(
          () => localBackgrounds({
            every: sync.custom_every,
            time: 0
          }),
          400
        );
      });
    }
    function applyCustomBackground(id) {
      lsOnlineStorage.get(true, ["custom_" + id], (local) => {
        const perfStart = performance.now();
        const background = local["custom_" + id];
        const cleanData = background.slice(background.indexOf(",") + 1, background.length);
        b64toBlobUrl(cleanData, (bloburl) => {
          imgBackground(bloburl, perfStart, !!init);
        });
      });
    }
    if (event) {
      if (event.is === "thumbnail" && event.settings)
        displayCustomThumbnails(event.settings);
      if (event.is === "newfile" && event.file)
        addNewImage(event.file);
      if (event.is === "refresh" && event.button)
        refreshCustom(event.button);
      return;
    }
    if (!init) {
      return;
    }
    lsOnlineStorage.get(true, ["selectedId", "idsList"], (local) => {
      try {
        let { selectedId, idsList } = local;
        const { every, time } = init;
        const needNewImage = freqControl.get(every, time || 0);
        if (!idsList) {
          idsList = [];
          selectedId = "";
          lsOnlineStorage.get(true, null, (local2) => {
            const ids = Object.keys(local2).filter((k) => k.startsWith("custom_")).map((k) => k.replace("custom_", ""));
            lsOnlineStorage.setLocal({ idsList: ids, selectedId: ids[0] || "" });
            lsOnlineStorage.get(false, null, (data) => initBackground(data));
          });
        }
        if (idsList.length === 0) {
          lsOnlineStorage.get(false, "dynamic", (data) => {
            unsplash(data);
          });
          return;
        }
        if (every && needNewImage) {
          if (idsList.length > 1) {
            idsList = idsList.filter((l) => !l.includes(selectedId));
            selectedId = idsList[Math.floor(Math.random() * idsList.length)];
          }
          applyCustomBackground(selectedId);
          lsOnlineStorage.set({ custom_time: freqControl.set() });
          lsOnlineStorage.setLocal({ selectedId });
          if ($("settings"))
            thumbnailSelection(selectedId);
          return;
        }
        applyCustomBackground(selectedId);
      } catch (e2) {
        errorMessage("Could not init local backgrounds", e2);
      }
    });
  }
  async function unsplash(init, event) {
    async function preloadImage(src) {
      const img = new Image();
      img.src = src;
      await img.decode();
      img.remove();
      return;
    }
    function imgCredits(image) {
      const domcredit = $("credit");
      let needsSpacer = false;
      let artist = "";
      let photoLocation = "";
      let exifDescription = "";
      const referral = "?utm_source=Bonjourr&utm_medium=referral";
      const { city, country, name, username, link, exif } = image;
      if (!city && !country) {
        photoLocation = tradThis("Photo by ");
      } else {
        if (city)
          photoLocation = city + ", ";
        if (country) {
          photoLocation += country;
          needsSpacer = true;
        }
      }
      if (exif) {
        const orderedExifData = [
          { key: "model", format: `%val% - ` },
          { key: "aperture", format: `f/%val% ` },
          { key: "exposure_time", format: `%val%s ` },
          { key: "iso", format: `ISO %val% ` },
          { key: "focal_length", format: `%val%mm` }
        ];
        orderedExifData.forEach(({ key, format }) => {
          if (Object.keys(exif).includes(key)) {
            const exifVal = exif[key];
            if (exifVal) {
              exifDescription += key === "iso" ? exifVal.toString() : format.replace("%val%", exifVal.toString());
            }
          }
        });
      }
      artist = name.split(" ").map((s) => s.charAt(0).toUpperCase() + s.slice(1).toLocaleLowerCase()).join(" ");
      const locationDOM = document.createElement("a");
      const spacerDOM = document.createElement("span");
      const artistDOM = document.createElement("a");
      const exifDOM = document.createElement("p");
      exifDOM.className = "exif";
      exifDOM.textContent = exifDescription;
      locationDOM.textContent = photoLocation;
      artistDOM.textContent = artist;
      spacerDOM.textContent = ` - `;
      locationDOM.href = link + referral;
      artistDOM.href = "https://unsplash.com/@" + username + referral;
      if (domcredit) {
        domcredit.textContent = "";
        domcredit.appendChild(exifDOM);
        domcredit.appendChild(locationDOM);
        if (needsSpacer)
          domcredit.appendChild(spacerDOM);
        domcredit.appendChild(artistDOM);
        clas(domcredit, true, "shown");
      }
    }
    function loadBackground(props, loadTime) {
      imgBackground(props.url, loadTime || 0, !!init);
      imgCredits(props);
      document.querySelector('meta[name="theme-color"]')?.setAttribute("content", props.color);
    }
    async function requestNewList(collecType) {
      const header = new Headers();
      const collecString = allCollectionType[collecType] || allCollectionType.day;
      const url = `https://api.unsplash.com/photos/random?collections=${collecString}&count=8`;
      header.append("Authorization", `Client-ID 3686c12221d29ca8f7947c94542025d760a8e0d49007ec70fa2c4b9f9d377b1d`);
      header.append("Accept-Version", "v1");
      let resp;
      let json;
      resp = await fetch(url, { headers: header });
      if (resp.status === 404) {
        if (collecType === "user") {
          const defaultCollectionList = await requestNewList(chooseCollection() || "day");
          return defaultCollectionList;
        } else {
          return [];
        }
      }
      json = await resp.json();
      if (json.length === 1) {
        const defaultCollectionList = await requestNewList(chooseCollection() || "day");
        return defaultCollectionList;
      }
      const filteredList = [];
      const { width, height } = screen;
      const imgSize = width > height ? width : height;
      json.forEach((img) => {
        filteredList.push({
          url: img.urls.raw + "&w=" + imgSize + "&dpr=" + window.devicePixelRatio,
          link: img.links.html,
          username: img.user.username,
          name: img.user.name,
          city: img.location.city,
          country: img.location.country,
          color: img.color,
          exif: img.exif,
          desc: img.description
        });
      });
      return filteredList;
    }
    function chooseCollection(customCollection) {
      if (customCollection) {
        customCollection = customCollection.replaceAll(` `, "");
        allCollectionType.user = customCollection;
        return "user";
      }
      return periodOfDay(sunTime());
    }
    function collectionUpdater(dynamic) {
      const { every, lastCollec, collection } = dynamic;
      const Pause = every === "pause";
      const Day = every === "day";
      if ((Pause || Day) && lastCollec) {
        return lastCollec;
      }
      const collec = chooseCollection(collection);
      dynamic.lastCollec = collec;
      lsOnlineStorage.set({ dynamic });
      return collec;
    }
    async function cacheControl(dynamic, caches, collecType, preloading) {
      const needNewImage = freqControl.get(dynamic.every, dynamic.time);
      let list = caches[collecType];
      if (preloading) {
        loadBackground(list[0]);
        await preloadImage(list[1].url);
        lsOnlineStorage.remove(true, "waitingForPreload");
        return;
      }
      if (!needNewImage) {
        loadBackground(list[0]);
        return;
      }
      dynamic.lastCollec = collecType;
      dynamic.time = freqControl.set();
      if (list.length > 1)
        list.shift();
      loadBackground(list[0]);
      if (list.length === 1 && navigator.onLine) {
        const newList = await requestNewList(collecType);
        if (newList) {
          caches[collecType] = list.concat(newList);
          await preloadImage(newList[0].url);
          lsOnlineStorage.setLocal({ dynamicCache: caches });
          lsOnlineStorage.remove(true, "waitingForPreload");
        }
        return;
      }
      if (list.length > 1)
        await preloadImage(list[1].url);
      lsOnlineStorage.set({ dynamic });
      lsOnlineStorage.setLocal({ dynamicCache: caches });
      lsOnlineStorage.remove(true, "waitingForPreload");
    }
    async function populateEmptyList(collecType, cache) {
      const newList = await requestNewList(collecType);
      const changeStart = performance.now();
      if (!newList) {
        return;
      }
      await preloadImage(newList[0].url);
      loadBackground(newList[0], performance.now() - changeStart);
      cache[collecType] = newList;
      lsOnlineStorage.setLocal({ dynamicCache: cache });
      lsOnlineStorage.setLocal({ waitingForPreload: true });
      await preloadImage(newList[1].url);
      lsOnlineStorage.remove(true, "waitingForPreload");
    }
    function updateDynamic(event2, sync, local) {
      switch (event2.is) {
        case "refresh": {
          if (!event2.button)
            return console.log("No buttons to animate");
          if (local.waitingForPreload === void 0) {
            turnRefreshButton(event2.button, true);
            $("background_overlay").style.opacity = "0";
            const newDynamic = { ...sync.dynamic, time: 0 };
            lsOnlineStorage.set({ dynamic: newDynamic });
            lsOnlineStorage.setLocal({ waitingForPreload: true });
            setTimeout(() => cacheControl(newDynamic, local.dynamicCache, collectionUpdater(newDynamic), false), 400);
            return;
          }
          turnRefreshButton(event2.button, false);
          break;
        }
        case "every": {
          if (!event2.value)
            return console.log('Not valid "every" value');
          sync.dynamic.every = event2.value;
          sync.dynamic.time = freqControl.set();
          lsOnlineStorage.set({ dynamic: sync.dynamic });
          break;
        }
        case "removedCustom": {
          lsOnlineStorage.set({ background_type: "dynamic" });
          loadBackground(local.dynamicCache[collectionUpdater(sync.dynamic)][0]);
          break;
        }
        case "collection": {
          if (!navigator.onLine || !event2.value)
            return;
          $("background_overlay").style.opacity = "0";
          if (event2.value === "") {
            const defaultColl = chooseCollection();
            local.dynamicCache.user = [];
            sync.dynamic.collection = "";
            sync.dynamic.lastCollec = defaultColl;
            lsOnlineStorage.set({ dynamic: sync.dynamic });
            lsOnlineStorage.setLocal({ dynamicCache: local.dynamicCache });
            unsplash(sync);
            return;
          }
          sync.dynamic.collection = event2.value;
          sync.dynamic.lastCollec = "user";
          sync.dynamic.time = freqControl.set();
          lsOnlineStorage.set({ dynamic: sync.dynamic });
          populateEmptyList(chooseCollection(event2.value), local.dynamicCache);
          break;
        }
      }
    }
    const allCollectionType = {
      noon: "GD4aOSg4yQE",
      day: "o8uX55RbBPs",
      evening: "3M2rKTckZaQ",
      night: "bHDh4Ae7O8o",
      user: ""
    };
    if (event) {
      lsOnlineStorage.get(false, 
        "dynamic",
        (sync) => lsOnlineStorage.get(true, ["dynamicCache", "waitingForPreload"], (local) => {
          updateDynamic(event, sync, local);
        })
      );
    }
    if (!init) {
      return;
    }
    lsOnlineStorage.get(true, ["dynamicCache", "waitingForPreload"], (local) => {
      try {
        const collecType = collectionUpdater(init.dynamic);
        const cache = local.dynamicCache || localDefaults.dynamicCache;
        if (cache[collecType].length === 0) {
          populateEmptyList(collecType, cache);
          return;
        }
        cacheControl(init.dynamic, cache, collecType, local.waitingForPreload);
      } catch (e2) {
        errorMessage("Dynamic errored on init", e2);
      }
    });
    return;
  }
  function backgroundFilter(cat, val, isEvent) {
    let result = "";
    const domblur = $("i_blur");
    const dombright = $("i_bright");
    switch (cat) {
      case "init":
        result = `blur(${val.blur}px) brightness(${val.bright})`;
        break;
      case "blur":
        result = `blur(${val.blur}px) brightness(${dombright.value})`;
        break;
      case "bright":
        result = `blur(${domblur.value}px) brightness(${val.bright})`;
        break;
    }
    $("background").style.filter = result;
    if (isEvent) {
      if (cat === "blur")
        eventDebounce({ background_blur: val.blur });
      if (cat === "bright")
        eventDebounce({ background_bright: val.bright });
    }
  }
  function darkmode(value, isEvent) {
    const time = sunTime();
    if (time) {
      const cases = {
        auto: time.now <= time.rise || time.now > time.set ? "dark" : "",
        system: "autodark",
        enable: "dark",
        disable: ""
      };
      document.body.setAttribute("class", cases[value]);
      if (isEvent) {
        lsOnlineStorage.set({ dark: value });
      }
    }
  }
  function searchbar(init, event, that) {
    const domsearchbar = $("searchbar");
    const emptyButton = $("sb_empty");
    const submitButton = $("sb_submit");
    const display = (shown) => $("sb_container")?.setAttribute("class", shown ? "shown" : "hidden");
    const setEngine = (value) => domsearchbar.setAttribute("data-engine", value);
    const setRequest = (value) => domsearchbar.setAttribute("data-request", stringMaxSize(value, 512));
    const setNewtab = (value) => domsearchbar.setAttribute("data-newtab", value.toString());
    const setOpacity = (value) => {
      domsearchbar.setAttribute("style", `background: rgba(255, 255, 255, ${value}); color: ${value > 0.4 ? "#222" : "#fff"}`);
      if (value > 0.4)
        $("sb_container")?.classList.add("opaque");
      else
        $("sb_container")?.classList.remove("opaque");
    };
    function updateSearchbar() {
      lsOnlineStorage.get(false, "searchbar", (data) => {
        if (!that) {
          return;
        }
        switch (event) {
          case "searchbar": {
            data.searchbar.on = that.checked;
            display(that.checked);
            interfaceWidgetToggle(null, "searchbar");
            break;
          }
          case "engine": {
            data.searchbar.engine = that.value;
            clas($("searchbar_request"), that.value === "custom", "shown");
            setEngine(that.value);
            break;
          }
          case "opacity": {
            data.searchbar.opacity = parseFloat(that.value);
            setOpacity(parseFloat(that.value));
            break;
          }
          case "request": {
            let val = that.value;
            if (val.indexOf("%s") !== -1) {
              data.searchbar.request = stringMaxSize(val, 512);
              that.blur();
            } else if (val.length > 0) {
              val = "";
              that.setAttribute("placeholder", tradThis("%s Not found"));
              setTimeout(() => that.setAttribute("placeholder", tradThis("Search query: %s")), 2e3);
            }
            setRequest(val);
            break;
          }
          case "newtab": {
            data.searchbar.newtab = that.checked;
            setNewtab(that.checked);
            break;
          }
        }
        eventDebounce({ searchbar: data.searchbar });
      });
    }
    function submitSearch() {
      let searchURL = "https://www.google.com/search?q=%s";
      const isNewtab = domsearchbar.getAttribute("data-newtab") === "true";
      const engine2 = domsearchbar.getAttribute("data-engine") || "google";
      const request2 = domsearchbar.getAttribute("data-request") || "";
      const lang = document.documentElement.getAttribute("lang") || "en";
      if (engine2 in enginesUrls) {
        searchURL = enginesUrls[engine2];
        if (engine2 in enginesLocales && lang in enginesLocales[engine2]) {
          const selectedLocale = enginesLocales[engine2];
          const selectedLang = selectedLocale[lang];
          searchURL = searchURL.replace("%l", selectedLang);
        }
      } else if (engine2 === "custom") {
        searchURL = request2;
      }
      searchURL = searchURL.replace("%s", encodeURIComponent(domsearchbar.value));
      if (isNewtab)
        window.open(searchURL, "_blank");
      else
        window.location.href = searchURL;
    }
    function toggleInputButton(toggle) {
      if (toggle) {
        emptyButton.removeAttribute("disabled");
        submitButton.removeAttribute("disabled");
      } else {
        emptyButton.setAttribute("disabled", "");
        submitButton.setAttribute("disabled", "");
      }
    }
    domsearchbar.onkeyup = function(e2) {
      const domssb = this;
      if (e2.key === "Enter" && domssb.value.length > 0) {
        submitSearch();
      }
    };
    domsearchbar.oninput = function() {
      const domssb = this;
      const hasText = domssb.value.length > 0;
      clas(emptyButton, hasText, "shown");
      clas(submitButton, hasText, "shown");
      toggleInputButton(hasText);
    };
    emptyButton.onclick = function() {
      domsearchbar.value = "";
      domsearchbar.focus();
      clas(emptyButton, false, "shown");
      clas(submitButton, false, "shown");
      toggleInputButton(false);
    };
    submitButton.onclick = function() {
      submitSearch();
    };
    if (event) {
      updateSearchbar();
      return;
    }
    const { on, engine, request, newtab, opacity } = init || syncDefaults.searchbar;
    try {
      display(on);
      setEngine(engine);
      setRequest(request);
      setNewtab(newtab);
      setOpacity(opacity);
      if (on)
        domsearchbar.focus();
    } catch (e2) {
      errorMessage("Error in searchbar initialization", e2);
    }
  }
  async function quotes(init, event) {
    function display(on) {
      clas($("linkblocks"), on, "withQuotes");
      $("quotes_container")?.setAttribute("class", on ? "shown" : "hidden");
    }
    async function newQuote(lang, type) {
      try {
        if (!navigator.onLine) {
          return [];
        }
        const query = type += type === "classic" ? `/${lang}` : "";
        const response = await fetch("https://quotes.bonjourr.fr/" + query);
        const json = await response.json();
        if (response.ok) {
          return json;
        }
      } catch (error) {
        console.warn(error);
        return [];
      }
    }
    function insertToDom(values) {
      const quoteDOM = $("quote");
      const authorDOM = $("author");
      if (!values || !quoteDOM || !authorDOM) {
        return;
      }
      quoteDOM.textContent = values.content;
      authorDOM.textContent = values.author;
    }
    function controlCacheList(list, lang, type) {
      list.shift();
      lsOnlineStorage.setLocal({ quotesCache: list });
      if (list.length < 2) {
        newQuote(lang, type).then((list2) => {
          lsOnlineStorage.setLocal({ quotesCache: list2 });
        });
      }
      return list;
    }
    function updateSettings() {
      lsOnlineStorage.get(false, ["lang", "quotes"], async (data) => {
        const updated = { ...data.quotes };
        const { lang, quotes: quotes2 } = data;
        switch (event?.is) {
          case "toggle": {
            const on = event.checked || false;
            updated.on = on;
            lsOnlineStorage.get(true, "quotesCache", (local) => {
              insertToDom(local.quotesCache[0]);
              display(on);
            });
            interfaceWidgetToggle(null, "quotes");
            break;
          }
          case "author": {
            clas($("author"), event.checked || false, "alwaysVisible");
            updated.author = event.checked;
            break;
          }
          case "frequency": {
            updated.frequency = event.value;
            break;
          }
          case "type": {
            if (event.value) {
              updated.type = event.value;
              const list = await newQuote(lang, event.value);
              lsOnlineStorage.setLocal({ quotesCache: list });
              insertToDom(list[0]);
            }
            break;
          }
          case "refresh": {
            updated.last = freqControl.set();
            lsOnlineStorage.get(true, "quotesCache", async (local) => {
              const { quotesCache } = local;
              const quote = controlCacheList(quotesCache, lang, quotes2.type)[0];
              insertToDom(quote);
            });
            break;
          }
        }
        lsOnlineStorage.set({ quotes: updated });
      });
    }
    if (event) {
      updateSettings();
      return;
    }
    if (!init) {
      errorMessage("No data to display Quotes !");
      return;
    }
    lsOnlineStorage.get(true, "quotesCache", async (local) => {
      canDisplayInterface("quotes");
      const { lang, quotes: quotes2 } = init;
      let needsNewQuote = freqControl.get(quotes2.frequency, quotes2.last);
      let cache = local.quotesCache;
      let quote;
      if (!cache || cache?.length === 0) {
        cache = await newQuote(lang, quotes2.type);
        lsOnlineStorage.setLocal({ quotesCache: cache });
        quote = cache[0];
      }
      if (needsNewQuote) {
        quotes2.last = freqControl.set();
        lsOnlineStorage.set({ quotes: quotes2 });
        quote = controlCacheList(cache, lang, quotes2.type)[0];
      }
      if (init?.quotes?.on === false) {
        return;
      }
      quote = cache[0];
      if (quotes2.author) {
        $("author")?.classList.add("alwaysVisible");
      }
      insertToDom(quote);
      display(true);
    });
  }
  function showPopup(value) {
    function affiche() {
      const setReviewLink = () => getBrowser() === "chrome" ? "https://chrome.google.com/webstore/detail/bonjourr-%C2%B7-minimalist-lig/dlnejlppicbjfcfcedcflplfjajinajd/reviews" : getBrowser() === "firefox" ? "https://addons.mozilla.org/en-US/firefox/addon/bonjourr-startpage/" : getBrowser() === "safari" ? "https://apps.apple.com/fr/app/bonjourr-startpage/id1615431236" : getBrowser() === "edge" ? "https://microsoftedge.microsoft.com/addons/detail/bonjourr/dehmmlejmefjphdeoagelkpaoolicmid" : "https://bonjourr.fr/help#%EF%B8%8F-reviews";
      const dom = {
        wrap: document.createElement("div"),
        btnwrap: document.createElement("div"),
        desc: document.createElement("p"),
        review: document.createElement("a"),
        donate: document.createElement("a")
      };
      const closePopup = (fromText) => {
        if (fromText) {
          $("popup")?.classList.remove("shown");
          setTimeout(() => {
            $("popup")?.remove();
            setTimeout(() => $("credit")?.removeAttribute("style"), 400);
          }, 200);
        }
        lsOnlineStorage.set({ reviewPopup: "removed" });
      };
      dom.wrap.id = "popup";
      dom.desc.id = "popup_text";
      dom.desc.textContent = tradThis(
        "Love using Bonjourr? Consider giving us a review or donating, that would help a lot! \u{1F607}"
      );
      dom.review.href = setReviewLink();
      dom.donate.href = "https://ko-fi.com/bonjourr";
      dom.review.textContent = tradThis("Review");
      dom.donate.textContent = tradThis("Donate");
      dom.btnwrap.id = "popup_buttons";
      dom.btnwrap.appendChild(dom.review);
      dom.btnwrap.appendChild(dom.donate);
      dom.wrap.appendChild(dom.desc);
      dom.wrap.appendChild(dom.btnwrap);
      document.body.appendChild(dom.wrap);
      const creditdom = $("credit");
      creditdom ? creditdom.style.opacity = "0" : "";
      setTimeout(() => dom.wrap.classList.add("shown"), 200);
      dom.review.addEventListener("mousedown", () => closePopup(false));
      dom.donate.addEventListener("mousedown", () => closePopup(false));
      dom.desc.addEventListener("click", () => closePopup(true), { passive: true });
    }
    if (typeof value === "number") {
      if (value > 30)
        affiche();
      else
        lsOnlineStorage.set({ reviewPopup: value + 1 });
      return;
    }
    if (value !== "removed") {
      lsOnlineStorage.set({ reviewPopup: 0 });
    }
  }
  function modifyWeightOptions(weights, settingsDom) {
    const select = (settingsDom ? settingsDom : $("settings")).querySelector("#i_weight");
    const options = select?.querySelectorAll("option");
    if ((!weights || weights.length === 0) && options) {
      options.forEach((option) => option.style.display = "block");
      return true;
    } else {
      if (weights.includes("regular"))
        weights[weights.indexOf("regular")] = "400";
      weights = weights.map((aa) => aa);
      if (options) {
        options.forEach((option) => option.style.display = weights.indexOf(option.value) !== -1 ? "block" : "none");
      }
    }
  }
  function safeFont(settingsDom) {
    const is = safeFontList;
    let toUse = is.fallback;
    const hasUbuntu = document.fonts.check("16px Ubuntu");
    const notAppleOrWindows = !testOS.mac && !testOS.windows && !testOS.ios;
    if (testOS.windows)
      toUse = is.windows;
    else if (testOS.android)
      toUse = is.android;
    else if (testOS.mac || testOS.ios)
      toUse = is.apple;
    else if (notAppleOrWindows && hasUbuntu)
      toUse = is.linux;
    if (settingsDom) {
      settingsDom.querySelector("#i_customfont")?.setAttribute("placeholder", toUse.placeholder);
      modifyWeightOptions(toUse.weights, settingsDom);
    }
    return toUse;
  }
  function customFont(init, event) {
    function setSize(val) {
      dominterface.style.fontSize = parseInt(val) / 16 + "em";
    }
    function setWeight(family, weight) {
      if (weight) {
        const list = safeFont().weights;
        dominterface.style.fontWeight = weight;
        $("searchbar").style.fontWeight = weight;
        const loweredWeight = parseInt(weight) > 100 ? list[list.indexOf(weight) - 1] : weight;
        $("clock").style.fontWeight = family ? weight : loweredWeight;
      }
    }
    function setFamily(family, fontface) {
      $("fontstyle").textContent = fontface;
      $("clock").style.fontFamily = '"' + family + '"';
      $("credit").style.fontFamily = '"' + family + '"';
      dominterface.style.fontFamily = '"' + family + '"';
    }
    async function setFontface(url) {
      const resp = await fetch(url);
      const text = await resp.text();
      const fontface = text.replace(/(\r\n|\n|\r|  )/gm, "");
      lsOnlineStorage.setLocal({ fontface });
      return fontface;
    }
    function updateFont() {
      function fetchFontList(callback) {
        lsOnlineStorage.get(true, "googleFonts", async (local) => {
          if (local.googleFonts) {
            callback(local.googleFonts);
            return;
          }
          if (!navigator.onLine) {
            return;
          }
          const a = "QUl6YVN5QWt5M0pZYzJyQ09MMWpJc3NHQmdMcjFQVDR5VzE1ak9r";
          const url = "https://www.googleapis.com/webfonts/v1/webfonts?sort=popularity&key=" + window.atob(a);
          const resp = await fetch(url);
          if (!resp.ok) {
            return;
          }
          const json = await resp.json();
          if (json.items?.length > 0 && typeof json.items[0]?.family === "string") {
            lsOnlineStorage.setLocal({ googleFonts: json });
            callback(json);
          }
        });
      }
      function removeFont() {
        const domstyle = $("fontstyle");
        const domclock = $("clock");
        const domcredit = $("credit");
        const domsearchbar = $("searchbar");
        domstyle.textContent = "";
        domclock.style.fontFamily = "";
        domcredit.style.fontFamily = "";
        dominterface.style.fontFamily = "";
        const baseWeight = testOS.windows ? "400" : "300";
        dominterface.style.fontWeight = baseWeight;
        domsearchbar.style.fontWeight = baseWeight;
        domclock.style.fontWeight = "";
        $("i_weight")?.setAttribute("value", baseWeight);
        return { url: "", family: "", availWeights: [], weight: baseWeight };
      }
      async function changeFamily(json, family) {
        const domfamily = $("i_customfont");
        const domweight = $("i_weight");
        const font = json.items.filter((font2) => font2.family.toUpperCase() === family.toUpperCase());
        if (font.length > 0) {
          const availWeights = font[0].variants.filter((variant) => !variant.includes("italic"));
          const defaultWeight = availWeights.includes("regular") ? "400" : availWeights[0];
          const url = encodeURI(`https://fonts.googleapis.com/css?family=${font[0].family}:${defaultWeight}`);
          const fontface = await setFontface(url);
          setFamily(font[0].family, fontface);
          setWeight(font[0].family, "400");
          modifyWeightOptions(availWeights);
          domweight.value = "400";
          if (domfamily)
            domfamily.blur();
          return { url, family: font[0].family, availWeights, weight: "400" };
        } else {
          domfamily.value = "";
          safeFont($("settings"));
          return { url: "", family: "", availWeights: [], weight: testOS.windows ? "400" : "300" };
        }
      }
      lsOnlineStorage.get(false, "font", async ({ font }) => {
        switch (event?.is) {
          case "autocomplete": {
            fetchFontList((json) => {
              if (!json)
                return;
              const fragment = new DocumentFragment();
              json.items.forEach(function addOptions(item) {
                const option = document.createElement("option");
                option.textContent = item.family;
                option.setAttribute("value", item.family);
                fragment.appendChild(option);
              });
              if (event.elem) {
                event.elem.querySelector("#dl_fontfamily")?.appendChild(fragment);
              }
            });
            break;
          }
          case "family": {
            const val = event.value;
            if (val === "") {
              safeFont($("settings"));
              (0, import_lodash3.default)(() => {
                lsOnlineStorage.remove(true, "fontface");
                eventDebounce({ font: { size: font.size, ...removeFont() } });
              }, 200);
            }
            if (typeof val === "string" && val.length > 1) {
              fetchFontList(async (json) => {
                lsOnlineStorage.set({
                  font: { size: font.size, ...await changeFamily(json, val) }
                });
              });
            }
            break;
          }
          case "weight": {
            if (font.url) {
              font.url = font.url.slice(0, font.url.lastIndexOf(":") + 1);
              font.url += event.value;
              setFamily(font.family, await setFontface(font.url));
            } else
              font.weight = event.value;
            setWeight(font.family, event.value || "400");
            eventDebounce({ font });
            break;
          }
          case "size": {
            if (event.value) {
              font.size = event.value;
              setSize(event.value);
              eventDebounce({ font });
            }
            break;
          }
        }
      });
    }
    if (event) {
      updateFont();
      return;
    }
    try {
      if (!init) {
        return;
      }
      const { size, family, weight, url } = init;
      setSize(size);
      setWeight(family, weight);
      if (family === "") {
        return;
      }
      lsOnlineStorage.get(true, "fontface", async (local) => {
        setFamily(family, local.fontface || await setFontface(url));
        canDisplayInterface("fonts");
      });
    } catch (e2) {
      errorMessage("Custom fonts failed to start", e2);
    }
  }
  function textShadow(init, event) {
    const val = init ? init : event;
    dominterface.style.textShadow = `1px 2px 6px rgba(0, 0, 0, ${val})`;
    if (typeof event === "number") {
      eventDebounce({ textShadow: val });
    }
  }
  function customCss(init, event) {
    const styleHead = $("styles");
    if (init) {
      styleHead.textContent = init;
    }
    if (event) {
      switch (event.is) {
        case "styling": {
          if (typeof event.val === "string") {
            const val = stringMaxSize(event.val, 8080);
            styleHead.textContent = val;
            eventDebounce({ css: val });
          }
          break;
        }
        case "resize": {
          if (typeof event.val === "number") {
            eventDebounce({ cssHeight: event.val });
          }
          break;
        }
      }
    }
  }
  function hideElem(init, event) {
    const IDsList = [
      ["time", ["time-container", "date"]],
      ["main", ["greetings", "description", "tempContainer"]],
      ["linkblocks", ["linkblocks"]],
      ["showSettings", ["showSettings"]]
    ];
    const getEventListPosition = (that) => ({
      row: parseInt(that.getAttribute("data-row") || "0"),
      col: parseInt(that.getAttribute("data-col") || "0")
    });
    function isEverythingHidden(list, row) {
      const filtered = list[row].filter((el) => el === 1);
      return filtered.length === list[row].length;
    }
    function initElements(list) {
      list.forEach((row, row_i) => {
        const parent = IDsList[row_i][0];
        if (isEverythingHidden(list, row_i)) {
          clas($(parent), true, "he_hidden");
        }
        row.forEach((child, child_i) => {
          const id = IDsList[row_i][1][child_i];
          if (!!child) {
            clas($(id), true, "he_hidden");
          }
        });
      });
    }
    function initButtons() {
      lsOnlineStorage.get(false, "hide", (data) => {
        try {
          data.hide = validateHideElem(data.hide) ? data.hide : [[0, 0], [0, 0, 0], [0], [0]];
          event?.buttonList?.forEach((button) => {
            const pos = getEventListPosition(button);
            if (data.hide[pos.row][pos.col] === 1)
              button.classList.toggle("clicked");
          });
        } catch (e2) {
          errorMessage("Hide buttons failed", e2);
        }
      });
    }
    function toggleElement() {
      lsOnlineStorage.get(false, ["weather", "hide"], (data) => {
        data.hide = validateHideElem(data.hide) ? data.hide : [[0, 0], [0, 0, 0], [0], [0]];
        if (!event?.button) {
          return;
        }
        const pos = getEventListPosition(event.button);
        const state = event.button.classList.contains("clicked");
        const child = IDsList[pos.row][1][pos.col];
        const parent = IDsList[pos.row][0];
        data.hide[pos.row][pos.col] = state ? 1 : 0;
        lsOnlineStorage.set({ hide: data.hide });
        if (!state && pos.row === 1 && pos.col > 0 && "weather" in data) {
          weather(data);
        }
        clas($(child), state, "he_hidden");
        clas($(parent), isEverythingHidden(data.hide, pos.row), "he_hidden");
      });
    }
    if (event) {
      if (event.is === "buttons" && event.buttonList)
        initButtons();
      if (event.is === "hide" && event.button)
        toggleElement();
      return;
    }
    if (init && validateHideElem(init)) {
      try {
        initElements(init);
      } catch (e2) {
        errorMessage("Hide failed on init", e2);
      }
    }
  }
  function sunTime(init) {
    if (init && init.lastState) {
      sunrise = init.lastState.sunrise;
      sunset = init.lastState.sunset;
    }
    if (sunset === 0) {
      return {
        now: minutator(new Date()),
        rise: 420,
        set: 1320
      };
    }
    return {
      now: minutator(new Date()),
      rise: minutator(new Date(sunrise * 1e3)),
      set: minutator(new Date(sunset * 1e3))
    };
  }
  function filterImports(data) {
    let result = { ...syncDefaults, ...data };
    if (validateHideElem(data.hide)) {
      const weatherIndex = data.hide.indexOf("weather_desc");
      const widgetIndex = data.hide.indexOf("w_icon");
      if (weatherIndex >= 0)
        data.hide[weatherIndex] = "description";
      if (widgetIndex >= 0)
        data.hide[widgetIndex] = "widget";
    } else {
      data.hide = [[0, 0], [0, 0, 0], [0], [0]];
    }
    if (typeof data.searchbar === "boolean") {
      result.on = data.searchbar;
      result.newtab = data.searchbar_newtab || false;
      result.engine = data.searchbar_engine ? data.searchbar_engine.replace("s_", "") : "google";
    }
    try {
      let linksFilter2 = function(sync) {
        const aliasKeyList = Object.keys(sync).filter((key) => key.match("alias:"));
        sync.links?.forEach(({ title, url, icon }, i) => {
          const id = "links" + randomString(6);
          const filteredIcon = icon.startsWith("alias:") ? sync[icon] : icon;
          sync[id] = { _id: id, order: i, title, icon: filteredIcon, url };
        });
        aliasKeyList.forEach((key) => delete sync[key]);
        delete sync.links;
        return sync;
      };
      var linksFilter = linksFilter2;
      result = linksFilter2(result);
    } catch (e2) {
      errorMessage("Messed up in filter imports", e2);
    }
    return result;
  }
  function canDisplayInterface(cat, init) {
    function displayInterface() {
      const domshowsettings = $("showSettings");
      let loadtime = performance.now() - loadtimeStart;
      if (loadtime > 400)
        loadtime = 400;
      loadtime = loadtime < 33 ? 0 : 400;
      domshowsettings.style.transition = `opacity ${loadtime}ms`;
      dominterface.style.transition = `opacity ${loadtime}ms, transform .4s`;
      dominterface.style.opacity = "1";
      clas(domshowsettings, true, "enabled");
      setTimeout(() => {
        dominterface.classList.remove("init");
        domshowsettings.classList.remove("init");
        domshowsettings.style.transition = ``;
        lsOnlineStorage.get(false, null, (data) => settingsInit(data));
      }, loadtime + 100);
    }
    if (init || !cat) {
      if (init?.font?.family && init?.font?.url)
        functionsLoad.fonts = "Waiting";
      if (init?.quotes?.on)
        functionsLoad.quotes = "Waiting";
      return;
    }
    if (functionsLoad[cat] === "Off") {
      return;
    }
    functionsLoad[cat] = "Ready";
    if (Object.values(functionsLoad).includes("Waiting") === false && !$("settings")) {
      displayInterface();
    }
  }
  function interfaceWidgetToggle(init, event) {
    const toggleEmpty = (is) => clas($("widgets"), is, "empty");
    if (event) {
      lsOnlineStorage.get(false, ["searchbar", "notes", "quotes", "quicklinks"], (data) => {
        let displayed = {
          quicklinks: data.quicklinks,
          quotes: data.quotes.on,
          searchbar: data.searchbar.on,
          notes: data.notes.on
        };
        $(event + "_options")?.classList.toggle("shown");
        displayed[event] = !displayed[event];
        toggleEmpty(Object.values(displayed).every((d) => !d));
      });
      return;
    }
    if (init) {
      const { notes: notes2, quicklinks, searchbar: searchbar2, quotes: quotes2 } = init;
      toggleEmpty(!(notes2?.on || quicklinks || searchbar2?.on || quotes2?.on));
    }
  }
  function onlineAndMobileHandler() {
    if (mobilecheck()) {
      document.addEventListener("visibilitychange", () => {
        lsOnlineStorage.get(false, ["dynamic", "waitingForPreload", "weather", "background_type", "hide"], (data) => {
          const { dynamic, background_type } = data;
          const dynamicNeedsImage = background_type === "dynamic" && freqControl.get(dynamic.every, dynamic.time);
          if (dynamicNeedsImage) {
            $("background_overlay").style.opacity = "0";
            unsplash(data);
          }
          clock(data);
          sunTime(data.weather);
          weather(data);
        });
      });
    }
    if (detectPlatform() === "online") {
      if ("serviceWorker" in navigator) {
        navigator.serviceWorker.register("/service-worker.js");
      }
      let promptEvent;
      window.addEventListener("beforeinstallprompt", function(e2) {
        promptEvent = e2;
        return promptEvent;
      });
      const appHeight = () => document.documentElement.style.setProperty("--app-height", `${window.innerHeight}px`);
      window.addEventListener("resize", appHeight);
      appHeight();
      if (testOS.ios && navigator.userAgent.includes("Firefox")) {
        let triggerAnimationFrame2 = function() {
          appHeight();
          globalID = requestAnimationFrame(triggerAnimationFrame2);
        };
        var triggerAnimationFrame = triggerAnimationFrame2;
        let globalID;
        window.requestAnimationFrame(triggerAnimationFrame2);
        setTimeout(function() {
          cancelAnimationFrame(globalID);
        }, 500);
      }
    }
  }
  function startup(data) {
    traduction(null, data.lang);
    canDisplayInterface(null, data);
    sunTime(data.weather);
    weather(data);
    customFont(data.font);
    textShadow(data.textShadow);
    favicon(data.favicon);
    tabTitle(data.tabtitle);
    clock(data);
    darkmode(data.dark);
    searchbar(data.searchbar);
    quotes(data);
    showPopup(data.reviewPopup);
    notes(data.notes || null);
    customCss(data.css);
    hideElem(data.hide);
    initBackground(data);
    quickLinks(data);
    interfaceWidgetToggle(data);
    setInterval(() => {
      if (navigator.onLine) {
        lsOnlineStorage.get(false, ["weather", "hide"], (data2) => {
          weather(data2);
        });
      }
    }, 3e5);
  }
  var dominterface = $("interface");
  var isExtension = detectPlatform() !== "online";
  var functionsLoad = {
    clock: "Waiting",
    links: "Waiting",
    fonts: "Off",
    quotes: "Off"
  };
  var lazyClockInterval = setTimeout(() => {
  }, 0);
  var localIsLoading = false;
  var loadtimeStart = performance.now();
  var sunset = 0;
  var sunrise = 0;
  window.onload = function() {
    onlineAndMobileHandler();
    console.log(mobilecheck() ? "mobile" : "desktop");
    try {
      lsOnlineStorage.get(false, null, (data) => {
        const VersionChange = data?.about?.version !== syncDefaults.about.version;
        const isImport = sessionStorage.isImport === "true";
        const firstStart = Object.keys(data).length === 0;
        if (firstStart) {
          data = syncDefaults;
          lsOnlineStorage.setLocal(localDefaults);
          lsOnlineStorage.set(isExtension ? data : { import: data });
        } else if (isImport) {
          sessionStorage.removeItem("isImport");
          data = filterImports(data);
          data.about = { browser: detectPlatform(), version: syncDefaults.about.version };
          lsOnlineStorage.clear();
          lsOnlineStorage.set(isExtension ? data : { import: data });
        } else if (VersionChange) {
          const oldV = data?.about?.version;
          const newV = syncDefaults.about.version;
          console.log(`Version change: ${oldV} => ${newV}`);
          if (oldV === "1.14.2" && newV === "1.15.0") {
            localStorage.hasUpdated = "true";
          }
          data.quicklinks = data.hide[2][0] === 0;
          data.hide[2][0] = 0;
          data.notes = syncDefaults.notes;
          data.about = { browser: detectPlatform(), version: newV };
          lsOnlineStorage.set(isExtension ? data : { import: data });
        }
        startup(data);
      });
    } catch (e2) {
      errorMessage("Could not load chrome storage on startup", e2);
    }
  };
})();
