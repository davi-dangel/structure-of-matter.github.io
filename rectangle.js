class Rectangle{
    constructor(x, y, width, height){
        this.x = x
        this.y = y
        this. width = width
        this.height = height
    }

    contains(mol){
        return mol.x >= this.x && mol.x <= this.x + this.width && mol.y >= this.y && mol.y <= this.y + this.height
    }
}