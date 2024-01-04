// ==UserScript==
// @name         B站直播全屏时工具栏清理
// @namespace    https://github.com/afyi/bliveclear
// @version      2024-01-04
// @description  close bilibili live player under tool
// @author       猫东东 <blog.del.pub>
// @match        *://live.bilibili.com/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=bilibili.com
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    // Your code here...
    // web-player__bottom-bar__container
    if (/live.bilibili.com/.test(location.host)) {
        console.log("B站直播全屏时工具栏清理");
        const observer = new MutationObserver((mutationsList) => {
            for (let mutation of mutationsList) {
                if (mutation.type === 'attributes' && mutation.attributeName === 'class') {
                    // console.log('body类名发生了改变');
                    // 这里可以添加处理逻辑
                    let classList = Object.values(document.querySelector('body').classList);
                    // 查看一下对应的值
                    // console.log(typeof classList, classList);
                    // 判定是否有播放器全屏的样式
                    if (classList.includes("player-full-win") || classList.includes("fullscreen-fix")) {
                        document.getElementById("web-player__bottom-bar__container").style = "display:none; width: 0;";
                    } else {
                        document.getElementById("web-player__bottom-bar__container").style = "display:block; width:100%;";
                    }
                }
            }
        });
        // 开始观察目标节点（body）及其子节点的变动
        observer.observe(document.querySelector('body'), { attributes: true });
    }
})();
