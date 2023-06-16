class Canvas {
    constructor() {
        this.canvas = document.getElementById("canvas");
        if (!this.canvas) {
            this.canvas = document.createElement("canvas")
            document.body.appendChild(this.canvas)
            this.canvas.width = 800
            this.canvas.height = 800
            this.canvas.style.border = "1px solid black"
        }
        this.ctx = this.canvas.getContext("2d");
    }

    getCanvasWidth() {
        if (this.canvas)
            return this.canvas.width

        return 0
    }

    getCanvasHeight() {
        if (this.canvas)
            return this.canvas.height

        return 0
    }

    drawMol(mol){
        this.ctx.fillStyle = mol.color;
        this.ctx.beginPath();
        this.ctx.arc(mol.x, mol.y, mol.size, 0, 2 * Math.PI);
        this.ctx.fill();
    }

    drawRectangle(rectangle){
        this.ctx.strokeStyle = "blue"
        this.ctx.strokeRect(rectangle.x, rectangle.y, this.getCanvasWidth(), this.getCanvasHeight())
    }

    clearContainer() {
        this.ctx.clearRect(0, 0, this.getCanvasWidth(), this.getCanvasHeight())
    }

    render(quadTree){
        this.drawRectangle(quadTree.boundary)
        quadTree.mols.map(x => {
            // x.xDirectionMovement(x, this.getCanvasWidth())
            // x.yDirectionMovement(x, this.getCanvasHeight())
            this.drawMol(x)
        })

        if(quadTree.topLeft){
            this.render(quadTree.topLeft)
            this.render(quadTree.topRight)
            this.render(quadTree.bottomLeft)
            this.render(quadTree.bottomRight)
        }
    }
}