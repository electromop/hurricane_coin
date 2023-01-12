window.onload = function () {
    
    document.body.classList.add('animation_hiding');

    window.setTimeout(function () {

      document.body.classList.add('animation');

      document.body.classList.remove('animation_hiding');

    }, 600);

  }
