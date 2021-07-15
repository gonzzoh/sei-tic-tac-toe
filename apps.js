const clearBtn = document.getElementById('resetBtn') 
const ccoGrid = document.getElementById('gameGrid')

let rows = ccoGrid.children
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

