const am_el = document.getElementById("am")
function setAdBlockedAmount(am) {
	am_el.innerHTML = "Ads Blocked: "+am
}
window.addEventListener('DOMContentLoaded', () => {
  chrome.tabs.query({
    active: true,
    currentWindow: true
  }, tabs => {
    chrome.tabs.sendMessage(
        tabs[0].id,
        {from: 'popup', subject: 'ad_am'},
        setAdBlockedAmount)
  })
})