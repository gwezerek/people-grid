/*jshint -W099 */
/*jslint browser: true, sub: true */

// GLOBALS
// =============================================
var CONFIG = {
	"people": $(".grid-item").addClass("item-unselected"),
	"trueSelect": $(".item-active"),
	"infoName": $(".info-name"),
	"infoDesc": $(".info-description")
};

// HELPERS
// =============================================
function switchCopy(target) {
	CONFIG.infoName.html(target.find(".person-name").html());
	CONFIG.infoDesc.html(target.find(".person-description").html());
};


// HANDLERS
// =============================================

CONFIG.people.on({
	mouseenter: function() {
		CONFIG.people.addClass("item-unselected").removeClass("item-active");
		$(this).addClass("item-active");
	},
	mouseleave: function() {
		CONFIG.people.addClass("item-unselected").removeClass("item-active");
		CONFIG.trueSelect.addClass("item-active");
		console.log("leaving");
	}
});

CONFIG.people.on("click", function() {
	var $this = $(this);

	$(this).addClass("item-active");
	CONFIG.trueSelect = $this;
	switchCopy($this);
});