export default function tab() {
  const btnTabs = document.querySelectorAll(".btn-tab");

  if (btnTabs.length) {
    btnTabs.forEach((btn) => {
      btn.addEventListener("click", () => {
        const parentTab = btn.closest(".parent-tab");
        const { tab: tabId } = btn.dataset;
        if (parentTab) {
          const currentButtons = parentTab.querySelectorAll(".btn-tab");
          const tabs = parentTab.querySelectorAll(".tab");
          const currentTab = parentTab.querySelector(`.tab[data-tab=${tabId}]`);

          currentButtons.forEach((b) => b.classList.remove("active"));
          tabs.forEach((t) => t.classList.remove("open"));
          btn.classList.add("active");
          currentTab.classList.add("open");
          // если родителя табов у данной кнопки нету
        } else {
          const currentTab = document.querySelector(`.tab[data-tab=${tabId}]`);
          const tabs = currentTab.closest(".parent-tab").querySelectorAll(".tab");
          const currentButtons = currentTab.closest(".parent-tab").querySelectorAll(".btn-tab");

          currentButtons.forEach((b) => b.classList.remove("active"));
          tabs.forEach((t) => t.classList.remove("open"));
          btn.classList.add("active");
          currentTab.classList.add("open");
        }
      });
    });
  }
}
