$(window).on('load',
  function(){
    $("#media").click(
      function(){
        $('#menu-media').toggle();
      }
    )

    $('#menu-media').hover(
      function () { 
        $('#menu-media').show();
      }, function () { 
        $('#menu-media').hide();
      }
    
    );

    $('#home,#contact').mouseenter(
      function(){
        $('#menu-media').hide();
      }
    );

    $(".set-left").click(
      function(){
        $('#menu-media').css(
          'display','none'
        );
        
      }
    )

  


    $('.navigation').click(function(){
    })

    $(".mobile-menu").click(
      function(){
        $('.navigation').toggle()
        .css('transition-duration','1s')
      }
    )

    $(".mobile-return").click(
      function(){
        $('.navigation').toggle()
        .css('transition-duration','2s')
      }
    );

  }
  )
