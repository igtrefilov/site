(function() {
  var isMobile = /Mobi|Android|iPhone|iPad|iPod|Opera Mini|IEMobile/i.test(navigator.userAgent);
  if (isMobile) {
    var link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = new URL('mobile.css', document.currentScript.src);
    document.head.appendChild(link);
  }
})();
