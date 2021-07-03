class Form{
display(){
var title=createElement("h1")
title.html("car racing game")
title.position(100,0)
var input=createInput("name")
input.position(100,100)
var button = createButton("play")
button.position(150,130)
var greeting=createElement("h2")
button.mousePressed(function(){
input.hide()
button.hide()
var name=input.value()
playerCount=playerCount+1
player.update(name)
player.updateCount(playerCount)
greeting.html("hello, "+name+" waiting for others to join ")
greeting.position(100,100)
})
}
}