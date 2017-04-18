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

  Get:{
  byId: function(el){
    return document.getElementById(el);
  },
  byTag:function(el){
    return document.getElementsByTagName(el);
  },
  byClass:function(el){
    return document.getElementsByClassName(el);
  },
  bySelector:function(el){
    return document.querySelector(el);
  },
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
} 
}