
//DOM elements
const timerH1 = document.querySelector("h1#counter")
const buttonContainer =document.querySelector("#button-container")
const likesUl = document.querySelector("ul.likes")
const cForm = document.querySelector("#comment-form")
const commentList = document.querySelector("#list")

//initial state of timer
let initialTime = 0;
let counterRunning = true
let likedNumber = {}

//events
cForm.addEventListener("submit",event =>{
  event.preventDefault()

  const p =document.createElement("p")
  const input =document.querySelector("#comment-input")
  //cnst input = event.target.comment
  p.textContent = input.value
  commentList.append(p)

  event.target.reset()
})
buttonContainer.addEventListener("click", event =>{
  if(event.target.id === "plus"){
    changeTime(1)
  }else if (event.target.id === "minus"){
    changeTime(-1)
  }else if (event.target.id === "pause"){
  togglePause()
  }else if (event.target.id === "heart"){
    updateLikes()
  }
})

function updateLikes(){
  if (likedNumber[initialTime]){
    const li = document.querySelector(`[data-number="${initialTime}"]`)
    likedNumber[initialTime] +=1
    li.textContent = `The number ${initialTime} has been liked ${likedNumber[initialTime]} times`
  }else{
    likedNumber[initialTime]=1
  }
  const li =document.createElement("li")
  li.dataset.number = initialTime
  li.textContent = `The number ${initialTime} has been liked 1 times`
  likesUl.append(li)

}

//pausefunction
function togglePause(){
  counterRunning = !counterRunning
  document.querySelectorAll("button").forEach(button=>{
    if(button.id !=="pause"){
      button.disabled = !counterRunning
    }else {
      if (counterRunning){
        button.textContent = "pause"
      }else{
        button.textContent = "resume"
      }
    }
  })}

//function for timer
function changeTime(amount){
  initialTime = initialTime + amount
  timerH1.textContent = initialTime
}

//setinterval time
setInterval(()=>{
  if (counterRunning){
    changeTime(1)
  }
},1000)
