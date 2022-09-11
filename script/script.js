$(window).on('load',
  function(){
    $("#media").click(
      function(){
        $('#menu-media').css(
          'margin-top','202px'
        )
        
      }
    )
    $(".set-left").click(
      function(){
        $('#menu-media').css(
          'margin-top','-100%'
        )
        
      }
    )

    $(".mobile-menu").click(
      function(){
        $('.navigation').css(
          'display','block'
        )
        .css('transition-duration','1s')
      }
    )

    $(".mobile-return").click(
      function(){
        $('.navigation').css(
          'display','none'
        )
        .css('transition-duration','2s')
      }
    )
  }
  )
