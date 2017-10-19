var i = 0;
$('.stroke').click(function(){
	if(i == 0){
		$('.navBox').slideDown();
		i=1;
	}else{
		$('.navBox').finish().slideUp();
		i=0;
	}
});