/*!
  Copyright (c) 2018 Xu Tongbao
  Licensed under the MIT License (MIT), see
  https://github.com/xutongbao/toast
*/
const styles = require('./index.module.scss');

class Toast {
  constructor(text) {
    console.log(styles);
    let tpl =
      `<div id="m-toast" class=${styles['m-toast']}>
        <div class=${styles['m-toast-inner']}>
          <div class=${styles['m-toast-text']}>
            ${text}
          </div>
        </div>    
        </div>`;
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

module.exports = Toast;