$(document).ready(function() {
    
   $('#welcomeMessage').on('click', function(){
      $('#welcomeMethod').css('font-size', '100px'); 
   });
   $('#submit').on('click', function(){
    var item = $('#newItemForm').val();
    $(listItem = '<li>' + item + '</li>';
    $('items').append(listItem);  
    $('#newItemForm').val('');
    
   });
    $('newItemForm').on('focus', function(){
    
    
    }
    
    
    
    
    
    
});