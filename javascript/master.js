let	nameUser
let commandHeader
let commandBox
console.log(nameUser)
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
	
    nameUser = document.getElementById('enterButton').value


	document.getElementById('userName').innerHTML = nameUser
	document.getElementById('commandButton').focus()
	document.getElementById('commandButton').onblur = function (event) { 
		let blurEl = this; 
			setTimeout(function() {
			    blurEl.focus()
			}, 10);
		};
    // let commandBox = `<span class="commandHeader"><span id="userName">${nameUser}</span><span style="color: #ff5680; font-weight: bold;">@</span><span style="color:#d57bff ;">Shreyans</span>:/PORTFOLIO$ -> </span><input id="commandButton" type="text" name="command" autocomplete="false" placeholder="Enter command" onkeyup="caller(event)"><div class="output"></div>`
	commandHeader = `<span class="commandHeader"><span id="userName">${nameUser}</span><span style="color: #ff5680; font-weight: bold;">@</span><span style="color:#d57bff ;">Shreyans</span>:/PORTFOLIO$ `
// let commandDirectory = `/<span></span>`

	input = `-> </span></span><input id="commandButton" type="text" name="command" autocomplete="false" placeholder="Enter command" onkeyup="caller(event)"><div class="output"></div>`

	commandBox = commandHeader + input
console.log(commandBox);

})

function onblur (event) { 
	let blurEl = this; 
	setTimeout(function() {
	    blurEl.focus()
	}, 10);
};

// // let commandBox = `<span class="commandHeader"><span id="userName">${nameUser}</span><span style="color: #ff5680; font-weight: bold;">@</span><span style="color:#d57bff ;">Shreyans</span>:/PORTFOLIO$ -> </span><input id="commandButton" type="text" name="command" autocomplete="false" placeholder="Enter command" onkeyup="caller(event)"><div class="output"></div>`
// let commandHeader = `
// <span class="commandHeader">
// 	<span id="userName">${nameUser}</span>
// 	<span style="color: #ff5680; font-weight: bold;">@</span><span style="color:#d57bff ;">Shreyans</span>:/PORTFOLIO$ `
// // let commandDirectory = `/<span></span>`

// let input = `-> </span></span><input id="commandButton" type="text" name="command" autocomplete="false" placeholder="Enter command" onkeyup="caller(event)"><div class="output"></div>`

// let commandBox = commandHeader + input
console.log(commandBox);
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

