// 找到按鈕元素
const darkBtn = document.getElementById("darkToggle");

// 監聽點擊事件
darkBtn.addEventListener("click", function() {

  // 切換 body 的 dark class
  document.body.classList.toggle("dark");

  // 更新按鈕文字
  if (document.body.classList.contains("dark")) {
    darkBtn.textContent = "☀️ 淺色模式";
  } else {
    darkBtn.textContent = "🌙 深色模式";
  }

});
// 找到所有卡片元素
const cards = document.querySelectorAll(".card");

// 對每一張卡片都加上事件監聽
cards.forEach(function(card) {
  // 找到所有技能標籤與訊息元素
  const skillTags = card.querySelectorAll(".skill-tag");
  const skillMsg = card.querySelector(".skill-msg");

  // 幫每一個標籤都加上點擊事件
  skillTags.forEach(function(tag) {

    tag.addEventListener("click", function() {

      // 先移除所有標籤的 active class
      skillTags.forEach(function(t) {
        t.classList.remove("active");
      });

      // 幫被點擊的標籤加上 active class
      tag.classList.add("active");

      // 顯示提示訊息
      skillMsg.textContent = "對「" + tag.textContent + "」有興趣！";

    });
  });
});
