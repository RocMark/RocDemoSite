# RocMarkDemoSite

# 宗旨
初期以jQuery建置，整理實作相關所學，
為了減少對於library的依賴，
以及檢測自身對於JS的理解，
在複習JS的同時，進行網站的重構(以純JS建構)

# 使用技術
- 以 VSCode / Chrome 作為開發環境
- HTML (Pug)
- CSS (Sass) 做檔案管理，與加速開發
- JS / ES6 
- 使用ESLint 遵循AirBnb標準
- 自製 Gulp 自動化流程

# How to Use
VSCode / npm install / Ctrl+Shift+B 啟動編譯即可

# 正在導入觀念表
- 盡可能減少 DOM操作 & 架構 (避免重排/重繪)
- JS High Order Function
- delegation 事件代理
- DocumentFragment 操作 render 文章列表
- 微互動(hint....) & 易用性(label...)

# Module化
- JS Module (Object literal Pattern)
- 待轉成 ES6 Class

# 待優化
目前使用 animate.css 與 JS 配合作動畫，待轉成Pure JS寫法

# 已完成項目

## Main Nav
- Fixed Nav
- 防止跳動

## LocalStorage TODOList
- 資料存入 LocalStorage
- 新增、刪除項目
- 一次性完全清除

## 文章列表渲染 以及 Pagination
- 假JSON資料 (模擬AJAX練習)
- 能設定一次顯示N篇文章
- 上一頁、下一頁按鈕

## ModalBox
- 頂層提示框
- 周圍淡化Filter
- 點擊ModalBox 外關閉

## Side Nav
- 側邊與Main區塊 各自可捲動
- 點擊 Main或按鈕 隱藏

## Back to Top BTN
- 捲動觸發 隱藏顯示
- Smooth Scrolling 回到最上


# 待完成項目

## SlideShow
- [ ] PreView Photo
- [ ] LightBox

## 頁簽
- [ ] 手風琴式摺疊區域
- [ ] 字大小切換

## 圖片放大預覽
- [ ] 圖片放大預覽



## Nav 相關
- [ ] DropDown
- [ ] Collapse
- [x] Sticky(Fixed)
- [ ] Floating Back2Top

## 小功能
- [ ] alertBox
- [ ] toolTips
- [ ] photo caption

## Scroll 相關
- [ ] Smooth Scrolling
- [ ] 浮動Nav 判斷Scroll位置


### SlideShow 輪播特效
- [ ] random
- [ ] 水平輪迴
- [ ] FadeIn FadeOut