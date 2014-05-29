/*jshint -W099 */
/*jslint browser: true, sub: true */

// GLOBALS
// =============================================
var CONFIG = {
	people: $(".pgrid-item"),
	teasers: $(".pgrid-teaser-wrap"),
	exitBtns: $(".pgrid-close"),
	expanders: $(".pgrid-expander"),
	trueSelect: $(".pgrid-item-active")
};


// HELPERS
// =============================================
function resetOthers() {
	CONFIG.people.removeClass("pgrid-expanded").css("height", "auto");
	CONFIG.expanders.hide().css("height", 0);
}

function showCorrect($item) {
	$item.find(".pgrid-expander").show().css("height", "auto");
}

function setHeight($item) {
	var heightNow = $item.find(".pgrid-teaser-wrap").outerHeight(true),
		expHeight = $item.hasClass("pgrid-expanded") ? $item.find(".pgrid-expander").outerHeight(true) : 0;

	console.log(heightNow, expHeight);

	$item.css("height", heightNow + expHeight);
}




// HANDLERS
// =============================================

CONFIG.people.on({
	mouseenter: function() {
		CONFIG.people.removeClass("pgrid-item-active");
		$(this).addClass("pgrid-item-active");
	},
	mouseleave: function() {
		CONFIG.people.removeClass("pgrid-item-active");
		CONFIG.trueSelect.addClass("pgrid-item-active");
	},
	click: function() {
		CONFIG.trueSelect = $(this);
	}
});

CONFIG.teasers.on("click", function() {
	var $item = $(this).parent();

	if ($item.hasClass("pgrid-expanded")) {
		resetOthers();
	} else {
		resetOthers();
		$item.addClass("pgrid-expanded");
		showCorrect($item);
		setHeight($item);
	}

});

CONFIG.exitBtns.on("click", function() {
	resetOthers();
});



// WINDOW RESIZE
// =============================================

var lazyLayout = _.debounce(function() {
	setHeight(CONFIG.trueSelect);
}, 100);

$(window).resize(lazyLayout);

