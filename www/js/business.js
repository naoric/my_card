$( document ).on( "pageinit", "#myPage", function() {
			$( "#slist" ).on( "listviewbeforefilter", function ( e, data ) {
				var $ul = $( this ),
					$input = $( data.input ),
					value = $input.val(),
					html = "";
				$ul.html( "" );
				if ( value && value.length > 2 ) {
					$ul.html( "<li><div class='ui-loader'><span class='ui-icon ui-icon-loading'></span></div></li>" );
					$ul.listview( "refresh" );
					$.ajax({
						url: "http://redigo.me/cards/all-cards",
						dataType: "json"
						
					})
					.then( function ( response ) {
						$.each( response, function ( i, val ) {
							html += "<li>" + val + "</li>";
						});
						$ul.html( html );
						$ul.listview( "refresh" );
						$ul.trigger( "updatelayout");
					});
				}
			});
		});


(function(w,d){
 $.ajax({
 url: "Http://redigo.me/cards/all-cards" ,
 dataType:"json",
	 type:"GET"
 }).done(function( data ) {
var len = data.length,
    i = 0;
$ulist = $("#ulist");
	 $slist = $("#slist");
 
for (i = 0; i < len; i++) {
    data[i].id;


    $ulist.append("<li><a href='businessPage.html'><img width='50' src='http://mycard.com/" + data[i].logo_path + "'/><h3>" + data[i].name + "</h3><p >" + data[i].description + "</p></a><a href='shnizel.html' data-icon='plus' data-iconpos='notext' data-theme='c' data-inline='true'>A</a><input type='hidden' value='" + data[i].id + "'/></li>");
  
	
	$slist.append("<li class='ui-screen-hidden'><a href='#'>"+data[i].name+"</a></li>");
}
$slist.listview('refresh');
	   $ulist.listview('refresh');
}).fail(function (j, t, e) {
    alert(e);
});







$("#ulist").on("click", "li>a:nth-child(2)", function (e) {

    var theme = "b",
        $this = $(this),
        $row = $this.closest('li');

    $row.find('.ui-link-inherit')
        .removeClass('ui-btn-up-a ui-btn-up-b ui-btn-up-c ui-btn-up-d ui-btn-up-e ui-btn-hover-a ui-btn-hover-b ui-btn-hover-c ui-btn-hover-d ui-btn-hover-e')
        .addClass('ui-btn-up-' + theme)
        .attr('data-theme', theme);


    e.preventDefault();


});





})(window, document);



function searchFunc(){
	
	
	
	
	
}
