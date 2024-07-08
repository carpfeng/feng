$(document).ready(function() {
    // 淡入效果的调整，确保在Safari中兼容
    $('.main-content1').css({ display: 'block', opacity: 0, top: '50px' }).animate({ top: '0', opacity: 1 }, 700);
    $('.main-content2').css({ display: 'block', opacity: 0, top: '50px' }).delay(700).animate({ top: '0', opacity: 1 }, 700);
    $('.main-content3').css({ display: 'block', opacity: 0, top: '50px' }).delay(700).animate({ top: '0', opacity: 1 }, 700);

    $(".openbtn1").click(function() {
        $(this).toggleClass('active');
        $("#g-nav").toggleClass('panelactive');
        $(".circle-bg").toggleClass('circleactive');
    });

    $("#g-nav a").click(function() {
        $(".openbtn1").removeClass('active');
        $("#g-nav").removeClass('panelactive');
        $(".circle-bg").removeClass('circleactive');
    });
});


$(document).ready(function() {
    $(window).scroll(function() {
        var scrollPosition = $(window).scrollTop();
        var triggerPosition = 600; // 触发淡入效果的位置

        if (scrollPosition >= triggerPosition) {
            $(".dot").each(function(index) {
                $(this).delay(index * 200).fadeIn(1000); // 依次淡入
            });
        }
    });
});




// contactpage-title
        $(document).ready(function(){
          var text = $(".contactpage-title").text();
          $(".contactpage-title").html("");  // clean original words
      
          $.each(text.split(""), function(i, letter){
            var span = $("<span>").text(letter).css("display", "none");
            $(".contactpage-title").append(span);
            span.delay(i * 300).fadeIn(500);  // 每个字母延迟 100 毫秒，淡入时间为 300 毫秒
          });
        });
 
      

// email
$(document).ready(function(){
  var text = $(".email").text();
  $(".email").html("");  // clean original words

  $.each(text.split(""), function(i, letter){
    var span = $("<span>").text(letter).css("display", "none");
    $(".email").append(span);
    span.delay(i * 300).fadeIn(500);  // 每个字母延迟 100 毫秒，淡入时间为 300 毫秒
  });
});











