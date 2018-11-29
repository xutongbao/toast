/*!
  Copyright (c) 2018 Xu Tongbao
  Licensed under the MIT License (MIT), see
  https://github.com/xutongbao/toast
*/
const styles = require('./index.module.scss');

class Toast {
  constructor(option) {
    this.text = '';
    this.class = {
      toast: '',
      toastInner: '',
      toastText: ''      
    };
    let optionType = this.getOptionType(option);
    if (optionType === 'string') {
      this.text = option;
    } else if (optionType === 'object') {
      Object.assign(this, option);
    } else {
      console.error('option error!');
      return;
    }
    let toastID = this.getID(6);
    let toastInnerID = this.getID(6);
    let toastTextID = this.getID(6);
    let tpl =
      `<div id=${toastID} class="m-toast"}>
        <div id=${toastInnerID} class="m-toast-inner"}>
          <div id=${toastTextID} class="m-toast-text"}>
            ${this.text}
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
  show(text) {
    if (this.toastDOM) {
      if (typeof text !== 'undefined') {
        this.toastTextDOM.innerHTML = text;
      }
      this.toastDOM.style.display = 'block';
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
  getOptionType(obj) {
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
  } 
});

module.exports = Toast;