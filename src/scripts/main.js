(() => {
  var __create = Object.create;
  var __defProp = Object.defineProperty;
  var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __getProtoOf = Object.getPrototypeOf;
  var __hasOwnProp = Object.prototype.hasOwnProperty;
  var __esm = (fn, res) => function __init() {
    return fn && (res = (0, fn[__getOwnPropNames(fn)[0]])(fn = 0)), res;
  };
  var __commonJS = (cb, mod2) => function __require() {
    return mod2 || (0, cb[__getOwnPropNames(cb)[0]])((mod2 = { exports: {} }).exports, mod2), mod2.exports;
  };
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
  var __toESM = (mod2, isNodeMode, target) => (target = mod2 != null ? __create(__getProtoOf(mod2)) : {}, __copyProps(
    // If the importer is in node compatibility mode or this is not an ESM
    // file that has been converted to a CommonJS file using a Babel-
    // compatible transform (i.e. "__esModule" has not been set), then set
    // "default" to the CommonJS "module.exports" for node compatibility.
    isNodeMode || !mod2 || !mod2.__esModule ? __defProp(target, "default", { value: mod2, enumerable: true }) : target,
    mod2
  ));

  // node_modules/.deno/clickdown@1.3.4/node_modules/clickdown/dist/index.js
  var require_dist = __commonJS({
    "node_modules/.deno/clickdown@1.3.4/node_modules/clickdown/dist/index.js"(exports, module) {
      var __defProp2 = Object.defineProperty;
      var __getOwnPropDesc2 = Object.getOwnPropertyDescriptor;
      var __getOwnPropNames2 = Object.getOwnPropertyNames;
      var __hasOwnProp2 = Object.prototype.hasOwnProperty;
      var __export2 = (target, all) => {
        for (var name in all)
          __defProp2(target, name, { get: all[name], enumerable: true });
      };
      var __copyProps2 = (to, from, except, desc) => {
        if (from && typeof from === "object" || typeof from === "function") {
          for (let key of __getOwnPropNames2(from))
            if (!__hasOwnProp2.call(to, key) && key !== except)
              __defProp2(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc2(from, key)) || desc.enumerable });
        }
        return to;
      };
      var __toCommonJS = (mod2) => __copyProps2(__defProp2({}, "__esModule", { value: true }), mod2);
      var index_exports = {};
      __export2(index_exports, {
        onclickdown: () => onclickdown8
      });
      module.exports = __toCommonJS(index_exports);
      function onclickdown8(target, callback, options) {
        if (!target) {
          throw new Error("Target is undefined");
        }
        const isCheckbox = target.tagName === "INPUT" && target.getAttribute("type") === "checkbox";
        const isLink2 = target.tagName === "A";
        let isFast = false;
        target == null ? void 0 : target.addEventListener("pointerdown", downEvent);
        target == null ? void 0 : target.addEventListener("keydown", downEvent);
        target == null ? void 0 : target.addEventListener("click", clickEvent);
        function downEvent(event) {
          const isKeydown = event.type === "keydown";
          const code = (event == null ? void 0 : event.code) ?? "";
          const target2 = event.target;
          const tagName = target2.tagName ?? "";
          if (isKeydown && !code.match(/Space|Enter/)) {
            return;
          }
          if (isLink2 && isKeydown && code === "Space") {
            return;
          }
          if (tagName === "SUMMARY") {
            const details = target2;
            details.open = !details.open;
          }
          if (isCheckbox) {
            const checkbox = target2;
            checkbox.checked = !checkbox.checked;
          }
          if (isLink2) {
            const link = target2;
            globalThis.window.location.href = link.href;
          }
          isFast = true;
          callback(event, target2);
        }
        function clickEvent(event) {
          const path = event.composedPath();
          const onChild = path[0] !== target;
          if (onChild && (options == null ? void 0 : options.propagate) === false) {
            return;
          }
          if (isFast === false) {
            callback(event, target);
            return;
          }
          isFast = false;
          event.preventDefault();
        }
      }
    }
  });

  // node_modules/.deno/prism-code-editor@5.2.0/node_modules/prism-code-editor/dist/core-DpDyJ-7r.js
  function Token(type, content, matchedStr, alias) {
    this.type = type;
    this.content = content;
    this.alias = alias;
    this.length = matchedStr.length;
  }
  var plainTextGrammar, rest, tokenize, resolve, languages, tokenizeText, withoutTokenizer, escapeHtml, closingTag, openingTags, closingTags, highlightTokens, stringify, matchGrammar;
  var init_core_DpDyJ_7r = __esm({
    "node_modules/.deno/prism-code-editor@5.2.0/node_modules/prism-code-editor/dist/core-DpDyJ-7r.js"() {
      plainTextGrammar = {};
      rest = /* @__PURE__ */ Symbol();
      tokenize = /* @__PURE__ */ Symbol();
      resolve = (id) => typeof id == "string" ? languages[id] : id;
      languages = {
        plain: plainTextGrammar,
        plaintext: plainTextGrammar,
        text: plainTextGrammar,
        txt: plainTextGrammar
      };
      tokenizeText = (text, grammar) => (grammar[tokenize] || withoutTokenizer)(text, grammar);
      withoutTokenizer = (text, grammar) => {
        var startNode = [text];
        var restGrammar;
        var array = [], i = 0;
        while (restGrammar = resolve(grammar[rest])) {
          delete grammar[rest];
          Object.assign(grammar, restGrammar);
        }
        matchGrammar(text, grammar, startNode, 0);
        while (array[i++] = startNode[0], startNode = startNode[1]) ;
        return array;
      };
      escapeHtml = (string2, pattern, replacement) => {
        return string2.replace(/&/g, "&amp;").replace(pattern, replacement);
      };
      closingTag = "</span>";
      openingTags = "";
      closingTags = "";
      highlightTokens = (tokens) => {
        var str = "", token, i = 0;
        while (token = tokens[i++]) str += stringify(token);
        return str;
      };
      stringify = (token) => {
        if (token instanceof Token) {
          var { type, alias, content } = token;
          var prevOpening = openingTags;
          var prevClosing = closingTags;
          var opening = `<span class="token ${type + (alias ? " " + alias : "") + (type == "keyword" && typeof content == "string" ? " keyword-" + content : "")}">`;
          closingTags += closingTag;
          openingTags += opening;
          var contentStr = stringify(content);
          openingTags = prevOpening;
          closingTags = prevClosing;
          return opening + contentStr + closingTag;
        }
        if (typeof token != "string") return highlightTokens(token);
        token = escapeHtml(token, /</g, "&lt;");
        if (closingTags && token.includes("\n")) return token.replace(/\n/g, closingTags + "\n" + openingTags);
        return token;
      };
      matchGrammar = (text, grammar, startNode, startPos, rematch) => {
        for (var token in grammar) if (grammar[token]) for (var j = 0, p = grammar[token], patternObj, patterns = Array.isArray(p) ? p : [p]; patternObj = patterns[j]; j++) {
          if (rematch && rematch[0] == token && rematch[1] == j) return;
          var pattern = patternObj.pattern || patternObj;
          var inside = resolve(patternObj.inside);
          var lookbehind = patternObj.lookbehind;
          var greedy = pattern.global;
          var alias = patternObj.alias;
          for (var currentNode = startNode, pos = startPos; currentNode && (!rematch || pos < rematch[2]); pos += currentNode[0].length, currentNode = currentNode[1]) {
            var str = currentNode[0];
            var removeCount = 0;
            var match;
            if (str instanceof Token) continue;
            pattern.lastIndex = greedy ? pos : 0;
            match = pattern.exec(greedy ? text : str);
            if (!match && greedy) break;
            if (!(match && match[0])) continue;
            var lookbehindLength = lookbehind && match[1] ? match[1].length : 0;
            var from = match.index + lookbehindLength;
            var matchStr = match[0].slice(lookbehindLength);
            var to = from + matchStr.length;
            var k, p;
            if (greedy) {
              for (; p = pos + currentNode[0].length, from >= p; currentNode = currentNode[1], pos = p) ;
              if (currentNode[0] instanceof Token) continue;
              for (k = currentNode, p = pos; (p += k[0].length) < to; k = k[1], removeCount++) ;
              str = text.slice(pos, p);
              from -= pos;
              to -= pos;
            }
            var after = str.slice(to);
            var reach = pos + str.length;
            var newToken = new Token(token, inside ? tokenizeText(matchStr, inside) : matchStr, matchStr, alias);
            var next = currentNode, i = 0;
            var nestedRematch;
            while (next = next[1], i++ < removeCount) ;
            if (after) if (!next || next[0] instanceof Token) next = [after, next];
            else next[0] = after + next[0];
            pos += from;
            currentNode[0] = from ? str.slice(0, from) : newToken;
            if (from) currentNode = currentNode[1] = [newToken, next];
            else currentNode[1] = next;
            if (removeCount) {
              matchGrammar(text, grammar, currentNode, pos, nestedRematch = [
                token,
                j,
                reach
              ]);
              reach = nestedRematch[2];
            }
            if (rematch && reach > rematch[2]) rematch[2] = reach;
          }
        }
      };
    }
  });

  // node_modules/.deno/prism-code-editor@5.2.0/node_modules/prism-code-editor/dist/core-fngiDtt5.js
  var createEditor, doc, templateEl, createTemplate, addListener, getElement, numLines, languageMap, editorTemplate, preventDefault, selectionChange;
  var init_core_fngiDtt5 = __esm({
    "node_modules/.deno/prism-code-editor@5.2.0/node_modules/prism-code-editor/dist/core-fngiDtt5.js"() {
      init_core_DpDyJ_7r();
      createEditor = (container2, options, ...extensions) => {
        let language;
        let prevLines = [];
        let activeLine;
        let value = "";
        let activeLineNumber;
        let focused = false;
        let handleSelectionChange = true;
        let tokens = [];
        let readOnly;
        let lineCount = 0;
        const scrollContainer = editorTemplate();
        const wrapper = scrollContainer.firstChild;
        const lines = wrapper.children;
        const overlays = lines[0];
        const textarea = overlays.firstChild;
        const currentOptions = {
          language: "text",
          value
        };
        const currentExtensions = new Set(extensions);
        const listeners = {};
        const setOptions = (options2) => {
          Object.assign(currentOptions, options2);
          let isNewVal = value != (value = options2.value ?? value);
          let isNewLang = language != (language = currentOptions.language);
          readOnly = !!currentOptions.readOnly;
          scrollContainer.style.tabSize = currentOptions.tabSize || 2;
          textarea.inputMode = readOnly ? "none" : "";
          textarea.setAttribute("aria-readonly", readOnly);
          updateClassName();
          updateExtensions();
          if (isNewVal) {
            if (!focused) textarea.remove();
            textarea.value = value;
            textarea.selectionEnd = 0;
            if (!focused) overlays.prepend(textarea);
          }
          if (isNewVal || isNewLang) update();
        };
        const update = () => {
          tokens = tokenizeText(value = textarea.value, languages[language] || {});
          dispatchEvent("tokenize", tokens, language, value);
          let newLines = highlightTokens(tokens).split("\n");
          let start = 0;
          let end2 = lineCount;
          let end1 = lineCount = newLines.length;
          while (newLines[start] == prevLines[start] && start < end1) ++start;
          while (end1 && newLines[--end1] == prevLines[--end2]) ;
          if (start == end1 && start == end2) lines[start + 1].innerHTML = newLines[start] + "\n";
          else {
            let insertStart = end2 < start ? end2 : start - 1;
            let i = insertStart;
            let newHTML = "";
            while (i < end1) newHTML += `<div class=pce-line aria-hidden=true>${newLines[++i]}
</div>`;
            for (i = end1 < start ? end1 : start - 1; i < end2; i++) lines[start + 1].remove();
            if (newHTML) lines[insertStart + 1].insertAdjacentHTML("afterend", newHTML);
            scrollContainer.style.setProperty("--number-width", (0 | Math.log10(lineCount)) + 1 + ".001ch");
          }
          dispatchEvent("update", value);
          dispatchSelection(true);
          if (handleSelectionChange) setTimeout(setTimeout, 0, () => handleSelectionChange = true);
          prevLines = newLines;
          handleSelectionChange = false;
        };
        const updateExtensions = (newExtensions) => {
          (newExtensions || currentExtensions).forEach((extension) => {
            if (typeof extension == "object") {
              extension.update(self2, currentOptions);
              if (newExtensions) currentExtensions.add(extension);
            } else {
              extension(self2, currentOptions);
              if (!newExtensions) currentExtensions.delete(extension);
            }
          });
        };
        const updateClassName = ([start, end] = getInputSelection()) => {
          scrollContainer.className = `prism-code-editor language-${language}${currentOptions.lineNumbers == false ? "" : " show-line-numbers"} pce-${currentOptions.wordWrap ? "" : "no"}wrap${currentOptions.rtl ? " pce-rtl" : ""} pce-${start < end ? "has" : "no"}-selection${focused ? " pce-focus" : ""}${readOnly ? " pce-readonly" : ""}${currentOptions.class ? " " + currentOptions.class : ""}`;
        };
        const getInputSelection = () => [
          textarea.selectionStart,
          textarea.selectionEnd,
          textarea.selectionDirection
        ];
        const keyCommandMap = { Escape() {
          textarea.blur();
        } };
        const inputCommandMap = {};
        const dispatchEvent = (name, ...args) => {
          listeners[name]?.forEach((handler) => handler.apply(self2, args));
          currentOptions["on" + name[0].toUpperCase() + name.slice(1)]?.(...args, self2);
        };
        const dispatchSelection = (force) => {
          if (force || handleSelectionChange) {
            const selection = getInputSelection();
            const newLine = lines[activeLineNumber = numLines(value, 0, selection[selection[2] < "f" ? 0 : 1])];
            if (newLine != activeLine) {
              activeLine?.classList.remove("active-line");
              newLine.classList.add("active-line");
              activeLine = newLine;
            }
            updateClassName(selection);
            dispatchEvent("selectionChange", selection, value);
          }
        };
        const self2 = {
          container: scrollContainer,
          wrapper,
          lines,
          textarea,
          get activeLine() {
            return activeLineNumber;
          },
          get value() {
            return value;
          },
          options: currentOptions,
          get focused() {
            return focused;
          },
          get tokens() {
            return tokens;
          },
          inputCommandMap,
          keyCommandMap,
          extensions: {},
          setOptions,
          update,
          getSelection: getInputSelection,
          addExtensions(...extensions2) {
            updateExtensions(extensions2);
          },
          on: (name, handler) => {
            (listeners[name] ||= /* @__PURE__ */ new Set()).add(handler);
            return () => listeners[name].delete(handler);
          },
          remove() {
            scrollContainer.remove();
          }
        };
        addListener(textarea, "keydown", (e) => {
          keyCommandMap[e.key]?.(e, getInputSelection(), value) && preventDefault(e);
        });
        addListener(textarea, "beforeinput", (e) => {
          if (readOnly || e.inputType == "insertText" && inputCommandMap[e.data]?.(e, getInputSelection(), value)) preventDefault(e);
        });
        addListener(textarea, "input", update);
        addListener(textarea, "blur", () => {
          selectionChange = null;
          focused = false;
          updateClassName();
        });
        addListener(textarea, "focus", () => {
          selectionChange = dispatchSelection;
          focused = true;
          updateClassName();
        });
        addListener(textarea, "selectionchange", (e) => {
          dispatchSelection(!e.isTrusted);
          preventDefault(e);
        });
        getElement(container2)?.append(scrollContainer);
        options && setOptions(options);
        return self2;
      };
      doc = "u" > typeof window ? document : null;
      templateEl = /* @__PURE__ */ doc?.createElement("div");
      createTemplate = (html, node) => {
        if (templateEl) {
          templateEl.innerHTML = html;
          node = templateEl.firstChild;
        }
        return () => node.cloneNode(true);
      };
      addListener = (target, type, listener, options) => target.addEventListener(type, listener, options);
      getElement = (el) => typeof el == "string" ? doc.querySelector(el) : el;
      numLines = (str, start = 0, end = Infinity) => {
        let count = 1;
        for (; (start = str.indexOf("\n", start) + 1) && start <= end; count++) ;
        return count;
      };
      languageMap = {};
      editorTemplate = /* @__PURE__ */ createTemplate("<div><div class=pce-wrapper><div class=pce-overlays><textarea class=pce-textarea spellcheck=false autocapitalize=off autocomplete=off>");
      preventDefault = (e) => {
        e.preventDefault();
        e.stopImmediatePropagation();
      };
      if (doc) addListener(doc, "selectionchange", () => selectionChange?.());
    }
  });

  // node_modules/.deno/prism-code-editor@5.2.0/node_modules/prism-code-editor/dist/utils-umP5W0OV.js
  var getLineStart, getLineEnd, addListener2, addTextareaListener, getStyleValue, voidlessLangs, prevSelection, regexEscape, getLineBefore, getLines, getClosestToken, getLanguage, insertText, setSelection, userAgent, isMac, isChrome, isWebKit, getModifierCode;
  var init_utils_umP5W0OV = __esm({
    "node_modules/.deno/prism-code-editor@5.2.0/node_modules/prism-code-editor/dist/utils-umP5W0OV.js"() {
      init_core_DpDyJ_7r();
      init_core_fngiDtt5();
      getLineStart = (text, position) => position ? text.lastIndexOf("\n", position - 1) + 1 : 0;
      getLineEnd = (text, position) => (position = text.indexOf("\n", position)) + 1 ? position : text.length;
      addListener2 = (element, type, listener, options) => {
        addListener(element, type, listener, options);
        return () => element.removeEventListener(type, listener, options);
      };
      addTextareaListener = (editor, type, listener, options) => addListener2(editor.textarea, type, listener, options);
      getStyleValue = (el, prop) => parseFloat(getComputedStyle(el)[prop]);
      voidlessLangs = new Set("xml,rss,atom,jsx,tsx,xquery,xeora,xeoracube,actionscript".split(","));
      regexEscape = (str) => str.replace(/[$+?|.^*()[\]{}\\]/g, "\\$&");
      getLineBefore = (text, position) => text.slice(getLineStart(text, position), position);
      getLines = (text, start, end = start) => [
        text.slice(start = getLineStart(text, start), end = getLineEnd(text, end)).split("\n"),
        start,
        end
      ];
      getClosestToken = (editor, selector, marginLeft = 0, marginRight = marginLeft, position = editor.getSelection()[0]) => {
        const value = editor.value;
        const line = editor.lines[numLines(value, 0, position)];
        const walker = doc.createTreeWalker(line, 5);
        let node = walker.lastChild();
        let offset = getLineEnd(value, position) + 1 - position - node.length;
        while (-offset <= marginRight && (node = walker.previousNode())) {
          if (node.lastChild) continue;
          offset -= node.length || 0;
          if (offset <= marginLeft) {
            for (; node != line; node = node.parentNode) if (node.matches?.(selector)) return node;
          }
        }
      };
      getLanguage = (editor, position) => getClosestToken(editor, "[class*=language-]", 0, 0, position)?.className.match(/language-(\S*)/)[1] || editor.options.language;
      insertText = (editor, text, start, end, newCursorStart, newCursorEnd) => {
        if (editor.options.readOnly) return;
        prevSelection = editor.getSelection();
        end ??= start;
        let textarea = editor.textarea;
        let value = editor.value;
        let avoidBug = isChrome && !value[end ?? prevSelection[1]] && /\n$/.test(text) && /^$|\n$/.test(value);
        let removeListener;
        editor.focused || textarea.focus();
        if (start != null) textarea.setSelectionRange(start, end);
        if (newCursorStart != null) removeListener = editor.on("update", () => {
          textarea.setSelectionRange(newCursorStart, newCursorEnd ?? newCursorStart, prevSelection[2]);
          removeListener();
        });
        isWebKit || textarea.dispatchEvent(new InputEvent("beforeinput", { data: text }));
        if (isChrome || isWebKit) {
          if (avoidBug) {
            textarea.selectionEnd--;
            text = text.slice(0, -1);
          }
          if (isWebKit) text += "\n";
          doc.execCommand(text ? "insertHTML" : "delete", false, escapeHtml(text, /</g, "&lt;"));
          if (avoidBug) textarea.selectionStart++;
        } else doc.execCommand(text ? "insertText" : "delete", false, text);
        prevSelection = 0;
      };
      setSelection = (editor, start, end = start, direction) => {
        let textarea = editor.textarea;
        let removeHandler = addListener2(textarea, "focus", (e) => {
          let target = e.relatedTarget;
          target ? target.focus() : textarea.blur();
        });
        textarea.setSelectionRange(start, end, direction);
        removeHandler();
        textarea.dispatchEvent(new Event("selectionchange"));
      };
      userAgent = doc ? navigator.userAgent : "";
      isMac = doc ? /Mac|iPhone|iP[ao]d/.test(navigator.platform) : false;
      isChrome = /Chrome\//.test(userAgent);
      isWebKit = !isChrome && /AppleWebKit\//.test(userAgent);
      getModifierCode = (e) => e.altKey + e.ctrlKey * 2 + e.metaKey * 4 + e.shiftKey * 8;
    }
  });

  // node_modules/.deno/prism-code-editor@5.2.0/node_modules/prism-code-editor/dist/utils-DSQ-ulqQ.js
  var mod;
  var init_utils_DSQ_ulqQ = __esm({
    "node_modules/.deno/prism-code-editor@5.2.0/node_modules/prism-code-editor/dist/utils-DSQ-ulqQ.js"() {
      init_utils_umP5W0OV();
      mod = isMac ? 4 : 2;
    }
  });

  // node_modules/.deno/prism-code-editor@5.2.0/node_modules/prism-code-editor/dist/commands-HRCav5fj.js
  var ignoreTab, setIgnoreTab, whitespaceEnd, getIndent, scroll, insertLines, indentSelectedLines, insertTab, insertLineAndIndent, moveSelectedLines, copySelectedLines, scrollByOneLine, deleteSelectedLines, toggleComment, defaultKeymap, defaultCommands, autoCompleteShortcutLabels, modifiers, searchShortcutLabels;
  var init_commands_HRCav5fj = __esm({
    "node_modules/.deno/prism-code-editor@5.2.0/node_modules/prism-code-editor/dist/commands-HRCav5fj.js"() {
      init_core_fngiDtt5();
      init_utils_umP5W0OV();
      init_utils_DSQ_ulqQ();
      ignoreTab = false;
      setIgnoreTab = (newState) => ignoreTab = newState;
      whitespaceEnd = (str) => str.search(/\S|$/);
      getIndent = ({ options: { insertSpaces = true, tabSize } }) => [insertSpaces ? " " : "	", insertSpaces ? tabSize || 2 : 1];
      scroll = (editor) => !editor.options.readOnly && !editor.extensions.cursor?.scrollIntoView();
      insertLines = (editor, old, newL, start, end, selectionStart, selectionEnd) => {
        let newLines = newL.join("\n");
        if (newLines == old.join("\n")) return;
        const last = old.length - 1;
        const lastLine = newL[last];
        const oldLastLine = old[last];
        const lastDiff = oldLastLine.length - lastLine.length;
        const firstDiff = newL[0].length - old[0].length;
        const firstInsersion = start + whitespaceEnd((firstDiff < 0 ? newL : old)[0]);
        const lastInsersion = end - oldLastLine.length + whitespaceEnd(lastDiff > 0 ? lastLine : oldLastLine);
        const offset = start - end + newLines.length + lastDiff;
        const newCursorStart = firstInsersion > selectionStart ? selectionStart : Math.max(firstInsersion, selectionStart + firstDiff);
        const newCursorEnd = selectionEnd + start - end + newLines.length;
        insertText(editor, newLines, start, end, newCursorStart, selectionEnd < lastInsersion ? newCursorEnd + lastDiff : Math.max(lastInsersion + offset, newCursorEnd));
      };
      indentSelectedLines = (editor, less) => {
        const [start, end] = editor.getSelection();
        const [lines, start1, end1] = getLines(editor.value, start, end);
        const [indentChar, tabSize] = getIndent(editor);
        insertLines(editor, lines, lines.map(less ? (str) => str.slice(whitespaceEnd(str) ? tabSize - whitespaceEnd(str) % tabSize : 0) : (str) => str && indentChar.repeat(tabSize - whitespaceEnd(str) % tabSize) + str), start1, end1, start, end);
        return scroll(editor);
      };
      insertTab = (editor, pos) => {
        const [indentChar, tabSize] = getIndent(editor);
        insertText(editor, indentChar.repeat(tabSize - (pos - getLineStart(editor.value, pos)) % tabSize));
        return scroll(editor);
      };
      insertLineAndIndent = (editor, eol) => {
        let selection = editor.getSelection();
        let value = editor.value;
        if (eol) selection[0] = selection[1] = getLineEnd(value, selection[1]);
        const [indentChar, tabSize] = getIndent(editor);
        const [start, end] = selection;
        const autoIndent = languageMap[getLanguage(editor, start)]?.autoIndent;
        const indenationCount = Math.floor(whitespaceEnd(getLineBefore(value, start)) / tabSize) * tabSize;
        const extraIndent = autoIndent?.[0]?.(selection, value, editor) ? tabSize : 0;
        const extraLine = autoIndent?.[1]?.(selection, value, editor);
        const newText = "\n" + indentChar.repeat(indenationCount + extraIndent) + (extraLine ? "\n" + indentChar.repeat(indenationCount) : "");
        if (newText[1] || value[end]) {
          insertText(editor, newText, start, end, start + indenationCount + extraIndent + 1);
          return scroll(editor);
        }
      };
      moveSelectedLines = (editor, up) => {
        const [start, end] = editor.getSelection();
        const value = editor.value;
        const newStart = up ? getLineStart(value, start) - 1 : start;
        const newEnd = up ? end : value.indexOf("\n", end) + 1;
        if (newStart > -1 && newEnd > 0) {
          const [lines, start1, end1] = getLines(value, newStart, newEnd);
          const line = lines[up ? "shift" : "pop"]();
          const offset = (line.length + 1) * (up ? -1 : 1);
          lines[up ? "push" : "unshift"](line);
          insertText(editor, lines.join("\n"), start1, end1, start + offset, end + offset);
        }
        return scroll(editor);
      };
      copySelectedLines = (editor, up) => {
        const [start, end] = editor.getSelection();
        const value = editor.value;
        const [lines, start1, end1] = getLines(value, start, end);
        const str = lines.join("\n");
        const offset = up ? 0 : str.length + 1;
        insertText(editor, str + "\n" + str, start1, end1, start + offset, end + offset);
        return scroll(editor);
      };
      scrollByOneLine = (editor, up) => {
        editor.container.scrollBy(0, getStyleValue(editor.container, "lineHeight") * (up ? -1 : 1));
        return true;
      };
      deleteSelectedLines = (editor) => {
        const [start, end, dir] = editor.getSelection();
        const value = editor.value;
        const [lines, start1, end1] = getLines(value, start, end);
        const column = dir > "f" ? end - end1 + lines.pop().length : start - start1;
        const newLineLen = getLineEnd(value, end1 + 1) - end1 - 1;
        insertText(editor, "", start1 - !!start1, end1 + !start1, start1 + Math.min(column, newLineLen));
        return scroll(editor);
      };
      toggleComment = (editor, isBlock) => {
        const [start, end] = editor.getSelection();
        const value = editor.value;
        const position = isBlock ? start : getLineStart(value, start);
        const lang = languageMap[getLanguage(editor, position)] || {};
        const { line, block } = lang.getComments?.(editor, position, value) || lang.comments || {};
        const [lines, start1, end1] = getLines(value, start, end);
        const last = lines.length - 1;
        if (isBlock) {
          if (block) {
            const [open, close] = block;
            const text = value.slice(start, end);
            const pos = value.slice(0, start).search(regexEscape(open) + " ?$");
            if (pos + 1 && RegExp("^ ?" + regexEscape(close)).test(value.slice(end))) insertText(editor, text, pos, end + (value[end] == " ") + close.length, pos, pos + end - start);
            else insertText(editor, `${open} ${text} ${close}`, start, end, start + open.length + 1, end + open.length + 1);
          }
        } else if (line) {
          const escaped = regexEscape(line);
          const regex = RegExp(`^\\s*(${escaped} ?|$)`);
          const regex2 = RegExp(escaped + " ?");
          const allWhiteSpace = !/\S/.test(value.slice(start1, end1));
          insertLines(editor, lines, lines.map(!allWhiteSpace && lines.every((line2) => regex.test(line2)) ? (str) => str.replace(regex2, "") : (str) => allWhiteSpace || /\S/.test(str) ? str.replace(/(?!\s)/, line + " ") : str), start1, end1, start, end);
        } else if (block) {
          const [open, close] = block;
          const first = lines[0];
          const insertionPoint = whitespaceEnd(first);
          const hasComment = first.startsWith(open, insertionPoint) && lines[last].endsWith(close);
          lines[0] = first.replace(hasComment ? RegExp(regexEscape(open) + " ?") : /(?!\s)/, hasComment ? "" : open + " ");
          let diff = lines[0].length - first.length;
          lines[last] = hasComment ? lines[last].replace(RegExp(` ?${regexEscape(close)}$`), "") : lines[last] + " " + close;
          let newText = lines.join("\n");
          let firstInsersion = insertionPoint + start1;
          let newStart = firstInsersion > start ? start : Math.max(start + diff, firstInsersion);
          let newEnd = firstInsersion > end - (start != end) ? end : Math.min(Math.max(firstInsersion, end + diff), start1 + newText.length);
          insertText(editor, newText, start1, end1, newStart, Math.max(newStart, newEnd));
        }
        return block || line && !isBlock ? scroll(editor) : false;
      };
      defaultKeymap = {
        Tab(editor) {
          if (!ignoreTab) {
            const [start, end] = editor.getSelection();
            return start == end ? insertTab(editor, start) : indentSelectedLines(editor);
          }
        },
        "8+Tab": (editor) => !ignoreTab && indentSelectedLines(editor, true),
        "1+ArrowDown": (editor) => moveSelectedLines(editor),
        "1+ArrowUp": (editor) => moveSelectedLines(editor, true),
        "9+ArrowDown": (editor) => copySelectedLines(editor),
        "9+ArrowUp": (editor) => copySelectedLines(editor, true),
        Enter: (editor) => insertLineAndIndent(editor),
        "8+Enter": (editor) => insertLineAndIndent(editor),
        "Mod+Enter": (editor) => insertLineAndIndent(editor, true),
        "Mod+]": (editor) => indentSelectedLines(editor),
        "Mod+[": (editor) => indentSelectedLines(editor, true),
        "8+Mod+k": deleteSelectedLines,
        "Mod+/": (editor) => toggleComment(editor),
        "9+a": (editor) => toggleComment(editor, true),
        [isMac ? "10+m" : "2+m"]: () => (ignoreTab = !ignoreTab, true),
        [`2+${isMac ? "Page" : "Arrow"}Down`]: (editor) => scrollByOneLine(editor),
        [`2+${isMac ? "Page" : "Arrow"}Up`]: (editor) => scrollByOneLine(editor, true)
      };
      defaultCommands = (selfClosePairs = [
        '""',
        "''",
        "``",
        "()",
        "[]",
        "{}"
      ], selfCloseRegex = /([^$\w'"`]["'`]|.[[({])[.,:;\])}>\s]|.[[({]`/s) => {
        return (editor, options) => {
          let prevCopy;
          const { keyCommandMap, inputCommandMap, getSelection: getSelection2, container: container2 } = editor;
          const clipboard = navigator.clipboard;
          const getIndent2 = ({ insertSpaces = true, tabSize } = options) => [insertSpaces ? " " : "	", insertSpaces ? tabSize || 2 : 1];
          const scroll2 = () => !options.readOnly && !editor.extensions.cursor?.scrollIntoView();
          const selfClose = ([start, end], [open, close], value, wrapOnly) => (start < end || !wrapOnly && selfCloseRegex.test((value[end - 1] || " ") + open + (value[end] || " "))) && !insertText(editor, open + value.slice(start, end) + close, null, null, start + 1, end + 1);
          const skipIfEqual = ([start, end], char, value) => start == end && value[end] == char && !setSelection(editor, start + 1);
          const insertLines2 = (old, newL, start, end, selectionStart, selectionEnd) => {
            let newLines = newL.join("\n");
            if (newLines != old.join("\n")) {
              const last = old.length - 1;
              const lastLine = newL[last];
              const oldLastLine = old[last];
              const lastDiff = oldLastLine.length - lastLine.length;
              const firstDiff = newL[0].length - old[0].length;
              const firstInsersion = start + whitespaceEnd((firstDiff < 0 ? newL : old)[0]);
              const lastInsersion = end - oldLastLine.length + whitespaceEnd(lastDiff > 0 ? lastLine : oldLastLine);
              const offset = start - end + newLines.length + lastDiff;
              const newCursorStart = firstInsersion > selectionStart ? selectionStart : Math.max(firstInsersion, selectionStart + firstDiff);
              const newCursorEnd = selectionEnd + start - end + newLines.length;
              insertText(editor, newLines, start, end, newCursorStart, selectionEnd < lastInsersion ? newCursorEnd + lastDiff : Math.max(lastInsersion + offset, newCursorEnd));
            }
          };
          const indent = (outdent, lines, start1, end1, start, end, indentChar, tabSize) => {
            insertLines2(lines, lines.map(outdent ? (str) => str.slice(whitespaceEnd(str) ? tabSize - whitespaceEnd(str) % tabSize : 0) : (str) => str && indentChar.repeat(tabSize - whitespaceEnd(str) % tabSize) + str), start1, end1, start, end);
          };
          inputCommandMap["<"] = (_e, selection, value) => selfClose(selection, "<>", value, true);
          selfClosePairs.forEach(([open, close]) => {
            const isQuote = open == close;
            inputCommandMap[open] = (_e, selection, value) => (isQuote && skipIfEqual(selection, close, value) || selfClose(selection, open + close, value)) && scroll2();
            if (!isQuote) inputCommandMap[close] = (_e, selection, value) => skipIfEqual(selection, close, value) && scroll2();
          });
          inputCommandMap[">"] = (e, selection, value) => {
            const closingTag2 = languageMap[getLanguage(editor)]?.autoCloseTags?.(selection, value, editor);
            if (closingTag2) {
              insertText(editor, ">" + closingTag2, null, null, selection[0] + 1);
              preventDefault(e);
            }
          };
          keyCommandMap.Tab = (e, [start, end], value) => {
            if (ignoreTab || options.readOnly || getModifierCode(e) & 7) return;
            const [indentChar, tabSize] = getIndent2();
            const shiftKey = e.shiftKey;
            const [lines, start1, end1] = getLines(value, start, end);
            if (start < end || shiftKey) indent(shiftKey, lines, start1, end1, start, end, indentChar, tabSize);
            else insertText(editor, indentChar.repeat(tabSize - (start - start1) % tabSize));
            return scroll2();
          };
          keyCommandMap.Enter = (e, selection, value) => {
            const code = getModifierCode(e) & 7;
            if (!code || code == mod) {
              if (code) selection[0] = selection[1] = getLines(value, selection[1])[2];
              const [indentChar, tabSize] = getIndent2();
              const [start, end] = selection;
              const autoIndent = languageMap[getLanguage(editor, start)]?.autoIndent;
              const indenationCount = Math.floor(whitespaceEnd(getLineBefore(value, start)) / tabSize) * tabSize;
              const extraIndent = autoIndent?.[0]?.(selection, value, editor) ? tabSize : 0;
              const extraLine = autoIndent?.[1]?.(selection, value, editor);
              const newText = "\n" + indentChar.repeat(indenationCount + extraIndent) + (extraLine ? "\n" + indentChar.repeat(indenationCount) : "");
              if (newText[1] || value[end]) {
                insertText(editor, newText, start, end, start + indenationCount + extraIndent + 1);
                return scroll2();
              }
            }
          };
          keyCommandMap.Backspace = (_e, [start, end], value) => {
            if (start == end) {
              const line = getLineBefore(value, start);
              const tabSize = options.tabSize || 2;
              const isPair = selfClosePairs.includes(value.slice(start - 1, start + 1));
              const indenationCount = /[^ ]/.test(line) ? 0 : (line.length - 1) % tabSize + 1;
              if (isPair || indenationCount > 1) {
                insertText(editor, "", start - (isPair ? 1 : indenationCount), start + isPair);
                return scroll2();
              }
            }
          };
          for (let i = 0; i < 2; i++) keyCommandMap[i ? "ArrowDown" : "ArrowUp"] = (e, [start, end], value) => {
            const code = getModifierCode(e);
            if (code == 1) {
              const newStart = i ? start : getLineStart(value, start) - 1;
              const newEnd = i ? value.indexOf("\n", end) + 1 : end;
              if (newStart > -1 && newEnd > 0) {
                const [lines, start1, end1] = getLines(value, newStart, newEnd);
                const line = lines[i ? "pop" : "shift"]();
                const offset = (line.length + 1) * (i ? 1 : -1);
                lines[i ? "unshift" : "push"](line);
                insertText(editor, lines.join("\n"), start1, end1, start + offset, end + offset);
              }
              return scroll2();
            } else if (code == 9) {
              const [lines, start1, end1] = getLines(value, start, end);
              const str = lines.join("\n");
              const offset = i ? str.length + 1 : 0;
              insertText(editor, str + "\n" + str, start1, end1, start + offset, end + offset);
              return scroll2();
            } else if (code == 2 && !isMac) {
              container2.scrollBy(0, getStyleValue(container2, "lineHeight") * (i ? 1 : -1));
              return true;
            }
          };
          addTextareaListener(editor, "keydown", (e) => {
            const code = getModifierCode(e);
            const keyCode = e.keyCode;
            const [start, end, dir] = getSelection2();
            if (code == mod && (keyCode == 221 || keyCode == 219)) {
              indent(keyCode == 219, ...getLines(editor.value, start, end), start, end, ...getIndent2());
              scroll2();
              preventDefault(e);
            } else if (code == (isMac ? 10 : 2) && keyCode == 77) {
              setIgnoreTab(!ignoreTab);
              preventDefault(e);
            } else if (keyCode == 191 && code == mod || keyCode == 65 && code == 9) {
              const value = editor.value;
              const isBlock = code == 9;
              const position = isBlock ? start : getLineStart(value, start);
              const language = languageMap[getLanguage(editor, position)] || {};
              const { line, block } = language.getComments?.(editor, position, value) || language.comments || {};
              const [lines, start1, end1] = getLines(value, start, end);
              const last = lines.length - 1;
              if (isBlock) {
                if (block) {
                  const [open, close] = block;
                  const text = value.slice(start, end);
                  const pos = value.slice(0, start).search(regexEscape(open) + " ?$");
                  if (pos + 1 && RegExp("^ ?" + regexEscape(close)).test(value.slice(end))) insertText(editor, text, pos, end + (value[end] == " ") + close.length, pos, pos + end - start);
                  else insertText(editor, `${open} ${text} ${close}`, start, end, start + open.length + 1, end + open.length + 1);
                  scroll2();
                  preventDefault(e);
                }
              } else if (line) {
                const escaped = regexEscape(line);
                const regex = RegExp(`^\\s*(${escaped} ?|$)`);
                const regex2 = RegExp(escaped + " ?");
                const allWhiteSpace = !/\S/.test(value.slice(start1, end1));
                insertLines2(lines, lines.map(!allWhiteSpace && lines.every((line2) => regex.test(line2)) ? (str) => str.replace(regex2, "") : (str) => allWhiteSpace || /\S/.test(str) ? str.replace(/(?!\s)/, line + " ") : str), start1, end1, start, end);
                scroll2();
                preventDefault(e);
              } else if (block) {
                const [open, close] = block;
                const first = lines[0];
                const insertionPoint = whitespaceEnd(first);
                const hasComment = first.startsWith(open, insertionPoint) && lines[last].endsWith(close);
                lines[0] = first.replace(hasComment ? RegExp(regexEscape(open) + " ?") : /(?!\s)/, hasComment ? "" : open + " ");
                let diff = lines[0].length - first.length;
                lines[last] = hasComment ? lines[last].replace(RegExp(` ?${regexEscape(close)}$`), "") : lines[last] + " " + close;
                let newText = lines.join("\n");
                let firstInsersion = insertionPoint + start1;
                let newStart = firstInsersion > start ? start : Math.max(start + diff, firstInsersion);
                let newEnd = firstInsersion > end - (start != end) ? end : Math.min(Math.max(firstInsersion, end + diff), start1 + newText.length);
                insertText(editor, newText, start1, end1, newStart, Math.max(newStart, newEnd));
                scroll2();
                preventDefault(e);
              }
            } else if (code == 8 + mod && keyCode == 75) {
              const value = editor.value;
              const [lines, start1, end1] = getLines(value, start, end);
              const column = dir > "f" ? end - end1 + lines.pop().length : start - start1;
              const newLineLen = getLineEnd(value, end1 + 1) - end1 - 1;
              insertText(editor, "", start1 - !!start1, end1 + !start1, start1 + Math.min(column, newLineLen));
              scroll2();
              preventDefault(e);
            }
          });
          [
            "copy",
            "cut",
            "paste"
          ].forEach((type) => addTextareaListener(editor, type, (e) => {
            const [start, end] = getSelection2();
            if (start == end && clipboard) {
              const [[line], start1, end1] = getLines(editor.value, start, end);
              if (type == "paste") {
                if (e.clipboardData.getData("text/plain") == prevCopy) {
                  insertText(editor, prevCopy + "\n", start1, start1, start + prevCopy.length + 1);
                  scroll2();
                  preventDefault(e);
                }
              } else {
                clipboard.writeText(prevCopy = line);
                if (type == "cut") insertText(editor, "", start1, end1 + 1), scroll2();
                preventDefault(e);
              }
            }
          }));
        };
      };
      autoCompleteShortcutLabels = [
        ["2+ ", "Trigger suggestion"],
        ["mod+i", "Trigger suggestion"],
        ...isMac ? [["1+Escape", "Trigger suggestion"]] : [],
        ["2+ ", "Toggle suggestion documentation"],
        ["mod+i", "Toggle suggestion documentation"],
        ["Tab", "Insert suggestion"],
        ["Enter", "Insert suggestion"],
        ["Escape", "Close completion widget"],
        ["Escape", "Clear tab stops"],
        ["Tab", "Select next tab stop"],
        ["8+Tab", "Select previous tab stop"],
        ["ArrowUp", "Select previous suggestion"],
        ["ArrowDown", "Select next suggestion"],
        ["PageUp", "Select first visible suggestion"],
        ["PageDown", "Select last visible suggestion"]
      ];
      modifiers = isMac ? 5 : 1;
      searchShortcutLabels = [
        ["mod+f", "Start search"],
        ["mod+g", "Find next match"],
        ["mod+8+g", "Find previous match"],
        ["f3", "Find next match"],
        ["8+f3", "Find previous match"],
        ["Enter", "Select next match"],
        ["8+Enter", "Select previous match"],
        ["Escape", "Close search widget"],
        ["Enter", "Replace match"],
        [`${isMac ? 4 : 3}+Enter`, "Replace all matches"],
        [modifiers + "+r", "Toggle regex search"],
        [modifiers + "+p", "Toggle case preservation"],
        [modifiers + "+w", "Toggle whole word search"],
        [modifiers + "+l", "Toggle find in selection"]
      ];
    }
  });

  // node_modules/.deno/prism-code-editor@5.2.0/node_modules/prism-code-editor/dist/extensions/commands/index.js
  var init_commands = __esm({
    "node_modules/.deno/prism-code-editor@5.2.0/node_modules/prism-code-editor/dist/extensions/commands/index.js"() {
      init_commands_HRCav5fj();
    }
  });

  // node_modules/.deno/prism-code-editor@5.2.0/node_modules/prism-code-editor/dist/index.js
  var init_dist = __esm({
    "node_modules/.deno/prism-code-editor@5.2.0/node_modules/prism-code-editor/dist/index.js"() {
      init_core_fngiDtt5();
    }
  });

  // node_modules/.deno/prism-code-editor@5.2.0/node_modules/prism-code-editor/dist/language-CPVUjid6.js
  var insertBefore, toString;
  var init_language_CPVUjid6 = __esm({
    "node_modules/.deno/prism-code-editor@5.2.0/node_modules/prism-code-editor/dist/language-CPVUjid6.js"() {
      insertBefore = (grammar, before, insert) => {
        var temp = {};
        for (var token in grammar) {
          temp[token] = grammar[token];
          delete grammar[token];
        }
        for (var token in temp) {
          if (token == before) Object.assign(grammar, insert);
          if (!insert.hasOwnProperty(token)) grammar[token] = temp[token];
        }
      };
      toString = {}.toString;
    }
  });

  // node_modules/.deno/prism-code-editor@5.2.0/node_modules/prism-code-editor/dist/prism/languages/css.js
  var string, stringSrc, atruleInside;
  var init_css = __esm({
    "node_modules/.deno/prism-code-editor@5.2.0/node_modules/prism-code-editor/dist/prism/languages/css.js"() {
      init_core_DpDyJ_7r();
      string = /"(?:\\[^]|[^\\\n"])*"|'(?:\\[^]|[^\\\n'])*'/g;
      stringSrc = string.source;
      atruleInside = {
        "rule": /^@[\w-]+/,
        "selector-function-argument": {
          pattern: /(\bselector\s*\(\s*(?![\s)]))(?:[^()\s]|\s+(?![\s)])|\((?:[^()]|\([^)]*\))*\))+(?=\s*\))/,
          lookbehind: true,
          alias: "selector"
        },
        "keyword": {
          pattern: /(^|[^\w-])(?:and|not|only|or)(?![\w-])/,
          lookbehind: true
        }
      };
      atruleInside[rest] = languages.css = {
        "comment": /\/\*[^]*?\*\//,
        "atrule": {
          pattern: RegExp(`@[\\w-](?:[^\\s;{"']|\\s+(?!\\s)|${stringSrc})*?(?:;|(?=\\s*\\{))`),
          inside: atruleInside
        },
        "url": {
          pattern: RegExp(`\\burl\\((?:${stringSrc}|(?:[^\\\\
"')=]|\\\\[^])*)\\)`, "gi"),
          inside: {
            "function": /^url/i,
            "punctuation": /^\(|\)$/,
            "string": {
              pattern: /^["'][^]+/,
              alias: "url"
            }
          }
        },
        "selector": {
          pattern: RegExp(`(^|[{}\\s])[^\\s{}](?:[^\\s{};"']|\\s+(?![\\s{])|${stringSrc})*(?=\\s*\\{)`),
          lookbehind: true
        },
        "string": string,
        "variable": {
          pattern: /(^|[^-\w\xa0-\uffff])--(?:(?!\s)[-\w\xa0-\uffff])*/,
          lookbehind: true
        },
        "property": {
          pattern: /(^|[^-\w\xa0-\uffff])(?!\d)(?:(?!\s)[-\w\xa0-\uffff])+(?=\s*:)/,
          lookbehind: true
        },
        "important": /!important\b/i,
        "function": {
          pattern: /(^|[^-a-z\d])[-a-z\d]+(?=\()/i,
          lookbehind: true
        },
        "punctuation": /[(){},:;]/
      };
    }
  });

  // node_modules/.deno/prism-code-editor@5.2.0/node_modules/prism-code-editor/dist/prism/languages/css-extras.js
  var css;
  var init_css_extras = __esm({
    "node_modules/.deno/prism-code-editor@5.2.0/node_modules/prism-code-editor/dist/prism/languages/css-extras.js"() {
      init_core_DpDyJ_7r();
      init_language_CPVUjid6();
      init_css();
      css = languages.css;
      css.selector.inside = css["atrule"].inside["selector-function-argument"].inside = {
        "pseudo-element": /:(?:after|before|first-letter|first-line|selection)|::[-\w]+/,
        "pseudo-class": /:[-\w]+/,
        "class": /\.[-\w]+/,
        "id": /#[-\w]+/,
        "attribute": {
          pattern: /\[(?:[^[\]"']|(["'])(?:\\[^]|(?!\1)[^\\\n])*\1)*\]/g,
          inside: {
            "punctuation": /^\[|\]$/,
            "case-sensitivity": {
              pattern: /(\s)[si]$/i,
              lookbehind: true,
              alias: "keyword"
            },
            "namespace": {
              pattern: /^(\s*)(?:(?!\s)[-*\w\xa0-\uffff])*\|(?!=)/,
              lookbehind: true,
              inside: { "punctuation": /\|$/ }
            },
            "attr-name": {
              pattern: /^(\s*)(?:(?!\s)[-\w\xa0-\uffff])+/,
              lookbehind: true
            },
            "attr-value": {
              pattern: /(=\s*)(?:(?!\s)[-\w\xa0-\uffff])+(?=\s*$)|(["'])(?:\\[^]|(?!\2)[^\\\n])*\2/,
              lookbehind: true
            },
            "operator": /[|~*^$]?=/
          }
        },
        "n-th": [{
          pattern: /(\(\s*)[+-]?\d*[\dn](?:\s*[+-]\s*\d+)?(?=\s*\))/,
          lookbehind: true,
          inside: {
            "number": /[\dn]+/,
            "operator": /[+-]/
          }
        }, {
          pattern: /(\(\s*)(?:even|odd)(?=\s*\))/i,
          lookbehind: true
        }],
        "combinator": /[>+~]|\|\|/,
        "punctuation": /[(),]/
      };
      insertBefore(css, "function", {
        "operator": {
          pattern: /(\s)[/*+-](?!\S)/,
          lookbehind: true
        },
        "hexcode": {
          pattern: /\B#[a-f\d]{3,8}\b/i,
          alias: "color"
        },
        "entity": /\\[a-f\d]{1,8}/i,
        "unit": {
          pattern: /(\b\d+)(?:%|[a-z]+(?![\w-]))/,
          lookbehind: true
        },
        "number": {
          pattern: /(^|[^\w.-])-?(?:\d+(?:\.\d+)?|\.\d+)/,
          lookbehind: true
        }
      });
    }
  });

  // node_modules/.deno/prism-code-editor@5.2.0/node_modules/prism-code-editor/dist/prism/languages/uri.js
  var init_uri = __esm({
    "node_modules/.deno/prism-code-editor@5.2.0/node_modules/prism-code-editor/dist/prism/languages/uri.js"() {
      init_core_DpDyJ_7r();
      languages.url = languages.uri = {
        "scheme": {
          pattern: /^[a-z][a-z\d+.-]*:/gim,
          inside: { "scheme-delimiter": /:$/ }
        },
        "fragment": {
          pattern: /#[\w.~!$&'()*,;=%:@/?+-]*/,
          inside: { "fragment-delimiter": /^#/ }
        },
        "query": {
          pattern: /\?[\w.~!$&'()*,;=%:@/?+-]*/,
          inside: {
            "query-delimiter": /^\?/g,
            "pair-delimiter": /[&;]/,
            "pair": {
              pattern: /^[^=][^]*/,
              inside: {
                "key": /^[^=]+/,
                "value": {
                  pattern: /(^=)[^]+/,
                  lookbehind: true
                }
              }
            }
          }
        },
        "authority": {
          pattern: /^\/\/(?:[\w.~!$&'()*,;=%:+-]*@)?(?:\[(?:[a-fA-F\d:.]{2,48}|v[a-fA-F\d]+\.[\w.~!$&'()*,;=+-]+)\]|[\w.~!$&'()*,;=%+-]*)(?::\d*)?/m,
          inside: {
            "authority-delimiter": /^\/\//,
            "user-info-segment": {
              pattern: /^[\w.~!$&'()*,;=%:+-]*@/,
              inside: {
                "user-info-delimiter": /@$/,
                "user-info": /^[\w.~!$&'()*,;=%:+-]+/
              }
            },
            "port-segment": {
              pattern: /:\d*$/,
              inside: {
                "port-delimiter": /^:/,
                "port": /^\d+/
              }
            },
            "host": {
              pattern: /[^]+/,
              inside: {
                "ip-literal": {
                  pattern: /^\[[^]+\]$/,
                  inside: {
                    "ip-literal-delimiter": /^\[|\]$/,
                    "ipv-future": /^v[^]+/,
                    "ipv6-address": /^[^]+/
                  }
                },
                "ipv4-address": /^(?:(?:[03-9]\d?|[12]\d{0,2})\.){3}(?:[03-9]\d?|[12]\d{0,2})$/
              }
            }
          }
        },
        "path": {
          pattern: /^[\w.~!$&'()*,;=%:@/+-]+/m,
          inside: { "path-separator": /\// }
        }
      };
    }
  });

  // node_modules/.deno/prism-code-editor@5.2.0/node_modules/prism-code-editor/dist/shared-c_zHT_t0.js
  var isBracketPair, openBracket, testBracketPair, clikeComment, bracketIndenting;
  var init_shared_c_zHT_t0 = __esm({
    "node_modules/.deno/prism-code-editor@5.2.0/node_modules/prism-code-editor/dist/shared-c_zHT_t0.js"() {
      init_utils_umP5W0OV();
      isBracketPair = /\[]|\(\)|{}/;
      openBracket = /[([{][^)\]}]*$/;
      testBracketPair = ([start, end], value) => {
        return isBracketPair.test(value[start - 1] + value[end]);
      };
      clikeComment = {
        line: "//",
        block: ["/*", "*/"]
      };
      bracketIndenting = (comments = clikeComment, indentPattern = openBracket) => ({
        comments,
        autoIndent: [([start], value) => indentPattern.test(getLineBefore(value, start)), testBracketPair]
      });
    }
  });

  // node_modules/.deno/prism-code-editor@5.2.0/node_modules/prism-code-editor/dist/languages/css.js
  var init_css2 = __esm({
    "node_modules/.deno/prism-code-editor@5.2.0/node_modules/prism-code-editor/dist/languages/css.js"() {
      init_core_fngiDtt5();
      init_shared_c_zHT_t0();
      languageMap.css = bracketIndenting({ block: ["/*", "*/"] });
      languageMap.less = languageMap.scss = bracketIndenting();
      languageMap.sass = { comments: clikeComment };
    }
  });

  // src/scripts/features/csseditor.ts
  var csseditor_exports = {};
  __export(csseditor_exports, {
    createBackgroundUrlsEditor: () => createBackgroundUrlsEditor,
    createCssEditor: () => createCssEditor
  });
  function createCssEditor(options) {
    return createEditor("#css-editor", options, defaultCommands());
  }
  function createBackgroundUrlsEditor(options) {
    return createEditor("#background-urls-editor", options, defaultCommands());
  }
  var init_csseditor = __esm({
    "src/scripts/features/csseditor.ts"() {
      init_commands();
      init_dist();
      init_css_extras();
      init_uri();
      init_css2();
    }
  });

  // src/scripts/langs.ts
  var langList = {
    en: "English",
    fr: "Fran\xE7ais",
    de: "Deutsch",
    it: "Italiano",
    es: "Espa\xF1ol",
    hi: "Hindi",
    ca: "Catal\xE0",
    "pt-BR": "Portugu\xEAs (Brasil)",
    "pt-PT": "Portugu\xEAs (Portugal)",
    nl: "Nederlands",
    da: "Dansk",
    sv: "Svenska",
    nb: "Norsk",
    is: "\xCDslenska",
    fi: "suomi",
    pl: "Polski",
    cs: "\u010Ce\u0161tina",
    hr: "Hrvatski",
    sk: "Slovensk\xFD",
    hu: "Magyar",
    ro: "Rom\xE2n\u0103",
    el: "\u0395\u03BB\u03BB\u03B7\u03BD\u03B9\u03BA\u03AC",
    sr: "\u0421\u0440\u043F\u0441\u043A\u0438 (\u045B\u0438\u0440\u0438\u043B\u0438\u0446\u0430)",
    "sr-YU": "Srpski (latinica)",
    be: "\u0411\u0435\u043B\u0430\u0440\u0443\u0441\u043A\u0430\u044F",
    uk: "\u0423\u043A\u0440\u0430\u0457\u043D\u0441\u044C\u043A\u0430",
    ru: "\u0420\u0443\u0441\u0441\u043A\u0438\u0439",
    tr: "T\xFCrk\xE7e",
    he: "\u05E2\u05B4\u05D1\u05E8\u05B4\u05D9\u05EA",
    hy: "\u0540\u0561\u0575\u0565\u0580\u0565\u0576",
    ar: "\u0627\u0644\u0639\u0631\u0628\u064A\u0629",
    az: "Az\u0259rbaycan",
    uz: "O'zbekcha",
    fa: "\u0641\u0627\u0631\u0633\u06CC",
    te: "\u0C24\u0C46\u0C32\u0C41\u0C17\u0C41",
    id: "Indonesia",
    vi: "Ti\u1EBFng Vi\u1EC7t",
    "zh-CN": "\u4E2D\u56FD\u7B80\u4F53\u4E2D\u6587",
    "zh-HK": "\u9999\u6E2F\u7E41\u9AD4\u4E2D\u6587",
    "zh-TW": "\u81FA\u7063\u6B63\u9AD4\u4E2D\u6587",
    "nan-Hant-TW": "\u81FA\u7063\u53F0\u8A9E\uFF08\u6F22\u7F85\uFF09",
    ko: "\uD55C\uAD6D\uC5B4",
    ja: "\u65E5\u672C\u8A9E"
  };
  var subsets = {
    el: "greek",
    ar: "arabic",
    fa: "arabic",
    ru: "cyrillic",
    uk: "cyrillic",
    sr: "cyrillic",
    be: "cyrillic",
    sk: "latin-ext",
    nb: "latin-ext",
    is: "latin-ext",
    hr: "latin-ext",
    cs: "latin-ext",
    pl: "latin-ext",
    ro: "latin-ext",
    "sr-YU": "latin-ext",
    tr: "latin-ext",
    hu: "latin-ext",
    vi: "latin-ext",
    az: "latin-ext",
    uz: "latin-ext",
    ja: "japanese",
    hy: "armenian",
    te: "telugu",
    he: "hebrew",
    "zh-CN": "chinese-simplified",
    "zh-HK": "chinese-traditional",
    "zh-TW": "chinese-traditional",
    "nan-Hant-TW": "chinese-traditional",
    ko: "korean"
  };

  // src/scripts/defaults.ts
  var navigator2 = globalThis.navigator;
  var iosUA = "iPad Simulator|iPhone Simulator|iPod Simulator|iPad|iPhone|iPod".split("|");
  var mobileUA = "Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini".split("|");
  var CURRENT_VERSION = "22.2.0";
  var API_DOMAIN = "https://services.bonjourr.fr";
  var ENVIRONNEMENT = globalThis.ENV ?? "TEST";
  var TAB_ID = crypto.randomUUID();
  var tabsBc = new BroadcastChannel("bonjourr_tabs");
  var SYSTEM_OS = iosUA.includes(navigator2.platform) || navigator2.userAgent?.includes("Mac") && "ontouchend" in document ? "ios" : navigator2.appVersion?.includes("Macintosh") ? "mac" : navigator2.appVersion?.includes("Windows") ? "windows" : navigator2.userAgent?.toLowerCase()?.includes("android") ? "android" : "unknown";
  var PLATFORM = globalThis.location?.protocol === "moz-extension:" ? "firefox" : globalThis.location?.protocol === "chrome-extension:" ? "chrome" : globalThis.location?.protocol === "safari-web-extension:" ? "safari" : "online";
  var BROWSER = navigator2?.userAgentData?.brands.some((b) => b.brand === "Microsoft Edge") ? "edge" : navigator2?.userAgentData?.brands.some((b) => b.brand === "Opera") ? "opera" : navigator2?.userAgentData?.brands.some((b) => b.brand === "Chromium") ? "chrome" : navigator2.userAgent?.toLowerCase()?.indexOf("firefox") > -1 ? "firefox" : navigator2.userAgent?.toLowerCase()?.indexOf("safari") > -1 ? "safari" : "other";
  var EXTENSION = PLATFORM === "online" ? void 0 : PLATFORM === "firefox" ? browser : chrome;
  var IS_MOBILE = navigator2.userAgentData ? navigator2.userAgentData.mobile : mobileUA.some((ua) => navigator2.userAgent.includes(ua));
  var DEFAULT_LANG = (() => {
    for (const code of Object.keys(langList)) {
      if (navigator2.language.replace("-", "_").includes(code)) {
        return code;
      }
    }
    return "en";
  })();
  var DEFAULT_UNIT = (() => {
    const locale = navigator2.language?.toLowerCase() ?? "";
    const imperialLocales = ["en-us", "en-lr", "my-mm", "en-bs", "en-bz", "en-ky", "en-pw"];
    return imperialLocales.some((l) => locale.startsWith(l)) ? "imperial" : "metric";
  })();
  var SEARCHBAR_ENGINES = [
    "default",
    "google",
    "ddg",
    "startpage",
    "qwant",
    "yahoo",
    "bing",
    "brave",
    "ecosia",
    "lilo",
    "baidu",
    "custom"
  ];
  var SYNC_DEFAULT = {
    about: {
      browser: PLATFORM,
      version: CURRENT_VERSION
    },
    showall: false,
    lang: DEFAULT_LANG,
    dark: "system",
    favicon: "",
    tabtitle: "",
    greeting: "",
    greetingsize: "3",
    greetingsmode: "auto",
    pagegap: 1,
    pagewidth: 1600,
    time: true,
    main: true,
    dateformat: "auto",
    quicklinks: true,
    textShadow: 0.2,
    announcements: "major",
    review: 0,
    css: "",
    hide: {},
    linkstyle: "medium",
    linktitles: true,
    linkbackgrounds: true,
    linknewtab: false,
    linksrow: 6,
    linkiconradius: 1.1,
    linkgroups: {
      on: false,
      selected: "default",
      groups: ["default"],
      pinned: [],
      synced: []
    },
    backgrounds: {
      type: "images",
      fadein: 600,
      blur: 15,
      bright: 0.8,
      frequency: "hour",
      color: "#185A63",
      urls: "",
      images: "bonjourr-images-daylight",
      videos: "bonjourr-videos-daylight",
      mute: true,
      queries: {},
      texture: {
        type: "none"
      }
    },
    clock: {
      size: 1,
      ampm: false,
      analog: false,
      seconds: false,
      ampmlabel: false,
      ampmposition: "top-left",
      worldclocks: false,
      timezone: "auto"
    },
    analogstyle: {
      face: "none",
      hands: "modern",
      shape: "round",
      border: "#ffff",
      background: "#fff2"
    },
    worldclocks: [],
    weather: {
      city: void 0,
      unit: DEFAULT_UNIT,
      show_unit: false,
      provider: "",
      moreinfo: "none",
      forecast: "auto",
      temperature: "actual",
      geolocation: "approximate"
    },
    greetingscustom: {
      morning: "",
      afternoon: "",
      evening: "",
      night: ""
    },
    notes: {
      on: false,
      width: 40,
      opacity: 0.1,
      align: "left"
    },
    searchbar: {
      on: false,
      opacity: 0.1,
      newtab: false,
      suggestions: true,
      engine: "default",
      request: "",
      placeholder: ""
    },
    quotes: {
      on: false,
      author: false,
      type: DEFAULT_LANG === "zh-CN" ? "hitokoto" : "classic",
      frequency: "day",
      last: void 0
    },
    pomodoro: {
      on: false,
      mode: "pomodoro",
      pause: 0,
      end: 0,
      timeFor: {
        pomodoro: 1500,
        break: 300,
        longbreak: 1200
      },
      focus: false,
      sound: true,
      volume: 0.7,
      alarm: "marimba",
      history: []
    },
    font: {
      family: "",
      size: "14",
      system: true,
      color: "#ffffff",
      weightlist: [],
      weight: SYSTEM_OS === "windows" ? "400" : "300"
    },
    supporters: {
      enabled: true
    },
    move: {
      selection: "single",
      layouts: {}
    }
  };
  var LOCAL_DEFAULT = {
    syncType: PLATFORM === "online" ? "off" : "browser",
    gistToken: "",
    userQuoteSelection: 0,
    translations: void 0,
    quotesCache: [],
    backgroundUrls: {},
    backgroundFiles: {},
    backgroundCollections: {},
    backgroundCompressFiles: true,
    backgroundLastChange: "",
    lastWeather: void 0
  };

  // src/scripts/shared/time.ts
  var sunrise = 420;
  var sunset = 1320;
  var dusk = 60;
  var userSetDate;
  function userDate(timezone) {
    const hasSetDate = !timezone && userSetDate;
    const isAuto = !timezone || timezone === "auto";
    let date = /* @__PURE__ */ new Date();
    if (hasSetDate) {
      return userSetDate;
    }
    if (isAuto) {
      return date;
    }
    if (BROWSER === "firefox") {
      if (timezone === "CST") {
        timezone = "-06:00";
      }
      if (timezone === "AST") {
        timezone = "-03:00";
      }
    }
    try {
      const intl = new Intl.DateTimeFormat("en", {
        timeZone: timezone,
        dateStyle: "medium",
        timeStyle: "medium"
      });
      date = new Date(intl.format(date));
    } catch (e) {
      console.warn(e);
      console.info("Your timezone is not valid");
    }
    return date;
  }
  function setUserDate(timezone) {
    userSetDate = userDate(timezone);
  }
  function daylightPeriod(time) {
    const mins = minutator(time ? new Date(time) : /* @__PURE__ */ new Date());
    if (mins >= 0 && mins <= sunrise - 60) {
      return "night";
    }
    if (mins <= sunrise + 60) {
      return "noon";
    }
    if (mins <= sunset - 60) {
      return "day";
    }
    if (mins <= sunset + 60) {
      return "evening";
    }
    if (mins >= sunset + 60) {
      return "night";
    }
    return "day";
  }
  function suntime(rise, set) {
    if (rise && set) {
      sunrise = minutator(new Date(rise));
      sunset = minutator(new Date(set));
    }
    const minutesInADay = 60 * 24;
    const maxTimeToDusk = 100;
    dusk = maxTimeToDusk - (minutesInADay - sunset) / 8;
    return {
      sunrise,
      sunset,
      dusk
    };
  }
  function needsChange(every, last) {
    const nowDate = userDate();
    const lastDate = last !== void 0 ? new Date(last) : nowDate;
    const changed = {
      date: nowDate.getDate() !== lastDate.getDate(),
      hour: nowDate.getHours() !== lastDate.getHours()
    };
    switch (every) {
      case "day":
        return changed.date;
      case "hour":
        return changed.date || changed.hour;
      case "tabs":
        return true;
      case "pause":
        return last === 0;
      case "period": {
        return last === 0 ? true : daylightPeriod() !== daylightPeriod(+lastDate);
      }
      default:
        return false;
    }
  }
  function minutator(date) {
    return date.getHours() * 60 + date.getMinutes();
  }

  // src/scripts/shared/generic.ts
  function stringMaxSize(str, size) {
    return str.length > size ? str.slice(0, size) : str;
  }
  function randomString(len) {
    const chars = "abcdefghijklmnopqr";
    return Array.from({ length: len }, () => chars[Math.floor(Math.random() * chars.length)]).join("");
  }
  function equalsCaseInsensitive(a, b) {
    return a.localeCompare(b, void 0, { sensitivity: "accent" }) === 0;
  }
  function opacityFromHex(hex) {
    return Number.parseInt(hex.slice(4), 16);
  }
  function rgbToHex(r, g, b) {
    return `#${componentToHex(r)}${componentToHex(g)}${componentToHex(b)}`;
  }
  function hexToRGB(hex) {
    const r = parseInt(hex.slice(1, 3), 16);
    const g = parseInt(hex.slice(3, 5), 16);
    const b = parseInt(hex.slice(5, 7), 16);
    return { r, g, b };
  }
  function getReadableTextColor(bgColor) {
    const brightness = Math.round((bgColor.r * 299 + bgColor.g * 587 + bgColor.b * 114) / 1e3);
    return brightness < 150 ? "white" : "#2b2b2b";
  }
  function componentToHex(c) {
    const hex = c.toString(16);
    return hex.length === 1 ? `${0}hex` : hex;
  }

  // src/scripts/dependencies/deepequal.ts
  function deepEqual(object1, object2) {
    function isObject2(object) {
      return object !== null && typeof object === "object";
    }
    const keys1 = Object.keys(object1);
    const keys2 = Object.keys(object2);
    if (keys1.length !== keys2.length) {
      return false;
    }
    for (const key of keys1) {
      const val1 = object1[key];
      const val2 = object2[key];
      const areObjects = isObject2(val1) && isObject2(val2);
      const areDifferent = areObjects && !deepEqual(val1, val2) || !areObjects && val1 !== val2;
      if (areDifferent) {
        return false;
      }
    }
    return true;
  }

  // src/scripts/utils/parse.ts
  function parse(str = "") {
    try {
      return JSON.parse(str);
    } catch (_error) {
      if (str !== "") {
        console.info("Cannot parse");
      }
    }
  }

  // src/scripts/storage.ts
  var storage = {
    sync: {
      get: syncGet,
      set: syncSet,
      remove: syncRemove,
      clear: syncClear
    },
    local: {
      get: localGet,
      set: localSet,
      remove: localRemove,
      clear: localClear
    },
    init,
    clearall,
    type: storageTypeFn()
  };
  function storageTypeFn() {
    let type = "webext-sync";
    function get() {
      return type;
    }
    function init2() {
      if (globalThis.chrome?.storage === void 0) {
        type = "localstorage";
        return "localstorage";
      }
      if (globalThis.startupStorage?.local?.syncStorage) {
        type = "webext-local";
        return "webext-local";
      }
      return type;
    }
    function change(type2, data) {
      if (globalThis.chrome?.storage === void 0) {
        return;
      }
      if (type2 === "local") {
        chrome.storage.local.set({ syncStorage: data });
      }
      if (type2 === "sync") {
        chrome.storage.local.remove("syncStorage").then(() => {
          chrome.storage.sync.set(data);
        });
      }
    }
    return { init: init2, get, change };
  }
  async function syncGet(key) {
    switch (storage.type.get()) {
      case "webext-sync": {
        const data = await chrome.storage.sync.get(key ?? null);
        return verifyDataAsSync(data);
      }
      case "webext-local": {
        const { syncStorage } = await chrome.storage.local.get();
        return verifyDataAsSync(syncStorage);
      }
      default: {
        return verifyDataAsSync(parse(localStorage.bonjourr) ?? {});
      }
    }
  }
  async function syncSet(keyval, fn = () => {
  }) {
    switch (storage.type.get()) {
      case "webext-sync": {
        chrome.storage.sync.set(keyval, fn);
        return;
      }
      case "webext-local": {
        const local = await chrome.storage.local.get("syncStorage");
        const data = {
          ...local.syncStorage,
          ...keyval
        };
        chrome.storage.local.set({ syncStorage: data }, fn);
        return;
      }
      case "localstorage": {
        if (typeof keyval !== "object") {
          return;
        }
        const data = verifyDataAsSync(parse(localStorage.bonjourr) ?? {});
        for (const [k, v] of Object.entries(keyval)) {
          data[k] = v;
        }
        localStorage.bonjourr = JSON.stringify(data ?? {});
        globalThis.dispatchEvent(new Event("storage"));
        return;
      }
      default:
    }
  }
  async function syncRemove(key) {
    switch (storage.type.get()) {
      case "webext-sync": {
        chrome.storage.sync.remove(key);
        return;
      }
      case "webext-local": {
        const { syncStorage } = await chrome.storage.local.get("syncStorage");
        if (syncStorage) {
          delete syncStorage[key];
          await chrome.storage.local.remove("syncStorage");
          chrome.storage.local.set({ syncStorage });
        }
        return;
      }
      case "localstorage": {
        localStorage.removeItem(key);
        return;
      }
      default:
    }
  }
  async function syncClear() {
    switch (storage.type.get()) {
      case "webext-sync": {
        await chrome.storage.sync.clear();
        return;
      }
      case "webext-local": {
        await chrome.storage.local.remove("syncStorage");
        return;
      }
      case "localstorage": {
        localStorage.removeItem("bonjourr");
        return;
      }
      default:
    }
  }
  function localSet(value) {
    switch (storage.type.get()) {
      case "webext-sync":
      case "webext-local": {
        chrome.storage.local.set(value);
        return;
      }
      default: {
        for (const [key, val] of Object.entries(value)) {
          if (typeof val === "string") {
            localStorage.setItem(key, val);
          } else {
            localStorage.setItem(key, JSON.stringify(val));
          }
        }
        return;
      }
    }
  }
  async function localGet(keys) {
    switch (storage.type.get()) {
      case "webext-sync":
      case "webext-local": {
        const data = await chrome.storage.local.get(keys);
        return data;
      }
      default: {
        const defaults = structuredClone(LOCAL_DEFAULT);
        const result = defaults;
        if (keys === void 0) {
          keys = Object.keys(LOCAL_DEFAULT);
        }
        if (typeof keys === "string") {
          keys = [keys];
        }
        const localKeys = Object.keys(globalThis.localStorage);
        const neededKeys = keys.filter((k) => localKeys.includes(k));
        for (const key of neededKeys) {
          const item = globalThis.localStorage.getItem(key);
          const isJson = item && (item.startsWith("{") || item.startsWith("["));
          const isBool = item && (item === "true" || item === "false");
          const isNoom = item && Number.isNaN(Number(item)) === false;
          if (isJson) {
            result[key] = parse(item);
          } else if (isBool) {
            result[key] = item === "true";
          } else if (isNoom) {
            result[key] = Number.parseFloat(item);
          } else {
            result[key] = item;
          }
        }
        return result;
      }
    }
  }
  function localRemove(key) {
    switch (storage.type.get()) {
      case "webext-sync":
      case "webext-local": {
        return chrome.storage.local.remove(key);
      }
      case "localstorage": {
        localStorage.removeItem(key);
        return Promise.resolve();
      }
      default: {
        return Promise.resolve();
      }
    }
  }
  async function localClear() {
    switch (storage.type.get()) {
      case "webext-sync": {
        chrome.storage.local.clear();
        return;
      }
      case "webext-local": {
        const sync = (await chrome.storage.local.get("syncStorage")).syncStorage;
        await chrome.storage.local.clear();
        await chrome.storage.local.set({ syncStorage: sync });
        return;
      }
      case "localstorage": {
        for (const key of Object.keys(LOCAL_DEFAULT)) {
          localStorage.removeItem(key);
        }
        return;
      }
      default:
    }
  }
  async function init() {
    const store = globalThis.startupStorage ?? {};
    if (PLATFORM !== "online" && !webextStoreReady()) {
      globalThis.pageReady = true;
      await new Promise((resolve2) => {
        document.addEventListener("webextstorage", (event) => {
          if (event.detail === "sync") {
            store.sync = globalThis.startupStorage.sync;
          }
          if (event.detail === "local") {
            store.local = globalThis.startupStorage.local;
          }
          if (webextStoreReady()) {
            resolve2(true);
          }
        });
      });
    }
    const type = storage.type.init();
    switch (type) {
      case "webext-local": {
        store.sync = globalThis.startupStorage.local?.syncStorage;
        store.local = globalThis.startupStorage.local;
        break;
      }
      case "webext-sync": {
        store.sync = globalThis.startupStorage.sync;
        store.local = globalThis.startupStorage.local;
        break;
      }
      case "localstorage": {
        store.sync = await syncGet();
        store.local = await localGet();
        break;
      }
      default:
    }
    if (Object.keys(store.sync ?? {})?.length === 0) {
      store.sync = await getSyncDefaults();
    }
    const sync = verifyDataAsSync(store.sync);
    const local = verifyDataAsLocal(store.local);
    return {
      sync,
      local
    };
    function webextStoreReady() {
      return !!store.sync && !!store.local;
    }
  }
  async function clearall() {
    sessionStorage.clear();
    Object.keys(localStorage).forEach((key) => {
      if (key.startsWith("bonjourr-archive-") === false) {
        localStorage.removeItem(key);
      }
    });
    try {
      globalThis.caches.delete("local-files");
    } catch (err) {
      console.warn(err);
    }
    globalThis.startupStorage = void 0;
    switch (storage.type.get()) {
      case "webext-sync": {
        await chrome.storage.sync.clear();
        await chrome.storage.local.clear();
        chrome.storage.sync.set(SYNC_DEFAULT);
        chrome.storage.local.set(LOCAL_DEFAULT);
        return;
      }
      case "webext-local": {
        await chrome.storage.sync.clear();
        await chrome.storage.local.clear();
        chrome.storage.local.set({
          ...LOCAL_DEFAULT,
          syncStorage: SYNC_DEFAULT
        });
        return;
      }
      default:
    }
  }
  async function getSyncDefaults() {
    try {
      const json = await (await fetch("config.json")).json();
      return verifyDataAsSync(json);
    } catch (_) {
    }
    return SYNC_DEFAULT;
  }
  function isStorageDefault(data) {
    const current = structuredClone(data);
    current.review = SYNC_DEFAULT.review;
    current.showall = SYNC_DEFAULT.showall;
    current.weather.city = SYNC_DEFAULT.weather.city;
    current.quotes.last = SYNC_DEFAULT.quotes.last;
    return deepEqual(current, SYNC_DEFAULT);
  }
  function verifyDataAsSync(data = {}) {
    return {
      ...SYNC_DEFAULT,
      ...data
    };
  }
  function verifyDataAsLocal(data = {}) {
    return {
      ...LOCAL_DEFAULT,
      ...data
    };
  }

  // src/scripts/utils/debounce.ts
  function debounce(callback, waitFor) {
    let timeout;
    const debounced = (...args) => {
      clearTimeout(timeout);
      timeout = setTimeout(() => callback(...args), waitFor);
    };
    debounced.cancel = () => clearTimeout(timeout);
    return debounced;
  }
  var eventDebounce = debounce((value) => {
    storage.sync.set(value);
  }, 400);

  // src/scripts/utils/translations.ts
  var trns;
  var currentTrnsLang = "en";
  async function setTranslationCache(language, local) {
    const lang = countryCodeToLanguageCode(language);
    if (lang === "en") {
      storage.local.remove("translations");
      trns = void 0;
      return;
    }
    const cachedLang = local?.translations?.lang;
    const useCache = local && cachedLang === lang;
    if (useCache) {
      trns = local.translations;
    } else {
      trns = await (await fetch(`../../_locales/${lang}/translations.json`)).json();
      storage.local.set({ translations: trns });
    }
    currentTrnsLang = lang;
  }
  function traduction(scope, lang = "en") {
    if (lang === "en") {
      return;
    }
    if (trns) {
      const dom = scope ?? document.body;
      const tags = dom.querySelectorAll(".trn");
      let text;
      for (const tag of tags) {
        text = tag.textContent?.trim() ?? "";
        tag.textContent = trns[text] ?? text;
      }
    }
    document.documentElement.setAttribute("lang", lang);
    currentTrnsLang = lang;
  }
  async function toggleTraduction(lang) {
    const tags = document.querySelectorAll(".trn");
    const toggleDict = {};
    const currentDict = { ...trns };
    let text;
    await setTranslationCache(lang);
    const newDict = (await storage.local.get("translations")).translations;
    if (newDict && currentDict?.lang === void 0) {
      for (const key of Object.keys(newDict)) {
        currentDict[key] = key;
      }
    }
    for (const [key, val] of Object.entries(currentDict)) {
      if (lang === "en") {
        toggleDict[val] = key;
      } else if (newDict) {
        toggleDict[val] = newDict[key];
      }
    }
    for (const tag of tags) {
      text = tag.textContent ?? "";
      tag.textContent = toggleDict[text] ?? text;
    }
    currentTrnsLang = lang;
  }
  function getLang() {
    return currentTrnsLang;
  }
  function tradThis(str) {
    return trns ? trns[str] ?? str : str;
  }
  function countryCodeToLanguageCode(lang) {
    let sanitizedLang = lang;
    if (lang.includes("ES")) {
      sanitizedLang = "es";
    }
    if (lang === "gr") {
      sanitizedLang = "el";
    }
    if (lang === "jp") {
      sanitizedLang = "ja";
    }
    if (lang === "cz") {
      sanitizedLang = "cs";
    }
    sanitizedLang = sanitizedLang.replace("_", "-");
    return sanitizedLang;
  }

  // src/scripts/features/links/helpers.ts
  function getDefaultIcon(url, refresh) {
    if (refresh) {
      return `${API_DOMAIN}/favicon/blob/${url}?r=${refresh}`;
    }
    return `${API_DOMAIN}/favicon/blob/${url}`;
  }
  function getSelectedIds() {
    const selected = document.querySelectorAll("li.selected");
    return Object.values(selected).map((li) => li.id);
  }
  function getLiFromEvent(event) {
    const path = event.composedPath();
    const li = path.find((el) => el.tagName === "LI" && el.className?.includes("link"));
    if (li) {
      return li;
    }
  }
  function getTitleFromEvent(event) {
    const path = event.composedPath();
    const title = path.find((el) => el.className?.includes("link-title"));
    if (title) {
      return title;
    }
  }
  function createTitle(link) {
    const isInline = document.getElementById("linkblocks")?.className.includes("inline");
    const isText = document.getElementById("linkblocks")?.className.includes("text");
    if (!(isInline || isText) || link?.title !== "") {
      return stringMaxSize(link.title ?? "", 64);
    }
    try {
      if (isElem(link)) {
        link.title = new URL(link.url)?.hostname.replace("www.", "");
      } else {
        link.title = tradThis("folder");
      }
    } catch (_) {
    }
    return link.title;
  }
  function getLink(data, id) {
    const val = data[id];
    if (isLink(val)) {
      return val;
    }
  }
  function getLinksInGroup(data, group) {
    const groupName = group ?? data.linkgroups.selected;
    const links = [];
    for (const value of Object.values(data)) {
      if (isLink(value) && (value?.parent ?? 0) === groupName) {
        links.push(value);
      }
    }
    links.sort((a, b) => a.order - b.order);
    return links;
  }
  function getLinksInFolder(data, id) {
    const links = [];
    for (const value of Object.values(data)) {
      if (isElem(value) && value?.parent === id) {
        links.push(value);
      }
    }
    links.sort((a, b) => a.order - b.order);
    return links;
  }
  function isLink(link) {
    return (link?._id ?? "").startsWith("links");
  }
  function isElem(link) {
    return link?.folder !== true;
  }
  function isLinkIconType(type) {
    return ["auto", "library", "file", "url"].includes(type);
  }
  function isNumber(value) {
    return !isNaN(parseFloat(value));
  }
  function isTypingTarget(target) {
    return target instanceof HTMLElement && (target instanceof HTMLInputElement || target instanceof HTMLTextAreaElement || target.isContentEditable);
  }

  // src/scripts/features/others.ts
  function favicon(val, isEvent) {
    function createFavicon(emoji) {
      const svgtext = `<text y=".9em" font-size="85">${emoji}</text>`;
      const svgtag = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">${svgtext}</svg>`;
      const svgdata = `data:image/svg+xml,${svgtag}`;
      const defaulticon = `/src/assets/favicons/favicon.ico`;
      const domfavicon = document.querySelector("#favicon");
      if (domfavicon) {
        domfavicon.href = emoji ? svgdata : defaulticon;
      }
    }
    if (isEvent) {
      const isEmojiOrShape = val?.match(/[\p{Emoji}\u25A0-\u25FF]/gu) && !val?.match(/[0-9a-z]/g);
      eventDebounce({ favicon: isEmojiOrShape ? val : "" });
      document.getElementById("head-favicon")?.remove();
    }
    if (BROWSER === "firefox") {
      setTimeout(() => createFavicon(val), 0);
    } else {
      createFavicon(val);
    }
  }
  function tabTitle(val, isEvent) {
    val ??= "";
    const tabTitle2 = stringMaxSize(val, 80) || tradThis("New tab");
    if (tabTitle2 !== document.title) {
      document.title = tabTitle2;
    }
    if (isEvent) {
      eventDebounce({ tabtitle: stringMaxSize(val, 80) });
    }
  }
  function pageControl(val, isEvent) {
    if (val.width) {
      const property = `${val.width ?? SYNC_DEFAULT.pagewidth}px`;
      document.documentElement.style.setProperty("--page-width", property);
      if (isEvent) {
        eventDebounce({ pagewidth: val.width });
      }
    }
    if (typeof val.gap === "number") {
      const property = `${val.gap ?? SYNC_DEFAULT.pagegap}em`;
      document.documentElement.style.setProperty("--page-gap", property);
      if (isEvent) {
        eventDebounce({ pagegap: val.gap });
      }
    }
  }
  function darkmode(value, isEvent) {
    const settings = document.querySelector("aside");
    let theme = "light";
    switch (value) {
      case "disable":
        theme = "light";
        break;
      case "enable":
        theme = "dark";
        break;
      case "system":
        theme = globalThis.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
        break;
      default: {
        const now = minutator(/* @__PURE__ */ new Date());
        const { sunrise: sunrise2, sunset: sunset2 } = suntime();
        theme = now <= sunrise2 || now > sunset2 ? "dark" : "light";
      }
    }
    document.documentElement.dataset.theme = theme;
    if (isEvent) {
      storage.sync.set({ dark: value });
      settings?.classList.add("change-theme");
      setTimeout(() => {
        settings?.classList.remove("change-theme");
      }, 333);
      return;
    }
    globalThis.matchMedia("(prefers-color-scheme: dark)").addEventListener("change", (event) => {
      document.documentElement.dataset.theme = event.matches ? "dark" : "light";
    });
  }
  function textShadow(init2, event) {
    const val = init2 ?? event;
    document.documentElement.style.setProperty("--text-shadow-alpha", (val ?? 0.2)?.toString());
    if (typeof event === "number") {
      eventDebounce({ textShadow: val });
    }
  }
  function altMode() {
    document.addEventListener("keydown", (event) => {
      if (event.key === "Alt" && !isTypingTarget(event.target)) {
        document.documentElement.dataset.altMode = "true";
      }
    });
    document.addEventListener("keyup", (event) => {
      if (event.key === "Alt") {
        document.documentElement.dataset.altMode = "false";
      }
    });
    self.addEventListener("blur", () => {
      document.documentElement.dataset.altMode = "false";
    });
    document.addEventListener("visibilitychange", () => {
      if (document.hidden) {
        document.documentElement.dataset.altMode = "false";
      }
    });
    document.addEventListener("contextmenu", () => {
      document.documentElement.dataset.altMode = "false";
    });
  }

  // src/scripts/utils/onsettingsload.ts
  var callbackList = [];
  var areSettingsLoaded = false;
  function onSettingsLoad(callback) {
    areSettingsLoaded ? callback() : callbackList.push(callback);
  }
  function loadCallbacks() {
    for (const callback of callbackList) {
      callback();
    }
    areSettingsLoaded = true;
  }

  // src/scripts/features/supporters.ts
  var import_mod = __toESM(require_dist());

  // src/scripts/features/popup.ts
  var ANNOUNCEMENT_URL = "https://ko-fi.com/post/Bonjourr-22-pomodoro-timer-new-look-right-click-F1F11P47J8";
  var ANNOUNCEMENT_TRNS = {
    en: "<b>Bonjourr just got a major update! \u2728</b> Discover what\u2019s new: Pomodoro timer, universal right-click menu, improved links, refreshed design, and more.",
    fr: "<b>Bonjourr vient d'avoir une mise \xE0 jour majeure ! \u2728</b> D\xE9couvrez les nouveaut\xE9s : minuteur Pomodoro, menu clic droit universel, liens am\xE9lior\xE9s, nouveau design, et bien plus encore.",
    de: "<b>Bonjourr hat ein gro\xDFes Update erhalten! \u2728</b> Entdecke die Neuerungen: Pomodoro-Timer, universelles Rechtsklick-Men\xFC, verbesserte Links, neues Design und mehr.",
    it: "<b>Bonjourr ha ricevuto un aggiornamento importante! \u2728</b> Scopri le novit\xE0: timer Pomodoro, menu clic destro universale, link migliorati, design rinnovato e molto altro.",
    es: "<b>\xA1Bonjourr acaba de recibir una gran actualizaci\xF3n! \u2728</b> Descubre las novedades: temporizador Pomodoro, men\xFA de clic derecho universal, enlaces mejorados, dise\xF1o renovado y mucho m\xE1s.",
    "pt-BR": "<b>Bonjourr acabou de receber uma grande atualiza\xE7\xE3o! \u2728</b> Descubra as novidades: timer Pomodoro, menu de clique direito universal, links aprimorados, design renovado e muito mais.",
    "pt-PT": "<b>O Bonjourr recebeu uma grande atualiza\xE7\xE3o! \u2728</b> Descubra as novidades: temporizador Pomodoro, menu de clique direito universal, liga\xE7\xF5es melhoradas, design renovado e muito mais.",
    nl: "<b>Bonjourr heeft een grote update gekregen! \u2728</b> Ontdek wat er nieuw is: Pomodoro-timer, universeel rechtermuisknopmenu, verbeterde links, vernieuwd design en meer.",
    da: "<b>Bonjourr har f\xE5et en stor opdatering! \u2728</b> Se nyhederne: Pomodoro-timer, universel h\xF8jreklikmenu, forbedrede links, opdateret design og meget mere.",
    sv: "<b>Bonjourr har f\xE5tt en stor uppdatering! \u2728</b> Uppt\xE4ck nyheterna: Pomodoro-timer, universell h\xF6gerklicksmeny, f\xF6rb\xE4ttrade l\xE4nkar, uppdaterad design och mer.",
    nb: "<b>Bonjourr har f\xE5tt en stor oppdatering! \u2728</b> Oppdag nyhetene: Pomodoro-timer, universell h\xF8yreklikkmeny, forbedrede lenker, oppdatert design og mer.",
    fi: "<b>Bonjourr on saanut suuren p\xE4ivityksen! \u2728</b> Tutustu uutuuksiin: Pomodoro-ajastin, yleinen hiiren oikean painikkeen valikko, parannetut linkit, uudistettu ulkoasu ja paljon muuta.",
    pl: "<b>Bonjourr otrzyma\u0142 du\u017C\u0105 aktualizacj\u0119! \u2728</b> Sprawd\u017A nowo\u015Bci: timer Pomodoro, uniwersalne menu prawego przycisku myszy, ulepszone linki, od\u015Bwie\u017Cony wygl\u0105d i wi\u0119cej.",
    cs: "<b>Bonjourr dostal velkou aktualizaci! \u2728</b> Objevte novinky: Pomodoro \u010Dasova\u010D, univerz\xE1ln\xED nab\xEDdka prav\xE9ho kliknut\xED, vylep\u0161en\xE9 odkazy, obnoven\xFD design a dal\u0161\xED.",
    hr: "<b>Bonjourr je dobio veliko a\u017Euriranje! \u2728</b> Otkrijte novosti: Pomodoro mjera\u010D vremena, univerzalni izbornik desnog klika, pobolj\u0161ane poveznice, osvje\u017Een dizajn i jo\u0161 mnogo toga.",
    sk: "<b>Bonjourr dostal ve\u013Ek\xFA aktualiz\xE1ciu! \u2728</b> Objavte novinky: Pomodoro \u010Dasova\u010D, univerz\xE1lne menu prav\xE9ho kliknutia, vylep\u0161en\xE9 odkazy, obnoven\xFD dizajn a viac.",
    hu: "<b>A Bonjourr jelent\u0151s friss\xEDt\xE9st kapott! \u2728</b> Fedezd fel az \xFAjdons\xE1gokat: Pomodoro id\u0151z\xEDt\u0151, univerz\xE1lis jobbklikk men\xFC, tov\xE1bbfejlesztett hivatkoz\xE1sok, meg\xFAjult diz\xE1jn \xE9s m\xE9g sok m\xE1s.",
    ro: "<b>Bonjourr a primit o actualizare major\u0103! \u2728</b> Descoper\u0103 nout\u0103\u021Bile: cronometru Pomodoro, meniu universal de clic dreapta, linkuri \xEEmbun\u0103t\u0103\u021Bite, design re\xEEmprosp\u0103tat \u0219i multe altele.",
    el: "<b>\u03A4\u03BF Bonjourr \u03BC\u03CC\u03BB\u03B9\u03C2 \u03B1\u03C0\u03AD\u03BA\u03C4\u03B7\u03C3\u03B5 \u03BC\u03B9\u03B1 \u03BC\u03B5\u03B3\u03AC\u03BB\u03B7 \u03B5\u03BD\u03B7\u03BC\u03AD\u03C1\u03C9\u03C3\u03B7! \u2728</b> \u0391\u03BD\u03B1\u03BA\u03B1\u03BB\u03CD\u03C8\u03C4\u03B5 \u03C4\u03B9 \u03BD\u03AD\u03BF \u03C5\u03C0\u03AC\u03C1\u03C7\u03B5\u03B9: \u03C7\u03C1\u03BF\u03BD\u03BF\u03B4\u03B9\u03B1\u03BA\u03CC\u03C0\u03C4\u03B7\u03C2 Pomodoro, \u03BA\u03B1\u03B8\u03BF\u03BB\u03B9\u03BA\u03CC \u03BC\u03B5\u03BD\u03BF\u03CD \u03B4\u03B5\u03BE\u03B9\u03BF\u03CD \u03BA\u03BB\u03B9\u03BA, \u03B2\u03B5\u03BB\u03C4\u03B9\u03C9\u03BC\u03AD\u03BD\u03BF\u03B9 \u03C3\u03CD\u03BD\u03B4\u03B5\u03C3\u03BC\u03BF\u03B9, \u03B1\u03BD\u03B1\u03BD\u03B5\u03C9\u03BC\u03AD\u03BD\u03BF\u03C2 \u03C3\u03C7\u03B5\u03B4\u03B9\u03B1\u03C3\u03BC\u03CC\u03C2 \u03BA\u03B1\u03B9 \u03C0\u03BF\u03BB\u03BB\u03AC \u03B1\u03BA\u03CC\u03BC\u03B7.",
    hy: "<b>Bonjourr-\u0568 \u057D\u057F\u0561\u0581\u0565\u056C \u0567 \u0574\u0565\u056E \u0569\u0561\u0580\u0574\u0561\u0581\u0578\u0582\u0574\u0589 \u2728</b> \u0532\u0561\u0581\u0561\u0570\u0561\u0575\u057F\u0565\u0584 \u0576\u0578\u0580\u0578\u0582\u0569\u0575\u0578\u0582\u0576\u0576\u0565\u0580\u0568\u2024 Pomodoro \u056A\u0561\u0574\u0561\u0576\u0561\u056F\u0561\u0579\u0561\u0583, \u0578\u0582\u0576\u056B\u057E\u0565\u0580\u057D\u0561\u056C \u0561\u057B \u057D\u0565\u0572\u0574\u0574\u0561\u0576 \u0568\u0576\u057F\u0580\u0561\u0581\u0561\u0576\u056F, \u0562\u0561\u0580\u0565\u056C\u0561\u057E\u057E\u0561\u056E \u0570\u0572\u0578\u0582\u0574\u0576\u0565\u0580, \u0569\u0561\u0580\u0574\u0561\u0581\u057E\u0561\u056E \u0564\u056B\u0566\u0561\u0575\u0576 \u0587 \u0561\u057E\u0565\u056C\u056B\u0576\u0589",
    sr: "<b>Bonjourr \u0458\u0435 \u0434\u043E\u0431\u0438\u043E \u0432\u0435\u043B\u0438\u043A\u043E \u0430\u0436\u0443\u0440\u0438\u0440\u0430\u045A\u0435! \u2728</b> \u041E\u0442\u043A\u0440\u0438\u0458\u0442\u0435 \u043D\u043E\u0432\u043E\u0441\u0442\u0438: Pomodoro \u0442\u0430\u0458\u043C\u0435\u0440, \u0443\u043D\u0438\u0432\u0435\u0440\u0437\u0430\u043B\u043D\u0438 \u043C\u0435\u043D\u0438 \u0434\u0435\u0441\u043D\u043E\u0433 \u043A\u043B\u0438\u043A\u0430, \u0443\u043D\u0430\u043F\u0440\u0435\u0452\u0435\u043D\u0435 \u0432\u0435\u0437\u0435, \u043E\u0441\u0432\u0435\u0436\u0435\u043D \u0434\u0438\u0437\u0430\u0458\u043D \u0438 \u0458\u043E\u0448 \u043C\u043D\u043E\u0433\u043E \u0442\u043E\u0433\u0430.",
    "sr-YU": "<b>Bonjourr je dobio veliko a\u017Euriranje! \u2728</b> Otkrijte novosti: Pomodoro tajmer, univerzalni meni desnog klika, unapre\u0111ene veze, osve\u017Een dizajn i jo\u0161 mnogo toga.",
    uk: "<b>Bonjourr \u043E\u0442\u0440\u0438\u043C\u0430\u0432 \u0432\u0435\u043B\u0438\u043A\u0435 \u043E\u043D\u043E\u0432\u043B\u0435\u043D\u043D\u044F! \u2728</b> \u0414\u0456\u0437\u043D\u0430\u0439\u0442\u0435\u0441\u044F, \u0449\u043E \u043D\u043E\u0432\u043E\u0433\u043E: \u0442\u0430\u0439\u043C\u0435\u0440 Pomodoro, \u0443\u043D\u0456\u0432\u0435\u0440\u0441\u0430\u043B\u044C\u043D\u0435 \u043C\u0435\u043D\u044E \u043F\u0440\u0430\u0432\u043E\u0457 \u043A\u043D\u043E\u043F\u043A\u0438 \u043C\u0438\u0448\u0456, \u043F\u043E\u043A\u0440\u0430\u0449\u0435\u043D\u0456 \u043F\u043E\u0441\u0438\u043B\u0430\u043D\u043D\u044F, \u043E\u043D\u043E\u0432\u043B\u0435\u043D\u0438\u0439 \u0434\u0438\u0437\u0430\u0439\u043D \u0442\u0430 \u0456\u043D\u0448\u0435.",
    ru: "<b>Bonjourr \u043F\u043E\u043B\u0443\u0447\u0438\u043B \u043A\u0440\u0443\u043F\u043D\u043E\u0435 \u043E\u0431\u043D\u043E\u0432\u043B\u0435\u043D\u0438\u0435! \u2728</b> \u0423\u0437\u043D\u0430\u0439\u0442\u0435, \u0447\u0442\u043E \u043D\u043E\u0432\u043E\u0433\u043E: \u0442\u0430\u0439\u043C\u0435\u0440 Pomodoro, \u0443\u043D\u0438\u0432\u0435\u0440\u0441\u0430\u043B\u044C\u043D\u043E\u0435 \u043A\u043E\u043D\u0442\u0435\u043A\u0441\u0442\u043D\u043E\u0435 \u043C\u0435\u043D\u044E, \u0443\u043B\u0443\u0447\u0448\u0435\u043D\u043D\u044B\u0435 \u0441\u0441\u044B\u043B\u043A\u0438, \u043E\u0431\u043D\u043E\u0432\u043B\u0451\u043D\u043D\u044B\u0439 \u0434\u0438\u0437\u0430\u0439\u043D \u0438 \u043C\u043D\u043E\u0433\u043E\u0435 \u0434\u0440\u0443\u0433\u043E\u0435.",
    tr: "<b>Bonjourr b\xFCy\xFCk bir g\xFCncelleme ald\u0131! \u2728</b> Yenilikleri ke\u015Ffedin: Pomodoro zamanlay\u0131c\u0131, evrensel sa\u011F t\u0131k men\xFCs\xFC, geli\u015Ftirilmi\u015F ba\u011Flant\u0131lar, yenilenmi\u015F tasar\u0131m ve daha fazlas\u0131.",
    ar: "<b>\u062D\u0635\u0644 Bonjourr \u0639\u0644\u0649 \u062A\u062D\u062F\u064A\u062B \u0643\u0628\u064A\u0631! \u2728</b> \u0627\u0643\u062A\u0634\u0641 \u0627\u0644\u0645\u064A\u0632\u0627\u062A \u0627\u0644\u062C\u062F\u064A\u062F\u0629: \u0645\u0624\u0642\u0651\u062A \u0628\u0648\u0645\u0648\u062F\u0648\u0631\u0648\u060C \u0642\u0627\u0626\u0645\u0629 \u0646\u0642\u0631 \u0628\u0632\u0631 \u0627\u0644\u0641\u0623\u0631\u0629 \u0627\u0644\u0623\u064A\u0645\u0646 \u0634\u0627\u0645\u0644\u0629\u060C \u0631\u0648\u0627\u0628\u0637 \u0645\u062D\u0633\u0651\u0646\u0629\u060C \u062A\u0635\u0645\u064A\u0645 \u0645\u064F\u062D\u062F\u0651\u062B \u0648\u0627\u0644\u0645\u0632\u064A\u062F.",
    fa: "<b>Bonjourr \u06CC\u06A9 \u0628\u0647\u200C\u0631\u0648\u0632\u0631\u0633\u0627\u0646\u06CC \u0628\u0632\u0631\u06AF \u062F\u0631\u06CC\u0627\u0641\u062A \u06A9\u0631\u062F! \u2728</b> \u0648\u06CC\u0698\u06AF\u06CC\u200C\u0647\u0627\u06CC \u062C\u062F\u06CC\u062F \u0631\u0627 \u06A9\u0634\u0641 \u06A9\u0646\u06CC\u062F: \u062A\u0627\u06CC\u0645\u0631 \u067E\u0648\u0645\u0648\u062F\u0648\u0631\u0648\u060C \u0645\u0646\u0648\u06CC \u06A9\u0644\u06CC\u06A9 \u0631\u0627\u0633\u062A \u0633\u0631\u0627\u0633\u0631\u06CC\u060C \u0644\u06CC\u0646\u06A9\u200C\u0647\u0627\u06CC \u0628\u0647\u0628\u0648\u062F\u06CC\u0627\u0641\u062A\u0647\u060C \u0637\u0631\u0627\u062D\u06CC \u062A\u0627\u0632\u0647 \u0648 \u0645\u0648\u0627\u0631\u062F \u0628\u06CC\u0634\u062A\u0631.",
    "zh-CN": "<b>Bonjourr \u521A\u521A\u8FCE\u6765\u4E00\u6B21\u91CD\u5927\u66F4\u65B0\uFF01\u2728</b> \u63A2\u7D22\u65B0\u529F\u80FD\uFF1A\u756A\u8304\u949F\u3001\u901A\u7528\u53F3\u952E\u83DC\u5355\u3001\u6539\u8FDB\u7684\u94FE\u63A5\u3001\u7115\u7136\u4E00\u65B0\u7684\u8BBE\u8BA1\u7B49\u3002",
    "zh-HK": "<b>Bonjourr \u525B\u525B\u63A8\u51FA\u91CD\u5927\u66F4\u65B0\uFF01\u2728</b> \u63A2\u7D22\u65B0\u529F\u80FD\uFF1A\u756A\u8304\u9418\u3001\u901A\u7528\u53F3\u9375\u9078\u55AE\u3001\u6539\u9032\u7684\u9023\u7D50\u3001\u7165\u7136\u4E00\u65B0\u7684\u8A2D\u8A08\u7B49\u3002",
    "zh-TW": "<b>Bonjourr \u525B\u63A8\u51FA\u91CD\u5927\u66F4\u65B0\uFF01\u2728</b> \u63A2\u7D22\u65B0\u529F\u80FD\uFF1A\u756A\u8304\u9418\u3001\u901A\u7528\u53F3\u9375\u9078\u55AE\u3001\u6539\u9032\u7684\u9023\u7D50\u3001\u5168\u65B0\u8A2D\u8A08\u7B49\u3002",
    ja: "<b>Bonjourr \u306B\u5927\u898F\u6A21\u30A2\u30C3\u30D7\u30C7\u30FC\u30C8\u304C\u767B\u5834\uFF01\u2728</b> \u65B0\u6A5F\u80FD\u3092\u3054\u7D39\u4ECB\uFF1A\u30DD\u30E2\u30C9\u30FC\u30ED\u30BF\u30A4\u30DE\u30FC\u3001\u30E6\u30CB\u30D0\u30FC\u30B5\u30EB\u53F3\u30AF\u30EA\u30C3\u30AF\u30E1\u30CB\u30E5\u30FC\u3001\u30EA\u30F3\u30AF\u306E\u6539\u5584\u3001\u5237\u65B0\u3055\u308C\u305F\u30C7\u30B6\u30A4\u30F3\u306A\u3069\u3002",
    id: "<b>Bonjourr baru saja mendapatkan pembaruan besar! \u2728</b> Temukan fitur baru: timer Pomodoro, menu klik kanan universal, tautan yang ditingkatkan, desain baru, dan banyak lagi.",
    ca: "<b>Bonjourr ha rebut una actualitzaci\xF3 important! \u2728</b> Descobreix les novetats: temporitzador Pomodoro, men\xFA de clic dret universal, enlla\xE7os millorats, disseny renovat i molt m\xE9s.",
    vi: "<b>Bonjourr v\u1EEBa nh\u1EADn \u0111\u01B0\u1EE3c b\u1EA3n c\u1EADp nh\u1EADt l\u1EDBn! \u2728</b> Kh\xE1m ph\xE1 c\xE1c t\xEDnh n\u0103ng m\u1EDBi: b\u1ED9 h\u1EB9n gi\u1EDD Pomodoro, menu chu\u1ED9t ph\u1EA3i to\xE0n c\u1EE5c, li\xEAn k\u1EBFt \u0111\u01B0\u1EE3c c\u1EA3i thi\u1EC7n, giao di\u1EC7n l\xE0m m\u1EDBi v\xE0 nhi\u1EC1u h\u01A1n n\u1EEFa."
  };
  var REVIEW_TEXT = "Love using Bonjourr? Consider giving us a review or donating, that would help a lot! \u{1F607}";
  var REVIEW_URLS = {
    chrome: "https://chrome.google.com/webstore/detail/bonjourr-%C2%B7-minimalist-lig/dlnejlppicbjfcfcedcflplfjajinajd/reviews",
    opera: "https://chrome.google.com/webstore/detail/bonjourr-%C2%B7-minimalist-lig/dlnejlppicbjfcfcedcflplfjajinajd/reviews",
    firefox: "https://addons.mozilla.org/en-US/firefox/addon/bonjourr-startpage/",
    safari: "https://apps.apple.com/fr/app/bonjourr-startpage/id1615431236",
    edge: "https://microsoftedge.microsoft.com/addons/detail/bonjourr/dehmmlejmefjphdeoagelkpaoolicmid",
    other: "https://bonjourr.fr/help#%EF%B8%8F-reviews"
  };
  function interfacePopup(init2, event) {
    if (event?.announcements !== void 0) {
      storage.sync.set({ announcements: event.announcements ? "major" : "off" });
      return;
    }
    if (!init2 || init2?.announce === "off") {
      return;
    }
    if (init2.old) {
      const major = (s) => Number.parseInt(s.split(".")[0]);
      const isMajorUpdate = major(init2.new) > major(init2.old);
      const announceMajor = init2.announce === "major" && isMajorUpdate;
      const canAnnounce = localStorage.hasUpdated === "true" || announceMajor;
      if (canAnnounce) {
        localStorage.hasUpdated = "true";
        displayPopup("announce", true);
        return;
      }
    }
    if (init2.review === -1) {
      return;
    }
    const reviewCounter = getReviewCounter();
    if (reviewCounter > 30) {
      displayPopup("review");
    }
    if (reviewCounter > 200) {
      closePopup();
    }
    localStorage.reviewCounter = reviewCounter + 1;
  }
  function displayPopup(type, showIcon = false) {
    const template = document.getElementById("popup-template");
    const doc2 = document.importNode(template.content, true);
    const popup = doc2.getElementById("popup");
    const desc = doc2.getElementById("popup_desc");
    const close = doc2.getElementById("popup_close");
    const buttons = doc2.getElementById("popup_buttons");
    if (!popup) {
      return;
    }
    if (type === "review") {
      desc.textContent = tradThis(REVIEW_TEXT);
      buttons.appendChild(createPopupButton(REVIEW_URLS[BROWSER], tradThis("Review")));
      buttons.appendChild(createPopupButton("https://ko-fi.com/bonjourr", tradThis("Donate")));
    }
    if (type === "announce") {
      const lang = getLang();
      const description = ANNOUNCEMENT_TRNS[lang] ?? ANNOUNCEMENT_TRNS.en;
      const buttontext = `${tradThis("Read the blog post")} \u{1F4DD}`;
      desc.innerHTML = description;
      buttons.appendChild(createPopupButton(ANNOUNCEMENT_URL, buttontext));
    }
    close?.addEventListener("click", closePopup);
    document.body.appendChild(popup);
    popup.classList.add(type);
    popup.classList.toggle("withIcon", showIcon);
    openPopup();
  }
  function createPopupButton(href, text) {
    const anchor = document.createElement("a");
    anchor.href = href;
    anchor.rel = "noreferrer";
    anchor.textContent = text;
    anchor.addEventListener("pointerdown", removePopupTrigger);
    return anchor;
  }
  function removePopupTrigger() {
    storage.sync.set({ review: -1 });
    localStorage.removeItem("reviewCounter");
    localStorage.removeItem("hasUpdated");
  }
  function openPopup() {
    setTimeout(() => document.getElementById("popup")?.classList.add("shown"), 800);
    setTimeout(() => document.getElementById("credit-container")?.setAttribute("style", "opacity: 0"), 400);
  }
  function closePopup() {
    setTimeout(() => document.getElementById("popup")?.remove(), 200);
    setTimeout(() => document.getElementById("credit-container")?.removeAttribute("style"), 600);
    document.getElementById("popup")?.classList.remove("shown");
    removePopupTrigger();
    console.info("Popup closed.");
  }
  function getReviewCounter() {
    return parseInt(localStorage.reviewCounter ?? 0);
  }

  // src/scripts/features/supporters.ts
  var monthBackgrounds = [
    "https://images.unsplash.com/photo-1457269449834-928af64c684d?q=80&w=700&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1613136391099-c2757009bb12?q=80&w=700&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1457670912047-6ad4485d43eb?q=80&w=700&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1528834342297-fdefb9a5a92b?q=80&w=700&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1486608766848-9b9fe0c37b9d?q=80&w=700&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1551516114-063f4cef7213?q=80&w=700&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1577353716826-9151912dcdd1?q=80&w=700&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1600699260196-aca47e6d2125?q=80&w=700&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1508255139162-e1f7b7288ab7?q=80&w=700&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1507834392452-0559ec185662?q=80&w=700&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1505567745926-ba89000d255a?q=80&w=700&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1513267257196-91be473829b3?q=80&w=700&auto=format&fit=crop"
  ];
  var modalDataLoaded = false;
  var glitterHandle = null;
  function supportersNotifications(init2, update) {
    if (update?.translate) {
      setNotifStrings();
      return;
    }
    if (update) {
      updateSupportersOption(update);
      return;
    }
    if (canShowSupporters(init2)) {
      onSettingsLoad(initSupportersModal);
      document.documentElement.dataset.supporters = "";
    }
  }
  function canShowSupporters(sync) {
    const hasSupportersDisabled = !sync?.supporters || !sync.supporters.enabled;
    const isNewUser = (getReviewCounter() <= 45 || getReviewCounter() === 0) && sync?.review !== -1;
    const closedMonth = sync?.supporters.closedMonth;
    const currentMonth = (/* @__PURE__ */ new Date()).getMonth() + 1;
    if (hasSupportersDisabled || isNewUser) {
      return false;
    } else {
      return currentMonth !== closedMonth;
    }
  }
  function initSupportersSettingsNotif(sync) {
    if (!canShowSupporters(sync)) {
      return;
    }
    const settingsNotifs = document.getElementById("supporters-notif-container");
    const settingsNotifContent = document.getElementById("supporters-notif-content");
    const notifClose = document.getElementById("supporters-notif-close");
    const image = monthBackgrounds[(/* @__PURE__ */ new Date()).getMonth()];
    settingsNotifs?.classList.add("shown");
    settingsNotifs?.style.setProperty("--background", `url(${image})`);
    setNotifStrings();
    (0, import_mod.onclickdown)(settingsNotifContent, (e) => {
      const isLeftClick = e instanceof PointerEvent && e.button === 0;
      if (isLeftClick) {
        toggleSupportersModal(true);
        loadModalData();
      }
    });
    (0, import_mod.onclickdown)(notifClose, () => {
      delete document.documentElement.dataset.supporters;
      settingsNotifs?.classList.remove("shown");
      updateSupportersOption({ closed: true });
    });
  }
  async function updateSupportersOption(update) {
    const data = await storage.sync.get();
    if (update.enabled !== void 0) {
      data.supporters.enabled = update.enabled;
    }
    if (update.closed !== void 0) {
      data.supporters.closedMonth = (/* @__PURE__ */ new Date()).getMonth() + 1;
    }
    storage.sync.set({ supporters: data.supporters });
  }
  function setNotifStrings() {
    const currentMonth = (/* @__PURE__ */ new Date()).toLocaleString("en-US", { month: "long" });
    const introString = `This ${currentMonth}, Bonjourr is brought to you by our lovely supporters.`;
    const notifTitle = document.getElementById("supporters-notif-title");
    const notifButton = document.getElementById("supporters-notif-button");
    if (notifTitle && notifButton) {
      notifTitle.textContent = tradThis(introString);
      notifButton.textContent = tradThis("Find out who they are");
    }
  }
  function initSupportersModal() {
    const template = document.getElementById("supporters-modal-template");
    const doc2 = document.importNode(template.content, true);
    const supportersModal = doc2.getElementById("supporters-modal-container");
    tradTemplateString(doc2, "header h2 span", "Supporters like you make Bonjourr possible");
    tradTemplateString(
      doc2,
      "header p",
      "Here are the wonderful people who supported us last month. Thanks to them, we can keep Bonjourr free, open source, and constantly evolving."
    );
    tradTemplateString(doc2, "#supporters-monthly h3", "Our monthly supporters");
    tradTemplateString(doc2, "#supporters-once h3", "Our one-time supporters");
    tradTemplateString(doc2, "footer p", "Join the community and get your name in Bonjourr.");
    tradTemplateString(doc2, "footer a span", "Donate");
    const close = doc2.getElementById("supporters-modal-close");
    document.querySelector("#interface")?.insertAdjacentElement("beforebegin", supportersModal);
    close.addEventListener("click", () => {
      toggleSupportersModal(false);
    });
    supportersModal.addEventListener("click", (event) => {
      if (event.target?.id === "supporters-modal-container") {
        toggleSupportersModal(false);
      }
    });
    document.addEventListener("keyup", (event) => {
      const hasDataset = document.documentElement.dataset.supportersModal !== void 0;
      const isEscape = event.key === "Escape";
      if (isEscape && hasDataset) {
        toggleSupportersModal(false);
      }
    });
  }
  function toggleSupportersModal(toggle) {
    document.dispatchEvent(new CustomEvent("toggle-settings"));
    if (toggle) {
      document.documentElement.dataset.supportersModal = "";
    } else {
      delete document.documentElement.dataset.supportersModal;
      glitterHandle?.stop();
    }
  }
  async function loadModalData() {
    if (glitterHandle === null && !document.body.className.includes("potato")) {
      glitterHandle = initGlitter();
    }
    glitterHandle?.start();
    if (modalDataLoaded) {
      return;
    }
    const currentMonth = (/* @__PURE__ */ new Date()).getMonth() + 1;
    const currentYear = (/* @__PURE__ */ new Date()).getFullYear();
    const isJanuary = currentMonth === 1;
    let monthToGet;
    let yearToGet = currentYear;
    if (isJanuary) {
      monthToGet = 12;
      yearToGet -= 1;
    } else {
      monthToGet = currentMonth - 1;
    }
    const modal = document.querySelector("#supporters-modal");
    const main = document.querySelector("#supporters-modal main");
    const monthly = document.querySelector("#supporters-monthly ul");
    const once = document.querySelector("#supporters-once ul");
    try {
      const url = `https://kofi.bonjourr.fr/list?date=${yearToGet}-${monthToGet}`;
      const supporters = await (await fetch(url))?.json();
      if (supporters.length > 0) {
        supporters.sort((a, b) => b.amount - a.amount);
        for (const supporter of supporters) {
          const parent = supporter.monthly ? monthly : once;
          const li = `<li>${supporter.name}</li>`;
          parent?.insertAdjacentHTML("beforeend", li);
        }
        modal?.classList.add("loaded");
      }
    } catch (_error) {
      if (main) {
        main.innerHTML = `<i>An error occured or we might be offline!</i>`;
      }
    }
    modalDataLoaded = true;
  }
  function tradTemplateString(doc2, selector, text) {
    const toTranslate = doc2.querySelector(selector);
    if (toTranslate) {
      toTranslate.innerText = tradThis(text);
    }
  }
  function initGlitter() {
    const snowfall = {};
    let rafId = null;
    snowfall.canvas = document.getElementById("glitter");
    snowfall.context = snowfall.canvas.getContext("2d");
    snowfall.snowflake = class {
      size;
      x;
      baseX;
      distance;
      opacity;
      radians;
      fallSpeed;
      y;
      constructor() {
        this.size = Math.random() * 1.5 + 1.5;
        this.x = Math.random() * snowfall.canvas.width - this.size - 1 + this.size + 1;
        this.baseX = this.x;
        this.distance = Math.random() * 50 + 1;
        this.opacity = Math.random();
        this.radians = Math.random() * Math.PI * 2;
        this.fallSpeed = Math.random() * 1.5 + 0.5;
        this.y = Math.random() * snowfall.canvas.height - this.size - 1 + this.size + 1;
      }
      draw = () => {
        if (this.y > snowfall.canvas.height + this.size) {
          this.y = -this.size;
        } else {
          this.y += this.fallSpeed;
        }
        this.radians += 0.02;
        this.x = this.baseX + this.distance * Math.sin(this.radians);
        snowfall.context.beginPath();
        snowfall.context.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        snowfall.context.shadowBlur = 8;
        snowfall.context.shadowColor = `rgb(255 202 56 / ${this.opacity})`;
        snowfall.context.fillStyle = `rgb(255 202 56 / ${this.opacity})`;
        snowfall.context.fill();
        snowfall.context.closePath();
        snowfall.context.shadowBlur = 0;
        snowfall.context.shadowColor = "transparent";
      };
    };
    snowfall.setup = () => {
      const particleDivisor = 2e4;
      snowfall.canvas.width = snowfall.context.canvas.clientWidth;
      snowfall.canvas.height = snowfall.context.canvas.clientHeight;
      snowfall.flakes = [];
      for (let x = 0; x < Math.ceil(snowfall.canvas.width * snowfall.canvas.height / particleDivisor); x++) {
        snowfall.flakes.push(new snowfall.snowflake());
      }
    };
    const snowfallDebounce = debounce(snowfall.setup, 200);
    snowfall.animate = () => {
      rafId = requestAnimationFrame(snowfall.animate);
      snowfall.context.clearRect(0, 0, snowfall.canvas.width, snowfall.canvas.height);
      for (const snowflake of snowfall.flakes) {
        snowflake.draw();
      }
    };
    return {
      start() {
        if (rafId !== null) {
          return;
        }
        snowfall.setup();
        globalThis.addEventListener("resize", snowfallDebounce);
        snowfall.animate();
      },
      stop() {
        if (rafId === null) {
          return;
        }
        cancelAnimationFrame(rafId);
        rafId = null;
        globalThis.removeEventListener("resize", snowfallDebounce);
      }
    };
  }

  // src/scripts/features/synchronization/gist.ts
  async function setGistStatus(token, id) {
    const wrapper = document.getElementById("gist-sync-status-wrapper");
    const base = document.getElementById("gist-sync-status-base");
    if (!token) {
      document.querySelector("#gist-sync-status")?.remove();
      base.textContent = tradThis("Waiting for authentification");
      return false;
    }
    if (!id) {
      document.querySelector("#gist-sync-status")?.remove();
      base.textContent = tradThis("No saved data yet");
      return false;
    }
    const resp = await fetch(`https://api.github.com/gists/${id}`, { headers: gistHeaders(token) });
    if (resp.status !== 200) {
      document.querySelector("#gist-sync-status")?.remove();
      base.textContent = tradThis("No saved data yet");
      return false;
    }
    const json = await resp.json();
    const isoDate = json.updated_at;
    const dateString = new Date(isoDate).toLocaleString(getLang(), {
      day: "2-digit",
      month: "2-digit",
      year: "2-digit",
      hour: "2-digit",
      minute: "2-digit"
    });
    document.querySelector("#gist-sync-status")?.remove();
    const link = document.createElement("a");
    link.id = "gist-sync-status";
    link.href = json.html_url;
    link.textContent = dateString;
    wrapper?.appendChild(link);
    base.textContent = tradThis("Last update");
    return true;
  }
  async function retrieveGist(token, id) {
    if (!token) {
      throw new Error(GIST_ERROR.TOKEN);
    }
    if (!id) {
      throw new Error(GIST_ERROR.ID);
    }
    const req = await fetch(`https://api.github.com/gists/${id}`, {
      headers: gistHeaders(token)
    });
    if (req.status === 200) {
      const gist = await req.json();
      const content = Object.values(gist?.files ?? {})[0]?.content ?? "";
      try {
        return JSON.parse(content);
      } catch (_) {
        throw new Error(GIST_ERROR.JSON);
      }
    }
    throw new Error(GIST_ERROR.OTHER);
  }
  async function sendGist(token, id, data) {
    const description = "File automatically generated by Bonjourr. Learn more on https://bonjourr.fr/docs/overview/#sync";
    const files = { "bonjourr-export.json": { content: JSON.stringify(data, void 0, 2) } };
    if (isStorageDefault(data)) {
      throw new Error(GIST_ERROR.DEFAULT);
    }
    if (id === void 0) {
      const resp2 = await fetch("https://api.github.com/gists", {
        body: JSON.stringify({ files, description, public: false }),
        headers: gistHeaders(token),
        method: "POST"
      });
      if (resp2.status === 401) {
        throw new Error(GIST_ERROR.TOKEN);
      }
      if (resp2.status >= 300) {
        throw new Error(GIST_ERROR.OTHER);
      }
      const api = await resp2.json();
      return api.id;
    }
    if (isGistIdValid(id) === false) {
      throw new Error(GIST_ERROR.ID);
    }
    const resp = await fetch(`https://api.github.com/gists/${id}`, {
      body: JSON.stringify({ files, description }),
      headers: gistHeaders(token),
      method: "PATCH"
    });
    if (resp.status === 404) {
      throw new Error(GIST_ERROR.NOGIST);
    }
    if (resp.status === 401) {
      throw new Error(GIST_ERROR.TOKEN);
    }
    if (resp.status >= 300) {
      throw new Error(GIST_ERROR.OTHER);
    }
    return id;
  }
  async function findGistId(token) {
    if (!token) {
      throw new Error(GIST_ERROR.TOKEN);
    }
    const resp = await fetch("https://api.github.com/gists?per_page=100", { headers: gistHeaders(token) });
    if (resp.status === 401) {
      throw new Error(GIST_ERROR.TOKEN);
    }
    if (resp.status >= 300) {
      throw new Error(GIST_ERROR.OTHER);
    }
    const list = await resp.json();
    const file = list.filter((gist) => !gist.public && gist.files["bonjourr-export.json"]?.size > 0)[0];
    return file?.id;
  }
  async function isGistTokenValid(token = "") {
    if (!token) {
      return false;
    }
    try {
      const isoDate = (/* @__PURE__ */ new Date())?.toISOString();
      const resp = await fetch(`https://api.github.com/gists?since=${isoDate}`, {
        headers: gistHeaders(token)
      });
      return resp.status === 200;
    } catch (_) {
      return false;
    }
  }
  function isGistIdValid(id) {
    if (!id || id.length > 32) {
      return false;
    }
    for (const char of id) {
      const code = char.charCodeAt(0);
      const isHex = code >= 97 && code <= 102 || code >= 48 && code <= 57;
      if (!isHex) {
        return false;
      }
    }
    return true;
  }
  function gistHeaders(token) {
    return {
      Authorization: `Bearer ${token}`,
      Accept: "application/vnd.github+json",
      "X-GitHub-Api-Version": "2022-11-28"
    };
  }
  var GIST_ERROR = {
    ID: tradThis("Invalid Gist ID in settings."),
    TOKEN: tradThis("Invalid token."),
    NOGIST: tradThis("Bonjourr file not found in Gists."),
    NOCONN: tradThis("Cannot connect to GitHub."),
    JSON: tradThis("Invalid JSON response from GitHub."),
    OTHER: tradThis("Unexpected GitHub Gist error."),
    DEFAULT: tradThis("Tried to send default config.")
  };

  // src/scripts/features/synchronization/url.ts
  async function receiveFromURL(url = "") {
    let resp;
    try {
      new URL(url);
    } catch (_) {
      throw new Error(DISTANT_ERROR.URL);
    }
    try {
      resp = await fetch(url);
    } catch (_) {
      try {
        resp = await fetch("https://services.bonjourr.fr/proxy", {
          method: "POST",
          body: url
        });
      } catch (_2) {
        throw new Error(DISTANT_ERROR.PROXY);
      }
    }
    try {
      return JSON.parse(await resp.text());
    } catch (_) {
      throw new Error(DISTANT_ERROR.JSON);
    }
  }
  async function isDistantUrlValid(url = "") {
    try {
      await receiveFromURL(url);
      return true;
    } catch (_) {
      return false;
    }
  }
  var DISTANT_ERROR = {
    URL: tradThis("Not a valid URL"),
    FAIL: tradThis("Cannot access resource right now"),
    PROXY: tradThis("Cannot access resource, even with proxy"),
    JSON: tradThis("Response is not valid JSON")
  };

  // src/scripts/shared/form.ts
  function networkForm(targetId2) {
    let form;
    let button;
    let message;
    let loadTimeout;
    onSettingsLoad(() => {
      form = document.getElementById(targetId2);
      button = form?.querySelector("button:last-of-type");
      message = form?.querySelector("small");
      for (const input of form.querySelectorAll("input")) {
        input?.addEventListener("input", () => {
          const placeholder = input.getAttribute("placeholder");
          const isSame = placeholder === input.value;
          const isEmpty = input.value === "";
          const isValid = form.checkValidity();
          form.classList.toggle("valid", isValid);
          form.classList.toggle("remove", isValid && (isSame || isEmpty));
        });
      }
      form?.addEventListener("input", () => {
        if (form.classList.contains("warn")) {
          form.classList.remove("warn");
          button.removeAttribute("disabled");
        }
      });
    });
    function reset() {
      form.classList.remove("load", "warn", "valid", "remove");
      button.removeAttribute("disabled");
      clearTimeout(loadTimeout);
    }
    function load() {
      loadTimeout = setTimeout(() => {
        form.classList.remove("warn");
        form.classList.add("valid", "load");
        button.setAttribute("disabled", "disabled");
      }, 50);
    }
    function warn(err) {
      form.classList.add("warn");
      form.classList.remove("load");
      button.setAttribute("disabled", "");
      message.textContent = err;
      clearTimeout(loadTimeout);
    }
    function accept(inputId, value) {
      if (inputId && form.checkValidity()) {
        form.classList.remove("valid");
        const input = document.getElementById(inputId);
        if (input && value) {
          input.setAttribute("placeholder", value);
        }
      }
      clearTimeout(loadTimeout);
      setTimeout(() => reset(), 200);
    }
    return {
      load,
      warn,
      reset,
      accept
    };
  }

  // src/scripts/shared/dom.ts
  function webkitRangeTrackColor(input) {
    const { min, max, value } = input;
    input.style.setProperty("--value", value);
    input.style.setProperty("--min", min || "0");
    input.style.setProperty("--max", max || "100");
  }
  function toggleDisabled(element, force) {
    if (element) {
      const toggle = force !== void 0 ? force : typeof element.getAttribute("disabled") === "string";
      if (toggle) {
        element.setAttribute("disabled", "");
      } else {
        element.removeAttribute("disabled");
      }
    }
  }
  function getSplitRangeData(id) {
    const wrapper = document.querySelector(`#${id.replace("#", "")}`);
    const range = wrapper?.querySelector("input");
    const button = wrapper?.querySelector("button");
    const span = wrapper?.querySelectorAll("span");
    const isButtonOn = button?.classList?.contains("on");
    return {
      range: range?.value,
      button: span?.[isButtonOn ? 1 : 0].dataset.value
    };
  }
  function getHTMLTemplate(id, selector) {
    const template = document.getElementById(id);
    const clone = template?.content.cloneNode(true);
    return clone?.querySelector(selector);
  }
  function getComposedPath(target) {
    if (!target) {
      return [];
    }
    const path = [];
    let node = target;
    while (node) {
      path.push(node);
      node = node.parentElement;
    }
    return path;
  }
  function turnRefreshButton(event, canTurn) {
    let target = event.target;
    if (target.tagName === "path" && target.parentElement) target = target.parentElement;
    if (target.tagName !== "svg" && target.firstElementChild) target = target.firstElementChild;
    if (target.tagName !== "svg" && target.firstElementChild) target = target.firstElementChild;
    target?.animate(
      canTurn ? [{ transform: "rotate(360deg)" }] : [{ transform: "rotate(0deg)" }, { transform: "rotate(90deg)" }, { transform: "rotate(0deg)" }],
      { duration: 600, easing: "ease-out" }
    );
  }
  function fadeOut() {
    const dominterface3 = document.getElementById("interface");
    dominterface3.click();
    dominterface3.style.transition = "opacity .4s";
    setTimeout(() => {
      dominterface3.style.opacity = "0";
    });
    setTimeout(() => {
      location.reload();
    }, 400);
  }
  var inputThrottle = (elem, time = 800) => {
    let isThrottled = true;
    setTimeout(() => {
      isThrottled = false;
      elem.removeAttribute("disabled");
    }, time);
    if (isThrottled) {
      elem.setAttribute("disabled", "");
    }
  };
  function hexColorFromSplitRange(id) {
    const { range, button } = getSplitRangeData(id);
    const opacity = Number.parseInt(range ?? "0");
    const color = button === "dark" ? "#000" : "#fff";
    const alpha = opacity.toString(16);
    return color + alpha;
  }
  function colorInput(id, color) {
    const wrapper = document.getElementById(id);
    const button = wrapper?.querySelector("button");
    const input = wrapper?.querySelector("input");
    if (button && input) {
      color ??= input.value;
      button.textContent = color;
      button.style.color = getReadableTextColor(hexToRGB(color));
      const rgbColor = hexToRGB(color);
      button.style.setProperty("--input-color", `${rgbColor.r} ${rgbColor.g} ${rgbColor.b}`);
    }
  }

  // src/scripts/features/synchronization/index.ts
  var gistsyncform = networkForm("f_gistsync");
  var urlsyncform = networkForm("f_urlsync");
  function synchronization(init2, update) {
    if (init2) {
      onSettingsLoad(() => {
        toggleSyncSettingsOption(init2);
      });
    }
    if (update) {
      updateSyncOption(update);
    }
  }
  async function updateSyncOption(update) {
    const local = await storage.local.get(["gistId", "gistToken", "distantUrl", "syncType"]);
    const data = await storage.sync.get();
    if (update.down) {
      if (local.syncType === "gist") {
        gistsyncform.load();
        try {
          const id = local.gistId ?? "";
          const token = local.gistToken ?? "";
          const update2 = await retrieveGist(token, id);
          storage.sync.set(update2);
          fadeOut();
        } catch (err) {
          gistsyncform.warn(err);
        }
      }
      if (local.syncType === "url") {
        urlsyncform.load();
        try {
          const update2 = await receiveFromURL(local.distantUrl);
          storage.sync.set(update2);
          fadeOut();
        } catch (err) {
          urlsyncform.warn(err);
        }
      }
    }
    if (update.up) {
      if (local.syncType === "gist") {
        gistsyncform.load();
        try {
          const token = local.gistToken ?? "";
          const id = await sendGist(token, local.gistId, data);
          gistsyncform.accept();
          local.gistId = id;
          storage.local.set({ gistId: id });
          toggleSyncSettingsOption(local);
        } catch (error) {
          gistsyncform.warn(error);
        }
      }
    }
    if (update.gistToken === "") {
      local.gistToken = "";
      local.gistId = "";
      storage.local.remove("gistToken");
      storage.local.remove("gistId");
      gistsyncform.accept();
      toggleSyncSettingsOption(local);
      return;
    }
    if (update.url === "") {
      local.distantUrl = "";
      storage.local.remove("distantUrl");
      toggleSyncSettingsOption(local);
      return;
    }
    if (update.gistToken) {
      gistsyncform.load();
      try {
        local.gistToken = update.gistToken;
        local.gistId = await findGistId(local.gistToken);
        storage.local.set({ gistId: local.gistId });
        storage.local.set({ gistToken: local.gistToken });
        gistsyncform.accept();
        toggleSyncSettingsOption(local);
      } catch (error) {
        gistsyncform.warn(error);
      }
    }
    if (update.url) {
      urlsyncform.load();
      try {
        await receiveFromURL(update.url);
        urlsyncform.accept("i_urlsync", update.url);
        local.distantUrl = update.url;
        storage.local.set({ distantUrl: update.url });
        toggleSyncSettingsOption(local);
      } catch (error) {
        urlsyncform.warn(error);
      }
    }
    if (isSyncType(update.type)) {
      local.syncType = update.type;
      storage.local.set({ syncType: local.syncType });
      storage.type.change(update.type === "browser" ? "sync" : "local", data);
      toggleSyncSettingsOption(local);
      handleStoragePersistence(update.type);
    }
    if (update.firefoxPersist) {
      localStorage.choseStoragePersistence = "true";
      toggleSyncSettingsOption(local);
    }
  }
  async function handleStoragePersistence(type) {
    if (!navigator?.storage?.persisted) {
      return;
    }
    const persisted = await navigator.storage.persisted();
    if (type !== "off") {
      return;
    }
    if (!persisted) {
      await navigator.storage.persist();
    }
  }
  async function toggleSyncSettingsOption(local) {
    const gistId = local?.gistId;
    const gistToken = local?.gistToken;
    const distantUrl = local?.distantUrl;
    const type = local?.syncType;
    const iGistsync = document.querySelector("#i_gistsync");
    const iUrlsync = document.querySelector("#i_urlsync");
    const bGistdown = document.querySelector("#b_gistdown");
    const bGistup = document.querySelector("#b_gistup");
    const bUrldown = document.querySelector("#b_urldown");
    bGistdown?.setAttribute("disabled", "");
    bUrldown?.setAttribute("disabled", "");
    bGistup?.setAttribute("disabled", "");
    if (iGistsync && gistToken) {
      iGistsync.value = gistToken;
    }
    if (iUrlsync && distantUrl) {
      iUrlsync.value = distantUrl;
    }
    const choseStoragePersistence = localStorage.choseStoragePersistence === "true";
    document.getElementById("disabled-sync")?.classList.toggle("shown", !choseStoragePersistence);
    switch (type) {
      case "off":
      case "browser": {
        document.getElementById("url-sync")?.classList.remove("shown");
        document.getElementById("sync-freq")?.classList.remove("shown");
        document.getElementById("gist-sync")?.classList.remove("shown");
        break;
      }
      case "gist": {
        document.getElementById("gist-sync")?.classList.add("shown");
        document.getElementById("url-sync")?.classList.remove("shown");
        document.getElementById("disabled-sync")?.classList.remove("shown");
        const isValid = await isGistTokenValid(gistToken);
        if (isValid) {
          bGistdown?.removeAttribute("disabled");
          bGistup?.removeAttribute("disabled");
        }
        setGistStatus(gistToken, gistId);
        break;
      }
      case "url": {
        document.getElementById("url-sync")?.classList.add("shown");
        document.getElementById("gist-sync")?.classList.remove("shown");
        document.getElementById("disabled-sync")?.classList.remove("shown");
        if (await isDistantUrlValid(distantUrl)) {
          bUrldown?.removeAttribute("disabled");
        }
        break;
      }
      default:
    }
  }
  function isSyncType(val = "") {
    return ["browser", "gist", "url", "off"].includes(val);
  }

  // src/scripts/features/backgrounds/urls.ts
  var globalUrlValue = "";
  var backgroundUrlsEditor;
  function urlsCacheControl(backgrounds, local, needNew) {
    const urls = lastUsedValidUrls(local.backgroundUrls);
    if (urls.length === 0) {
      removeBackgrounds();
      return;
    }
    const url = urls[0];
    const freq = backgrounds.frequency;
    const metadata = local.backgroundUrls[url];
    const lastUsed = new Date(metadata.lastUsed).getTime();
    needNew ??= needsChange(freq, lastUsed);
    if (urls.length > 1 && needNew) {
      urls.shift();
      const rand = Math.floor(Math.random() * urls.length);
      const url2 = urls[rand];
      const now = (/* @__PURE__ */ new Date()).toString();
      const metadata2 = local.backgroundUrls[url2];
      applyBackground(urlAsBackgroundMedia(url2, metadata2));
      local.backgroundUrls[url2].lastUsed = now;
      storage.local.set(local);
      return;
    }
    applyBackground(urlAsBackgroundMedia(url, metadata));
  }
  function lastUsedValidUrls(metadatas) {
    const getTime = (item) => new Date(item.lastUsed).getTime();
    const entries = Object.entries(metadatas);
    const sortedUrls = entries.toSorted((a, b) => getTime(b[1]) - getTime(a[1]));
    const validOnly = sortedUrls.filter(([_, metadata]) => metadata.state === "OK");
    const urls = validOnly.map(([url, _]) => url);
    return urls;
  }
  function urlAsBackgroundMedia(url, metadata) {
    if (metadata.format === "video") {
      return {
        format: "video",
        duration: metadata.duration ?? 8,
        page: "",
        username: "",
        urls: {
          full: url,
          small: url
        }
      };
    }
    return {
      format: "image",
      page: "",
      username: "",
      urls: {
        full: url,
        small: url
      }
    };
  }
  function getUrlsAsCollection(local) {
    const entries = Object.entries(local.backgroundUrls);
    const working = entries.filter((entry) => entry[1].state === "OK");
    const sorted = working.toSorted((a, b) => new Date(a[1].lastUsed).getTime() - new Date(b[1].lastUsed).getTime());
    const urls = sorted.map(([key]) => key);
    return [
      urls,
      urls.map((url) => ({
        format: "image",
        page: "",
        username: "",
        urls: {
          full: url,
          medium: url,
          small: url
        }
      }))
    ];
  }
  async function initUrlsEditor(backgrounds, local) {
    globalUrlValue = backgrounds.urls;
    const { createBackgroundUrlsEditor: createBackgroundUrlsEditor2 } = await Promise.resolve().then(() => (init_csseditor(), csseditor_exports));
    const options = {
      language: "uri",
      value: backgrounds.urls
    };
    backgroundUrlsEditor = createBackgroundUrlsEditor2(options);
    const tabCommand = backgroundUrlsEditor.keyCommandMap.Tab;
    backgroundUrlsEditor.textarea.id = "background-urls-editor-textarea";
    backgroundUrlsEditor.textarea.maxLength = 8080;
    backgroundUrlsEditor.textarea.placeholder = "https://picsum.photos/200\n";
    backgroundUrlsEditor.on("update", (value) => {
      toggleUrlsButton(globalUrlValue, stringMaxSize(value, 8080));
    });
    backgroundUrlsEditor.keyCommandMap.Tab = (e, selection, value) => {
      if (document.body.matches(".tabbing")) {
        return false;
      }
      return tabCommand?.(e, selection, value);
    };
    for (const [url, { state }] of Object.entries(local.backgroundUrls)) {
      highlightUrlsEditorLine(url, state);
    }
  }
  function highlightUrlsEditorLine(url, state) {
    const lines = backgroundUrlsEditor.wrapper.querySelectorAll(".pce-line");
    const line = lines.values().find((l) => l.textContent === `${url}
`);
    const noContent = !line?.textContent?.replace("\n", "");
    const lineState = noContent ? "NONE" : state;
    line?.classList.toggle("loading", lineState === "LOADING");
    line?.classList.toggle("error", lineState === "NOT_MEDIA");
    line?.classList.toggle("good", lineState === "OK");
    line?.classList.toggle("warn", lineState === "CANT_REACH" || lineState === "NOT_URL");
  }
  function toggleUrlsButton(storage2, value) {
    const button = document.querySelector("#b_background-urls");
    if (storage2 === value) {
      button?.setAttribute("disabled", "");
    } else {
      button?.removeAttribute("disabled");
    }
  }
  function applyUrls(backgrounds) {
    const editorValue = backgroundUrlsEditor.value;
    const backgroundUrls = buildBackgroundUrls(parseUrlList(editorValue), "NONE");
    globalUrlValue = backgrounds.urls = editorValue;
    storage.local.set({ backgroundUrls });
    storage.sync.set({ backgrounds });
    toggleUrlsButton("osef", "osef");
    checkUrlInfos(backgroundUrls);
  }
  function parseUrlList(urls) {
    return urls.split("\n").map((url) => url.trim()).filter((url) => url.startsWith("http"));
  }
  function buildBackgroundUrls(urls, initialState = "OK") {
    const backgroundUrls = {};
    for (const url of urls) {
      backgroundUrls[url] = {
        lastUsed: (/* @__PURE__ */ new Date()).toString(),
        format: formatFromFileExt(url),
        state: initialState
      };
    }
    return backgroundUrls;
  }
  async function checkUrlInfos(backgroundUrls) {
    const entries = Object.entries(backgroundUrls);
    for (const [url] of entries) {
      highlightUrlsEditorLine(url, "LOADING");
    }
    for (const [url, item] of entries) {
      const infos = await getUrlInfos(url);
      item.state = infos.state;
      item.format = infos.format;
      item.duration = infos.duration;
      backgroundUrls[url] = item;
      highlightUrlsEditorLine(url, item.state);
      storage.local.set({ backgroundUrls });
    }
  }
  async function getUrlInfos(item) {
    const isVideo = () => type.includes("video/");
    const isMedia = () => type.startsWith("video/") || type.startsWith("image/");
    const infos = {
      "format": formatFromFileExt(item),
      "state": "NONE",
      "needsProxy": false
    };
    let type = "";
    let resp;
    let url;
    try {
      url = new URL(item);
    } catch (_) {
      infos.state = "NOT_URL";
      return infos;
    }
    try {
      resp = await fetch(url);
      type = resp.headers.get("content-type") ?? "";
      if (isMedia()) {
        infos.state = "OK";
      } else {
        infos.state = "NOT_MEDIA";
        return infos;
      }
    } catch (_) {
      try {
        infos.needsProxy = true;
        resp = await fetch(`https://services.bonjourr.fr/backgrounds/proxy/${url}`);
        type = resp.headers.get("content-type") ?? "";
        if (isMedia()) {
          infos.state = "OK";
        } else {
          infos.state = "NOT_MEDIA";
          return infos;
        }
      } catch (_2) {
        infos.state = "CANT_REACH";
        return infos;
      }
    }
    if (isVideo()) {
      infos.format = "video";
    } else {
      infos.format = "image";
    }
    if (infos.format === "video") {
      const video = document.createElement("video");
      infos.duration = await new Promise((resolve2, reject) => {
        setTimeout(() => reject(), 5e3);
        video.onloadedmetadata = () => resolve2(Math.floor(video.duration));
        video.src = item;
      });
      if (!infos.duration) {
        infos.state = "LOADING";
        return infos;
      }
    }
    return infos;
  }
  function formatFromFileExt(url) {
    url = url.trimEnd();
    if (url.endsWith("mp4") || url.endsWith("webm")) {
      return "video";
    } else {
      return "image";
    }
  }

  // src/scripts/utils/notifications.ts
  function settingsNotifications(notifs) {
    onSettingsLoad(() => {
      for (const [id, state] of Object.entries(notifs)) {
        document.getElementById(id)?.classList?.toggle("shown", state);
      }
      const wrapper = document.getElementById("settings-notifications");
      const hasNotifs = document.querySelectorAll("#settings-notifications .param.shown").length > 0;
      wrapper?.classList?.toggle("shown", hasNotifs);
    });
  }

  // src/scripts/utils/permissions.ts
  async function getPermissions(...args) {
    switch (PLATFORM) {
      case "online": {
        return true;
      }
      case "firefox": {
        return await browser.permissions.request({
          permissions: [...args]
        });
      }
      default: {
        return chrome.permissions.request({
          permissions: [...args]
        }) ?? false;
      }
    }
  }

  // src/scripts/utils/bundlelinks.ts
  function bundleLinks(data) {
    const res = [];
    Object.entries(data).map(([key, val]) => {
      if (key.length === 11 && key.startsWith("links")) {
        res.push(val);
      }
    });
    return res;
  }

  // src/scripts/features/links/bookmarks.ts
  var import_mod2 = __toESM(require_dist());
  var browserBookmarkFolders = [];
  async function linksImport() {
    const data = await storage.sync.get();
    for (const node of document.querySelectorAll("#bookmarks-container > *") ?? []) {
      node.remove();
    }
    initBookmarkSync(data).then(() => {
      createBookmarksDialog();
    });
  }
  async function initBookmarkSync(data) {
    let treenode = await getBookmarkTree();
    let permission = !!treenode;
    if (!permission) {
      try {
        permission = await getPermissions("topSites", "bookmarks");
      } catch (_error) {
        settingsNotifications({ "accept-permissions": true });
      }
    }
    if (!permission) {
      return;
    }
    treenode = await getBookmarkTree();
    if (treenode) {
      browserBookmarkFolders = bookmarkTreeToFolderList(treenode[0], data);
    }
  }
  function syncBookmarks(group) {
    const folder = browserBookmarkFolders.find((folder2) => folder2.title === group);
    const syncedLinks = [];
    if (folder) {
      for (const bookmark of folder.bookmarks) {
        syncedLinks.push(validateLink(bookmark.title, bookmark.url, folder.title));
      }
    }
    return syncedLinks;
  }
  function createBookmarksDialog() {
    const bookmarkFolders = browserBookmarkFolders;
    let bookmarksdom = document.querySelector("#bookmarks");
    let container2 = document.querySelector("#bookmarks-container");
    if (!bookmarksdom) {
      bookmarksdom = getHTMLTemplate("bookmarks-dialog-template", "dialog");
      container2 = bookmarksdom.querySelector("#bookmarks-container");
      const closebutton = bookmarksdom.querySelector("#bmk_close");
      const applybutton = bookmarksdom.querySelector("#bmk_apply");
      bookmarksdom?.addEventListener("click", closeDialog);
      (0, import_mod2.onclickdown)(applybutton, importSelectedBookmarks);
      (0, import_mod2.onclickdown)(closebutton, closeDialog);
      document.body.appendChild(bookmarksdom);
    }
    for (const list of bookmarkFolders) {
      const folder = getHTMLTemplate("bookmarks-folder-template", "div");
      const selectButton = folder.querySelector(".b_bookmarks-folder-select");
      const syncButton = folder.querySelector(".b_bookmarks-folder-sync");
      const ol = folder.querySelector("ol");
      const h2 = folder.querySelector(".bookmarks-folder-title-content");
      if (!(ol && h2)) {
        continue;
      }
      h2.textContent = list.title;
      (0, import_mod2.onclickdown)(selectButton, () => toggleFolderSelect(folder));
      (0, import_mod2.onclickdown)(syncButton, () => toggleFolderSync(folder));
      folder.classList.toggle("used", list.used);
      folder.dataset.title = list.title;
      container2?.appendChild(folder);
      if (list.title === "topsites" && syncButton) {
        h2.textContent = tradThis("Most visited");
        folder.classList.add("synced");
        syncButton.setAttribute("disabled", "");
        syncButton.remove();
      }
      for (const bookmark of list.bookmarks) {
        const li = getHTMLTemplate("bookmarks-item-template", "li");
        const liButton = li.querySelector("button");
        const liTitle = li.querySelector(".bookmark-title");
        const liUrl = li.querySelector(".bookmark-url");
        const liImg = li.querySelector("img");
        if (!(liTitle && liButton && liUrl && liImg && bookmark.url.startsWith("http"))) {
          continue;
        }
        const url = new URL(bookmark.url);
        liImg.src = `${API_DOMAIN}/favicon/blob/${url.origin}`;
        liTitle.textContent = bookmark.title;
        liUrl.textContent = url.href.replace(url.protocol, "").replace("//", "").replace("www.", "").slice(0, -1).replace("/", "");
        (0, import_mod2.onclickdown)(liButton, () => li.classList.toggle("selected"));
        (0, import_mod2.onclickdown)(liButton, handleApplyButtonText);
        if (bookmark.used) {
          liButton.setAttribute("disabled", "");
        }
        li.id = bookmark.id;
        ol?.appendChild(li);
      }
    }
    document.getElementById("bmk_apply")?.setAttribute("disabled", "");
    document.dispatchEvent(new CustomEvent("toggle-settings"));
    traduction(bookmarksdom, getLang());
    bookmarksdom.showModal();
    setTimeout(() => bookmarksdom.classList.add("shown"));
  }
  function importSelectedBookmarks() {
    const folders = browserBookmarkFolders;
    const bookmarksdom = document.getElementById("bookmarks");
    const selectedLinks = bookmarksdom.querySelectorAll(".bookmarks-folder li.selected");
    const selectedFolders = bookmarksdom.querySelectorAll(".bookmarks-folder.selected");
    const syncedFolders = bookmarksdom.querySelectorAll(".bookmarks-folder.synced");
    const linksIds = Object.values(selectedLinks).map((element) => element.id);
    const folderIds = Object.values(selectedFolders).map((element) => element.dataset.title);
    const syncedIds = Object.values(syncedFolders).map((element) => element.dataset.title);
    const links = [];
    const groups2 = [];
    for (const folder of folders) {
      const isFolderSelected = folderIds.includes(folder.title);
      const isFolderSynced = syncedIds.includes(folder.title);
      if (isFolderSelected) {
        groups2.push({
          title: folder.title,
          sync: isFolderSynced
        });
      }
      if (isFolderSynced && folder.title !== "topsites") {
        continue;
      }
      for (const bookmark of folder.bookmarks) {
        const isBookmarkSelected = linksIds.includes(bookmark.id);
        const group = isFolderSelected ? folder.title : void 0;
        const title = bookmark.title;
        const url = bookmark.url;
        if (isFolderSelected || isBookmarkSelected) {
          links.push({ title, url, group });
        }
      }
    }
    storage.sync.get("linkgroups").then(({ linkgroups }) => {
      const iLinkgroups = document.querySelector("#i_linkgroups");
      const allGroups = [...groups2, ...linkgroups.groups];
      const toggleGroups2 = allGroups.length > 1;
      quickLinks(void 0, {
        groups: toggleGroups2,
        addLinks: links,
        addGroups: groups2
      });
      if (iLinkgroups) {
        iLinkgroups.checked = toggleGroups2;
      }
      bookmarksdom?.classList.remove("shown");
      bookmarksdom?.close();
      closeDialog();
    });
  }
  function handleApplyButtonText() {
    const applybutton = document.getElementById("bmk_apply");
    const links = document.querySelectorAll("#bookmarks li.selected");
    const folders = document.querySelectorAll("#bookmarks .bookmarks-folder.selected");
    const emptySelection = links.length === 0 && folders.length === 0;
    toggleDisabled(applybutton, emptySelection);
  }
  function closeDialog(event) {
    const path = event?.composedPath() ?? [];
    const id = path[0]?.id ?? "";
    if (!event || id === "bookmarks" || id === "bmk_close") {
      const bookmarksdom = document.querySelector("#bookmarks");
      bookmarksdom?.close();
      bookmarksdom?.classList.remove("shown");
      for (const node of bookmarksdom?.querySelectorAll(".selected") ?? []) {
        node.classList.remove("selected");
      }
    }
  }
  function toggleFolderSelect(folder) {
    const selectButton = folder.querySelector(".b_bookmarks-folder-select");
    const syncButton = folder.querySelector(".b_bookmarks-folder-sync");
    if (!selectButton) {
      return;
    }
    if (folder.classList.contains("selected")) {
      folder.classList.remove("selected");
      syncButton?.classList.remove("selected");
      syncButton?.setAttribute("disabled", "");
    } else {
      folder.classList.add("selected");
      for (const li of folder.querySelectorAll("li")) {
        li?.classList.remove("selected");
      }
      syncButton?.removeAttribute("disabled");
    }
    handleApplyButtonText();
  }
  function toggleFolderSync(folder) {
    if (folder.classList.contains("synced")) {
      folder.classList.remove("synced");
    } else {
      folder.classList.add("synced");
    }
  }
  async function getBookmarkTree() {
    let treenode = globalThis.startupBookmarks;
    let topsites = globalThis.startupTopsites;
    if (!treenode) {
      treenode = await EXTENSION?.bookmarks?.getTree();
    }
    if (!topsites) {
      topsites = await EXTENSION?.topSites?.get();
    }
    if (!(treenode && topsites)) {
      return;
    }
    if (PLATFORM === "chrome") {
      treenode[0].children?.push({
        id: "",
        title: "Google Apps",
        children: [
          { id: "", title: "Youtube", url: "https://youtube.com" },
          { id: "", title: "Account", url: "https://myaccount.google.com" },
          { id: "", title: "Gmail", url: "https://mail.google.com" },
          { id: "", title: "Meet", url: "https://meet.google.com" },
          { id: "", title: "Maps", url: "https://maps.google.com" },
          { id: "", title: "Drive", url: "https://drive.google.com" },
          { id: "", title: "Photos", url: "https://photos.google.com" },
          { id: "", title: "Calendar", url: "https://calendar.google.com" },
          { id: "", title: "Translate", url: "https://translate.google.com" },
          { id: "", title: "News", url: "https://news.google.com" }
        ]
      });
    }
    treenode[0].children?.unshift({
      id: "",
      title: "topsites",
      children: topsites.map((site) => ({
        id: "",
        title: site.title ?? "",
        url: site.url,
        syncing: false
      }))
    });
    return treenode;
  }
  function bookmarkTreeToFolderList(treenode, data) {
    function createMapFromTree(treenode2) {
      if (!treenode2.children) {
        return;
      }
      for (const child of treenode2.children) {
        if (child.children) {
          createMapFromTree(child);
        }
        if (!child.url) {
          continue;
        }
        if (!folders[treenode2.title]) {
          folders[treenode2.title] = {
            title: treenode2.title,
            used: false,
            bookmarks: []
          };
        }
        const current = folders[treenode2.title].bookmarks;
        const urls = current.map((b) => b.url);
        if (urls.includes(child.url)) {
          continue;
        }
        folders[treenode2.title].bookmarks.push({
          id: randomString(6),
          title: child.title,
          url: child.url,
          used: linksUrLs.includes(child.url),
          dateAdded: child.dateAdded ?? 0
        });
      }
    }
    const linksUrLs = bundleLinks(data).map((link) => isLink(link) && link.url);
    const folders = {};
    createMapFromTree(treenode);
    for (const [folder, { bookmarks }] of Object.entries(folders)) {
      const allUsed = bookmarks.every((b) => b.used);
      const isGroup = data.linkgroups.groups.includes(folder);
      const isSynced = data.linkgroups.synced.includes(folder);
      if (isSynced || isGroup && allUsed) {
        folders[folder].used = true;
      }
    }
    return Object.values(folders);
  }

  // src/scripts/shared/compress.ts
  async function loadOnCanvas(url, options) {
    const canvas = document.createElement("canvas");
    const ctx = canvas.getContext("2d");
    const img = new Image();
    if (!ctx) {
      throw new Error("Cannot get canvas context");
    }
    await new Promise((resolve2) => {
      img.onload = () => {
        const { size, square, raw } = options;
        if (raw || !size) {
          canvas.width = img.width;
          canvas.height = img.height;
          ctx?.drawImage(img, 0, 0);
          img.remove();
          resolve2(true);
          return;
        }
        const isLandscape = img.width > img.height;
        let sx = 0;
        let sy = 0;
        let sWidth = img.width;
        let sHeight = img.height;
        let dWidth = size;
        let dHeight = size;
        if (!square) {
          if (isLandscape) {
            dHeight = size;
            dWidth = img.width / img.height * size;
          } else {
            dWidth = size;
            dHeight = img.height / img.width * size;
          }
        } else {
          if (isLandscape) {
            sx = (img.width - img.height) / 2;
            sWidth = sHeight = img.height;
          } else {
            sy = (img.height - img.width) / 2;
            sWidth = sHeight = img.width;
          }
        }
        canvas.width = dWidth;
        canvas.height = dHeight;
        ctx.drawImage(img, sx, sy, sWidth, sHeight, 0, 0, dWidth, dHeight);
        img.remove();
        resolve2(true);
      };
      img.src = url;
    });
    return canvas;
  }
  async function imageDimensions(src) {
    const img = new Image();
    let width = 4e3;
    let height = 3e3;
    await new Promise((resolve2) => {
      img.addEventListener("load", () => {
        width = img.width;
        height = img.height;
        img.remove();
        resolve2(true);
      });
      img.src = src;
    });
    return { width, height };
  }
  async function compressAsBlob(elem, options) {
    const type = options.type ?? "jpeg";
    const q = options.q ?? 0.9;
    if (typeof elem === "object") {
      elem = URL.createObjectURL(elem);
    }
    const canvas = await loadOnCanvas(elem, options);
    const ctx = canvas.getContext("2d");
    const newBlob = await new Promise((resolve2) => {
      ctx?.canvas.toBlob(resolve2, `image/${type}`, q);
    });
    return newBlob;
  }
  async function compressAsDataUri(elem, options) {
    const type = options.type ?? "jpeg";
    const q = options.q ?? 1;
    if (typeof elem === "object") {
      elem = URL.createObjectURL(elem);
    }
    const canvas = await loadOnCanvas(elem, options);
    const uri = canvas.toDataURL(`image/${type}`, q);
    return uri;
  }
  async function svgToText(file) {
    const reader = new FileReader();
    const data = await new Promise((resolve2) => {
      reader.onload = () => {
        resolve2(reader.result?.toString() ?? "");
      };
      reader.readAsText(file);
    });
    return data;
  }

  // src/scripts/features/links/fileicons.ts
  async function convertIconFileToDataUri(file) {
    if (!file.type.startsWith("image/")) {
      throw new Error("Icon file must be an image");
    }
    const isSmall = file.size < 16e3;
    const type = file.type.replace("image/", "");
    if (isSmall) {
      if (type.includes("svg")) {
        const data = await svgToText(file);
        return `data:image/svg+xml;base64,${btoa(data)}`;
      }
      if (type.includes("png")) {
        return await compressAsDataUri(file, {
          square: true,
          type: "png",
          q: 1
        });
      }
    }
    return await compressAsDataUri(file, {
      type: type.includes("png") ? "png" : "jpeg",
      square: true,
      size: 144,
      q: 0.8
    });
  }
  async function storeIconFile(id, file) {
    const uri = await convertIconFileToDataUri(file);
    storage.local.set({ [`x-icon-${id}`]: uri });
    return uri;
  }

  // src/scripts/utils/transitioner.ts
  function transitioner() {
    let waitTimeout;
    const steps = {};
    return {
      first: (cb) => {
        steps.first = cb;
      },
      finally: (cb) => {
        steps.finally = cb;
      },
      after: (cb) => {
        steps.after = cb;
      },
      cancel: () => clearTimeout(waitTimeout),
      transition: async (timeout, ...rest2) => {
        if (steps.first) {
          steps.first(rest2);
        }
        await new Promise((r) => {
          waitTimeout = setTimeout(() => r(true), Math.min(timeout, 2e3));
        });
        if (steps.after) {
          steps.after(rest2);
        }
        if (steps.finally) {
          steps.finally(rest2);
        }
        steps.first = void 0;
        steps.after = void 0;
        steps.finally = void 0;
      }
    };
  }

  // src/scripts/features/links/folders.ts
  var domlinkblocks = document.getElementById("linkblocks");
  queueMicrotask(() => {
    document.addEventListener("close-folder", closeFolder);
  });
  async function folderClick(event, li) {
    if (!li) {
      li = getLiFromEvent(event);
    }
    let rightClick = false;
    let ctrlClick = false;
    let middleClick = false;
    if (event instanceof MouseEvent) {
      rightClick = event.button === 2;
      ctrlClick = event.button === 0 && (event.ctrlKey || event.metaKey);
      middleClick = event.button === 1;
    } else if (event instanceof KeyboardEvent) {
      if (event.key === "Enter" || event.key === " " || event.altKey) {
        event.preventDefault();
      } else return;
    }
    const inFolder = li?.classList.contains("link-folder");
    const isSelectAll = domlinkblocks.className.includes("select-all");
    if (!(li && inFolder) || rightClick || isSelectAll) {
      return;
    }
    document.dispatchEvent(new Event("stop-select-all"));
    const data = await storage.sync.get();
    if (ctrlClick || middleClick) {
      openAllLinks(data, li);
    } else {
      openFolder(data, li);
    }
  }
  function openFolder(data, li) {
    if (!li.parentNode) {
      return;
    }
    const linkgroup = li.parentNode.parentNode;
    const linktitle = linkgroup.querySelector(".link-title");
    const folder = data[li.id];
    const transition = transitioner();
    transition.first(hide);
    transition.after(changeToFolder);
    transition.finally(show);
    transition.transition(40);
    function hide() {
      linkgroup.dataset.folder = li?.id;
      linkgroup.classList.add("hiding");
      linkgroup.classList.remove("in-folder");
    }
    function changeToFolder() {
      initblocks(data);
      if (linktitle) {
        linktitle.textContent = folder?.title || tradThis("Folder");
      }
    }
    function show() {
      linkgroup.classList.replace("hiding", "in-folder");
    }
  }
  async function closeFolder() {
    if (document.querySelector(".link-group.dropping")) {
      return;
    }
    const data = await storage.sync.get();
    const transition = transitioner();
    transition.first(hide);
    transition.after(changeToTab);
    transition.finally(show);
    transition.transition(40);
    function hide() {
      const folders = document.querySelectorAll(".link-group.in-folder");
      for (const group of folders) {
        group.classList.add("hiding");
        group.dataset.folder = "";
      }
    }
    function changeToTab() {
      domlinkblocks.classList.toggle("with-groups", data.linkgroups.on);
      initblocks(data);
    }
    function show() {
      const groups2 = document.querySelectorAll(".link-group");
      for (const group of groups2) {
        group.classList.remove("in-folder");
        group.classList.remove("hiding");
      }
    }
  }
  function openAllLinks(data, li) {
    const linksInFolder = getLinksInFolder(data, li.id);
    for (const link of linksInFolder) {
      globalThis.open(link.url, "_blank")?.focus();
    }
    globalThis.open(globalThis.location.href, "_blank")?.focus();
    globalThis.close();
  }

  // src/scripts/features/links/drag.ts
  var blocks = /* @__PURE__ */ new Map();
  var groups = /* @__PURE__ */ new Map();
  var dropzones = {
    group: /* @__PURE__ */ new Map(),
    link: /* @__PURE__ */ new Map(),
    mini: /* @__PURE__ */ new Map()
  };
  var [dx, dy, cox, coy, lastIndex] = [0, 0, 0, 0, 0, 0];
  var lastdropAreas = [""];
  var draggedGroup = "";
  var draggedId = "";
  var targetId = "";
  var targetGroup = "";
  var ids = [];
  var initids = [];
  var coords = [];
  var dragContainers;
  var dragChangeParentTimeout;
  var dragAnimationFrame = 0;
  var domlinkblocks2 = document.getElementById("linkblocks");
  var domlinklinks;
  var domlinktitles;
  var domlinkgroups;
  var domlinkgroup;
  function startDrag(event) {
    const path = event.composedPath();
    const type = path.some((element) => element?.className?.includes("link-title")) ? "mini" : "link";
    const isMini = type === "mini";
    if (event.button > 0) {
      return;
    }
    if (event.type === "pointerdown") {
      beforeStartDrag(event, type);
      return;
    }
    ids = [];
    coords = [];
    initids = [];
    lastdropAreas = [];
    blocks.clear();
    dropzones.group.clear();
    dropzones.link.clear();
    dropzones.mini.clear();
    domlinkgroup = path.find((node) => node?.classList?.contains("link-group"));
    domlinkgroups = document.querySelectorAll("#linkblocks .link-group");
    domlinklinks = document.querySelectorAll("#linkblocks li");
    domlinktitles = document.querySelectorAll("#link-mini button");
    dragContainers = document.querySelectorAll(isMini ? "#link-mini" : ".link-group");
    const tagName = isMini ? "BUTTON" : "LI";
    const target = path.find((node) => node.tagName === tagName);
    const pos = getPosFromEvent(event);
    draggedId = findIdFromElement(target);
    draggedGroup = findIdFromElement(isMini ? target : domlinkgroup);
    targetGroup = draggedGroup;
    const groupSizeOffsets = /* @__PURE__ */ new Map();
    if (isMini) {
      const beforeMap = /* @__PURE__ */ new Map();
      for (const group of domlinktitles) {
        beforeMap.set(group.dataset.group ?? "", group.getBoundingClientRect().x);
        group.style.width = "12ch";
      }
      for (const group of domlinktitles) {
        const id = group.dataset.group ?? "";
        const before = beforeMap.get(id) ?? 0;
        const after = group.getBoundingClientRect().x;
        groupSizeOffsets.set(id, after - before);
      }
    }
    for (const element of [...domlinkgroups, ...domlinktitles, ...domlinklinks]) {
      const type2 = findTypeFromElement(element);
      const rect = element.getBoundingClientRect();
      const id = findIdFromElement(element);
      if (type2 !== "group") {
        blocks.set(id, element);
      } else {
        groups.set(id, element);
      }
      dropzones[type2].set(id, {
        x: rect.x,
        y: rect.y,
        h: rect.height,
        w: rect.width
      });
    }
    for (const container2 of Object.values(dragContainers)) {
      const elements2 = container2.querySelectorAll(tagName);
      const wrapper = isMini ? container2 : container2.querySelector(".link-list");
      const rect = wrapper?.getBoundingClientRect();
      if (!rect) {
        continue;
      }
      for (const element of elements2) {
        const type2 = findTypeFromElement(element);
        const id = findIdFromElement(element, type2);
        let { x, y, w, h } = dropzones[type2].get(id) ?? { x: 0, y: 0, w: 0, h: 0 };
        x -= rect?.x;
        y -= rect?.y;
        ids.push(id);
        initids.push(id);
        coords.push({ x, y, w, h });
        element.style.transition = "none";
        setTimeout(() => element.style.removeProperty("transition"), 10);
        deplaceElem(element, x, y);
        if (id === draggedId) {
          cox = pos.x - x + (groupSizeOffsets.get(id) ?? 0);
          coy = pos.y - y;
          dx = pos.x;
          dy = pos.y;
          element.classList.add("on");
        }
      }
      container2.style.setProperty("--drag-width", `${Math.floor(rect?.width ?? 0)}px`);
      container2.style.setProperty("--drag-height", `${Math.floor(rect?.height ?? 0)}px`);
      container2.classList.add("in-drag", "dragging");
    }
    document.dispatchEvent(new Event("remove-select-all"));
    dragAnimationFrame = globalThis.requestAnimationFrame(deplaceDraggedElem);
    if (event.pointerType === "touch") {
      document.documentElement.addEventListener("touchmove", moveDrag, { passive: false });
      document.documentElement.addEventListener("touchend", endDrag, { passive: false });
    } else {
      document.documentElement.addEventListener("pointermove", moveDrag);
      document.documentElement.addEventListener("pointerup", endDrag);
      document.documentElement.addEventListener("pointerleave", endDrag);
    }
  }
  function beforeStartDrag(event, type) {
    const target = type === "mini" ? getTitleFromEvent(event) : getLiFromEvent(event);
    cox = event.offsetX;
    coy = event.offsetY;
    if (!target) {
      return;
    }
    target?.addEventListener("pointermove", pointerDeadzone);
    target?.addEventListener("pointerup", pointerDeadzone);
    function pointerDeadzone(event2) {
      const precision = event2.pointerType === "touch" ? 7 : 14;
      const ox = Math.abs(cox - event2.offsetX);
      const oy = Math.abs(coy - event2.offsetY);
      const isEndEvents = event2.type.includes("pointerup") || event2.type.includes("touchend");
      const isHalfOutside = ox > precision / 2 || oy > precision / 2;
      const isOutside = ox > precision || oy > precision;
      if (isHalfOutside) {
        document.dispatchEvent(new Event("stop-select-all"));
      }
      if (isOutside) {
        startDrag(event2);
      }
      if (isOutside || isEndEvents) {
        target?.removeEventListener("pointermove", pointerDeadzone);
        target?.removeEventListener("pointerup", pointerDeadzone);
      }
    }
  }
  function moveDrag(event) {
    const { x, y } = getPosFromEvent(event);
    dx = x - cox;
    dy = y - coy;
    const [curr, id, type] = isDraggingOver({ x, y }) ?? ["", ""];
    const last = lastdropAreas[lastdropAreas.length - 1];
    const secondlast = lastdropAreas[lastdropAreas.length - 2];
    const staysOutsideCenter = curr === last && curr !== "center";
    const isDifferentGroup = targetGroup !== draggedGroup;
    if (type === "group") {
      targetGroup = id;
      if (isDifferentGroup) {
        applyDragChangeParent(id, "group");
      }
      if (targetGroup === draggedGroup) {
        for (const block of blocks.values()) {
          block.classList.remove("drop-target", "drop-source");
        }
        for (const block of groups.values()) {
          block.classList.remove("drop-target", "drop-source");
        }
      }
      return;
    }
    if (staysOutsideCenter || isDifferentGroup) {
      return;
    }
    if (curr === "") {
      lastdropAreas.push("");
      clearTimeout(dragChangeParentTimeout);
      for (const block of blocks.values()) {
        block.classList.remove("drop-target", "drop-source");
      }
      for (const block of groups.values()) {
        block.classList.remove("drop-target", "drop-source");
      }
      return;
    }
    const movesFromCenter = last === "center" && (curr === "left" || curr === "right");
    const movesAcrossArea = curr !== secondlast;
    const staysInCenter = last === curr && curr === "center";
    const idAtCurrentArea = ids[initids.indexOf(id)];
    if (staysInCenter) {
      applyDragChangeParent(type === "mini" ? id : idAtCurrentArea, type);
    }
    if (movesFromCenter && movesAcrossArea) {
      applyDragMoveBlocks(id);
    }
    if (last !== curr) {
      lastdropAreas.push(curr);
    }
  }
  function applyDragMoveBlocks(id) {
    const targetIndex = initids.indexOf(id);
    if (lastIndex === targetIndex) {
      return;
    }
    clearTimeout(dragChangeParentTimeout);
    lastIndex = targetIndex;
    ids.splice(ids.indexOf(draggedId), 1);
    ids.splice(targetIndex, 0, draggedId);
    for (let i = 0; i < ids.length; i++) {
      if (ids[i] !== draggedId) {
        deplaceElem(blocks.get(ids[i]), coords[i].x, coords[i].y);
      }
    }
  }
  function applyDragChangeParent(id, type) {
    const propertyValue = getComputedStyle(domlinkblocks2).getPropertyValue("--drop-delay");
    const dropDelay = type === "group" ? 0 : Number.parseInt(propertyValue || "120");
    clearTimeout(dragChangeParentTimeout);
    dragChangeParentTimeout = setTimeout(() => {
      const isDraggedId = id === draggedId;
      const inFolder = domlinkgroup?.classList.contains("in-folder");
      if (isDraggedId || inFolder) {
        return;
      }
      if (type === "mini") {
        const selectedGroup = document.querySelector("#link-mini .link-title.selected-group");
        const selection = selectedGroup?.dataset.group ?? id;
        if (selection === id) {
          return;
        }
      }
      targetId = id;
      for (const block of blocks.values()) {
        block.classList.remove("drop-target", "drop-source");
      }
      for (const block of groups.values()) {
        block.classList.remove("drop-target", "drop-source");
      }
      blocks.get(draggedId)?.classList.toggle("drop-source", true);
      if (type === "group") {
        groups.get(id)?.classList.toggle("drop-target", true);
      } else {
        blocks.get(id)?.classList.toggle("drop-target", true);
      }
    }, dropDelay);
  }
  function endDrag(event) {
    event.preventDefault();
    document.documentElement.removeEventListener("pointermove", moveDrag);
    document.documentElement.removeEventListener("pointerup", endDrag);
    document.documentElement.removeEventListener("pointerleave", endDrag);
    document.documentElement.removeEventListener("touchmove", moveDrag);
    document.documentElement.removeEventListener("touchend", endDrag);
    const path = event.composedPath();
    const type = findTypeFromElement(blocks.get(draggedId));
    const group = domlinkgroup?.dataset.group ?? "";
    const newIndex = ids.indexOf(draggedId);
    const block = blocks.get(draggedId);
    const coord = coords[newIndex];
    const isDroppable = !!document.querySelector(".drop-source");
    const outOfFolder = !path[0]?.classList.contains("link-list") && domlinkgroup?.classList.contains("in-folder");
    const targetIdIsLink = targetId.startsWith("links") && targetId.length === 11;
    const toFolder = isDroppable && targetIdIsLink;
    const toTab = isDroppable && !targetIdIsLink;
    globalThis.cancelAnimationFrame(dragAnimationFrame);
    blocks.get(draggedId)?.classList.remove("on");
    for (const container2 of dragContainers) {
      container2?.classList.replace("dragging", "dropping");
    }
    if (outOfFolder || toFolder || toTab) {
      blocks.get(draggedId)?.classList.add("removed");
    } else {
      deplaceElem(block, coord.x, coord.y);
    }
    for (const block2 of groups.values()) {
      block2.classList.remove("drop-target", "drop-source");
    }
    setTimeout(() => {
      const targetIsFolder = blocks.get(targetId)?.classList.contains("link-folder");
      const draggedIsFolder = blocks.get(draggedId)?.classList.contains("link-folder");
      const createFolder2 = toFolder && !targetIsFolder && !draggedIsFolder;
      const moveToFolder2 = toFolder && targetIsFolder && !draggedIsFolder;
      const concatFolders2 = toFolder && targetIsFolder && draggedIsFolder;
      if (type === "mini") {
        linksUpdate({ moveGroups: ids });
      } else if (createFolder2) {
        linksUpdate({ addFolder: { ids: [targetId, draggedId], group } });
      } else if (moveToFolder2) {
        linksUpdate({ moveToFolder: { source: draggedId, target: targetId } });
      } else if (concatFolders2) {
        linksUpdate({ concatFolders: { source: draggedId, target: targetId } });
      } else if (toTab) {
        linksUpdate({ moveToGroup: { ids: [draggedId], target: targetId } });
      } else if (outOfFolder) {
        linksUpdate({ moveOutFolder: { ids: [draggedId], group } });
      } else {
        linksUpdate({ moveLinks: ids });
      }
      setTimeout(() => {
        for (const container2 of dragContainers) {
          const elements2 = container2.querySelectorAll("li, button");
          for (const element of elements2) {
            element.removeAttribute("style");
          }
          container2?.removeAttribute("style");
          container2?.classList.remove("in-drag", "dropping");
        }
      }, 1);
    }, 200);
  }
  function deplaceElem(dom, x = 0, y = 0) {
    if (dom) {
      dom.style.transform = `translate(${Math.floor(x)}px, ${Math.floor(y)}px)`;
    }
  }
  function deplaceDraggedElem() {
    const block = blocks.get(draggedId);
    if (block) {
      block.style.transform = `translate(${dx}px, ${dy}px)`;
      dragAnimationFrame = globalThis.requestAnimationFrame(deplaceDraggedElem);
    }
  }
  function isDraggingOver({ x, y }) {
    const findArea = (zones) => {
      for (const [id, zone] of zones) {
        const ll = zone.x;
        const lr = zone.x + zone.w * 0.2;
        const lt = zone.y;
        const lb = zone.y + zone.h;
        const isInLeftEdge = x > ll && x < lr && y > lt && y < lb;
        const rl = zone.x + zone.w * 0.8;
        const rr = zone.x + zone.w;
        const rt = zone.y + 0;
        const rb = zone.y + zone.h;
        const isInRightEdge = x > rl && x < rr && y > rt && y < rb;
        const cl = zone.x + zone.w * 0.2;
        const cr = zone.x + zone.w * 0.8;
        const ct = zone.y;
        const cb = zone.y + zone.h;
        const isInCenter = x > cl && x < cr && y > ct && y < cb;
        let area = "";
        if (isInLeftEdge) {
          area = "left";
        }
        if (isInRightEdge) {
          area = "right";
        }
        if (isInCenter) {
          area = "center";
        }
        if (area) {
          return { area, id };
        }
      }
    };
    const linkarea = findArea(dropzones.link);
    if (linkarea) {
      return [linkarea.area, linkarea.id, "link"];
    }
    const miniarea = findArea(dropzones.mini);
    if (miniarea) {
      return [miniarea.area, miniarea.id, "mini"];
    }
    const grouparea = findArea(dropzones.group);
    if (grouparea) {
      return [grouparea.area, grouparea.id, "group"];
    }
  }
  function getPosFromEvent(event) {
    switch (event.type) {
      case "touchmove": {
        const touch = event.touches[0];
        return { x: touch.clientX, y: touch.clientY };
      }
      case "pointermove": {
        const { x, y } = event;
        return { x, y };
      }
      default: {
        return { x: 0, y: 0 };
      }
    }
  }
  function findTypeFromElement(element) {
    if (element?.classList.contains("link")) {
      return "link";
    }
    if (element?.classList.contains("link-title")) {
      return "mini";
    }
    if (element?.classList.contains("link-group")) {
      return "group";
    }
    throw new Error("No valid type found for specified element");
  }
  function findIdFromElement(element, type) {
    const elementType = type ?? findTypeFromElement(element);
    if (elementType === "link") {
      return element?.id ?? "";
    }
    if (elementType === "mini") {
      return element?.dataset.group ?? "";
    }
    if (elementType === "group") {
      return element?.dataset.group ?? "";
    }
    throw new Error("No valid type found for specified element");
  }

  // src/scripts/shared/display.ts
  var features = ["clock", "links"];
  var interfaceDisplayCallback = () => void 0;
  var loadtime = performance.now();
  function onInterfaceDisplay(callback) {
    if (callback) {
      interfaceDisplayCallback = callback;
    }
  }
  function displayInterface(ready, data) {
    if (data) {
      if (data?.font?.family) {
        features.push("fonts");
      }
      if (data?.quotes?.on) {
        features.push("quotes");
      }
      if (data?.pomodoro?.on) {
        features.push("pomodoro");
      }
      return;
    }
    if (!ready) {
      return;
    }
    const index = features.indexOf(ready);
    if (index !== -1) {
      features.splice(index, 1);
    } else {
      return;
    }
    if (features.length > 0) {
      return;
    }
    loadtime = Math.min(performance.now() - loadtime, 333);
    loadtime = loadtime > 33 ? loadtime : 0;
    document.documentElement.style.setProperty("--load-time-transition", `${loadtime}ms`);
    document.body.classList.remove("loading");
    const delay = Math.max(333, loadtime);
    setTimeout(() => interfaceDisplayCallback(), delay);
  }

  // src/scripts/features/links/index.ts
  var domlinkblocks3 = document.getElementById("linkblocks");
  var initIconList = [];
  var selectallTimer;
  async function quickLinks(init2, event) {
    if (event) {
      linksUpdate(event);
      return;
    }
    if (!init2) {
      return;
    }
    const { sync, local } = init2;
    domlinkblocks3.classList.add(sync.linkstyle ?? "large");
    domlinkblocks3.classList.toggle("titles", sync.linktitles);
    domlinkblocks3.classList.toggle("backgrounds", sync.linkbackgrounds);
    domlinkblocks3.classList.toggle("hidden", !sync.quicklinks);
    document.addEventListener("keydown", openLinksWithKeyboard);
    if (sync.linkgroups.synced.length > 0) {
      await initBookmarkSync(sync);
    }
    initGroups(sync, !!init2);
    initRows(sync.linksrow, sync.linkstyle);
    initblocks(sync, local);
  }
  function initblocks(sync, local) {
    const allLinks = Object.values(sync).filter((val) => isLink(val));
    const { pinned, synced, selected } = sync.linkgroups;
    const activeGroups = [];
    for (const group of [...pinned, selected]) {
      const div = document.querySelector(`.link-group[data-group="${group}"]`);
      const folder = div?.dataset.folder;
      const lis = [];
      const links = folder ? getLinksInFolder(sync, folder) : getLinksInGroup(sync, group);
      activeGroups.push({
        lis,
        div,
        links,
        title: group,
        pinned: group !== selected,
        synced: synced?.includes(group)
      });
    }
    activeGroups.reverse();
    const divs = activeGroups.map((g) => g.div);
    const usedLis = activeGroups.flatMap((group) => group.lis);
    for (const div of document.querySelectorAll("#linkblocks .link-group")) {
      for (const li of div.querySelectorAll("li")) {
        if (usedLis.includes(li) === false) {
          li.remove();
        }
      }
      if (divs.includes(div) === false) {
        div.remove();
      }
    }
    for (const group of activeGroups) {
      const linkgroup = group.div ?? getHTMLTemplate("link-group-template", ".link-group");
      const linksInFolders = allLinks.filter((link) => !link.folder && typeof link.parent === "string");
      const linklist = linkgroup.querySelector("ul");
      const linktitle = linkgroup.querySelector("button");
      const fragment = document.createDocumentFragment();
      const folderid = linkgroup.dataset.folder;
      if (!(linklist && linktitle)) {
        throw new Error("Template not found");
      }
      if (group.synced) {
        group.links = syncBookmarks(group.title);
      }
      for (const link of group.links) {
        let li = group.lis.find((li2) => li2.id === link._id);
        if (li) {
          li.removeAttribute("style");
          linklist?.appendChild(li);
          continue;
        }
        li = isElem(link) ? createElem(link, sync.linknewtab, sync.linkstyle) : createFolder(link, linksInFolders, sync.linkstyle);
        fragment.appendChild(li);
        li.addEventListener("keyup", openContextMenu);
        if (!group.synced) {
          li.addEventListener("click", selectAll);
          li.addEventListener("pointerdown", selectAll);
          li.addEventListener("pointerdown", startDrag);
        }
      }
      if (folderid) {
        linktitle.textContent = sync[folderid].title;
      } else {
        linktitle.textContent = group.title;
      }
      linkgroup.dataset.group = group.title;
      linkgroup.classList.toggle("pinned", group.pinned);
      linkgroup.classList.toggle("synced", group.synced);
      linklist.appendChild(fragment);
      domlinkblocks3.prepend(linkgroup);
      if (group.title === "topsites") {
        linktitle.textContent = tradThis("Most visited");
        linktitle.classList.add("topsites-title");
        linkgroup.classList.add("topsites-group");
      }
      if (group.title === "default") {
        linktitle.textContent = tradThis("Default group");
      }
    }
    if (local) {
      createIcons(local);
    } else {
      storage.local.get().then((local2) => {
        createIcons(local2);
      });
    }
    setRadius(sync.linkiconradius);
    displayInterface("links");
    limitAltableLinks();
    return true;
  }
  function createFolder(link, folderChildren, style) {
    const li = getHTMLTemplate("link-folder-template", "li");
    const imgs = li.querySelectorAll("img");
    const span = li.querySelector("span");
    if (!(li && imgs && span)) {
      throw new Error("Template not found");
    }
    const linksInThisFolder = folderChildren.filter((l) => !l.folder && l.parent === link._id).toSorted((a, b) => a.order - b.order);
    li.id = link._id;
    span.textContent = createTitle(link);
    li.addEventListener("mouseup", folderClick);
    li.addEventListener("keydown", folderClick);
    for (let i = 0; i < linksInThisFolder.length; i++) {
      const img = imgs[i];
      const elem = linksInThisFolder[i];
      const isIconShown = img && isElem(elem) && style !== "text";
      if (isIconShown) {
        initIconList.push([img, getIconFromLinkElem(elem)]);
      }
    }
    return li;
  }
  function createElem(link, openInNewtab, style) {
    const li = getHTMLTemplate("link-elem-template", "li");
    const span = li.querySelector("span.link-elem-title");
    const anchor = li.querySelector("a");
    const img = li.querySelector("img");
    if (!(li && span && anchor && img)) {
      throw new Error("Template not found");
    }
    li.id = link._id;
    anchor.href = stringMaxSize(link.url, 512);
    span.textContent = createTitle(link);
    if (style !== "text") {
      initIconList.push([img, getIconFromLinkElem(link)]);
    }
    if (openInNewtab) {
      anchor.target = "_blank";
    }
    return li;
  }
  function createIcons(local) {
    for (const [img, url] of initIconList) {
      if (url.startsWith("link")) {
        img.src = local[`x-icon-${url}`] ?? "";
      } else {
        img.src = url;
      }
    }
    setTimeout(() => {
      const incomplete = initIconList.filter(
        ([img]) => !img.complete || img.naturalWidth === 0
      );
      for (const [img, url] of incomplete) {
        img.src = "src/assets/interface/loading.svg";
        const newimg = document.createElement("img");
        newimg.addEventListener("load", () => {
          img.src = url;
        });
        newimg.addEventListener("error", () => {
          img.src = "https://services.bonjourr.fr/favicon/blob/error";
        });
        newimg.src = url;
        setTimeout(() => {
          if (!newimg.complete && newimg.naturalWidth === 0) {
            console.error("Icon link took too long to load: " + url);
            img.src = "https://services.bonjourr.fr/favicon/blob/error";
          }
        }, 5e3);
      }
      initIconList = [];
    }, 400);
  }
  function initRows(row, style) {
    const sizes = {
      large: { width: 4.8, gap: 2.3 },
      medium: { width: 3.5, gap: 2 },
      small: { width: 2.5, gap: 2 },
      inline: { width: 11, gap: 2 },
      text: { width: 5, gap: 2 }
      // arbitrary width because width is auto
    };
    if (style in sizes) {
      const { width, gap } = sizes[style];
      document.documentElement.style.setProperty("--links-width", `${Math.ceil((width + gap) * row)}em`);
    }
  }
  queueMicrotask(() => {
    document.addEventListener("stop-select-all", () => clearTimeout(selectallTimer));
    document.addEventListener("remove-select-all", removeSelectAll);
  });
  function selectAll(event) {
    clearTimeout(selectallTimer);
    const selectAllActive = domlinkblocks3.className.includes("select-all");
    const primaryButton = !event.button || event.button === 0;
    const pointerUpOrClick = event.type.includes("pointerup") || event.type.includes("click");
    const li = getLiFromEvent(event);
    if (selectAllActive && pointerUpOrClick) {
      if (primaryButton) {
        li?.classList.toggle("selected");
      }
      event.preventDefault();
      return;
    }
    if (!selectAllActive && primaryButton && event.type === "pointerdown") {
      if (event?.pointerType === "touch") {
        return;
      }
      selectallTimer = setTimeout(() => {
        domlinkblocks3.classList.add("select-all");
      }, 600);
    }
  }
  function removeSelectAll() {
    clearTimeout(selectallTimer);
    domlinkblocks3.classList.remove("select-all");
    for (const li of domlinkblocks3.querySelectorAll(".link")) {
      li.classList.remove("selected");
    }
  }
  async function linksUpdate(update) {
    let data = await storage.sync.get();
    if (update.addLinks) {
      data = linkSubmission({ type: "link", links: update.addLinks }, data);
    }
    if (update.addFolder) {
      data = linkSubmission({ type: "folder", ...update.addFolder }, data);
    }
    if (update.addGroups) {
      data = addGroup(update.addGroups, data);
    }
    if (update.moveLinks) {
      data = moveLinks(update.moveLinks, data);
    }
    if (update.moveGroups) {
      data = moveGroups(update.moveGroups, data);
    }
    if (update.moveToGroup) {
      data = moveToGroup(update.moveToGroup, data);
    }
    if (update.moveToFolder) {
      data = moveToFolder(update.moveToFolder, data);
    }
    if (update.concatFolders) {
      data = concatFolders(update.concatFolders, data);
    }
    if (update.moveOutFolder) {
      data = moveOutFolder(update.moveOutFolder, data);
    }
    if (update.updateLink) {
      data = updateLink(update.updateLink, data);
    }
    if (update.deleteLinks) {
      data = deleteLinks(update.deleteLinks, data);
    }
    if (update.groupTitle) {
      data = changeGroupTitle(update.groupTitle, data);
    }
    if (update.deleteGroup !== void 0) {
      data = deleteGroup(update.deleteGroup, data);
    }
    if (update.groups !== void 0) {
      data = toggleGroups(update.groups, data);
    }
    if (update.newtab !== void 0) {
      data = setOpenInNewTab(update.newtab, data);
    }
    if (update.refreshIcons) {
      data = refreshIcons(update.refreshIcons, data);
    }
    if (update.styles) {
      setLinkStyle(update.styles);
    }
    if (update.row) {
      setRows(update.row);
    }
    if (update.iconradius) {
      eventDebounce({ linkiconradius: update.iconradius });
      setRadius(update.iconradius);
    }
    if (update.styles || update.row) {
      return;
    }
    storage.sync.set(data);
  }
  function linkSubmission(args, data) {
    const type = args.type;
    let newlinks = [];
    if (type === "link") {
      for (const link of args.links) {
        newlinks.push(validateLink(
          link.title,
          link.url,
          // if no group is specified, adds to the selected one
          link.group || data.linkgroups.selected
        ));
      }
    }
    if (type === "folder") {
      const { ids: ids2, title, group } = args;
      newlinks = addLinkFolder(ids2, title, group);
      for (const id of ids2) {
        const elem = data[id];
        if (elem && !elem.folder) {
          elem.parent = newlinks[0]._id;
        }
      }
    }
    for (const link of newlinks) {
      const noParents = link.parent === void 0;
      const { selected, synced } = data.linkgroups;
      if (noParents && synced.includes(selected)) {
        link.parent = "";
        data.linkgroups.selected = "";
        initGroups(data);
      } else if (noParents) {
        link.parent = selected;
      }
      data[link._id] = link;
    }
    const newsync = correctLinksOrder(data);
    storage.local.get().then((local) => {
      initblocks(newsync, local);
    });
    return newsync;
  }
  function addLinkFolder(ids2, title, group) {
    const titledom = document.getElementById("e-title");
    const linktitle = title ?? titledom.value;
    titledom.value = "";
    const blocks2 = [...document.querySelectorAll(".link")];
    const idsOnInterface = blocks2.map((block) => block.id);
    const order = idsOnInterface.indexOf(ids2[0]);
    for (let i = 0; i < ids2.length; i++) {
      const dom = document.getElementById(ids2[i]);
      const isFolder = dom?.classList.contains("link-folder");
      if (isFolder) {
        ids2.splice(i, 1);
      }
    }
    return [
      {
        _id: `links${randomString(6)}`,
        folder: true,
        order,
        parent: group ?? "",
        title: linktitle
      }
    ];
  }
  function updateLink({ id, title, icon, url, file }, data) {
    const titledom = document.querySelector(`#${id} span`);
    const icondom = document.querySelector(`#${id} img`);
    const urldom = document.querySelector(`#${id} a`);
    const link = data[id];
    if (titledom && title !== void 0) {
      link.title = stringMaxSize(title, 64);
      titledom.textContent = link.title;
    }
    if (isElem(link)) {
      if (icondom && icon) {
        const img = document.createElement("img");
        const currentSrc = icondom.src;
        let url2 = getDefaultIcon(link.url);
        icondom.src = "src/assets/interface/loading.svg";
        img.onload = () => {
          icondom.src = img.src;
        };
        if (icon.type === "auto") {
          icon.value = void 0;
          img.src = url2;
        }
        if (icon.type === "url") {
          if (icon.value && stringMaxSize(icon.value, 7500)) {
            url2 = icon.value;
            img.src = url2;
          } else {
            console.error(`There was a problem with this icon URL: ${icon.value}`);
          }
        }
        if (icon.type === "file") {
          const currentIcon = link.icon;
          const noNewOrCurrentFile = !file && !currentIcon?.value;
          const noNewButHasCurrentFile = !file && currentIcon?.type === "file" && !!currentIcon?.value;
          if (noNewOrCurrentFile) {
            throw new Error("Chose file but no file uploaded");
          }
          if (noNewButHasCurrentFile) {
            icon = currentIcon;
            img.src = currentSrc;
          }
          if (file) {
            url2 = id;
            storeIconFile(id, file).then((uri) => {
              img.src = uri;
            });
          }
        }
        link.icon = icon;
      }
      if (titledom && urldom && url !== void 0) {
        link.url = stringMaxSize(url, 512);
        urldom.href = link.url;
        titledom.textContent = createTitle(link);
      }
    }
    data[id] = link;
    return data;
  }
  function concatFolders({ target, source }, data) {
    const linktarget = data[target];
    const linksource = data[source];
    if (!(linktarget.folder && linksource.folder)) {
      return data;
    }
    const sourceIds = getLinksInFolder(data, source).map(({ _id }) => _id);
    const targetIds = getLinksInFolder(data, target).map(({ _id }) => _id);
    const ids2 = [...targetIds, ...sourceIds];
    for (const [key, val] of Object.entries(data)) {
      if (isLink(val) === false) {
        continue;
      }
      if (ids2.includes(val._id) && !val.folder) {
        ;
        data[key].parent = target;
        data[key].order = Date.now();
      }
    }
    delete data[source];
    initblocks(data);
    setTimeout(() => storage.sync.remove(source));
    return data;
  }
  function moveToFolder({ target, source }, data) {
    const isSourceElem = typeof data[source]?.url === "string";
    const isTargetFolder = data[target]?.folder === true;
    if (isSourceElem && isTargetFolder) {
      ;
      data[source].parent = target;
      data[source].order = Date.now();
      initblocks(data);
    }
    return data;
  }
  function moveOutFolder({ ids: ids2, group }, data) {
    const linksInGroup = getLinksInGroup(data, group);
    const maxOrder = linksInGroup.length > 0 ? Math.max(...linksInGroup.map((link) => link.order)) : -1;
    ids2.forEach((id, index) => {
      ;
      data[id].parent = group;
      data[id].order = maxOrder + index + 1;
    });
    const correctdata = correctLinksOrder(data);
    initblocks(correctdata);
    return correctdata;
  }
  function deleteLinks(ids2, data) {
    for (const id of ids2) {
      const link = data[id];
      if (link.folder) {
        for (const child of getLinksInFolder(data, link._id)) {
          delete data[child._id];
        }
      }
      if (isElem(link)) {
        if (link.icon?.type === "file") {
          storage.local.remove(`x-icon-${id}`);
        }
      }
      delete data[id];
    }
    storage.sync.clear();
    const correctdata = correctLinksOrder(data);
    animateLinksRemove(ids2);
    return correctdata;
  }
  function moveLinks(ids2, data) {
    ids2.forEach((id, i) => {
      ;
      data[id].order = i;
    });
    initblocks(data);
    return data;
  }
  function moveToGroup({ ids: ids2, target }, data) {
    for (const id of ids2) {
      ;
      data[id].parent = target;
      data[id].order = Date.now();
    }
    const correctdata = correctLinksOrder(data);
    initblocks(correctdata);
    return correctdata;
  }
  function refreshIcons(ids2, data) {
    for (const id of ids2) {
      const link = data[id];
      if (link._id) {
        const unixDate = Date.now().toString();
        if (!link.icon || link.icon.type === "auto") {
          link.icon = link.icon ?? { type: "auto", value: "" };
          link.icon.value = getDefaultIcon(link.url) + `?r=${unixDate}`;
        } else if (link.icon.type === "url") {
          link.icon.value = `${link.icon.value}?r=${unixDate}`;
        }
        data[id] = link;
      }
    }
    initblocks(data);
    return data;
  }
  function setOpenInNewTab(newtab, data) {
    const anchors = document.querySelectorAll(".link a");
    for (const anchor of anchors) {
      if (newtab) {
        anchor.setAttribute("target", "_blank");
      } else {
        anchor.removeAttribute("target");
      }
    }
    data.linknewtab = newtab;
    return data;
  }
  async function setLinkStyle(styles) {
    const data = await storage.sync.get();
    const style = styles.style ?? "large";
    const { titles } = styles;
    const { backgrounds } = styles;
    if (styles.style && isLinkStyle(style)) {
      const wasText = domlinkblocks3?.className.includes("text");
      domlinkblocks3.classList.remove("large", "medium", "small", "inline", "text");
      domlinkblocks3.classList.add(style);
      data.linkstyle = style;
      storage.sync.set({ linkstyle: style });
      if (wasText) {
        for (const el of document.querySelectorAll("#link-list li") ?? []) {
          el.remove();
        }
      }
      initRows(data.linksrow, style);
      initblocks(data);
    }
    if (typeof titles === "boolean") {
      data.linktitles = titles;
      storage.sync.set({ linktitles: titles });
      document.getElementById("b_showtitles")?.classList?.toggle("on", titles);
      domlinkblocks3.classList.toggle("titles", titles);
    }
    if (typeof backgrounds === "boolean") {
      data.linkbackgrounds = backgrounds;
      storage.sync.set({ linkbackgrounds: backgrounds });
      document.getElementById("b_showbackgrounds")?.classList?.toggle("on", backgrounds);
      domlinkblocks3.classList.toggle("backgrounds", backgrounds);
    }
  }
  function setRadius(radius) {
    document.documentElement.style.setProperty("--link-outer-radius", `${radius}em`);
  }
  function setRows(row) {
    const style = [...domlinkblocks3.classList].filter(isLinkStyle)[0] ?? "large";
    const val = Number.parseInt(row ?? "6");
    initRows(val, style);
    eventDebounce({ linksrow: row });
  }
  function validateLink(title, url, parent) {
    const startsWithEither = (strs) => strs.some((str) => url.startsWith(str));
    const sanitizedUrl = stringMaxSize(url, 512);
    const isConfig = startsWithEither(["about:", "chrome://", "edge://"]);
    const noProtocol = !startsWithEither(["https://", "http://"]);
    const isLocalhost = url.startsWith("localhost") || url.startsWith("127.0.0.1");
    const prefix = isConfig ? "#" : isLocalhost ? "http://" : noProtocol ? "https://" : "";
    return {
      _id: `links${randomString(6)}`,
      parent,
      order: Date.now(),
      // big number
      title: stringMaxSize(title, 64),
      url: prefix + sanitizedUrl
    };
  }
  function animateLinksRemove(ids2) {
    for (const id of ids2) {
      document.getElementById(id)?.classList.add("removed");
      setTimeout(() => document.getElementById(id)?.remove(), 600);
    }
  }
  function correctLinksOrder(data) {
    const allLinks = Object.values(data).filter((val) => isLink(val));
    const folderIds = allLinks.filter((link) => link.folder).map(({ _id }) => _id);
    for (const folderId of folderIds) {
      const linksInFolder = getLinksInFolder(data, folderId);
      for (const [i, link] of linksInFolder.entries()) {
        link.order = i;
        data[link._id];
      }
    }
    for (const group of data.linkgroups.groups) {
      const linksInGroup = getLinksInGroup(data, group);
      for (const [i, link] of linksInGroup.entries()) {
        link.order = i;
        data[link._id];
      }
    }
    return data;
  }
  function getIconFromLinkElem(link) {
    if (!link.icon?.value) {
      try {
        const { origin, pathname } = new URL(link.url);
        return getDefaultIcon(origin + pathname);
      } catch (_) {
        return getDefaultIcon(link.url);
      }
    }
    if (link.icon.type === "file") {
      return link._id;
    }
    return link.icon.value;
  }
  function isLinkStyle(s) {
    return ["large", "medium", "small", "inline", "text"].includes(s);
  }
  function openLinksWithKeyboard(event) {
    if (isTypingTarget(event.target)) return;
    const { altKey, ctrlKey, metaKey, code } = event;
    const isNotAltComboKey = !altKey || ctrlKey || metaKey;
    const codeNumber = parseInt(code.replace("Digit", "").replace("Numpad", ""));
    if (isNotAltComboKey || isNaN(codeNumber)) {
      return;
    }
    const links = document.querySelectorAll(".link");
    const link = links[codeNumber - 1];
    if (!link) {
      return;
    }
    event.preventDefault();
    if (link.classList.contains("link-folder")) {
      folderClick(event, link);
    } else {
      link.querySelector("a")?.click();
    }
  }
  function limitAltableLinks() {
    const links = document.querySelectorAll("#linkblocks .link");
    links.forEach((link, i) => {
      link.classList.toggle("no-alt", i >= 9);
    });
  }

  // src/scripts/features/links/groups.ts
  var domlinkblocks4 = document.getElementById("linkblocks");
  function initGroups(data, init2) {
    if (!init2) {
      for (const node of document.querySelectorAll("#link-mini button") ?? []) {
        node.remove();
      }
    }
    createGroups(data.linkgroups);
    document.querySelector("#link-mini")?.addEventListener("wheel", (event) => {
      changeGroup(event);
      event.preventDefault();
    }, { passive: false });
  }
  function createGroups(linkgroups) {
    const { groups: groups2, pinned, synced, selected } = linkgroups;
    for (const group of [...groups2, "+"]) {
      const button = document.createElement("button");
      const isTopSite = group === "topsites";
      const isDefault = group === "default";
      const isAddMore = group === "+";
      if (pinned.includes(group)) {
        continue;
      }
      button.textContent = group;
      button.dataset.group = group;
      button.classList.add("link-title");
      button.classList.toggle("selected-group", group === selected);
      button.classList.toggle("synced", synced.includes(group));
      if (isTopSite) {
        button.textContent = tradThis("Most visited");
        button.classList.add("topsites-title");
      }
      if (isDefault) {
        button.textContent = tradThis("Default group");
      }
      if (isAddMore) {
        button.classList.add("add-group");
        button.addEventListener("click", openContextMenu);
      } else {
        button.addEventListener("click", changeGroup);
        button.addEventListener("pointerdown", startDrag);
      }
      document.querySelector("#link-mini div")?.appendChild(button);
    }
    domlinkblocks4?.classList.toggle("with-groups", linkgroups.on);
  }
  function changeGroup(event) {
    let button;
    if (event.type === "wheel") {
      const buttons = Array.from(
        document.querySelectorAll(".link-title:not(.add-group)[data-group]")
      );
      const index = buttons.findIndex((btn) => btn.classList.contains("selected-group"));
      button = buttons[
        // unsmooth brain thing to get the index for the previous/next button
        (index + (event.deltaY > 0 ? 1 : -1) + buttons.length) % buttons.length
      ];
    } else {
      button = event.currentTarget;
    }
    const transition = transitioner();
    if (!!domlinkblocks4.dataset.folderid || button.classList.contains("selected-group")) {
      return;
    }
    transition.first(hideCurrentGroup);
    transition.after(recreateLinksFromNewGroup);
    transition.finally(showNewGroup);
    transition.transition(100);
    async function recreateLinksFromNewGroup() {
      const buttons = document.querySelectorAll("#link-mini button");
      const data = await storage.sync.get();
      const group = button.dataset.group ?? data.linkgroups.groups[0];
      for (const div of buttons ?? []) {
        div.classList.remove("selected-group");
      }
      button.classList.add("selected-group");
      data.linkgroups.selected = group;
      storage.sync.set(data);
      initblocks(data);
    }
    function hideCurrentGroup() {
      domlinkblocks4.classList.remove("in-folder");
      domlinkblocks4.classList.add("hiding");
    }
    function showNewGroup() {
      domlinkblocks4.classList.remove("hiding");
    }
  }
  function toggleGroups(on, data) {
    domlinkblocks4?.classList.toggle("with-groups", on);
    data.linkgroups.on = on;
    return data;
  }
  function changeGroupTitle(title, data) {
    const index = data.linkgroups.groups.indexOf(title.old);
    for (const link of getLinksInGroup(data, title.old)) {
      data[link._id] = {
        ...link,
        parent: title.new
      };
    }
    data.linkgroups.groups[index] = title.new;
    data.linkgroups.selected = title.new;
    initGroups(data);
    return data;
  }
  function addGroup(groups2, data) {
    for (const { title, sync } of groups2) {
      const isReserved = title === "default" || title === "+";
      const isAlreadyUsed = data.linkgroups.groups.includes(title);
      if (isReserved || isAlreadyUsed) {
        return data;
      }
      for (const link of getLinksInGroup(data, "+")) {
        data[link._id] = {
          ...link,
          parent: title
        };
      }
      data.linkgroups.selected = title;
      data.linkgroups.groups.push(title);
      if (sync) {
        data.linkgroups.synced.push(title);
      }
    }
    initGroups(data);
    initblocks(data);
    return data;
  }
  function deleteGroup(group, data) {
    const { groups: groups2, pinned, synced, selected } = data.linkgroups;
    const isBroken = groups2.indexOf(group) === -1;
    const isMinimum = groups2.length === 1;
    if (isMinimum || isBroken) {
      return data;
    }
    for (const link of getLinksInGroup(data, group)) {
      delete data[link._id];
    }
    data.linkgroups.selected = group === selected || pinned.includes(group) ? groups2[0] : selected;
    data.linkgroups.pinned = pinned.filter((p) => p !== group);
    data.linkgroups.synced = synced.filter((g) => g !== group);
    data.linkgroups.groups = groups2.filter((g) => g !== group);
    if (groups2.length === 2) {
      data.linkgroups.pinned = [];
    }
    storage.sync.clear();
    initblocks(data);
    initGroups(data);
    return data;
  }
  function moveGroups(mini, data) {
    const userMini = mini.filter((name) => name !== "+");
    data.linkgroups.groups = data.linkgroups.pinned.concat(userMini);
    initGroups(data);
    return data;
  }
  async function togglePinGroup(group, action) {
    const data = await storage.sync.get();
    const { groups: groups2, pinned } = data.linkgroups;
    if (action === "pin") {
      data.linkgroups.pinned.push(group);
    }
    if (action === "unpin") {
      data.linkgroups.pinned = pinned.filter((pinned2) => pinned2 !== group);
    }
    if (group === data.linkgroups.selected) {
      const unpinned = groups2.filter((id) => pinned.includes(id) === false);
      data.linkgroups.selected = unpinned[0];
    }
    storage.sync.set(data);
    initblocks(data);
    initGroups(data);
  }

  // src/scripts/features/links/edit.ts
  var domeditlink;
  var domtitle = document.getElementById("e-title");
  var domurl = document.getElementById("e-url");
  var domiconfilelabel = document.getElementById("e-icon-file-label");
  var domiconfile = document.getElementById("e-icon-file");
  var domicontype = document.getElementById("e-icon-type");
  var domiconurl = document.getElementById("e-icon-url");
  var inputToFocus;
  var buttonToSubmit;
  var editStates;
  async function populateDialogWithEditLink(event, domdialog2, newLinkFromGlobal) {
    domeditlink = domdialog2;
    const path = getComposedPath(event.target);
    const classNames = path.map((element) => element.className ?? "");
    const linkelem = path.find((el) => el?.className?.includes("link") && el?.tagName === "LI");
    const linkgroup = path.find((el) => el?.className?.includes("link-group"));
    const linktitle = path.find((el) => el?.className?.includes("link-title"));
    const container2 = {
      mini: path.some((element) => element?.id?.includes("link-mini")),
      group: newLinkFromGlobal ?? classNames.some((cl) => cl.includes("link-group") && !cl.includes("in-folder")),
      folder: classNames.some((cl) => cl.includes("link-group") && cl.includes("in-folder"))
    };
    const target = {
      link: classNames.some((cl) => cl.includes("link-elem")),
      folder: classNames.some((cl) => cl.includes("link-folder")),
      title: classNames.some((cl) => cl.includes("link-title")),
      synced: classNames.some((cl) => cl.includes("synced")),
      addgroup: classNames.some((cl) => cl.includes("add-group"))
    };
    const selectall = classNames.some((cl) => cl.includes("select-all"));
    const dragging = classNames.some((cl) => cl.includes("dragging") || cl.includes("dropping"));
    const group = (container2.mini ? linktitle : linkgroup)?.dataset.group ?? "";
    const domfolder = document.querySelector(".link-group.in-folder");
    const folder = domfolder?.dataset?.folder ?? "";
    editStates = {
      group,
      folder,
      selectall,
      container: container2,
      dragging,
      target,
      selected: getSelectedIds()
    };
    const inputs = toggleEditInputs();
    const folderTitle = container2.folder && target.title;
    const noSelection = selectall && editStates.selected.length === 0;
    const noInputs = inputs.length === 0;
    if (noInputs || folderTitle || noSelection || dragging) {
      closeContextMenu();
      return;
    }
    document.dispatchEvent(new Event("stop-select-all"));
    event.preventDefault();
    domeditlink.querySelectorAll("#contextActions button, #background-actions").forEach(function(contextButton) {
      contextButton.classList.remove("on");
    });
    const data = await storage.sync.get();
    if (target.title) {
      const { groups: groups2, pinned } = data.linkgroups;
      const title = editStates.target.addgroup ? "" : editStates.group;
      domeditlink.dataset.group = title;
      domtitle.value = title;
      const onlyOneTitleUnpinned = groups2.length - pinned.length < 2;
      const onlyOneTitleLeft = groups2.length < 2;
      if (onlyOneTitleUnpinned) {
        document.getElementById("edit-pin")?.setAttribute("disabled", "");
      }
      if (onlyOneTitleLeft) {
        document.getElementById("edit-delete")?.setAttribute("disabled", "");
      }
    }
    if (target.folder || target.link) {
      const pathLis = path.filter((el) => el.tagName === "LI");
      const li = pathLis[0];
      const id = li?.id;
      const link = getLink(data, id);
      domtitle.value = link?.title ?? "";
      if (link && !link.folder) {
        domurl.value = link.url ?? "";
        const iconType = link.icon?.type ?? "auto";
        const iconValue = link.icon?.value ?? "";
        domiconurl.value = "";
        domiconfilelabel.textContent = tradThis("No file chosen");
        if (iconType === "url" && iconValue) {
          domiconurl.value = iconValue;
        }
        if (iconType === "file") {
          domiconfilelabel.textContent = iconValue;
        }
        toggleIconType(link.icon ? link.icon.type : "auto");
      }
    }
    if (!selectall) {
      for (const node of document.querySelectorAll(".link-title.selected, .link.selected") ?? []) {
        node.classList.remove("selected");
      }
      ;
      (target.title ? linktitle : linkelem)?.classList.add("selected");
    }
    editStates.selected = getSelectedIds();
    if (!newLinkFromGlobal) {
      positionContextMenu(event);
    }
    inputToFocus?.focus();
  }
  function toggleEditInputs() {
    const deleteButtonTxt = document.querySelector("#edit-delete span");
    const addButtonTxt = document.querySelector("#edit-add span");
    const { container: container2, target, selectall } = editStates;
    let inputs = [];
    inputToFocus = domtitle;
    setSubmitOnEnter("edit-apply");
    document.querySelector("#edit-delete")?.removeAttribute("disabled");
    document.querySelector("#edit-pin")?.removeAttribute("disabled");
    domurl.value = "";
    domiconurl.value = "";
    domtitle.value = "";
    if (container2.mini) {
      if (target.synced) {
        inputs = ["pin", "delete"];
      } else if (target.addgroup) {
        inputs = ["title*", "add"];
        setSubmitOnEnter("edit-add");
      } else if (target.title) {
        inputs = ["title", "delete", "pin", "apply"];
      }
    }
    if (container2.group) {
      if (target.synced && !target.title) {
        inputs = ["synced"];
      } else if (target.synced && target.title) {
        inputs = ["unpin", "delete"];
      } else if (selectall) {
        inputs = ["delete", "refresh", "add"];
        setSubmitOnEnter("edit-add");
      } else if (target.title) {
        inputs = ["title", "delete", "unpin", "apply"];
      } else if (target.folder) {
        inputs = ["title", "delete", "apply"];
      } else if (target.link) {
        inputs = ["title", "url*", "icon", "icon-url*", "delete", "refresh", "apply"];
      } else {
        inputs = ["title", "url*", "add"];
        inputToFocus = domurl;
        setSubmitOnEnter("edit-add");
      }
    }
    if (container2.folder) {
      if (target.title) {
        inputs = [];
      } else if (selectall) {
        inputs = ["delete", "unfolder"];
      } else if (target.link) {
        inputs = ["title", "url*", "icon", "icon-url*", "delete", "apply", "unfolder"];
      } else {
        inputs = ["title", "url*", "add"];
        inputToFocus = domurl;
        setSubmitOnEnter("edit-add");
      }
    }
    for (const id of inputs) {
      const required = id.endsWith("*");
      const cleanId = required ? id.slice(0, -1) : id;
      domeditlink.querySelector(`#edit-${cleanId}`)?.classList.add("on");
      if (required) {
        domeditlink.querySelector(`#e-${cleanId}`).required = true;
      }
    }
    const hasLabels = inputs.includes("title") || inputs.includes("title*") || inputs.includes("url*") || inputs.includes("icon");
    domeditlink.querySelector("hr")?.classList.toggle("on", hasLabels);
    if (deleteButtonTxt) {
      if (selectall) {
        deleteButtonTxt.textContent = tradThis("Delete selected");
      } else if (target.folder) {
        deleteButtonTxt.textContent = tradThis("Delete folder");
      } else if (target.link) {
        deleteButtonTxt.textContent = tradThis("Delete link");
      } else if (target.title) {
        deleteButtonTxt.textContent = tradThis("Delete group");
      }
    }
    if (addButtonTxt) {
      if (selectall) {
        addButtonTxt.textContent = tradThis("Create new folder");
      } else if (target.title) {
        addButtonTxt.textContent = tradThis("Add new group");
      } else {
        addButtonTxt.textContent = tradThis("Add new link");
      }
    }
    return inputs;
  }
  queueMicrotask(() => {
    document.getElementById("editlink-form")?.addEventListener("submit", submitChanges);
    domicontype?.addEventListener("change", toggleIconType);
  });
  function setSubmitOnEnter(theButton) {
    if (!buttonToSubmit) {
      buttonToSubmit = document.getElementById(theButton ?? "edit-apply");
      document.getElementById("editlink-form")?.addEventListener("keydown", (event) => {
        if (event.key === "Enter") {
          event.preventDefault();
          buttonToSubmit.click();
        }
      });
    } else {
      buttonToSubmit = document.getElementById(theButton);
    }
  }
  function toggleIconType(iconType) {
    if (iconType instanceof Event) {
      const target = iconType.target;
      iconType = target.value;
    }
    const selectIconType = document.getElementById("e-icon-type");
    if (selectIconType) {
      selectIconType.value = iconType;
    }
    const editIconUrl = document.getElementById("e-icon-url");
    if (editIconUrl) {
      editIconUrl.disabled = iconType !== "url";
    }
    const refreshButton = document.getElementById("edit-refresh");
    if (refreshButton) {
      const showsRefreshButton = ["auto", "url"].includes(iconType);
      refreshButton.disabled = !showsRefreshButton;
      refreshButton?.classList.toggle("on", showsRefreshButton);
    }
    document.getElementById("edit-icon-url")?.classList.toggle("on", iconType === "url");
    document.getElementById("edit-icon-svg")?.classList.toggle("on", iconType === "svg");
    document.getElementById("edit-icon-file")?.classList.toggle("on", iconType === "file");
  }
  function submitChanges(event) {
    const change = event.submitter?.id;
    const { container: container2, target, group, folder, selected, selectall } = editStates;
    if (change === "edit-apply") {
      applyLinkChanges("button");
    }
    if (change === "edit-icon") {
      toggleIconType(event);
    }
    if (change === "edit-refresh") {
      quickLinks(void 0, { refreshIcons: selected });
    }
    if (change === "edit-delete") {
      if (target.title) {
        quickLinks(void 0, { deleteGroup: group });
      } else {
        quickLinks(void 0, { deleteLinks: selected });
      }
    }
    if (change === "edit-add") {
      if (container2.folder) {
        quickLinks(void 0, {
          addLinks: [{
            group: folder,
            title: domtitle.value,
            url: domurl.value
          }]
        });
      } else if (target.title && domtitle.value) {
        quickLinks(void 0, {
          addGroups: [{
            title: domtitle.value
          }]
        });
      } else if (selectall) {
        document.dispatchEvent(new Event("remove-select-all"));
        quickLinks(void 0, {
          addFolder: {
            ids: selected,
            group
          }
        });
      } else if (container2.group) {
        quickLinks(void 0, {
          addLinks: [{
            group,
            title: domtitle.value,
            url: domurl.value
          }]
        });
      }
    }
    if (change === "edit-unfolder") {
      document.dispatchEvent(new Event("remove-select-all"));
      quickLinks(void 0, {
        moveOutFolder: {
          ids: editStates.selected,
          group: editStates.group
        }
      });
    }
    if (change === "edit-pin") {
      togglePinGroup(group, "pin");
    }
    if (change === "edit-unpin") {
      togglePinGroup(group, "unpin");
    }
    event.preventDefault();
    setTimeout(closeContextMenu);
  }
  function applyLinkChanges(_origin) {
    const id = editStates.selected[0];
    const li = document.querySelector(`#${id}`);
    const _inputs = document.querySelectorAll("#editlink input");
    if (editStates.target.addgroup) {
      quickLinks(void 0, { addGroups: [{ title: domtitle.value }] });
      closeContextMenu();
      return;
    }
    if (editStates.target.title) {
      quickLinks(void 0, {
        groupTitle: {
          old: domeditlink.dataset.group ?? "",
          new: domtitle.value
        }
      });
      closeContextMenu();
      return;
    }
    if (editStates.container.folder && editStates.selected.length === 0 && domurl.value) {
      quickLinks(void 0, {
        addLinks: [{
          group: editStates.folder,
          title: domtitle.value,
          url: domurl.value
        }]
      });
      closeContextMenu();
      return;
    }
    if (editStates.container.group && !editStates.target.link && !editStates.target.folder) {
      quickLinks(void 0, {
        addLinks: [{
          group: editStates.group,
          title: domtitle.value,
          url: domurl.value
        }]
      });
      closeContextMenu();
      return;
    }
    if (!id || !li) {
      return;
    }
    let iconType = "auto";
    let iconValue = void 0;
    const iconUrl = domiconurl.value;
    const iconFile = domiconfile.files?.[0];
    if (isLinkIconType(domicontype.value)) {
      iconType = domicontype.value;
      iconValue = void 0;
      if (iconType === "url") {
        iconValue = iconUrl;
      }
      if (iconType === "file" && iconFile) {
        iconValue = iconFile.name;
      }
      if (iconType === "file" && !iconFile) {
        iconType = "file";
        iconValue = void 0;
      }
    }
    quickLinks(void 0, {
      updateLink: {
        id,
        title: document.querySelector("#e-title")?.value ?? "",
        url: document.querySelector("#e-url")?.value,
        icon: {
          type: iconType,
          value: iconValue
        },
        file: iconFile
      }
    });
    closeContextMenu();
  }

  // src/scripts/features/contextmenu.ts
  var import_mod3 = __toESM(require_dist());
  var sectionMatching = {
    time: {
      section: "#time",
      scrollto: "time_title"
    },
    main: {
      section: "#main",
      scrollto: "main_title"
    },
    quotes: {
      section: "#quotes_container",
      scrollto: "quotes_title"
    },
    pomodoro: {
      section: "#pomodoro_container",
      scrollto: "pomodoro_title"
    },
    searchbar: {
      section: "#sb_container",
      scrollto: "searchbar_title"
    },
    notes: {
      section: "#notes_container",
      scrollto: "notes_title"
    }
  };
  var mainInterface = document.getElementById("interface");
  var domdialog = document.getElementById("contextmenu");
  var eventLocation;
  function openContextMenu(event) {
    const selection = globalThis.getSelection();
    if (selection && !selection.isCollapsed) {
      return;
    }
    const target = event.target;
    eventLocation = {
      widgets: {
        link: !!target.closest("#linkblocks"),
        time: !!target.closest(sectionMatching.time.section),
        main: !!target.closest(sectionMatching.main.section),
        quotes: !!target.closest(sectionMatching.quotes.section),
        pomodoro: !!target.closest(sectionMatching.pomodoro.section),
        searchbar: !!target.closest(sectionMatching.searchbar.section),
        notes: !!target.closest(sectionMatching.notes.section)
      },
      interface: target.matches("main#interface") || target.matches("body")
    };
    const pointer = event;
    const ctrlRightClick = pointer.button === 2 && !!pointer.ctrlKey && event.type === "contextmenu";
    const notPressingE = event.type === "keyup" && event.code !== "KeyE";
    const clickedOnWidgets = Object.values(eventLocation.widgets).some((v) => v);
    const menuWillOpen = !(ctrlRightClick || notPressingE) && clickedOnWidgets || eventLocation.interface;
    if (!menuWillOpen) {
      return;
    }
    for (const node of domdialog.querySelectorAll("label, button, hr, #background-actions, input, #pomodoro-info")) {
      node.classList.remove("on");
      if (node instanceof HTMLInputElement) {
        node.required = false;
      }
    }
    event.preventDefault();
    const contextmenuTransition = transitioner();
    contextmenuTransition.first(() => domdialog?.show());
    contextmenuTransition.after(() => domdialog?.classList?.add("shown"));
    contextmenuTransition.transition(10);
    if (eventLocation.widgets.link) {
      populateDialogWithEditLink(event, domdialog);
      return;
    }
    if (eventLocation.widgets.pomodoro) {
      showTheseElements("#pomodoro-info");
    }
    if (clickedOnWidgets) {
      const allWidgets = Object.entries(eventLocation.widgets);
      const clickedOnWidgets2 = allWidgets.filter(([_, clicked]) => clicked);
      for (const [widget2] of clickedOnWidgets2) {
        const section = sectionMatching[widget2];
        populateDialogWithAction("openTheseSettings", section.scrollto);
      }
      positionContextMenu(event);
      return;
    }
    if (eventLocation.interface) {
      populateDialogWithAction("openTheseSettings", "background_title");
      if (!document.querySelector("#linkblocks.hidden")) {
        populateDialogWithAction("add-new-link");
        populateDialogWithAction("openTheseSettings", "links_title");
      }
      showTheseElements("#background-actions");
      positionContextMenu(event);
    }
  }
  function populateDialogWithAction(actionType, attribute) {
    let selector = `[data-action="${actionType}"]`;
    if (attribute) {
      selector += `[data-attribute="${attribute}"]`;
    }
    showTheseElements(selector);
  }
  function positionContextMenu(event) {
    const editRects = domdialog.getBoundingClientRect();
    const withPointer = event.type === "contextmenu" || event.type === "click" || event.type === "touchstart";
    const withKeyboard = event.type === "keyup" && event?.key === "e";
    const { innerHeight, innerWidth } = window;
    const isMobileSized = innerWidth < 600;
    const docLang = document.documentElement.lang;
    const rightToLeft = docLang === "ar" || docLang === "fa" || docLang === "he";
    let x = 0;
    let y = 0;
    if (withPointer && isMobileSized) {
      x = (innerWidth - editRects.width) / 2;
      y = (event.type === "touchstart" ? event.touches[0].clientY : event.y) - 60 - editRects.height;
    } else if (withPointer) {
      x = event.type === "touchstart" ? event.touches[0].clientX : event.x;
      y = event.type === "touchstart" ? event.touches[0].clientY : event.y;
    } else if (withKeyboard) {
      const targetEl = event.target;
      const rect = targetEl.getBoundingClientRect();
      x = rect.right;
      y = rect.bottom + 4;
    }
    const w = editRects.width;
    const h = editRects.height;
    if (x + w > innerWidth) {
      x -= x + w - innerWidth;
    }
    if (y + h > innerHeight) {
      y -= h;
    }
    if (rightToLeft) {
      x *= -1;
    }
    domdialog.style.transform = `translate(${Math.floor(x)}px, ${Math.floor(y)}px)`;
  }
  function openSettingsButtonEvent(event) {
    const target = event.target;
    const sectionToScrollTo = target.getAttribute("data-attribute");
    if (sectionToScrollTo) {
      document.dispatchEvent(
        new CustomEvent("toggle-settings", {
          detail: { scrollTo: `#${sectionToScrollTo}` }
        })
      );
      closeContextMenu();
    } else {
      console.error(`Section "${sectionToScrollTo}" doesn't match anything`);
    }
  }
  function showTheseElements(query) {
    document.querySelectorAll(query).forEach((element) => {
      element.classList.add("on");
    });
  }
  queueMicrotask(() => {
    document.addEventListener("contextmenu", (event) => {
      if (event.altKey) {
        closeContextMenu();
        return;
      }
      if (mainInterface?.contains(event.target) || event.target === document.body) {
        openContextMenu(event);
        return;
      }
      closeContextMenu();
    });
    document.addEventListener("visibilitychange", () => {
      if (document.visibilityState === "hidden") {
        closeContextMenu();
      }
    });
    domdialog.querySelectorAll('input[type="file"]')?.forEach((input) => {
      input.addEventListener("change", function() {
        const span = this.nextElementSibling;
        const isSpan = span?.tagName === "SPAN";
        const file = this.files?.[0];
        if (span && file && isSpan) {
          span.textContent = file.name;
        }
      });
    });
    document.addEventListener("close-edit", closeContextMenu);
    const openSettingsButtons = domdialog.querySelectorAll(`[data-action="openTheseSettings"]`);
    openSettingsButtons?.forEach((btn) => {
      btn?.addEventListener("click", openSettingsButtonEvent);
    });
    const addNewLinkButton = domdialog.querySelector(`[data-action="add-new-link"]`);
    addNewLinkButton?.addEventListener("click", (event) => populateDialogWithEditLink(event, domdialog, true));
    if (SYSTEM_OS === "ios" || !IS_MOBILE) {
      const handleLongPress = debounce((event) => {
        openContextMenu(event);
      }, 500);
      document?.addEventListener("touchstart", (event) => {
        const touchY = event.touches[0].clientY;
        const windowHeight = globalThis.innerHeight;
        const threshold = windowHeight * 0.95;
        if (touchY < threshold) {
          handleLongPress(event);
        }
      });
      document?.addEventListener("touchend", () => {
        handleLongPress.cancel();
      });
      globalThis.addEventListener("resize", closeContextMenu);
    }
  });
  function closeContextMenu() {
    if (domdialog.open) {
      const selected = document.querySelectorAll(".link-title.selected, .link.selected");
      for (const node of selected) {
        node?.classList.remove("selected");
      }
      domdialog.removeAttribute("data-tab");
      domdialog.classList.remove("shown");
      domdialog.close();
      document.dispatchEvent(new Event("remove-select-all"));
    }
  }
  function handleBackgroundActions(backgrounds) {
    const muteButton = document.getElementById("b_interface-background-mute");
    const type = backgrounds.type;
    const freq = backgrounds.frequency;
    document.getElementById("background-actions")?.setAttribute("data-type", type);
    document.getElementById("b_interface-background-pause")?.classList.toggle("paused", freq === "pause");
    document.getElementById("b_interface-background-download")?.toggleAttribute("disabled", type !== "images");
    const shouldShowMute = type === "files" || type === "videos";
    muteButton?.toggleAttribute("disabled", !shouldShowMute);
    if (shouldShowMute) {
      muteButton?.classList.toggle("muted", backgrounds.mute);
    }
  }
  function initBackgroundActionsEvents() {
    (0, import_mod3.onclickdown)(document.getElementById("b_interface-background-pause"), () => {
      toggleBackgroundPause();
    });
    (0, import_mod3.onclickdown)(document.getElementById("b_interface-background-refresh"), (event) => {
      backgroundUpdate({ refresh: event });
    });
    (0, import_mod3.onclickdown)(document.getElementById("b_interface-background-download"), () => {
      downloadImage();
    });
    (0, import_mod3.onclickdown)(document.getElementById("b_interface-background-mute"), () => {
      toggleMuteVideo();
    });
  }
  async function toggleMuteVideo() {
    const muteInput = document.querySelector("#i_background-mute-videos");
    const muteContextButton = document.getElementById("b_interface-background-mute");
    const sync = await storage.sync.get("backgrounds");
    const lastMuteStatus = sync.backgrounds.mute;
    if (muteInput) {
      muteInput.checked = !lastMuteStatus;
    }
    muteContextButton?.classList.toggle("muted", !lastMuteStatus);
    toggleMuteStatus(!lastMuteStatus);
    backgroundUpdate({ mute: !lastMuteStatus });
  }
  async function toggleBackgroundPause() {
    const freqInput = document.querySelector("#i_freq");
    const button = document.getElementById("b_interface-background-pause");
    const paused = button?.classList.contains("paused");
    const sync = await storage.sync.get("backgrounds");
    const last = localStorage.lastBackgroundFreq || "hour";
    if (freqInput) {
      freqInput.value = paused ? last : "pause";
    }
    if (paused) {
      backgroundUpdate({ freq: last });
    } else {
      localStorage.lastBackgroundFreq = sync.backgrounds.frequency;
      backgroundUpdate({ freq: "pause" });
    }
  }
  async function downloadImage() {
    const dombutton = document.querySelector("#b_interface-background-download");
    const domsave = document.querySelector("#download-background");
    if (!domsave) {
      console.warn("?");
      return;
    }
    dombutton?.classList.replace("idle", "loading");
    try {
      const baseUrl = "https://services.bonjourr.fr/unsplash";
      const downloadUrl = new URL(domsave.dataset.downloadUrl ?? "");
      const apiDownloadUrl = baseUrl + downloadUrl.pathname + downloadUrl.search;
      const downloadResponse = await fetch(apiDownloadUrl);
      if (!downloadResponse) {
        return;
      }
      const data = await downloadResponse.json();
      const imageResponse = await fetch(data.url);
      if (!imageResponse.ok) {
        return;
      }
      const blob = await imageResponse.blob();
      domsave.href = URL.createObjectURL(blob);
      domsave.download = downloadUrl.pathname.split("/")[2];
      domsave.click();
    } finally {
      dombutton?.classList.replace("loading", "idle");
    }
  }

  // src/scripts/features/backgrounds/credits.ts
  function toggleCredits(backgrounds) {
    const domcontainer2 = document.getElementById("credit-container");
    const domcredit = document.getElementById("credit");
    const domsave = document.getElementById("a_interface-background-download");
    switch (backgrounds.type) {
      case "color": {
        domcontainer2?.classList.remove("shown");
        return;
      }
      case "urls":
      case "files": {
        domcontainer2?.classList.add("shown");
        domcredit?.classList.add("hidden");
        domsave?.classList.add("hidden");
        break;
      }
      case "videos": {
        domcontainer2?.classList.add("shown");
        domcredit?.classList.remove("hidden");
        domsave?.classList.add("hidden");
        break;
      }
      default: {
        domcontainer2?.classList.add("shown");
        domcredit?.classList.remove("hidden");
        domsave?.classList.remove("hidden");
      }
    }
  }
  function updateCredits(image) {
    const domcontainer2 = document.getElementById("credit-container");
    const domcredit = document.getElementById("credit");
    const domsave = document.getElementById("download-background");
    if (!(domcontainer2 && domcredit && image?.page && image?.username)) {
      return;
    }
    if (image?.format === "video") {
      if (image.username) {
        const dompage = document.createElement("a");
        dompage.textContent = tradThis(`Video by ${image.username}`);
        dompage.href = image.page;
        domcredit.textContent = "";
        domcredit.append(dompage);
      }
      return;
    }
    const hasLocation = image.city || image.country;
    let exif = "";
    let credits = "";
    if (image.exif) {
      const { iso, model, aperture, exposure_time, focal_length } = image.exif;
      if (model) {
        exif += `${model} - `;
      }
      if (aperture) {
        exif += `f/${aperture} `;
      }
      if (exposure_time) {
        exif += `${exposure_time}s `;
      }
      if (iso) {
        exif += `${iso}ISO `;
      }
      if (focal_length) {
        exif += `${focal_length}mm`;
      }
    }
    if (hasLocation) {
      const city = image.city || "";
      const country = image.country || "";
      const comma = city && country ? ", " : "";
      credits = `${city}${comma}${country} <name>`;
    } else {
      credits = tradThis("Photo by <name>");
    }
    const [location2, rest2] = credits.split(" <name>");
    const domlocation = document.createElement("a");
    const domspacer = document.createElement("span");
    const domrest = document.createElement("span");
    const domartist = document.createElement("a");
    const domexif = document.createElement("p");
    domexif.className = "exif";
    domexif.textContent = exif;
    domlocation.textContent = location2;
    domartist.textContent = image.username.slice(0, 1).toUpperCase() + image.username.slice(1);
    domspacer.textContent = hasLocation ? " - " : " ";
    domrest.textContent = rest2;
    if (image.page.includes("unsplash")) {
      domlocation.href = `${image.page}?utm_source=Bonjourr&utm_medium=referral`;
      domartist.href = `https://unsplash.com/@${image.username}?utm_source=Bonjourr&utm_medium=referral`;
    } else {
      domlocation.href = image.page;
    }
    domcredit.textContent = "";
    domcredit.append(domexif, domlocation, domspacer, domartist, domrest);
    if (image.download && domsave) {
      domsave.dataset.downloadUrl = image.download;
    }
  }

  // src/scripts/features/backgrounds/textures.ts
  var TEXTURE_RANGES = {
    grain: {
      opacity: {
        min: "0.02",
        max: "0.3",
        step: "0.01",
        value: "0.1"
      },
      size: {
        min: "140",
        max: "300",
        step: "5",
        value: "220"
      },
      color: void 0
    },
    verticalDots: {
      opacity: {
        min: "0.1",
        max: "1.0",
        step: "0.1",
        value: "0.3"
      },
      size: {
        min: "10",
        max: "100",
        step: "1",
        value: "30"
      },
      color: "#ffffff"
    },
    diagonalDots: {
      opacity: {
        min: "0.1",
        max: "1.0",
        step: "0.1",
        value: "0.3"
      },
      size: {
        min: "10",
        max: "100",
        step: "1",
        value: "30"
      },
      color: "#ffffff"
    },
    checkerboard: {
      opacity: {
        min: "0.1",
        max: "1.0",
        step: "0.1",
        value: "0.3"
      },
      size: {
        min: "10",
        max: "100",
        step: "1",
        value: "30"
      },
      color: "#ffffff"
    },
    isometric: {
      opacity: {
        min: "0.1",
        max: "1.0",
        step: "0.1",
        value: "0.3"
      },
      size: {
        min: "10",
        max: "100",
        step: "1",
        value: "30"
      },
      color: "#ffffff"
    },
    topographic: {
      opacity: {
        min: "0.1",
        max: "1.0",
        step: "0.05",
        value: "0.4"
      },
      size: {
        min: "400",
        max: "600",
        step: "10",
        value: "500"
      },
      color: "#ffffff"
    },
    grid: {
      opacity: {
        min: "0.1",
        max: "1.0",
        step: "0.05",
        value: "0.4"
      },
      size: {
        min: "10",
        max: "100",
        step: "1",
        value: "30"
      },
      color: "#ffffff"
    },
    verticalLines: {
      opacity: {
        min: "0.1",
        max: "1.0",
        step: "0.05",
        value: "0.4"
      },
      size: {
        min: "10",
        max: "100",
        step: "1",
        value: "30"
      },
      color: "#ffffff"
    },
    horizontalLines: {
      opacity: {
        min: "0.1",
        max: "1.0",
        step: "0.05",
        value: "0.4"
      },
      size: {
        min: "10",
        max: "100",
        step: "1",
        value: "30"
      },
      color: "#ffffff"
    },
    diagonalStripes: {
      opacity: {
        min: "0.1",
        max: "1.0",
        step: "0.05",
        value: "0.4"
      },
      size: {
        min: "10",
        max: "100",
        step: "1",
        value: "30"
      },
      color: "#ffffff"
    },
    verticalStripes: {
      opacity: {
        min: "0.1",
        max: "1.0",
        step: "0.05",
        value: "0.4"
      },
      size: {
        min: "10",
        max: "100",
        step: "1",
        value: "30"
      },
      color: "#ffffff"
    },
    horizontalStripes: {
      opacity: {
        min: "0.1",
        max: "1.0",
        step: "0.05",
        value: "0.4"
      },
      size: {
        min: "10",
        max: "100",
        step: "1",
        value: "30"
      },
      color: "#ffffff"
    },
    diagonalLines: {
      opacity: {
        min: "0.1",
        max: "1.0",
        step: "0.05",
        value: "0.4"
      },
      size: {
        min: "10",
        max: "100",
        step: "1",
        value: "30"
      },
      color: "#ffffff"
    },
    aztec: {
      opacity: {
        min: "0.1",
        max: "1.0",
        step: "0.05",
        value: "0.2"
      },
      size: {
        min: "10",
        max: "100",
        step: "1",
        value: "30"
      },
      color: "#ffffff"
    },
    circuitBoard: {
      opacity: {
        min: "0.1",
        max: "1.0",
        step: "0.05",
        value: "0.2"
      },
      size: {
        min: "150",
        max: "500",
        step: "1",
        value: "250"
      },
      color: "#ffffff"
    },
    ticTacToe: {
      opacity: {
        min: "0.1",
        max: "1.0",
        step: "0.05",
        value: "0.2"
      },
      size: {
        min: "50",
        max: "400",
        step: "1",
        value: "100"
      },
      color: "#ffffff"
    },
    endlessClouds: {
      opacity: {
        min: "0.1",
        max: "1.0",
        step: "0.05",
        value: "0.2"
      },
      size: {
        min: "80",
        max: "400",
        step: "1",
        value: "150"
      },
      color: "#ffffff"
    },
    waves: {
      opacity: {
        min: "0.1",
        max: "1.0",
        step: "0.05",
        value: "0.2"
      },
      size: {
        min: "80",
        max: "400",
        step: "1",
        value: "150"
      },
      color: "#ffffff"
    },
    honeycomb: {
      opacity: {
        min: "0.1",
        max: "1.0",
        step: "0.05",
        value: "0.2"
      },
      size: {
        min: "25",
        max: "300",
        step: "5",
        value: "75"
      },
      color: "#ffffff"
    },
    vectorGrain: {
      opacity: {
        min: "0.1",
        max: "1.0",
        step: "0.05",
        value: "0.5"
      },
      size: {
        min: "250",
        max: "1000",
        step: "10",
        value: "350"
      },
      color: "#ffffff"
    },
    none: {
      opacity: {
        min: "",
        max: "",
        value: "",
        step: ""
      },
      size: {
        min: "",
        max: "",
        value: "",
        step: ""
      },
      color: void 0
    }
  };

  // src/scripts/features/backgrounds/providers.ts
  var IMAGES = [
    {
      optgroup: "Bonjourr",
      options: [
        {
          name: "Bonjourr Daylight",
          value: "bonjourr-images-daylight"
        }
      ]
    },
    {
      optgroup: "Unsplash",
      options: [
        {
          name: "Unsplash Collections",
          value: "unsplash-images-collections"
        },
        {
          name: "Unsplash Search",
          value: "unsplash-images-search"
        }
      ]
    }
    // {
    // 	optgroup: 'Pixabay',
    // 	options: [
    // 		{
    // 			name: 'Pixabay Search',
    // 			value: 'pixabay-images-search',
    // 		},
    // 	],
    // },
    // {
    // 	optgroup: 'MET Museum',
    // 	options: [
    // 		{
    // 			name: 'MET Museum paintings',
    // 			value: 'metmuseum-images-paintings',
    // 		},
    // 	],
    // },
  ];
  var VIDEOS = [
    {
      optgroup: "Bonjourr",
      options: [
        {
          name: "Bonjourr Daylight",
          value: "bonjourr-videos-daylight"
        }
      ]
    },
    {
      optgroup: "Pixabay",
      options: [
        {
          name: "Pixabay Search",
          value: "pixabay-videos-search"
        }
      ]
    }
  ];
  var PROVIDERS = { IMAGES, VIDEOS };

  // src/scripts/features/backgrounds/local.ts
  var import_mod4 = __toESM(require_dist());

  // src/scripts/features/backgrounds/VideoLooper.ts
  var VideoLooper = class {
    video1;
    video2;
    container;
    fadetime;
    playbackRate;
    listener;
    constructor(src, fadetime = 4e3, playbackRate = 1) {
      this.fadetime = fadetime;
      this.playbackRate = playbackRate;
      this.container = document.createElement("div");
      this.container.classList.add("video-looper");
      this.video1 = this.createVideo(src);
      this.video2 = this.createVideo(src);
      this.video1.id = "first-looped-video";
      this.video2.id = "second-looped-video";
      this.container.appendChild(this.video1);
      this.container.appendChild(this.video2);
      this.listener = () => {
        if (!this.video2?.isConnected) return;
        this.stop();
        if (!document.hidden) {
          this.video2.play();
        }
      };
      document.addEventListener(
        "visibilitychange",
        this.listener
      );
      return;
    }
    //
    // Public
    //
    loop() {
      this.video2.play();
      this.video1.addEventListener("timeupdate", () => {
        if (this.isEnding(this.video1) && this.fadetime !== 0) {
          this.video1.classList.add("hiding");
          this.video2.play();
        }
      });
      this.video2.addEventListener("timeupdate", () => {
        if (this.isEnding(this.video2) && this.fadetime !== 0) {
          this.video2.classList.add("hiding");
          this.video1.play();
        }
      });
    }
    stop() {
      this.video1.pause();
      this.video2.pause();
      this.video1.currentTime = 0;
      this.video2.currentTime = 0;
      this.video1.classList.remove("hiding");
      this.video2.classList.remove("hiding");
    }
    remove() {
      this.container.style.opacity = "0";
      setTimeout(() => {
        this.video1.remove();
        this.video2.remove();
        this.container.remove();
        if (this.listener) {
          document.removeEventListener(
            "visibilitychange",
            this.listener
          );
        }
      }, this.fadetime);
    }
    getContainer() {
      return this.container;
    }
    setFadeTime(fadetime) {
      const realDuration = this.getRealDuration();
      const halfDurationInMs = Math.round(realDuration / 2 * 1e3);
      const isFadeTooLong = halfDurationInMs < fadetime;
      if (isFadeTooLong) {
        this.fadetime = halfDurationInMs;
      } else {
        this.fadetime = fadetime;
      }
      if (this.fadetime === 0) {
        this.video2.loop = true;
        this.video1.style = "display: none";
      } else {
        this.video2.loop = false;
        this.video1.style.removeProperty("display");
      }
      this.addTransitionDuration(this.fadetime);
    }
    setPlaybackRate(playbackRate) {
      this.playbackRate = playbackRate;
      this.video1.playbackRate = playbackRate;
      this.video2.playbackRate = playbackRate;
    }
    //
    // Private
    //
    async applyMuteStatus(video) {
      try {
        const result = await storage.sync.get(["backgrounds"]);
        const isMuted = result.backgrounds?.mute ?? true;
        video.muted = isMuted;
      } catch (err) {
        console.error("Failed to fetch mute status", err);
        video.muted = true;
      }
    }
    createVideo(src, autoplay = false) {
      const elem = document.createElement("video");
      elem.muted = true;
      elem.src = src;
      elem.autoplay = autoplay;
      elem.playbackRate = this.playbackRate;
      this.applyMuteStatus(elem);
      elem.addEventListener("loadedmetadata", () => {
        this.setFadeTime(this.fadetime);
      });
      elem.addEventListener("ratechange", () => {
        this.setFadeTime(this.fadetime);
      });
      elem.addEventListener("ended", () => {
        elem.currentTime = 0;
        elem.classList.remove("hiding");
        this.container.prepend(elem);
      });
      elem.addEventListener("muteStatusChange", function(event) {
        elem.muted = event.detail.status;
      });
      return elem;
    }
    /**
     * Javascript counts seconds faster instead of using real time.
     * This returns the video duration based on its speed.
     *
     * If triggered before video loaded, returns 8 seconds to cap fadetime
     */
    getRealDuration() {
      try {
        const durationInMs = this.video1.duration;
        const playbackRate = this.video1.playbackRate;
        return durationInMs / playbackRate;
      } catch (_) {
        console.info("Video duration was guessed to eight seconds");
        return 8;
      }
    }
    addTransitionDuration(fadetime) {
      this.container.style.setProperty("--video-fadetime", fadetime + "ms");
    }
    isEnding(vid) {
      const currentTime = vid.currentTime * 1e3 / this.playbackRate;
      const duration = vid.duration * 1e3 / this.playbackRate;
      return currentTime > duration - this.fadetime;
    }
  };

  // src/scripts/dependencies/idbcache.ts
  var IDBCache = class {
    constructor(name) {
      this.name = name;
      this.dbPromise = new Promise((resolve2, reject) => {
        const request = indexedDB.open(name, 1);
        request.onupgradeneeded = () => {
          request.result.createObjectStore("files");
        };
        request.onsuccess = () => resolve2(request.result);
        request.onerror = () => reject(request.error);
      });
    }
    name;
    dbPromise;
    async withStore(mode, fn) {
      const db = await this.dbPromise;
      return new Promise((resolve2, reject) => {
        const tx = db.transaction("files", mode);
        const store = tx.objectStore("files");
        const req = fn(store);
        req.onsuccess = () => resolve2(req.result);
        req.onerror = () => reject(req.error);
      });
    }
    async put(request, response) {
      const blob = await response.blob();
      await this.withStore("readwrite", (s) => s.put(blob, request.url));
    }
    async match(request) {
      const key = typeof request === "string" ? request : request.url;
      const blob = await this.withStore("readonly", (s) => s.get(key));
      return blob ? new Response(blob) : void 0;
    }
    async delete(request) {
      const key = typeof request === "string" ? request : request.url;
      await this.withStore("readwrite", (s) => s.delete(key));
    }
    async keys() {
      const db = await this.dbPromise;
      return new Promise((resolve2, reject) => {
        const tx = db.transaction("files", "readonly");
        const store = tx.objectStore("files");
        const req = store.getAllKeys();
        req.onsuccess = () => {
          const keys = req.result.map((url) => new Request(url));
          resolve2(keys);
        };
        req.onerror = () => reject(req.error);
      });
    }
  };

  // src/scripts/shared/cache.ts
  function getCache(name) {
    if (PLATFORM === "safari") {
      return Promise.resolve(new IDBCache(name));
    }
    return caches.open(name);
  }

  // src/scripts/utils/hash.ts
  function hashcode(str) {
    let h1 = 3735928559;
    let h2 = 1103547991;
    let i;
    let ch;
    for (i = 0, ch = 0; i < str.length; i++) {
      ch = str.charCodeAt(i);
      h1 = Math.imul(h1 ^ ch, 2654435761);
      h2 = Math.imul(h2 ^ ch, 1597334677);
    }
    h1 = Math.imul(h1 ^ h1 >>> 16, 2246822507);
    h1 ^= Math.imul(h2 ^ h2 >>> 13, 3266489909);
    h2 = Math.imul(h2 ^ h2 >>> 16, 2246822507);
    h2 ^= Math.imul(h1 ^ h1 >>> 13, 3266489909);
    const number = 4294967296 * (2097151 & h2) + (h1 >>> 0);
    const array = number.toString().split("");
    const charlist = "arosmwxcvn".split("");
    const string2 = array.map((num) => charlist[Number.parseInt(num)]).join("");
    return string2;
  }

  // src/scripts/features/backgrounds/local.ts
  var thumbnailVisibilityObserver;
  var thumbnailSelectionObserver;
  var currentVideoLooper;
  async function addLocalBackgrounds(filelist, local) {
    try {
      const thumbnailsContainer = document.getElementById("thumbnails-container");
      const filesData = {};
      const newids = [];
      let thumbnail;
      if (filelist.length === 0) {
        return;
      }
      for (const file of filelist) {
        const infosString = file.size.toString() + file.name + file.lastModified.toString();
        const hashString = hashcode(infosString).toString();
        if (Object.keys(local.backgroundFiles).includes(hashString)) {
          continue;
        }
        newids.push(hashString);
        thumbnail = createThumbnail(hashString);
        thumbnailsContainer?.appendChild(thumbnail);
        thumbnailSelectionObserver?.observe(thumbnail, { attributes: true });
      }
      if (thumbnailsContainer) {
        const idsAmount = Object.keys(local.backgroundFiles).length + newids.length;
        const columnsAmount = Math.min(idsAmount, 5).toString();
        thumbnailsContainer.style.setProperty("--thumbnails-columns", columnsAmount);
      }
      for (let i = 0; i < newids.length; i++) {
        const file = filelist[i];
        const id = newids[i];
        const format = file.type.includes("video") ? "video" : "image";
        const isLandscape = globalThis.screen.orientation.type === "landscape-primary";
        const long = isLandscape ? globalThis.screen.width : globalThis.screen.height;
        const short = isLandscape ? globalThis.screen.height : globalThis.screen.width;
        const density = Math.min(2, globalThis.devicePixelRatio);
        const ratio = Math.min(1.8, long / short);
        const averagePixelHeight = short * ratio * density;
        const isGif = file.type.includes("image/gif");
        const isImage = file.type.includes("image/");
        const isVideo = file.type.includes("video/");
        const isThumbnailSize = file.size < 8e4;
        const isResonablySized = file.size < 3e5;
        let full = file;
        let small = file;
        if (isImage) {
          if (!isThumbnailSize) {
            const objectUrl = URL.createObjectURL(file);
            const dimensions = await imageDimensions(objectUrl);
            const width = dimensions.width;
            const height = dimensions.height;
            const isHighRes = averagePixelHeight * 2 < width + height;
            const isCompressible = !isGif && !isResonablySized && isHighRes;
            if (isCompressible) {
              full = await compressAsBlob(objectUrl, { size: averagePixelHeight, q: 0.8 });
            }
            small = await compressAsBlob(objectUrl, { size: 360, q: 0.4 });
          }
        }
        if (isVideo) {
          const thumb = await generateImageFromVideo(file);
          if (thumb) small = await compressAsBlob(thumb, { size: 360, q: 0.3 });
        }
        local.backgroundFiles[id] = {
          format: "image",
          lastUsed: (/* @__PURE__ */ new Date()).toString()
        };
        if (format === "video") {
          local.backgroundFiles[id].format = "video";
          local.backgroundFiles[id].video = {
            playbackRate: 1,
            fade: 1,
            zoom: 1
          };
        } else {
          local.backgroundFiles[id].format = "image";
          local.backgroundFiles[id].position = {
            size: "cover",
            x: "50%",
            y: "50%"
          };
        }
        filesData[id] = {
          full,
          small
        };
        await saveFileToCache(id, filesData[id]);
        addThumbnailImage(id, local, filesData[id]);
        storage.local.set({ backgroundFiles: local.backgroundFiles });
      }
      if (newids.length > 0) {
        const id = newids[0];
        const media = await mediaFromFiles(id, local, filesData[id]);
        applyBackground(media);
        unselectAll();
        thumbnail?.classList.add("selected");
      }
      const uploadInput = document.querySelector("#i_background-upload");
      if (uploadInput) {
        uploadInput.value = "";
      }
    } catch (e) {
      console.info(e);
      return;
    }
  }
  async function removeLocalBackgrounds() {
    try {
      const local = await storage.local.get();
      const selectedIds = getSelection();
      if (selectedIds.length === 0 || !local.backgroundFiles) {
        return;
      }
      for (const id of selectedIds) {
        removeFilesFromCache([id]);
        delete local.backgroundFiles[id];
        const thumbnail = document.querySelector(`#${id}`);
        thumbnail?.classList.toggle("hiding", true);
        setTimeout(() => {
          thumbnail?.remove();
          toggleFileButtons();
        }, 100);
      }
      const filesIds = lastUsedBackgroundFiles(local.backgroundFiles);
      if (filesIds.length > 0) {
        applyBackground(await mediaFromFiles(filesIds[0], local));
      } else {
        removeBackgrounds();
      }
      handleFilesSettingsOptions(local);
      storage.local.remove("backgroundFiles");
      storage.local.set({ backgroundFiles: local.backgroundFiles });
    } catch (err) {
      console.info(err);
      return;
    }
  }
  async function updateFileOptions(option, value) {
    const selection = getSelection()[0];
    const local = await storage.local.get("backgroundFiles");
    const file = local.backgroundFiles[selection];
    const isVideo = file.format === "video";
    const isImage = !isVideo;
    const backgroundImage = document.querySelector("#background-media div");
    const videoContainer = document.querySelector("#background-media .video-looper");
    if (!file) {
      console.error("Cannot find file");
      return;
    }
    if (isImage && backgroundImage) {
      if (!file.position) {
        file.position = {
          size: "cover",
          x: "50%",
          y: "50%"
        };
      }
      if (option === "size") {
        file.position.size = value === "100" ? "cover" : `${value}%`;
        backgroundImage.style.backgroundSize = file.position.size;
      }
      if (option === "vertical") {
        file.position.y = `${value}%`;
        backgroundImage.style.backgroundPositionY = file.position.y;
      }
      if (option === "horizontal") {
        file.position.x = `${value}%`;
        backgroundImage.style.backgroundPositionX = file.position.x;
      }
      if (option === "use-compressed") {
        applyBackground(await mediaFromFiles(selection, local, void 0, file));
      }
    }
    if (isVideo && videoContainer) {
      const video = getCurrentVideo();
      if (!video) {
        return;
      }
      if (!file.video) {
        file.video = {
          playbackRate: 1,
          fade: 4,
          zoom: 1
        };
      }
      if (option === "video-zoom") {
        file.video.zoom = parseFloat(value);
        videoContainer.style.transform = `scale(${file.video.zoom})`;
      }
      if (option === "playback-speed") {
        file.video.playbackRate = parseFloat(value);
        video.setPlaybackRate(parseFloat(value));
        video.stop();
        video.loop();
      }
      if (option === "loop-fade") {
        file.video.fade = parseInt(value);
        video.setFadeTime(parseInt(value));
      }
    }
    local.backgroundFiles[selection] = file;
    storage.local.set({ backgroundFiles: local.backgroundFiles });
  }
  function initFilesSettingsOptions(local) {
    if (IS_MOBILE) {
      const container2 = document.getElementById("thumbnails-container");
      container2?.style.setProperty("--thumbnails-columns", "2");
    }
    sanitizeMetadatas(local).then((newlocal) => {
      handleFilesSettingsOptions(newlocal);
    });
    (0, import_mod4.onclickdown)(document.getElementById("b_thumbnail-remove"), removeLocalBackgrounds);
    (0, import_mod4.onclickdown)(document.getElementById("b_thumbnail-options"), toggleFileOptions);
    document.getElementById("b_thumbnail-zoom")?.addEventListener("click", handleGridView);
    document.getElementById("i_background-size")?.addEventListener("input", fileOptionsEvent);
    document.getElementById("i_background-vertical")?.addEventListener("input", fileOptionsEvent);
    document.getElementById("i_background-horizontal")?.addEventListener("input", fileOptionsEvent);
    document.getElementById("i_background-compress")?.addEventListener("change", fileOptionsEvent);
    document.getElementById("i_background-loop-fade")?.addEventListener("input", fileOptionsEvent);
    document.getElementById("i_background-video-zoom")?.addEventListener("input", fileOptionsEvent);
    document.getElementById("i_background-playback-speed")?.addEventListener("input", fileOptionsEvent);
    thumbnailSelectionObserver = new MutationObserver(toggleFileButtons);
    thumbnailVisibilityObserver = new IntersectionObserver(renderThumbnailOnIntersection);
    function fileOptionsEvent() {
      const { id, value, checked } = this;
      if (id === "i_background-size") {
        updateFileOptions("size", value);
      }
      if (id === "i_background-vertical") {
        updateFileOptions("vertical", value);
      }
      if (id === "i_background-horizontal") {
        updateFileOptions("horizontal", value);
      }
      if (id === "i_background-compress") {
        updateFileOptions("use-compressed", checked.toString());
      }
      if (id === "i_background-video-zoom") {
        updateFileOptions("video-zoom", value);
      }
      if (id === "i_background-playback-speed") {
        updateFileOptions("playback-speed", value);
      }
      if (id === "i_background-loop-fade") {
        updateFileOptions("loop-fade", value);
      }
    }
    function renderThumbnailOnIntersection(entries) {
      for (const { target, isIntersecting } of entries) {
        const isLoading = target.classList.contains("loading");
        const id = target.id ?? "";
        if (isIntersecting && isLoading) {
          getFileFromCache(id).then((data) => {
            storage.local.get("backgroundFiles").then((local2) => {
              if (data) {
                addThumbnailImage(id, local2, data);
                thumbnailVisibilityObserver.unobserve(target);
              }
            });
          });
        }
      }
    }
    function handleGridView() {
      const container2 = document.getElementById("thumbnails-container");
      const currentZoom = globalThis.getComputedStyle(container2).getPropertyValue("--thumbnails-columns");
      const newZoom = Math.max((Number.parseInt(currentZoom) + 1) % 6, 1);
      container2.style.setProperty("--thumbnails-columns", newZoom.toString());
    }
    function toggleFileOptions() {
      document.getElementById("background-file-options")?.classList.toggle("shown");
    }
  }
  function handleFilesSettingsOptions(local) {
    const backgroundFiles = local.backgroundFiles;
    const thumbnailsContainer = document.getElementById("thumbnails-container");
    const thumbs = document.querySelectorAll(".thumbnail");
    const thumbIds = Object.values(thumbs).map((el) => el.id);
    const fileIds = Object.keys(backgroundFiles) ?? [];
    const lastUsedIds = lastUsedBackgroundFiles(local.backgroundFiles);
    const missingThumbnails = fileIds.filter((id) => !thumbIds.includes(id));
    const file = local.backgroundFiles[lastUsedIds[0]];
    if (missingThumbnails.length > 0) {
      for (const id of missingThumbnails) {
        const thumbnail = createThumbnail(id);
        thumbnailsContainer?.appendChild(thumbnail);
        thumbnailVisibilityObserver?.observe(thumbnail);
        thumbnailSelectionObserver?.observe(thumbnail, { attributes: true });
        if (id === lastUsedIds[0]) {
          thumbnail.classList.add("selected");
        }
      }
    }
    if (!file) {
      toggleFileButtons();
      return;
    }
    const domSize = document.querySelector("#i_background-size");
    const domVertical = document.querySelector("#i_background-vertical");
    const domHorizontal = document.querySelector("#i_background-horizontal");
    const domLoopFade = document.querySelector("#i_background-loop-fade");
    const domVideoZoom = document.querySelector("#i_background-video-zoom");
    const domPlaybackRate = document.querySelector("#i_background-playback-speed");
    const imageRangesExist = domSize && domVertical && domHorizontal;
    const videoRangesExist = domLoopFade && domVideoZoom && domPlaybackRate;
    const domFileImage = document.getElementById("background-file-image");
    const domFileVideo = document.getElementById("background-file-video");
    const groupsExist = domFileImage && domFileVideo;
    const isVideo = file.format === "video";
    const isImage = !isVideo;
    const imageDefaults = { size: "cover", x: "50%", y: "50%" };
    const videoDefaults = { playbackRate: 1, fade: 4, zoom: 1 };
    if (groupsExist) {
      domFileImage.style.display = isVideo ? "none" : "block";
      domFileVideo.style.display = isVideo ? "block" : "none";
    }
    if (imageRangesExist && isImage) {
      const pos = file.position ?? imageDefaults;
      domSize.value = (pos.size === "cover" ? "100" : pos.size).replace("%", "");
      domVertical.value = pos.y.replace("%", "");
      domHorizontal.value = pos.x.replace("%", "");
      webkitRangeTrackColor(domSize);
      webkitRangeTrackColor(domVertical);
      webkitRangeTrackColor(domHorizontal);
    }
    if (videoRangesExist && isVideo) {
      const video = file.video ?? videoDefaults;
      domLoopFade.value = video.fade.toString();
      domVideoZoom.value = video.zoom.toString();
      domPlaybackRate.value = video.playbackRate.toString();
      webkitRangeTrackColor(domLoopFade);
      webkitRangeTrackColor(domVideoZoom);
      webkitRangeTrackColor(domPlaybackRate);
    }
    toggleFileButtons();
  }
  function toggleFileButtons() {
    const thmbRemove = document.getElementById("b_thumbnail-remove");
    const thmbOptions = document.getElementById("b_thumbnail-options");
    const selected = document.querySelectorAll(".thumbnail.selected").length;
    const domoptions = document.getElementById("background-options-options");
    const areOptionsShown = domoptions?.classList.contains("shown");
    selected === 0 ? thmbRemove?.setAttribute("disabled", "") : thmbRemove?.removeAttribute("disabled");
    selected !== 1 ? thmbOptions?.setAttribute("disabled", "") : thmbOptions?.removeAttribute("disabled");
    if (selected !== 1) {
      document.getElementById("background-file-options")?.classList.remove("shown");
    }
    if (selected === 1 && areOptionsShown) {
      domoptions?.classList.remove("shown");
    }
  }
  function createThumbnail(id) {
    const thb = document.createElement("button");
    const thbimg = document.createElement("img");
    const formatIcon = document.createElement("span");
    thb.id = id;
    thb.className = "thumbnail loading";
    thb.setAttribute("aria-label", "Select this background");
    thbimg.src = "src/assets/interface/loading.svg";
    thbimg.setAttribute("alt", "");
    thbimg.setAttribute("draggable", "false");
    formatIcon.className = "thumbnail-format-icon";
    thb.appendChild(thbimg);
    thb.appendChild(formatIcon);
    thb.addEventListener("click", handleThumbnailClick);
    return thb;
  }
  function addThumbnailImage(id, local, data) {
    const btn = document.querySelector(`#${id}`);
    const img = document.querySelector(`#${id} img`);
    if (!img || !btn) {
      console.warn("Cannot find thumbnail or button for " + id);
      return;
    }
    img.addEventListener("load", () => {
      btn.classList.replace("loading", "loaded");
      setTimeout(() => btn.classList.remove("loaded"), 2);
    });
    mediaFromFiles(id, local, data).then((image) => {
      const { format, urls } = image;
      btn.dataset.format = format;
      if (format === "image") {
        img.src = urls.small;
      }
      if (format === "video") {
        if (image.thumbnail) {
          img.src = image.thumbnail;
        }
      }
    });
  }
  async function handleThumbnailClick(mouseEvent) {
    const hasCtrl = mouseEvent.ctrlKey || mouseEvent.metaKey;
    const shiftKey = mouseEvent.shiftKey;
    const isLeftClick = mouseEvent.button === 0;
    const id = this?.id ?? "";
    if (isLeftClick && shiftKey) {
      const thumbnails = document.querySelectorAll(".thumbnail");
      let firstSelectionPos;
      let lastSelectionPos;
      let selectedPos;
      thumbnails.forEach((thumbnail, index) => {
        const isSelected = thumbnail.className.includes("selected");
        const isSelection = thumbnail === this;
        if (isSelected) {
          lastSelectionPos = index;
        }
        if (isSelected && !firstSelectionPos) {
          firstSelectionPos = index;
        }
        if (isSelection && !selectedPos) {
          selectedPos = index;
        }
      });
      if (firstSelectionPos !== void 0 && lastSelectionPos !== void 0 && selectedPos !== void 0) {
        const positions = [firstSelectionPos, lastSelectionPos, selectedPos];
        const first = Math.min(...positions);
        const last = Math.max(...positions);
        thumbnails.forEach((thumbnail, index) => {
          const inSelectionRange = index >= first && index <= last;
          thumbnail.classList.toggle("selected", inSelectionRange);
        });
        return;
      }
    }
    if (isLeftClick && hasCtrl) {
      if (!this.classList.contains("selected")) {
        document.getElementById("b_thumbnail-remove")?.removeAttribute("disabled");
      }
      document.getElementById(id)?.classList?.toggle("selected");
      return;
    }
    if (this.classList.contains("selected") && isLeftClick) {
      unselectAll();
      document.getElementById(id)?.classList?.toggle("selected");
      return;
    }
    if (this.classList.contains("selected")) {
      return;
    }
    if (isLeftClick) {
      const local = await storage.local.get();
      const metadata = local.backgroundFiles[id];
      const image = await mediaFromFiles(id, local);
      if (!metadata || !image) {
        console.warn("metadata: ", metadata);
        console.warn("image: ", image);
        return;
      }
      unselectAll();
      document.getElementById(id)?.classList?.add("selected");
      local.backgroundFiles[id].lastUsed = (/* @__PURE__ */ new Date()).toString();
      storage.local.set({ backgroundFiles: local.backgroundFiles });
      handleFilesSettingsOptions(local);
      applyBackground(image);
    }
  }
  function lastUsedBackgroundFiles(metadatas) {
    const sortedMetadata = Object.entries(metadatas).toSorted((a, b) => {
      return new Date(b[1].lastUsed).getTime() - new Date(a[1].lastUsed).getTime();
    });
    return sortedMetadata.map(([id, _]) => id);
  }
  async function mediaFromFiles(id, local, data, metadata) {
    metadata ??= local.backgroundFiles[id];
    data = data ?? await getFileFromCache(id);
    if (data.full.type.includes("video/")) {
      const htmlvideo = await getLoadedVideo(data.full);
      const duration = htmlvideo.duration;
      htmlvideo.remove();
      const videoUrl = URL.createObjectURL(data.full);
      const thumbnailUrl = URL.createObjectURL(data.small);
      const video = {
        format: "video",
        duration,
        mimetype: data.full.type,
        thumbnail: thumbnailUrl,
        file: metadata,
        urls: {
          full: videoUrl,
          small: videoUrl
        }
      };
      return video;
    } else {
      const urls = {
        full: URL.createObjectURL(data.full),
        small: URL.createObjectURL(data.small)
      };
      const image = {
        format: "image",
        mimetype: data.full.type,
        file: metadata,
        urls: {
          full: urls.full,
          small: urls.small
        }
      };
      return image;
    }
  }
  function unselectAll() {
    for (const node of document.querySelectorAll(".thumbnail.selected")) {
      node?.classList?.remove("selected");
    }
  }
  function getSelection() {
    const thmbs = document.querySelectorAll(".thumbnail.selected");
    const ids2 = Object.values(thmbs).map((thmb) => thmb?.id ?? "");
    return ids2;
  }
  function setCurrentVideo(src, fade, playback) {
    currentVideoLooper = new VideoLooper(src, fade, playback);
    return currentVideoLooper;
  }
  function getCurrentVideo() {
    return currentVideoLooper;
  }
  async function getLoadedVideo(blob) {
    const video = document.createElement("video");
    const url = URL.createObjectURL(blob);
    video.src = url;
    await new Promise((r) => {
      video.addEventListener("loadeddata", () => r(true));
      video.load();
    });
    URL.revokeObjectURL(url);
    return video;
  }
  async function generateImageFromVideo(file) {
    const video = await getLoadedVideo(file);
    const canvas = document.createElement("canvas");
    const ctx = canvas.getContext("2d");
    if (!ctx) {
      throw new Error("Canvas context failed for " + file.name);
    }
    ctx.canvas.width = video.videoWidth;
    ctx.canvas.height = video.videoHeight;
    document.body.append(video);
    video.style.display = "none";
    video.play();
    video.pause();
    const blob = await new Promise((resolve2, reject) => {
      const toBlobCallback = (blob2) => blob2 ? resolve2(blob2) : reject(true);
      setTimeout(() => {
        ctx.drawImage(video, 0, 0, video.videoWidth, video.videoHeight);
        ctx.canvas.toBlob(toBlobCallback, "image/jpeg", 0.8);
      }, 300);
    });
    video.remove();
    return blob;
  }
  async function localFilesCacheControl(backgrounds, local, needNew) {
    local = await sanitizeMetadatas(local);
    const ids2 = lastUsedBackgroundFiles(local.backgroundFiles);
    if (ids2.length === 0) {
      removeBackgrounds();
      return;
    }
    const freq = backgrounds.frequency;
    const metadata = local.backgroundFiles[ids2[0]];
    const lastUsed = new Date(metadata.lastUsed).getTime();
    needNew ??= needsChange(freq, lastUsed);
    if (ids2.length > 1 && needNew) {
      ids2.shift();
      const rand = Math.floor(Math.random() * ids2.length);
      const id = ids2[rand];
      applyBackground(await mediaFromFiles(id, local));
      local.backgroundFiles[id].lastUsed = (/* @__PURE__ */ new Date()).toString();
      storage.local.set(local);
    } else {
      applyBackground(await mediaFromFiles(ids2[0], local));
    }
  }
  async function saveFileToCache(id, filedata) {
    const cache = await getCache("local-files");
    const { full, small } = filedata;
    const requestFull = new Request(`http://127.0.0.1:8888/${id}/full`);
    const requestSmall = new Request(`http://127.0.0.1:8888/${id}/small`);
    const headersFull = { "content-type": full.type, "Cache-Control": "max-age=604800" };
    const headersSmall = { "content-type": small.type, "Cache-Control": "max-age=604800" };
    const responseFull = new Response(full, { headers: headersFull });
    const responseSmall = new Response(small, { headers: headersSmall });
    await Promise.all([
      cache.put(requestFull, responseFull),
      cache.put(requestSmall, responseSmall)
    ]);
  }
  async function getFileFromCache(id) {
    const cache = await getCache("local-files");
    const full = await (await cache?.match(`http://127.0.0.1:8888/${id}/full`))?.blob();
    const small = await (await cache?.match(`http://127.0.0.1:8888/${id}/small`))?.blob();
    if (!full || !small) {
      throw new Error(`${id} is undefined`);
    }
    return { full, small };
  }
  async function removeFilesFromCache(ids2) {
    const cache = await getCache("local-files");
    for (const id of ids2) {
      sessionStorage.removeItem(id);
      cache.delete(`http://127.0.0.1:8888/${id}/full`);
      cache.delete(`http://127.0.0.1:8888/${id}/small`);
    }
    return true;
  }
  async function sanitizeMetadatas(local) {
    const newMetadataList = {};
    const cache = await getCache("local-files");
    const cacheKeys = await cache.keys();
    for (const request of cacheKeys) {
      try {
        const key = new URL(request.url).pathname.split("/")[1];
        const surelyVideo = request.url.includes(".mp4") || request.url.includes(".webm");
        let metadata = local.backgroundFiles[key];
        if (!metadata) {
          metadata = {
            format: surelyVideo ? "video" : "image",
            lastUsed: (/* @__PURE__ */ new Date("01/01/1971")).toString(),
            position: {
              size: "cover",
              x: "50%",
              y: "50%"
            }
          };
        }
        newMetadataList[key] = metadata;
      } catch (err) {
        console.info(err);
      }
    }
    const oldKeys = Object.keys(local.backgroundFiles);
    const newKeys = Object.keys(newMetadataList);
    if (oldKeys.length !== newKeys.length) {
      storage.local.set({ backgroundFiles: newMetadataList });
    }
    local.backgroundFiles = newMetadataList;
    return local;
  }

  // src/scripts/features/backgrounds/index.ts
  var propertiesUpdateDebounce = debounce(filtersUpdate, 600);
  var colorUpdateDebounce = debounce(solidUpdate, 600);
  var fadeinPreviewDebounce = debounce(previewFadein, 200);
  var fadeinTimeout;
  var formBackgroundUserColl = networkForm("f_background-user-coll");
  var formBackgroundUserSearch = networkForm("f_background-user-search");
  function backgroundsInit(sync, local, init2) {
    if (init2) {
      const type = sync.backgrounds.type;
      const isColor = type === "color";
      const noFadeIn = sync.backgrounds.fadein === 0;
      const wrapper = document.getElementById("background-wrapper");
      if (isColor || noFadeIn) {
        wrapper?.classList.remove("hidden");
      }
      const pauseButton = document.getElementById("b_interface-background-pause");
      const isPaused = sync.backgrounds.frequency === "pause";
      pauseButton?.classList.toggle("paused", isPaused);
      initBackgroundActionsEvents();
      document.addEventListener("visibilitychange", pauseVideoOnVisibilityChange);
    }
    toggleCredits(sync.backgrounds);
    applyFilters(sync.backgrounds);
    applyTexture(sync.backgrounds.texture);
    handleBackgroundActions(sync.backgrounds);
    document.getElementById("background-wrapper")?.setAttribute("data-type", sync.backgrounds.type);
    switch (sync.backgrounds.type) {
      case "files": {
        localFilesCacheControl(sync.backgrounds, local);
        break;
      }
      case "urls": {
        urlsCacheControl(sync.backgrounds, local);
        break;
      }
      case "color": {
        applyBackground(sync.backgrounds.color);
        break;
      }
      default: {
        backgroundCacheControl(sync.backgrounds, local);
      }
    }
  }
  async function backgroundUpdate(update) {
    const data = await storage.sync.get("backgrounds");
    const local = await storage.local.get();
    if (update.blurenter) {
      blurResolutionControl(data, local);
      return;
    }
    if (update.blur !== void 0) {
      applyFilters({ blur: Number.parseFloat(update.blur) });
      propertiesUpdateDebounce({ blur: Number.parseFloat(update.blur) });
      return;
    }
    if (update.bright !== void 0) {
      applyFilters({ bright: Number.parseFloat(update.bright) });
      propertiesUpdateDebounce({ bright: Number.parseFloat(update.bright) });
      return;
    }
    if (update.fadein !== void 0) {
      applyFilters({ fadein: Number.parseInt(update.fadein) });
      propertiesUpdateDebounce({ fadein: Number.parseFloat(update.fadein) });
      fadeinPreviewDebounce(Number.parseFloat(update.fadein));
      return;
    }
    if (isBackgroundType(update.type)) {
      data.backgrounds.type = update.type;
      storage.sync.set({ backgrounds: data.backgrounds });
      createProviderSelect(data.backgrounds);
      handleBackgroundOptions(data.backgrounds);
      backgroundsInit(data, local);
      return;
    }
    if (isFrequency(update.freq)) {
      data.backgrounds.frequency = update.freq;
      if (update.freq === "pause") {
        const type = data.backgrounds.type;
        if (type === "images") {
          const collection = getCollection(data.backgrounds, local).images();
          data.backgrounds.pausedImage = collection[0];
        }
        if (type === "videos") {
          const collection = getCollection(data.backgrounds, local).videos();
          data.backgrounds.pausedVideo = collection[0];
        }
        if (type === "urls") {
          const [_, list] = getUrlsAsCollection(local);
          data.backgrounds.pausedUrl = list[0].urls.full;
        }
      }
      storage.sync.set({ backgrounds: data.backgrounds });
      handleBackgroundOptions(data.backgrounds);
    }
    if (update.refresh) {
      switch (data.backgrounds.type) {
        case "files": {
          localFilesCacheControl(data.backgrounds, local, true);
          break;
        }
        case "urls": {
          urlsCacheControl(data.backgrounds, local, true);
          break;
        }
        case "images":
        case "videos": {
          backgroundCacheControl(data.backgrounds, local, true);
          break;
        }
      }
      turnRefreshButton(update.refresh, true);
    }
    if (update.color) {
      colorInput("solid-background", update.color);
      applyBackground(update.color);
      colorUpdateDebounce(update.color);
    }
    if (update.urlsapply) {
      applyUrls(data.backgrounds);
    }
    if (update.files) {
      addLocalBackgrounds(update.files, local);
    }
    if (update.mute !== void 0) {
      data.backgrounds.mute = update.mute;
      storage.sync.set({ backgrounds: data.backgrounds });
    }
    if (update.texturecolor !== void 0) {
      data.backgrounds.texture.color = update.texturecolor;
      propertiesUpdateDebounce({ texture: data.backgrounds.texture });
      colorInput("texture-color", update.texturecolor);
      applyTexture(data.backgrounds.texture);
    }
    if (update.textureopacity !== void 0) {
      data.backgrounds.texture.opacity = Number.parseFloat(update.textureopacity);
      propertiesUpdateDebounce({ texture: data.backgrounds.texture });
      applyTexture(data.backgrounds.texture);
    }
    if (update.texturesize !== void 0) {
      data.backgrounds.texture.size = Number.parseInt(update.texturesize);
      propertiesUpdateDebounce({ texture: data.backgrounds.texture });
      applyTexture(data.backgrounds.texture);
    }
    if (isBackgroundTexture(update.texture)) {
      data.backgrounds.texture = { type: update.texture };
      storage.sync.set({ backgrounds: data.backgrounds });
      handleBackgroundOptions(data.backgrounds);
      applyTexture(data.backgrounds.texture);
    }
    document.dispatchEvent(
      new CustomEvent("updateSettingsBeforeInit", {
        detail: data
      })
    );
    switch (data.backgrounds.type) {
      case "files":
      case "urls":
      case "color": {
        return;
      }
      default:
    }
    if (update.provider) {
      data.backgrounds[data.backgrounds.type] = update.provider;
      storage.sync.set({ backgrounds: data.backgrounds });
      handleBackgroundOptions(data.backgrounds);
      const isNotEmpty = local.backgroundCollections[update.provider]?.length > 0;
      const isDefault = update.provider.includes("bonjourr");
      if (isNotEmpty || isDefault) {
        backgroundCacheControl(data.backgrounds, local);
      }
    }
    if (update.query !== void 0) {
      const collectionName = data.backgrounds[data.backgrounds.type];
      const target = update.query.target;
      const input = target.querySelector("input");
      let query = input?.value ?? "";
      const isCorrectCollection = collectionName === "unsplash-images-collections";
      const startsWithUrl = query.startsWith("https://unsplash.com/collections/");
      if (isCorrectCollection && startsWithUrl) {
        query = query.replace("https://unsplash.com/collections/", "").slice(0, query.indexOf("/"));
      }
      local.backgroundCollections[collectionName] = [];
      data.backgrounds.queries[collectionName] = query;
      storage.sync.set({ backgrounds: data.backgrounds });
      if (query === "") {
        storage.local.set({ backgroundCollections: local.backgroundCollections });
        formBackgroundUserColl.accept("");
        formBackgroundUserSearch.accept("");
        removeBackgrounds();
        return;
      }
      formBackgroundUserColl.load();
      formBackgroundUserSearch.load();
      handleBackgroundOptions(data.backgrounds);
      await backgroundCacheControl(data.backgrounds, local);
      formBackgroundUserColl.accept(collectionName);
      formBackgroundUserSearch.accept(collectionName);
    }
  }
  async function filtersUpdate({ blur, bright, fadein, texture }) {
    const data = await storage.sync.get("backgrounds");
    if (blur !== void 0) {
      data.backgrounds.blur = blur;
    }
    if (bright !== void 0) {
      data.backgrounds.bright = bright;
    }
    if (fadein !== void 0) {
      data.backgrounds.fadein = fadein;
    }
    if (texture !== void 0) {
      data.backgrounds.texture = texture;
    }
    storage.sync.set({ backgrounds: data.backgrounds });
  }
  async function solidUpdate(value) {
    const data = await storage.sync.get("backgrounds");
    data.backgrounds.color = value;
    storage.sync.set({ backgrounds: data.backgrounds });
  }
  function previewFadein(ms) {
    const wrapper = document.getElementById("background-wrapper");
    const setOpacity = (val) => wrapper?.setAttribute("style", `opacity: ${val}`);
    clearTimeout(fadeinTimeout);
    fadeinTimeout = setTimeout(() => setOpacity(1), ms);
    setOpacity(0);
  }
  async function backgroundCacheControl(backgrounds, local, needNew) {
    if (backgrounds.type === "color") {
      return;
    }
    let list = [];
    switch (backgrounds.type) {
      case "images":
        list = getCollection(backgrounds, local).images();
        break;
      case "videos":
        list = getCollection(backgrounds, local).videos();
        break;
      default:
    }
    const lastTime = new Date(local.backgroundLastChange ?? "01/01/1971").getTime();
    const isPaused = backgrounds.frequency === "pause";
    const isPreloading = localStorage.backgroundPreloading === "true";
    needNew ??= needsChange(backgrounds.frequency, lastTime);
    if (list.length === 0) {
      const json = await fetchNewBackgrounds(backgrounds);
      if (json) {
        const newlocal = setCollection(backgrounds, local).fromApi(json);
        const newcoll = getCollection(backgrounds, newlocal);
        const isImage = backgrounds.type === "images";
        newlocal.backgroundLastChange = userDate().toString();
        storage.local.set(newlocal);
        list = isImage ? newcoll.images() : newcoll.videos();
        preloadBackground(list[1]);
      }
    }
    if (isPreloading) {
      applyBackground(list[0]);
      preloadBackground(list[1]);
      return;
    }
    if (!needNew && isPaused) {
      if (backgrounds.pausedImage && backgrounds.type === "images") {
        applyBackground(backgrounds.pausedImage);
        return;
      }
      if (backgrounds.pausedVideo && backgrounds.videos === "videos") {
        applyBackground(backgrounds.pausedVideo);
        return;
      }
    }
    if (!needNew) {
      applyBackground(list[0]);
      return;
    }
    if (list.length > 1) {
      list.shift();
    }
    if (backgrounds.frequency === "pause") {
      if (backgrounds.type === "images") {
        backgrounds.pausedImage = list[0];
      }
      if (backgrounds.type === "videos") {
        backgrounds.pausedVideo = list[0];
      }
      storage.sync.set({ backgrounds });
    }
    if (list.length > 1) {
      let newlocal = local;
      preloadBackground(list[1]);
      newlocal = setCollection(backgrounds, local).fromList(list);
      newlocal.backgroundLastChange = userDate().toString();
      storage.local.set(newlocal);
    }
    applyBackground(list[0]);
    if (list.length === 1 && navigator.onLine) {
      const json = await fetchNewBackgrounds(backgrounds);
      if (json) {
        const newlocal = setCollection(backgrounds, local).fromApi(json);
        const newcoll = getCollection(backgrounds, newlocal);
        const newlist = backgrounds.type === "images" ? newcoll.images() : newcoll.videos();
        preloadBackground(newlist[0]);
        preloadBackground(newlist[1]);
        storage.local.set({ backgroundCollections: newlocal.backgroundCollections });
      }
    }
  }
  async function fetchNewBackgrounds(backgrounds) {
    switch (backgrounds.type) {
      case "files":
      case "urls":
      case "color": {
        throw new Error('Can only fetch with "images" or "videos" type');
      }
      default:
    }
    const collectionName = backgrounds[backgrounds.type];
    const [provider, type, category] = collectionName.split("-");
    const base = "https://services.bonjourr.fr/backgrounds";
    const path = `/${provider}/${type}/${category}`;
    const density = Math.max(2, globalThis.devicePixelRatio);
    const ratio = globalThis.screen.width / globalThis.screen.height;
    let height = globalThis.screen.height * density;
    let width = globalThis.screen.width * density;
    if (ratio >= 2) {
      width = height * 2;
    }
    if (ratio <= 0.5) {
      height = width * 2;
    }
    const screen = `?h=${height}&w=${width}`;
    const query = backgrounds.queries[collectionName] ?? "";
    const search = query ? `&query=${query}` : "";
    const url = base + path + screen + search;
    const resp = await fetch(url);
    const json = await resp.json();
    const areImages = type === "images" && Object.keys(json)?.every((key) => key.includes("images"));
    const areVideos = type === "videos" && Object.keys(json)?.every((key) => key.includes("videos"));
    if (areImages || areVideos) {
      return json;
    }
    throw new Error("Received JSON is bad");
  }
  function findCollectionName(backgrounds, local) {
    switch (backgrounds.type) {
      case "files":
      case "urls":
      case "color": {
        throw new Error('Only collection names with "images" or "videos" type');
      }
      default:
    }
    const { frequency, type, pausedImage, pausedVideo } = backgrounds;
    const isPausedOnImage = type === "images" && frequency === "pause" && pausedImage;
    const isPausedOnVideo = type === "videos" && frequency === "pause" && pausedVideo;
    if (isPausedOnImage) {
      return getCollectionNameFromMedia(pausedImage, local);
    }
    if (isPausedOnVideo) {
      return getCollectionNameFromMedia(pausedVideo, local);
    }
    const collectionName = backgrounds[type];
    const isDaylight = collectionName.includes("daylight");
    if (isDaylight) {
      const period = daylightPeriod(userDate().getTime());
      return `${collectionName}-${period}`;
    }
    return collectionName;
  }
  function getCollectionNameFromMedia(media, local) {
    const collMap = /* @__PURE__ */ new Map();
    for (const [coll, medias] of Object.entries(local.backgroundCollections)) {
      for (const media2 of medias) {
        collMap.set(media2.urls.full, coll);
      }
    }
    return collMap.get(media.urls.full);
  }
  function getCollection(backgrounds, local) {
    switch (backgrounds.type) {
      case "files":
      case "urls":
      case "color": {
        throw new Error('Can only fetch with "images" or "videos" type');
      }
      default:
    }
    const collectionName = findCollectionName(backgrounds, local);
    const collection = local.backgroundCollections[collectionName] ?? [];
    const images = () => {
      if (areOnlyImages(collection)) {
        return collection;
      }
      throw new Error("Wrong background format");
    };
    const videos = () => {
      if (areOnlyVideos(collection)) {
        return collection;
      }
      throw new Error("Wrong background format");
    };
    return { images, videos };
  }
  function setCollection(backgrounds, local) {
    switch (backgrounds.type) {
      case "files":
      case "urls":
      case "color": {
        throw new Error("Cannot update with this type");
      }
      default:
    }
    function fromApi(json) {
      for (const [key, list] of Object.entries(json)) {
        local.backgroundCollections[key] = list;
      }
      return local;
    }
    function fromList(list) {
      const collectionName = findCollectionName(backgrounds, local);
      local.backgroundCollections[collectionName] = list;
      return local;
    }
    return { fromList, fromApi };
  }
  function applyBackground(media, res, fast) {
    const mediaWrapper = document.getElementById("background-media");
    let resolution = res ? res : detectBackgroundSize();
    let item;
    if (typeof media === "string") {
      mediaWrapper?.childNodes.forEach((node) => node.remove());
      document.documentElement.style.setProperty("--solid-background", media);
      return;
    }
    if (fast) {
      document.body.classList.add("init");
    }
    if (!media) {
      return;
    }
    if (media.format === "image") {
      resolution = media.mimetype === "image/gif" ? "full" : resolution;
      const src = media.urls[resolution];
      item = createImageItem(src, media);
    } else {
      const fade = 4e3;
      const src = media.urls[resolution];
      item = createVideoItem(src, media, fade);
    }
    item.dataset.res = resolution;
    mediaWrapper.prepend(item);
    if (mediaWrapper?.childElementCount > 1) {
      const children = Object.values(mediaWrapper?.children);
      const notHiding = children.filter((child) => !child.className.includes("hiding"));
      const lastVisible = notHiding.at(-1);
      if (fast) {
        document.body.classList.remove("init");
        setTimeout(() => mediaWrapper?.lastElementChild?.remove(), 200);
      } else {
        lastVisible?.classList.add("hiding");
        setTimeout(() => mediaWrapper?.lastElementChild?.remove(), 1200);
      }
    }
  }
  function createImageItem(src, media, callback) {
    const backgroundsWrapper = document.getElementById("background-wrapper");
    const div = document.createElement("div");
    const img = new Image();
    img.addEventListener("load", () => {
      const isSmall = img.width <= 256 && img.height <= 256;
      const isPng = !!media.mimetype?.includes("png");
      div?.classList.toggle("pixelated", isPng && isSmall);
      backgroundsWrapper?.classList.remove("hidden");
      applyThemeColor(media, img);
      updateCredits(media);
      if (callback) {
        callback();
      }
    });
    img.src = src;
    img.remove();
    div.classList.add("background-image");
    div.style.backgroundImage = `url(${src})`;
    if (media?.file?.position) {
      const { size, x, y } = media.file.position;
      div.style.backgroundSize = size;
      div.style.backgroundPositionX = x;
      div.style.backgroundPositionY = y;
    }
    return div;
  }
  function createVideoItem(src, media, duration) {
    const backgroundsWrapper = document.getElementById("background-wrapper");
    const looper = setCurrentVideo(src, duration, 1);
    const container2 = looper.getContainer();
    looper.loop();
    if (media?.file?.video) {
      const { playbackRate, zoom, fade } = media.file.video;
      container2.style.transform = `scale(${zoom})`;
      looper.setPlaybackRate(playbackRate);
      looper.setFadeTime(fade);
    }
    backgroundsWrapper?.classList.remove("hidden");
    return container2;
  }
  function preloadBackground(media, res) {
    if (!media) {
      return;
    }
    localStorage.setItem("backgroundPreloading", "true");
    const resolution = res ? res : detectBackgroundSize();
    const src = media.urls[resolution];
    if (media.format === "image") {
      const img = document.createElement("img");
      img.fetchPriority = "low";
      return new Promise((resolve2) => {
        img.addEventListener("load", () => {
          localStorage.removeItem("backgroundPreloading");
          img.remove();
          resolve2(true);
        });
        img.src = src;
      });
    }
    if (media.format === "video") {
      const video = document.createElement("video");
      return new Promise((resolve2) => {
        video.addEventListener("canplaythrough", () => {
          localStorage.removeItem("backgroundPreloading");
          video.remove();
          resolve2(true);
        });
        setTimeout(() => video.src = src, 600);
      });
    }
  }
  function removeBackgrounds() {
    const mediaWrapper = document.getElementById("background-media");
    setTimeout(() => document.querySelector("#background-media div")?.classList.add("hiding"));
    setTimeout(() => mediaWrapper.firstChild?.remove(), 2e3);
  }
  function applyFilters({ blur, bright, fadein }) {
    if (blur !== void 0) {
      document.documentElement.style.setProperty("--blur", `${blur}px`);
      document.body.classList.toggle("blurred", blur >= 15);
    }
    if (bright !== void 0) {
      document.documentElement.style.setProperty("--brightness", `${bright}`);
    }
    if (fadein !== void 0) {
      document.documentElement.style.setProperty("--fade-in", `${fadein}ms`);
    }
  }
  function applyTexture(texture) {
    const wrapper = document.getElementById("background-wrapper");
    const domtexture = document.getElementById("background-texture");
    if (!(domtexture && wrapper)) {
      return;
    }
    const ranges = TEXTURE_RANGES[texture.type];
    const color = texture.color ?? ranges.color;
    const size = texture.size ?? ranges.size.value;
    const opacity = texture.opacity ?? ranges.opacity.value;
    wrapper.dataset.texture = texture.type;
    document.documentElement.style.setProperty("--texture-color", `${color}`);
    document.documentElement.style.setProperty("--texture-color-transparent", `${color}77`);
    document.documentElement.style.setProperty("--texture-opacity", `${opacity}`);
    document.documentElement.style.setProperty("--texture-size", `${size}px`);
  }
  function initBackgroundOptions(sync, local) {
    initFilesSettingsOptions(local);
    initUrlsEditor(sync.backgrounds, local);
    createProviderSelect(sync.backgrounds);
    handleBackgroundOptions(sync.backgrounds);
  }
  function handleBackgroundOptions(backgrounds) {
    const type = backgrounds.type;
    const withVideos = type === "videos" || type === "files" || type === "urls";
    document.getElementById("local_options")?.classList.toggle("shown", type === "files");
    document.getElementById("solid_options")?.classList.toggle("shown", type === "color");
    document.getElementById("unsplash_options")?.classList.toggle("shown", type === "images");
    document.getElementById("background-urls-option")?.classList.toggle("shown", type === "urls");
    document.getElementById("background-freq-option")?.classList.toggle("shown", type !== "color");
    document.getElementById("background-filters-options")?.classList.toggle("shown", type !== "color");
    document.getElementById("background-video-sound-options")?.classList.toggle("shown", withVideos);
    handleTextureOptions(backgrounds);
    handleProviderOptions(backgrounds);
    handleBackgroundActions(backgrounds);
  }
  function handleTextureOptions(backgrounds) {
    const hasTexture = backgrounds.texture.type !== "none";
    document.getElementById("background-texture-options")?.classList.toggle("shown", hasTexture);
    if (hasTexture) {
      const iOpacity = document.querySelector("#i_texture-opacity");
      const iSize = document.querySelector("#i_texture-size");
      const colorOption = document.querySelector("#background-texture-color-option");
      const ranges = TEXTURE_RANGES[backgrounds.texture.type];
      const { opacity, size } = backgrounds.texture;
      colorOption?.classList.toggle("shown", ranges.color !== void 0);
      if (iOpacity) {
        iOpacity.min = ranges.opacity.min;
        iOpacity.max = ranges.opacity.max;
        iOpacity.step = ranges.opacity.step;
        iOpacity.value = opacity === void 0 ? ranges.opacity.value : opacity.toString();
        webkitRangeTrackColor(iOpacity);
      }
      if (iSize) {
        iSize.min = ranges.size.min;
        iSize.max = ranges.size.max;
        iSize.step = ranges.size.step;
        iSize.value = size === void 0 ? ranges.size.value : size.toString();
        webkitRangeTrackColor(iSize);
      }
    }
  }
  function handleProviderOptions(backgrounds) {
    switch (backgrounds.type) {
      case "files":
      case "urls":
      case "color": {
        document.getElementById("background-provider-option")?.classList.remove("shown");
        return;
      }
      default:
    }
    document.getElementById("background-provider-option")?.classList.add("shown");
    const collectionName = backgrounds[backgrounds.type];
    const hasCollections = collectionName.includes("coll");
    const hasSearch = collectionName.includes("search");
    const domusercoll = document.querySelector("#i_background-user-coll");
    const domusersearch = document.querySelector("#i_background-user-search");
    const domusercolloption = document.querySelector("#background-user-coll-option");
    const domusersearchoption = document.querySelector("#background-user-search-option");
    const optionsExist = domusercoll && domusersearch && domusercolloption && domusersearchoption;
    if (optionsExist) {
      domusercolloption.classList.toggle("shown", hasCollections);
      domusersearchoption.classList.toggle("shown", hasSearch);
      domusercoll.value = backgrounds.queries[collectionName] ?? "";
      domusersearch.value = backgrounds.queries[collectionName] ?? "";
    }
  }
  function createProviderSelect(backgrounds) {
    const backgroundProvider = document.querySelector("#i_background-provider");
    const providersType = backgrounds.type === "images" ? "IMAGES" : "VIDEOS";
    const providersList = PROVIDERS[providersType];
    if (!backgroundProvider) {
      throw new Error("Cannot find #i_background-provider");
    }
    for (const node of Object.values(backgroundProvider.children)) {
      node.remove();
    }
    for (const provider of providersList) {
      const optgroup = document.createElement("optgroup");
      optgroup.label = provider.optgroup;
      backgroundProvider?.appendChild(optgroup);
      for (const option of provider.options) {
        const opt = document.createElement("option");
        opt.textContent = option.name;
        opt.value = option.value;
        optgroup.appendChild(opt);
      }
    }
    switch (backgrounds.type) {
      case "images":
      case "videos": {
        const collectionName = backgrounds[backgrounds.type];
        backgroundProvider.value = collectionName;
        break;
      }
      default:
    }
  }
  async function blurResolutionControl(sync, local) {
    if (sync.backgrounds.type === "files") {
      const ids2 = lastUsedBackgroundFiles(local.backgroundFiles);
      const image = await mediaFromFiles(ids2[0], local);
      applyBackground(image, "full");
      return;
    }
    const [current, next] = await getCurrentBackgrounds(sync, local);
    preloadBackground(current, "small");
    preloadBackground(current, "full")?.then(() => {
      applyBackground(current, "full", "fast");
      preloadBackground(next, "full");
    });
  }
  async function getCurrentBackgrounds(sync, local) {
    if (sync.backgrounds.type === "files") {
      const ids2 = lastUsedBackgroundFiles(local.backgroundFiles);
      const current = await mediaFromFiles(ids2[0], local);
      const next = await mediaFromFiles(ids2[1], local);
      return [current, next];
    }
    if (sync.backgrounds.frequency === "pause" && sync.backgrounds.pausedImage) {
      const lists = getCollection(sync.backgrounds, local);
      const images = lists.images();
      return [sync.backgrounds.pausedImage, images[0]];
    }
    if (sync.backgrounds.frequency === "pause" && sync.backgrounds.pausedVideo) {
      const lists = getCollection(sync.backgrounds, local);
      const videos = lists.videos();
      return [sync.backgrounds.pausedVideo, videos[0]];
    }
    if (sync.backgrounds.type === "images") {
      const lists = getCollection(sync.backgrounds, local);
      const images = lists.images();
      return [images[0], images[1]];
    }
    if (sync.backgrounds.type === "videos") {
      const lists = getCollection(sync.backgrounds, local);
      const videos = lists.videos();
      return [videos[0], videos[1]];
    }
    return [];
  }
  function detectBackgroundSize() {
    return document.body.className.includes("blurred") ? "small" : "full";
  }
  function applyThemeColor(image, img) {
    let color = image.color;
    if (!color) {
      color = getAverageColor(img);
    }
    if (color) {
      const fadein = Number.parseInt(document.documentElement.style.getPropertyValue("--fade-in"));
      document.querySelector('meta[name="theme-color"]')?.setAttribute("content", color);
      setTimeout(() => {
        document.documentElement.style.setProperty("--average-color", color);
      }, fadein);
    }
  }
  function pauseVideoOnVisibilityChange() {
    document.querySelectorAll("video")?.forEach((video) => {
      if (document.hidden) {
        video.pause();
      } else {
        video.play();
      }
    });
  }
  function getAverageColor(img) {
    try {
      const canvas = document.createElement("canvas");
      const ctx = canvas.getContext("2d");
      const maxDimension = 100;
      const scale = Math.min(maxDimension / img.width, maxDimension / img.height);
      canvas.width = img.width * scale;
      canvas.height = img.height * scale;
      ctx?.drawImage(img, 0, 0, canvas.width, canvas.height);
      const imageData = ctx?.getImageData(0, 0, canvas.width, canvas.height);
      const data = imageData?.data;
      let r = 0;
      let g = 0;
      let b = 0;
      let count = 0;
      if (data) {
        for (let i = 0; i < data.length; i += 4) {
          r += data[i];
          g += data[i + 1];
          b += data[i + 2];
          count++;
        }
      }
      r = Math.floor(r / count);
      g = Math.floor(g / count);
      b = Math.floor(b / count);
      return rgbToHex(r, g, b);
    } catch (_error) {
    }
  }
  function toggleMuteStatus(muted = true) {
    document.querySelectorAll("#background-media video").forEach((video) => {
      video.dispatchEvent(
        new CustomEvent("muteStatusChange", {
          detail: {
            status: muted
          }
        })
      );
    });
  }
  function isBackgroundType(str = "") {
    return ["files", "urls", "images", "videos", "color"].includes(str);
  }
  function isBackgroundTexture(str = "") {
    return [
      "none",
      "grain",
      "verticalDots",
      "diagonalDots",
      "topographic",
      "checkerboard",
      "isometric",
      "grid",
      "verticalLines",
      "horizontalLines",
      "diagonalStripes",
      "verticalStripes",
      "horizontalStripes",
      "diagonalLines",
      "aztec",
      "circuitBoard",
      "ticTacToe",
      "endlessClouds",
      "vectorGrain",
      "waves",
      "honeycomb"
    ].includes(str);
  }
  function isFrequency(str = "") {
    return ["tabs", "hour", "day", "period", "pause"].includes(str);
  }
  function areOnlyImages(list) {
    return list?.every((item) => item.format === "image");
  }
  function areOnlyVideos(list) {
    return list?.every((item) => item.format === "video");
  }

  // src/scripts/features/move/helpers.ts
  var MOVE_WIDGETS = ["time", "main", "quicklinks", "notes", "quotes", "searchbar", "pomodoro"];
  var elements = {
    time: globalThis.document.getElementById("time"),
    main: globalThis.document.getElementById("main"),
    quicklinks: globalThis.document.getElementById("linkblocks"),
    searchbar: globalThis.document.getElementById("sb_container"),
    notes: globalThis.document.getElementById("notes_container"),
    quotes: globalThis.document.getElementById("quotes_container"),
    pomodoro: globalThis.document.getElementById("pomodoro_container")
  };
  var defaultLayouts = {
    single: {
      grid: [["time"], ["main"], ["quicklinks"]],
      items: {}
    },
    double: {
      grid: [
        ["time", "."],
        ["main", "."],
        ["quicklinks", "."]
      ],
      items: {}
    },
    triple: {
      grid: [
        ["time", ".", "."],
        ["main", ".", "."],
        ["quicklinks", ".", "."]
      ],
      items: {}
    }
  };
  function isEditing() {
    return document.getElementById("interface")?.classList.contains("move-edit") ?? false;
  }
  function hasDuplicateInArray(arr, id) {
    return arr.filter((a) => a === id).length > 1;
  }
  function getLayout(data, selection) {
    if ("move" in data) {
      const layouts2 = data.move.layouts;
      const selec2 = selection ?? data.move.selection;
      return layouts2[selec2] ?? defaultLayouts[selec2];
    }
    const layouts = data.layouts;
    const selec = selection ?? data.selection;
    return layouts?.[selec] ?? defaultLayouts[selec];
  }
  function gridValidate(grid) {
    const cells = grid.flat();
    const cellsAreWidgets = cells.every((val) => val === "." || MOVE_WIDGETS.includes(val));
    return cellsAreWidgets;
  }
  function gridParse(area = "") {
    const stringToGrid = (split) => {
      const rows = area.split(split).filter((a) => a.length > 1);
      const grid = rows.map((r) => r.split(" "));
      return grid;
    };
    const result = stringToGrid("'");
    if (gridValidate(result)) {
      return result;
    }
    return stringToGrid(`"`);
  }
  function gridStringify(grid) {
    let areas = "";
    const itemListToString = (row) => row.reduce((a, b) => `${a} ${b}`);
    areas = grid.map((row) => `'${itemListToString(row)}'`).join(" ");
    return areas.trimEnd();
  }
  function gridFind(grid, id) {
    const positions = [];
    grid.flat().forEach((a, i) => {
      if (a !== id) {
        return;
      }
      const column = i % grid[0].length;
      const row = Math.floor(i / grid[0].length);
      positions.push([column, row]);
    });
    return positions;
  }
  function getSpanDirection(grid, id) {
    const poses = gridFind(grid, id);
    const rows = Object.values(poses).map(([_, row]) => row);
    if (poses.length < 2) {
      return "none";
    }
    if (rows[0] !== rows[1]) {
      return "columns";
    }
    return "rows";
  }
  function isRowEmpty(grid, index) {
    if (grid[index] === void 0) {
      return false;
    }
    const row = grid[index];
    let empty = true;
    row.some((cell) => {
      if (cell !== "." && getSpanDirection(grid, cell) !== "columns") {
        empty = false;
      }
    });
    return empty;
  }
  function spansInGridArea(grid, id, { toggle, remove }) {
    function addSpans(row2) {
      const target = row2.indexOf(id);
      const stopper = [false, false];
      let arr = row2;
      function replaceWithId(a, i, lim) {
        if (!stopper[lim] && a[i]) {
          if (a[i] === ".") {
            a[i] = id;
          } else if (a[i] !== id) {
            stopper[lim] = true;
          }
        }
        return a;
      }
      for (let ii = 1; ii < arr.length; ii++) {
        arr = replaceWithId(arr, target + ii, 0);
        arr = replaceWithId(arr, target - ii, 1);
      }
      return arr;
    }
    function removeSpans(arr) {
      let keepfirst = true;
      return arr.map((a) => {
        if (a === id) {
          if (keepfirst) {
            keepfirst = false;
          }
          return ".";
        }
        return a;
      });
    }
    const [x, y] = gridFind(grid, id)[0];
    let col = grid.map((g) => g[x]);
    let row = [...grid[y]];
    if (remove) {
      col = removeSpans(col);
      row = removeSpans(row);
    }
    if (toggle) {
      if (toggle === "col") {
        col = hasDuplicateInArray(col, id) ? removeSpans(col) : addSpans(col);
      }
      if (toggle === "row") {
        row = hasDuplicateInArray(row, id) ? removeSpans(row) : addSpans(row);
      }
    }
    grid.forEach((_, i) => {
      grid[i][x] = col[i];
    });
    grid[y].forEach((_, i) => {
      grid[y][i] = row[i];
    });
    return grid;
  }
  function getWidgetsStorage(data) {
    const displayed = {
      time: data.time,
      main: data.main,
      notes: !!data.notes?.on,
      searchbar: !!data.searchbar?.on,
      pomodoro: !!data.pomodoro?.on,
      quicklinks: data.quicklinks,
      quotes: !!data.quotes?.on
    };
    return Object.entries(displayed).filter(([_, val]) => val).map(([key, _]) => key);
  }
  function updateWidgetsStorage(states, data) {
    for (const [id, on] of states) {
      if (id === "time") {
        data.time = on;
      }
      if (id === "main") {
        data.main = on;
      }
      if (id === "quicklinks") {
        data.quicklinks = on;
      }
      if (id === "quotes") {
        data.quotes = { ...data.quotes, on };
      }
      if (id === "pomodoro") {
        data.pomodoro = { ...data.pomodoro, on };
      }
      if (id === "searchbar") {
        data.searchbar = { ...data.searchbar, on };
      }
      if (id === "notes" && data.notes) {
        data.notes = { ...data.notes, on };
      }
    }
    return data;
  }
  function getGridWidgets(area) {
    const list = area.replaceAll("'", "").replaceAll(".", "").split(" ");
    const widgets = list.filter((str, i) => str && list.indexOf(str) === i);
    return widgets;
  }
  function addGridWidget(grid, id, selection) {
    const newrow = addGridRow(selection, id);
    let rows = grid.split("'").filter((row) => !(row === " " || row === ""));
    let position = 0;
    if (grid === "") {
      return `'${newrow}'`;
    }
    const isFirstWidgetTime = rows[0].includes("time");
    const isLastWidgetQuotes = rows.at(-1)?.includes("quotes");
    if (id === "time") {
      position = 0;
    }
    if (id === "main") {
      position = isFirstWidgetTime ? 1 : 0;
    }
    if (id === "notes") {
      position = rows.length === 1 ? 1 : 2;
    }
    if (id === "searchbar") {
      position = rows.length === 1 ? 1 : 2;
    }
    if (id === "pomodoro") {
      position = rows.length === 1 ? 1 : 2;
    }
    if (id === "quicklinks") {
      position = rows.length - (isLastWidgetQuotes ? 1 : 0);
    }
    if (id === "quotes") {
      position = rows.length;
    }
    rows.splice(position, 0, newrow);
    rows = rows.map((row) => `'${row}'`);
    return rows.join(" ");
  }
  function removeGridWidget(grid, id, _) {
    let rows = grid.split("'").filter((row) => !(row === " " || row === ""));
    rows = rows.filter((row) => !row.includes(id));
    rows = rows.map((row) => `'${row}'`);
    return rows.join(" ");
  }
  function addGridRow(selection, id) {
    const firstcolumn = selection === "triple" ? ". " : "";
    const lastcolumn = selection === "triple" || selection === "double" ? " ." : "";
    return `${firstcolumn}${id}${lastcolumn}`;
  }

  // src/scripts/features/move/dom.ts
  var import_mod5 = __toESM(require_dist());
  var dominterface = document.querySelector("#interface");
  function setGridAreas(grid) {
    const property = typeof grid === "string" ? grid : gridStringify(grid);
    document.documentElement.style.setProperty("--grid", property);
  }
  function setAlign(id, align) {
    const { box, text } = align ?? { box: "", text: "" };
    const elem = elements[id];
    if (elem) {
      elem.style.placeSelf = box;
      if (id === "quicklinks") {
        document.getElementById("linkblocks")?.classList.remove("text-left", "text-right");
        if (text === "left") {
          document.getElementById("linkblocks")?.classList.add("text-left");
        }
        if (text === "right") {
          document.getElementById("linkblocks")?.classList.add("text-right");
        }
      } else {
        elem.style.textAlign = text || "";
      }
    }
  }
  function setAllAligns(items) {
    for (const [widget2, align] of Object.entries(items)) {
      setAlign(widget2, align);
    }
  }
  function addOverlay(id) {
    const button = document.createElement("button");
    button.id = `move-overlay-${id}`;
    button.className = "move-overlay";
    dominterface?.appendChild(button);
    (0, import_mod5.onclickdown)(button, () => {
      moveElements(void 0, { select: id });
    });
  }
  function removeOverlay(id) {
    if (id) {
      document.querySelector(`#move-overlay-${id}`)?.remove();
    } else {
      for (const overlay of document.querySelectorAll(".move-overlay")) {
        overlay.remove();
      }
    }
  }
  function removeSelection() {
    const toolbox = document.getElementById("element-mover");
    const elements2 = document.querySelectorAll(
      ".move-overlay, #grid-mover button, .grid-spanner, #element-mover button"
    );
    for (const elem of elements2) {
      elem.classList.remove("selected");
      elem.removeAttribute("disabled");
    }
    toolbox?.classList.remove("active");
  }
  function interfaceFade(fade) {
    if (fade === "in") {
      const dominterface3 = document.getElementById("interface");
      dominterface3.style.removeProperty("opacity");
      setTimeout(() => {
        dominterface3.style.transition = "";
      }, 200);
    }
    if (fade === "out") {
      const dominterface3 = document.getElementById("interface");
      dominterface3.style.opacity = "0";
      dominterface3.style.transition = "opacity 200ms cubic-bezier(.215,.61,.355,1)";
    }
  }

  // src/scripts/shared/api.ts
  async function apiWebSocket(path) {
    try {
      const socket2 = new WebSocket(`wss://services.bonjourr.fr/${path}`);
      const isOpened = await new Promise((resolve2) => {
        socket2.onopen = () => resolve2(true);
        socket2.onerror = () => resolve2(false);
        socket2.onclose = () => resolve2(false);
      });
      if (isOpened) {
        return socket2;
      }
    } catch (_error) {
    }
  }
  async function apiFetch(path) {
    try {
      return await fetch(`https://services.bonjourr.fr${path}`);
    } catch (_error) {
    }
  }

  // src/scripts/features/clock/helpers.ts
  function fixunits(val) {
    return (val < 10 ? "0" : "") + val.toString();
  }
  function isFace(str) {
    return ["none", "number", "roman", "marks", "swiss", "braun"].includes(str ?? "");
  }
  function isHands(str) {
    return ["modern", "swiss", "classic", "braun", "apple"].includes(str ?? "");
  }
  function isShape(str) {
    return ["round", "square", "rectangle"].includes(str ?? "");
  }
  function isDateFormat(str = "") {
    return ["auto", "eu", "us", "cn"].includes(str);
  }
  function isAmpmPosition(str) {
    return ["top-left", "top-right", "bottom-left", "bottom-right"].includes(str ?? "");
  }

  // src/scripts/features/clock/world.ts
  function toggleWorldClocksOptions() {
    const parents = document.querySelectorAll(".worldclocks-item");
    const inputs = document.querySelectorAll(".worldclocks-item input");
    let hasWorld = false;
    parents.forEach((parent, i) => {
      const currHasText = !!inputs[i]?.value;
      const nextHasText = !!inputs[i - 1]?.value;
      parent?.classList.toggle("shown", i === 0 || currHasText || nextHasText);
      if (!hasWorld && currHasText) {
        hasWorld = true;
      }
    });
  }
  function toggleTimezoneOptions(data) {
    const timezoneOptions = document.getElementById("timezone_options");
    const hasWorldClock = data.clock.worldclocks && !!data?.worldclocks[0]?.region;
    timezoneOptions?.classList.toggle("shown", !hasWorldClock);
  }

  // src/scripts/features/clock/greetings.ts
  var oneInFive = Math.random() > 0.8 ? 1 : 0;
  function displayGreetings({ mode, name, custom }) {
    const date = userDate();
    const domgreetings = document.getElementById("greetings");
    const domgreeting = document.getElementById("greeting");
    const domname = document.getElementById("greeting-name");
    const rare = oneInFive;
    const hour = date.getHours();
    let period;
    if (hour < 3) {
      period = "evening";
    } else if (hour < 5) {
      period = "night";
    } else if (hour < 12) {
      period = "morning";
    } else if (hour < 18) {
      period = "afternoon";
    } else {
      period = "evening";
    }
    if (mode === "custom" && custom && custom[period]) {
      const greet = name ? custom[period].replace("$name", name) : custom[period];
      domgreetings.style.textTransform = "none";
      domgreeting.textContent = greet;
      domname.textContent = "";
    } else {
      const greetings = {
        morning: "Good morning",
        afternoon: "Good afternoon",
        evening: "Good evening",
        night: ["Good night", "Sweet dreams"][rare]
      };
      const greet = greetings[period];
      domgreetings.style.textTransform = name || rare && period === "night" ? "none" : "capitalize";
      domgreeting.textContent = tradThis(greet) + (name ? ", " : "");
      domname.textContent = name ?? "";
    }
  }

  // src/scripts/dependencies/vietnamese-calendar.ts
  function INT(d) {
    return Math.floor(d);
  }
  function jdFromDate(dd, mm, yy) {
    const a = INT((14 - mm) / 12);
    const y = yy + 4800 - a;
    const m = mm + 12 * a - 3;
    let jd = dd + INT((153 * m + 2) / 5) + 365 * y + INT(y / 4) - INT(y / 100) + INT(y / 400) - 32045;
    if (jd < 2299161) {
      jd = dd + INT((153 * m + 2) / 5) + 365 * y + INT(y / 4) - 32083;
    }
    return jd;
  }
  function NewMoon(k) {
    let deltat;
    const T = k / 1236.85;
    const T2 = T * T;
    const T3 = T2 * T;
    const dr = Math.PI / 180;
    let Jd1 = 241502075933e-5 + 29.53058868 * k + 1178e-7 * T2 - 155e-9 * T3;
    Jd1 += 33e-5 * Math.sin((166.56 + 132.87 * T - 9173e-6 * T2) * dr);
    const M = 359.2242 + 29.10535608 * k - 333e-7 * T2 - 347e-8 * T3;
    const Mpr = 306.0253 + 385.81691806 * k + 0.0107306 * T2 + 1236e-8 * T3;
    const F = 21.2964 + 390.67050646 * k - 16528e-7 * T2 - 239e-8 * T3;
    let C1 = (0.1734 - 393e-6 * T) * Math.sin(M * dr) + 21e-4 * Math.sin(2 * dr * M);
    C1 = C1 - 0.4068 * Math.sin(Mpr * dr) + 0.0161 * Math.sin(dr * 2 * Mpr);
    C1 -= 4e-4 * Math.sin(dr * 3 * Mpr);
    C1 = C1 + 0.0104 * Math.sin(dr * 2 * F) - 51e-4 * Math.sin(dr * (M + Mpr));
    C1 = C1 - 74e-4 * Math.sin(dr * (M - Mpr)) + 4e-4 * Math.sin(dr * (2 * F + M));
    C1 = C1 - 4e-4 * Math.sin(dr * (2 * F - M)) - 6e-4 * Math.sin(dr * (2 * F + Mpr));
    C1 = C1 + 1e-3 * Math.sin(dr * (2 * F - Mpr)) + 5e-4 * Math.sin(dr * (2 * Mpr + M));
    if (T < -11) {
      deltat = 1e-3 + 839e-6 * T + 2261e-7 * T2 - 845e-8 * T3 - 81e-9 * T * T3;
    } else {
      deltat = -278e-6 + 265e-6 * T + 262e-6 * T2;
    }
    const JdNew = Jd1 + C1 - deltat;
    return JdNew;
  }
  function SunLongitude(jdn) {
    const T = (jdn - 2451545) / 36525;
    const T2 = T * T;
    const dr = Math.PI / 180;
    const M = 357.5291 + 35999.0503 * T - 1559e-7 * T2 - 48e-8 * T * T2;
    const L0 = 280.46645 + 36000.76983 * T + 3032e-7 * T2;
    let dl = (1.9146 - 4817e-6 * T - 14e-6 * T2) * Math.sin(dr * M);
    dl = dl + (0.019993 - 101e-6 * T) * Math.sin(dr * 2 * M) + 29e-5 * Math.sin(dr * 3 * M);
    let L = L0 + dl;
    L *= dr;
    L -= Math.PI * 2 * INT(L / (Math.PI * 2));
    return L;
  }
  function getSunLongitude(dayNumber, timeZone) {
    return INT(SunLongitude(dayNumber - 0.5 - timeZone / 24) / Math.PI * 6);
  }
  function getNewMoonDay(k, timeZone) {
    return INT(NewMoon(k) + 0.5 + timeZone / 24);
  }
  function getLunarMonth11(yy, timeZone) {
    const off = jdFromDate(31, 12, yy) - 2415021;
    const k = INT(off / 29.530588853);
    let nm = getNewMoonDay(k, timeZone);
    const sunLong = getSunLongitude(nm, timeZone);
    if (sunLong >= 9) {
      nm = getNewMoonDay(k - 1, timeZone);
    }
    return nm;
  }
  function getLeapMonthOffset(a11, timeZone) {
    const k = INT((a11 - 2415021076998695e-9) / 29.530588853 + 0.5);
    let last = 0;
    let i = 1;
    let arc = getSunLongitude(getNewMoonDay(k + i, timeZone), timeZone);
    do {
      last = arc;
      i++;
      arc = getSunLongitude(getNewMoonDay(k + i, timeZone), timeZone);
    } while (arc !== last && i < 14);
    return i - 1;
  }
  function convertSolar2Lunar(dd, mm, yy, timeZone) {
    const dayNumber = jdFromDate(dd, mm, yy);
    const k = INT((dayNumber - 2415021076998695e-9) / 29.530588853);
    let monthStart = getNewMoonDay(k + 1, timeZone);
    if (monthStart > dayNumber) {
      monthStart = getNewMoonDay(k, timeZone);
    }
    let a11 = getLunarMonth11(yy, timeZone);
    let b11 = a11;
    let lunarYear;
    if (a11 >= monthStart) {
      lunarYear = yy;
      a11 = getLunarMonth11(yy - 1, timeZone);
    } else {
      lunarYear = yy + 1;
      b11 = getLunarMonth11(yy + 1, timeZone);
    }
    const lunarDay = dayNumber - monthStart + 1;
    const diff = INT((monthStart - a11) / 29);
    let lunarLeap = 0;
    let lunarMonth = diff + 11;
    if (b11 - a11 > 365) {
      const leapMonthDiff = getLeapMonthOffset(a11, timeZone);
      if (diff >= leapMonthDiff) {
        lunarMonth = diff + 10;
        if (diff === leapMonthDiff) {
          lunarLeap = 1;
        }
      }
    }
    if (lunarMonth > 12) {
      lunarMonth -= 12;
    }
    if (lunarMonth >= 11 && diff < 4) {
      lunarYear -= 1;
    }
    return [lunarDay, lunarMonth, lunarYear, lunarLeap];
  }
  function getVnCalendar(date) {
    const can = ["Gi\xE1p", "\u1EA4t", "B\xEDnh", "\u0110inh", "M\u1EADu", "K\u1EF7", "Canh", "T\xE2n", "Nh\xE2m", "Qu\xFD"];
    const chi = ["T\xFD", "S\u1EEDu", "D\u1EA7n", "M\xE3o", "Th\xECn", "T\u1EF5", "Ng\u1ECD", "M\xF9i", "Th\xE2n", "D\u1EADu", "Tu\u1EA5t", "H\u1EE3i"];
    const ld = convertSolar2Lunar(date.getDate(), date.getMonth() + 1, date.getFullYear(), 7);
    const yearCanChi = `${can[(ld[2] + 6) % 10]} ${chi[(ld[2] + 8) % 12]}`;
    const leapText = ld[3] ? " (nhu\u1EADn)" : "";
    return `\xC2m l\u1ECBch: ${ld[0]} th\xE1ng ${ld[1]}${leapText} n\u0103m ${yearCanChi}`;
  }

  // src/scripts/features/clock/date.ts
  function clockDate(wrapper, date, dateformat, timezone) {
    const datedom = wrapper.querySelector(".clock-date");
    const aa = wrapper.querySelector(".clock-date-aa");
    const bb = wrapper.querySelector(".clock-date-bb");
    const cc = wrapper.querySelector(".clock-date-cc");
    const secondary = wrapper.querySelector(".clock-date-secondary");
    const lang = getLang().replaceAll("_", "-");
    const day = new Intl.DateTimeFormat(lang, { day: "numeric" }).format(date);
    const month = new Intl.DateTimeFormat(lang, { month: "long" }).format(date);
    const weekday = new Intl.DateTimeFormat(lang, { weekday: "long" }).format(date);
    datedom.classList.remove("eu", "us", "cn");
    datedom.classList.add(dateformat);
    if (dateformat === "auto") {
      const intl = new Intl.DateTimeFormat(lang, { weekday: "long", month: "long", day: "numeric" });
      aa.textContent = intl.format(date);
      bb.textContent = "";
      cc.textContent = "";
    }
    if (dateformat === "eu") {
      aa.textContent = weekday;
      bb.textContent = day;
      cc.textContent = month;
    }
    if (dateformat === "us") {
      aa.textContent = weekday;
      bb.textContent = month;
      cc.textContent = day;
    }
    if (dateformat === "cn") {
      aa.textContent = month;
      bb.textContent = day;
      cc.textContent = weekday;
    }
    if (lang === "vi" && (timezone === "auto" || timezone === "Asia/Ho_Chi_Minh")) {
      secondary.textContent = getVnCalendar(date);
    } else {
      secondary.textContent = "";
    }
  }

  // src/scripts/features/clock/clock.ts
  var clockInterval;
  var clockVisibilityListener = null;
  function startClock(options) {
    const { clock: clock2, world, dateformat, greetings } = options;
    document.getElementById("time")?.classList.toggle("is-analog", clock2.analog);
    document.getElementById("time")?.classList.toggle("seconds", clock2.seconds);
    document.querySelectorAll(".clock-wrapper").forEach((node, index) => {
      if (index > 0) {
        node.remove();
      }
    });
    const clocks = [];
    if (clock2.worldclocks) {
      clocks.push(...world.filter(({ region }) => region));
    }
    if (clocks.length === 0) {
      clocks.push({ region: "", timezone: clock2.timezone });
    }
    setUserDate(clocks[0].timezone);
    start(true);
    clearInterval(clockInterval);
    if (clockVisibilityListener) {
      document.removeEventListener("visibilitychange", clockVisibilityListener);
    }
    if (!document.hidden) {
      clockInterval = setInterval(start, 1e3);
    }
    clockVisibilityListener = () => {
      clearInterval(clockInterval);
      if (!document.hidden) {
        start();
        clockInterval = setInterval(start, 1e3);
      }
    };
    document.addEventListener("visibilitychange", clockVisibilityListener);
    function start(firstStart) {
      for (let index = 0; index < clocks.length; index++) {
        const { region, timezone } = clocks[index];
        const domclock = getClock(index);
        const domregion = domclock.querySelector(".clock-region");
        const date = userDate(timezone);
        const isNextHour = date.getMinutes() === 0;
        if (clock2.analog) {
          analog(domclock, clock2, timezone);
        } else {
          digital(domclock, clock2, timezone);
        }
        if (isNextHour || firstStart) {
          clockDate(domclock, date, dateformat, timezone);
        }
        if (domregion) {
          domregion.textContent = region;
        }
      }
      displayGreetings(greetings);
    }
  }
  function getClock(index) {
    const container2 = document.getElementById("time-container");
    const wrapper = document.querySelector(`.clock-wrapper[data-index="${index}"]`);
    if (wrapper) {
      return wrapper;
    }
    const first = document.getElementById("clock-wrapper");
    const clone = first?.cloneNode(true);
    clone.removeAttribute("id");
    clone.dataset.index = index.toString();
    container2?.appendChild(clone);
    return clone;
  }
  function digital(wrapper, clock2, timezone) {
    const date = userDate(timezone);
    const domclock = wrapper.querySelector(".digital");
    const hh = wrapper.querySelector(".digital-hh");
    const mm = wrapper.querySelector(".digital-mm");
    const ss = wrapper.querySelector(".digital-ss");
    const m = fixunits(date.getMinutes());
    const s = fixunits(date.getSeconds());
    let h = clock2.ampm ? date.getHours() % 12 : date.getHours();
    if (!domclock || !hh || !mm || !ss) {
      return;
    }
    if (clock2.ampmlabel) {
      domclock.dataset.ampmLabel = clock2.ampmposition ?? "top-left";
    } else {
      delete domclock.dataset.ampmLabel;
    }
    if (clock2.ampm) {
      domclock.dataset.ampm = date.getHours() < 12 ? "am" : "pm";
    } else {
      delete domclock.dataset.ampm;
    }
    if (clock2.ampm && h === 0) {
      h = 12;
    }
    domclock.classList.toggle("zero", !clock2.ampm && h < 10);
    hh.textContent = h.toString();
    mm.textContent = m.toString();
    ss.textContent = s.toString();
  }
  function analog(wrapper, clock2, timezone) {
    const date = userDate(timezone);
    const m = ((date.getMinutes() + date.getSeconds() / 60) * 6).toFixed(1);
    const h = ((date.getHours() % 12 + date.getMinutes() / 60) * 30).toFixed(1);
    const s = (date.getSeconds() * 6).toFixed(1);
    wrapper.querySelector(".analog-hours")?.style.setProperty("--deg", `${h}deg`);
    wrapper.querySelector(".analog-minutes")?.style.setProperty("--deg", `${m}deg`);
    if (!clock2.seconds) {
      return;
    }
    wrapper.querySelector(".analog-seconds")?.style.setProperty("--deg", `${s}deg`);
  }

  // src/scripts/features/clock/index.ts
  var defaultAnalogStyle = {
    face: "none",
    hands: "modern",
    shape: "round",
    border: "#ffff",
    background: "#fff2"
  };
  var sinogramRegex = /zh-CN|zh-HK|ja/;
  var defaultTimezones = ["Europe/Paris", "America/Sao_Paulo", "America/Los_Angeles", "Asia/Tokyo", "Asia/Kolkata"];
  var defaultRegions = ["Paris", "New York", "Tokyo", "Lisbon", "Los Angeles"];
  function clock(init2, event) {
    if (event) {
      clockUpdate(event);
      return;
    }
    const clock2 = init2?.clock ?? { ...SYNC_DEFAULT.clock };
    const world = init2?.worldclocks ?? { ...SYNC_DEFAULT.worldclocks };
    const dateformat = init2?.dateformat || "eu";
    const greetings = {
      name: init2?.greeting || "",
      mode: init2?.greetingsmode || "auto",
      custom: init2?.greetingscustom
    };
    try {
      startClock({ clock: clock2, world, greetings, dateformat });
      greetingSize(init2?.greetingsize);
      analogStyle(init2?.analogstyle);
      clockSize(clock2.size);
      displayInterface("clock");
      onSettingsLoad(toggleWorldClocksOptions);
    } catch (err) {
      console.info(err);
    }
  }
  async function clockUpdate(update) {
    const data = await storage.sync.get();
    const analogstyle = data.analogstyle ?? structuredClone(defaultAnalogStyle);
    if (update.analog !== void 0) {
      toggleSettingsDropdown("analog_options", update.analog);
      toggleSettingsDropdown("digital_options", !update.analog);
    }
    if (isDateFormat(update.dateformat)) {
      data.dateformat = update.dateformat;
      storage.sync.set({ dateformat: update.dateformat });
    }
    if (update.greeting !== void 0) {
      data.greeting = stringMaxSize(update.greeting, 64);
      displayGreetings({
        mode: data.greetingsmode,
        name: data.greeting,
        custom: data.greetingscustom
      });
      storage.sync.set({ greeting: data.greeting });
    }
    if (update.greetingsize !== void 0) {
      greetingSize(update.greetingsize);
      storage.sync.set({ greetingsize: update.greetingsize });
    }
    if (update.greetingsmode !== void 0) {
      const mode = update.greetingsmode;
      data.greetingsmode = mode;
      storage.sync.set({ greetingsmode: mode });
      toggleSettingsDropdown("greetingscustom_options", mode === "custom");
      displayGreetings({ mode, name: data.greeting, custom: data.greetingscustom });
    }
    if (update.greetingscustom !== void 0) {
      const newCustoms = {
        ...data.greetingscustom,
        ...update.greetingscustom
      };
      data.greetingscustom = newCustoms;
      storage.sync.set({ greetingscustom: newCustoms });
      displayGreetings({
        mode: data.greetingsmode,
        name: data.greeting,
        custom: newCustoms
      });
    }
    if (isHands(update.hands)) {
      analogstyle.hands = update.hands;
    }
    if (isShape(update.shape)) {
      analogstyle.shape = update.shape;
    }
    if (isFace(update.face)) {
      analogstyle.face = update.face;
    }
    if (update.background || update.border) {
      const option = update.background ? "background" : "border";
      analogstyle[option] = hexColorFromSplitRange(`#analog-${option}-range`);
      analogStyle(analogstyle);
      if (update?.[option] === "opacity") {
        eventDebounce({ analogstyle });
      }
      if (update?.[option] === "shade") {
        storage.sync.set({ analogstyle });
      }
      return;
    }
    if (update.worldclocks !== void 0) {
      data.clock.worldclocks = update.worldclocks;
      toggleTimezoneOptions(data);
    }
    if (update.world !== void 0) {
      const index = update.world.index;
      const baseclock = { region: defaultRegions[index], timezone: defaultTimezones[index] };
      const worldclock = data.worldclocks?.[index] ?? baseclock;
      const { region, timezone } = update.world;
      if (region !== void 0) {
        worldclock.region = region;
      }
      if (timezone !== void 0) {
        worldclock.timezone = timezone;
      }
      data.worldclocks[index] = worldclock;
      toggleWorldClocksOptions();
      toggleTimezoneOptions(data);
    }
    data.clock = {
      ampm: update.ampm ?? data.clock.ampm,
      size: update.size ?? data.clock.size,
      analog: update.analog ?? data.clock.analog,
      seconds: update.seconds ?? data.clock.seconds,
      timezone: update.timezone ?? data.clock.timezone,
      ampmlabel: update.ampmlabel ?? data.clock.ampmlabel,
      ampmposition: isAmpmPosition(update.ampmposition) ? update.ampmposition : data.clock.ampmposition,
      worldclocks: update.worldclocks ?? data.clock.worldclocks
    };
    storage.sync.set({
      clock: data.clock,
      worldclocks: data.worldclocks,
      analogstyle,
      dateformat: data.dateformat
    });
    startClock({
      clock: data.clock,
      world: data.worldclocks,
      dateformat: data.dateformat,
      greetings: {
        name: data.greeting,
        mode: data.greetingsmode,
        custom: data.greetingscustom
      }
    });
    analogStyle(data.analogstyle);
    clockSize(data.clock.size);
  }
  function analogStyle(style = structuredClone(defaultAnalogStyle)) {
    const { face, shape, hands } = style;
    const time = document.getElementById("time");
    const spans = document.querySelectorAll(".analog .analog-face span");
    const backgroundAlpha = Number.parseInt(style.background.slice(4), 16);
    const isWhiteOpaque = style.background?.includes("fff") && backgroundAlpha > 7;
    const isTransparent = backgroundAlpha === 0;
    let faceNumbers = ["12", "3", "6", "9"];
    const lang = getLang();
    if (lang === "am") {
      faceNumbers = ["\u0533", "\u0536", "\u0539", "\u053A\u0532"];
    } else if (lang === "ar") {
      faceNumbers = ["\u0663", "\u0666", "\u0669", "\u0661\u0662"];
    } else if (lang === "fa") {
      faceNumbers = ["\u06F3", "\u06F6", "\u06F9", "\u06F1\u06F2"];
    } else if (lang.match(sinogramRegex)) {
      faceNumbers = ["\u4E09", "\u516D", "\u4E5D", "\u5341\u4E8C"];
    }
    spans.forEach((span, i) => {
      if (face === "roman") {
        span.textContent = ["XII", "III", "VI", "IX"][i % 4];
      } else if (face === "marks") {
        span.textContent = ["\u2502", "\u2015", "\u2502", "\u2015"][i % 4];
      } else if (face === "number") {
        span.textContent = faceNumbers[i % 4];
      } else {
        span.textContent = "";
      }
    });
    time.dataset.face = face === "swiss" || face === "braun" ? face : "";
    time.dataset.shape = shape || "";
    time.dataset.hands = hands || "";
    time.classList.toggle("transparent", isTransparent);
    time.classList.toggle("white-opaque", isWhiteOpaque);
    time.style.setProperty("--analog-border", style.border);
    time.style.setProperty("--analog-background", style.background);
  }
  function clockSize(size = 5) {
    document.documentElement.style.setProperty("--clock-size", `${size.toString()}em`);
  }
  function greetingSize(size = "3") {
    document.documentElement.style.setProperty("--greeting-size", `${size}em`);
  }

  // src/scripts/features/fonts.ts
  var familyForm = networkForm("f_customfont");
  var systemfont = (() => {
    const fonts = {
      fallback: { placeholder: "Arial", weights: ["500", "600", "800"] },
      windows: { placeholder: "Segoe UI", weights: ["300", "400", "600", "700", "800"] },
      android: { placeholder: "Roboto", weights: ["100", "300", "400", "500", "700", "900"] },
      linux: { placeholder: "Fira Sans", weights: ["100", "200", "300", "400", "500", "600", "700", "800", "900"] },
      apple: {
        placeholder: "SF Pro Display",
        weights: ["100", "200", "300", "400", "500", "600", "700", "800", "900"]
      }
    };
    if (SYSTEM_OS === "windows") {
      return fonts.windows;
    }
    if (SYSTEM_OS === "android") {
      return fonts.android;
    }
    if (SYSTEM_OS === "mac") {
      return fonts.apple;
    }
    if (SYSTEM_OS === "ios") {
      return fonts.apple;
    }
    return fonts.linux;
  })();
  function customFont(init2, event) {
    if (event) {
      updateCustomFont(event);
      return;
    }
    if (init2) {
      try {
        const font = migrateToNewFormat(init2);
        displayFont(font);
        displayInterface("fonts");
        onSettingsLoad(() => {
          initFontSettings(font);
        });
      } catch (_) {
      }
    }
  }
  async function updateCustomFont({ family, weight, size, lang, autocomplete, color }) {
    if (autocomplete) {
      setAutocompleteSettings();
      return;
    }
    const data = await storage.sync.get("font");
    if (family !== void 0) {
      data.font = await updateFontFamily(data, family);
    }
    if (weight) {
      data.font.weight = weight || "400";
      displayFont(data.font);
    }
    if (color) {
      data.font.color = color;
      colorInput("font-color", color);
      setFontColor(color);
    }
    if (size) {
      data.font.size = size;
      setFontSize(size);
    }
    if (lang) {
      handleLangSwitch(data.font);
      return;
    }
    eventDebounce({ font: data.font });
  }
  async function updateFontFamily(data, family) {
    const iWeight = document.getElementById("i_weight");
    const familyType = family.length === 0 ? "none" : systemFontChecker(family) ? "system" : "fontsource";
    let font = {
      family: "",
      system: true,
      size: data.font.size,
      weight: SYSTEM_OS === "windows" ? "400" : "300",
      weightlist: systemfont.weights,
      color: data.font.color
    };
    switch (familyType) {
      case "fontsource": {
        familyForm.load();
        const newfont = await getNewFont(font, family);
        if (newfont && navigator.onLine) {
          font = { ...font, ...newfont };
          displayFont(font);
          await waitForFontLoad(family);
          familyForm.accept("i_customfont", family);
          clock(void 0, {});
        }
        if (font.family === "") {
          familyForm.warn(tradThis("Cannot load this font"));
          return data.font;
        }
        break;
      }
      case "system": {
        font.family = family;
        displayFont(font);
        familyForm.accept("i_customfont", family);
        break;
      }
      default: {
        displayFont(font);
        familyForm.accept("i_customfont", systemfont.placeholder);
      }
    }
    clock(void 0, {});
    setWeightSettings(font.weightlist);
    iWeight.value = font.weight;
    return font;
  }
  async function handleLangSwitch(font) {
    const noCustomOrSystemFont = !font.family || font?.system;
    if (noCustomOrSystemFont) {
      return;
    }
    const newfont = await getNewFont(font, font.family);
    if (newfont === void 0) {
      updateCustomFont({ family: "" });
      return;
    }
    font.family = newfont.family;
    font.weight = newfont.weight;
    font.weightlist = newfont.weightlist;
    displayFont(font);
    setAutocompleteSettings(true);
  }
  async function getNewFont(font, newfamily) {
    const fontlist = await (await apiFetch("/fonts"))?.json() ?? [];
    let newfont;
    for (const item of fontlist) {
      const hasCorrectSubset = item.subsets.includes(getRequiredSubset());
      const isFamily = item.family.toLowerCase() === newfamily.toLowerCase();
      if (hasCorrectSubset && isFamily) {
        newfont = item;
      }
    }
    if (newfont) {
      font.weight = "400";
      font.system = false;
      font.family = newfamily;
      font.weightlist = newfont.weights.map((w) => w.toString());
      return font;
    }
    return;
  }
  function displayFont({ family, size, weight, system, color }) {
    const clockWeight = Number.parseInt(weight) > 100 ? systemfont.weights[systemfont.weights.indexOf(weight) - 1] : weight;
    const subset = getRequiredSubset();
    const id = family.toLocaleLowerCase().replaceAll(" ", "-");
    const fontfacedom = document.getElementById("fontface");
    if (!system) {
      let fontface = `
			@font-face {font-family: "${family}";
				src: url(https://cdn.jsdelivr.net/fontsource/fonts/${id}@latest/latin-${weight}-normal.woff2) format('woff2');
			}
		`;
      if (subset !== "latin") {
        fontface += fontface.replace("latin", subset);
      }
      if (fontfacedom) {
        fontfacedom.textContent += fontface;
      }
    }
    document.documentElement.style.setProperty("--font-family", family ? `"${family}"` : null);
    document.documentElement.style.setProperty("--font-weight", weight);
    document.documentElement.style.setProperty("--font-weight-clock", family ? weight : clockWeight);
    setFontSize(size);
    setFontColor(color);
  }
  function setFontSize(size) {
    document.documentElement.style.setProperty("--font-size", `${Number.parseInt(size) / 16}em`);
  }
  function setFontColor(color) {
    const rgbColor = hexToRGB(color);
    document.documentElement.style.setProperty("--font-color", `${rgbColor.r}, ${rgbColor.g}, ${rgbColor.b}`);
  }
  function initFontSettings(font) {
    const hasCustomWeights = font && font.weightlist.length > 0;
    const weights = hasCustomWeights ? font.weightlist : systemfont.weights;
    setWeightSettings(weights);
  }
  async function setAutocompleteSettings(isLangSwitch) {
    const dlFontfamily = document.querySelector("#dl_fontfamily");
    if (isLangSwitch && dlFontfamily?.childNodes) {
      for (const node of dlFontfamily.childNodes) {
        node.remove();
      }
    }
    if (dlFontfamily?.childElementCount === 0) {
      const fontlist = await (await apiFetch("/fonts"))?.json() ?? [];
      const fragment = new DocumentFragment();
      const requiredSubset = getRequiredSubset();
      for (const item of fontlist) {
        if (item.subsets.includes(requiredSubset)) {
          const option = document.createElement("option");
          option.textContent = item.family;
          option.value = item.family;
          fragment.appendChild(option);
        }
      }
      dlFontfamily?.appendChild(fragment);
    }
  }
  function setWeightSettings(weights) {
    const options = document.querySelectorAll("#i_weight option");
    for (const option of options) {
      option.classList.toggle("hidden", weights.includes(option.value) === false);
    }
  }
  async function fontIsAvailableInSubset(lang, family) {
    const fontlist = await (await apiFetch("/fonts"))?.json();
    const font = fontlist?.find((item) => item.family === family);
    const subset = getRequiredSubset(lang);
    return font?.subsets.includes(subset);
  }
  function systemFontChecker(family) {
    const p = document.createElement("p");
    p.setAttribute("style", "position: absolute; opacity: 0; font-family: invalid font;");
    p.textContent = `mqlskdjfhgpaozieurytwnxbcv?./,;:1234567890${tradThis("New tab")}`;
    document.getElementById("interface")?.prepend(p);
    const firstW = p.getBoundingClientRect().width;
    p.style.fontFamily = `'${family}'`;
    const secondW = p.getBoundingClientRect().width;
    const hasLoadedFont = firstW !== secondW;
    p.remove();
    return hasLoadedFont;
  }
  function waitForFontLoad(family) {
    return new Promise((resolve2) => {
      let limitcounter = 0;
      let hasLoadedFont = systemFontChecker(family);
      const interval = setInterval(() => {
        if (hasLoadedFont || limitcounter === 100) {
          clearInterval(interval);
          return resolve2(true);
        }
        hasLoadedFont = systemFontChecker(family);
        limitcounter++;
      }, 100);
    });
  }
  function getRequiredSubset(lang = getLang()) {
    let subset = "latin";
    if (lang in subsets) {
      subset = subsets[lang];
    }
    return subset;
  }
  function migrateToNewFormat(font) {
    if (font?.weightlist) {
      return font;
    }
    if (font.availWeights) {
      font.weightlist = font.availWeights;
    }
    font.system = systemFontChecker(font.family);
    font.availWeights = void 0;
    font.url = void 0;
    storage.local.remove("fontface");
    storage.local.remove("fonts");
    storage.sync.remove("font");
    setTimeout(() => storage.sync.set({ font }));
    return font;
  }

  // src/scripts/features/hide.ts
  async function hideElements(hide, options) {
    hide ??= {};
    if (options?.isEvent) {
      const sync = await storage.sync.get("hide");
      const newhide = {
        ...sync.hide,
        // ⚠️ sync must be first. If not, event doesn't save
        ...hide
      };
      storage.sync.set({ hide: newhide });
    }
    for (const [key, val] of Object.entries(hide)) {
      for (const element of document.querySelectorAll(`[data-hide="${key}"]`)) {
        element?.classList.toggle("he_hidden", val);
      }
    }
  }

  // src/scripts/features/searchbar.ts
  var customEngineForm = networkForm("f_sbrequest");
  var socket;
  var domainPattern = /^(?!.*\s)(?:https?:\/\/)?([a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*\.[a-zA-Z0-9-]{2,})/i;
  var domsuggestions = document.getElementById("sb-suggestions");
  var domcontainer = document.getElementById("sb_container");
  var domsearchbar = document.getElementById("searchbar");
  var dombuttons = document.getElementById("sb-buttons");
  var emptyButton = document.getElementById("sb_empty");
  var display = (shown = false) => domcontainer?.classList.toggle("hidden", !shown);
  var setEngine = (value = "google") => domcontainer?.setAttribute("data-engine", value);
  var setRequest = (value = "") => domcontainer?.setAttribute("data-request", stringMaxSize(value, 512));
  var setNewtab = (value = false) => domcontainer?.setAttribute("data-newtab", value.toString());
  var setSuggestions = (value = true) => domcontainer?.setAttribute("data-suggestions", value.toString());
  var setPlaceholder = (value = "") => domsearchbar?.setAttribute("placeholder", value);
  var setWidth = (value = 30) => document.documentElement.style.setProperty("--searchbar-width", `${value.toString()}em`);
  var setBackground = (value = "#fff2") => {
    document.documentElement.style.setProperty("--searchbar-background", value);
    document.getElementById("sb_container")?.classList.toggle("opaque", value.includes("#fff") && opacityFromHex(value) > 7);
  };
  function searchbar(init2, update) {
    if (update) {
      updateSearchbar(update);
      return;
    }
    try {
      display(init2?.on);
      setWidth(init2?.width);
      setEngine(init2?.engine);
      setRequest(init2?.request);
      setNewtab(init2?.newtab);
      setPlaceholder(init2?.placeholder);
      setSuggestions(init2?.suggestions);
      setBackground(init2?.background);
      dombuttons?.addEventListener("click", focusSearchbar);
      emptyButton?.addEventListener("click", removeInputText);
      domcontainer?.addEventListener("submit", submitSearch);
      domsearchbar?.addEventListener("input", handleUserInput);
      domsearchbar?.addEventListener("focus", () => {
        document.dispatchEvent(new Event("close-edit"));
        domsearchbar.focus();
      });
      document.addEventListener("keydown", searchbarShortcut);
    } catch (_) {
    }
  }
  async function updateSearchbar({
    engine,
    newtab,
    background,
    placeholder,
    request,
    suggestions: suggestions2,
    width
  }) {
    const { searchbar: searchbar2 } = await storage.sync.get("searchbar");
    if (!searchbar2) {
      return;
    }
    if (isValidEngine(engine)) {
      toggleSettingsDropdown("searchbar_request", engine === "custom");
      searchbar2.engine = engine;
      setEngine(engine);
    }
    if (suggestions2 !== void 0) {
      searchbar2.suggestions = suggestions2;
      setSuggestions(suggestions2);
    }
    if (newtab !== void 0) {
      searchbar2.newtab = newtab;
      setNewtab(newtab);
    }
    if (width !== void 0) {
      searchbar2.width = Number.parseInt(width);
      setWidth(searchbar2.width);
    }
    if (placeholder !== void 0) {
      searchbar2.placeholder = placeholder;
      setPlaceholder(placeholder);
    }
    if (background) {
      searchbar2.background = hexColorFromSplitRange("sb-background-range");
      setBackground(searchbar2.background);
    }
    if (request) {
      const form = document.querySelector("#f_sbrequest");
      if (!form) {
        return;
      }
      const formdata = new FormData(form);
      const value = formdata.get("sbrequest")?.toString() ?? "";
      const noQueryPlaceholder = !value.includes("%s") && value.length > 0;
      const badCustomDomain = !value.match(domainPattern);
      if (badCustomDomain) {
        customEngineForm.warn(tradThis("URL seems wrong"));
        return;
      }
      if (noQueryPlaceholder) {
        customEngineForm.warn(tradThis("No %s present in URL"));
        return;
      }
      searchbar2.request = stringMaxSize(value, 512);
      setRequest(searchbar2.request);
      customEngineForm.accept();
    }
    eventDebounce({ searchbar: searchbar2 });
  }
  function isValidUrl(string2) {
    try {
      const basicURL = !!new URL(string2);
      const regexMatch = domainPattern.test(string2);
      return basicURL && regexMatch;
    } catch (_) {
      return false;
    }
  }
  function createSearchUrl(val, engine) {
    const urls = {
      default: "",
      google: "https://www.google.com/search?q=%s",
      ddg: "https://duckduckgo.com/?q=%s",
      startpage: "https://www.startpage.com/do/search?query=%s",
      qwant: "https://www.qwant.com/?q=%s",
      yahoo: "https://search.yahoo.com/search?q=%s",
      bing: "https://www.bing.com/search?q=%s",
      brave: "https://search.brave.com/search?q=%s",
      ecosia: "https://www.ecosia.org/search?q=%s",
      lilo: "https://search.lilo.org/?q=%s",
      baidu: "https://www.baidu.com/s?wd=%s",
      custom: domcontainer?.dataset.request || ""
    };
    if (!isValidEngine(engine)) {
      return "about:blank";
    }
    if (engine === "custom" && !urls.custom) {
      return "about:blank";
    }
    let result = "";
    const query = encodeURIComponent(val ?? "");
    const localizedEngine = tradThis(engine);
    result = localizedEngine.includes("%s") ? localizedEngine : urls[engine];
    result = result.replace("%s", query);
    return result;
  }
  function submitSearch(e) {
    e.preventDefault();
    const canUseDefault = !IS_MOBILE && (PLATFORM === "chrome" || PLATFORM === "firefox");
    const newtab = domcontainer?.dataset.newtab === "true";
    const val = domsearchbar?.value;
    let engine = domcontainer?.dataset.engine ?? "default";
    if (!val) {
      return;
    }
    if (socket) {
      socket.close();
    }
    if (canUseDefault && engine === "default") {
      ;
      EXTENSION?.search.query({
        disposition: newtab ? "NEW_TAB" : "CURRENT_TAB",
        text: val
      });
      return;
    }
    engine = engine.replace("default", "google");
    const hasProtocol = val.startsWith("http://") || val.startsWith("https://");
    const domainUrl = hasProtocol ? val : `https://${val}`;
    const searchUrl = createSearchUrl(val, engine);
    const url = isValidUrl(domainUrl) ? domainUrl : searchUrl;
    const target = newtab ? "_blank" : "_self";
    globalThis.open(url, target);
    return;
  }
  function initSuggestions() {
    function selectShownResult(next) {
      return next?.classList.contains("shown") ? next : null;
    }
    function applyResultContentToInput(elem) {
      if (!(elem && domsearchbar)) {
        return;
      }
      domsearchbar.value = elem?.querySelector(".suggest-result")?.textContent ?? "";
    }
    for (let ii = 0; ii < 10; ii++) {
      const li = document.createElement("li");
      const image = document.createElement("img");
      const wrapper = document.createElement("div");
      const result = document.createElement("p");
      const description = document.createElement("p");
      li.setAttribute("tabindex", "0");
      image.setAttribute("draggable", "false");
      image.setAttribute("width", "16");
      image.setAttribute("height", "16");
      result.classList.add("suggest-result");
      description.classList.add("suggest-desc");
      wrapper.appendChild(result);
      wrapper.appendChild(description);
      li.appendChild(image);
      li.appendChild(wrapper);
      li.addEventListener("mouseenter", () => {
        domcontainer?.querySelector('li[aria-selected="true"]')?.removeAttribute("aria-selected");
        li?.setAttribute("aria-selected", "true");
      });
      li.addEventListener("mouseleave", () => {
        li?.removeAttribute("aria-selected");
      });
      li.addEventListener("click", (e) => {
        applyResultContentToInput(li);
        submitSearch(e);
      });
      domsuggestions?.appendChild(li);
    }
    function toggleSuggestions(e) {
      const relatedTarget = e?.relatedTarget;
      const targetIsResult = relatedTarget?.parentElement?.id === "sb-suggestions";
      const hasResults = document.querySelectorAll("#sb-suggestions li.shown")?.length > 0;
      const isFocus = e.type === "focus";
      if (!targetIsResult) {
        domsuggestions?.classList.toggle("shown", isFocus && hasResults);
      }
    }
    function navigateSuggestions(e) {
      const isArrowDown = e.code === "ArrowDown";
      const isArrowUp = e.code === "ArrowUp";
      const isEnter = e.code === "Enter";
      const isEscape = e.code === "Escape";
      let lastSelected = domsuggestions?.querySelector('li[aria-selected="true"]');
      lastSelected?.removeAttribute("aria-selected");
      if (isEscape) {
        return;
      }
      if (isArrowDown) {
        lastSelected = selectShownResult(lastSelected?.nextElementSibling) ?? domsuggestions?.querySelector("li.shown");
        applyResultContentToInput(lastSelected);
      }
      if (isArrowUp) {
        lastSelected = selectShownResult(lastSelected?.previousElementSibling);
        applyResultContentToInput(lastSelected);
        e.preventDefault();
      }
      if (isEnter && lastSelected) {
        applyResultContentToInput(lastSelected);
        submitSearch(e);
      }
      lastSelected?.setAttribute("aria-selected", "true");
    }
    function hideResultsAndSuggestions() {
      const children = Object.values(domsuggestions?.children ?? []);
      for (const child of children) {
        child.classList.remove("shown");
      }
      domsuggestions?.classList.remove("shown");
    }
    async function createSuggestionSocket() {
      socket = await apiWebSocket("suggestions");
      socket?.addEventListener("message", (event) => {
        const data = parse(event.data);
        if (Array.isArray(data)) {
          suggestions(data);
        } else if (data?.error) {
          createSuggestionSocket();
        }
      });
    }
    domcontainer?.addEventListener("keydown", navigateSuggestions);
    domsearchbar?.addEventListener("focus", toggleSuggestions);
    domsearchbar?.addEventListener("blur", toggleSuggestions);
    emptyButton?.addEventListener("click", hideResultsAndSuggestions);
    createSuggestionSocket();
  }
  function suggestions(results) {
    const input = domsearchbar;
    const liList = domsuggestions?.querySelectorAll("li") ?? [];
    domsuggestions?.classList.toggle("shown", results.length > 0);
    domsuggestions?.querySelector('li[aria-selected="true"]')?.removeAttribute("aria-selected");
    liList.forEach((li, i) => {
      const result = results[i];
      const resultdom = li.querySelector(".suggest-result");
      const descdom = li.querySelector(".suggest-desc");
      if (!(result && resultdom && descdom)) {
        return;
      }
      const searchIcon = "src/assets/interface/magnifying-glass.svg";
      const image = result.image ?? searchIcon;
      const desc = result.desc ?? "";
      if (resultdom) {
        resultdom.textContent = result.text;
      }
      if (result.text.includes(input.value)) {
        const queryIndex = result.text.indexOf(input.value);
        const startdom = document.createElement("span");
        const querydom = document.createElement("b");
        const enddom = document.createElement("span");
        startdom.textContent = result.text.slice(0, queryIndex);
        querydom.textContent = result.text.slice(queryIndex, input.value.length);
        enddom.textContent = result.text.slice(input.value.length);
        resultdom.textContent = "";
        resultdom.appendChild(startdom);
        resultdom.appendChild(querydom);
        resultdom.appendChild(enddom);
      }
      const imgdom = li.querySelector("img");
      imgdom.classList.toggle("default-search-icon", image === searchIcon);
      imgdom.src = image;
      descdom.textContent = desc;
      li.classList.toggle("shown", !!result);
      const rect = li.getBoundingClientRect();
      const yLimit = rect.y + rect.height + 40;
      const isOverflowing = yLimit > document.body.offsetHeight;
      if (isOverflowing) {
        li.classList.remove("shown");
      }
    });
    if (domsuggestions?.querySelectorAll("li.shown")?.length === 0) {
      domsuggestions?.classList.remove("shown");
    }
  }
  function handleUserInput(e) {
    const value = e.target.value ?? "";
    const hasProtocol = value.startsWith("http://") || value.startsWith("https://");
    const withProtocol = hasProtocol ? value : `https://${value}`;
    const startsTypingProtocol = "https://".startsWith(value) || "http://".startsWith(value);
    if (domsearchbar) {
      toggleInputButton(value.length > 0);
    }
    if (value === "") {
      for (const li of document.querySelectorAll("#sb-suggestions li.shown") ?? []) {
        li.classList.remove("shown");
      }
      domsuggestions?.classList.remove("shown");
      return;
    }
    if (startsTypingProtocol || isValidUrl(withProtocol)) {
      domsuggestions?.classList.remove("shown");
      return;
    }
    if (domcontainer?.dataset.suggestions === "true" && domsuggestions?.childElementCount === 0) {
      initSuggestions();
    }
    if (domcontainer?.dataset.suggestions === "true" && socket && socket.readyState === socket.OPEN) {
      const engine = (domcontainer?.dataset.engine ?? "ddg").replace("custom", "ddg").replace("default", "google");
      const query = encodeURIComponent(value ?? "");
      socket.send(JSON.stringify({ q: query, with: engine, lang: getLang() }));
    }
  }
  function toggleInputButton(enabled) {
    document.getElementById("sb-buttons")?.classList.toggle("shown", enabled);
    document.getElementById("sb_empty")?.toggleAttribute("disabled", !enabled);
    document.getElementById("sb_submit")?.toggleAttribute("disabled", !enabled);
  }
  function removeInputText() {
    if (domsearchbar) {
      domsearchbar.focus();
      domsearchbar.value = "";
      toggleInputButton(false);
    }
  }
  function focusSearchbar() {
    if (dombuttons?.classList.contains("shown") === false) {
      domsearchbar?.focus();
    }
  }
  function searchbarShortcut(event) {
    const target = event.target;
    const fromBody = target.tagName === "BODY";
    if (fromBody && event.key === "/") {
      domsearchbar?.focus();
      domsearchbar?.select();
      event.preventDefault();
    }
  }
  function isValidEngine(str = "") {
    return SEARCHBAR_ENGINES.includes(str);
  }

  // src/scripts/features/weather/display.ts
  var weatherFirstStart = true;
  function displayWeather(data, lastWeather) {
    const useSinograms = getLang().includes("zh") || getLang().includes("ja");
    const currentDesc = document.getElementById("current-desc");
    const currentTemp = document.getElementById("current-temp");
    const tempContainer = document.getElementById("tempContainer");
    const dotContainer = document.getElementById("dotContainer");
    const weatherdom = document.getElementById("weather");
    const unit = data.unit;
    const dot = useSinograms ? "\u3002" : ". ";
    const date = userDate();
    const handleDescription = () => {
      const feels = Math.floor(lastWeather.feels_like);
      const actual = Math.floor(lastWeather.temp);
      const maintemp = data.temperature === "feelslike" ? feels : actual;
      let tempReport = "";
      if (data.temperature === "actual") {
        tempReport = tradThis("It is currently <temp1>");
      }
      if (data.temperature === "feelslike") {
        tempReport = tradThis("It currently feels like <temp2>");
      }
      if (data.temperature === "both") {
        tempReport = tradThis("It is currently <temp1> and feels like <temp2>");
      }
      const weatherReport = lastWeather.description[0].toUpperCase() + lastWeather.description.slice(1);
      const splitString = tempReport.split(/<temp\d+>/).filter(Boolean);
      if (currentDesc && currentTemp && dotContainer && tempContainer) {
        currentDesc.innerText = weatherReport + dot;
        currentTemp.querySelector("#current-a")?.replaceChildren(splitString[0]);
        currentTemp.querySelector("#current-temp-a .temp-value")?.replaceChildren(
          actual.toString() + "\xB0"
        );
        currentTemp.querySelector("#current-temp-a .temp-unit")?.replaceChildren(getUnitSymbol(unit));
        currentTemp.querySelector("#current-b")?.replaceChildren(
          data.temperature === "both" ? splitString[1] : ""
        );
        currentTemp.querySelector("#current-temp-b .temp-value")?.replaceChildren(
          data.temperature === "both" ? feels.toString() + "\xB0" : ""
        );
        currentTemp.querySelector("#current-temp-b .temp-unit")?.replaceChildren(
          data.temperature === "both" ? getUnitSymbol(unit) : ""
        );
        dotContainer.innerText = dot;
        tempContainer.querySelector(".temp-value")?.replaceChildren(maintemp.toString() + "\xB0");
        tempContainer.querySelector(".temp-unit")?.replaceChildren(getUnitSymbol(unit));
      }
    };
    const handleWidget = () => {
      const condition = lastWeather.icon_id;
      if (!tempContainer) {
        return;
      }
      const now = minutator(date);
      const { sunrise: sunrise2, sunset: sunset2, dusk: dusk2 } = suntime();
      const daytime = now < sunrise2 || now > sunset2 + dusk2 ? "night" : "day";
      const iconName = `weather-${daytime}-${condition}`;
      const svg = document.querySelector(".weather-icon");
      const useEl = svg?.querySelector("use");
      if (svg && useEl) {
        svg.id = iconName;
        useEl.href.baseVal = `src/assets/interface/weather-sprites.svg#${iconName}`;
      }
    };
    const handleForecastData = () => {
      const forecastdom = document.getElementById("forecast");
      const day = date.getHours() > getSunsetHour() ? "tomorrow" : "today";
      let string2 = "";
      if (day === "today") {
        string2 += tradThis("with a high of <temp1> today");
      }
      if (day === "tomorrow") {
        string2 += tradThis("with a high of <temp1> tomorrow");
      }
      const splitString = string2.split("<temp1>");
      if (forecastdom) {
        forecastdom.querySelector("#forecast-a")?.replaceChildren(splitString[0]);
        forecastdom.querySelector(".temp-value")?.replaceChildren(
          lastWeather.forecasted_high.toString() + "\xB0"
        );
        forecastdom.querySelector(".temp-unit")?.replaceChildren(getUnitSymbol(unit));
        forecastdom.querySelector("#forecast-b")?.replaceChildren(splitString[1]);
      }
    };
    const handleMoreInfo = () => {
      const noDetails = !data.moreinfo || data.moreinfo === "none";
      const emptyCustom = data.moreinfo === "custom" && !data.provider;
      if (noDetails || emptyCustom) {
        weatherdom?.removeAttribute("href");
        return;
      }
      const urLs = {
        accu: lastWeather.link ?? "https://www.accuweather.com/",
        msnw: tradThis("https://www.msn.com/en-xl/weather/forecast/"),
        yhw: "https://www.yahoo.com/news/weather/",
        windy: "https://www.windy.com/",
        custom: data.provider ?? ""
      };
      if ((data.moreinfo || "") in urLs) {
        weatherdom?.setAttribute("href", urLs[data.moreinfo]);
      }
    };
    handleForecastDisplay(data.forecast);
    handleWidget();
    handleMoreInfo();
    handleDescription();
    handleForecastData();
    handleShowUnit(data.show_unit);
    if (weatherFirstStart) {
      weatherFirstStart = false;
      weatherdom?.classList.remove("wait");
      setTimeout(() => weatherdom?.classList.remove("init"), 900);
    }
  }
  function handleForecastDisplay(forecast) {
    const date = userDate();
    const morningOrLateDay = date.getHours() < 12 || date.getHours() > getSunsetHour();
    const isTimeForForecast = forecast === "auto" ? morningOrLateDay : forecast === "always";
    document.querySelector("#forecast")?.classList.toggle("shown", isTimeForForecast);
  }
  function handleShowUnit(show_unit = false) {
    document.querySelector("#weather")?.setAttribute("data-show-unit", String(show_unit));
  }
  function getUnitSymbol(unit) {
    return unit === "imperial" ? "F" : "C";
  }

  // src/scripts/features/weather/settings.ts
  var locationForm = networkForm("f_location");
  var unitForm = networkForm("f_units");
  var geolForm = networkForm("f_geol");
  var suggestionsDebounce = debounce(fillLocationSuggestions, 600);
  async function weatherUpdate(update) {
    const { weather: weather2, hide } = await storage.sync.get(["weather", "hide"]);
    let lastWeather = (await storage.local.get("lastWeather")).lastWeather;
    if (!(weather2 && hide)) {
      return;
    }
    if (isUnits(update.units)) {
      unitForm.load();
      weather2.unit = update.units;
      lastWeather = await requestNewWeather(weather2, lastWeather) ?? lastWeather;
      unitForm.accept();
    }
    if (update.show_unit !== void 0) {
      weather2.show_unit = update.show_unit;
      handleShowUnit(update.show_unit);
    }
    if (isForecast(update.forecast)) {
      weather2.forecast = update.forecast;
    }
    if (isTemperature(update.temp)) {
      weather2.temperature = update.temp;
    }
    if (isMoreinfo(update.moreinfo)) {
      toggleSettingsDropdown("weather_provider", update.moreinfo === "custom");
      weather2.moreinfo = update.moreinfo;
    }
    if (update.provider) {
      weather2.provider = update.provider;
    }
    if (update.unhide) {
      const { weatherdesc, weathericon } = hide || {};
      if (weatherdesc && weathericon) {
        weatherCacheControl(weather2);
      }
    }
    if (update.suggestions) {
      updateSuggestions(update.suggestions);
      return;
    }
    if (update.city) {
      updateManualLocation(weather2, lastWeather);
      return;
    }
    if (update.geol) {
      console.log(update.geol);
      updateGeolocation(update.geol, weather2, lastWeather);
      return;
    }
    storage.sync.set({ weather: weather2 });
    onSettingsLoad(() => handleGeolOption(weather2));
    if (lastWeather) {
      storage.local.set({ lastWeather });
      displayWeather(weather2, lastWeather);
    }
  }
  async function updateManualLocation(weather2, lastWeather) {
    const iCity = document.getElementById("i_city");
    let city = iCity.value;
    removeLocationSuggestions();
    if (!navigator.onLine) {
      locationForm.warn(tradThis("No internet connection"));
      return;
    }
    if (city === weather2.city) {
      return;
    }
    city = stringMaxSize(city, 64);
    locationForm.load();
    const currentWeather = { ...weather2, city };
    let newWeather;
    try {
      newWeather = await requestNewWeather(currentWeather, lastWeather);
    } catch (error) {
      locationForm.warn(tradThis(error));
      return;
    }
    if (!newWeather) {
      locationForm.warn(tradThis("Cannot reach weather service"));
      return;
    }
    if (newWeather) {
      weather2.city = city ?? "Paris";
      locationForm.accept("i_city", weather2.city);
      storage.sync.set({ weather: weather2 });
      storage.local.set({ lastWeather: newWeather });
      displayWeather(weather2, newWeather);
    }
  }
  async function updateGeolocation(geol, weather2, lastWeather) {
    geolForm.load();
    if (!isGeolocation(geol)) {
      geolForm.warn("bad geolocation type");
      return;
    }
    if (geol === "precise") {
      if (!await getGeolocation("precise")) {
        geolForm.warn("Cannot get precise location");
        return;
      }
    }
    weather2.geolocation = geol;
    handleGeolOption(weather2);
    storage.sync.set({ weather: weather2 });
    if (geol === "off") {
      geolForm.accept();
      return;
    }
    const newWeather = await requestNewWeather(weather2, lastWeather) ?? lastWeather;
    if (newWeather) {
      storage.local.set({ lastWeather });
      displayWeather(weather2, newWeather);
    }
    geolForm.accept();
  }
  function handleGeolOption(data) {
    const iCity = document.querySelector("#i_city");
    const iGeol = document.querySelector("#i_geol");
    if (iCity && iGeol) {
      iGeol.value = data?.geolocation ?? false;
      iCity.setAttribute("placeholder", data.city ?? "Paris");
      document.getElementById("location_options")?.classList.toggle("shown", data.geolocation === "off");
    }
  }
  function updateSuggestions(updateEvent) {
    const fLocation = document.querySelector("#f_location");
    const iCity = document.querySelector("#i_city");
    const event = updateEvent;
    if (!(fLocation && iCity)) {
      return;
    }
    if (event.data !== void 0) {
      fLocation?.classList.toggle("valid", iCity.value.length > 2);
      removeLocationSuggestions();
      suggestionsDebounce();
    }
  }
  function removeLocationSuggestions() {
    const datalist = document.querySelector("#dl_cityfound");
    const nodelist = datalist?.children ?? [];
    for (const node of nodelist) {
      node.remove();
    }
  }
  async function fillLocationSuggestions() {
    const dlCityfound = document.querySelector("#dl_cityfound");
    const iCity = document.getElementById("i_city");
    const city = iCity.value;
    if (city === "") {
      removeLocationSuggestions();
      return;
    }
    const url = new URL("https://weather.bonjourr.fr/");
    url.searchParams.set("provider", "accuweather");
    url.searchParams.set("data", "simple");
    url.searchParams.set("geo", "true");
    url.searchParams.set("query", encodeURIComponent(city));
    try {
      const resp = await fetch(url);
      removeLocationSuggestions();
      if (resp.status !== 200) {
        return;
      }
      for (const { detail } of await resp.json()) {
        const option = document.createElement("option");
        option.value = detail;
        option.textContent = detail;
        dlCityfound?.appendChild(option);
      }
    } catch (_error) {
    }
  }
  function isUnits(str = "") {
    const units = ["metric", "imperial"];
    return units.includes(str);
  }
  function isForecast(str = "") {
    const forecasts = ["auto", "always", "never"];
    return forecasts.includes(str);
  }
  function isMoreinfo(str = "") {
    const moreinfos = ["none", "msnw", "yhw", "windy", "accu", "custom"];
    return moreinfos.includes(str);
  }
  function isTemperature(str = "") {
    const temps = ["actual", "feelslike", "both"];
    return temps.includes(str);
  }
  function isGeolocation(str = "") {
    const geol = ["precise", "approximate", "off"];
    return geol.includes(str);
  }

  // src/scripts/features/weather/request.ts
  async function weatherCacheControl(data, lastWeather) {
    handleForecastDisplay(data.forecast);
    if (!lastWeather) {
      firstStartWeather(data);
      return;
    }
    const now = Date.now();
    const last = lastWeather?.timestamp ?? 0;
    const isAnHourLater = now > last + 36e5;
    if (navigator.onLine && isAnHourLater) {
      const newWeather = await requestNewWeather(data, lastWeather);
      if (newWeather) {
        storage.local.set({ lastWeather: newWeather });
        displayWeather(data, newWeather);
        return;
      }
    }
    displayWeather(data, lastWeather);
  }
  async function requestNewWeather(data, lastWeather) {
    if (!navigator.onLine) {
      return lastWeather;
    }
    const coords2 = await getGeolocation(data.geolocation);
    const url = new URL("https://weather.bonjourr.fr/");
    url.searchParams.set("provider", "auto");
    url.searchParams.set("data", "simple");
    url.searchParams.set("lang", getLang());
    url.searchParams.set("unit", data.unit === "metric" ? "C" : "F");
    if (coords2?.lat && coords2?.lon) {
      url.searchParams.set("lat", coords2.lat.toString());
      url.searchParams.set("lon", coords2.lon.toString());
    }
    if (data.geolocation === "off" && !coords2) {
      const city = data.city ?? "Paris";
      const q = encodeURIComponent(city);
      url.searchParams.set("query", q);
    }
    const response = await fetch(url);
    if (response.status !== 200) {
      throw new Error("Cannot get weather");
    }
    const json = await response?.json();
    let [sunset2, sunrise2] = [0, 0];
    const { temp, feels } = json.now;
    const { description, icon } = json.now;
    let forecastedHigh = lastWeather?.forecasted_high ?? -273.15;
    let forecastedTimestamp = lastWeather?.forecasted_timestamp ?? 0;
    if (json.daily) {
      const [today, tomorrow] = json.daily;
      const date = /* @__PURE__ */ new Date();
      if (date.getHours() > getSunsetHour()) {
        forecastedHigh = tomorrow.high;
        forecastedTimestamp = new Date(tomorrow.time).getTime();
      } else {
        forecastedHigh = today.high;
        forecastedTimestamp = new Date(today.time).getTime();
      }
    }
    if (json.sun) {
      const [rh, rm] = json.sun.rise;
      const [sh, sm] = json.sun.set;
      const date = /* @__PURE__ */ new Date();
      date.setHours(rh, rm, 0, 0);
      sunrise2 = date.getTime();
      date.setHours(sh, sm, 0, 0);
      sunset2 = date.getTime();
      suntime(sunrise2, sunset2);
    }
    return {
      timestamp: Date.now(),
      forecasted_timestamp: forecastedTimestamp,
      forecasted_high: forecastedHigh,
      description,
      feels_like: feels,
      icon_id: icon,
      sunrise: sunrise2,
      sunset: sunset2,
      temp,
      link: json.meta.url ?? "",
      approximation: {
        ccode: json?.geo?.country,
        city: json?.geo?.city,
        lat: json?.geo?.lat,
        lon: json?.geo?.lon
      }
    };
  }
  async function firstStartWeather(data) {
    const currentWeather = await requestNewWeather(data);
    if (currentWeather) {
      data.city = currentWeather.approximation?.city ?? tradThis("City");
      storage.sync.set({ weather: data });
      storage.local.set({ lastWeather: currentWeather });
      displayWeather(data, currentWeather);
      setTimeout(() => handleGeolOption(data), 400);
    }
  }
  async function getGeolocation(type) {
    const location2 = { lat: 0, lon: 0 };
    if (type === "precise") {
      await new Promise(
        (resolve2) => navigator.geolocation.getCurrentPosition(
          (geo) => {
            location2.lat = geo.coords.latitude;
            location2.lon = geo.coords.longitude;
            resolve2(true);
          },
          () => {
            resolve2(false);
          }
        )
      );
    }
    return location2.lat !== 0 && location2.lon !== 0 ? location2 : void 0;
  }

  // src/scripts/features/weather/index.ts
  var pollingInterval;
  function weather(init2, update) {
    if (update) {
      weatherUpdate(update);
      return;
    }
    if (!init2) {
      console.warn(new Error("No weather data"));
      return;
    }
    const mainHidden = !init2.sync.main;
    const weatherHidden = init2.sync.hide?.weatherdesc && init2.sync.hide?.weathericon;
    const canShowWeather = !(weatherHidden || mainHidden);
    if (canShowWeather) {
      weatherCacheControl(init2.sync.weather, init2.lastWeather);
    }
    onSettingsLoad(() => {
      handleGeolOption(init2.sync.weather);
    });
    queueMicrotask(() => {
      clearInterval(pollingInterval);
      pollingInterval = setInterval(async () => {
        const sync = await storage.sync.get(["weather", "hide", "main"]);
        const local = await storage.local.get("lastWeather");
        weatherCacheControl(sync.weather, local.lastWeather);
      }, 12e5);
    });
  }
  function getSunsetHour() {
    const d = /* @__PURE__ */ new Date();
    d.setHours(Math.round(suntime().sunset / 60));
    return d.getHours();
  }

  // src/scripts/shared/assert.ts
  function isEvery(freq = "") {
    const every = ["tabs", "hour", "day", "period", "pause"];
    return every.includes(freq);
  }

  // src/scripts/features/quotes.ts
  var quotesTypeForm = networkForm("f_qttype");
  var quotesUrlForm = networkForm("f_qturl");
  async function quotes(init2, update) {
    if (update) {
      updateQuotes(update);
      return;
    }
    if (!init2) {
      return;
    }
    const { lang, quotes: quotes2 } = init2.sync;
    const needsNewQuote = needsChange(quotes2.frequency, quotes2.last ?? 0);
    const selection = init2.local?.userQuoteSelection ?? 0;
    let list = init2.local?.quotesCache ?? [];
    let quote = list[0];
    if (quotes2.type === "user") {
      list = csvUserInputToQuotes(quotes2.userlist);
      quote = list[selection];
    } else {
      const noCache = !list || list?.length === 0;
      if (noCache) {
        list = await tryFetchQuotes(lang, quotes2.type, quotes2.url);
        quote = list[0];
        storage.local.set({ quotesCache: list });
      }
    }
    if (needsNewQuote) {
      quotes2.last = userDate().getTime();
      quote = controlCacheList(list, lang, quotes2.type, quotes2.url);
      storage.sync.set({ quotes: quotes2 });
    }
    insertToDom(quote);
    toggleAuthorAlwaysOn(quotes2.author);
    document.getElementById("quotes_container")?.classList.toggle("hidden", !quotes2.on);
    displayInterface("quotes");
  }
  async function updateQuotes({ author, frequency, type, userlist, url, refresh }) {
    const data = await storage.sync.get(["lang", "quotes"]);
    const local = await storage.local.get("quotesCache");
    if (author !== void 0) {
      data.quotes.author = author;
      toggleAuthorAlwaysOn(author);
    }
    if (userlist) {
      data.quotes.userlist = handleUserListChange(userlist);
    }
    let updateData = false;
    if (canStoreUrl(url)) {
      data.quotes.url = url;
      updateData = true;
    }
    if (refresh) {
      data.quotes.last = userDate().getTime();
      refreshQuotes(data, local?.quotesCache);
    }
    if (isEvery(frequency)) {
      data.quotes.frequency = frequency;
    }
    if (isQuotesType(type)) {
      data.quotes.type = type;
      updateData = true;
    }
    if (updateData) {
      updateQuotesData(data);
    }
    storage.sync.set({ quotes: data.quotes });
  }
  async function updateQuotesData(data) {
    const isUser = data.quotes.type === "user";
    let list = [];
    let selection = 0;
    if (isUser && data.quotes.userlist) {
      const local = await storage.local.get("userQuoteSelection");
      selection = local?.userQuoteSelection ?? 0;
      list = csvUserInputToQuotes(data.quotes.userlist);
    }
    if (!isUser) {
      const form = data.quotes.type === "url" ? quotesUrlForm : quotesTypeForm;
      try {
        form.load();
        list = await fetchQuotes(data.lang, data.quotes.type, data.quotes.url);
        form.accept();
      } catch (_error) {
        form.warn(tradThis("Fetch failed, please check console for more information"));
      }
      storage.local.set({ quotesCache: list });
    }
    if (list.length > 0) {
      insertToDom(list[selection]);
    }
    document.getElementById("quotes_userlist")?.classList.toggle("shown", isUser);
    document.getElementById("quotes_url")?.classList.toggle("shown", data.quotes.type === "url");
  }
  function handleUserListChange(input) {
    let array = [];
    if (input.length === 0) {
      return "";
    }
    if (input.startsWith("[[")) {
      array = csvUserInputToQuotes(oldJSONToCSV(parse(input) ?? []));
    } else {
      array = csvUserInputToQuotes(input);
    }
    if (array.length > 0) {
      insertToDom({
        author: array[0].author,
        content: array[0].content
      });
      document.getElementById("i_qtlist")?.blur();
      storage.local.set({ userQuoteSelection: 0 });
    }
    return input;
  }
  function refreshQuotes(sync, quoteslist = []) {
    const { lang, quotes: quotes2 } = sync;
    const { type, url, userlist } = quotes2;
    const hasUserQuotes = type === "user" && userlist;
    const list = hasUserQuotes ? csvUserInputToQuotes(userlist) : quoteslist;
    insertToDom(controlCacheList(list, lang, type, url));
  }
  async function fetchQuotes(lang, type, url) {
    if (!navigator.onLine || type === "user") {
      return [];
    }
    let response;
    if (type === "url") {
      if (!url) {
        return [];
      }
      response = await fetch(url);
      validateResponse(response);
      const responseType = determineUrlApiResponseType(response);
      if (responseType === "json") {
        return await response.json();
      }
      if (responseType === "csv") {
        return csvToQuotes(await response.text());
      }
      return [];
    }
    const endpoint = type === "classic" ? `${lang}` : "";
    const query = `/quotes/${type}/${endpoint}`;
    response = await apiFetch(query);
    validateResponse(response);
    return await response.json();
  }
  function validateResponse(response) {
    if (!response) {
      throw new Error("No response");
    }
    if (!response.ok) {
      throw new Error(`Response not ok: ${response.status} ${response.statusText}`);
    }
  }
  async function tryFetchQuotes(lang, type, url) {
    try {
      return await fetchQuotes(lang, type, url);
    } catch (_error) {
      console.info(_error);
    }
    return [];
  }
  function controlCacheList(list, lang, type, url) {
    if (type === "user") {
      const randIndex = Math.round(Math.random() * (list.length - 1));
      storage.local.set({ userQuoteSelection: randIndex });
      return list[randIndex];
    }
    if (list.length > 1) {
      const quote = list.shift();
      storage.local.set({ quotesCache: list });
      return quote ?? { author: "", content: "" };
    }
    tryFetchQuotes(lang, type, url).then((list2) => {
      storage.local.set({ quotesCache: list2 });
    });
    return list[0];
  }
  function toggleAuthorAlwaysOn(state) {
    document.getElementById("author")?.classList.toggle("always-on", state);
  }
  function insertToDom(quote) {
    const quoteDom = document.getElementById("quote");
    const authorDom = document.getElementById("author");
    if (!(quote && quoteDom && authorDom)) {
      return;
    }
    quoteDom.textContent = quote.content.replace(/\\n/g, "\n");
    authorDom.textContent = quote.author;
  }
  function csvUserInputToQuotes(csv) {
    if (!csv) {
      return [];
    }
    if (Array.isArray(csv)) {
      return csvToQuotes(oldJSONToCSV(csv));
    }
    return csvToQuotes(csv);
  }
  function oldJSONToCSV(input) {
    return input.map((val) => val.join(",")).join("\n");
  }
  function csvToQuotes(csv) {
    const rows = csv.split("\n");
    const quotes2 = [];
    for (const row of rows) {
      const [author, ...rest2] = row.split(",");
      const content = rest2.join(",").trimStart();
      quotes2.push({ author, content });
    }
    return quotes2;
  }
  function isQuotesType(type = "") {
    const types = ["classic", "kaamelott", "inspirobot", "stoic", "hitokoto", "office", "user", "url"];
    return types.includes(type);
  }
  var urlRegEx = /^https?:\/\//i;
  function canStoreUrl(url) {
    if (url === void 0) {
      return false;
    }
    return url === "" || urlRegEx.test(url);
  }
  function determineUrlApiResponseType(response) {
    const contentType = response.headers.get("content-type")?.split(";", 2)[0];
    if (contentType === "application/json") {
      return "json";
    }
    if (contentType === "text/csv") {
      return "csv";
    }
    const url = new URL(response.url);
    const parts = url.pathname.split(".");
    const extension = parts[parts.length - 1];
    if (equalsCaseInsensitive(extension, "json")) {
      return "json";
    }
    return "csv";
  }

  // node_modules/.deno/pocket-editor@2.6.0/node_modules/pocket-editor/dist/index.js
  function checkModifs(text, mods) {
    for (const [name, str] of Object.entries(mods)) {
      if (text.startsWith(`${str} `)) {
        return name;
      }
    }
    return "";
  }
  function toHTML(self2, markdown) {
    const fragment = document.createDocumentFragment();
    markdown = markdown.replaceAll("	", "");
    for (const line of markdown.split("\n\n")) {
      if (line.indexOf("\n") === -1) {
        fragment.appendChild(self2.createLine({ text: line, modif: checkModifs(line, self2.mods) }));
        continue;
      }
      for (const subline of line.split("\n")) {
        fragment.appendChild(self2.createLine({ text: subline, modif: checkModifs(subline, self2.mods) }));
      }
    }
    return fragment;
  }
  function toMarkdown(lines) {
    function addModif(line) {
      if (line.dataset.list === "") {
        return "- ";
      }
      if (line.dataset.h1 === "") {
        return "# ";
      }
      if (line.dataset.h2 === "") {
        return "## ";
      }
      if (line.dataset.h3 === "") {
        return "### ";
      }
      if (line.dataset.todoChecked === "") {
        return "[x] ";
      }
      if (line.dataset.todo === "") {
        return "[ ] ";
      }
      return "";
    }
    let plaintext = "";
    let modif = "";
    const isList = (line) => {
      return line?.dataset.list || line?.dataset.todo;
    };
    lines.forEach((line, i) => {
      if (line.textContent === "pe-mock-selection") {
        return;
      }
      modif = addModif(line);
      plaintext += modif + line.textContent;
      const isWithinList = isList(lines[i + 1]) && isList(line);
      const isLastLine = lines.length - 1 === i;
      plaintext += isLastLine ? "" : isWithinList ? "\n" : "\n\n";
    });
    return plaintext;
  }
  function lastTextNode(line) {
    let lastNode = line;
    while (lastNode?.childNodes.length > 0) {
      const childNodes = Object.values(lastNode.childNodes).reverse();
      const textNodes = childNodes.filter((child) => child.nodeName === "#text");
      if (textNodes.length > 0) {
        return textNodes[0];
      }
      lastNode = childNodes[0];
    }
    return lastNode;
  }
  function setCaret(elem, atStart) {
    const node = lastTextNode(elem);
    const sel = window.getSelection();
    const range = document.createRange();
    const textlen = node.nodeValue?.length || 0;
    range.setStart(node, atStart ? 0 : textlen);
    range.setEnd(node, atStart ? 0 : textlen);
    sel?.removeAllRanges();
    sel?.addRange(range);
    sel?.collapseToEnd();
  }
  var history = [];
  function addUndoHistory(self2, lastline) {
    const lines = self2.lines;
    const markdown = toMarkdown(lines);
    const index = lastline ? lines.indexOf(lastline) : 0;
    if (markdown === history[0]?.markdown || "") {
      return;
    }
    history.unshift({ markdown, index });
    if (history.length > 50) {
      history.pop();
    }
  }
  function initUndo(self2) {
    let timeout;
    const observer = new MutationObserver(() => {
      if (timeout) {
        clearTimeout(timeout);
      }
    });
    observer.observe(self2.container, {
      characterData: true,
      subtree: true
    });
    self2.container.addEventListener("keydown", (e) => {
      if ((e.ctrlKey || e.metaKey) && e.key === "z") {
        timeout = window.setTimeout(() => {
          applyUndo(self2);
        }, 1);
      }
    });
  }
  function applyUndo(self2) {
    const { markdown, index } = history[0] ?? {};
    if (!markdown) {
      return;
    }
    for (const node of Object.values(self2.container.children)) {
      node.remove();
    }
    self2.container.appendChild(toHTML(self2, markdown));
    setTimeout(() => {
      const editable = self2.container.querySelectorAll("[contenteditable]")[index];
      if (editable) {
        editable.focus();
        setCaret(editable, false);
      }
    }, 0);
    history.shift();
    self2.container.dispatchEvent(
      new InputEvent("input", {
        inputType: "insertText",
        bubbles: true,
        data: ""
      })
    );
  }
  function copyEvent(self2, ev) {
    const selected = self2.getSelectedLines();
    if (selected.length > 0) {
      ev.clipboardData?.setData("text/plain", toMarkdown(selected));
      ev.preventDefault();
    }
  }
  function cutEvent(self2, ev) {
    const selected = self2.getSelectedLines();
    if (selected.length > 0) {
      ev.clipboardData?.setData("text/plain", toMarkdown(selected));
      ev.preventDefault();
      self2.removeLines(selected);
      addUndoHistory(self2, selected[selected.length - 1]);
    }
  }
  function pasteEvent(self2, ev) {
    ev.preventDefault();
    const selection = window.getSelection();
    const range = selection?.getRangeAt(0);
    const text = ev.clipboardData?.getData("text") || "";
    if (checkModifs(text, self2.mods) !== "") {
      const editable = ev.target;
      const newHtml = toHTML(self2, text);
      const linesInNew = newHtml.childElementCount - 1;
      let line = self2.getLineFromEditable(editable);
      const selected = self2.getSelectedLines();
      if (selected.length > 0) {
        line = selected[selected.length - 1];
      }
      if (line?.parentElement?.dataset.pocketEditor === void 0) {
        return;
      }
      self2.container.insertBefore(newHtml, self2.getNextLine(line));
      let lastline = line.nextSibling;
      for (let ii = 0; ii < linesInNew; ii++) {
        if (lastline) {
          lastline = lastline.nextSibling;
        }
      }
      if (lastline) {
        setCaret(lastline);
      }
      if (line && line.textContent === "") {
        const areSameMods = (mod2) => {
          const currIsMod = line?.dataset[mod2] === mod2;
          const nextIsMod = self2.getNextLine(line)?.dataset[mod2] === mod2;
          return currIsMod === nextIsMod;
        };
        if (line || areSameMods("list") || areSameMods("todo") || areSameMods("todo-checked")) {
          line.remove();
        }
      }
      self2.container.dispatchEvent(
        new InputEvent("input", {
          inputType: "insertText",
          bubbles: true,
          data: ""
        })
      );
      return;
    }
    if (selection?.rangeCount && range) {
      const offset = selection?.anchorOffset ?? 0;
      const value = selection.focusNode?.nodeValue ?? "";
      if (value && selection.focusNode) {
        selection.focusNode.nodeValue = value.slice(0, offset) + text + value.slice(offset);
        selection.collapse(selection.focusNode, offset + text.length);
      } else {
        range.insertNode(document.createTextNode(text));
        setCaret(range.endContainer);
      }
    }
    self2.container.dispatchEvent(
      new InputEvent("input", {
        inputType: "insertText",
        bubbles: true,
        data: ""
      })
    );
  }
  function removeModifier(editable) {
    const content = document.createElement("div");
    const parent = editable.parentElement;
    if (!parent) {
      return;
    }
    delete parent.dataset.list;
    delete parent.dataset.todo;
    delete parent.dataset.h1;
    delete parent.dataset.h2;
    delete parent.dataset.h3;
    delete parent.dataset.todoChecked;
    content.textContent = parent.textContent;
    content.setAttribute("contenteditable", "true");
    for (const node of Object.values(parent.childNodes)) {
      node.remove();
    }
    parent.appendChild(content);
    content.focus();
    return content;
  }
  function lineTransform(self2, editable, mod2, focus = true) {
    if (!mod2) {
      return;
    }
    const line = self2.getLineFromEditable(editable);
    if (!line || line?.dataset[mod2]) {
      return;
    }
    line.querySelector("span[data-list-marker]")?.remove();
    line.querySelector("span[data-todo-marker]")?.remove();
    delete line.dataset.h1;
    delete line.dataset.h2;
    delete line.dataset.h3;
    delete line.dataset.list;
    delete line.dataset.todo;
    delete line.dataset.todoChecked;
    switch (mod2) {
      case "h1":
      case "h2":
      case "h3":
        toHeading(mod2);
        break;
      case "list":
        toList();
        break;
      case "todo":
        toTodolist(false);
        break;
      case "todo-checked":
        toTodolist(true);
        break;
      default:
    }
    function toHeading(tag) {
      const heading = document.createElement(tag);
      const mod22 = tag === "h1" ? "#" : tag === "h2" ? "##" : "###";
      heading.textContent = editable.textContent?.replace(mod22, "").trimStart() || "";
      heading.setAttribute("contenteditable", "true");
      if (line) {
        line.dataset[tag] = "";
        editable.replaceWith(heading);
      }
      if (focus) {
        setCaret(heading);
      }
    }
    function toTodolist(checked) {
      const input = document.createElement("input");
      const span = document.createElement("span");
      const p = document.createElement("p");
      const line2 = self2.getLineFromEditable(editable);
      let content = (editable.textContent ?? "").replace(self2.ZERO_WIDTH_WHITESPACE, "");
      if (!line2 || line2.dataset.todo) {
        return;
      }
      if (content.startsWith("[ ]") || content.startsWith("[x]")) {
        content = content.slice(4, content.length);
      }
      input.type = "checkbox";
      input.name = "checkbox";
      input.setAttribute("aria-label", "todo list checkbox");
      input.addEventListener("input", () => {
        if (input.checked) {
          line2.setAttribute("data-todo-checked", "");
          input.setAttribute("checked", "");
        } else {
          line2.removeAttribute("data-todo-checked");
          line2.setAttribute("data-todo", "");
          input.removeAttribute("checked");
        }
      });
      if (checked) {
        input.setAttribute("checked", "");
        line2.dataset.todoChecked = "";
      }
      line2.dataset.todo = "";
      span.dataset.todoMarker = "";
      p.textContent = content;
      p.setAttribute("contenteditable", "true");
      editable.replaceWith(p);
      span.appendChild(input);
      line2.prepend(span);
      if (focus) {
        setCaret(p);
      }
    }
    function toList() {
      const span = document.createElement("span");
      const p = document.createElement("p");
      let content = (editable.textContent ?? "").replace(self2.ZERO_WIDTH_WHITESPACE, "");
      if (!line || line.dataset.list === "") {
        return;
      }
      if (content.startsWith("-")) {
        content = content?.replace("-", "").trimStart();
      }
      line.dataset.list = "";
      span.dataset.content = "\u2022";
      span.dataset.listMarker = "";
      p.textContent = content;
      p.setAttribute("contenteditable", "true");
      editable.replaceWith(p);
      line.prepend(span);
      if (focus) {
        setCaret(p);
      }
    }
  }
  function paragraphControl(self2, e) {
    const container2 = self2.container;
    const editable = e.target;
    let range;
    try {
      const isContenteditable = editable?.hasAttribute("contenteditable");
      const isInput = editable?.tagName === "INPUT";
      range = window.getSelection()?.getRangeAt(0);
      if (!(range && isContenteditable) || isInput) {
        throw new Error("?");
      }
    } catch (_) {
      return;
    }
    const line = self2.getLineFromEditable(editable);
    const datasets = Object.keys(line?.dataset ?? {});
    const insertParagraph = e?.inputType === "insertParagraph";
    const insertText2 = e?.inputType === "insertText";
    let modif;
    if (e.type === "beforeinput" && insertParagraph && line) {
      e.preventDefault();
      addUndoHistory(self2, line);
      const textContent = (editable.textContent ?? "").replace(self2.ZERO_WIDTH_WHITESPACE, "");
      const cuttext = textContent.slice(0, range.startOffset);
      const nexttext = textContent.slice(range.startOffset);
      const isAtStart = range.startOffset === 0 || textContent === "" && range.startOffset === 1;
      if (isAtStart && datasets.length > 0) {
        removeModifier(editable);
        return;
      }
      if (line.dataset.todo === "") {
        modif = "todo";
      }
      if (line.dataset.list === "") {
        modif = "list";
      }
      if (line.dataset.todoChecked === "") {
        modif = "todo";
      }
      const nextline = self2.getNextLine(line);
      const newline = self2.createLine({
        text: nexttext,
        modif
      });
      if (nextline) {
        container2.insertBefore(newline, nextline);
      } else {
        container2?.appendChild(newline);
      }
      ;
      newline.querySelector("[contenteditable]")?.focus();
      editable.textContent = cuttext;
      container2.dispatchEvent(
        new InputEvent("input", {
          inputType: "insertText",
          bubbles: true,
          data: ""
        })
      );
      return;
    }
    if (e.type === "input" && insertText2) {
      const zeroWidthWhitespace = "\u200B";
      const content = (editable?.textContent ?? "").replace(zeroWidthWhitespace, "");
      for (const [mod2, val] of Object.entries(self2.mods)) {
        const softspace = String.fromCharCode(160);
        const hardspace = String.fromCharCode(32);
        if (content.startsWith(val + hardspace) || content.startsWith(val + softspace)) {
          modif = mod2;
          lineTransform(self2, editable, modif);
        }
      }
    }
  }
  function detectLineJump(self2, ev) {
    const notArrowKey = !ev.key.includes("Arrow");
    const notSelection = !window.getSelection()?.anchorNode;
    if (notArrowKey || notSelection) {
      return;
    }
    const editable = ev.target;
    const line = self2.getLineFromEditable(editable);
    const range = window?.getSelection()?.getRangeAt(0);
    const txtLen = range?.startContainer?.nodeValue?.length ?? 0;
    if (!(range && line)) {
      return;
    }
    const prevSibling = self2.getPrevLine(line);
    const nextSibling = self2.getNextLine(line);
    const isCaretAtZero = Math.min(range?.endOffset, range?.startOffset) === 0;
    const isCaretAtEnd = Math.max(range?.endOffset, range?.startOffset) === txtLen;
    const goingLeftToPrevious = ev.key === "ArrowLeft" && isCaretAtZero && prevSibling;
    const goingRightToNext = ev.key === "ArrowRight" && isCaretAtEnd && nextSibling;
    if (goingLeftToPrevious) {
      return { line, dir: "up" };
    }
    if (goingRightToNext) {
      return { line, dir: "down" };
    }
    let top = false;
    let bottom = false;
    const rr = range?.getBoundingClientRect();
    const lr = line?.getBoundingClientRect();
    const noRanges = !(lr && rr) || rr.y === 0;
    if (noRanges) {
      top = true;
      bottom = true;
    } else {
      top = lr.top - rr.top + rr.height > 0;
      bottom = rr.bottom + rr.height - lr.bottom > 0;
    }
    const goingUpToPrevious = ev.key === "ArrowUp" && prevSibling && top;
    const goingDownToNext = ev.key === "ArrowDown" && nextSibling && bottom;
    if (goingUpToPrevious) {
      return { line, dir: "up" };
    }
    if (goingDownToNext) {
      return { line, dir: "down" };
    }
  }
  function lineSelection(self2) {
    let lines = self2.lines;
    let caretSelTimeout;
    let lineInterval = [-1, -1];
    let currentLine = -1;
    let firstLine = -1;
    function caretSelectionDebounce(callback) {
      clearTimeout(caretSelTimeout);
      caretSelTimeout = window.setTimeout(() => {
        callback();
      }, 200);
    }
    function createRange(selected) {
      if (!selected) {
        selected = self2.getSelectedLines();
      }
      if (selected.length === 0) {
        return;
      }
      document.querySelector("#pocket-editor-mock-sel")?.remove();
      const mockSelection = document.createElement("pre");
      mockSelection.id = "pocket-editor-mock-sel";
      mockSelection.textContent = "pe-mock-selection";
      mockSelection.setAttribute("contenteditable", "true");
      self2.container.appendChild(mockSelection);
      const sel = window.getSelection();
      const range = document.createRange();
      const textlen = mockSelection.childNodes[0].nodeValue?.length || 0;
      range.setStart(mockSelection.childNodes[0], 0);
      range.setEnd(mockSelection.childNodes[0], textlen);
      sel?.removeAllRanges();
      sel?.addRange(range);
    }
    function getLineIndex(editable) {
      const line = self2.getLineFromEditable(editable);
      return line ? lines.indexOf(line) : -1;
    }
    function resetLineSelection() {
      const line = lines[currentLine];
      const editable = line?.querySelector("[contenteditable]");
      if (editable) {
        setCaret(line);
      }
      currentLine = -1;
      firstLine = -1;
      lineInterval = [-1, -1];
      document.querySelector("#pocket-editor-mock-sel")?.remove();
      self2.container.removeEventListener("mousemove", mouseMoveEvent);
    }
    function addToLineSelection(index) {
      if (index > firstLine) {
        lineInterval[1] = index;
      }
      if (index < firstLine) {
        lineInterval[0] = index;
      }
      if (index === firstLine) {
        lineInterval = [index, index];
      }
    }
    function changeLineSelection(index) {
      firstLine = index;
      lineInterval = [index, index];
    }
    function applyLineSelection(interval) {
      lines.forEach((line, i) => {
        if (i >= interval[0] && i <= interval[1]) {
          line.setAttribute("data-selected", "");
        } else {
          line.removeAttribute("data-selected");
        }
      });
      caretSelectionDebounce(() => createRange());
    }
    function initLineSelection(index) {
      currentLine = firstLine = index;
      lineInterval = [index, index];
    }
    function keyboardEvent(e) {
      lines = self2.lines;
      const selected = self2.getSelectedLines();
      const isClipboardKey = e.key.match(/([x|c|v])/g);
      const isCtrlKey = e.key === "Control" || e.key === "Meta";
      const noSelection = selected.length > 0;
      const ctrl = e.ctrlKey || e.metaKey;
      if (isCtrlKey || ctrl && isClipboardKey && noSelection) {
        return;
      }
      if (ctrl && e.key === "a") {
        window.getSelection()?.removeAllRanges();
        currentLine = firstLine = 0;
        lineInterval = [0, lines.length - 1];
        applyLineSelection(lineInterval);
        e.preventDefault();
        return;
      }
      if (noSelection) {
        window.getSelection()?.removeAllRanges();
        if (e.key === "Escape" || e.key === "Tab") {
          resetLineSelection();
          applyLineSelection(lineInterval);
          e.preventDefault();
          return;
        }
        if (e.key.includes("Arrow")) {
          if (e.key.includes("Down")) {
            currentLine = Math.min(currentLine + 1, lines.length - 1);
          }
          if (e.key.includes("Up")) {
            currentLine = Math.max(0, currentLine - 1);
          }
          if (e.shiftKey) {
            addToLineSelection(currentLine);
          }
          if (!e.shiftKey) {
            changeLineSelection(currentLine);
          }
          applyLineSelection(lineInterval);
          e.preventDefault();
          return;
        }
        if (!includesAny(e.code, "Shift", "Alt", "Control", "Caps")) {
          resetLineSelection();
          addUndoHistory(self2, selected[selected.length - -1]);
          self2.removeLines(selected);
          if (e.code === "Enter") {
            e.preventDefault();
          }
        }
      }
      if (!e.shiftKey) {
        return;
      }
      const { line } = detectLineJump(self2, e) ?? {};
      if (line) {
        const index = lines.indexOf(line);
        initLineSelection(index);
        applyLineSelection(lineInterval);
        window.getSelection()?.removeAllRanges();
      }
    }
    function mouseMoveEvent(e) {
      const target = e.target;
      const selected = self2.getSelectedLines();
      if (selected.length > 0) {
        window.getSelection()?.removeAllRanges();
      }
      const isCheckbox = target.getAttribute("aria-label") === "todo list checkbox";
      const isListMarker = target.dataset.listMarker;
      const isEditable = !!target.getAttribute("contenteditable");
      if (isCheckbox || isListMarker || isEditable) {
        currentLine = getLineIndex(target);
        if (currentLine === firstLine && selected.length === 0) {
          return;
        }
        addToLineSelection(currentLine);
        applyLineSelection(lineInterval);
      }
    }
    function mouseDownEvent(event) {
      const target = event.target;
      const rightclick = event.button === 2;
      const leftclick = event.button === 0;
      const hasSelection = self2.getSelectedLines().length > 0;
      lines = self2.lines;
      if (rightclick) {
        event.preventDefault();
      }
      if (!leftclick) {
        return;
      }
      if (hasSelection) {
        resetLineSelection();
        applyLineSelection(lineInterval);
      }
      if (target.getAttribute("contenteditable")) {
        initLineSelection(getLineIndex(target));
        self2.container.addEventListener("mousemove", mouseMoveEvent);
      }
    }
    function mouseClickEvent(event) {
      const path = event.composedPath();
      const hasSelection = self2.getSelectedLines().length > 0;
      const clicksOutsideContainer = !path.includes(self2.container);
      if (clicksOutsideContainer && hasSelection) {
        lines = self2.lines;
        resetLineSelection();
        applyLineSelection(lineInterval);
      }
      self2.container.removeEventListener("mousemove", mouseMoveEvent);
    }
    window.addEventListener("touchend", mouseClickEvent);
    window.addEventListener("click", mouseClickEvent);
    self2.container.addEventListener("keydown", keyboardEvent);
    self2.container.addEventListener("mousedown", mouseDownEvent);
  }
  function includesAny(str, ...matches) {
    for (const match of matches) {
      if (str.includes(match)) {
        return true;
      }
    }
    return false;
  }
  function removeLineNoText(editable, prevline) {
    setCaret(prevline);
    editable.parentElement?.remove();
  }
  function removeLineWithText(editable, prevLine) {
    const node = lastTextNode(prevLine);
    const isTextNode = node.nodeType === 3;
    const charAmount = node.nodeValue?.length || 0;
    const targetText = editable?.textContent || "";
    node[isTextNode ? "nodeValue" : "textContent"] += targetText;
    const selection = window.getSelection();
    const range = document.createRange();
    range.setStart(node, isTextNode ? charAmount : 0);
    range.setEnd(node, isTextNode ? charAmount : 0);
    selection?.removeAllRanges();
    selection?.addRange(range);
    const parent = editable.parentElement;
    parent.remove();
  }
  function lineDeletion(self2) {
    const isTouchDevice = "ontouchstart" in window || navigator.maxTouchPoints > 0;
    const userAgent2 = navigator.userAgent.toLowerCase();
    const sel = window.getSelection();
    function applyLineRemove(ev) {
      const editable = ev.target;
      const line = self2.getLineFromEditable(editable);
      const isTouch = "ontouchstart" in window || navigator.maxTouchPoints > 0;
      const isEditable = !!editable.getAttribute("contenteditable");
      const isAtStart = sel?.getRangeAt(0)?.endOffset === 0;
      const isDelEvent = ev.inputType === "deleteContentBackward";
      const isBeforeinput = ev.type === "beforeinput";
      if (isBeforeinput && !isDelEvent || !isAtStart || !isEditable) {
        return;
      }
      ev.preventDefault();
      if (line) {
        addUndoHistory(self2, line);
      }
      if (Object.keys(line?.dataset ?? {}).length > 0) {
        const newEditable = removeModifier(editable);
        if (isTouch && newEditable && newEditable.textContent === "") {
          newEditable.textContent = self2.ZERO_WIDTH_WHITESPACE;
          setCaret(newEditable);
        }
        return;
      }
      const prevline = self2.getPrevLine(line);
      if (prevline) {
        if (editable.textContent === "") {
          removeLineNoText(editable, prevline);
        } else {
          removeLineWithText(editable, prevline);
        }
        self2.container.dispatchEvent(
          new InputEvent("beforeinput", {
            inputType: "deleteContentBackward",
            bubbles: true
          })
        );
      }
    }
    self2.container.addEventListener("beforeinput", applyLineRemove);
    if (userAgent2.includes("safari") && !(userAgent2.includes("chrome") && userAgent2.includes("chromium"))) {
      self2.container.addEventListener("keydown", (e) => {
        try {
          const range = sel?.getRangeAt(0);
          const isBackspacing = e.key === "Backspace";
          const isAtContainerStart = range?.startOffset === 0;
          if (isBackspacing && isAtContainerStart) {
            applyLineRemove(e);
          }
        } catch (_) {
        }
      });
    }
    if (isTouchDevice) {
      let triggerDeleteLine = false;
      self2.container.addEventListener("beforeinput", (ev) => {
        const editable = ev.target;
        const deleteContent = ev.inputType === "deleteContentBackward";
        const whitespaceOnly = editable.textContent === self2.ZERO_WIDTH_WHITESPACE;
        if (deleteContent && whitespaceOnly) {
          triggerDeleteLine = true;
        }
      });
      self2.container.addEventListener("keyup", (ev) => {
        const editable = ev.target;
        if (triggerDeleteLine) {
          triggerDeleteLine = false;
          applyLineRemove(ev);
          return;
        }
        if (editable.textContent === "") {
          editable.textContent = self2.ZERO_WIDTH_WHITESPACE;
          setCaret(editable);
        }
      });
    }
  }
  function caretControl(self2) {
    let averageCharWidth = 0;
    function initAverageCharWidth() {
      const p = document.createElement("p");
      const span = document.createElement("span");
      p.id = "pocket-editor-mock-p";
      span.textContent = "abcdefghijklmnopqrstuvwxyz0123456789";
      p?.appendChild(span);
      self2.container.querySelector(".line [contenteditable]")?.appendChild(p);
      averageCharWidth = span.offsetWidth / 36 / 2;
      p.remove();
    }
    function rangePosInCharLen(line, str) {
      const sel = window.getSelection();
      let charCount = -1;
      const x = getHorizontalPosition(sel, line);
      const offset = self2.caret_x ?? x.offset;
      const editable = line?.querySelector("[contenteditable]");
      const textnode = lastTextNode(editable);
      const range = document.createRange();
      range.setStart(textnode, 0);
      range.setEnd(textnode, 0);
      let rangeX = 0;
      for (let i = 0; i < str.length - 1; i++) {
        try {
          range.setStart(textnode, i);
          range.setEnd(textnode, i);
        } catch (_) {
          break;
        }
        rangeX = range.getBoundingClientRect().x - x.editable;
        if (rangeX + averageCharWidth >= offset) {
          charCount = i;
          break;
        }
      }
      return charCount;
    }
    function getParagraphAsArray(line) {
      const editable = line?.querySelector("[contenteditable]");
      if (!editable) {
        console.warn("Couldn't get string[], no contenteditable found");
        return [];
      }
      let pos = 0;
      let rangeY = 0;
      let rangeYlast = 0;
      const lines = [""];
      const words = (editable.textContent ?? "").split(" ");
      const textnode = lastTextNode(editable);
      const range = document.createRange();
      range.setStart(textnode, 0);
      range.setEnd(textnode, 0);
      const isWebkit = navigator.userAgent.includes("AppleWebKit");
      rangeYlast = rangeY = range.getBoundingClientRect().y;
      for (let word of words) {
        word = `${word} `;
        pos += word.length;
        try {
          range.setStart(textnode, pos);
          range.setEnd(textnode, pos);
          rangeY = range.getBoundingClientRect().y;
        } catch (_) {
        }
        if (isWebkit) {
          lines[0] += word;
        }
        if (rangeY > rangeYlast) {
          if (isWebkit) {
            lines[0] = lines[0].trimEnd();
          }
          lines.unshift("");
          rangeYlast = rangeY;
        }
        if (isWebkit === false) {
          lines[0] += word;
        }
      }
      lines.reverse();
      return lines;
    }
    self2.container.addEventListener("pointerdown", () => {
      self2.caret_x = void 0;
    });
    self2.container.addEventListener("keydown", (ev) => {
      if (!ev.key.includes("Arrow")) {
        return;
      }
      const goesRight = ev.key === "ArrowRight";
      const goesLeft = ev.key === "ArrowLeft";
      const { line, dir } = detectLineJump(self2, ev) ?? {};
      const sel = window.getSelection();
      const range = document.createRange();
      let node = document.createTextNode("");
      let offset = 0;
      if (goesLeft || goesRight) {
        self2.caret_x = void 0;
      } else if (self2.caret_x === void 0) {
        self2.caret_x = getHorizontalPosition(sel, line).offset;
      }
      if (!line) {
        return;
      }
      if (averageCharWidth === 0) {
        initAverageCharWidth();
      }
      if (dir === "down") {
        const nextline = self2.getNextLine(line) ?? line;
        node = lastTextNode(nextline);
        const textlen = node.nodeValue?.length || 0;
        if (!goesRight) {
          const rows = getParagraphAsArray(nextline);
          offset = rangePosInCharLen(nextline, rows[0]) ?? -1;
          if (offset < 0) {
            offset = textlen;
          }
        }
      }
      if (dir === "up") {
        const prevline = self2.getPrevLine(line) ?? line;
        node = lastTextNode(prevline);
        const textlen = node.nodeValue?.length || 0;
        offset = textlen;
        if (!goesLeft) {
          const rows = getParagraphAsArray(prevline);
          const lastrow = rows[rows.length - 1].trimEnd();
          const lastrowOffset = rangePosInCharLen(prevline, lastrow) ?? textlen;
          offset = textlen - (lastrow.length - lastrowOffset);
          if (lastrowOffset < 0) {
            offset = textlen;
          }
        }
      }
      try {
        range.setStart(node, offset);
        range.setEnd(node, offset);
        sel?.removeAllRanges();
        sel?.addRange(range);
        sel?.collapseToEnd();
        ev.preventDefault();
      } catch (_) {
        console.warn("Cannot set caret");
      }
    });
  }
  function getHorizontalPosition(selection, line) {
    const selectionNotValid = !selection?.anchorNode;
    if (!line || selectionNotValid) {
      return { editable: 0, range: 0, offset: 0 };
    }
    const editable = line.querySelector("[contenteditable]");
    const editableX = editable?.getBoundingClientRect().x ?? 0;
    const rangeX = selection?.getRangeAt(0)?.cloneRange()?.getBoundingClientRect().x ?? 0;
    return {
      editable: editableX,
      range: rangeX,
      offset: rangeX - editableX
    };
  }
  function keybindings(self2, ev) {
    const editable = ev.target;
    const ctrl = ev.ctrlKey || ev.metaKey;
    const isValid = ctrl && ev.shiftKey && ev.code.includes("Digit");
    const line = self2.getLineFromEditable(editable);
    if (isValid && editable) {
      const index = Number.parseInt(ev.code.replace("Digit", "")) - 1;
      const mods = Object.keys(self2.mods);
      const targetMod = mods[index];
      const currentModIsTarget = line?.hasAttribute(`data-${targetMod}`);
      if (currentModIsTarget || index === 5) {
        ev.preventDefault();
        removeModifier(editable);
        return;
      }
      if (targetMod in self2.mods && targetMod !== "todo-checked") {
        ev.preventDefault();
        lineTransform(self2, editable, targetMod);
      }
    }
  }
  var PocketEditor = class {
    container;
    lines;
    wrapper;
    caret_x;
    ZERO_WIDTH_WHITESPACE = "\u200B";
    mods = {
      h1: "#",
      h2: "##",
      h3: "###",
      list: "-",
      todo: "[ ]",
      "todo-checked": "[x]"
    };
    /**
     * This creates an editor.
     * You might also need to add the basic styling with "style.css"
     *
     * @param {string | HTMLElement} parent The wrapper in which to put the editor. Either an element or a CSS selector
     * @param {Object} [options] Pocket editor options
     * @param {string} [options.text] Default text to add when initializing pocket editor
     * @param {string} [options.id] Specify an id for this instance of the editor
     * @param {true | number} [options.defer] Defer load with a timeout
     *
     * @example
     * import pocketEditor from 'pocket-editor'
     * import 'pocket-editor/style.css'
     *
     * const editor = new pocketEditor("some-selector", { text: "Hello world" })
     */
    constructor(parent, options) {
      const div = document.createElement("div");
      const { text, defer, id } = options ?? {};
      this.wrapper = typeof parent === "string" ? document.querySelector(parent) : parent;
      this.container = div;
      this.lines = [];
      if (this.wrapper === null) {
        throw new Error(`Pocket editor: selector "${parent}" was not found`);
      }
      if (id) {
        div.id = id;
      }
      div.dataset.pocketEditor = "";
      if (typeof defer === "number") {
        setTimeout(() => this.init(text), defer);
      } else if (defer === true) {
        setTimeout(() => this.init(text));
      } else {
        this.init(text);
      }
    }
    init(text) {
      if (text) {
        this.container.appendChild(toHTML(this, text));
      } else {
        this.container.appendChild(this.createLine({ text: "" }));
      }
      if (this.wrapper) {
        this.wrapper.appendChild(this.container);
      }
      this.container.addEventListener("beforeinput", (ev) => paragraphControl(this, ev));
      this.container.addEventListener("input", (ev) => paragraphControl(this, ev));
      this.container.addEventListener("keydown", (ev) => keybindings(this, ev));
      this.container.addEventListener("paste", (ev) => pasteEvent(this, ev));
      this.container.addEventListener("copy", (ev) => copyEvent(this, ev));
      this.container.addEventListener("cut", (ev) => cutEvent(this, ev));
      lineSelection(this);
      caretControl(this);
      lineDeletion(this);
      initUndo(this);
      const lineObserverCallback = () => {
        this.lines = Object.values(this.container.children);
      };
      const observer = new MutationObserver(lineObserverCallback);
      observer.observe(this.container, { childList: true });
      this.lines = Object.values(this.container.children);
    }
    /**
     * Gets the editor content as Markdown
     * @returns A valid markdown string
     */
    get value() {
      return toMarkdown(this.lines);
    }
    /**
     * This replaces the content of the editor with the specified text.
     * All nodes are removed before adding the new generated HTML.
     * @param text - Either plain text or Markdown
     *
     * @example
     * // Checks the checkbox every pair seconds
     * const editor = new pocketEditor("#some-id", { text: "Please wait" })
     *
     * setInterval(() => {
     * 	 const second = new Date().getSeconds()
     * 	 const checkbox = second % 2 ? "[x]" : "[ ]"
     * 	 const text = `${checkbox} Second is pair`
     * 	 editor.value = text
     * }, 1000)
     */
    set value(text) {
      for (const node of Object.values(this.container.children)) {
        node.remove();
      }
      this.container.appendChild(toHTML(this, text));
    }
    /**
    	 * Listens to beforeinput, input, cut, and paste events inside the editor.
    	 * Automatically passes the editor content as markdown as an argument.
    	 *
    	 * @param listener Get the content as a markdown string
    	 * @returns An event cleanup function
    	 *
    	 * @example
    	 * // One-liner logger
    	 * pocketEditor("#some-id", { text: "Hello" }).oninput = console.log
    	 *
    	 * @example
    	 * // Saves editor content to localStorage
    	 * const editor = new pocketEditor("#some-id", { text: "Hello" })
    
    	 * editor.oninput = content => {
    	 *   localStorage.saved = content
    	 * })
     	 */
    oninput(listener) {
      const cb = (event) => {
        const isBeforeInput = event.type === "beforeinput";
        if (isBeforeInput) {
          const inputEvent = event;
          const inputType = inputEvent.inputType;
          const acceptedTypes = inputType === "deleteContentBackward" || inputType === "insertParagraph";
          if (acceptedTypes) {
            queueMicrotask(() => {
              listener(this.value);
              console.log(this.value);
            });
          }
          return;
        }
        listener(this.value);
      };
      this.container.addEventListener("cut", cb);
      this.container.addEventListener("paste", cb);
      this.container.addEventListener("input", cb);
      this.container.addEventListener("beforeinput", cb);
      return () => {
        this.container.removeEventListener("cut", cb);
        this.container.removeEventListener("paste", cb);
        this.container.removeEventListener("input", cb);
        this.container.removeEventListener("beforeinput", cb);
      };
    }
    /**
     * An addEventListener wrapper for esthetic purposes.
     *
     * @param type Listens to everything on "input"
     * @param listener Get the content as a markdown string
     * @returns An event cleanup function
     */
    addEventListener(_, listener) {
      return this.oninput(listener);
    }
    getSelectedLines() {
      return this.lines.filter((line) => line.dataset.selected !== void 0) ?? [];
    }
    getPrevLine(line) {
      return this.lines[this.lines.indexOf(line) - 1];
    }
    getNextLine(line) {
      return this.lines[this.lines.indexOf(line) + 1];
    }
    getLineFromEditable(elem) {
      while (elem?.parentElement) {
        const parent = elem.parentElement;
        const isDiv = parent.tagName === "DIV";
        if (isDiv) {
          return parent;
        }
        elem = parent;
      }
      return null;
    }
    removeLines(lines) {
      const emptyLine = this.createLine();
      const prevline = this.getPrevLine(lines[0]);
      for (const line of lines) {
        line.remove();
      }
      if (prevline) {
        this.insertAfter(emptyLine, prevline);
      } else {
        this.container.prepend(emptyLine);
      }
      setCaret(emptyLine);
      this.container.dispatchEvent(
        new InputEvent("input", {
          inputType: "deleteContent",
          bubbles: true,
          data: ""
        })
      );
    }
    createLine(props) {
      const notesline = document.createElement("div");
      const editable = document.createElement("p");
      const mod2 = props?.modif ?? "";
      const mods = this.mods;
      editable.setAttribute("contenteditable", "true");
      notesline.appendChild(editable);
      if (typeof props?.text === "string") {
        editable.textContent = props.text;
      }
      if (mod2 in mods) {
        lineTransform(this, editable, mod2, false);
      }
      return notesline;
    }
    insertAfter(newNode, existingNode) {
      existingNode?.parentNode?.insertBefore(newNode, existingNode.nextSibling);
    }
  };
  var index_default = PocketEditor;
  globalThis.PocketEditor = PocketEditor;

  // src/scripts/features/notes.ts
  var container = document.getElementById("notes_container");
  function notes(init2, event) {
    if (event) {
      updateNotes(event);
      return;
    }
    if (init2) {
      init2.on ? initNotes(init2) : onSettingsLoad(() => initNotes(init2));
    }
  }
  async function updateNotes(event) {
    const notes2 = (await storage.sync.get("notes"))?.notes;
    if (!notes2) {
      return;
    }
    if (event?.text !== void 0) {
      notes2.text = event.text;
    }
    if (event?.align !== void 0) {
      notes2.align = event.align;
      handleAlign(notes2.align);
    }
    if (event?.width !== void 0) {
      notes2.width = Number.parseInt(event.width);
      handleWidth(notes2.width);
    }
    if (event?.background) {
      notes2.background = hexColorFromSplitRange("notes-background-range");
      handleBackground(notes2.background);
    }
    eventDebounce({ notes: notes2 });
  }
  function initNotes(init2) {
    document.getElementById("pocket-editor")?.remove();
    handleAlign(init2.align);
    handleWidth(init2.width);
    handleBackground(init2.background);
    handleToggle(init2.on);
    init2.text = init2.text ?? translateNotesText();
    new index_default("#notes_container", { text: init2.text, id: "pocket-editor" }).oninput((content) => {
      updateNotes({ text: content });
    });
  }
  function handleToggle(state) {
    container?.classList.toggle("hidden", !state);
  }
  function handleAlign(value) {
    container?.classList.toggle("center-align", value === "center");
    container?.classList.toggle("right-align", value === "right");
  }
  function handleWidth(value) {
    if (value) {
      document.documentElement.style.setProperty("--notes-width", `${value.toString()}em`);
    }
  }
  function handleBackground(hex = "#fff2") {
    if (container) {
      container?.classList.toggle("opaque", hex.includes("#fff") && opacityFromHex(hex) > 7);
      document.documentElement.style.setProperty("--notes-background", hex);
    }
  }
  function translateNotesText() {
    let lang = getLang();
    if (!(lang && lang in langList)) {
      lang = "en";
    }
    const line1 = tradThis("Edit this note");
    const line2 = tradThis("With markdown titles, lists, and checkboxes");
    const line3 = tradThis("Learn more on <url>");
    return `## ${line1}!

[ ] ${line2}

[ ] ${line3.replace("<url>", "https://bonjourr.fr/docs/overview#notes")}`;
  }

  // src/scripts/features/pomodoro.ts
  var currentPomodoroData;
  var pomodoroContainer = document.getElementById("pomodoro_container");
  var pomodoroStart = document.getElementById("pmdr_start");
  var pomodoroPause = document.getElementById("pmdr_pause");
  var pomodoroReset = document.getElementById("pmdr_reset");
  var timerDom = document.getElementById("pmdr_timer");
  var radioButtons = document.querySelectorAll('#pmdr_modes input[type="radio"]');
  var focusButton = document.getElementById("pmdr-focus");
  var broadcast = new BroadcastChannel("bonjourr_pomodoro");
  var countdown;
  var timeModeTimeout;
  var tabTitleTimeout;
  var timeBeforeReset = 1e4;
  var alarmAudio = new Audio();
  var setModeButton = (value = "") => {
    return document.getElementById(`pmdr-${value}`).checked = true;
  };
  var getTimeForMode = (mode) => {
    return currentPomodoroData.timeFor[mode];
  };
  function pomodoro(init2, update) {
    if (update) {
      updatePomodoro(update);
      return;
    }
    if (init2?.on) {
      initPomodoro(init2);
      return;
    }
    if (init2) {
      onSettingsLoad(() => {
        initPomodoro(init2);
      });
    }
  }
  function initPomodoro(init2) {
    currentPomodoroData = init2;
    togglePomodoroFocus(init2.focus && init2.on);
    setModeButton(init2.mode);
    handleToggle2(init2.on);
    initTimer(init2);
    displayInterface("pomodoro");
    listenToBroadcast();
    handleUserInput2();
    setPomodoroInfo(init2.history);
  }
  function handleUserInput2() {
    radioButtons.forEach((btn) => {
      btn.addEventListener("change", (e) => {
        const newMode = e.target.value;
        switchMode(newMode, true);
        broadcast.postMessage({
          type: "switch-mode",
          mode: newMode
        });
      });
    });
    pomodoroStart?.addEventListener("click", () => {
      if (currentPomodoroData.mode) {
        storage.sync.get().then((sync) => {
          startTimer(sync.pomodoro, true);
        });
        broadcast.postMessage({
          type: "start-pomodoro",
          time: getTimeForMode(currentPomodoroData.mode)
        });
      }
    });
    pomodoroPause?.addEventListener("click", () => {
      pauseTimer();
      broadcast.postMessage({
        type: "pause-pomodoro"
      });
    });
    pomodoroReset?.addEventListener("pointerdown", (e) => {
      resetTimer();
      broadcast.postMessage({
        type: "reset-pomodoro"
      });
      turnRefreshButton(e, true);
    });
    focusButton?.addEventListener("change", (e) => {
      const focusIsChecked = e.target.checked;
      togglePomodoroFocus(focusIsChecked);
      updatePomodoro({ focus: focusIsChecked });
      broadcast.postMessage({
        type: "toggle-focus",
        on: focusIsChecked
      });
    });
    document.querySelectorAll(".pomodoro_mode, #focus-toggle").forEach((el) => {
      el.addEventListener("keydown", (e) => {
        if (e.code === "Space" || e.code === "Enter") {
          const input = el.querySelector('input[type="radio"], input[type="checkbox"]');
          if (!input) return;
          input.checked = !input.checked;
          input.dispatchEvent(new Event("change", { bubbles: true }));
          e.preventDefault();
        }
      });
    });
  }
  function listenToBroadcast() {
    broadcast.addEventListener("message", ({ data = {} }) => {
      if (data.type === "start-pomodoro") {
        storage.sync.get().then((sync) => {
          startTimer(sync.pomodoro, true, data.time);
        });
      }
      if (data.type === "switch-mode") {
        setModeButton(data.mode);
        switchMode(data.mode);
      }
      if (data.type === "pause-pomodoro") {
        pauseTimer();
      }
      if (data.type === "reset-pomodoro") {
        resetTimer();
      }
      if (data.type === "toggle-focus") {
        togglePomodoroFocus(data.on);
      }
    });
  }
  function switchMode(mode, animate, init2) {
    resetTimeouts();
    setModeGlider(mode, animate);
    stopTimer();
    insertTime(getTimeForMode(mode), false);
    if (!init2) {
      updatePomodoro({ mode, end: 0, pause: 0 });
    }
  }
  function resetTimeouts() {
    clearTimeout(tabTitleTimeout);
    clearTimeout(timeModeTimeout);
  }
  function setModeGlider(mode, animate) {
    const pomodoroModes = document.querySelector("#pmdr_modes");
    const allModes = pomodoroModes?.querySelectorAll(".pomodoro_mode");
    const activeMode = pomodoroModes?.querySelector(".pomodoro_mode.active");
    const nextMode = pomodoroModes?.querySelector(`#pmdr-${mode}`)?.parentElement;
    const glider = pomodoroModes?.querySelector("span.glider");
    allModes?.forEach((div) => {
      div.classList.remove("active");
    });
    if (!animate) {
      nextMode?.classList.add("active");
      return;
    }
    if (nextMode && glider) {
      const fromLeft = activeMode?.offsetLeft ?? 0;
      const fromWidth = activeMode?.offsetWidth ?? 100;
      const toLeft = nextMode.offsetLeft;
      const toWidth = nextMode.offsetWidth;
      glider.style.opacity = "1";
      glider.style.left = `${fromLeft}px`;
      glider.style.width = `${fromWidth}px`;
      setTimeout(() => {
        glider.style.left = `${toLeft}px`;
        glider.style.width = `${toWidth}px`;
        glider.classList.add("gliding");
      }, 16);
      setTimeout(() => {
        glider.removeAttribute("style");
        glider.classList.remove("gliding");
        nextMode.classList.add("active");
      }, 200);
    }
  }
  function initTimer(pomodoro2) {
    const isTimerRunning = pomodoro2.end && Date.now() < pomodoro2.end;
    const isTimerDefaultStopped = !pomodoro2.end || Date.now() > pomodoro2.end;
    if (isTimerRunning) {
      startTimer(pomodoro2);
      return;
    }
    if (isTimerDefaultStopped && pomodoro2.mode) {
      switchMode(pomodoro2.mode, false, true);
    }
  }
  function startTimer(pomodoro2, fromButton, time) {
    fromButton ??= false;
    stopTimer();
    resetTimeouts();
    const mode = pomodoro2.mode ?? "pomodoro";
    const defaultTime = time ?? getTimeForMode(mode);
    const wasPaused = pomodoro2.pause !== 0;
    const now = Date.now();
    let remaining = 0;
    if (wasPaused) {
      remaining = pomodoro2.end - pomodoro2.pause;
    }
    if (fromButton) {
      if (wasPaused) {
        const newEnd = now + remaining;
        startCountdown(newEnd);
        updatePomodoro({
          end: newEnd,
          pause: 0
        });
      } else {
        const end = now + defaultTime * 1e3;
        updatePomodoro({
          end,
          pause: 0
        });
        startCountdown(end);
      }
    } else {
      setModeGlider(pomodoro2.mode);
      if (wasPaused) {
        insertTime(calculateSecondsLeft(now + remaining), false);
      } else {
        startCountdown(pomodoro2.end);
      }
    }
  }
  function startCountdown(endtime) {
    insertTime(calculateSecondsLeft(endtime));
    countdown = setInterval(() => {
      insertTime(calculateSecondsLeft(endtime));
    }, 100);
    toggleStartPause(true);
  }
  function pauseTimer() {
    stopTimer();
    updatePomodoro({
      pause: Date.now()
    });
  }
  function toggleStartPause(started) {
    if (!pomodoroContainer) return;
    pomodoroContainer.classList.toggle("started", started);
  }
  function stopTimer() {
    clearInterval(countdown);
    toggleStartPause(false);
  }
  function resetTimer() {
    switchMode(currentPomodoroData.mode);
  }
  function calculateSecondsLeft(end) {
    const secondsLeft = Math.round((end - Date.now()) / 1e3);
    if (secondsLeft <= 0) {
      stopTimer();
      ringTheAlarm();
      timeModeTimeout = setTimeout(() => {
        switchMode(currentPomodoroData.mode);
      }, timeBeforeReset);
      return 0;
    }
    return secondsLeft;
  }
  function insertTime(seconds, timerIsStarted = true) {
    if (!timerDom) {
      return;
    }
    const minutes = Math.floor(seconds / 60);
    const secondsRemaining = seconds % 60;
    const displayTime = `${minutes}:${secondsRemaining < 10 ? "0" : ""}${secondsRemaining}`;
    if (timerDom.textContent !== displayTime) {
      timerDom.textContent = displayTime;
    }
    handleTabTitle(displayTime, timerIsStarted);
  }
  function handleTabTitle(displayTime, timerIsStarted) {
    const originalTitle = document.title;
    const match = originalTitle.match(/\| (.*)/);
    const afterPipe = match?.[1] ?? originalTitle;
    let newTitle;
    if (displayTime !== "0:00") {
      newTitle = timerIsStarted ? `${displayTime} | ${afterPipe}` : afterPipe;
    } else {
      const timesUpString = tradThis("Time's up!");
      newTitle = `${timesUpString} | ${afterPipe}`;
      tabTitleTimeout = setTimeout(() => {
        tabTitle(afterPipe);
      }, timeBeforeReset);
    }
    tabTitle(newTitle);
  }
  function handleToggle2(state) {
    pomodoroContainer?.classList.toggle("hidden", !state);
  }
  function togglePomodoroFocus(focus) {
    const enablingFocus = focus && !currentPomodoroData.focus;
    const disablingFocus = !focus && currentPomodoroData.focus;
    const switching = disablingFocus || enablingFocus;
    focusButton.checked = focus;
    currentPomodoroData.focus = focus;
    if (!switching) {
      pomodoroContainer.classList.toggle("onFocus", focus);
      pomodoroContainer.classList.toggle("outOfFocus", !focus);
    }
    if (switching && document.visibilityState === "visible") {
      const originalRect = pomodoroContainer.getBoundingClientRect();
      const clone = pomodoroContainer.cloneNode(true);
      clone.style.position = "absolute";
      clone.style.top = originalRect.top + "px";
      clone.style.left = originalRect.left + "px";
      clone.style.fontSize = document.documentElement.style.getPropertyValue("--font-size");
      clone.style.fontFamily = document.documentElement.style.getPropertyValue("--font-family");
      clone.classList.add("clone");
      document.body.appendChild(clone);
      clone.classList.remove("onFocus", "outOfFocus");
      clone.classList.toggle("onFocus", !enablingFocus);
      clone.classList.toggle("outOfFocus", enablingFocus);
      pomodoroContainer.style.visibility = "hidden";
      document.body.classList.toggle("pomodoro-focus", enablingFocus);
      pomodoroContainer.classList.toggle("onFocus", focus);
      pomodoroContainer.classList.toggle("outOfFocus", !focus);
      const targetRect = pomodoroContainer.getBoundingClientRect();
      const deltaX = targetRect.left - originalRect.left;
      const deltaY = targetRect.top - originalRect.top;
      requestAnimationFrame(() => {
        clone.classList.remove("onFocus", "outOfFocus");
        clone.classList.add(enablingFocus ? "onFocus" : "outOfFocus");
        clone.style.transform = `translate(${deltaX}px, ${deltaY}px)`;
      });
      clone.addEventListener("transitionend", (e) => {
        if (e.propertyName !== "transform") return;
        pomodoroContainer.style.visibility = "visible";
        clone.remove();
      });
    } else {
      document.body.classList.toggle("pomodoro-focus", focus);
    }
  }
  function ringTheAlarm() {
    const lastTab = localStorage.getItem("lastActiveTab");
    const willRingAndSave = lastTab === TAB_ID;
    if (willRingAndSave) {
      if (currentPomodoroData.sound) {
        playSound();
      }
      if (currentPomodoroData.mode === "pomodoro") {
        updatePomodoro({
          history: {
            endedAt: Date.now().toString()
          }
        });
      }
    } else {
      console.info("Alarm is ringing, but this isn't the active tab.", {
        lastTab,
        TAB_ID
      });
    }
  }
  function playSound() {
    const filename = currentPomodoroData.alarm || "marimba";
    const volume = currentPomodoroData.volume ?? 0.7;
    alarmAudio.src = `src/assets/sounds/${filename}.mp3`;
    alarmAudio.volume = volume;
    alarmAudio.play();
  }
  function setPomodoroInfo(history2) {
    const now = /* @__PURE__ */ new Date();
    let pomsToday = 0;
    let pomsWeek = 0;
    let pomsMonth = 0;
    const startOfToday = new Date(now.getFullYear(), now.getMonth(), now.getDate());
    const startOfWeek = new Date(now);
    const day = (now.getDay() + 6) % 7;
    startOfWeek.setDate(now.getDate() - day);
    startOfWeek.setHours(0, 0, 0, 0);
    const startOfMonth = new Date(now.getFullYear(), now.getMonth(), 1);
    for (const entry of history2) {
      const endedAt = new Date(Number(entry.endedAt));
      if (endedAt >= startOfToday) pomsToday++;
      if (endedAt >= startOfWeek) pomsWeek++;
      if (endedAt >= startOfMonth) pomsMonth++;
    }
    ;
    document.getElementById("poms-today").textContent = pomsToday.toString();
    document.getElementById("poms-week").textContent = pomsWeek.toString();
    document.getElementById("poms-month").textContent = pomsMonth.toString();
  }
  async function updatePomodoro(update) {
    const data = await storage.sync.get(["pomodoro"]);
    if (update.listen) {
      playSound();
      return;
    }
    if (update.on !== void 0) {
      data.pomodoro.on = update.on;
    }
    if (update.sound !== void 0) {
      data.pomodoro.sound = update.sound;
    }
    if (update.alarm) {
      data.pomodoro.alarm = update.alarm;
    }
    if (update.volume) {
      data.pomodoro.volume = update.volume;
    }
    if (update.end !== void 0) {
      data.pomodoro.end = update.end;
    }
    if (update.mode) {
      data.pomodoro.mode = update.mode;
    }
    if (update.pause !== void 0) {
      data.pomodoro.pause = update.pause;
    }
    if (update.focus !== void 0) {
      data.pomodoro.focus = update.focus;
    }
    if (update.history !== void 0) {
      data.pomodoro.history.push({
        endedAt: update.history.endedAt,
        duration: data.pomodoro.timeFor["pomodoro"]
      });
    }
    if (update.timeFor) {
      const { timeFor } = update;
      for (const mode of Object.keys(timeFor)) {
        const value = timeFor[mode];
        if (value !== void 0) {
          data.pomodoro.timeFor[mode] = value * 60;
        }
      }
    }
    await storage.sync.set({ pomodoro: data.pomodoro });
    currentPomodoroData = data.pomodoro;
    setPomodoroInfo(data.pomodoro.history);
    if (update.timeFor) {
      resetTimer();
    }
  }

  // src/scripts/settings.ts
  var import_mod6 = __toESM(require_dist());

  // src/scripts/compatibility/filters.ts
  function newLinkIcons(data) {
    const links = [];
    Object.entries(data).map(([key, val]) => {
      if (key.length === 11 && key.startsWith("links")) {
        links.push(val);
      }
    });
    for (const link of links) {
      if (!isElem(link)) {
        continue;
      }
      if (link.icon && typeof link.icon === "string") {
        const icon = link.icon;
        const faviconWasAutomatic = icon.startsWith("https://services.bonjourr.fr") || isNumber(icon);
        const autoValue = faviconWasAutomatic && isNumber(icon) ? `https://services.bonjourr.fr/favicon/blob/${link.url}?r=${icon}` : void 0;
        link.icon = {
          type: faviconWasAutomatic ? "auto" : "url",
          value: faviconWasAutomatic ? autoValue : icon
        };
      }
      data[link._id] = link;
    }
    return data;
  }
  function addAlarmsToPomodoro(data) {
    if (!data.pomodoro) {
      data.pomodoro = SYNC_DEFAULT.pomodoro;
    }
    data.pomodoro.alarm = data.pomodoro.alarm ?? SYNC_DEFAULT.pomodoro.alarm;
    data.pomodoro.volume = data.pomodoro.volume ?? SYNC_DEFAULT.pomodoro.alarm;
    return data;
  }
  function fixNullBrightness(data) {
    if (data.backgrounds?.bright === null) {
      data.backgrounds.bright = SYNC_DEFAULT.backgrounds.bright;
    }
    return data;
  }
  function addSupporters(data) {
    if (data.supporters === void 0) {
      data.supporters = {
        enabled: true
      };
    }
    return data;
  }
  function hideArrayToObject(data) {
    const newhide = {};
    if (Array.isArray(data.hide)) {
      if (data.hide[0]?.[0]) {
        newhide.clock = true;
      }
      if (data.hide[0]?.[1]) {
        newhide.date = true;
      }
      if (data.hide[1]?.[0]) {
        newhide.greetings = true;
      }
      if (data.hide[1]?.[1]) {
        newhide.weatherdesc = true;
      }
      if (data.hide[1]?.[2]) {
        newhide.weathericon = true;
      }
      if (data.hide[3]?.[0]) {
        newhide.settingsicon = true;
      }
      data.hide = newhide;
      data.time = !(data.hide.clock && data.hide.date);
      data.main = !(data.hide.weatherdesc && data.hide.weathericon && data.hide.weathericon);
    }
    return data;
  }
  function booleanSearchbarToObject(data) {
    if (typeof data.searchbar === "boolean") {
      data.searchbar = {
        ...SYNC_DEFAULT.searchbar,
        on: data.searchbar,
        newtab: data.searchbar_newtab,
        engine: data.searchbar_engine?.replace("s_", "") || "google",
        suggestions: false
      };
    }
    return data;
  }
  function linkListToFlatObjects(data) {
    if (Array.isArray(data.links)) {
      if (data.links.length > 0 && data.quicklinks === void 0) {
        data.quicklinks = true;
      }
      data.links?.forEach(({ title, url, icon }, i) => {
        const id = `links${randomString(6)}`;
        const filteredIcon = icon?.startsWith("alias:") ? data[icon] : icon;
        data[id] = {
          _id: id,
          parent: "default",
          order: i,
          title,
          url,
          icon: filteredIcon
        };
      });
      const aliasKeyList = Object.keys(data).filter((key) => key.match("alias:"));
      for (const key of aliasKeyList) {
        data[key] = void 0;
      }
    }
    return data;
  }
  function newFontSystem(data) {
    if (data.font) {
      data.font.weightlist = data.font?.availWeights ?? [];
      data.font.url = void 0;
      data.font.availWeights = void 0;
      if (data.font.system === void 0) {
        data.font.system = false;
      }
    }
    return data;
  }
  function newReviewData(data) {
    if (data.reviewPopup) {
      data.review = data.reviewPopup === "removed" ? -1 : +data.reviewPopup;
    }
    return data;
  }
  function quotesJsonToCsv(data) {
    if (Array.isArray(data?.quotes?.userlist)) {
      data.quotes.userlist = oldJSONToCSV(data.quotes.userlist);
    }
    return data;
  }
  function toIsoLanguageCode(data) {
    data.lang = countryCodeToLanguageCode(data.lang ?? "en");
    return data;
  }
  function clockDateFormat(data) {
    const old = data;
    if (old.usdate) {
      data.dateformat = "us";
    } else {
      data.dateformat = "auto";
    }
    return data;
  }
  function removeWorldClocksDuplicate(current, target) {
    if (target.worldclocks && current.worldclocks) {
      current.worldclocks = target.worldclocks;
    }
    return current;
  }
  function manualTimezonesToIntl(data) {
    const timezoneMatches = {
      "-10": "-10:00",
      "-9": "-09:00",
      "-8": "-08:00",
      "-7": "-07:00",
      "-6": "-06:00",
      "-5": "-05:00",
      "-4": "-04:00",
      "-3": "-03:00",
      "+0": "+00:00",
      "+1": "+01:00",
      "+2": "+02:00",
      "+3": "+03:00",
      "+5:30": "+05:30",
      "+7": "+07:00",
      "+8": "+08:00",
      "+9": "+09:00",
      "+10": "+10:00",
      "+12": "+12:00"
    };
    const oldTimezones = Object.keys(timezoneMatches);
    if (data.clock && oldTimezones.includes(data.clock.timezone)) {
      data.clock.timezone = timezoneMatches[data.clock.timezone];
    }
    data.worldclocks?.forEach(({ timezone }, i) => {
      const isOld = oldTimezones.includes(timezone);
      if (data.worldclocks?.[i] && isOld) {
        data.worldclocks[i].timezone = timezoneMatches[timezone];
      }
    });
    return data;
  }
  function validateLinkGroups(current) {
    let links = bundleLinks(current);
    let parents = [...new Set(links.map((link) => link.parent))];
    let parentGroups = parents.filter((p) => !p?.toString().startsWith("links"));
    const oldNumberParents = parents.filter((parent) => typeof parent === "number");
    const oldlinktabs = current.linktabs;
    if (oldlinktabs && oldNumberParents.length > 0) {
      current.linkgroups = {
        on: oldlinktabs.active,
        selected: oldlinktabs.titles[oldlinktabs.selected],
        groups: [...oldlinktabs.titles],
        synced: [],
        pinned: []
      };
      for (const link of links) {
        if (typeof link?.parent === "number") {
          link.parent = current.linkgroups.groups[link.parent];
        }
        current[link._id] = link;
      }
    }
    if (!current.linkgroups) {
      current.linkgroups = SYNC_DEFAULT.linkgroups;
    }
    const { groups: groups2, pinned, synced, selected } = current.linkgroups;
    current.linkgroups.selected = selected ? selected : "default";
    current.linkgroups.groups = groups2.map((val) => val ? val : "default");
    current.linkgroups.pinned = pinned.map((val) => val ? val : "default");
    current.linkgroups.synced = synced.map((val) => val ? val : "default");
    for (const link of links) {
      if (!link?.parent) {
        link.parent = current.linkgroups.selected;
        current[link._id] = link;
      }
    }
    links = bundleLinks(current);
    parents = [...new Set(links.map((link) => link.parent))];
    parentGroups = parents.filter((p) => !p?.toString().startsWith("links"));
    for (const group of parentGroups) {
      if (group) {
        current.linkgroups.groups.push(group.toString());
      }
    }
    if (current.linkgroups.groups.length > 1) {
      current.linkgroups.on = true;
    }
    const parentNoDefault = current.linkgroups.groups.filter((group) => group !== "default");
    const defaultExists = current.linkgroups.groups.includes("default");
    const defaultIsEmpty = parentGroups.includes("default") === false;
    const hasUserGroups = parentNoDefault.length > 0;
    const hasLinks = links.length > 0;
    if (defaultExists && defaultIsEmpty && hasUserGroups && hasLinks) {
      current.linkgroups.groups = parentNoDefault;
      current.linkgroups.selected = parentNoDefault[0];
    }
    return current;
  }
  function linksDataMigration(data) {
    if (data?.linktabs || data?.linkgroups) {
      return data;
    }
    const notfoundicon = "data:image/svg+xml;base64,PHN2ZyBoZWlnaHQ9IjI2MiIgdmlld0JveD0iMC";
    const list = bundleLinks(data).sort((a, b) => (a.order ?? 0) - (b.order ?? 0));
    for (const link of list) {
      if (!isElem(link)) {
        continue;
      }
      if (typeof link.icon === "string") {
        const icon = link.icon;
        const isNotFound = icon.startsWith(notfoundicon);
        if (isNotFound) {
          link.icon = { type: "auto" };
          data[link._id] = link;
        }
      }
    }
    return data;
  }
  function improvedWeather(data) {
    if (data.weather && data.weather?.geolocation === void 0) {
      const oldLocation = data.weather?.location ?? [];
      data.weather.geolocation = "approximate";
      data.weather.geolocation = oldLocation.length === 0 ? "off" : "precise";
    }
    return data;
  }
  function newBackgroundsField(data) {
    const olddata = data;
    const defaults = structuredClone(SYNC_DEFAULT);
    if (!data.backgrounds) {
      data.backgrounds = defaults.backgrounds;
    }
    if (olddata.background_blur !== void 0) {
      data.backgrounds.blur = olddata.background_blur;
    }
    if (olddata.background_bright !== void 0) {
      data.backgrounds.bright = olddata.background_bright;
    }
    if (olddata.background_type !== void 0) {
      data.backgrounds.type = olddata.background_type === "unsplash" ? "images" : "files";
    }
    if (olddata.unsplash) {
      data.backgrounds.frequency = olddata.unsplash?.every ?? "hour";
    }
    if (olddata.unsplash?.collection) {
      data.backgrounds.images = "unsplash-images-collections";
      data.backgrounds.queries = { "unsplash-images-collections": olddata.unsplash.collection };
    }
    return data;
  }
  function analogClockOptions(data) {
    if (data.clock?.style) {
      data.analogstyle = {
        background: "#fff2",
        border: "#ffff",
        face: data?.clock?.face || "none",
        shape: "round",
        hands: "modern"
      };
      if (data.clock.style === "round" || data.clock.style === "square") {
        data.analogstyle.shape = data.clock.style;
      }
      if (data.clock.style === "transparent") {
        data.analogstyle.background = "#fff0";
        data.analogstyle.border = "#fff0";
      }
    }
    return data;
  }
  function removeLinkgroupDuplicates(current) {
    current.linkgroups.groups = [...new Set(current.linkgroups.groups)];
    current.linkgroups.pinned = [...new Set(current.linkgroups.pinned)];
    current.linkgroups.synced = [...new Set(current.linkgroups.synced)];
    const links = bundleLinks(current);
    const parents = links.map((l) => l.parent);
    const defaultGroupAsParent = parents.some((parent) => parent === "default");
    const multipleGroups = current.linkgroups.groups.length > 1;
    if (multipleGroups && !defaultGroupAsParent) {
      current.linkgroups.groups = current.linkgroups.groups.filter((item) => item !== "default");
      current.linkgroups.pinned = current.linkgroups.pinned.filter((item) => item !== "default");
      current.linkgroups.synced = current.linkgroups.synced.filter((item) => item !== "default");
    }
    return current;
  }
  function toggleMoveWidgets(current, imported) {
    if (imported.move) {
      current.move = imported.move;
      const layout = current.move.layouts[current.move.selection];
      const grid = layout?.grid ?? defaultLayouts[current.move.selection].grid;
      const area = grid.flat().join(" ");
      current.time = area.includes("time");
      current.main = area.includes("main");
      current.quicklinks = area.includes("quicklinks");
      if (current.notes) {
        current.notes.on = area.includes("notes");
      }
      if (current.quotes) {
        current.quotes.on = area.includes("quotes");
      }
      if (current.searchbar) {
        current.searchbar.on = area.includes("searchbar");
      }
      return current;
    }
    if (!imported.move) {
      const importStates = {
        time: imported.time ?? current.time,
        main: imported.main ?? current.main,
        notes: imported.notes?.on ?? current.notes?.on,
        quotes: imported.quotes?.on ?? current.quotes?.on,
        pomodoro: imported.pomodoro?.on ?? current.pomodoro?.on,
        searchbar: imported.searchbar?.on ?? current.searchbar?.on,
        quicklinks: imported.quicklinks ?? current.quicklinks
      };
      const diffWidgets = {
        time: current.time !== importStates.time,
        main: current.main !== importStates.main,
        notes: current.notes?.on !== importStates.notes,
        quotes: current.quotes?.on !== importStates.quotes,
        searchbar: current.searchbar?.on !== importStates.searchbar,
        quicklinks: current.quicklinks !== importStates.quicklinks
      };
      if (Object.keys(imported).some((key) => key.match(/time|main|notes|quotes|searchbar|quicklinks/g))) {
        current.move.selection = "single";
      }
      const selection = current.move.selection;
      const layout = structuredClone(current.move.layouts[selection]);
      const diffEntries = Object.entries(diffWidgets).filter(([_, diff]) => diff === true);
      if (!layout) {
        return current;
      }
      for (const [key] of diffEntries) {
        const id = key;
        const state = importStates[id];
        const gridToggle = state ? addGridWidget : removeGridWidget;
        layout.grid = gridParse(gridToggle(gridStringify(layout.grid), id, selection));
      }
      current.move.layouts[selection] = layout;
    }
    return current;
  }

  // src/scripts/compatibility/versions.ts
  function filterByVersion(data, version) {
    const { major, minor } = version;
    if (major < 22) {
      data = newLinkIcons(data);
      if (minor < 1) {
        data = addAlarmsToPomodoro(data);
      }
    }
    if (major <= 21) {
      if (minor < 3) {
        data = fixNullBrightness(data);
      }
    }
    if (major < 21) {
      data = newBackgroundsField(data);
      data = manualTimezonesToIntl(data);
    }
    if (major < 20) {
      data = analogClockOptions(data);
      data = validateLinkGroups(data);
      data = addSupporters(data);
      data = toIsoLanguageCode(data);
    }
    if (major < 19) {
      data = newFontSystem(data);
      data = newReviewData(data);
      data = quotesJsonToCsv(data);
      data = linksDataMigration(data);
    }
    if (major < 18) {
      data = booleanSearchbarToObject(data);
      data = linkListToFlatObjects(data);
      data = hideArrayToObject(data);
      data = improvedWeather(data);
      data = clockDateFormat(data);
    }
    return data;
  }

  // node_modules/.deno/@victr+deepmerge@1.3.2/node_modules/@victr/deepmerge/index.js
  var JSON_PROTO = Object.getPrototypeOf({});
  function fastifyDeepMerge(options) {
    function isNotPrototypeKey(value) {
      return value !== "constructor" && value !== "prototype" && value !== "__proto__";
    }
    function cloneArray(value) {
      let i = 0;
      const il = value.length;
      const result = new Array(il);
      for (i = 0; i < il; ++i) {
        result[i] = clone(value[i]);
      }
      return result;
    }
    function cloneObject(target) {
      const result = {};
      if (cloneProtoObject && Object.getPrototypeOf(target) !== JSON_PROTO) {
        return cloneProtoObject(target);
      }
      const targetKeys = getKeys(target);
      let i, il, key;
      for (i = 0, il = targetKeys.length; i < il; ++i) {
        isNotPrototypeKey(key = targetKeys[i]) && (result[key] = clone(target[key]));
      }
      return result;
    }
    function concatArrays(target, source) {
      const tl = target.length;
      const sl = source.length;
      let i = 0;
      const result = new Array(tl + sl);
      for (i = 0; i < tl; ++i) {
        result[i] = clone(target[i]);
      }
      for (i = 0; i < sl; ++i) {
        result[i + tl] = clone(source[i]);
      }
      return result;
    }
    const propertyIsEnumerable = Object.prototype.propertyIsEnumerable;
    function getSymbolsAndKeys(value) {
      const result = Object.keys(value);
      const keys = Object.getOwnPropertySymbols(value);
      for (let i = 0, il = keys.length; i < il; ++i) {
        propertyIsEnumerable.call(value, keys[i]) && result.push(keys[i]);
      }
      return result;
    }
    const getKeys = options && options.symbols ? getSymbolsAndKeys : Object.keys;
    const cloneProtoObject = typeof options?.cloneProtoObject === "function" ? options.cloneProtoObject : void 0;
    function isMergeableObject(value) {
      return typeof value === "object" && value !== null && !(value instanceof RegExp) && !(value instanceof Date);
    }
    function isPrimitive(value) {
      return typeof value !== "object" || value === null;
    }
    const isPrimitiveOrBuiltIn = typeof Buffer !== "undefined" ? (value) => typeof value !== "object" || value === null || value instanceof RegExp || value instanceof Date || value instanceof Buffer : (value) => typeof value !== "object" || value === null || value instanceof RegExp || value instanceof Date;
    const mergeArray = options && typeof options.mergeArray === "function" ? options.mergeArray({
      clone,
      deepmerge: _deepmerge,
      getKeys,
      isMergeableObject
    }) : concatArrays;
    function clone(entry) {
      return isMergeableObject(entry) ? Array.isArray(entry) ? cloneArray(entry) : cloneObject(entry) : entry;
    }
    function mergeObject(target, source) {
      const result = {};
      const targetKeys = getKeys(target);
      const sourceKeys = getKeys(source);
      let i, il, key;
      for (i = 0, il = targetKeys.length; i < il; ++i) {
        isNotPrototypeKey(key = targetKeys[i]) && sourceKeys.indexOf(key) === -1 && (result[key] = clone(target[key]));
      }
      for (i = 0, il = sourceKeys.length; i < il; ++i) {
        isNotPrototypeKey(key = sourceKeys[i]) && (key in target && (targetKeys.indexOf(key) !== -1 && (result[key] = _deepmerge(target[key], source[key])), true) || // eslint-disable-line no-mixed-operators
        (result[key] = clone(source[key])));
      }
      return result;
    }
    function _deepmerge(target, source) {
      const sourceIsArray = Array.isArray(source);
      const targetIsArray = Array.isArray(target);
      if (isPrimitive(source)) {
        return source;
      } else if (isPrimitiveOrBuiltIn(target)) {
        return clone(source);
      } else if (sourceIsArray && targetIsArray) {
        return mergeArray(target, source);
      } else if (sourceIsArray !== targetIsArray) {
        return clone(source);
      } else {
        return mergeObject(target, source);
      }
    }
    function _deepmergeAll() {
      switch (arguments.length) {
        case 0:
          return {};
        case 1:
          return clone(arguments[0]);
        case 2:
          return _deepmerge(arguments[0], arguments[1]);
      }
      let result;
      for (let i = 0, il = arguments.length; i < il; ++i) {
        result = _deepmerge(result, arguments[i]);
      }
      return result;
    }
    return options && options.all ? _deepmergeAll : _deepmerge;
  }
  var deepmerge = fastifyDeepMerge({ symbols: false });
  var deepmergeAll = fastifyDeepMerge({ all: true, symbols: false });

  // src/scripts/utils/semver.ts
  function toSemVer(version = "0.0.0") {
    const result = {
      major: 0,
      minor: 0,
      patch: 0
    };
    if (typeof version === "string") {
      const arr = version.split(".");
      const major = parseInt(arr[0] ?? "0");
      const minor = parseInt(arr[1] ?? "0");
      const patch = parseInt(arr[2] ?? "0");
      if (!isNaN(major) && !isNaN(minor) && !isNaN(patch)) {
        result.major = major;
        result.minor = minor;
        result.patch = patch;
      }
    }
    return result;
  }

  // src/scripts/compatibility/apply.ts
  function filterData(from, current, target) {
    let newcurrent = current;
    let newtarget = target ?? {};
    if (from === "update") {
      const user = toSemVer(newcurrent.about.version);
      newcurrent = filterByVersion(newcurrent, user);
    }
    if (from === "import") {
      newtarget = filterByVersion(newtarget, toSemVer(void 0));
      const currentKeyAmount = Object.keys(newcurrent).length;
      const targetKeyAmount = Object.keys(newtarget).length;
      const needMerging = targetKeyAmount !== currentKeyAmount;
      if (needMerging) {
        newcurrent = deepmergeAll(newcurrent, newtarget);
        newcurrent = removeLinkgroupDuplicates(newcurrent);
        newcurrent = removeWorldClocksDuplicate(newcurrent, newtarget);
        newcurrent = toggleMoveWidgets(newcurrent, newtarget);
      } else {
        newcurrent = newtarget;
      }
    }
    newcurrent.about = {
      browser: PLATFORM,
      version: CURRENT_VERSION
    };
    delete newcurrent.syncbookmarks;
    delete newcurrent.settingssync;
    delete newcurrent.custom_every;
    delete newcurrent.custom_time;
    delete newcurrent.searchbar_newtab;
    delete newcurrent.searchbar_newtab;
    delete newcurrent.searchbar_engine;
    delete newcurrent.cssHeight;
    delete newcurrent.linktabs;
    delete newcurrent.links;
    delete newcurrent.dynamic;
    delete newcurrent.unsplash;
    delete newcurrent.background_blur;
    delete newcurrent.background_bright;
    delete newcurrent.background_type;
    delete newcurrent.usdate;
    delete newcurrent?.weather?.location;
    delete newcurrent?.weather?.lastState;
    delete newcurrent?.weather?.lastCall;
    return newcurrent;
  }

  // src/scripts/utils/stringify.ts
  function stringify2(data) {
    const defaultSyncData = structuredClone(SYNC_DEFAULT);
    for (const link of bundleLinks(data)) {
      defaultSyncData[link._id] = link;
    }
    for (const [key, value] of Object.entries(data)) {
      const defaultValue = defaultSyncData[key];
      if (isObject(value) && isObject(defaultValue)) {
        defaultSyncData[key] = {
          ...defaultValue,
          ...value
        };
      } else {
        defaultSyncData[key] = value;
      }
    }
    const keys = flattenKeys(defaultSyncData);
    const compare = (a = "", b = "") => keys.indexOf(a) - keys.indexOf(b);
    const string2 = JSON.stringify(data, keys.sort(compare), 2);
    return string2;
  }
  function flattenKeys(obj) {
    const result = [];
    for (const [key, value] of Object.entries(obj)) {
      result.push(key);
      if (isObject(value)) {
        result.push(...flattenKeys(value));
      }
    }
    return result;
  }
  function isObject(value) {
    return !Array.isArray(value) && value !== null && typeof value === "object";
  }

  // src/scripts/settings.ts
  var settingsInitSync;
  var settingsInitLocal;
  function settingsInit(sync, local) {
    const showsettings = document.getElementById("show-settings");
    settingsInitSync = sync;
    settingsInitLocal = local;
    document.addEventListener("updateSettingsBeforeInit", (e) => {
      settingsInitSync = e.detail;
    });
    document.body?.addEventListener("keydown", settingsInitEvent);
    showsettings?.addEventListener("pointerdown", settingsInitEvent);
    const openSettingsButtonsFromContextMenu = document.body.querySelectorAll(
      `[data-action="openTheseSettings"]`
    );
    openSettingsButtonsFromContextMenu.forEach((btn) => {
      btn?.addEventListener("pointerdown", settingsInitEvent);
    });
  }
  function settingsInitEvent(event) {
    const showsettings = document.getElementById("show-settings");
    const settings = document.getElementById("settings");
    const settingsAreHidden = settings?.classList.contains("hidden");
    const isLeftClick = event?.button === 0;
    const isEscape = event?.code === "Escape";
    const canOpenSettings = settingsAreHidden && (isEscape || isLeftClick);
    if (!canOpenSettings) {
      return;
    }
    const local = settingsInitLocal;
    const sync = settingsInitSync;
    settings?.removeAttribute("style");
    settings?.classList.remove("hidden");
    document.dispatchEvent(new Event("settings"));
    document.addEventListener(
      "toggle-settings",
      ((e) => {
        settingsToggle(e);
      })
    );
    if (event.pointerType === "touch") {
      setTimeout(() => {
        if (event.target.getAttribute("data-attribute")) {
          openSettingsButtonEvent(event);
        } else {
          document.dispatchEvent(new CustomEvent("toggle-settings"));
        }
      }, 0);
    }
    document.body?.removeEventListener("keydown", settingsInitEvent);
    showsettings?.removeEventListener("pointerdown", settingsInitEvent);
    showall(sync.showall, false);
    traduction(settings, sync.lang);
    translatePlaceholders();
    initBackgroundOptions(sync, local);
    initSupportersSettingsNotif(sync);
    initOptionsValues(sync, local);
    initOptionsEvents();
    settingsFooter();
    setTimeout(() => {
      initWorldClocksAndTimezone(sync);
      updateSettingsJson(sync);
      updateSettingsEvent();
      translateAriaLabels();
      settingsDrawerBar();
      loadCallbacks();
      settings?.classList.remove("init");
    }, 500);
  }
  function settingsToggle(event) {
    const domshowsettings = document.getElementById("show-settings");
    const dominterface3 = document.getElementById("interface");
    const domsettings = document.getElementById("settings");
    const domedit = document.getElementById("editlink");
    const isClosed = domsettings?.classList.contains("shown") === false;
    const scrollTo = event?.detail?.scrollTo ?? false;
    const target = domsettings?.querySelector(scrollTo);
    if (target && domsettings) {
      requestAnimationFrame(() => {
        setTimeout(() => {
          target.scrollIntoView({ behavior: "smooth", block: "start" });
        }, 0);
      });
    }
    if (!isClosed && scrollTo) return;
    domsettings?.classList.toggle("shown", isClosed);
    domedit?.classList.toggle("pushed", isClosed);
    dominterface3?.classList.toggle("pushed", isClosed);
    domshowsettings?.classList.toggle("shown", isClosed);
    domsettings?.style.removeProperty("transform");
    domsettings?.style.removeProperty("transition");
    document.dispatchEvent(new Event("close-edit"));
  }
  function initOptionsValues(data, local) {
    const domsettings = document.getElementById("settings");
    const userQuotes = data.quotes?.userlist?.[0] ? data.quotes?.userlist : void 0;
    setInput("i_blur", data.backgrounds.blur ?? 15);
    setInput("i_bright", data.backgrounds.bright ?? 0.8);
    setInput("i_fadein", data.backgrounds.fadein ?? 400);
    setInput("i_row", data.linksrow || 8);
    setInput("i_icon_radius", data.linkiconradius || 1.1);
    setInput("i_linkstyle", data.linkstyle || "default");
    setInput("i_type", data.backgrounds.type || "images");
    setInput("i_freq", data.backgrounds?.frequency || "hour");
    setInput("i_dark", data.dark || "system");
    setInput("i_favicon", data.favicon ?? "");
    setInput("i_tabtitle", data.tabtitle ?? "");
    setInput("i_solid-background", data.backgrounds.color ?? "#185A63");
    setInput("i_texture", data.backgrounds.texture.type ?? "none");
    setInput("i_texture-size", data.backgrounds.texture.size ?? "220");
    setInput("i_texture-opacity", data.backgrounds.texture.opacity ?? "0.1");
    setInput("i_texture-color", data.backgrounds.texture.color ?? "#ffffff");
    setInput("i_pagewidth", data.pagewidth || 1600);
    setInput("i_pagegap", data.pagegap ?? 1);
    setInput("i_dateformat", data.dateformat || "eu");
    setInput("i_greeting", data.greeting ?? "");
    setInput("i_greetmorning", data.greetingscustom?.morning ?? "");
    setInput("i_greetafternoon", data.greetingscustom?.afternoon ?? "");
    setInput("i_greetevening", data.greetingscustom?.evening ?? "");
    setInput("i_greetnight", data.greetingscustom?.night ?? "");
    setInput("i_textshadow", data.textShadow ?? 0.2);
    setInput("i_noteswidth", data.notes?.width || 50);
    setInput("i_notes-opacity", opacityFromHex(data.notes?.background ?? "#fff2"));
    setInput("i_notesalign", data.notes?.align || "left");
    setInput("i_sbengine", data.searchbar?.engine || "google");
    setInput("i_sbplaceholder", data.searchbar?.placeholder || "");
    setInput("i_sb-opacity", opacityFromHex(data.searchbar?.background ?? "#fff2"));
    setInput("i_sbwidth", data.searchbar?.width ?? 30);
    setInput("i_sbrequest", data.searchbar?.request || "");
    setInput("i_qtfreq", data.quotes?.frequency || "day");
    setInput("i_qttype", data.quotes?.type || "classic");
    setInput("i_qtlist", userQuotes ?? "");
    setInput("i_qturl", data.quotes?.url ?? "");
    setInput("i_clockface", data.analogstyle?.face || "none");
    setInput("i_clockhands", data.analogstyle?.hands || "none");
    setInput("i_clockshape", data.analogstyle?.shape || "round");
    setInput("i_analog-border-opacity", opacityFromHex(data.analogstyle?.border ?? "#ffff"));
    setInput("i_analog-background-opacity", opacityFromHex(data.analogstyle?.background ?? "#fff2"));
    setInput("i_ampm_position", data.clock.ampmposition || "top-left");
    setInput("i_clocksize", data.clock?.size ?? 5);
    setInput("i_greetsize", data.greetingsize ?? 3);
    setInput("i_greetmode", data.greetingsmode ?? "auto");
    setInput("i_timezone", data.clock?.timezone || "auto");
    setInput("i_geol", data.weather?.geolocation || "approximate");
    setInput("i_units", data.weather?.unit ?? "metric");
    setInput("i_forecast", data.weather?.forecast || "auto");
    setInput("i_temp", data.weather?.temperature || "actual");
    setInput("i_moreinfo", data.weather?.moreinfo || "none");
    setInput("i_provider", data.weather?.provider ?? "");
    setInput("i_weight", data.font?.weight || "300");
    setInput("i_font-color", data.font.color ?? "#ffffff");
    setInput("i_size", data.font?.size || (IS_MOBILE ? "11" : "14"));
    setInput("i_announce", data.announcements ?? "major");
    setInput("i_synctype", local.syncType ?? (PLATFORM === "online" ? "off" : "browser"));
    setInput("i_pmdr_volume", data.pomodoro?.volume ?? 0.7);
    setInput("i_pmdr_alarms", data.pomodoro?.alarm ?? "marimba");
    setInput("i_pmdr_break", data.pomodoro?.timeFor.break / 60);
    setInput("i_pmdr_break", data.pomodoro?.timeFor.break / 60);
    setInput("i_pmdr_pomodoro", data.pomodoro?.timeFor.pomodoro / 60);
    setInput("i_pmdr_longbreak", data.pomodoro?.timeFor.longbreak / 60);
    setFormInput("i_city", local.lastWeather?.approximation?.city ?? "Paris", data.weather.city);
    setFormInput("i_customfont", systemfont.placeholder, data.font?.family);
    setFormInput("i_gistsync", "github_pat_XX000X00X", local?.gistToken);
    setFormInput("i_urlsync", "https://pastebin.com/raw/y7XhhiDs", local?.distantUrl);
    setCheckbox("i_showall", data.showall);
    setCheckbox("i_settingshide", data.hide?.settingsicon ?? false);
    setCheckbox("i_background-mute-videos", data.backgrounds.mute ?? true);
    setCheckbox("i_quicklinks", data.quicklinks);
    setCheckbox("i_linkgroups", data?.linkgroups?.on);
    setCheckbox("i_linknewtab", data.linknewtab);
    setCheckbox("i_time", data.time);
    setCheckbox("i_analog", data.clock?.analog ?? false);
    setCheckbox("i_seconds", data.clock?.seconds ?? false);
    setCheckbox("i_worldclocks", data.clock?.worldclocks ?? false);
    setCheckbox("i_main", data.main);
    setCheckbox("i_show_unit", data.weather.show_unit);
    setCheckbox("i_greethide", !data.hide?.greetings);
    setCheckbox("i_notes", data.notes?.on ?? false);
    setCheckbox("i_sb", data.searchbar?.on ?? false);
    setCheckbox("i_quotes", data.quotes?.on ?? false);
    setCheckbox("i_pomodoro", data.pomodoro?.on ?? false);
    setCheckbox("i_pmdr_sound", data.pomodoro?.sound ?? true);
    setCheckbox("i_ampm", data.clock?.ampm ?? false);
    setCheckbox("i_ampm-label", data.clock?.ampmlabel ?? false);
    setCheckbox("i_sbsuggestions", data.searchbar?.suggestions ?? true);
    setCheckbox("i_sbnewtab", data.searchbar?.newtab ?? false);
    setCheckbox("i_qtauthor", data.quotes?.author ?? false);
    setCheckbox("i_supporters_notif", data.supporters?.enabled ?? true);
    colorInput("solid-background", data.backgrounds.color);
    colorInput("texture-color", data.backgrounds.texture.color ?? "#ffffff");
    colorInput("font-color", data.font.color);
    paramId("i_notes-shade")?.classList.toggle("on", (data.notes?.background ?? "#fff").includes("#000"));
    paramId("i_sb-shade")?.classList.toggle("on", (data.searchbar?.background ?? "#fff").includes("#000"));
    paramId("i_analog-border-shade")?.classList.toggle("on", (data.analogstyle?.border ?? "#fff").includes("#000"));
    paramId("i_analog-background-shade")?.classList.toggle(
      "on",
      (data.analogstyle?.background ?? "#fff").includes("#000")
    );
    if (IS_MOBILE) {
      const tooltiptext = domsettings.querySelector(".tooltiptext .instructions");
      const text = tradThis("Edit your Quick Links by long-pressing the icon.");
      if (tooltiptext) {
        tooltiptext.textContent = text;
      }
    }
    const langInput = paramId("i_lang");
    for (const [code, title] of Object.entries(langList)) {
      const option = document.createElement("option");
      option.value = code;
      option.text = title;
      langInput.appendChild(option);
    }
    setInput("i_lang", data.lang || "en");
    toggleSettingsDropdown("analog_options", data.clock.analog && data.showall);
    toggleSettingsDropdown("greetings_options", !data.hide?.greetings);
    toggleSettingsDropdown("greetingscustom_options", data.greetingsmode === "custom");
    toggleSettingsDropdown("digital_options", !data.clock.analog);
    toggleSettingsDropdown("ampm_label", data.clock.ampm);
    toggleSettingsDropdown("ampm_position", data.clock.ampmlabel && data.clock.ampm);
    toggleSettingsDropdown("worldclocks_options", data.clock.worldclocks);
    toggleSettingsDropdown("weather_provider", data.weather?.moreinfo === "custom");
    toggleSettingsDropdown("searchbar_request", data.searchbar?.engine === "custom");
    toggleSettingsDropdown("quicklinks_options", data.quicklinks);
    toggleSettingsDropdown("time_options", data.time);
    toggleSettingsDropdown("main_options", data.main);
    toggleSettingsDropdown("pomodoro_options", data.pomodoro.on);
    toggleSettingsDropdown("notes_options", data.notes?.on ?? false);
    toggleSettingsDropdown("searchbar_options", data.searchbar?.on);
    toggleSettingsDropdown("quotes_options", data.quotes?.on);
    const gridLayoutButtons = domsettings.querySelectorAll("#grid-layout button");
    const selectedLayout = data.move?.selection || "single";
    for (const button of gridLayoutButtons) {
      button?.classList.toggle("selected", button.dataset.layout === selectedLayout);
    }
    paramId("b_showtitles").classList.toggle("on", data?.linktitles ?? true);
    paramId("b_showbackgrounds").classList.toggle("on", data?.linkbackgrounds ?? true);
    const disableWeather = data.hide?.weatherdesc && data.hide?.weathericon;
    const descOnly = data.hide?.weatherdesc;
    const iconOnly = data.hide?.weathericon;
    const dateOnly = data.hide?.clock;
    const clockOnly = data.hide?.date;
    let hideTime = "all";
    let hideWeather = "all";
    if (dateOnly) {
      hideTime = "date";
    } else if (clockOnly) {
      hideTime = "clock";
    }
    if (disableWeather) {
      hideWeather = "disabled";
    } else if (descOnly) {
      hideWeather = "desc";
    } else if (iconOnly) {
      hideWeather = "icon";
    }
    setInput("i_timehide", hideTime);
    setInput("i_weatherhide", hideWeather);
    paramId("quotes_userlist")?.classList.toggle("shown", data.quotes?.type === "user");
    paramId("quotes_url")?.classList.toggle("shown", data.quotes?.type === "url");
    const settingsForms = document.querySelectorAll("#settings form");
    for (const form of settingsForms) {
      const inputs = form.querySelectorAll("input");
      for (const input of inputs) {
        input.addEventListener("input", () => {
          form.classList.toggle("valid", form.checkValidity());
        });
      }
    }
    const browserSyncOption = document.querySelector("#i_synctype option[value='browser']");
    if (browserSyncOption) {
      if (PLATFORM === "firefox") {
        browserSyncOption.textContent = "Firefox Sync";
      } else if (PLATFORM === "chrome" && BROWSER === "edge") {
        browserSyncOption.textContent = "Edge Sync";
      } else if (PLATFORM === "chrome") {
        browserSyncOption.textContent = "Chrome Sync";
      } else if (PLATFORM === "safari") {
        browserSyncOption.textContent = "Safari";
      } else {
        browserSyncOption.textContent = tradThis("Automatic");
      }
    }
    for (const input of document.querySelectorAll('input[type="range"]')) {
      webkitRangeTrackColor(input);
      input.addEventListener("input", () => {
        input.style.setProperty("--value", input.value);
      });
    }
  }
  function initOptionsEvents() {
    (0, import_mod6.onclickdown)(paramId("b_accept-permissions"), async () => {
      await getPermissions("topSites", "bookmarks");
      const sync = await storage.sync.get();
      const local = await storage.local.get();
      quickLinks({ sync, local });
      setTimeout(() => initGroups(sync), 10);
      settingsNotifications({ "accept-permissions": false });
    });
    (0, import_mod6.onclickdown)(paramId("i_showall"), (_, target) => {
      showall(target.checked, true);
    });
    paramId("i_lang").addEventListener("change", function() {
      switchLangs(this.value);
    });
    paramId("i_favicon").addEventListener("input", function() {
      favicon(this.value, true);
    });
    paramId("i_favicon").addEventListener("change", function() {
      this.blur();
    });
    paramId("i_tabtitle").addEventListener("input", function() {
      tabTitle(this.value, true);
    });
    paramId("i_tabtitle").addEventListener("change", function() {
      this.blur();
    });
    paramId("i_dark").addEventListener("change", function() {
      darkmode(this.value, true);
    });
    (0, import_mod6.onclickdown)(paramId("i_settingshide"), (_, target) => {
      hideElements({ settingsicon: target.checked }, { isEvent: true });
    });
    (0, import_mod6.onclickdown)(paramId("i_quicklinks"), (_, target) => {
      moveElements(void 0, { widget: ["quicklinks", target.checked] });
    });
    paramId("f_addlink").addEventListener("submit", function(event) {
      event.preventDefault();
      quickLinks(void 0, {
        addLinks: [
          {
            title: paramId("i_addlink-title").value,
            url: paramId("i_addlink-url").value
          }
        ]
      });
      paramId("i_addlink-url").value = "";
      paramId("i_addlink-title").value = "";
      this.classList.remove("valid");
    });
    (0, import_mod6.onclickdown)(paramId("i_linkgroups"), (_, target) => {
      quickLinks(void 0, { groups: target.checked });
    });
    (0, import_mod6.onclickdown)(paramId("i_linknewtab"), (_, target) => {
      quickLinks(void 0, { newtab: target.checked });
    });
    paramId("i_linkstyle").addEventListener("change", function() {
      quickLinks(void 0, { styles: { style: this.value } });
    });
    (0, import_mod6.onclickdown)(paramId("b_showtitles"), (_, target) => {
      quickLinks(void 0, {
        styles: { titles: !target.classList.contains("on") }
      });
    });
    (0, import_mod6.onclickdown)(paramId("b_showbackgrounds"), (_, target) => {
      quickLinks(void 0, {
        styles: { backgrounds: !target.classList.contains("on") }
      });
    });
    paramId("i_row").addEventListener("input", function() {
      quickLinks(void 0, { row: this.value });
    });
    paramId("i_icon_radius").addEventListener("input", function() {
      quickLinks(void 0, { iconradius: this.value });
    });
    (0, import_mod6.onclickdown)(paramId("b_importbookmarks"), async () => {
      await getPermissions("topSites", "bookmarks");
      linksImport();
    });
    paramId("i_type").addEventListener("change", function() {
      backgroundUpdate({ type: this.value });
    });
    paramId("b_solid-background").addEventListener("click", function() {
      paramId("i_solid-background").click();
    });
    paramId("i_solid-background").addEventListener("input", function() {
      backgroundUpdate({ color: this.value });
    });
    paramId("i_background-provider").addEventListener("input", function() {
      backgroundUpdate({ provider: this.value });
    });
    paramId("f_background-user-coll").addEventListener("submit", function(event) {
      backgroundUpdate({ query: event });
      event.preventDefault();
    });
    paramId("f_background-user-search").addEventListener("submit", function(event) {
      backgroundUpdate({ query: event });
      event.preventDefault();
    });
    paramId("i_freq").addEventListener("change", function() {
      backgroundUpdate({ freq: this.value });
    });
    (0, import_mod6.onclickdown)(paramId("i_refresh"), (event) => {
      backgroundUpdate({ refresh: event });
    });
    paramId("i_background-upload").addEventListener("change", function() {
      backgroundUpdate({ files: this.files });
    });
    (0, import_mod6.onclickdown)(paramId("b_background-urls"), () => {
      backgroundUpdate({ urlsapply: true });
    });
    (0, import_mod6.onclickdown)(paramId("i_background-mute-videos"), (_, target) => {
      toggleMuteStatus(target.checked);
      backgroundUpdate({ mute: target.checked });
    });
    paramId("i_texture").addEventListener("change", function() {
      backgroundUpdate({ texture: this.value });
    });
    paramId("b_texture-color").addEventListener("click", function() {
      paramId("i_texture-color").click();
    });
    paramId("i_texture-color").addEventListener("input", function() {
      backgroundUpdate({ texturecolor: this.value });
    });
    paramId("i_texture-size").addEventListener("input", function() {
      backgroundUpdate({ texturesize: this.value });
    });
    paramId("i_texture-opacity").addEventListener("input", function() {
      backgroundUpdate({ textureopacity: this.value });
    });
    paramId("i_blur").addEventListener("pointerdown", function() {
      backgroundUpdate({ blurenter: true });
    });
    paramId("i_blur").addEventListener("input", function() {
      backgroundUpdate({ blur: this.value });
    });
    paramId("i_bright").addEventListener("input", function() {
      backgroundUpdate({ bright: this.value });
    });
    paramId("i_fadein").addEventListener("input", function() {
      backgroundUpdate({ fadein: this.value });
    });
    (0, import_mod6.onclickdown)(paramId("i_time"), (_, target) => {
      moveElements(void 0, { widget: ["time", target.checked] });
    });
    (0, import_mod6.onclickdown)(paramId("i_analog"), (_, target) => {
      clock(void 0, { analog: target.checked });
    });
    (0, import_mod6.onclickdown)(paramId("i_seconds"), (_, target) => {
      clock(void 0, { seconds: target.checked });
    });
    (0, import_mod6.onclickdown)(paramId("i_worldclocks"), (_, target) => {
      toggleSettingsDropdown("worldclocks_options", target.checked);
      clock(void 0, { worldclocks: target.checked });
    });
    paramId("i_clockface").addEventListener("change", function() {
      clock(void 0, { face: this.value });
    });
    paramId("i_clockhands").addEventListener("change", function() {
      clock(void 0, { hands: this.value });
    });
    paramId("i_analog-border-opacity").addEventListener("input", function() {
      clock(void 0, { border: "opacity" });
    });
    paramId("i_analog-background-opacity").addEventListener("input", function() {
      clock(void 0, { background: "opacity" });
    });
    paramId("i_analog-border-shade").addEventListener("click", () => {
      clock(void 0, { border: "shade" });
    });
    paramId("i_analog-background-shade").addEventListener("click", () => {
      clock(void 0, { background: "shade" });
    });
    paramId("i_clockshape").addEventListener("change", function() {
      clock(void 0, { shape: this.value });
    });
    paramId("i_clocksize").addEventListener("input", function() {
      clock(void 0, { size: Number.parseFloat(this.value) });
    });
    (0, import_mod6.onclickdown)(paramId("i_ampm"), (_, target) => {
      clock(void 0, { ampm: target.checked });
      toggleSettingsDropdown("ampm_label", target.checked);
      const ampm_toggle = document.querySelector("#i_ampm-label");
      toggleSettingsDropdown("ampm_position", target.checked && ampm_toggle.checked);
    });
    (0, import_mod6.onclickdown)(paramId("i_ampm-label"), (_, target) => {
      clock(void 0, { ampmlabel: target.checked });
      toggleSettingsDropdown("ampm_position", target.checked);
    });
    paramId("i_ampm_position").addEventListener("change", function() {
      clock(void 0, { ampmposition: this.value });
    });
    paramId("i_timezone").addEventListener("change", function() {
      clock(void 0, { timezone: this.value });
    });
    paramId("i_dateformat").addEventListener("change", function() {
      clock(void 0, { dateformat: this.value });
    });
    paramId("i_timehide").addEventListener("change", function() {
      hideElements({ clock: this.value === "clock", date: this.value === "date" }, { isEvent: true });
    });
    (0, import_mod6.onclickdown)(paramId("i_main"), (_, target) => {
      moveElements(void 0, { widget: ["main", target.checked] });
    });
    paramId("i_geol").addEventListener("change", function() {
      weather(void 0, { geol: this?.value });
    });
    paramId("i_city").addEventListener("input", function(event) {
      weather(void 0, { suggestions: event });
    });
    paramId("f_location").addEventListener("submit", function(event) {
      weather(void 0, { city: true });
      event.preventDefault();
    });
    paramId("i_units").addEventListener("change", function() {
      weather(void 0, { units: this.value });
    });
    paramId("i_forecast").addEventListener("change", function() {
      weather(void 0, { forecast: this.value });
    });
    paramId("i_temp").addEventListener("change", function() {
      weather(void 0, { temp: this.value });
    });
    paramId("i_moreinfo").addEventListener("change", function() {
      weather(void 0, { moreinfo: this.value });
    });
    paramId("i_provider").addEventListener("change", function() {
      weather(void 0, { provider: this.value });
      this.blur();
    });
    paramId("i_weatherhide").addEventListener("change", function() {
      const weatherdesc = this.value === "disabled" || this.value === "desc";
      const weathericon = this.value === "disabled" || this.value === "icon";
      hideElements({ weatherdesc, weathericon }, { isEvent: true });
      weather(void 0, { unhide: true });
    });
    (0, import_mod6.onclickdown)(paramId("i_show_unit"), (_, target) => {
      weather(void 0, { show_unit: target.checked });
    });
    (0, import_mod6.onclickdown)(paramId("i_greethide"), (_, target) => {
      toggleSettingsDropdown("greetings_options", target.checked);
      hideElements({ greetings: !target.checked }, { isEvent: true });
    });
    paramId("i_greeting").addEventListener("input", function() {
      clock(void 0, { greeting: this.value });
    });
    paramId("i_greeting").addEventListener("change", () => {
      paramId("i_greeting").blur();
    });
    paramId("i_greetsize").addEventListener("input", function() {
      clock(void 0, { greetingsize: this.value });
    });
    paramId("i_greetmode").addEventListener("change", function() {
      clock(void 0, { greetingsmode: this.value });
    });
    paramId(`i_greetmorning`).addEventListener("input", function() {
      clock(void 0, { greetingscustom: { morning: this.value } });
    });
    paramId(`i_greetafternoon`).addEventListener("input", function() {
      clock(void 0, { greetingscustom: { afternoon: this.value } });
    });
    paramId(`i_greetevening`).addEventListener("input", function() {
      clock(void 0, { greetingscustom: { evening: this.value } });
    });
    paramId(`i_greetnight`).addEventListener("input", function() {
      clock(void 0, { greetingscustom: { night: this.value } });
    });
    paramId(`i_greetmorning`).addEventListener("change", () => {
      paramId(`i_greetmorning`).blur();
    });
    paramId(`i_greetafternoon`).addEventListener("change", () => {
      paramId(`i_greetafternoon`).blur();
    });
    paramId(`i_greetevening`).addEventListener("change", () => {
      paramId(`i_greetevening`).blur();
    });
    paramId(`i_greetnight`).addEventListener("change", () => {
      paramId(`i_greetnight`).blur();
    });
    (0, import_mod6.onclickdown)(paramId("i_notes"), (_, target) => {
      moveElements(void 0, { widget: ["notes", target.checked] });
    });
    paramId("i_notesalign").addEventListener("change", function() {
      notes(void 0, { align: this.value });
    });
    paramId("i_noteswidth").addEventListener("input", function() {
      notes(void 0, { width: this.value });
    });
    paramId("i_notes-opacity").addEventListener("input", function() {
      notes(void 0, { background: true });
    });
    (0, import_mod6.onclickdown)(paramId("i_notes-shade"), () => {
      notes(void 0, { background: true });
    });
    (0, import_mod6.onclickdown)(paramId("i_sb"), (_, target) => {
      moveElements(void 0, { widget: ["searchbar", target.checked] });
      getPermissions("search");
    });
    paramId("i_sbengine").addEventListener("change", function() {
      searchbar(void 0, { engine: this.value });
    });
    paramId("i_sb-opacity").addEventListener("input", function() {
      searchbar(void 0, { background: true });
    });
    paramId("i_sb-shade").addEventListener("click", () => {
      searchbar(void 0, { background: true });
    });
    paramId("i_sbwidth").addEventListener("input", function() {
      searchbar(void 0, { width: this.value });
    });
    paramId("f_sbrequest").addEventListener("submit", function(event) {
      searchbar(void 0, { request: true });
      event.preventDefault();
    });
    (0, import_mod6.onclickdown)(paramId("i_sbnewtab"), (_, target) => {
      searchbar(void 0, { newtab: target.checked });
    });
    (0, import_mod6.onclickdown)(paramId("i_sbsuggestions"), (_, target) => {
      searchbar(void 0, { suggestions: target.checked });
    });
    paramId("i_sbplaceholder").addEventListener("keyup", function() {
      searchbar(void 0, { placeholder: this.value });
    });
    paramId("i_sbplaceholder").addEventListener("change", () => {
      paramId("i_sbplaceholder").blur();
    });
    (0, import_mod6.onclickdown)(paramId("i_quotes"), (_, target) => {
      moveElements(void 0, { widget: ["quotes", target.checked] });
    });
    paramId("i_qtfreq").addEventListener("change", function() {
      quotes(void 0, { frequency: this.value });
    });
    paramId("i_qttype").addEventListener("change", function() {
      quotes(void 0, { type: this.value });
    });
    (0, import_mod6.onclickdown)(paramId("i_qtrefresh"), (event, target) => {
      inputThrottle(target);
      turnRefreshButton(event, true);
      quotes(void 0, { refresh: true });
    });
    (0, import_mod6.onclickdown)(paramId("i_qtauthor"), (_, target) => {
      quotes(void 0, { author: target.checked });
    });
    paramId("i_qtlist").addEventListener("change", function() {
      quotes(void 0, { userlist: this.value });
    });
    paramId("f_qturl").addEventListener("submit", function(event) {
      event.preventDefault();
      quotes(void 0, { url: paramId("i_qturl").value });
    });
    (0, import_mod6.onclickdown)(paramId("i_pomodoro"), (_, target) => {
      moveElements(void 0, { widget: ["pomodoro", target.checked] });
      const glider = document.querySelector("#pomodoro_container .glider");
      if (glider.style.width === "0px") {
        setTimeout(() => {
          setModeGlider();
        }, 333);
      }
    });
    (0, import_mod6.onclickdown)(paramId("i_pmdr_sound"), (_, target) => {
      pomodoro(void 0, { sound: target.checked });
    });
    (0, import_mod6.onclickdown)(paramId("i_pmdr_listen"), () => {
      pomodoro(void 0, { listen: true });
    });
    paramId("i_pmdr_alarms").addEventListener("change", function() {
      pomodoro(void 0, { alarm: this.value });
    });
    paramId("i_pmdr_volume").addEventListener("input", function() {
      pomodoro(void 0, { volume: Number(this.value) });
    });
    paramId("i_pmdr_pomodoro").addEventListener("input", function() {
      pomodoro(void 0, { timeFor: { pomodoro: Number(this.value) } });
    });
    paramId("i_pmdr_break").addEventListener("input", function() {
      pomodoro(void 0, { timeFor: { break: Number(this.value) } });
    });
    paramId("i_pmdr_longbreak").addEventListener("input", function() {
      pomodoro(void 0, { timeFor: { longbreak: Number(this.value) } });
    });
    paramId("i_customfont").addEventListener("pointerenter", () => {
      customFont(void 0, { autocomplete: true });
    });
    paramId("f_customfont").addEventListener("submit", (event) => {
      customFont(void 0, { family: paramId("i_customfont").value });
      event.preventDefault();
    });
    paramId("i_weight").addEventListener("input", function() {
      customFont(void 0, { weight: this.value });
    });
    paramId("b_font-color").addEventListener("click", function() {
      paramId("i_font-color").click();
    });
    paramId("i_font-color").addEventListener("input", function() {
      customFont(void 0, { color: this.value });
    });
    paramId("i_size").addEventListener("input", function() {
      customFont(void 0, { size: this.value });
    });
    paramId("i_textshadow").addEventListener("input", function() {
      textShadow(void 0, Number.parseFloat(this.value));
    });
    (0, import_mod6.onclickdown)(paramId("b_editmove"), () => {
      togglePomodoroFocus(false);
      moveElements(void 0, {
        toggle: !document.getElementById("interface")?.classList.contains("move-edit")
      });
    });
    paramId("i_pagecolumns").addEventListener("change", function() {
      moveElements(void 0, { layout: this.value, toggle: true });
    });
    paramId("i_pagewidth").addEventListener("input", function() {
      pageControl({ width: Number.parseInt(this.value) }, true);
    });
    paramId("i_pagegap").addEventListener("input", function() {
      pageControl({ gap: Number.parseFloat(this.value) }, true);
    });
    paramId("i_pagewidth").addEventListener("touchstart", () => moveElements(void 0, { overlay: true }), {
      passive: true
    });
    paramId("i_pagewidth").addEventListener("mousedown", () => moveElements(void 0, { overlay: true }));
    paramId("i_pagewidth").addEventListener("touchend", () => moveElements(void 0, { overlay: false }));
    paramId("i_pagewidth").addEventListener("mouseup", () => moveElements(void 0, { overlay: false }));
    paramId("i_announce").addEventListener("change", function() {
      interfacePopup(void 0, { announcements: this.checked });
    });
    (0, import_mod6.onclickdown)(paramId("i_supporters_notif"), (_, target) => {
      supportersNotifications(void 0, { enabled: target.checked });
    });
    paramId("i_synctype").addEventListener("change", function() {
      synchronization(void 0, { type: this.value });
    });
    paramId("f_gistsync").addEventListener("submit", function(event) {
      event.preventDefault();
      synchronization(void 0, { gistToken: paramId("i_gistsync").value });
    });
    paramId("f_urlsync").addEventListener("submit", function(event) {
      event.preventDefault();
      synchronization(void 0, { url: paramId("i_urlsync").value });
    });
    (0, import_mod6.onclickdown)(paramId("b_storage-persist"), async () => {
      const persists = await navigator.storage.persist();
      synchronization(void 0, { firefoxPersist: persists });
    });
    (0, import_mod6.onclickdown)(paramId("b_gistup"), () => {
      synchronization(void 0, { up: true });
    });
    (0, import_mod6.onclickdown)(paramId("b_gistdown"), () => {
      synchronization(void 0, { down: true });
    });
    (0, import_mod6.onclickdown)(paramId("b_urldown"), () => {
      synchronization(void 0, { down: true });
    });
    paramId("settings-management").addEventListener("dragenter", () => {
      paramId("settings-management").classList.add("dragging-file");
    });
    paramId("file-import").addEventListener("dragleave", () => {
      paramId("settings-management").classList.remove("dragging-file");
    });
    paramId("b_file-load").addEventListener("click", function() {
      paramId("file-import")?.click();
    });
    paramId("b_file-save").addEventListener("click", () => {
      saveImportFile();
    });
    paramId("file-import").addEventListener("change", function() {
      loadImportFile(this);
    });
    paramId("b_settings-copy").addEventListener("click", () => {
      copySettings();
    });
    paramId("settings-data").addEventListener("input", (event) => {
      toggleSettingsChangesButtons(event.type);
    });
    paramId("settings-data").addEventListener("focus", (event) => {
      toggleSettingsChangesButtons(event.type);
    });
    paramId("settings-data").addEventListener("blur", (event) => {
      toggleSettingsChangesButtons(event.type);
    });
    (0, import_mod6.onclickdown)(paramId("b_settings-cancel"), () => {
      toggleSettingsChangesButtons("cancel");
    });
    (0, import_mod6.onclickdown)(paramId("b_settings-apply"), () => {
      const val = paramId("settings-data").value;
      importSettings(parse(val) ?? {});
    });
    (0, import_mod6.onclickdown)(paramId("b_reset-first"), () => {
      resetSettings("first");
    });
    (0, import_mod6.onclickdown)(paramId("b_reset-apply"), () => {
      resetSettings("yes");
    });
    (0, import_mod6.onclickdown)(paramId("b_reset-cancel"), () => {
      resetSettings("no");
    });
    if (IS_MOBILE) {
      const rangeInputs = document.querySelectorAll("input[type='range'");
      const reduceSettingsOpacity = (event) => {
        document.getElementById("settings")?.classList.toggle("see-through", event.type === "touchstart");
      };
      for (const input of rangeInputs) {
        input.addEventListener("touchstart", reduceSettingsOpacity, { passive: true });
        input.addEventListener("touchend", reduceSettingsOpacity, { passive: true });
      }
    }
    const fileInputs = document.querySelectorAll('input[type="file"]');
    for (const input of fileInputs) {
      const toggleDrag = (_) => {
        input.classList.toggle("dragover");
      };
      input?.addEventListener("dragenter", toggleDrag);
      input?.addEventListener("dragleave", toggleDrag);
      input?.addEventListener("drop", toggleDrag);
    }
    const tooltips = document.querySelectorAll(".tooltip");
    for (const tooltip of tooltips) {
      (0, import_mod6.onclickdown)(tooltip, () => {
        const classes = [...tooltip.classList];
        const ttclass = classes.filter((cl) => cl.startsWith("tt"))[0];
        const tttext = document.querySelector(`.tooltiptext.${ttclass}`);
        tttext?.classList.toggle("shown");
      });
    }
    const splitRangeButtons = document.querySelectorAll(".split-range button");
    for (const button of splitRangeButtons) {
      (0, import_mod6.onclickdown)(button, () => {
        button.classList.toggle("on");
      });
    }
  }
  function initWorldClocksAndTimezone(data) {
    const template = document.getElementById("timezones-select-template");
    const citiesSelector = 'input[name="worldclock-city"]';
    const timezonesSelector = ".worldclocks-item select";
    const cities = document.querySelectorAll(citiesSelector);
    const timezone = document.querySelector("#i_timezone");
    const timezones = document.querySelectorAll(timezonesSelector);
    const zones = ["Europe/Paris", "America/Sao_Paulo", "America/Los_Angeles", "Asia/Tokyo", "Asia/Kolkata"];
    for (const select of timezones) {
      select.appendChild(template.content.cloneNode(true));
    }
    if (timezone) {
      timezone.appendChild(template.content.cloneNode(true));
    }
    cities?.forEach((input, i) => {
      input.addEventListener("input", () => {
        clock(void 0, { world: { index: i, region: input.value } });
      });
      if (data.worldclocks[i]) {
        input.value = data.worldclocks[i].region;
      }
    });
    timezones?.forEach((select, i) => {
      select.addEventListener("change", (event) => {
        const select2 = event.target;
        const timezone2 = select2.value;
        clock(void 0, { world: { index: i, timezone: timezone2 } });
      });
      select.value = data.worldclocks[i]?.timezone ?? zones[i];
    });
    if (timezone) {
      timezone.value = data.clock.timezone;
    }
  }
  function translatePlaceholders() {
    const cases = [
      ["i_title", "Name"],
      ["i_greeting", "Name"],
      ["i_greetmorning", "Hello, $name!"],
      ["i_greetafternoon", "Good afternoon"],
      ["i_greetevening", "Good evening"],
      ["i_greetnight", "Good night"],
      ["i_tabtitle", "New tab"],
      ["i_sbrequest", "Search query: %s"],
      ["i_sbplaceholder", "Search"],
      ["css-editor-textarea", "Type in your custom CSS"],
      ["i_importtext", "or paste as text"],
      ["i_addlink-title", "Title"],
      ["i_addlink-url", "example.com"],
      ["i_qtlist", "Author, Your quote.\nAuthor, Your second quote."]
    ];
    for (const [id, text] of cases) {
      document.getElementById(id)?.setAttribute("placeholder", tradThis(text));
    }
  }
  function translateAriaLabels() {
    for (const element of document.querySelectorAll("[title]")) {
      const title = element.getAttribute("title") ?? "";
      element.setAttribute("title", tradThis(title));
      element.setAttribute("aria-label", tradThis(title));
    }
  }
  async function switchLangs(nextLang) {
    await toggleTraduction(nextLang);
    storage.sync.set({ lang: nextLang });
    storage.local.remove("quotesCache");
    document.documentElement.setAttribute("lang", nextLang);
    const data = await storage.sync.get();
    const local = await storage.local.get(["quotesCache", "userQuoteSelection", "lastWeather"]);
    if (local?.lastWeather) {
      local.lastWeather.timestamp = 0;
      local.lastWeather.forecasted_timestamp = 0;
    }
    data.lang = nextLang;
    clock(data);
    changeGroupTitle({ old: "", new: "" }, data);
    weather({ sync: data, lastWeather: local.lastWeather });
    quotes({ sync: data, local });
    tabTitle(data.tabtitle);
    notes(data.notes);
    customFont(void 0, { lang: true });
    settingsFooter();
    translatePlaceholders();
    translateAriaLabels();
    supportersNotifications(void 0, { translate: true });
    setModeGlider();
  }
  function showall(val, event) {
    document.getElementById("settings")?.classList.toggle("all", val);
    if (event) {
      storage.sync.set({ showall: val });
    }
  }
  function settingsFooter() {
    const one = document.querySelector("#signature-one");
    const two = document.querySelector("#signature-two");
    const version = document.getElementById("version");
    const rand = Math.random() > 0.5;
    if (one && two) {
      one.href = rand ? "https://victr.me/" : "https://tahoe.be/";
      two.href = rand ? "https://tahoe.be/" : "https://victr.me/";
      one.textContent = rand ? "Victor Azevedo" : "Tahoe Beetschen";
      two.textContent = rand ? "Tahoe Beetschen" : "Victor Azevedo";
    }
    if (version) {
      version.textContent = SYNC_DEFAULT.about.version;
    }
  }
  function settingsDrawerBar() {
    const drawerDragDebounce = debounce(() => {
      ;
      document.getElementById("settings-footer").style.removeProperty("padding");
      drawerDragEvents();
    }, 600);
    globalThis.addEventListener("resize", () => {
      drawerDragDebounce();
      if (!document.getElementById("settings")?.style.transition) {
        document.getElementById("settings")?.setAttribute("style", "transition: none");
      }
    });
    drawerDragEvents();
  }
  function drawerDragEvents() {
    const mobileDragZone = document.getElementById("mobile-drag-zone");
    const settingsDom = document.getElementById("settings");
    let settingsVh = -75;
    let firstPos2 = 0;
    let startTouchY = 0;
    mobileDragZone?.addEventListener("touchstart", dragStart, {
      passive: false
    });
    mobileDragZone?.addEventListener("pointerdown", dragStart, {
      passive: false
    });
    function dragStart(e) {
      e.preventDefault();
      if (settingsDom.classList.contains("dragging-mobile-settings")) {
        return;
      }
      if (e.type === "pointerdown") {
        startTouchY = e.clientY;
      }
      if (e.type === "touchstart") {
        startTouchY = e.touches[0].clientY;
      }
      if (firstPos2 === 0) {
        firstPos2 = startTouchY;
      }
      globalThis.addEventListener("touchmove", dragMove);
      globalThis.addEventListener("pointermove", dragMove);
      document.body.addEventListener("touchend", dragEnd);
      document.body.addEventListener("pointerup", dragEnd);
      document.body.classList.add("dragging-mobile-settings");
    }
    function dragMove(e) {
      let clientY = 0;
      if (e.type === "pointermove") {
        clientY = e.clientY;
      }
      if (e.type === "touchmove") {
        clientY = e.touches[0].clientY;
      }
      if (clientY > 60) {
        const touchPosition = clientY - 25;
        const inverseHeight = 100 - touchPosition / globalThis.innerHeight * 100;
        settingsVh = +inverseHeight.toFixed(2);
        settingsDom.style.transform = `translateY(-${settingsVh}dvh)`;
        settingsDom.style.transition = "transform .0s";
      }
    }
    function dragEnd(e) {
      let clientY = 0;
      if (e.type === "pointerup") {
        clientY = e.clientY;
      }
      if (e.type === "touchend") {
        clientY = e.changedTouches[0].clientY;
      }
      globalThis.removeEventListener("touchmove", dragMove);
      globalThis.removeEventListener("pointermove", dragMove);
      document.body.removeEventListener("touchend", dragEnd);
      document.body.removeEventListener("pointerup", dragEnd);
      startTouchY = 0;
      const footer = document.getElementById("settings-footer");
      footer.style.paddingBottom = `${100 - Math.abs(settingsVh)}dvh`;
      settingsDom.style.removeProperty("padding");
      settingsDom.style.removeProperty("width");
      settingsDom.style.removeProperty("overflow");
      settingsDom.classList.remove("dragging");
      if (clientY > globalThis.innerHeight - 100) {
        settingsToggle();
      }
    }
  }
  function copySettings() {
    const copybtn = document.querySelector("#b_settings-copy span");
    const pre = document.getElementById("settings-data");
    try {
      navigator.clipboard.writeText(pre?.textContent ?? "{}");
      if (copybtn) {
        copybtn.textContent = tradThis("Copied!");
        setTimeout(() => {
          copybtn.textContent = tradThis("Copy");
        }, 1e3);
      }
    } catch (_error) {
    }
  }
  async function saveImportFile() {
    const a = document.getElementById("file-download");
    if (!a) {
      return;
    }
    const date = /* @__PURE__ */ new Date();
    const data = await storage.sync.get() ?? {};
    const zero = (n) => n.toString().length === 1 ? `0${n}` : n.toString();
    const yyyymmdd = date.toISOString().slice(0, 10);
    const hhmmss = `${zero(date.getHours())}_${zero(date.getMinutes())}_${zero(date.getSeconds())}`;
    const bytes = new TextEncoder().encode(stringify2(data));
    const blob = new Blob([bytes], { type: "application/json;charset=utf-8" });
    const href = URL.createObjectURL(blob);
    a.setAttribute("href", href);
    a.setAttribute("tabindex", "-1");
    a.setAttribute("download", `bonjourr-${data?.about?.version} ${yyyymmdd} ${hhmmss}.json`);
    a.click();
  }
  function loadImportFile(target) {
    function decodeExportFile(str) {
      let result = {};
      try {
        result = parse(atob(str)) ?? {};
      } catch {
        try {
          result = parse(str) ?? {};
        } catch (_) {
          result = {};
        }
      }
      return result;
    }
    if (!target.files || target.files && target.files.length === 0) {
      return;
    }
    const file = target.files[0];
    const reader = new FileReader();
    reader.onload = () => {
      if (typeof reader.result !== "string") {
        return false;
      }
      const importData = decodeExportFile(reader.result);
      if (Object.keys(SYNC_DEFAULT).filter((key) => key in importData).length > 0) {
        importSettings(importData);
      }
    };
    reader.readAsText(file);
  }
  async function importSettings(imported) {
    try {
      let data = await storage.sync.get();
      if (imported?.font?.system === false) {
        const family = imported?.font?.family;
        const lang = imported?.lang;
        const correctSubset = await fontIsAvailableInSubset(lang, family);
        if (correctSubset === false) {
          imported.font.family = "";
        }
      }
      if (imported?.searchbar?.on) {
        getPermissions("search");
      }
      data = filterData("import", data, imported);
      storage.sync.clear();
      storage.sync.set(data);
      if (imported?.backgrounds?.type === "urls") {
        const urls = parseUrlList(imported.backgrounds.urls ?? "");
        if (urls.length > 0) {
          storage.local.set({ backgroundUrls: buildBackgroundUrls(urls) });
        }
      }
      fadeOut();
    } catch (_) {
    }
  }
  function resetSettings(action) {
    if (action === "yes") {
      storage.clearall().then(fadeOut);
      return;
    }
    document.getElementById("reset-first")?.classList.toggle("shown", action === "no");
    document.getElementById("reset-conf")?.classList.toggle("shown", action === "first");
  }
  function updateSettingsJson(data) {
    try {
      data ? updateTextArea(data) : storage.sync.get().then(updateTextArea);
    } catch (err) {
      console.warn(err);
    }
    function updateTextArea(data2) {
      const pre = document.getElementById("settings-data");
      if (pre && data2.about) {
        const orderedJson = stringify2(data2);
        data2.about.browser = PLATFORM;
        pre.textContent = orderedJson;
      }
    }
  }
  function updateSettingsEvent() {
    const storageUpdate = () => updateSettingsJson();
    const removeListener = () => chrome.storage.onChanged.removeListener(storageUpdate);
    if (PLATFORM === "online") {
      globalThis.addEventListener("storage", storageUpdate);
    } else {
      chrome.storage.onChanged.addListener(storageUpdate);
      globalThis.addEventListener("beforeunload", removeListener, { once: true });
    }
  }
  async function toggleSettingsChangesButtons(action) {
    const textarea = paramId("settings-data");
    const data = await storage.sync.get();
    let hasChanges = false;
    if (action === "input") {
      const current = stringify2(data);
      let user = "";
      try {
        user = stringify2(JSON.parse(textarea.value ?? "{}"));
      } catch (_) {
      }
      hasChanges = user.length > 2 && current !== user;
      if (hasChanges) {
        paramId("b_settings-apply")?.removeAttribute("disabled");
      } else {
        paramId("b_settings-apply")?.setAttribute("disabled", "");
      }
    }
    if (action === "cancel") {
      textarea.value = stringify2(data);
      hasChanges = false;
    }
    if (action === "focus") {
      paramId("settings-files-options")?.classList.add("hidden");
      paramId("settings-changes-options")?.classList.remove("hidden");
    }
    if (action === "blur") {
      paramId("settings-changes-options")?.classList.add("hidden");
      paramId("settings-files-options")?.classList.remove("hidden");
    }
  }
  function toggleSettingsDropdown(dropdownId, shown) {
    const dropdown = document.getElementById(dropdownId);
    if (!dropdown) {
      console.error(`Couldn't find settings dropdown to toggle: #${dropdownId}`);
      return;
    }
    dropdown.classList.toggle("shown", shown);
    dropdown.querySelectorAll("input, select").forEach((el) => {
      if (el instanceof HTMLInputElement || el instanceof HTMLSelectElement) {
        el.disabled = !shown;
      }
    });
  }
  function paramId(str) {
    return document.getElementById(str);
  }
  function setCheckbox(id, cat) {
    const checkbox = paramId(id);
    checkbox.checked = cat;
  }
  function setInput(id, val) {
    const input = paramId(id);
    input.value = typeof val === "string" ? val : val?.toString();
  }
  function setFormInput(id, defaults, value) {
    const input = paramId(id);
    if (value) {
      input.value = value;
      input.setAttribute("placeholder", value);
    } else {
      input.setAttribute("placeholder", defaults);
    }
  }

  // src/scripts/features/move/widgets.ts
  function toggleWidget(data, widget2) {
    if (!widget2) {
      return;
    }
    const [id, on] = widget2;
    const gridToggle = on ? addGridWidget : removeGridWidget;
    const interfaceTransition = transitioner();
    const selection = data.move.selection;
    const layout = getLayout(data);
    const grid = gridParse(gridToggle(gridStringify(layout.grid), id, selection));
    data.move.layouts[selection] = { items: layout.items, grid };
    const newdata = updateWidgetsStorage([widget2], data);
    storage.sync.set(newdata);
    interfaceTransition.first(() => {
      toggleWidgetInSettings([[id, on]]);
      interfaceFade("out");
    });
    interfaceTransition.after(() => {
      const layout2 = getLayout(newdata);
      setGridAreas(layout2.grid);
      setAllAligns(layout2.items);
      toggleWidgetOnInterface([[id, on]]);
      removeSelection();
      if (isEditing()) {
        on ? addOverlay(id) : removeOverlay(id);
      }
      if (id === "main" && on === true) {
        storage.local.get("lastWeather").then((local) => {
          weather({ sync: newdata, lastWeather: local.lastWeather });
        });
      }
    });
    interfaceTransition.finally(() => {
      interfaceFade("in");
    });
    interfaceTransition.transition(200);
  }
  function toggleWidgetInSettings(states) {
    const inputids = {
      time: "i_time",
      main: "i_main",
      quicklinks: "i_quicklinks",
      notes: "i_notes",
      quotes: "i_quotes",
      pomodoro: "i_pomodoro",
      searchbar: "i_sb"
    };
    for (const [widget2, on] of states) {
      const input = document.getElementById(inputids[widget2]);
      input.checked = on;
      toggleSettingsDropdown(`${widget2}_options`, on);
    }
  }
  function toggleWidgetOnInterface(states) {
    const domids = {
      time: "time",
      main: "main",
      quicklinks: "linkblocks",
      notes: "notes_container",
      quotes: "quotes_container",
      pomodoro: "pomodoro_container",
      searchbar: "sb_container"
    };
    for (const [widget2, on] of states) {
      const elem = document.getElementById(domids[widget2]);
      elem?.classList.toggle("hidden", !on);
    }
  }

  // src/scripts/features/move/toolbox.ts
  var import_mod7 = __toESM(require_dist());
  var moverdom = document.querySelector("#element-mover");
  var resetTimeout;
  var firstPos = { x: 0, y: 0 };
  var moverPos = { x: 0, y: 0 };
  function toolboxEvents() {
    const elementEntries = Object.entries(elements);
    const moverBtns = document.querySelectorAll("#grid-mover button");
    const boxAlignBtns = document.querySelectorAll("#box-alignment-mover button");
    const textAlignBtns = document.querySelectorAll("#text-alignment-mover button");
    const spanColsBtn = document.querySelector("#grid-span-cols");
    const spanRowsBtn = document.querySelector("#grid-span-rows");
    const resetBtn = document.querySelector("#b_resetlayout");
    const closeBtn = document.querySelector("#close-mover");
    for (const [key, element] of elementEntries) {
      (0, import_mod7.onclickdown)(element, () => updateMoveElement({ select: key }), { propagate: false });
    }
    for (const button of moverBtns) {
      (0, import_mod7.onclickdown)(button, () => {
        updateMoveElement({ grid: { x: button.dataset.col, y: button.dataset.row } });
      });
    }
    for (const button of boxAlignBtns) {
      (0, import_mod7.onclickdown)(button, () => {
        updateMoveElement({ box: button.dataset.align });
      });
    }
    for (const button of textAlignBtns) {
      (0, import_mod7.onclickdown)(button, () => {
        updateMoveElement({ text: button.dataset.align });
      });
    }
    (0, import_mod7.onclickdown)(spanColsBtn, () => updateMoveElement({ span: "col" }));
    (0, import_mod7.onclickdown)(spanRowsBtn, () => updateMoveElement({ span: "row" }));
    closeBtn?.addEventListener("click", () => updateMoveElement({ toggle: false }));
    resetBtn?.addEventListener("click", () => updateMoveElement({ reset: true }));
    moverdom?.addEventListener("mousedown", startDrag2);
    moverdom?.addEventListener("mouseup", removeDrag);
    moverdom?.addEventListener("mouseleave", removeDrag);
    moverdom?.addEventListener("touchstart", startDrag2, { passive: false });
    moverdom?.addEventListener("touchend", removeDrag);
    function startDrag2(event) {
      const target = event.target;
      const validTags = target?.tagName === "HR" || target?.tagName === "P";
      const validIds = target?.id === "element-mover" || target?.id === "close-mover-wrapper";
      if (validTags || validIds) {
        moverdom?.addEventListener(event.type.includes("touch") ? "touchmove" : "mousemove", moverDrag);
      }
    }
    function moverDrag(event) {
      const pos = event.touches ? event.touches[0] : event;
      const x = pos.clientX;
      const y = pos.clientY;
      if (firstPos.x === 0 && firstPos.y === 0) {
        firstPos = { x: x - moverPos.x, y: y - moverPos.y };
        return;
      }
      moverPos = {
        x: x - firstPos.x,
        y: y - firstPos.y
      };
      if (moverdom) {
        document.documentElement.style.overscrollBehavior = "none";
        moverdom.style.transform = `translate(${moverPos.x}px, ${moverPos.y}px)`;
      }
    }
    function removeDrag() {
      firstPos = { x: 0, y: 0 };
      moverdom.style.removeProperty("cursor");
      document.documentElement.style.removeProperty("overscroll-behavior");
      moverdom?.removeEventListener("mousemove", moverDrag);
      moverdom?.removeEventListener("touchmove", moverDrag);
    }
  }
  function layoutButtons(selection) {
    for (const button of document.querySelectorAll("#grid-layout button")) {
      button.classList.toggle("selected", button.dataset.layout === selection);
    }
  }
  function gridButtons(id) {
    const property = document.documentElement?.style.getPropertyValue("--grid") || "";
    const grid = gridParse(property);
    if (grid.length === 0) {
      return;
    }
    let top = false;
    let bottom = false;
    let left = false;
    let right = false;
    const positions = gridFind(grid, id);
    const widgetBottomLimit = getGridWidgets(gridStringify(grid)).length - 1;
    const rightLimit = grid[0].length - 1;
    for (const [col, row] of positions) {
      if (row === 0) {
        top = true;
      }
      if (col === 0) {
        left = true;
      }
      if (col === rightLimit) {
        right = true;
      }
      if (row === widgetBottomLimit) {
        bottom = true;
      }
      if (row === grid.length - 1) {
        const idOnlyRow = grid.at(row)?.filter((id2) => id2 !== ".");
        if (new Set(idOnlyRow).size === 1) {
          bottom = true;
        }
      }
    }
    for (const button of document.querySelectorAll("#grid-mover button")) {
      const c = Number.parseInt(button.dataset.col || "0");
      const r = Number.parseInt(button.dataset.row || "0");
      let limit = false;
      if (r === -1) {
        limit = top;
      }
      if (r === 1) {
        limit = bottom;
      }
      if (c === -1) {
        limit = left;
      }
      if (c === 1) {
        limit = right;
      }
      toggleDisabled(button, limit);
    }
  }
  function spanButtons(id) {
    const gridstring = document.documentElement?.style.getPropertyValue("--grid") || "";
    const grid = gridParse(gridstring);
    if (grid.length === 0) {
      return;
    }
    const applyStates = (dir, state) => {
      const dirButton = document.querySelector(`#grid-span-${dir}s`);
      const otherButton = document.querySelector(`#grid-span-${dir === "col" ? "rows" : "cols"}`);
      toggleDisabled(otherButton, state);
      dirButton?.classList.toggle("selected", state);
    };
    const [posCol, posRow] = gridFind(grid, id)[0];
    const col = grid.map((g) => g[posCol]);
    const row = [...grid[posRow]];
    const hasColumnDuplicates = hasDuplicateInArray(col, id);
    const hasRowDuplicates = hasDuplicateInArray(row, id);
    applyStates("col", hasColumnDuplicates);
    applyStates("row", hasRowDuplicates);
  }
  function alignButtons(align) {
    const { box, text } = align ?? { box: "", text: "" };
    const boxBtns = document.querySelectorAll("#box-alignment-mover button");
    const textBtns = document.querySelectorAll("#text-alignment-mover button");
    for (const b of boxBtns) {
      b.classList.toggle("selected", b.dataset.align === (box || "center"));
    }
    for (const b of textBtns) {
      b.classList.toggle("selected", b.dataset.align === (text || "center"));
    }
  }
  function resetButton() {
    const bResetlayout = document.getElementById("b_resetlayout");
    const confirm = !!bResetlayout.dataset.confirm;
    clearTimeout(resetTimeout);
    if (confirm === false) {
      bResetlayout.textContent = tradThis("Are you sure?");
      bResetlayout.dataset.confirm = "true";
      resetTimeout = setTimeout(() => {
        bResetlayout.textContent = tradThis("Reset layout");
        bResetlayout.dataset.confirm = "";
      }, 1e3);
    } else {
      bResetlayout.textContent = tradThis("Reset layout");
      bResetlayout.dataset.confirm = "";
    }
    return confirm;
  }
  function showSpanButtons(column) {
    column !== "single" ? document.getElementById("grid-spanner-container")?.classList.add("active") : document.getElementById("grid-spanner-container")?.classList.remove("active");
  }

  // src/scripts/features/move/index.ts
  var dominterface2 = document.querySelector("#interface");
  var widget;
  function moveElements(init2, events) {
    if (!(init2 || events)) {
      updateMoveElement({ reset: true });
      return;
    }
    if (events) {
      updateMoveElement(events);
      return;
    }
    if (init2) {
      const { grid, items } = getLayout(init2);
      setAllAligns(items);
      setGridAreas(gridStringify(grid));
      onSettingsLoad(() => {
        toolboxEvents();
        showSpanButtons(init2.selection);
      });
    }
  }
  async function updateMoveElement(event) {
    const data = await storage.sync.get();
    if (!data.move) {
      data.move = structuredClone(SYNC_DEFAULT.move);
    }
    if (event.grid) {
      gridChange(data.move, event.grid);
    }
    if (event.span) {
      toggleGridSpans(data.move, event.span);
    }
    if (event.layout) {
      layoutChange(data, event.layout);
    }
    if (event.reset) {
      layoutReset(data);
    }
    if (event.widget) {
      toggleWidget(data, event.widget);
    }
    if (event.select) {
      elementSelection(data.move, event.select);
    }
    if (event.box !== void 0) {
      alignChange(data.move, event.box, "box");
    }
    if (event.text !== void 0) {
      alignChange(data.move, event.text, "text");
    }
    if (event.toggle !== void 0) {
      toggleMoveStatus(data, event.toggle);
    }
    if (event.overlay !== void 0) {
      pageWidthOverlay(data.move, event.overlay);
    }
  }
  function gridChange(move, gridpos) {
    if (!widget) {
      return;
    }
    const y = Number.parseInt(gridpos?.y || "0");
    const x = Number.parseInt(gridpos?.x || "0");
    const layout = getLayout(move);
    const positions = gridFind(layout.grid, widget);
    const affectedIds = [];
    let grid = layout.grid;
    const isGridOverflowing = positions.some(([col]) => grid[col + y] === void 0);
    if (isGridOverflowing) {
      if (move.selection === "single") {
        grid.push(["."]);
      }
      if (move.selection === "double") {
        grid.push([".", "."]);
      }
      if (move.selection === "triple") {
        grid.push([".", ".", "."]);
      }
    }
    for (const [col, row] of positions) {
      const newposition = grid[row + y][col + x];
      if (newposition !== ".") {
        affectedIds.push(newposition);
      }
    }
    for (const id of affectedIds) {
      if (gridFind(grid, id).length > 1) {
        grid = spansInGridArea(grid, id, { remove: true });
      }
    }
    for (const [col, row] of positions) {
      const newRow = Math.min(Math.max(row + y, 0), grid.length - 1);
      const newCol = Math.min(Math.max(col + x, 0), grid[0].length - 1);
      const tempItem = grid[row][col];
      grid[row][col] = grid[newRow][newCol];
      grid[newRow][newCol] = tempItem;
    }
    for (let i = 0; i < grid.length; i++) {
      if (isRowEmpty(grid, i)) {
        grid.splice(i, 1);
      }
    }
    layout.grid = grid;
    move.layouts[move.selection] = layout;
    storage.sync.set({ move });
    setGridAreas(grid);
    gridButtons(widget);
  }
  function alignChange(move, value, type) {
    if (!widget) {
      return;
    }
    const layout = getLayout(move);
    const align = layout.items[widget] ?? { box: "", text: "" };
    if (type === "box") {
      align.box = value;
    }
    if (type === "text") {
      align.text = value;
    }
    layout.items[widget] = align;
    move.layouts[move.selection] = layout;
    storage.sync.set({ move });
    alignButtons(align);
    setAlign(widget, align);
  }
  function layoutChange(data, column) {
    if (column === data.move.selection) {
      return;
    }
    if (column === "single" || column === "double" || column === "triple") {
      data.move.selection = column;
    }
    const layout = getLayout(data);
    const widgetsInGrid = getGridWidgets(gridStringify(layout.grid));
    const list = [
      ["time", widgetsInGrid.includes("time")],
      ["main", widgetsInGrid.includes("main")],
      ["notes", widgetsInGrid.includes("notes")],
      ["quotes", widgetsInGrid.includes("quotes")],
      ["pomodoro", widgetsInGrid.includes("pomodoro")],
      ["searchbar", widgetsInGrid.includes("searchbar")],
      ["quicklinks", widgetsInGrid.includes("quicklinks")]
    ];
    const newdata = updateWidgetsStorage(list, data);
    storage.sync.set(newdata);
    const interfaceTransition = transitioner();
    interfaceTransition.first(() => {
      interfaceFade("out");
    });
    interfaceTransition.after(() => {
      const layout2 = getLayout(newdata);
      setAllAligns(layout2.items);
      setGridAreas(layout2.grid);
      layoutButtons(newdata.move.selection);
      showSpanButtons(newdata.move.selection);
      removeSelection();
      toggleWidgetInSettings(list);
      toggleWidgetOnInterface(list);
      if (widget) {
        gridButtons(widget);
        alignButtons(layout2.items[widget]);
      }
    });
    interfaceTransition.finally(() => {
      interfaceFade("in");
    });
    interfaceTransition.transition(200);
  }
  function layoutReset(data) {
    const enabledWidgets = getWidgetsStorage(data);
    let grid = "";
    if (resetButton() === false) {
      return;
    }
    for (const id of enabledWidgets) {
      grid = addGridWidget(grid, id, data.move.selection);
    }
    data.move.layouts[data.move.selection] = {
      grid: gridParse(grid),
      items: {}
    };
    storage.sync.set(data);
    removeSelection();
    setGridAreas(grid);
    setAllAligns({
      quicklinks: void 0,
      main: void 0,
      time: void 0,
      notes: void 0,
      searchbar: void 0,
      quotes: void 0,
      pomodoro: void 0
    });
  }
  function elementSelection(move, select) {
    removeSelection();
    if (!(isEditing() && select)) {
      return;
    }
    widget = select;
    alignButtons(getLayout(move).items[widget]);
    spanButtons(widget);
    gridButtons(widget);
    document.getElementById(`ove-overlay-${widget}`)?.classList.add("selected");
    document.getElementById("element-mover")?.classList.add("active");
  }
  function toggleMoveStatus(data, force) {
    const mover = document.getElementById("element-mover");
    const bEditmove = document.getElementById("b_editmove");
    const isEditing2 = dominterface2?.classList.contains("move-edit");
    const hasOverlay = document.querySelector(".move-overlay") === null;
    const state = force ?? !isEditing2;
    if (!state) {
      bEditmove.textContent = tradThis("Open");
      dominterface2?.classList.remove("move-edit");
      mover.classList.add("hidden");
      removeOverlay();
    } else if (hasOverlay) {
      bEditmove.textContent = tradThis("Close");
      dominterface2?.classList.add("move-edit");
      mover.classList.remove("hidden");
      for (const id of getWidgetsStorage(data)) {
        addOverlay(id);
      }
    }
    mover?.classList.remove("active");
    removeSelection();
  }
  function toggleGridSpans(move, dir) {
    if (!widget) {
      return;
    }
    const layout = getLayout(move);
    const gridWithSpan = spansInGridArea(layout.grid, widget, { toggle: dir });
    move.layouts[move.selection] = {
      items: layout.items,
      grid: gridWithSpan
    };
    storage.sync.set({ move });
    setGridAreas(gridWithSpan);
    gridButtons(widget);
    spanButtons(widget);
  }
  function pageWidthOverlay(move, overlay) {
    const isEditing2 = document.getElementById("interface")?.classList?.contains("move-edit");
    const hasOverlays = document.querySelector(".move-overlay");
    if (!isEditing2 && overlay === false) {
      removeOverlay();
      return;
    }
    if (!hasOverlays) {
      const layout = getLayout(move);
      const grid = gridStringify(layout.grid);
      const ids2 = getGridWidgets(grid);
      for (const id of ids2) {
        addOverlay(id);
      }
    }
  }

  // src/scripts/features/css.ts
  function customCss(init2, event) {
    const stylelink = document.getElementById("styles");
    if (event) {
      if (event?.styling !== void 0) {
        const val = stringMaxSize(event.styling, 8080);
        stylelink.textContent = val;
        eventDebounce({ css: val });
      }
      return;
    }
    if (init2) {
      stylelink.textContent = init2;
    }
    onSettingsLoad(async () => {
      const { createCssEditor: createCssEditor2 } = await Promise.resolve().then(() => (init_csseditor(), csseditor_exports));
      const options = {
        language: "css",
        lineNumbers: false,
        wordWrap: true,
        insertSpaces: false,
        value: init2 || ""
      };
      const editor = createCssEditor2(options);
      const tabCommand = editor.keyCommandMap.Tab;
      editor.textarea.id = "css-editor-textarea";
      editor.textarea.maxLength = 8080;
      editor.textarea.setAttribute("aria-labelledby", "lbl-css");
      editor.textarea.placeholder = tradThis("Type in your custom CSS");
      editor.on("update", (value) => {
        eventDebounce({ css: stringMaxSize(value, 8080) });
        stylelink.textContent = stringMaxSize(value, 8080);
      });
      editor.keyCommandMap.Tab = (e, selection, value) => {
        if (document.body.matches(".tabbing")) {
          return false;
        }
        return tabCommand?.(e, selection, value);
      };
    });
  }

  // src/scripts/startup/opera.ts
  function operaExtensionExplainer(explained) {
    if (explained || BROWSER !== "opera" || PLATFORM !== "chrome") {
      return;
    }
    const template = document.getElementById("opera-explainer-template");
    const doc2 = template.content.cloneNode(true);
    const dialog = doc2.getElementById("opera-explainer");
    const button = doc2.getElementById("b_opera-explained");
    document.body.classList.add("loading");
    document.body.appendChild(dialog);
    dialog.showModal();
    setTimeout(() => dialog.classList.add("shown"));
    button?.addEventListener("click", () => {
      storage.local.set({ operaExplained: true });
      document.body.classList.remove("loading");
      dialog.close();
    });
  }

  // src/scripts/startup/potato.ts
  function setPotatoComputerMode() {
    if (BROWSER === "firefox" || BROWSER === "safari") {
      return;
    }
    const fourHours = 1e3 * 60 * 60 * 4;
    const isPotato = localStorage.potato === "yes";
    const expirationTime = Date.now() - Number.parseInt(localStorage.lastPotatoCheck ?? "0");
    if (expirationTime < fourHours) {
      document.body.classList.toggle("potato", isPotato);
      return;
    }
    const canvas = document.createElement("canvas");
    const gl = canvas?.getContext("webgl");
    const debugInfo = gl?.getExtension("WEBGL_debug_renderer_info");
    if (BROWSER === "chrome" && !gl) {
      document.body.classList.add("potato");
      return;
    }
    const vendor = gl?.getParameter(debugInfo?.UNMASKED_VENDOR_WEBGL ?? 0).toString();
    const renderer = gl?.getParameter(debugInfo?.UNMASKED_RENDERER_WEBGL ?? 0).toString();
    const detectedPotato = vendor.includes("Google") && renderer.includes("SwiftShader");
    localStorage.potato = detectedPotato ? "yes" : "no";
    localStorage.lastPotatoCheck = Date.now();
    document.body.classList.toggle("potato", detectedPotato);
  }

  // src/scripts/startup/online.ts
  function onlineAndMobile() {
    const dominterface3 = document.getElementById("interface");
    const onlineFirefoxMobile = PLATFORM === "online" && BROWSER === "firefox" && IS_MOBILE;
    const onlineSafariIos = PLATFORM === "online" && BROWSER === "safari" && SYSTEM_OS === "ios";
    let visibilityHasChanged = false;
    let firefoxRafTimeout;
    if (IS_MOBILE) {
      document.addEventListener("visibilitychange", updateOnVisibilityChange);
    }
    if (onlineFirefoxMobile) {
      updateAppHeight();
      if (SYSTEM_OS === "ios") {
        globalThis.requestAnimationFrame(triggerAnimationFrame);
        setTimeout(() => cancelAnimationFrame(firefoxRafTimeout), 500);
      }
    }
    if (onlineSafariIos) {
      onSettingsLoad(() => {
        const inputs = document.querySelectorAll('input[type="text"], input[type="url"], textarea');
        for (const input of inputs) {
          input.addEventListener("focus", disableTouchAction);
          input.addEventListener("blur", enableTouchAction);
        }
      });
    }
    async function updateOnVisibilityChange() {
      if (visibilityHasChanged === false) {
        visibilityHasChanged = true;
        return;
      }
      visibilityHasChanged = false;
      const sync = await storage.sync.get();
      const local = await storage.local.get();
      const { backgroundLastChange, lastWeather } = local;
      if (!sync.clock || !sync.weather) {
        return;
      }
      const time = (backgroundLastChange ? new Date(backgroundLastChange) : /* @__PURE__ */ new Date()).getTime();
      const needNew = needsChange(sync.backgrounds.frequency, time);
      const notColor = sync.backgrounds.type !== "color";
      clock(sync);
      weather({ sync, lastWeather });
      if (notColor && needNew) {
        backgroundsInit(sync, local);
      }
    }
    function triggerAnimationFrame() {
      updateAppHeight();
      firefoxRafTimeout = requestAnimationFrame(triggerAnimationFrame);
    }
    function updateAppHeight() {
      document.documentElement.style.setProperty("--app-height", `${globalThis.innerHeight}px`);
    }
    function disableTouchAction() {
      const settingsDom = document.getElementById("settings");
      if (dominterface3 && settingsDom) {
        dominterface3.style.touchAction = "none";
        settingsDom.style.touchAction = "none";
      }
    }
    function enableTouchAction() {
      const settingsDom = document.getElementById("settings");
      if (dominterface3 && settingsDom) {
        dominterface3.style.removeProperty("touch-action");
        settingsDom.style.removeProperty("touch-action");
      }
    }
  }

  // src/scripts/startup/serviceworker.ts
  function serviceWorker() {
    if (ENVIRONNEMENT !== "PROD" || PLATFORM !== "online" || !("serviceWorker" in navigator)) {
      return;
    }
    navigator.serviceWorker.register("service-worker.js");
    let promptEvent;
    globalThis.addEventListener("beforeinstallprompt", (e) => {
      promptEvent = e;
      return promptEvent;
    });
  }

  // src/scripts/startup/tabstracking.ts
  function tabsTracking() {
    function updateLastActiveTab() {
      localStorage.setItem("lastActiveTab", TAB_ID);
    }
    if (!document.hidden) {
      updateLastActiveTab();
    }
    globalThis.window.addEventListener("focus", updateLastActiveTab);
    globalThis.window.addEventListener("visibilitychange", () => {
      if (!document.hidden) {
        updateLastActiveTab();
      }
    });
    globalThis.window.addEventListener("beforeunload", () => {
      tabsBc.postMessage("tabClosed");
    });
    tabsBc.onmessage = (event) => {
      if (event.data === "tabClosed") {
        updateLastActiveTab();
      }
    };
  }

  // src/scripts/events.ts
  var isMousingDownOnInput = false;
  function userActions() {
    document.body.addEventListener("mousedown", detectTargetAsInputs);
    document.getElementById("b_editmove")?.addEventListener("click", closeSettingsOnMoveOpen);
    document.addEventListener("click", clickUserActions);
    document.addEventListener("keydown", keyboardUserActions);
    document.addEventListener("keyup", keyboardUserActions);
  }
  function keyboardUserActions(event) {
    const { altKey, ctrlKey, metaKey, code, type } = event;
    const domsuggestions2 = document.getElementById("sb-suggestions");
    if (code === "Escape") {
      if (domsuggestions2?.classList.contains("shown")) {
        domsuggestions2?.classList.remove("shown");
        return;
      }
      const open = isOpen();
      const keyup = event.type === "keyup";
      if (open.contextmenu) {
        document.dispatchEvent(new Event("close-edit"));
      } else if (open.settings && keyup) {
        document.dispatchEvent(new CustomEvent("toggle-settings"));
      } else if (open.selectall) {
        document.dispatchEvent(new Event("remove-select-all"));
      } else if (open.folder) {
        document.dispatchEvent(new Event("close-folder"));
      } else if (keyup) {
        if (document.documentElement.dataset.supportersModal === void 0) {
          document.dispatchEvent(new CustomEvent("toggle-settings"));
        }
      }
      return;
    }
    if (code === "Tab") {
      document.body.classList.toggle("tabbing", true);
      return;
    }
    if (type === "keydown" && altKey && !ctrlKey && !metaKey && code === "KeyN") {
      if (isTypingTarget(event.target)) return;
      const linkList = document.querySelector("#linkblocks:not(.hidden) .link-list");
      if (!linkList) return;
      const rect = linkList.getBoundingClientRect();
      linkList.dispatchEvent(
        new MouseEvent("contextmenu", {
          bubbles: true,
          cancelable: true,
          clientX: rect.right,
          clientY: rect.top + 15
        })
      );
    }
  }
  function clickUserActions(event) {
    if (isMousingDownOnInput) {
      return;
    }
    const open = isOpen();
    const composedPath = event.composedPath() ?? [document.body];
    const path = composedPath.filter((node) => node?.className?.includes);
    const pathIds = path.map((el) => el.id);
    const on = {
      body: path[0].tagName === "BODY",
      link: path.some((el) => el.classList.contains("link")),
      linkfolder: path.some((el) => el.className.includes("folder")),
      addgroup: path.some((el) => el.className.includes("add-group")),
      folder: path.some((el) => el.className.includes("in-folder")),
      button: path.some((el) => el.className.includes("param-btn")),
      localfiles: path.some((el) => el.id === "local_options"),
      interface: pathIds.includes("interface"),
      contextmenu: pathIds.includes("contextmenu"),
      settings: path.some((el) => el.id === "settings"),
      showsettings: path.some((el) => el.id === "show-settings"),
      interactable: path.some(
        (el) => el instanceof HTMLElement && el.matches(
          'a[href], button, input, select, textarea, label, [tabindex]:not([tabindex="-1"]), [contenteditable="true"]'
        )
      )
    };
    if (document.body.classList.contains("tabbing")) {
      document.body?.classList.toggle("tabbing", false);
    }
    if (document.querySelectorAll(".thumbnail.selected") && !on.localfiles && !on.button) {
      for (const node of document.querySelectorAll(".thumbnail.selected")) {
        node.classList.remove("selected");
      }
    }
    if (on.showsettings) {
      document.dispatchEvent(new CustomEvent("toggle-settings"));
    }
    if (open.contextmenu && !on.contextmenu) {
      if (on.addgroup) {
        return;
      }
      document.dispatchEvent(new Event("close-edit"));
      return;
    }
    if ((on.body || on.interface) === false) {
      return;
    }
    if (open.settings && !on.interactable) {
      document.dispatchEvent(new CustomEvent("toggle-settings"));
    } else if (open.selectall && !on.link) {
      document.dispatchEvent(new Event("remove-select-all"));
    } else if (open.folder && !on.folder && !on.linkfolder) {
      document.dispatchEvent(new Event("close-folder"));
    }
  }
  function isOpen() {
    return {
      settings: !!document.getElementById("settings")?.classList.contains("shown"),
      folder: !!document.querySelector(".in-folder"),
      selectall: document.getElementById("linkblocks")?.classList.contains("select-all"),
      contextmenu: document.querySelector("#contextmenu")?.open
    };
  }
  function detectTargetAsInputs(event) {
    const path = event.composedPath();
    const tagName = path[0]?.tagName ?? "";
    isMousingDownOnInput = ["TEXTAREA", "INPUT"].includes(tagName);
  }
  function closeSettingsOnMoveOpen() {
    setTimeout(() => {
      const elementmover = document.getElementById("element-mover");
      const moverHasOpened = elementmover?.classList.contains("hidden") === false;
      if (moverHasOpened) {
        document.dispatchEvent(new CustomEvent("toggle-settings"));
      }
    }, 20);
  }

  // src/scripts/index.ts
  try {
    startup();
    serviceWorker();
    onlineAndMobile();
  } catch (_) {
    console.warn("Startup failed");
  }
  async function startup() {
    let { sync, local } = await storage.init();
    const oldVersion = sync?.about?.version;
    if (!sync || !local) {
      console.warn("Storage failed, loading Bonjourr with default settings");
      sync = structuredClone(SYNC_DEFAULT);
      local = structuredClone(LOCAL_DEFAULT);
    }
    if (oldVersion !== CURRENT_VERSION) {
      console.info(`Updated Bonjourr, ${oldVersion} => ${CURRENT_VERSION}`);
      localStorage.setItem("update-archive", JSON.stringify(sync));
      sync = filterData("update", sync);
      local.translations = void 0;
      storage.local.remove("translations");
      local = { ...LOCAL_DEFAULT, ...local };
      await storage.sync.clear();
      await storage.sync.set(sync);
    }
    await setTranslationCache(sync.lang, local);
    displayInterface(void 0, sync);
    traduction(null, sync.lang);
    userDate(sync.clock.timezone);
    suntime(local.lastWeather?.sunrise, local.lastWeather?.sunset);
    weather({ sync, lastWeather: local.lastWeather });
    customFont(sync.font);
    textShadow(sync.textShadow);
    favicon(sync.favicon);
    tabTitle(sync.tabtitle);
    clock(sync);
    darkmode(sync.dark);
    searchbar(sync.searchbar);
    quotes({ sync, local });
    pomodoro(sync.pomodoro);
    notes(sync.notes);
    moveElements(sync.move);
    customCss(sync.css);
    hideElements(sync.hide);
    backgroundsInit(sync, local, true);
    quickLinks({ sync, local });
    synchronization(local);
    settingsInit(sync, local);
    pageControl({ width: sync.pagewidth, gap: sync.pagegap });
    operaExtensionExplainer(local.operaExplained);
    tabsTracking();
    altMode();
    document.documentElement.dataset.system = SYSTEM_OS;
    document.documentElement.dataset.browser = BROWSER;
    document.documentElement.dataset.platform = PLATFORM;
    document.getElementById("time")?.classList.toggle("hidden", !sync.time);
    document.getElementById("main")?.classList.toggle("hidden", !sync.main);
    onInterfaceDisplay(() => {
      document.body.classList.remove("init");
      supportersNotifications(sync);
      setPotatoComputerMode();
      userActions();
      interfacePopup({
        announce: sync.announcements,
        review: sync.review ?? 0,
        new: CURRENT_VERSION,
        old: oldVersion
      });
    });
  }
})();
