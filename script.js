'use strict';

//STEPS BY STEP

//CHECK BUTTON - on Click DONE
//1 - Capturar input DONE
//////1.1 - Se input menor do que 1 ou maior do que 20:
//////1.2 - Display 'Not a valid Number DONE
//2 - Comparar input com secretNumber DONE
//3 - Se input igual a secretNumber:
//////3.1 - Display 'congratulations' DONE
//////3.2 - Display secretNumber on question mark box DONE
//////3.3 - Salvar score em uma variável DONE
//////3.4 - Display score number no highscore field DONE
//////3.5 - Aumentar largura do highscore field DONE
//////3.6 - Turn background to green DONE
//////3.7 - Keep Highest highscore and display in the field DONE

//4 - Se input maior do que secretNumber:
//////4.1 - Display 'Too High!' DONE
//////4.2 - Diminuir 1 ponto da variável score. DONE
//////4.3 - Display score no score field DONE
//////////4.4 - Se variável score igual a zero:
//////////4.4.1 - Display 'You Lost the game' DONE
//////////4.4.1 - Display zero no score field DONE

//5 - Se input menor do que secretNumber:
//////5.1 - Display 'Too Low!' DONE
//////5.2 - Diminuir 1 ponto da variável score. DONE
//////5.3 - Display score no score field DONE
//////////5.4 - Se variável score igual a zero:
//////////5.4.1 - Display 'You Lost the game' DONE
//////////5.4.1 - Display zero no score field DONE

//CHECK BUTTON - on Click
//1 - Reset background color DONE
//2 - Reset number field to '?' and normal width DONE
//2 - Resetar input field DONE
//3 - Display 'Start guessing...' DONE
//4 - Reset score field and variable to 20 DONE
//5 - Keep highscore number from previous game DONE
//6 - Gerar novo secretNumber DONE

const numberField = document.querySelector('.number');
const scoreField = document.querySelector('.score');
const highscoreField = document.querySelector('.highscore');
let score = 20;
let highscore = 0;
let secretNumber = Math.trunc(Math.random() * 20 + 1);
console.log(secretNumber);

//Function to display message
const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

//Function with most of the code logic
document.querySelector('.check').addEventListener('click', function () {
  const guessedNumber = Number(document.querySelector('.guess').value);
  if (guessedNumber >= 1 && guessedNumber <= 20) {
    //If number is equal to secret number
    if (guessedNumber === secretNumber) {
      numberField.style.width = '30rem';
      numberField.textContent = secretNumber;
      displayMessage('🎉 Correct Number!');
      if (score > highscore) {
        highscore = score;
        highscoreField.textContent = highscore;
      }
      document.body.style.backgroundColor = '#60b347';
      //If number is higher than secret number
    } else if (guessedNumber !== secretNumber) {
      score--;
      scoreField.textContent = score;
      if (score > 0) {
        displayMessage(
          guessedNumber > secretNumber ? '📈 Too High!' : '📉 Too Low!'
        );
      } else {
        checkScore();
      }
    }
    // else if (guessedNumber > secretNumber) {
    //   score--;
    //   document.querySelector('.score').textContent = score;
    //   if (score <= 0) {
    //     checkScore();
    //   }
    //   displayMessage('📈 Too High!');
    //   //If number is lower than secret number
    // } else if (guessedNumber < secretNumber) {
    //   score--;
    //   document.querySelector('.score').textContent = score;
    //   if (score <= 0) {
    //     checkScore();
    //   }
    //   displayMessage('📉 Too Low!');
    // }
  } else {
    displayMessage('⛔ Not a Valid Number!');
  }
});

//Function to check if score is Zero
function checkScore() {
  scoreField.textContent = 0;
  highscoreField.textContent = 0;
  displayMessage('💥 You Lost the Game!');
}

//Function to re-start the game when pressing 'AGAIN' button
document.querySelector('.again').addEventListener('click', function () {
  secretNumber = Math.trunc(Math.random() * 20 + 1);
  document.body.style.backgroundColor = '#222';
  numberField.textContent = '?';
  numberField.style.width = '15rem';
  score = 20;
  scoreField.textContent = 20;
  document.querySelector('.guess').value = '';
  displayMessage('Start guessing...');
});
