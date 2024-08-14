// ==UserScript==
// @name         禁漫天堂-快速切換上下話與頁面
// @name:zh-TW   禁漫天堂-快速切換上下話與頁面
// @name:zh-CN   禁漫天堂-快速切换上下话与页面
// @namespace    https://github.com/jmsch23280866
// @version      0.1
// @description        使用 Shift + ([←] 或 [A]) 切換上一話，Shift + ([→] 或 [D]) 切換下一話。使用 [←] 或 [A] 切換上一頁，使用 [→] 或 [D] 切換下一頁。(此腳本由ChatGPT協助撰寫)
// @description:zh-TW  使用 Shift + ([←] 或 [A]) 切換上一話，Shift + ([→] 或 [D]) 切換下一話。使用 [←] 或 [A] 切換上一頁，使用 [→] 或 [D] 切換下一頁。(此腳本由ChatGPT協助撰寫)
// @description:zh-CN  使用 Shift + ([←] 或 [A]) 切换上一话，Shift + ([→] 或 [D]) 切换下一话。使用 [←] 或 [A] 切换上一页，使用 [→] 或 [D] 切换下一页。(此脚本由ChatGPT协助撰写)
// @author       特務E04
// @match        *://18comic.vip/photo/*
// @match        *://18comic.org/photo/*
// @match        *://jmcomic.me/photo/*
// @match        *://jmcomic1.me/photo/*
// @match        *://18comic.*/photo/*
// @match        *://18comic*.*/photo/*
// @match        *://jmcomic.*/photo/*
// @match        *://jmcomic*.*/photo/*
// @match        *://jm-comic*.*/photo/*
// @grant        none
// @noframes
// @supportURL   https://github.com/jmsch23280866/18comic-JMcomic-Change-Chapter-and-Page/issues
// @license      MIT
// ==/UserScript==

// 此腳本靈感取自https://greasyfork.org/scripts/453029

(function() {
    'use strict';

    // 快取常用的元素選擇器
    const prevChapterBtn = document.querySelector('.fa-angle-double-left.fa');
    const nextChapterBtn = document.querySelector('.fa-angle-double-right.fa');
    const albumListBtn = document.querySelector('.fa-list-alt.far');

    // 事件處理函數
    const handleKeyDown = (e) => {
        e = e || window.event;

        let actionTaken = false;

        // 判斷是否切換上一話與下一話
        if (e.shiftKey && (e.key === 'ArrowRight' || e.key.toLowerCase() === 'd')) {
            nextChapterBtn?.click();
            actionTaken = true;
        } else if (e.shiftKey && (e.key === 'ArrowLeft' || e.key.toLowerCase() === 'a')) {
            prevChapterBtn?.click();
            actionTaken = true;
        }
        // 返回漫畫簡介
        else if (e.key === 'Escape') {
            albumListBtn?.click();
            actionTaken = true;
        }

        if (actionTaken) {
            e.preventDefault();
        }
    };

    // 實現上下頁切換
    const handlePageSwitch = (event) => {
        if (event.key === 'A' || event.key === 'ArrowLeft' || event.key.toLowerCase() === 'a') {
            document.querySelector("#wrapper > div:nth-child(24) > div:nth-child(3) > div > div > div.panel-body > div > div > div.owl-nav > button.owl-prev").click();
        } else if (event.key === 'D' || event.key === 'ArrowRight' || event.key.toLowerCase() === 'd') {
            document.querySelector("#wrapper > div:nth-child(24) > div:nth-child(3) > div > div > div.panel-body > div > div > div.owl-nav > button.owl-next").click();
        }
    };

    // 綁定鍵盤事件
    document.addEventListener('keydown', handleKeyDown);
    document.addEventListener('keydown', handlePageSwitch);

})();