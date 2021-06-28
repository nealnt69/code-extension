function clickExtension() {
  const showPaste = sessionStorage.getItem("show-paste");
  if (!showPaste) {
    sessionStorage.setItem("show-paste", true);
    document.body.insertAdjacentHTML(
      "beforeend",
      `
              <div class="wrap-copy-paste">
                  <div id="button-paste">Paste</div>
              </div>
         `
    );
  } else {
    sessionStorage.removeItem("show-paste");
    $(".wrap-copy-paste").hide();
  }
}

chrome.action.onClicked.addListener((tab) => {
  chrome.scripting.executeScript({
    target: { tabId: tab.id },
    function: clickExtension,
  });
});
