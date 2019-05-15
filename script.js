function data() {
	var datetime = moment().lang("en").format('MMMM Do YYYY @ h:mm:ss');

	$(".datetime").html(datetime);
}

$(function() {
	// Initiate data();
    data();

	// New tab
	setInterval(data, 1000);

	// Clear last two hours of history
	$(".clear-history").on("click", function() {
        var ms = 7200000; // 2 hours
        var twoHoursAgo = (new Date()).getTime() - ms;
        chrome.browsingData.remove({
          "since": twoHoursAgo
        }, {
          "history": true,
        });

        alert("Last 2 hours of history cleared successfully!");
	});

    // Clear last two hours of cache
    $(".clear-cache").on("click", function() {
        var ms = 7200000 // 2 hours
        var twoHoursAgo = (new Date()).getTime() - ms;
        chrome.browsingData.remove({
          "since": twoHoursAgo
        }, {
          "cache": true,
        });

        alert("Last 2 hours of cache cleared successfully!");
	});

    // Clear last two hours of all cache and history
    $(".clear-all").on("click", function() {
        chrome.browsingData.remove({
          "since": 0
        }, {
          "history": true,
          "cache": true
        });

        alert("All cache and history cleared successfully!");
	});
});
