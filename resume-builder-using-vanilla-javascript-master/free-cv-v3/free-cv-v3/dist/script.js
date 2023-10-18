$(document).ready(function()
{
	// تخصيص مؤشر النزول
	
	$("html").niceScroll({
		
		cursorcolor:"#212b37",
		cursorborder:"5px solid #212b37",
		cursorborderradius:"0",
		scrollspeed:65
	})

	$("ul, div").filter("#scrolls").niceScroll({
		
		cursorcolor:"#ff4359",
		cursorborder:"2px solid #ff4359",
		cursorborderradius:"0",
		scrollspeed:65
	})
	
	// نهاية تخصيص مؤشر النزول
});