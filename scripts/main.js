$(document).ready(function(){
  revealSingleGameView();
  removeSingleGameView();
  toggleGameItem();
  gameSelector();
})

function revealSingleGameView(){
  $('a.ball-center').click(function(e){
    e.preventDefault();
    $('.main-game').addClass('hide')
    $('.single-game-view').addClass('reveal')
    
    
    gameId = $(this).data('game-id')
    selectGame(gameId)
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

