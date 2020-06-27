let	nameUser = document.getElementById('enterButton').value
document.getElementById('enterButton').addEventListener('keyup', () => {
	if (event.keyCode === 13) {
		// event.preventDefault();
		// console.log('entered')
		let parent = document.querySelectorAll('#parent')
		document.querySelector('.animation').style.display = 'block'
		// console.log(parent)
		let counter = 1
		for(let i = 0 ; i < parent.length ; i++ ){
			parent[i].style.animation = 'animated-text 1s steps(30,end) 1s 1 normal both'
			parent[i].style.animationDelay = counter+ 's'
			counter = counter + 2
			// console.log('Fuction running')
		}
		// console.log('Before')
		// prompt("this is alert")
		// console.log('After')	
		setTimeout(()=>{
			document.querySelector('.animation').style.display = 'none';
			document.querySelector('.nameEntry').style.display = 'none';
			document.querySelector('.commandLine').style.display = 'block';
		}, 13000);
	}
	// console.log(document.getElementById('enterButton').value)
	document.getElementById('userName').innerHTML = nameUser
	document.getElementById('commandButton').focus()
	document.getElementById('commandButton').onblur = function (event) { 
		let blurEl = this; 
			setTimeout(function() {
			    blurEl.focus()
			}, 10);
		};
})
let commandBox = `<span class="commandHeader"><span id="userName">${nameUser}</span><span style="color: #ff5680; font-weight: bold;">@</span><span style="color:#d57bff ;">Shreyans</span>:/PORTFOLIO$ -> </span><input id="commandButton" type="text" name="command" autocomplete="false" placeholder="Enter command" onkeyup="caller(event)"><div class="output"></div>`

// let button = document.querySelectorAll('#commandButton')
// for(let i = 0 ; i < button.length ; i++) {
// 	button[i].addEventListener('keyup', () => {
// 		if(event.keyCode === 13) {
// 			// let ele = document.getElementById('commandButton')
// 			document.getElementById('commandButton').disabled = 'true'
// 			let command = document.getElementById('commandButton').value
// 			console.log(command)
// 			command = command.toUpperCase()
// 			if (command == 'ERROR') {
// 				let output = document.querySelectorAll('.output')[document.querySelectorAll('.output').length -1]
// 				console.log(output)
// 				output.innerHTML = `<p class="error">-portfolio: ${output.value}: not found </p> ${commandBox}`
// 			}
// 		}
// 	})
// }

// let addName = () => {
// 	// document.getElementById('userName').innerHTML = document.getElementById('enterButton').value
// 	console.log(document.querySelectorAll('#username'))

// 	// console.log(document.querySelectorAll('#username')[document.querySelectorAll('#username').length -1 ].innerHTML)
// 	// document.querySelectorAll('#username')[document.querySelectorAll('#username').length -1 ].innerHTML = document.getElementById('enterButton').value
// }		
let caller = (event) => {
	if(event.keyCode === 13) {
		// let ele = document.getElementById('commandButton')
		

		let cb = document.querySelectorAll('#commandButton')
		cb[cb.length-1].disabled = true

		// document.getElementById('commandButton').disabled = 'true'
		
		let command = document.querySelectorAll('#commandButton')
		command = command[command.length-1].value
		console.log(command)


		let output = document.querySelectorAll('.output')[document.querySelectorAll('.output').length -1]
		console.log(output)

		command = command.toUpperCase()
		if (command == 'CD BIO') {
			output.innerHTML = `<p class="bio">
				<span style='font-weight: bold;'> Shreyans Jain </span> | Shreyans13 <br>
				I am a student at Chandigarh University pursuing Bachelor of Technology in Computer Science in Engineering.
				I love coding and i am passionate to learn new things. I also take part in various coding competitions and hackathons.
				<br>
				I may not be able to solve <strike>all</strike> some of your problems.
			</p> ${commandBox}`
		} else if (command == 'LS' || command == 'DIR') {
			output.innerHTML = `<p class="ls">
			<div style="color: #fffc58; padding-left: 45px; line-height: normal;">
				<p>bio</p>
				<p>/certificates</p>
				<p>skills</p>
				<p>/projects</p>
				<p>/projectsInWork</p>
				<p>/otherLinks</p>
				<p>contact</p>
			</div>

			</p> ${commandBox}`
		} else if (command == 'HELP' || command == 'INFO') {
			output.innerHTML = `<p class="ls">
			<span style="font-weight: bold;">PORTFOLIO POWERSHELL HELP SYSTEM</span><br> 
				<span style='padding-left: 35px'>Displays help about Portfolio Powershell cmdlets</span>
			<br>
			<br>
			These commands are defined internally.
			<div style="color: #fffc58; padding-left: 45px; line-height: normal;">
				<p>HELP - To open powershell help system</p>
				<p>INFO - To open powershell help system</p>
				<p>DIR - To view all folders and files in the directory</p> 
				<p>LS - To view all folders and files in the directory</p>
				<p>CD - To change the current directory</p>
			</div>
			</p> ${commandBox}`
		}
		else {
			output.innerHTML = `<p class="error">-portfolio: COMMAND: not found </p> ${commandBox}`
			
			// addName()
		}
		window.scrollTo(0,document.body.scrollHeight);
	}
}