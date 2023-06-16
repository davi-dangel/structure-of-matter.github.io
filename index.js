screen = new Canvas()

// input = document.getElementById("quantity-mol") 
// input.addEventListener("change", ($event) => {
//     runSimulation($event.target.value)
// })


function runSimulation(amount){
    quadTree = new QuadTree(4, new Rectangle(0, 0, this.screen.getCanvasWidth(), this.screen.getCanvasHeight()))
    
    for(let i = 0; i < amount; i++){
        quadTree.addMol(new Mol(Random.getRandomPosition(), Random.getRandomPosition(), 5, 10, "black", true, true))
    }

    this.screen.clearContainer()
    this.screen.render(quadTree)
}

runSimulation(400)