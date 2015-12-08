var Streak = { 
  init: function(){
    
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
  }
}