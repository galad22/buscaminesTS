class Tablero {
    private casillas: Celda[][];
    private filas: number;
    private columnas: number;

    constructor(filas: number, columnas: number) {
        this.filas = filas;
        this.columnas = columnas;
        this.casillas = [];
        this.generateTablero(filas, columnas);

    }

    private generateTablero(filas: number, columnas: number) {
        for (let i = 0; i < filas; i++) {
            this.casillas[i] = [];
            for (let j = 0; j < columnas; j++) {
                if (Math.random() < 0.2) {
                    this.casillas[i][j] = new Celda(true);
                } else {
                    this.casillas[i][j] = new Celda(false);
                }
            }
        }
    }

    public checkNeighbours(i:number, j:number) {
        let count = 0;
        for (let x = i - 1; x <= i+1; x++) {
            for (let y = j - 1; y <=j+1; y++) {
                if (x >= 0 && x < this.filas && y >= 0 && y < this.columnas ) {
                    if (this.casillas[x][y].getBomb()) {
                        count++;
                    }
                }
            }
        }
        return "url(img/Minesweeper_" + count + ".gif)";
    }

    public reveal(i:number, j:number){
        let trueI=i+1;
        let trueJ=j+1;
        let data:string=this.casillas[i][j].getBomb() ? "url(img/mina.png)" : this.checkNeighbours(trueI-1, trueJ-1).toString();
        this.casillas[i][j].setRevealed();
        // if(data=="url(img/mina.png)"){
        //     this.lost();
        // }
        return data;
    }
    public lost(){
        alert("Perdiste");
        // location.reload();
    }
    public getTablero(): Celda[][] {
        return this.casillas;
    }
    public getFilas(): number {
        return this.filas;
    }
    public getColumnas(): number {
        return this.columnas;
    }
    public checkWin(){
        let count=0;
        for(let i=0;i<this.filas;i++){
            for(let j=0;j<this.columnas;j++){
                if(this.casillas[i][j].getRevealed()||(this.casillas[i][j].getFlag()&&this.casillas[i][j].getBomb())){
                    count++;
                }
            }
        }
        let toReutrn=false;
        if(count==this.filas*this.columnas){
             toReutrn=true;
        }
        console.log(toReutrn);
        console.log(count);
        return toReutrn;
    }
}
