var down = document.getElementById('down');
    function isOverTitle(evt, li) {
      var titleWrapper = document.createElement('span');
      var titleTextNode = li.firstChild; 
      li.insertBefore(titleWrapper, titleTextNode); 
      titleWrapper.appendChild(titleTextNode); 

      var isClickOnTitle = (document.elementFromPoint(evt.clientX, evt.clientY) == titleWrapper);
      titleWrapper.removeChild(titleWrapper.firstChild); 
      li.replaceChild(titleTextNode, titleWrapper); 
      return isClickOnTitle;
    }

    down.onclick = function(evt) {
      var evt = evt || event;
      var target = evt.target || evt.srcElement;


      if (!isOverTitle(evt, target)) {
        return; 
      }
      var node = target.getElementsByTagName('ul')[0];
      if (!node) return; 
      node.style.display = node.style.display ? '' : 'none';
    }