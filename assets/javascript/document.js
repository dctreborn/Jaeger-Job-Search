window.onload = function() {

	$(document).on("click", "#add-job", function(){

		event.preventDefault();

		var type = $("#job-input").val().trim();

		// added my t.p and t.k from what glassdoor sent me, need to figure out "userip" and "useragent"
		var queryURL = "http://api.glassdoor.com/api/api.htm?t.p=129054&t.k=jwRaV7Sf7yU&userip=0.0.0.0&useragent=&format=json&v=1&action=jobs-stats&q="+type+"&returnStates=true&admLevelRequested=1";

		console.log(queryURL);

		$.ajax({
			url: queryURL,
			method: "GET"
		}).done(function(response){

			var data = response.data;

			console.log(data);

		});

	});
	
};