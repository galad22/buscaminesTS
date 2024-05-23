class Celda {
    private isBomb: boolean;
    private isFlag: boolean;
    private isRevealed: boolean;

    constructor(bomb: boolean) {
        if (bomb) {
            this.isBomb = true;
        } else {
            this.isBomb = false;
        }
        this.isFlag = false;
        this.isRevealed = false;
    }
    public getCelda(): Celda {
        return this;
    }

    public setRevealed(): void {
        this.isRevealed = true;
    }

    public setFlag(): void {
        this.isFlag = !this.isFlag;
        console.log(this.isFlag);
    }

    public getRevealed(): boolean {
        return this.isRevealed;
    }

    public getFlag(): boolean {
        return this.isFlag;
    }

    public getBomb(): boolean {
        return this.isBomb;
    }
}

