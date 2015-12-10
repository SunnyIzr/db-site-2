var Streak = { 
  init: function(){
    //10 Prizes
    this.renderPrizes([[1,'100BB'],[2,'$1'],[4,'$3'],[6,'$10'],[8,'$50'],[10,'$250'],[15,'$1k'],[20,'$5K'],[30,'$100K'],[40,'$1M']])
    // 11 Prizes
    // this.renderPrizes([[1,'100BB'],[2,'$1'],[4,'$3'],[5,'$5'],[6,'$10'],[8,'$50'],[10,'$250'],[15,'$1k'],[20,'$5K'],[30,'$100K'],[40,'$1M']])
    //12 Prizes
    // this.renderPrizes([[1,'100BB'],[2,'$1'],[4,'$3'],[5,'$5'],[6,'$10'],[7,'$25'],[8,'$50'],[10,'$250'],[15,'$1k'],[20,'$5K'],[30,'$100K'],[40,'$1M']])
    //13 Prizes
    // this.renderPrizes([[1,'100BB'],[2,'$1'],[4,'$3'],[5,'$5'],[6,'$10'],[7,'$25'],[8,'$50'],[10,'$250'],[15,'$1k'],[17,'$3k'],[20,'$5K'],[30,'$100K'],[40,'$1M']])
    //14 Prizes
    // this.renderPrizes([[1,'100BB'],[2,'$1'],[4,'$3'],[5,'$5'],[6,'$10'],[7,'$25'],[8,'$50'],[10,'$250'],[15,'$1k'],[17,'$3k'],[20,'$5K'],[25,'$7K'],[30,'$100K'],[40,'$1M']])
  },
  angleIntervals: [204,306,402,510,594,684,804,894,1014,1050],
  loadActiveStreak: function(level){
    var circle = document.getElementById('activeBar');
    var interval = 30;
    var angle = 0;
    var angle_increment = 6;
    window.timer = window.setInterval(function () {
      circle.setAttribute("stroke-dasharray", angle + ", 20000");
      stopAngle = Streak.angleIntervals[level - 1]
      index = Streak.angleIntervals.indexOf(angle)
      if ( index > -1 ){
       Streak.activateNum(index) 
      }
      if ( angle > 1014 ){
        Streak.triggerAnimFix();
      }
      if (angle >= stopAngle) {
        window.clearInterval(window.timer);
      } 
      angle += angle_increment;
    }.bind(this), interval);
  },
  activateNum: function(index){
    level = index + 1
    $('.level-' + level).addClass('active')
  },
  triggerAnimFix: function(){
    $('.anim-fix-overlay').addClass('finish')
  },
  renderPrizes: function(prizes){
    classes = ['bottom left-outer','bottom-half left-section','top-half left-section','top left-outer','top center','top right-outer','top-half right-section','bottom-half right-section','bottom right-outer','bottom center']
    if ( prizes.length >= 11 ){
      classes.splice(4,0,'top left-inner')
    }
    if ( prizes.length >= 12 ){
      classes.splice(6,0,'top right-inner')
    }
    if ( prizes.length >= 13 ){
      classes.splice(2,0,'mid-point left-section')
    }
    if ( prizes.length >= 14 ){
      classes.splice(10,0,'mid-point right-section')
    }
    $(prizes).each(function(index,prize){
      outerNum = "<span class='nums level-" + index + " num" + index + " " + classes[index] + "'>" + prize[0] + "</span>"
      $('.outer-numbers').append($(outerNum))
      innerNum = "<span class='inner-num" + index + " " + classes[index] + "'>" + prize[1] + "</span>"
      $('.inner-numbers').append($(innerNum))
    })
  }
}