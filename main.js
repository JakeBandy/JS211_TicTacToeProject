'use strict';

// brings in the assert module for unit testing
const assert = require('assert');
// brings in the readline module to access the command line
const readline = require('readline');
// use the readline module to print out to the command line
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// creates and empty "board" for the user to see where marks can be placed.
// using let because the variable is expected to change with more 'X's and 'O's to add
let board = [
  [' ', ' ', ' '],
  [' ', ' ', ' '],
  [' ', ' ', ' ']
];

// assigns the first mark as 'X'
// using let because the variable is expected to change from 'X' to 'O' and back
let playerTurn = 'X';

// is a function that print the current status of the board using the variable - board
const printBoard = () => {
function printBoard(){
  console.log('   0  1  2');
  console.log('0 ' + board[0].join(' | '));
  console.log('  ---------');
  console.log('2 ' + board[2].join(' | '));


const horizontalWin = () => {
  // Your code here to check for horizontal wins
function horizontalWin(){

  for(let i = 0; i < board.length; i++){
    if((board[i][0] === 'X' && board[i][1] === 'X' && board[i][2] === 'X') || (board[i][0] === 'O' && board[i][1] === 'O' && board[i][2] === 'O')){
      return true;
    }
  }
  return false; 
}

const verticalWin = () => {
  // Your code here to check for vertical wins

function verticalWin(){


  if((board[0][0] === 'X' && board[1][0] === 'X' && board[2][0] === 'X') || (board[0][0] === 'O' && board[1][0] === 'O' && board[2][0] === 'O')){
    return true;
  }else if((board[0][1] === 'X' && board[1][1] === 'X' && board[2][1] === 'X') || (board[0][1] === 'O' && board[1][1] === 'O' && board[2][1] === 'O')){
    return true; 
  }else if((board[0][2] === 'X' && board[1][2] === 'X' && board[2][0] === 'X') || (board[0][2] === 'O' && board[1][2] === 'O' && board[2][0] === 'O')){
    return true; 
  }else{
    return false; 
  }
}

const diagonalWin = () => {
  // Your code here to check for diagonal wins
function diagonalWin(){

  if((board[0][0] === 'X' && board[1][1] === 'X' && board[2][2] === 'X') || (board[0][0] === 'O' && board[1][1] === 'O' && board[2][2] === 'O')){
    return true; 
  }else if((board[0][2] === 'X' && board[1][1] === 'X' && board[2][0] === 'X') || (board[0][2] === 'O' && board[1][1] === 'O' && board[2][2] === 'O')){
    return true; 
  }else{
    return false; 
  }
}

const checkForWin = () => {
  // Your code here call each of the check for types of wins
function checkForWin(){

  if(horizontalWin() || verticalWin() || diagonalWin()){
    return true; 
  }else{
    return false; 
  }
}

const ticTacToe = (row, column) => {
  // Your code here to place a marker on the board
  // then check for a win
function ticTacToe(row, column){

  let moves = 1; 

  while(moves > 0 && moves < 5){
    board[row][column] = playerTurn; 
    moves++;  
  }

  if(moves >= 5 && checkForWin()){
    console.log('Congratulations, player ' + playerTurn + ' Wins!'); 
    console.log('Reset Board');
  }else{
    board[row][column] = playerTurn; 
  }

  if(playerTurn === 'X'){
    playerTurn = 'O'; 
  }else{
    playerTurn = 'X'; 
  }
}


const getPrompt = () => {
  printBoard();
  console.log("It's Player " + playerTurn + "'s turn.");
