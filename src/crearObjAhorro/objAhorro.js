export class Objetivo{
    constructor() {
        this.objs = []
    }

    crearObjetivo(objName = "Vacaciones", mount = 1000, date = "01/11/2025") {
        // Verifica si el primer parámetro es un objeto, en cuyo caso lo desestructura
        let newObj;
        if (typeof objName === 'object') {
            newObj = objName;
        } else {
        newObj = {
            objName: objName,
            mount: mount,
            date: date
        };
        }

        this.objs.push(newObj);
        return newObj;
    }   

    showObj(){
        return this.objs;
    }
}


