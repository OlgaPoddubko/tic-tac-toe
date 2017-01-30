class TicTacToe {
    constructor() {
    	this.grid = [];
    		for (let i = 0; i<3; i++) {
    			this.grid[i] = [];
    			for (let j = 0; j<3; j++) {
    				this.grid.push(null);
    			}
    		}
		this.currentPlayerFlag = 1;
        this.storage = 0;
    }

    getCurrentPlayerSymbol() {
		if (this.currentPlayerFlag == 1) {
    		return "x";
    	}
    	return "o";
    }

    nextTurn(rowIndex, columnIndex) {

		if ( !this.grid[rowIndex][columnIndex] ) {
			this.grid[rowIndex][columnIndex] = this.getCurrentPlayerSymbol();

			this.currentPlayerFlag *= -1;
			this.storage++;
		}
    }

    isFinished() {
    	if ( this.isDraw() || this.getWinner() ) {
    		return true;
    	} return false;

    }

    getWinner() {
    	if ((this.grid[0][0] !== null) && this.grid[0][0] == this.grid[0][1] && this.grid[0][0] == this.grid[0][2]) return this.getFieldValue(0,0);
    	if ((this.grid[1][0] !== null) && this.grid[1][0] == this.grid[1][1] && this.grid[1][0] == this.grid[1][2]) return this.getFieldValue(1,0);
    	if ((this.grid[2][0] !== null) && this.grid[2][0] == this.grid[2][1] && this.grid[2][0] == this.grid[2][2]) return this.getFieldValue(2,0);

    	if ((this.grid[0][0] !== null) && this.grid[0][0] == this.grid[1][0] && this.grid[0][0] == this.grid[2][0]) return this.getFieldValue(0,0);
    	if ((this.grid[0][1] !== null) && this.grid[0][1] == this.grid[1][1] && this.grid[0][1] == this.grid[2][1]) return this.getFieldValue(0,1);
    	if ((this.grid[0][2] !== null) && this.grid[0][2] == this.grid[1][2] && this.grid[0][2] == this.grid[2][2]) return this.getFieldValue(0,2);

    	if ((this.grid[0][0] !== null) && this.grid[0][0] == this.grid[1][1] && this.grid[0][0] == this.grid[2][2]) return this.getFieldValue(0,0);
    	if ((this.grid[0][2] !== null) && this.grid[0][2] == this.grid[1][1] && this.grid[0][2] == this.grid[2][0]) return this.getFieldValue(0,2);

    	return null;
    }

    noMoreTurns() {
    	return this.storage == 9;
    }

    isDraw() {
    	if ( this.noMoreTurns() && !this.getWinner() ) {
    		return true;
    	} return false;
    }

    getFieldValue(rowIndex, colIndex) {
    	if ( this.grid[rowIndex][colIndex] ) {
    		return this.grid[rowIndex][colIndex];
    	} else return null;
    }
}

module.exports = TicTacToe;
