//check off specific todos by clicking
$('ul').on('click', 'li', function(){
    $(this).toggleClass('completed');
});

//plus toggle
$('#plus').click(function(){
    $('input[type = "text"]').fadeToggle();
});

//click on X to delete todo 
$('ul').on('click', 'span', function(e){
    //fades out the clicked todo
    $(this).parent().fadeOut(300, function(){
        //erase the clicked todo from memory 
        $(this).remove();   
    });
    //stop the parent handlers to affect the child
    e.stopPropagation();      
});

//add new todo
$('input[type="text"]').on('keypress', function(e){
    if(e.which === 13)
    {
        //grab the new todo
        var todotext = $(this).val();
        //after adding new todo make the input box clear
        $(this).val("");
        //append new todo
        $('ul').append('<li><span><i class="fas fa-trash-alt"></i></span> ' + todotext + '</li>');
    }
});