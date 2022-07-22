//Rules window
const open_rules = $('#rules-button');
const close_rules = $('.close');
const rules = $('#rules');

open_rules.click(() => {
    rules.fadeToggle(200);
});
close_rules.click(() => {
    rules.hide('fast');
});
//Reset button
const reset_button = $('#reset-button');
reset_button.click(() => {
    score_user = 0;
    score_pc = 0;
    pc_number.html(`0`);
    my_number.html(`0`);
});

//Game selection
const selection = $('#selection');
const game = $('#game');
const rock = $('#selection .rock');
const paper = $('#selection .paper');
const scissor = $('#selection .scissors');

rock.click(() => {
    selection.hide('fast');
    game.show('slow');
    game.css('display','flex');
    result('rock'); 
});
paper.click(() => {
    selection.hide('fast');
    game.show('slow');
    game.css('display','flex');
    result('paper'); 
});
scissor.click(() => {
    selection.hide('fast');
    game.show('slow');
    game.css('display','flex');
    result('scissors');  
});

//Winner o Loser
const user_select = $('#game img[alt="Selection User"]');
const pc_select = $('#game img[alt="Selection PC"]');
const op1 = $('#game .op1');
const op2 = $('#game .op2');

function result(opt){
    var juego = new Game();
    var pc_selection = juego.pcSelection();
    var user_selection = juego.userSelection(opt);
    user_select.attr('src', `img/icon-${opt}.svg`);
    pc_select.attr('src',`img/icon-${pc_selection}.svg`);
    op2.addClass(`${pc_selection}`);
    op1.addClass(opt);

    WinLose(juego.gamePlay());
}

const win_lose = $('#win-lose');
const you = $('#win-lose h3');
const pc_number = $('#pc-number');
const my_number = $('#my-number');
var score_user = 0;
var score_pc = 0;

function WinLose(gameWL){
    win_lose.show('slow');
    game.css('justify-content', 'space-evenly');
    you.html(`YOU ${gameWL}`);

    if(gameWL == 'WIN'){
        score_user++;
        you.css('color', '#289B1F');
    }else if(gameWL == 'LOSE'){
        score_pc++;
        you.css('color', '#BF2C18');
    }else{
        you.css('color', '#B718BF');
    }
    pc_number.html(`${score_pc}`);
    my_number.html(`${score_user}`);
}

const play_again = $('.play-again');
play_again.click(() => {
    win_lose.hide('fast');
    game.hide('fast');
    selection.show('slow');
    op1.removeClass('rock paper scissors');
    op2.removeClass('rock paper scissors');
});