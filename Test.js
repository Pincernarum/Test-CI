function A1() {
	let result = 0;
	function findOppositeNumber(n, inputNumber) {
		if (inputNumber > n / 2) {
			result = inputNumber - n / 2;
		} else {
			result = inputNumber + n / 2;
		}
		return result;
	}
}
function A2() {
	let result = "";
	function merge2String(x, y) {
		if (x.length > y.length) {
			for (i = 0; i < x.length; i++) {
				if (typeof (y[i]) === "undefined") {
					result += x[i]
				} else {
					result += x[i] + y[i];
				}
			}
		} else {
			for (m = 0; m < y.length; m++) {
				if (typeof (x[m]) === "undefined") {
					result += y[m];
				} else {
					result += x[m] + y[m];
				}
			}
		}
		return result;
	}
}
function B() {
	let luckyNum = Math.floor(Math.random() * 100)
	let button = document.getElementById("button")
	let userInput = 0
	let chances = 3

	button.addEventListener("click", () => {
		chances -= 1
		if(chances == 0) {
			alert("You lost")
			button.disabled = true
		} else {
			userInput = Number(document.getElementById("input").value)
				if(userInput == luckyNum) {
					alert("You won!")
				} else {
					alert("Wrong")
				}
		}
	})
}
B()
