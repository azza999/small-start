const applyBtn = document.getElementById('apply');
let status = null;

function applyOption() {
	// 영화관모드인지, 일반 모드인지 체크
	let isTheaterMode = document.querySelector('#player-theater-container').childElementCount

	// 동영상 형태 확인 (가로세로)
	let video = document.querySelector('video')
	let rect = video.getClientRects()[0]
	
	let videoShape = rect.height > rect.width ? 'ver' : 'hor';

	document.body.append(videoShape)

	// 일반 모드일때
	if ( !isTheaterMode ) {

		if (videoShape === 'hor') {

			let left = video.offsetHeight + (video.offsetWidth - video.offsetHeight) / 2

			document.querySelectorAll('#player')[1].style.height = video.offsetWidth + 'px'
			document.getElementById('player-container').style.height = video.offsetWidth + 'px'

			video.style.transformOrigin = "left top";
			video.style.transform = `rotateZ(90deg) translate(0, -${left}px)`;
			console.log(`rotateZ(90deg) translate(0, -${left}px)`)

			try {
				document.querySelector('.ytp-tooltip').style.transform = `translate(200px, 0)`
			} catch (e) {}
		}
	}

}

async function applyTab() {
	let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
	chrome.scripting.executeScript({
		target: { tabId: tab.id },
		function: applyOption
	})
}

applyBtn.addEventListener("click", applyTab)

chrome.storage.sync.get(["ver2horState", "hor2verState", "floatOptionState"], (data) => {
	
	// 디버깅
	document.body.append(JSON.stringify(data))
	status = data

	// 최초 1회 실행
	applyTab()
})