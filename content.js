
let ads = 0
function hideAds() {
	Array.prototype.forEach.call(document.getElementsByClassName("_2oEYZXchPfHwcf9mTMGMg8"), el=>{
		let p_el = el.parentElement.parentElement.parentElement.parentElement
		if (p_el.style.display != "none") {
			p_el.style.display = "none"
			ads++
		}
	})
}
setInterval(()=>{hideAds()}, 1000);

chrome.runtime.sendMessage({
	from: 'content',
	subject: 'showPageAction',
});

chrome.runtime.onMessage.addListener((msg, sender, response) => {
	if ((msg.from === 'popup') && (msg.subject === 'ad_am')) {
		response(ads)
	}
});
