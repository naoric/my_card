(function(w,d){
$.ajax({
url:"",
dataType:"json"

})
.done(function( data ) {
    var len=data.length
    var i=0;
    for(i=0;i<len;i++){
    data[i].id;
   
   $("#ulist").append("<li><a href='businessPage.html'><img src='http://naoric-PC/image.php/"+data[i].image_id+" /><h3>"+data[i].name+"</h3><p >+" data[i].description+"</p></a><a href='shnizel.html' data-icon='plus' data-iconpos='notext' data-theme='c' data-inline='true'>A</a></li>"
    }   
    
    
    }
  });






}(window,document)