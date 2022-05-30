const value = document.querySelector(".value");
const btns = document.querySelectorAll(".btn");
let count = 0;

btns.forEach(function (btn) {
	btn.addEventListener("click", function (e) {
		let target = e.currentTarget.id;
		
		if(target == "decreas") {
			count--;
		}else if(target == "increase") {
			count++;
		}else {
			count = 0;
		}

		if(count > 0) {
			value.style.color = "green";
		}
		if(count < 0) {
			value.style.color = "red";
		}
		if (count == 0) {
			value.style.color = "#222";
		}

		value.innerText = count;
	})
})