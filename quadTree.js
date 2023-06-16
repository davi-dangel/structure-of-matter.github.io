class QuadTree{
    constructor(capacity, boundary){
        this.capacity = capacity
        this.boundary = boundary
        this.mols = []
    }

    addMol(mol){
        if(!this.boundary.contains(mol))
            return false

        if(this.mols.length < this.capacity){
            this.mols.push(mol)
            return
        } 
            
        if(!this.topLeft)
            this.divideQuad()
        
        let result = 
        this.topLeft.addMol(mol) ||
        this.topRight.addMol(mol) ||
        this.bottomLeft.addMol(mol) ||
        this.bottomRight.addMol(mol)
        
        return result
    }

    divideQuad(){
        const width = this.boundary.width / 2
        const height = this.boundary.height / 2
        this.topLeft = new QuadTree(this.capacity, new Rectangle(this.boundary.x, this.boundary.y, width, height))
        this.topRight = new QuadTree(this.capacity, new Rectangle(this.boundary.x + width, this.boundary.y, width, height))
        this.bottomLeft = new QuadTree(this.capacity, new Rectangle(this.boundary.x, this.boundary.y + height, width, height))
        this.bottomRight = new QuadTree(this.capacity, new Rectangle(this.boundary.x + width, this.boundary.y + height, width, height))
    }
}