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
   
    
      $ulist.append("<li><a href='businessPage.html'><img width='50' src='http://mycard.com/"+data[i].logo_path+"'/><h3>"+data[i].name+"</h3><p >"+data[i].description+"</p></a><a href='shnizel.html' data-icon='plus' data-iconpos='notext' data-theme='c' data-inline='true'>A</a><input type='hidden' value='"+data[i].id+"'/></li>");
        $ulist.listview('refresh');   
     }    
 }).fail(function(j, t, e) {
   alert(e);  
 });

    
    
    
    
    
   $("#ulist").on("click","li>a:nth-child(2)",function(e){
       
    var theme = "b",
        $this = $(this),
        $row = $this.closest('li');
       
    $row.find('.ui-link-inherit')
                .removeClass('ui-btn-up-a ui-btn-up-b ui-btn-up-c ui-btn-up-d ui-btn-up-e ui-btn-hover-a ui-btn-hover-b ui-btn-hover-c ui-btn-hover-d ui-btn-hover-e')
                .addClass('ui-btn-up-' + theme)
                .attr('data-theme', theme);
       
//    $.mobile.activePage.find('.ui-btn')
//                       .removeClass()
//                       .addClass('ui-btn-up-' + theme)
//                       .attr('data-theme', theme);
//    $.mobile.activePage.find('.ui-header, .ui-footer')
//                       .removeClass('ui-bar-a ui-bar-b ui-bar-c ui-bar-d ui-bar-e')
//                       .addClass('ui-bar-' + theme)
//                       .attr('data-theme', theme);
//    $.mobile.activePage.removeClass('ui-body-a ui-body-b ui-body-c ui-body-d ui-body-e')
//                       .addClass('ui-body-' + theme)
//                       .attr('data-theme', theme);
//           event.preventDefault();
       
   
   e.preventDefault();
   
   
   }); 
    
    
    
})(window,document);


