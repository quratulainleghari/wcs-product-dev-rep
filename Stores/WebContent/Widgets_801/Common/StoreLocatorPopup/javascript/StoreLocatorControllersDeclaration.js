//<%--
//********************************************************************
//*-------------------------------------------------------------------
//* Licensed Materials - Property of IBM
//*
//* WebSphere Commerce
//*
//* (c) Copyright IBM Corp.  2016
//* All Rights Reserved
//*
//* US Government Users Restricted Rights - Use, duplication or
//* disclosure restricted by GSA ADP Schedule Contract with IBM Corp.
//*
//*-------------------------------------------------------------------
//*
//--%>

/**
 * @fileOverview This file declares the controllers of the store locator.
 *
 * @version 1.0
 *
 */

/**
 * The functions defined in the class are used to initialize the common parameters of the controllers and set the 
 * URL of a specific controller.
 *
 * @class This StoreLocatorContextsJS class defines all the variables and functions for manipuating the controllers
 * of the store locator.
 *
 */
StoreLocatorControllersDeclarationJS = {
    /* common paramater declarations */
    langId: "-1",
    storeId: "",
    catalogId: "",
    orderId: "",
    fromPage: "StoreLocator",

    /**
     * This function initializes the common parameters. 
     *
     * @param {String} langId The language ID. 
     * @param {String} storeId The store ID.
     * @param {String} catalogId The catalog ID.
     * @param {String} orderId The order ID.
     * @param {String} fromPage The constants indicates what the calling page is.
     *
     */
    setCommonParameters: function (langId, storeId, catalogId, orderId, fromPage) {
        this.langId = langId;
        this.storeId = storeId;
        this.catalogId = catalogId;
        this.orderId = orderId;
        this.fromPage = fromPage;
    }


}


/* refresh controller declaration for "provinceSelectionsController" */
var provinceSelectionsRefreshArea = function () {

    var myWidgetObj = $("#provinceSelectionsArea"),
        myRCProperties = wcRenderContext.getRenderContextProperties("provinceSelectionsAreaContext");

    myWidgetObj.refreshWidget({
        formId: "",


        renderContextChangedHandler: function () {

            cursor_wait();
            myWidgetObj.refreshWidget("refresh", myRCProperties);
        },

        postRefreshHandler: function () {

            storeLocatorJS.refreshCities();
            cursor_clear();
        }
    });
}

/* refresh controller declaration for "citySelectionsController" */
var citySelectionsRefreshController = function () {

    var myWidgetObj = $("#citySelectionsArea"),
        myRCProperties = wcRenderContext.getRenderContextProperties("citySelectionsAreaContext");

    myWidgetObj.refreshWidget({
        formId: "",


        renderContextChangedHandler: function () {

            cursor_wait();
            myWidgetObj.refreshWidget("refresh", myRCProperties);
        },


        postRefreshHandler: function (widget) {

            storeLocatorJS.refreshSearchResults(StoreLocatorControllersDeclarationJS.fromPage);
            cursor_clear();
        }

    });
}


/* refresh controller declaration for "storeLocatorResultsController" */
var storeLocatorResultsRefreshController = function () {

    var myWidgetObj = $("#storeLocatorResultsArea"),
        myRCProperties = wcRenderContext.getRenderContextProperties("storeLocatorResultsAreaContext");

    myWidgetObj.refreshWidget({
        formId: "",



        renderContextChangedHandler: function () {
            cursor_wait();
            myWidgetObj.refreshWidget("refresh", myRCProperties);
        },

        postRefreshHandler: function () {

            var bopisTable = $("#bopis_table");
            if (bopisTable != null && bopisTable != "undefined") {
                bopisTable.focus();
            }
            var noStoreMsg = $("#no_store_message");
            if (noStoreMsg != null && noStoreMsg != "undefined") {
                noStoreMsg.focus();
            }

            cursor_clear();
        }

    });
}

/* refresh controller declaration for "selectedStoreListController" */
var selectedStoreListRefreshController = function () {

    var myWidgetObj = $("#selectedStoreListArea"),
        myRCProperties = wcRenderContext.getRenderContextProperties("selectedStoreListAreaContext");

    myWidgetObj.refreshWidget({
        formId: "",


        renderContextChangedHandler: function () {

            cursor_wait();
            myWidgetObj.refreshWidget("refresh", myRCProperties);
        },

        postRefreshHandler: function () {

            var bopisTable = $("#bopis_table");
            if (bopisTable != null && bopisTable != "undefined") {
                bopisTable.focus();
            }

            cursor_clear();
        }

    })
}
