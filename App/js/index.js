// The default code is a module class (inherited from xui.Module)
// Ensure that all the value of "key/value pair" does not refer to external variables
xui.Class('App', 'xui.Module',{
    Instance:{
        // Dependency classes
        Dependencies:[],
        // Required modules
        Required:[],

        // To initialize properties
        properties : {},

        // To initialize instance(e.g. properties)
        initialize : function(){
        },

        // To initialize internal components (mostly UI controls)
        // *** If you're not a skilled, dont modify this function manually ***
        iniComponents : function(){
            // [[Code created by CrossUI RAD Studio
            var host=this, children=[], append=function(child){children.push(child.get(0));};
            
            append(
                xui.create("xui.UI.Dialog")
                .setHost(host,"xui_ui_dialog8")
                .setLeft("10.666666666666666em")
                .setTop("2.2857142857142856em")
                .setWidth("44.03809523809524em")
                .setHeight("28.038095238095238em")
                .setCaption("a")
            );
            
            host.xui_ui_dialog8.append(
                xui.create("xui.UI.FormLayout")
                .setHost(host,"xui_ui_formlayout4")
                .setLeft("23.61904761904762em")
                .setTop("15.238095238095237em")
                .setWidth("14.019047619047619em")
                .setHeight("2.361904761904762em")
                .setLayoutData({
                    "rows" : 1,
                    "cols" : 1,
                    "rowSetting" : {
                        "1" : {
                            "manualHeight" : 10
                        }
                    },
                    "cells" : {
                        "A1" : {
                            "value" : "2",
                            "style" : {
                                "backgroundColor" : "#D3D3D3"
                            }
                        }
                    }
                })
            );
            
            host.xui_ui_dialog8.append(
                xui.create("xui.UI.FormLayout")
                .setHost(host,"xui_ui_formlayout9")
                .setLeft("23.61904761904762em")
                .setTop("11.428571428571429em")
                .setWidth("14.019047619047619em")
                .setHeight("2.361904761904762em")
                .setLayoutData({
                    "rows" : 1,
                    "cols" : 1,
                    "rowSetting" : {
                        "1" : {
                            "manualHeight" : 10
                        }
                    },
                    "cells" : {
                        "A1" : {
                            "value" : "1",
                            "style" : {
                                "backgroundColor" : "#D3D3D3"
                            }
                        }
                    }
                })
            );
            
            host.xui_ui_dialog8.append(
                xui.create("xui.UI.Label")
                .setHost(host,"xui_ui_label9")
                .setLeft("1.1428571428571428em")
                .setTop("2.4380952380952383em")
                .setWidth("15.00952380952381em")
                .setHeight("1.3714285714285714em")
                .setCaption("b")
            );
            
            host.xui_ui_dialog8.append(
                xui.create("xui.UI.Label")
                .setHost(host,"xui_ui_label14")
                .setLeft("-0.45714285714285713em")
                .setTop("6.095238095238095em")
                .setWidth("19.580952380952382em")
                .setHeight("3.657142857142857em")
                .setCaption("c")
            );
            
            host.xui_ui_dialog8.append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input7")
                .setLeft("23.61904761904762em")
                .setTop("2.2857142857142856em")
                .setWidth("14.17142857142857em")
                .setValue("0")
            );
            
            host.xui_ui_dialog8.append(
                xui.create("xui.UI.Label")
                .setHost(host,"xui_ui_label15")
                .setLeft("15.619047619047619em")
                .setTop("2.4380952380952383em")
                .setWidth("7.771428571428571em")
                .setHeight("4.723809523809524em")
                .setCaption("d")
            );
            
            host.xui_ui_dialog8.append(
                xui.create("xui.UI.Label")
                .setHost(host,"xui_ui_label16")
                .setLeft("33.904761904761905em")
                .setTop("6em")
                .setWidth("6.552380952380952em")
                .setHeight("1.6761904761904762em")
                .setCaption("e")
            );
            
            host.xui_ui_dialog8.append(
                xui.create("xui.UI.Label")
                .setHost(host,"xui_ui_label17")
                .setLeft("14.857142857142858em")
                .setTop("2.4380952380952383em")
                .setWidth("6.247619047619048em")
                .setHeight("3.961904761904762em")
                .setCaption(":")
            );
            
            host.xui_ui_dialog8.append(
                xui.create("xui.UI.Label")
                .setHost(host,"xui_ui_label18")
                .setLeft("14.476190476190476em")
                .setTop("6.095238095238095em")
                .setWidth("6.628571428571429em")
                .setHeight("3.3523809523809525em")
                .setCaption(":")
            );
            
            host.xui_ui_dialog8.append(
                xui.create("xui.UI.Input")
                .setHost(host,"xui_ui_input12")
                .setLeft("23.61904761904762em")
                .setTop("5.85em")
                .setWidth("14.17142857142857em")
                .setHeight("1.7523809523809524em")
                .setValue("0")
            );
            
            host.xui_ui_dialog8.append(
                xui.create("xui.UI.Label")
                .setHost(host,"xui_ui_label25")
                .setLeft("-0.7619047619047619em")
                .setTop("11.9em")
                .setWidth("19.961904761904762em")
                .setHeight("3.657142857142857em")
                .setCaption("f")
            );
            
            host.xui_ui_dialog8.append(
                xui.create("xui.UI.Label")
                .setHost(host,"xui_ui_label26")
                .setLeft("-0.7619047619047619em")
                .setTop("15.5em")
                .setWidth("19.961904761904762em")
                .setHeight("2.2857142857142856em")
                .setCaption("g")
            );
            
            host.xui_ui_dialog8.append(
                xui.create("xui.UI.Button")
                .setHost(host,"xui_ui_button13")
                .setLeft("17.82857142857143em")
                .setTop("19.961904761904762em")
                .setWidth("7.314285714285714em")
                .setHeight("2.9714285714285715em")
                .setCaption("h")
            );
            
            host.xui_ui_dialog8.append(
                xui.create("xui.UI.Label")
                .setHost(host,"xui_ui_label29")
                .setLeft("18.666666666666668em")
                .setTop("11.5em")
                .setWidth("2.4380952380952383em")
                .setHeight("3.3523809523809525em")
                .setCaption(":")
            );
            
            host.xui_ui_dialog8.append(
                xui.create("xui.UI.Label")
                .setHost(host,"xui_ui_label30")
                .setLeft("14.476190476190476em")
                .setTop("15.4em")
                .setWidth("6.628571428571429em")
                .setHeight("3.3523809523809525em")
                .setCaption(":")
            );
            
            host.xui_ui_dialog8.append(
                xui.create("xui.UI.Label")
                .setHost(host,"xui_ui_label31")
                .setLeft("16.38095238095238em")
                .setTop("11.6em")
                .setWidth("7.0095238095238095em")
                .setHeight("7.0095238095238095em")
                .setCaption("c")
            );
            
            host.xui_ui_dialog8.append(
                xui.create("xui.UI.Label")
                .setHost(host,"xui_ui_label32")
                .setLeft("16.38095238095238em")
                .setTop("15.5em")
                .setWidth("7.0095238095238095em")
                .setHeight("2.361904761904762em")
                .setCaption("r")
            );
            
            append(
                xui.create("xui.UI.HiddenInput")
                .setHost(host,"xui_ui_hiddeninput1")
                .setValue("")
            );
            
            return children;
            // ]]Code created by CrossUI RAD Studio
        },

        // Give a chance to determine which UI controls will be appended to parent container
        customAppend : function(parent, subId, left, top){
            // "return false" will cause all the internal UI controls will be added to the parent panel
            return false;
        }
        /*,
        // To determine how properties affects this module
        propSetAction : function(prop){
        },
        // To set all node's style in this modlue
        customStyle:{}
    },
    //To customize the default properties and event handlers
    Static:{
        $DataModel:{
        },
        $EventHandlers:{
        }
    */
    }
});