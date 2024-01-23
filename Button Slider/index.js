const container = document.querySelector('.container')
const btns = document.querySelectorAll('.btn')
const imgList = ["1", "2", "3", "4"]

let index = 1

btns.forEach((button) => {
	button.addEventListener("click", () => {
		console.log(imgList.length)
		if (button.classList.contains('btn-prev')) {
			index--;
			if (index < 1) {
				index = imgList.length 
			}
			// container.style.background = `url(${imgList[index]}.jpg)`
			container.style.background=` url(${[index]}.jpg)`
			

		} else {

			index++;
			if (index> imgList.length) {
				index = 1
			}
			container.style.background = `url(${[index]}.jpg)`

		}
	})
})