(function() {
  // 选择器封装
  function jQuery(selector) {
    return new Init(selector);
  }
  
  function Init(selector) {
    let elements = document.querySelectorAll(selector);
    //遍历
    for (let i = 0; i < elements.length; i++) {
      this[i] = elements[i];
    }
    // 补全数据长度
    this.length = elements.length;
  }

  //each的封装
  Init.prototype.each = function(hanshu) {
    for (let i = 0; i <= this.length; i++) {
      hanshu(i, this[i]);
    }
    return this;
  };

  // 注册事件的封装
  Init.prototype.on = function(key, hanshu) {
    this.each(function(i, e) {
      e.addEventListener(key, hanshu);
    });
    return this;
  };

  //css样式修改的封装
  // Init.prototype.css = function(key, zhi) {
  //   if (zhi == undefined) {
  //     let cs = window.getComputedStyle(this[0]);
  //     return cs[key];
  //   } else {
  //     this.each(function(i, e) {
  //       e.style[key] = zhi;
  //     });
  //     return this;
  //   }
  // };        css: function (name, value) {
  Init.prototype.css = function(name, zhi) {
    if (arguments.length == 2) {  //如果实参为2个参数

      for (var i = 0; i < this.length; i++) {

          this[i].style[name] = value;

      }
  } else if(arguments.length == 1) { //如果实参为1个参数

      if(typeof arguments[0] == 'string') { 

//如果为string类型,则应该是获取元素样式---->window.getComputedStyle(obj)[name] -->获取元素的样式属性

          return window.getComputedStyle(this[0])[name];

      } else { //对象的情况

          for(var key in name) {

              for (var i = 0; i < this.length; i++) {

                  this[i].style[key] = name[key];

              }
          }
      }
  }
  return this;
}



  //封装添加类名
  Init.prototype.addClass = function(key) {
    this.each(function(i, e) {
      e.classList.add(key);
    });
    return this;
  };

  // 删除类名
  Init.prototype.removeClass = function(key) {
    this.each(function(i, e) {
      e.classList.remove(key);
    });
    return this;
  };

  // 切换类名
  Init.prototype.toggleClass = function(key) {
    this.each(function(i, e) {
      e.classList.toggle(key);
    });
    return this;
  };

//   操作非开关属性
Init.prototype.attr = function(key,val) {
    if(val==undefined){
        this.each(function(i, e) {
            return e.key;
          });
    }else{
        this.each(function(i, e) {
            e.key=val;
          });
          return this;
    }
  };

  //操作开关属性
  Init.prototype.prop = function(key,val) {
    if(val==undefined){
        this.each(function(i, e) {
            return e.key;
          });
    }else{
        this.each(function(i, e) {
            e.key=val;
          });
          return this;
    }
}

  window.$ = window.jQuery = jQuery;
})();
