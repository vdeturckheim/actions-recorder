module.exports.HTML_TAGS = ['a', 'abbr', 'acronym', 'address', 'applet', 'area', 'article', 'aside', 'audio', 'b',
  'base', 'basefont', 'bdi', 'bdo', 'bgsound', 'big', 'blink', 'blockquote', 'body', 'br', 'button', 'canvas',
  'caption', 'center', 'cite', 'code', 'col', 'colgroup', 'content', 'data', 'datalist', 'dd', 'decorator', 'del',
  'details', 'dfn', 'dir', 'div', 'dl', 'dt', 'element', 'em', 'embed', 'fieldset', 'figcaption', 'figure',
  'font', 'footer', 'form', 'frame', 'frameset', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'head', 'header', 'hgroup',
  'hr', 'html', 'i', 'iframe', 'img', 'input', 'ins', 'isindex', 'kbd', 'keygen', 'label', 'legend', 'li', 'link',
  'listing', 'main', 'map', 'mark', 'marquee', 'menu', 'menuitem', 'meta', 'meter', 'nav', 'nobr', 'noframes',
  'noscript', 'object', 'ol', 'optgroup', 'option', 'output', 'p', 'param', 'plaintext', 'pre', 'progress', 'q',
  'rp', 'rt', 'ruby', 's', 'samp', 'script', 'section', 'select', 'shadow', 'small', 'source', 'spacer', 'span',
  'strike', 'strong', 'style', 'sub', 'summary', 'sup', 'table', 'tbody', 'td', 'template', 'textarea', 'tfoot',
  'th', 'thead', 'time', 'title', 'tr', 'track', 'tt', 'u', 'ul', 'var', 'video', 'wbr', 'xmp'];

module.exports.INLINE_TAGS = ['b', 'big', 'i', 'small', 'tt', 'abbr', 'acronym', 'cite', 'code', 'dfn', 'em', 'kbd',
  'strong', 'samp', 'time', 'var', 'a', 'bdo', 'br', 'img', 'svg', 'map', 'object', 'q', 'script', 'span', 'sub', 'sup',
  'button', 'input', 'label', 'select', 'textarea'];

module.exports.CONSIDER_INNER_TEXT_TAGS = ['mat-slide-toggle'];

const LABEL_TAGS = ['b', 'big', 'i', 'small', 'tt', 'abbr', 'acronym', 'cite', 'code', 'dfn', 'em', 'kbd',
  'bdo', 'map', 'q', 'span', 'sub', 'sup', 'label', 'text'];

module.exports.LABEL_TAGS = LABEL_TAGS;

module.exports.isInput = function (element) {
  return element.tagName && (element.tagName.toLowerCase() === 'input' ||
    element.tagName.toLowerCase() === 'select' ||
    element.tagName.toLowerCase() === 'textarea' ||
    element.isContentEditable);
};

module.exports.isSwitch = function (element) {
  return element.type && ((element.type.toLowerCase() === 'checkbox') || (element.type.toLowerCase() === 'radio'));
};

module.exports.isButtonOrLink = function (element) {
  return (element.tagName && (element.tagName.toLowerCase() === 'button' || element.tagName.toLowerCase() === 'a'));
};

module.exports.isInputButton = function (element) {
  return (element.tagName && element.tagName.toLowerCase() === 'input') &&
      (element.type && (element.type === 'submit' || element.type === 'button' || element.type === 'reset'));
};

module.exports.isButton = function (element) {
  let isInputButton = this.isInputButton(element);

  return isInputButton || (element.tagName && (element.tagName.toLowerCase() === 'button'));
};

module.exports.isLabel = function (element) {
  if (!element.tagName) {
    return false;
  }
  return !!element.innerText && ((LABEL_TAGS.indexOf(element.tagName.toLowerCase()) !== -1) ||
    (element.tagName.toLowerCase() === 'div'));
};

module.exports.hasChildren = function (element) {
  return element.children.length ||
      (element.shadowRoot && element.shadowRoot.children.length);
};

module.exports.LOG_OUT_IDENTIFIERS = ['logout', 'log out', 'signout', 'sign out', 'log me out', 'sign me out'];

module.exports.LOG_IN_IDENTIFIERS = ['login', 'log in', 'sign in', 'signin', 'sign me in', 'log me in'];
