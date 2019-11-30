// практика на перебор

document.querySelectorAll('.int-name').forEach(item => {
	item.onfocus = function() {
		item.parentElement.classList.add('focus')
	}
	item.onblur = function() {
		if (item.value.trim() === '') {
			item.parentElement.classList.remove('focus')
		}
	}
})