console.log('script here')

$(function(){
  var countdown = 5

  function reload() {
    $('#reload').text('Next question in '+countdown)
    setInterval(function() {
      countdown--
      $('#reload').text('Next question in '+countdown)
      if(countdown == 0)
        window.location.reload()
    }, 1000)
  }

  $('#check').click(function(e) {
    e.preventDefault();
    
    var val = $('#answer').val()    
    var expect = $('#answer').attr('expect')
    var result = $('#result')
    if( val == expect ) {
      $('body').addClass('success-body')
      result.addClass('success').text('SUCCESS!!!')
      reload()
    } else {
      result.addClass('failure').text('Wrong :(')
    }
  })
})