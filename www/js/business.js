(function(w,d){
$.ajax({
url: "http://mycard.com/cards/all-cards" ,
dataType:"jsonp"
}).done(function( data ) {

    var len=data.length,
        i=0;
        $ulist=$("#ulist"); 
    for(i=0;i<len;i++){
    data[i].id;
   
    
     $ulist.append("<li><a href='businessPage.html'><img width='50' src='http://naoric-PC/image.php/"+data[i].image_id+"'/><h3>"+data[i].name+"</h3><p >"+data[i].description+"</p></a><a href='shnizel.html' data-icon='plus' data-iconpos='notext' data-theme='c' data-inline='true'>A</a><input type='hidden' value='"+data[i].id+"'/></li>");
       $ulist.listview('refresh');   
    }    
}).fail(function(j, t, e) {
  alert(e);  
});

})(window,document);