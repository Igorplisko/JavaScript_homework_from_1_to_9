fetch("data.json")
		.then(
			response => response.json()
					.then(
						response => response.forEach(
								item => document.body.appendChild(document.createElemet('img')).src = item.url
							)
					)
fetch('file.txt')
				.then(
				response => response.text() 
						.then( response =>
				document.body.appendChild(document.createElemet('p')).innerText = response
					)
)
document.body.appendChild(document.createElemet('p')).innerText = document.cookie