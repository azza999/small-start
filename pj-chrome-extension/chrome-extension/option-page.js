const ver2hor = document.getElementById('ver2hor');
const hor2ver = document.getElementById('hor2ver');
const floatOption = document.getElementById('float-option');

// Add a button to the page for each supplied color
function constructOptions() {
	/*
	chrome.storage.sync.get("color", (data) => {
		let currentColor = data.color;

		// For each color we were provided…
		for (let buttonColor of buttonColors) {
			// …crate a button with that color…
			let button = document.createElement("button");
			button.dataset.color = buttonColor;
			button.style.backgroundColor = buttonColor;

			// …mark the currently selected color…
			if (buttonColor === currentColor) {
				button.classList.add(selectedClassName);
			}

			// …and register a listener for when that button is clicked
			button.addEventListener("click", handleButtonClick);
			page.appendChild(button);
		}
	});
	*/

	chrome.storage.sync.get("ver2horState", (data) => {
		console.log(data)
		let ver2horState = data.ver2horState
		ver2hor.checked = ver2horState
		ver2hor.addEventListener("click", e=>{
			console.log(e)
			ver2horState = ver2hor.checked
			chrome.storage.sync.set({ ver2horState })
		})
	})

	chrome.storage.sync.get("hor2verState", (data) => {
		let hor2verState = data.hor2verState
		hor2ver.checked = hor2verState
		hor2ver.addEventListener("click", e=>{
			hor2verState = hor2ver.checked
			chrome.storage.sync.set({ hor2verState })
		})
	})

	chrome.storage.sync.get("floatOptionState", (data) => {
		let floatOptionState = data.floatOptionState
		floatOption.checked = floatOptionState
		floatOption.addEventListener("click", e=>{
			floatOptionState = floatOption.checked
			chrome.storage.sync.set({ floatOptionState })
		})
	})
}

// Initialize the page by constructing the color options
constructOptions();