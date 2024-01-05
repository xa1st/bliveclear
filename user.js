// ==UserScript==
// @name         哔哩哔哩(B站|Bilibili)全屏直播净化
// @namespace    https://github.com/afyi/bliveclear
// @version      1.2.3
// @description  去掉B站(live.bilibili.com)网页全屏或者全屏时出现的讨厌的打赏工具栏的小工具
// @author       猫东东 <blog.del.pub>
// @match        *://live.bilibili.com/*
// @website      https://greasyfork.org/zh-CN/scripts/483878-b%E7%AB%99%E7%9B%B4%E6%92%AD%E5%85%A8%E5%B1%8F%E6%97%B6%E5%B7%A5%E5%85%B7%E6%A0%8F%E6%B8%85%E7%90%86
// @icon         data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBzdGFuZGFsb25lPSJubyI/PjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+PHN2ZyB0PSIxNzA0Mzg5MzgyMzQyIiBjbGFzcz0iaWNvbiIgdmlld0JveD0iMCAwIDExMjkgMTAyNCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHAtaWQ9IjQyMzIiIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB3aWR0aD0iMjIwLjUwNzgxMjUiIGhlaWdodD0iMjAwIj48cGF0aCBkPSJNMjM0LjkwOSA5LjY1NmE4MC40NjggODAuNDY4IDAgMCAxIDY4LjM5OCAwIDE2Ny4zNzQgMTY3LjM3NCAwIDAgMSA0MS44NDMgMzAuNTc4bDE2MC45MzcgMTQwLjgyaDExNS4wN2wxNjAuOTM2LTE0MC44MmExNjguOTgzIDE2OC45ODMgMCAwIDEgNDEuODQzLTMwLjU3OEE4MC40NjggODAuNDY4IDAgMCAxIDkzMC45NiA3Ni40NDVhODAuNDY4IDgwLjQ2OCAwIDAgMS0xNy43MDMgNTMuOTE0IDQ0OS44MTggNDQ5LjgxOCAwIDAgMS0zNS40MDYgMzIuMTg3IDIzMi41NTMgMjMyLjU1MyAwIDAgMS0yMi41MzEgMTguNTA4aDEwMC41ODVhMTcwLjU5MyAxNzAuNTkzIDAgMCAxIDExOC4yODkgNTMuMTA5IDE3MS4zOTcgMTcxLjM5NyAwIDAgMSA1My45MTQgMTE4LjI4OHY0NjIuNjkzYTMyNS44OTcgMzI1Ljg5NyAwIDAgMS00LjAyNCA3MC4wMDcgMTc4LjY0IDE3OC42NCAwIDAgMS04MC40NjggMTEyLjY1NiAxNzMuMDA3IDE3My4wMDcgMCAwIDEtOTIuNTM5IDI1Ljc1aC03MzguN2EzNDEuMTg2IDM0MS4xODYgMCAwIDEtNzIuNDIxLTQuMDI0QTE3Ny44MzUgMTc3LjgzNSAwIDAgMSAyOC45MSA5MzkuMDY1YTE3Mi4yMDIgMTcyLjIwMiAwIDAgMS0yNy4zNi05Mi41MzlWMzg4LjY2MmEzNjAuNDk4IDM2MC40OTggMCAwIDEgMC02Ni43ODlBMTc3LjAzIDE3Ny4wMyAwIDAgMSAxNjIuNDg3IDE3OC42NGgxMDUuNDE0Yy0xNi44OTktMTIuMDctMzEuMzgzLTI2LjU1NS00Ni42NzItMzkuNDNhODAuNDY4IDgwLjQ2OCAwIDAgMS0yNS43NS02NS45ODQgODAuNDY4IDgwLjQ2OCAwIDAgMSAzOS40My02My41N00yMTYuNCAzMjEuODczYTgwLjQ2OCA4MC40NjggMCAwIDAtNjMuNTcgNTcuOTM3IDEwOC42MzIgMTA4LjYzMiAwIDAgMCAwIDMwLjU3OHYzODAuNjE1YTgwLjQ2OCA4MC40NjggMCAwIDAgNTUuNTIzIDgwLjQ2OSAxMDYuMjE4IDEwNi4yMTggMCAwIDAgMzQuNjAxIDUuNjMyaDY1NC4yMDhhODAuNDY4IDgwLjQ2OCAwIDAgMCA3Ni40NDQtNDcuNDc2IDExMi42NTYgMTEyLjY1NiAwIDAgMCA4LjA0Ny01My4xMDl2LTM1NC4wNmExMzUuMTg3IDEzNS4xODcgMCAwIDAgMC0zOC42MjUgODAuNDY4IDgwLjQ2OCAwIDAgMC01Mi4zMDQtNTQuNzE5IDEyOS41NTQgMTI5LjU1NCAwIDAgMC00OS44OS03LjI0MkgyNTQuMjJhMjY4Ljc2NCAyNjguNzY0IDAgMCAwLTM3LjgyIDB6IG0wIDAiIGZpbGw9IiMyMEIwRTMiIHAtaWQ9IjQyMzMiPjwvcGF0aD48cGF0aCBkPSJNMzQ4LjM2OSA0NDcuNDA0YTgwLjQ2OCA4MC40NjggMCAwIDEgNTUuNTIzIDE4LjUwNyA4MC40NjggODAuNDY4IDAgMCAxIDI4LjE2NCA1OS41NDd2ODAuNDY4YTgwLjQ2OCA4MC40NjggMCAwIDEtMTYuMDk0IDUxLjUgODAuNDY4IDgwLjQ2OCAwIDAgMS0xMzEuOTY4LTkuNjU2IDEwNC42MDkgMTA0LjYwOSAwIDAgMS0xMC40Ni01NC43MTl2LTgwLjQ2OGE4MC40NjggODAuNDY4IDAgMCAxIDcwLjAwNy02Ny41OTN6IG00MTYuMDIgMGE4MC40NjggODAuNDY4IDAgMCAxIDg2LjEwMiA3NS42NHY4MC40NjhhOTQuMTQ4IDk0LjE0OCAwIDAgMS0xMi4wNyA1My4xMSA4MC40NjggODAuNDY4IDAgMCAxLTEzMi43NzMgMCA5NS43NTcgOTUuNzU3IDAgMCAxLTEyLjg3NS01Ny4xMzNWNTE5LjAyYTgwLjQ2OCA4MC40NjggMCAwIDEgNzAuMDA3LTcwLjgxMnogbTAgMCIgZmlsbD0iIzIwQjBFMyIgcC1pZD0iNDIzNCI+PC9wYXRoPjwvc3ZnPg==
// @grant        none
// @license      MIT
// ==/UserScript==

(function() {
    'use strict';

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
        // 配置观察选项
        const config = { attributes: true };
        // 开始观察目标节点（body）及其子节点的变动
        observer.observe(document.querySelector('body'), config);
    }
})();
