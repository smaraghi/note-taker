document.addEventListener("DOMContentLoaded", init)

function init() {
	let submitButton = document.querySelector('button')

	submitButton.addEventListener('click', e => {
		e.preventDefault()
		let note = e.target.parentElement.children[0].value
		let color = e.target.parentElement.children[2].value
		createNote(note, color)
	})
}

function createNote(note, color){
	let noteList = document.getElementById('note-list')
	
	let noteLi = document.createElement('li')
	let delBtn = document.createElement('button')

	noteLi.innerText = note 
	delBtn.innerText = 'Delete'
	
	noteLi.classList.add('note', color)
	delBtn.setAttribute('id', 'del-btn')
	
	noteList.appendChild(noteLi)
	noteLi.appendChild(delBtn)

	delBtn.addEventListener('click', () => noteLi.remove())
}






