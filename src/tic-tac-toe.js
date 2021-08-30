class TicTacToe {

    currentPlayerSymbol = 'x';

    gameField = [[null, null, null],
        [null, null, null],
        [null, null, null]];

    getCurrentPlayerSymbol() {
        return this.currentPlayerSymbol;
    }

    nextTurn(rowIndex, columnIndex) {
        if (this.gameField[rowIndex][columnIndex] !== null) {
            return;
        } 
        this.gameField[rowIndex][columnIndex] = this.currentPlayerSymbol;
        this.currentPlayerSymbol = this.currentPlayerSymbol == 'x' ? 'o' : 'x';
    }

    isFinished() {
        return this.getWinner() || this.noMoreTurns();
    }

    getWinner() {
        
        let player = null;
        for (let x = 0; x < this.gameField.length; x++) {
            player = this.gameField[x][0];
            if (player === null) {
                break;
            }
            for (let y = 1; y < this.gameField[x].length; y++) {
                if (player !== this.gameField[x][y]) {
                    break;
                }
                if (y === this.gameField[x].length - 1) {
                    return player;
                }
            }
        }
        for (let y = 0; y < this.gameField[0].length; y++) {
            player = this.gameField[0][y];
            if (player === null) {
                break;
            }
            for (let x = 1; x < this.gameField.length; x++) {
                if (player !== this.gameField[x][y]) {
                    break;
                }
                if (x === this.gameField.length - 1) {
                    return player;
                }
            }
        }

        player = this.gameField[0][0];
        if (player !== null) {
            for (let x = 1; x < this.gameField.length; x++) {
                for (let y = 1; y < this.gameField[x].length; y++) {
                    if (player !== this.gameField[x][y]) {
                        break;
                    } 
                    if ((x === this.gameField.length - 1) && (y === this.gameField.length - 1)) {
                        return player;
                    }
                }
            }
        }

        player = this.gameField[0][this.gameField.length - 1];
        if (player !== null) {
            for (let x = 1; x < this.gameField.length; x++) {
                for (let y = this.gameField.length - 2; y >= 0; y--) {
                    if (player !== this.gameField[x][y]) {
                        break;
                    } 
                    if ((x === this.gameField.length - 1) && (y === 0)) {
                        return player;
                    }
                }
            }
        }

        return null;

    }

    noMoreTurns() {
        for (let i = 0; i < this.gameField.length; i++) {
            for (let j = 0; j < this.gameField[i].length; j++) {
                
                if (this.gameField[i][j] === null) {
                    return false;
                }
            }
        }
        return true;
    }

    //should return false if game is not finished or there is a winner, and true if it is a draw
    isDraw() { 
        return this.noMoreTurns() && !this.getWinner();
    }

    getFieldValue(rowIndex, colIndex) {
        //console.log(`rowIndex = ${rowIndex}, colIndex = ${colIndex}`);
        //console.log()
        return this.gameField[rowIndex][colIndex];
    }
}

module.exports = TicTacToe;
