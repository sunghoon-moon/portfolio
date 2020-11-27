/* 
  # Mouse_dir.js
  - Ver 0.1 
  - 2020.11.12
  - Author: CSSLICK
  - https://cafe.naver.com/csslick
*/

// new Mouse_dir(element name)
function Mouse_dir(el) {
  this.current_pos_x = 0;  // current mouse position
  this.recent_pos_x = 0;   // recent mouse position
  this.mouse_status = null;  // mouse direction status(left | right)
  this.el = el  // element name
  this.run = function () {
    var _this = this; // this pass to inner function scope by _this
    // init CSS viewport & bg
    var view = document.querySelector(_this.el);
    var bg = document.querySelector(_this.el + ' .bg');
    // console.log(_this.el)
    view.style.overflow = 'hidden';
    view.style.position = 'relative';
    bg.style.position = 'absolute';
    bg.style.width = 'inherit';
    bg.style.height = 'inherit';
    bg.style.transform = 'scale(1.2, 1.2) translateX(0px)';
    bg.style.backgroundPosition = 'center';
    bg.style.backgroundSize = 'cover';

    document.querySelector(_this.el).addEventListener('mouseout',function(){
      var bg = document.querySelector(_this.el + ' .bg');
      bg.style.transform = 'scale(1.0, 1.0) translateX(0px)';
      // console.log(_this.el, 'mouseout')
    })

    document.querySelector(_this.el).addEventListener('mousemove', function (e) {
      bg.style.transitionDuration = '2s';
      _this.current_pos_x = e.clientX;
      // console.log(recent_pos_x, current_pos_x);
      if (_this.current_pos_x >= _this.recent_pos_x) {
        _this.mouse_status = 'right';
        view.setAttribute('data-dir', '')
        view.setAttribute('data-dir', 'right');
        bg.style.transform = 'scale(1.2, 1.2) translateX(-20px)';
        // console.log('right')
      } else {
        _this.mouse_status = 'left';
        view.setAttribute('data-dir', '')
        view.setAttribute('data-dir', 'left');
        bg.style.transform = 'scale(1.2, 1.2) translateX(20px)';
        // console.log('left')
      }
      _this.recent_pos_x = _this.current_pos_x;
    })
  }

} // end Mouse_dir