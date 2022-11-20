"use strict";

$(function () {
 /*---------- ハンバーガーメニュー ----------*/
const hamburger = $(".js_hamburger"); //ハンバーガーメニューのセレクタを代入
const navigation = $(".js_navigation"); //ナビゲーションのセレクタを代入

hamburger.on("click", function () { //ハンバーガーメニューをクリックした時
  $(this).toggleClass("is_active"); //クリックしたハンバーガーメニューを変形
  navigation.toggleClass("is_active"); //ナビゲーションの出現・消失
  $(".js_body").toggleClass("is_active"); //スクロールを固定する
});

});
