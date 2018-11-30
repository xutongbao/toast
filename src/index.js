/*!
  Copyright (c) 2018 Xu Tongbao
  Licensed under the MIT License (MIT), see
  https://github.com/xutongbao/toast
*/
const styles = require('./index.module.scss');

class Toast {
  constructor(option) {
    this.text = '';
    this.html = '';
    this.delay = null;
    this.class = {
      toast: '',
      toastInner: '',
      toastText: ''      
    };
    let optionType = this.getType(option);
    if (optionType === 'string' || optionType === 'number') {
      this.text = option;
    } else if (optionType === 'object') {
      Object.assign(this, option);
    } else if (optionType === 'undefined') {
      this.text = '';
    } else {
      console.error('option error!');
      return;
    }
    this.text = this.escapeHtml(this.text);
    this.content = '';
    if (this.html) {
      this.content = this.html;
    } else if (this.text) {
      this.content = this.text;
    }
    if (this.isDOM(this.content)) {
      this.content = this.domToString(this.content);
    }
    let toastID = this.getID(6);
    let toastInnerID = this.getID(6);
    let toastTextID = this.getID(6);
    let tpl =
      `<div id=${toastID} class="m-toast"}>
        <div id=${toastInnerID} class="m-toast-inner"}>
          <div id=${toastTextID} class="m-toast-text"}>
            ${this.content}
          </div>
        </div>    
      </div>`;        
    tpl = this.buildTpl(tpl, styles);
    let div = document.createElement('div');
    div.innerHTML = tpl;
    document.body.append(div.childNodes[0]);
    this.toastDOM = document.getElementById(toastID);
    this.toastInnerDOM = document.getElementById(toastInnerID);
    this.toastTextDOM = document.getElementById(toastTextID);
    this.toastDOM.className += this.class.toast;
    this.toastInnerDOM.className += this.class.toastInner;
    this.toastTextDOM.className += this.class.toastText;
  }
  show(str) {
    let optionType = this.getType(str);
    if (this.toastDOM) {
      if (optionType === 'string' || optionType === 'number') {
        this.toastTextDOM.innerHTML = str;
      }
      this.toastDOM.style.display = 'block';
    }
    if (this.delay !== null) {
      this.delay = this.delay - 0;
      if (this.getType(this.delay) === 'number') {
        setTimeout(() => {
          this.hide();
        }, this.delay);
      } else {
        console.error('delay value should be number.')
      }
    }
  }
  hide() {
    if (this.toastDOM) {
      this.toastDOM.style.display = 'none';
    }
  }
  destory() {
    if (this.toastDOM) {
      document.body.removeChild(this.toastDOM);
    }
  }
}

Object.assign(Toast.prototype, {
  buildTpl(tpl, styles) {
    let reg = /class=\".*?\"/g;
    result = tpl.match(reg);
    for (let i = 0; i < result.length; i++) {
      let tempReg = /\".*?\"/g;
      let tempResult = result[i].match(tempReg)[0];
      tempResult = tempResult.slice(1, tempResult.length - 1);
      tempResult = tempResult.split(/\s+/);
      let myStyle = '';
      for (let j = 0; j < tempResult.length; j++) {
        if (typeof styles[tempResult[j]] !== 'undefined') {
          myStyle += styles[tempResult[j]] + ' ';
        }
      }
      let r = result[i].replace(tempReg, '"' + myStyle + '"');
      tpl = tpl.replace(result[i], r);
    }  
    return tpl;
  },
  getID(length) {
    return Number(Math.random().toString().substr(3, length) + Date.now()).toString(36);
  },
  getType(obj) {
    var toString = Object.prototype.toString;
    var map = {
      '[object Boolean]' : 'boolean',
      '[object Number]'  : 'number',
      '[object String]'  : 'string',
      '[object Function]' : 'function',
      '[object Array]'  : 'array',
      '[object Date]'   : 'date',
      '[object RegExp]'  : 'regExp',
      '[object Undefined]': 'undefined',
      '[object Null]'   : 'null',
      '[object Object]'  : 'object'
    };
    return map[toString.call(obj)];
  },
  escapeHtml(str) {
    return (str + '').replace(/</g, "&lt;").replace(/>/g, "&gt;");
  },  
  domToString(node) { 
    let tmpNode = document.createElement('div');
    tmpNode.appendChild(node); 
    let str = tmpNode.innerHTML; 
    tmpNode = node = null; // 解除引用，以便于垃圾回收 
    return str; 
  },
  isDOM: ( typeof HTMLElement === 'object' ) ?
    function(obj) {
      return obj instanceof HTMLElement;
    } :
    function(obj) {
      return obj && typeof obj === 'object' && obj.nodeType === 1 && typeof obj.nodeName === 'string';
    },
});

module.exports = Toast;