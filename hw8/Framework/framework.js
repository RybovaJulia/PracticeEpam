var myFramework = {

  append: function(t, w){
    t.appendChild(w);
  },

  prepend: function(t, w){
    t.insertBefore(w, t.firstChild)
  },

  remove: function(t) {
        (t.parentNode).removeChild(t);
    },  

  replace: function(t, w) {
    var par = w.parentNode;
    par.replaceChild(t, w);
    },

  create: function(el) {
      var el = document.createElement(el);
      return el;
      }, 

  event: function(t, event, func){
    if(typeof t.attachEvent == "function")
    {
      t.attachEvent(event, func);
    }
    else{
      t.addEventListener(event, func);
    }
  },

  unevent:function(t, event, func)
  {
    if(typeof t.attachEvent == "function"){
      t.detachEvent(event, func);
    }
    else{
      t.removeEventListener(event, func);
    }
  },

  dispatch:function(t, e){
    var event = new Event(e);
    t.dispatchEvent(event);
  }
  width(el)
  {
    return el.clientWidth;
  },

  height(el)
  {
    return el.clientHeight;
  },

  pageTop(el)
  {
    return el.offsetTop;
  },

  pageLeft(el)
  {
    return el.offsetLeft;
  },

  css()
  {
    if(arguments.length == 2)
    {
      var el = arguments[0];
      var page = arguments[1];
      return window.getComputedStyle(el).page;
    }
    else
    {
      var el = arguments[0];
      var page = arguments[1];
      var v = arguments[2];
      el.style[page] = v;
    }
  },

  Get : {

    byId(t)
    {
      return document.getElementById(t);
    },

    byClass(t)
    {
      return document.getElementsByClassName(t);
    },

    byTag(t)
    {
      return document.getElementsByTagName(t);
    },

    bySelector(t)
    {
      return document.querySelector(t);
    },

    bySelectorAll(t)
    {
      return document.querySelectorAll(t);
    }
  }
} 
}