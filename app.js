$('document').ready(function () {
  var $numTriesInput = $('#numTriesInput');
  var $pSuccessInput = $('#pSuccessInput');
  var $pAtLeastOneSuccess = $('#pAtLeastOneSuccess');
  var containerSideLength = 400;

  $('#container').css({
    width: containerSideLength,
    height: containerSideLength
  });

  $numTriesInput.on('change', function () {
    var numTries = $(this).val();
    $('#numTries').text(numTries);
  });

  $('button').on('click', function () {
    var numTries = $numTriesInput.val();
    var pFailure = (100 - $pSuccessInput.val()) / 100;
    var currArea = containerSideLength * containerSideLength;
    var currSideLength;
    $('#container').html('');
    var currSquare = $('#container');
    var newSquare;

    for (var i = 0; i < numTries; i++) {
      currArea = currArea * pFailure;
      currSideLength = Math.sqrt(currArea);
      newSquare = $('<div></div>');
      newSquare.addClass('inner-square');
      newSquare.css({
        height: currSideLength,
        width: currSideLength,
      });
      currSquare.append(newSquare);
      currSquare = newSquare;
    }

    $pAtLeastOneSuccess.text(
      ((1 - (
        currArea /
        (containerSideLength * containerSideLength)
      )) * 100).toFixed(2)
    );
  });
});
