let	nameUser
let commandHeader
let commandBox
document.getElementById('enterButton').addEventListener('keyup', () => {
	if (event.keyCode === 13) {
		document.getElementById('enterButton').disabled = true
		// event.preventDefault();
		let parent = document.querySelectorAll('#parent')
		document.querySelector('.animation').style.display = 'block'
		let counter = 1
		for(let i = 0 ; i < parent.length ; i++ ){
			parent[i].style.animation = 'animated-text 1s steps(30,end) 1s 1 normal both'
			parent[i].style.animationDelay = counter+ 's'
			counter = counter + 2
		}
		setTimeout(()=>{
			document.querySelector('.animation').style.display = 'none';
			document.querySelector('.nameEntry').style.display = 'none';
			document.querySelector('.commandLine').style.display = 'block';
		}, 13000);
	}
	
    nameUser = document.getElementById('enterButton').value


	document.getElementById('userName').innerHTML = nameUser
	document.getElementById('commandButton').focus()
	document.getElementById('commandButton').onblur = function (event) { 
		let blurEl = this; 
			setTimeout(function() {
			    blurEl.focus()
			}, 10);
		};
	commandHeader = `<span class="commandHeader"><span id="userName">${nameUser}</span><span style="color: #ff5680; font-weight: bold;">@</span><span style="color:#d57bff ;">Shreyans</span>:/PORTFOLIO$ `

	input = `-> </span></span><input id="commandButton" type="text" name="command" autocomplete="false" placeholder="Enter command" onkeyup="caller(event)"><div class="output"></div>`

	commandBox = commandHeader + input

})

