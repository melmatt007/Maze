const 

var Message = document.getElementById("Message-Container")
var mazeCanvas = document.getElementById("mazeCanvas")


// var header = document.getElementById("header")
// var message = document.getElementById("gratz")



// var visibility = function (Message_Container) {
    
//     button.addEventListener('click',function(){
//         header.innerText = 'Congratulations!'
//         console.log('yes');
//     })

// }


var toggleVisibility = function(Message) {
    var button = document.getElementById("okBtn")
    button.addEventListener('click',function(){
        Message.style.visibility = 'hidden'    })
}

toggleVisibility(Message)

var difficulty = function(){
    document.getElementById("diffSelect").addEventListener("change",function(){
        var difficulty_index = document.getElementById("diffSelect").options.selectedIndex
        // var difficulty_chosen = document.getElementById("diffSelect").options[difficulty_index].text
        var difficulty_value = document.getElementById("diffSelect").options[difficulty_index].value
        console.log(difficulty_value)
        return difficulty_value
    })
}



var makeMaze = function() {
    var difficult =  difficulty()
    var unit = mazeCanvas.width/difficult
    var square = new Path.Rectangle({
        position: view.center,
        size: unit,
        fillColor: 'white'
    });
}

makeMaze();