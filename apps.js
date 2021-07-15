const clearBtn = document.getElementById('resetBtn') 
const ccoGrid = document.getElementById('gameGrid')


// ccoGrid.addEventListener('click', function(event) {
    
// })

let rows = ccoGrid.children



// let cClick = document.querySelector(".box-" + i)
clearBtn.addEventListener('click', function(event){
    for (let i = 0; i < rows.length; i++ ) {
        let boxes = rows[i].children;
        for (let j = 0; j < boxes.length; j++) {
            console.log(boxes[j])
            boxes[j].textContent = ""
        }
    }
    console.log(event)
});



// cClick.append('X')