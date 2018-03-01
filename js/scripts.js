$(document).ready(function() {
  $('form').submit(function(event) {

    var item1 = $('#order1').val();
    var item2 = $('#order2').val();
    var item3 = $('#order3').val();
    var items = [item1,item2,item3];
    var upperItems = [];

    items.forEach(function(item) {
      upperItems.push(item.toUpperCase)

    var sortItems = upperItems.sort()
      $("#list").append('<li>' + item + '</li>');
      $('form').hide();
      event.preventDefault();
    });
  });
});
