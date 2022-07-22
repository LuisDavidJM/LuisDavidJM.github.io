class Game{
    options = ['rock', 'paper', 'scissors'];
    user = 0;
    pc = 0;

    constructor(){
        
    }
    userSelection(selection){
        this.user = selection;
    }
    pcSelection(){
        this.pc = this.options[Math.floor(Math.random() * 3)];
        return this.pc;
    }
    gamePlay(){
        var msj;

        if (this.user != this.pc){
            if (this.user == 'rock'){
                if (this.pc == 'paper') msj = 'LOSE';
                else msj = 'WIN';
            }
            else if (this.user == 'paper'){
                if (this.pc == 'scissors') msj = 'LOSE';
                else msj = 'WIN';
            }
            else if (this.user == 'scissors'){
                if (this.pc == 'rock') msj = 'LOSE';
                else msj = 'WIN';
            }
        }
        else msj = 'TIED';

        return msj
    }
}