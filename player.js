class Player{
    getCount(){
    var pc=database.ref("playerCount")
    pc.on("value", function(data){
        playerCount=data.val()
    })
    }
     updateCount(count){
     database.ref("playerCount").update({
         playerCount:count
     })
     }
     update(name){
    var pi="player"+playerCount
    database.ref(pi).set({
        name:name
    })
     }
    }