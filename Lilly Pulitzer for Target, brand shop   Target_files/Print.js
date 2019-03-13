var Print = {
	get:function(obj)
	{
		var o	= typeof(obj) == "string" ? eval(obj) : $(obj);	
		var frame = $("<iframe id=\"PrintFrame\" name=\"PrintFrame\" src=\"print.php\" style=\"width:1px; height:1px;\">");
		$('body').prepend(frame);
		$("#PrintFrame").load(
			function()
			{
				var doc = frame[0].contentWindow.document;
	        	var body = $('body', doc);
	        	body.html(o.html());
				
				var f = window.frames['PrintFrame'];
				f.focus();
				f.print();
				
				setTimeout(function(){$("#PrintFrame").remove()},100);
			}
		)

	}
}