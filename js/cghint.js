
(function() {
    'use strict';
    window['counter'] = 0;
    var snackbarContainer = document.querySelector('#generateColorToast');
    var showToastButton = document.querySelector('#generateColorU');
    showToastButton.addEventListener('click', function() {
      'use strict';
      var data = {message: 'Color Generated.'};
      snackbarContainer.MaterialSnackbar.showSnackbar(data);
    });
  }());
  (function() {
    'use strict';
    window['counter'] = 0;
    var snackbarContainer = document.querySelector('#generateColorToast');
    var showToastButton = document.querySelector('#generateColorC');
    showToastButton.addEventListener('click', function() {
      'use strict';
      var data = {message: 'Color Generated.'};
      snackbarContainer.MaterialSnackbar.showSnackbar(data);
    });
  }());
  (function() {
    'use strict';
    window['bool'];
    var snackbarContainer = document.querySelector('#copyToast');
    var showToastButton = document.querySelector('#copycolorcode');
    showToastButton.addEventListener('click', function() {
      'use strict';
      if (bool) {
        var data = {message: 'Successfully copied the code to clipboard.'};
      }
      else {
        var data = {message: 'Failed to copy the code to clipboard. Have you got the clipboard premission?'};
      }
      snackbarContainer.MaterialSnackbar.showSnackbar(data);
    });
  }());