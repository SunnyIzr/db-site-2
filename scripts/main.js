$(document).ready(function(){
  menuNavToggle();
  menuNavToggleOff();
  revealSingleGameView();
  removeSingleGameView();
  toggleGameItem();
  gameSelector();
  selectBetBracket();
  ballDraggable()
  paginateGame();
})

function menuNavToggle(){
  $('.menu-icon').click(function(e){
    $('.sidebar').addClass('reveal');
  })
}

function menuNavToggleOff(){
  $(".inner-content-wrapper").click(function(e){
    $('.sidebar').removeClass('reveal');
  })
}

function revealSingleGameView(){
  $('a.ball-center').bind('mouseup', function(e){
    e.preventDefault();
    if ( window.dragCheck == false ){

      $('.single-game-view').addClass('reveal')
      
      gameId = $(this).data('game-id')
      selectGame(gameId)
    }
  })
}

function removeSingleGameView(){
  $('a.exit-single-view').click(function(e){
    e.preventDefault();
    $('.single-game-view').removeClass('reveal')
    $('.main-game').removeClass('hide')
  })
}

function toggleGameItem(){
  $('.game-item').click(function(e){
    $(this).parent().find('.game-item.active').removeClass('active')
    $(this).parent().parent().parent().find('.teams-details-wrapper.reveal').removeClass('reveal')
    target = $(this).data('target')
    
    window.el = $(this)
    $(this).addClass('active')
    $(this).parent().parent().parent().find(target).addClass('reveal')
    
  })
}

function ballDraggable(){
  window.dragCheck = false
  $('.ball-center').draggable({
    axis: 'x',
    containment: 'parent',
    drag: function(){
      window.dragCheck = true
      percentLeft = parseInt( $(this).css('left') ) / $(this).parent().width()
      bracketId = $(this).parent().data('bracket-id')
      if ( percentLeft < 0.33 ){
        betBracket(bracketId,0)
      } else if ( percentLeft > 0.67 ){
        betBracket(bracketId,1)
      }
    },
    stop: function(){
      window.dragCheck = false
    }
  })
}


function gameSelector(){
  $('.game-select').click(function(){
    selectGame($(this).data('game-id'))
  })
}

function selectGame(num){
  $('.game.reveal').removeClass('reveal')
  $('.carousel-indicators .active').removeClass('active')
  
  $('#game' + num).addClass('reveal')
  $($('.carousel-indicators li')[parseInt(num)]).addClass('active')
}

function betBracket(bracket,pick){
  bracketEl = $($('#mainTeamList li')[bracket])
  pickEl = $($(bracketEl).find('.btn')[pick])
  ballEl = $(bracketEl).find('.ball-center')
  $($(bracketEl).find('.btn.active')).removeClass('active')
  $(bracketEl).addClass('submitting')
  $(bracketEl).find('h4').html($(pickEl).find('.title').html())
  if ( pick == 0 ){
    $(ballEl).css('left','10%')
  } else {
    $(ballEl).css('left','90%')
  }
  setTimeout(function(){
    $(ballEl).css('left','50%')
  },500)
  setTimeout(function(){
    $(bracketEl).removeClass('submitting')
    $(pickEl).addClass('active')
  },1000)
}


function selectBetBracket(){
  $('button.team-btn').click(function(e){
    e.preventDefault();
    pick = $(this).data('pick')
    bracket = $(this).parent().parent().data('bracket-id')
    betBracket(bracket,pick)
  })  
}

function paginateGame(){
  $('.game-paginate').click(function(e){
    e.preventDefault();
    currentGame = $('.game-select.active').data('game-id')
    if ( $(this).hasClass('left') ){
      newGame = currentGame - 1
      if ( newGame  == -1 ){
        newGame = 4
      }
    } else if ( $(this).hasClass('right') ){
      newGame = currentGame + 1
      if ( newGame  == 5 ){
        newGame = 0
      }
    }
    selectGame(newGame)
  })
}



(function () {
    // math trick 2*pi*57 = 358, must be less than 360 degree 
    var circle = document.getElementById('activeBar');
    var interval = 30;
    var angle = 0;
    var angle_increment = 6;

    window.timer = window.setInterval(function () {
        circle.setAttribute("stroke-dasharray", angle + ", 20000");

        if (angle >= 1012) {
            window.clearInterval(window.timer);
        }
        angle += angle_increment;
    }.bind(this), interval);
})()
