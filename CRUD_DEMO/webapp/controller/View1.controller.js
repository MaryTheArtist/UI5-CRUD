sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/m/MessageToast"
], function (Controller, MessageToast) {
	"use strict";

	return Controller.extend("kpmg.com.CRUD_DEMO.controller.View1", {
		onInit: function () {

		},
		onDataCall: function (oEvent) {
			this.myModel = this.getView().getModel();
			if ('Create' == oEvent.oSource.mProperties.text) {
				var obj = {};
				obj.Id = this.getView().byId("uniqueid").getValue();
				obj.Name = this.getView().byId("nameid").getValue();
				obj.Email = this.getView().byId("emailid").getValue();
				obj.Mobile = this.getView().byId("mobid").getValue();
				this.myModel.create("/zuserdataSet", obj, {
					success: function (oData, oResponse) {
	
						MessageToast.show('Record Created Successfully...');
						this.myModel.refresh();
					}.bind(this),
					error: function (err, oResponse) {
					MessageToast.show('Error while creating record - '
					.concat(err.response.statusText));
					}
				});
			// } else if ('Read' == oEvent.oSource.mProperties.text) {

			// 	var readurl = "/zuserdataSet";
			// 	this.myModel.read(readurl, {
			// 		success: function (oData, oResponse) {

			// 		},
			// 		error: function (err) {

			// 		}
			// 	});
			} else if ('Update' == oEvent.oSource.mProperties.text) {
				var obj2 = {};
				obj2.Id = this.getView().byId("uniqueid").getValue();
				obj2.Name = this.getView().byId("nameid").getValue();
				obj2.Email = this.getView().byId("emailid").getValue();
				obj2.Mobile = this.getView().byId("mobid").getValue();

				var updateurl = "/zuserdataSet(Id='" + this.getView().byId("uniqueid").getValue() + "')";

				this.myModel.update(updateurl, obj2, {
					success: function (oData, oResponse) {

					MessageToast.show('Record Updated Successfully...');
					this.myModel.refresh();
					}.bind(this),
					error: function (err, oResponse) {

					MessageToast.show('Error while updating record');

					}
				});
			} else if ('Delete' == oEvent.oSource.mProperties.text) {
				var delurl = "/zuserdataSet(Id='" + this.getView().byId("uniqueid").getValue() + "')";
				this.myModel.remove(delurl, {
					success: function (oData, oResponse) {
						MessageToast.show('Record Removed Successfully...');
					this.myModel.refresh();
					}.bind(this),
					error: function (err, oResponse) {

						MessageToast.show('Error while removing record - '
						.concat(err.response.statusText));
					}
				});
			}

		}

	});
});