var HanoiUI = function(game) {

  this.game = game;
  this.clicks = [];
  this.render();
}

HanoiUI.prototype.play = function() {
  var that = this;
  $('ul').on("click", "li", function(event) {
    that.clicks.push(event.currentTarget);
    if (that.clicks.length === 2) {
      var $startTower = $(that.clicks[0]);
      var $endTower = $(that.clicks[1]);

      var startTower = Math.floor((parseInt($startTower.attr("id")) - 1) / 3);
      var endTower = Math.floor((parseInt($endTower.attr("id")) - 1) / 3);

      console.log(startTower, endTower);

      that.game.move(startTower, endTower);

      that.render();
      that.clicks = [];

      if(that.game.isWon()) {
        that.renderWon();
      }
    }
  });
}


HanoiUI.prototype.render = function() {
  $("li").removeClass();

  var towers = this.game.towers;

  for(var i= 0; i < 3; i++) {
    var j = 1;
    towers[i].forEach(function(el) {
      var id = (i * 3) + j;
      $('li#' + id).addClass("disc disc" + el);
      j++;
    });
  }
}

HanoiUI.prototype.renderWon = function() {
  $("h2").addClass("won");
}

