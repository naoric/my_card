(function(w,d){
$(document).on("pageinit","#businessPage",function(){
  //  var id=sessionStorage.getItem("id");
    $.ajax({
        url : "http://redigo.me/cards/get/"+1,
        dataType:"json",
        type:"GET"
    }).done(function(data){
             $("#businessName").html(data.name);
             $("#businessPic").attr("src","http://redigo.me/"+data.logo);
        }).fail(function(e){
            console.log(e);
        });



});
})(window,document);