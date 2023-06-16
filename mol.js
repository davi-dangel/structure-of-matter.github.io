class Mol{
    constructor(x, y, size, speed, color, xDirection, yDirection){
        this.x = x
        this.y = y
        this.size = size
        this.speed = speed
        this.color = color
        this.xDirection = xDirection
        this.yDirection = yDirection
    }

    changeXDirection(m) {
        return !m.xDirection
    }

    changeYDirection(m){
        return !m.yDirection
    }

    xDirectionMovement(mol, maxWidth) {
        if((mol.x + mol.size >= maxWidth && mol.xDirection) ||
            mol.x - mol.size <= 0 && mol.xDirection == false){
            mol.xDirection = mol.changeXDirection(mol)
        }
    
        if(mol.xDirection)
            mol.x += 1
        else
            mol.x -= 1
    }
    
    yDirectionMovement(mol, maxHeight) {
        if((mol.y + mol.size >= maxHeight && mol.yDirection) ||
            mol.y - mol.size <= 0 && mol.yDirection == false){
            mol.yDirection = mol.changeYDirection(mol)
        }
    
        if(mol.yDirection)
            mol.y += 1
        else
            mol.y -= 1
    }

    move(mol){
        setInterval(() => {
            xDirectionMovement(mol)
            yDirectionMovement(mol)      
            clearContainer()
            renderMol(mol)
        }, 10)
    }
}