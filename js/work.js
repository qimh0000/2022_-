//多選用

/*
$(function () {
  var filterMulti = $('.classmate').filterizr({
      setupControls: false
  });
  $('.tag_buttons button').click(function () {
      var multifilter = $(this).data('multifltr');
          $('.tag_buttons button[data-multifltr="all"]').removeClass('active');
          $(this).toggleClass('active');
          filterMulti.filterizr('toggleFilter', multifilter);
  });
});
*/

//單選用
$(function () {
  var filterSingle = $('.classmate').filterizr({
      setupControls: false
  });
  $('.tag_buttons button').click(function () {
      $('.tag_buttons button').removeClass('active');
      $(this).addClass('active');
      var filter = $(this).data('fltr');
      filterSingle.filterizr('filter', filter);
  });
});
