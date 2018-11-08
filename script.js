function data() {
	var datetime = moment().lang("en").format('MMMM Do YYYY @ h:mm:ss');
	
	$(".datetime").html(datetime);
}

$(function() {
	data();

	setInterval(data, 1000);
});

