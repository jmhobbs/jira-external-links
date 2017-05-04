document.addEventListener('click', function(event) {
  if(event.target.classList.contains("external-link") || event.target.classList.contains("pullrequest-link")) {
    event.preventDefault();
    chrome.runtime.sendMessage({url: event.target.href}, function () {});
  }
});
