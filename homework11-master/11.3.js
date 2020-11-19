

let promise  = new Promise(
  function(resolve, reject){

const request = new XMLHttpRequest()
request.open('GET', 'https://api.github.com/user/1')
request.onreadystatechange = function(event){
  event.target.readyState === 4 ?
    event.target.status === 200 ?
          resolve(event.target.responseText):    
        reject(event.target.responseText): null

    }
    request.send()
    }
)
promise.then(
    response => console.log(response),
    err => console.log(err)
)