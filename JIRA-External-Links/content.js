document.addEventListener('click', function(event) {
  if(event.target.classList.contains("external-link") || event.target.classList.contains("pullrequest-link")) {
    try {
      chrome.runtime.sendMessage({url: event.target.href}, function () {});
      event.preventDefault();
    }
    catch(err) {
      console.log(err);
    }
  }
});
