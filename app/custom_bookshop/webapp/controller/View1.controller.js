sap.ui.define([
    "sap/ui/core/mvc/Controller"
], (Controller) => {
    "use strict";

    return Controller.extend("custombookshop.controller.View1", {
        onInit() {
        },
        onSubmit: function () {
            // Handle submit logic here
            var oInputTitle = this.byId("inputTitle").getValue();
            var oInputAuthor = this.byId("inputAuthor").getValue();
            var oInputPrice = this.byId("inputPrice").getValue();
            var oInputStock = this.byId("inputStock").getValue();
            var oInputLocation = this.byId("inputLocation").getValue();
            var oInputGenre = this.byId("inputGenre").getValue();
            var oModel = this.getView().getModel();
            var oContext = oModel.bindList("/Books").create({
                "title": oInputTitle,
                "author": oInputAuthor,
                "price": oInputPrice,
                "stock": oInputStock,
                "location": oInputLocation,
                "genre": oInputGenre
            });

            oContext.created().then(function () {
                // Handle success, e.g., show a message or refresh the view
                sap.m.MessageToast.show("Book added successfully!");
                // Clear input fields after submission
                this.byId("inputTitle").setValue("");
                this.byId("inputAuthor").setValue("");
                this.byId("inputPrice").setValue("");
                this.byId("inputStock").setValue("");
                this.byId("inputLocation").setValue("");
                this.byId("inputGenre").setValue("");



                
            }).catch(function (oError) {
                // Handle error, e.g., show an error message
                sap.m.MessageToast.show("Error adding book: " + oError.message);
            });


        }
    });
});