let iC = false
let iP = false
let iPW = false
let cdCommand = (command, output) => {
	if (command.split(' ')[1] == 'BIO'){
		output.innerHTML = `<p class="bio">
				<span style='font-weight: bold; color: #f600f6'> Shreyans Jain </span> | Shreyans13 <br>
				I am a student at <span style='color: #ffa500'>Chandigarh University</span> pursuing <span style='color: #4d4dff'>Bachelor of Technology</span> in Computer Science in Engineering.
				I <span style='color: #ff1a1a'>love coding</span> and i am <span style='color: #ff3333'>passionate</span> to learn <span 'style: color:#00ff9c'>new</span> things. 
				I also take part in various <span style='color: #00ccff'>coding competitions</span> and <span style='color: #00ccff'>hackathons.</span>
				<br>
				I may not be able to solve <strike>all</strike> <span style='color: #ffff4d'>some</span> of your problems.
			</p> ${commandBox}`
		} else if (command.split(' ')[1] == 'CERTIFICATES'){
			commandBox = commandHeader + `<span>/Certificates/</span>` + input 
			iC = true
			output.innerHTML = `${commandBox}`
		} else if (command.split(' ')[1] == 'SKILLS') {
			output.innerHTML = `<div class="skills" >
			<table >
				<tr>
					<th>HTML5</th>
					<td>
						<div class='progress'>
							<div class="progress-bar" style="width: 80%; background-color: #f2d32C;">
							</div>
						</div>
					</td>
				</tr>
				<tr>
					<th>CSS (SASS/SCSS)</th>
					<td>
						<div class='progress'>
							<div class="progress-bar" style="width: 75%; background-color: #f2d31b;">
							</div>
						</div>
					</td>
				</tr>
				<tr>
					<th>Javascript</th>
					<td>
						<div class='progress'>
							<div class="progress-bar" style="width: 85%; background-color: #86e01e;">
							</div>
						</div>
					</td>
				</tr>
			</table>
			</div> ${commandBox}`
		} else if (command.split(' ')[1] == 'PROJECTS') {
			commandBox = commandHeader + '<span>/Projects/</span>' + input
			iP = true
			output.innerHTML = `${commandBox}`
		} else if (command.split(' ')[1] == 'PROJECTSINWORK') {
			commandBox = commandHeader + '<span>/ProjectsInWork/</span>' + input
			iPW = true
			output.innerHTML = `${commandBox}`
		} else if (command.split(' ')[1] == '..') {
			commandBox = commandHeader + input 
			iC = false
			iP = false
			iPW = false
			output.innerHTML = `${commandBox}`
		} else if (command.split(' ')[1] == 'CONTACT') {
			output.innerHTML = `<div class='contact'>Like my Work ? Get in touch ?<br>
			<a href='' style='margin: 50px'><img src="./svg icons/github.svg"></a>
			<a href='' style='margin: 50px'><img src="./svg icons/linkedin.svg"></a><br>
			</div>
			${commandBox}`
		} else if (command.split(' ')[1] == 'SENDAMESSAGE') {
			output.innerHTML = `${commandBox}`
		} else {
			output.innerHTML = `<p class="error">-portfolio: Directory: not found </p> ${commandBox}`	
		}
}
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

		command = command.replace(/\s+/g, " ").trim().toUpperCase();
		console.log(command)
		if (command.split(' ')[0] == 'CD') {
			cdCommand(command, output)
			// if (command.split(' ')[1] == 'BIO'){
				// 	output.innerHTML = `<p class="bio">
				// 		<span style='font-weight: bold; color: #f600f6'> Shreyans Jain </span> | Shreyans13 <br>
				// 		I am a student at <span style='color: #ffa500'>Chandigarh University</span> pursuing <span style='color: #4d4dff'>Bachelor of Technology</span> in Computer Science in Engineering.
				// 		I <span style='color: #ff1a1a'>love coding</span> and i am <span style='color: #ff3333'>passionate</span> to learn <span 'style: color:#00ff9c'>new</span> things. 
				// 		I also take part in various <span style='color: #00ccff'>coding competitions</span> and <span style='color: #00ccff'>hackathons.</span>
				// 		<br>
				// 		I may not be able to solve <strike>all</strike> <span style='color: #ffff4d'>some</span> of your problems.
				// 	</p> ${commandBox}`
				// } else if (command.split(' ')[1] == 'CERTIFICATES'){
				// 	commandBox = commandHeader + `<span>/Certificates/</span>` + input 
				// 	iC = true
				// 	output.innerHTML = `${commandBox}`
				// } else if (command.split(' ')[1] == 'SKILLS') {

				// }else if (command.split(' ')[1] == '..'){
				// 	commandBox = commandHeader + input 
				// 	iC = false
				// 	output.innerHTML = `${commandBox}`
				// }
				// else {
				// 	output.innerHTML = `<p class="error">-portfolio: Directory: not found </p> ${commandBox}`	
				// }
		} else if (command == 'LS' || command == 'DIR') {
			console.log(iC);
			if (iC) {
				output.innerHTML = `
					<div class='certificates'>
						<div class='' style='border: 3px solid white; padding: 20px;'>
							<h3>The Web Developer Bootcamp by Udemy</h3>
							<p>Issued May 2020</p>
							<a href="">Verify Credential</a>
						</div>
						<div class='' style='border: 3px solid white; padding: 20px;'>	
							<h3>Version Control with Git by Coursera</h3>
							<p>Issued May 2020</p>
							<a href="">Verify Credential</a>
						</div>
						<div class='' style='border: 3px solid white; padding: 20px;'>
							<h3>Server Side Development using Node Js and MongoDB</h3>
							<p>In Progress</p>
						</div>
					</div>

				${commandBox}`
				// window.scrollTo(0,document.body.scrollHeight);
				// return
			} else if (iP) { 
				output.innerHTML = `
				<div class='projects'>
					<div class='' style='border: 3px solid white; padding: 20px;'>
						<h3>Command Line Portfolio</h3>
						<a href="">GitHub Repo</a>
						<p> Deployed at <a href=''>GitHub Pages</a>
					</div>
					<div class='' style='border: 3px solid white; padding: 20px;'>
						<h3>Command Line Portfolio</h3>
						<a href="">GitHub Repo</a>
						<p> Deployed at <a href=''>GitHub Pages</a>
					</div>
					<div class='' style='border: 3px solid white; padding: 20px;'>
						<h3>Command Line Portfolio</h3>
						<a href="">GitHub Repo</a>
						<p> Deployed at <a href=''>GitHub Pages</a>
					</div>
				</div>
				${commandBox}
				`
			} else if (iPW) {
				output.innerHTML = `
				<p class='ls'>
					Besides learning new things I am presently working on the website for <span style='color: #ffa500'>Applied Engineering & Services</span>.
					Its a local company focusing on sanitizing and services.
					Technologies used in this project is <span style='color: #ffa500'>NODE JS</span> for backend and <span style='color: #ffa500'>BOOTSTRAP4</span> for frontend with an hidden dashboard.
				</p>${commandBox}
				`	
			} else {
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
			}
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
				<p>REFRESH - To refresh the page</p>
			</div>
			</p> ${commandBox}`
		} else if (command == 'REFRESH'){
			location.reload()
		} else if (command == 'CLS' || command == 'CLEARSCREEN') {
			document.querySelector('.commandLine').innerHTML = `${commandBox}`
		}
		else {
			output.innerHTML = `<p class="error">-portfolio: COMMAND: not found </p> ${commandBox}`
			
			// addName()
		}
		// window.scrollTo(0,document.body.scrollHeight);
		let btn = document.querySelectorAll('#commandButton')
		btn = btn[btn.length-1]
		btn.focus()
		console.log(btn)
	}
	window.scrollTo(0,document.body.scrollHeight);

}