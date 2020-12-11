/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"kpmg/com/CRUD_DEMO/test/unit/AllTests"
	], function () {
		QUnit.start();
	});
});