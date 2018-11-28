/*!
  Copyright (c) 2018 Xu Tongbao
  Licensed under the MIT License (MIT), see
  https://github.com/xutongbao/toast
*/
/* global define */

class Toast {
    constructor(text) {
        let tpl =
            `<div id="m-toast" style="display:none; position: fixed; width: 100%;top: 0;bottom: 0;right: 0;overflow: auto;text-align: center;">
                <div style="position: absolute;left:50%;top:50%;width: 100%; transform:translate(-50%,-50%);-webkit-transform:translate(-50%,-50%);text-align: center;">
                  <div style="display: inline-block;margin: 0 22px; padding: 19px 21px;font-size: 16px;color: #FFFFFF;letter-spacing: 0;line-height: 22px;background: rgba(0,0,0,0.72);border-radius: 10px;">
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

if (typeof module !== 'undefined' && module.exports) {
    Toast.default = Toast;
    module.exports = Toast;
} else if (typeof define === 'function' && typeof define.amd === 'object' && define.amd) {
    define('toast', [], function() {
        return Toast;
    });
} else {
    window.Toast = Toast;
}