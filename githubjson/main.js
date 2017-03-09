/**
 * Created by danielscott on 3/7/17.
 */


$(document).ready(function(){
    $('button').click(function(){
        $.get("https://api.github.com/users/danwillscott", function(res){

            $( document ).ajaxComplete(function( event, request, settings ) {
                // console.log(res);
                // console.log(event);
                // console.log(request);
                // console.log(settings);
                if(res===undefined){
                    alert("page failed to load!");
                } else {
                    $("li").remove();
                    for(var thing in res){

                        if(thing == 'avatar_url'){

                            console.log(thing);
                        }else {
                            $("ul").append("<li>"+ thing +': '+  res[thing]  + "</li>");
                        }
                    }
                }
            });
        }, 'json' );

    });
});