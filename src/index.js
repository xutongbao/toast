/*!
  Copyright (c) 2018 Xu Tongbao
  Licensed under the MIT License (MIT), see
  https://github.com/xutongbao/toast
*/
const styles = require('./index.module.scss');

class Toast {
  constructor(text) {
    let toastID = this.getID(6);
    let toastTextID = this.getID(6);
    let tpl =
      `<div id=${toastID} class="m-toast"}>
        <div class="m-toast-inner"}>
          <div id=${toastTextID} class="m-toast-text"}>
            ${text}
          </div>
        </div>    
      </div>`;        
    tpl = this.buildTpl(tpl, styles);
    let div = document.createElement('div');
    div.innerHTML = tpl;
    document.body.append(div.childNodes[0]);
    this.toastDOM = document.getElementById(toastID);
    this.toastTextDOM = document.getElementById(toastTextID);
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
      let r = result[i].replace(tempReg, '"' + styles[tempResult] + '"');
      tpl = tpl.replace(result[i], r);
    }  
    return tpl;
  },
  getID(length) {
    return Number(Math.random().toString().substr(3, length) + Date.now()).toString(36);
  }  
});

module.exports = Toast;