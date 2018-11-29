/*!
  Copyright (c) 2018 Xu Tongbao
  Licensed under the MIT License (MIT), see
  https://github.com/xutongbao/toast
*/
const styles = require('./index.module.scss');

class Toast {
  constructor(text) {
    let tpl =
      `<div id="m-toast" class="m-toast"}>
        <div class="m-toast-inner"}>
          <div class="m-toast-text"}>
            ${text}
          </div>
        </div>    
        </div>`;        
    tpl = this.buildTpl(tpl, styles);
    let div = document.createElement('div');
    div.innerHTML = tpl;
    document.body.append(div.childNodes[0]);
    this.dom = document.getElementById('m-toast');
  }
  show() {
    if (this.dom) {
      this.dom.style.display = 'block';
    }
  }
  hide() {
    if (this.dom) {
      this.dom.style.display = 'none';
    }
  }
}

Object.assign(Toast.prototype, {
  buildTpl: (tpl, styles) => {
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
  }
});

module.exports = Toast;