$(document).ready(function() {
	
	
	$(".successarea").hide();

		$("#send").on("click", function() { 
				
		var data = { 
			title:$("#title").val(),
			comment:$("#comment").val(),
			commentar:$("#commenter").val()
			
		};
		
		$.ajax({
			
			url:"http://localhost:8080/guestbook/",
			method: "PUT",
			contentType:"application/json",
			data:JSON.stringify(data), 
			success:function(data){
				$("successarea").show();
				$("form").hide();
							
			}, 
			
			error:function(data) {
				
				alert("etwas hat nicht geklappt!");
			}
			
		});
				
	});
	
	
})