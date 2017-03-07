/**
 * Created by danielscott on 3/5/17.
 */
importScripts(jQuery);

function Game()  {
    this.players = [];

    this.add_player = function(player){
        this.players.push(player)
    }
}


function PlayerConstructor(name){
    this.player = {};
    this.player.name = name;
    this.player.hand = [];

    this.addCard = function(card){
        this.player.hand.push(card);
    };
    // return player;
}

function PokemonCard(data){
    
    this.get_card = data;

}


var card1;
var card2;

$(document).ready(function(){

    $(document).on("click", "img" ,function(){
        $("#pokemon-info").show();
        var id = $(this).attr('id');

        $.get("http://pokeapi.co/api/v1/pokemon/"+id+"/", function(res){
            card1 = res.types[0];
            card2 = res.types[1];
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
        $('button').hide();

        for(var i = 0; i < 2; i += 1){
            index  = Math.floor((Math.random() * 200) + 1);
            $("#img-holder").append("<img id="+ index +" src=http://pokeapi.co/media/img/"+[index]+".png>");

        }

        // for(var i = 1; i <= 2; i += 1){     /*FIX TO 151 BEFORE PUSH*/
        //     $("#img-holder").append("<img id="+ i +" src=http://pokeapi.co/media/img/"+[i]+".png>");
        // }


    });

});