function onblur (event) { 
	let blurEl = this; 
	setTimeout(function() {
	    blurEl.focus()
	}, 10);
};

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
				<tr>
					<th>Node Js</th>
					<td>
						<div class='progress'>
							<div class="progress-bar" style="width: 85%; background-color: #86e01e;">
							</div>
						</div>
					</td>
				</tr>
				<tr>
					<th>C++ (STLs)</th>
					<td>
						<div class='progress'>
							<div class="progress-bar" style="width: 75%; background-color: #f2d31b;">
							</div>
						</div>
					</td>
				</tr>
				<tr>
					<th>Vue Js</th>
					<td>
						<div class='progress'>
							<div class="progress-bar" style="width: 40%; background-color: #f2b01e;">
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
		} else if (command.split(' ')[1] == 'SOCIALLINKS') {
			output.innerHTML = `<div class='contact'>Like my Work ? Get in touch ?<br>
			<a href='https://github.com/Shreyans13' style='margin: 50px' target='_blank'><img src="./svg icons/github.svg"></a>
			<a href='https://www.linkedin.com/in/shreyans-jain-a60902186/' style='margin: 50px' target='_blank'><img src="./svg icons/linkedin.svg"></a><br>
			</div>
			${commandBox}`
		} else if (command.split(' ')[1] == 'SENDAMESSAGE') {
			output.innerHTML = `
			<form action="https://formspree.io/xlepwvrd" method="POST" class='form'>
				<table>
					<tr>
						<label>
							<td> Your name: </td>
							<td> <input type="text" name="name" placeholder='Enter your name'> </td>
						</label>
					</tr>
					<tr>
						<label>
							<td> Your email: </td>
							<td> <input type="text" name="_replyto" placeholder='Enter your email'> </td>
						</label>
					</tr>
					<tr>
						<label>
							<td> Your message: </td>
							<td> <textarea name="message" placeholder='Enter your message'></textarea> </td>
						</label>
					</tr>
				</table>
				<button type="submit">Send</button>
			</form>
			${commandBox}`
		} else {
			output.innerHTML = `<p class="error">-portfolio: Directory: not found </p> ${commandBox}`	
		}
}
let caller = (event) => {
	if(event.keyCode === 13) {
		
		let cb = document.querySelectorAll('#commandButton')
		cb[cb.length-1].disabled = true

		let command = document.querySelectorAll('#commandButton')
		command = command[command.length-1].value

		let output = document.querySelectorAll('.output')[document.querySelectorAll('.output').length -1]
		
		command = command.replace(/\s+/g, " ").trim().toUpperCase();
		if (command.split(' ')[0] == 'CD') {
			if (command.split(' ')[1] == '..'){
				cdCommand(command, output)
				// output.innerHTML = `<p class="error">-portfolio: COMMAND: not found </p> ${commandBox}`
			} else if (iC || iP || iPW ){
				output.innerHTML = `<p class="error">-portfolio: COMMAND: not found </p> ${commandBox}`
			} else {
				cdCommand(command, output)

				// output.innerHTML = `<p class="error">-portfolio: COMMAND: not found </p> ${commandBox}`
				// cdCommand(command, output)
			}
		} else if (command == 'LS' || command == 'DIR') {
			if (iC) {
				output.innerHTML = `
					<div class='certificates'>
						<div class='certificate'>
							<h3 style="color: #fffc58;">The Web Developer Bootcamp by Udemy</h3>
							<p>Issued May 2020</p>
							<a href="https://www.udemy.com/certificate/UC-4385ddae-69af-4b92-8e02-6e8324dc6543/" target='_blank'>Verify Credential</a>
						</div>
						<div class='certificate'>	
							<h3 style="color: #fffc58;">Version Control with Git by Coursera</h3>
							<p>Issued May 2020</p>
							<a href="https://coursera.org/share/f028875f7bbe5246d4c7eea55d06404a" target='_blank'>Verify Credential</a>
						</div>
						<div class='certificate'>
							<h3 style="color: #fffc58;">Server Side Development using Node Js and MongoDB</h3>
							<p>In Progress</p>
						</div>
					</div>

				${commandBox}`
			} else if (iP) { 
				output.innerHTML = `
				<div class='projects'>
					<ul class='project'>
						<li>
							<h3>Command Line Portfolio</h3>
							<a href="https://github.com/Shreyans13/CLI-Portfolio" target='_blank'>GitHub Repo</a>
							<p> Deployed at <a href=''>Still Deploying</a></p>
						</li>
						<li class='project'>
							<h3>Actions on Google</h3>
							<a href="https://github.com/Shreyans13/Actions-on-google" target='_blank'>GitHub Repo</a>
							<p> Deployed at Google Assistant. Open your google assistant and say Talk to Shreyans Jain&#39;s resumse</p>
						</li>
						<li class='project'>
							<h3>The game of Chess</h3>
							<a href="https://github.com/Shreyans13/The-game-of-Chess" target='_blank'>GitHub Repo</a>
							<p> Deployed at <a href='https://github.com/Shreyans13/The-game-of-Chess' target='_blank'>GitHub Pages</a></p>
						</li>
						<li class='project'>
							<h3>Yelp Camp Udemy</h3>
							<a href="https://github.com/Shreyans13/Yelp-Camp-Udemy" target='_blank'>GitHub Repo</a>
							<p> Deployed at <a href='https://peaceful-reaches-73403.herokuapp.com/' target='_blank'>Heroku</a></p>
						</li>
						<li class='project'>
							<h3>Keyboard Gama Patatap Clone</h3>
							<a href="https://github.com/Shreyans13/Keyboard-Game-Patatap-Clone" target='_blank'>GitHub Repo</a>
							<p> Deployed at <a href='https://shreyans13.github.io/Keyboard-Game-Patatap-Clone/' target='_blank'>GitHub Pages</a></p>
						</li>
						<li class='project'>
							<h3>To Do List</h3>
							<a href="https://github.com/Shreyans13/To-Do-List" target='_blank'>GitHub Repo</a>
							<p> Deployed at <a href='https://shreyans13.github.io/To-Do-List/' target='_blank'>GitHub Pages</a></p>
						</li>
						<li class='project'>
							<h3>Museum of Candy Bootstrap4</h3>
							<a href="https://github.com/Shreyans13/Museum-of-Candy-Bootstrap4" target='_blank'>GitHub Repo</a>
							<p> Deployed at <a href='https://shreyans13.github.io/Museum-of-Candy-Bootstrap4/' target='_blank'>GitHub Pages</a></p>
						</li>
					</ul>
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
					<p>/socialLinks</p>
					<p>sendAMessage</p>
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
				<p>CLEARSCREEN - To clear the page</p>
				<p>CLS - To clear the page</p>
				<p>EXIT - To exit the page</p>
			</div>
			</p> ${commandBox}`
		} else if (command == 'REFRESH'){
			location.reload()
		} else if (command == 'CLS' || command == 'CLEARSCREEN') {
			document.querySelector('.commandLine').innerHTML = `${commandBox}`
		} else if (command == 'EXIT') {
			document.querySelector('.container').innerHTML = `<div class='exit'><h1>Thank You</h1><p>⭐ Made with ❤️ by Shreyans Jain ⭐</p></div>`
		} else {
			output.innerHTML = `<p class="error">-portfolio: COMMAND: not found </p> ${commandBox}`
		}
		let btn = document.querySelectorAll('#commandButton')
		btn = btn[btn.length-1]
		btn.focus()
	}
	window.scrollTo(0,document.body.scrollHeight);

}