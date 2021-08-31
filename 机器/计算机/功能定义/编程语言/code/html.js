// 按键事件
document.addEventListener('keydown',keydown)

//16进制
function keydown(event){
	console.log("keydown"+event.keyCode)
}

//10进制
document.addEventListener('keypress',keypress)
function keypress(event){
	console.log("keypress"+ event.keyCode)
}