/**
 * Created by danielscott on 3/7/17.
 */
// importScripts(jQuery);


$(document).ready(function(){

    $(document).on("click", "img" ,function(){
        $("#pokemon-info").show();
        var id = $(this).attr('id');

        $.get("https://api.github.com/users/danwillscott", function(res){
            console.log(res);
            $( document ).ajaxComplete(function( event,request, settings ) {
                if(res===undefined){
                    alert("page failed to load!");
//						return;
                } else {
                    $("li").remove();
                    for(var i = 0; i < res.types.length; i += 1){
                        $("ul").append("<li>"+res.types[i].name+"</li>");
                    }

                    $("h1").text(res.name);
                    $("#height").text(res.height);
                    $("#weight").text(res.weight);
                    $("#api-img").attr('src', "http://pokeapi.co/media/img/"+id+".png")
                }
            });
        }, 'json' )
    });


    $('button').click(function(){
        var poke_link = [];
        var index;
        // $('button').hide();
        // $('p').append()
        $.get("https://api.github.com/users/danwillscott", function(res){

            $( document ).ajaxComplete(function( event, request, settings ) {
                // console.log(res);
                // console.log(event);
                // console.log(request);
                // console.log(settings);
                if(res===undefined){
                    alert("page failed to load!");
//						return;
                } else {
                    for(var thing in res){
                        // $("li").remove();
                        $("ul").append("<li>"+ thing +': '+  res[thing]  + "</li>");
                        console.log(res[thing])

                    }

                    // for(var i = 0; i < res.types.length; i += 1){

                    // }
                    //
                    // $("h1").text(res.name);
                    // $("#height").text(res.height);
                    // $("#weight").text(res.weight);
                    // $("#api-img").attr('src', "http://pokeapi.co/media/img/"+id+".png")
                }
            });
        }, 'json' )


        // for(var i = 1; i <= 2; i += 1){     /*FIX TO 151 BEFORE PUSH*/
        //     $("#img-holder").append("<img id="+ i +" src=http://pokeapi.co/media/img/"+[i]+".png>");
        // }
    });
});