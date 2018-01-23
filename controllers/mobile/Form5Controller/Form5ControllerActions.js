define({
    /*
      This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
    /** onSlide defined for Switch0c278d6c67d544c **/
    AS_Switch_cf76ee2949504c669581da0b5ef1dd1b: function AS_Switch_cf76ee2949504c669581da0b5ef1dd1b(eventobject) {
        var self = this;

        function SHOW_ALERT__hc0548372c274bda9568cab763080375_True() {}
        function SHOW_ALERT__d30c576783024df19cf0a1337a7ed2de_True() {}
        if ((self.view.Switch0c278d6c67d544c.info == onSwitch)) {
            function SHOW_ALERT__d30c576783024df19cf0a1337a7ed2de_Callback() {
                SHOW_ALERT__d30c576783024df19cf0a1337a7ed2de_True()
            }
            kony.ui.Alert({
                "alertType": constants.ALERT_TYPE_INFO,
                "alertTitle": "INFORMATION",
                "yesLabel": "OKAY",
                "message": "Fingerprint has been able.",
                "alertHandler": SHOW_ALERT__d30c576783024df19cf0a1337a7ed2de_Callback
            }, {
                "iconPosition": constants.ALERT_ICON_POSITION_LEFT
            })
        } else {
            function SHOW_ALERT__hc0548372c274bda9568cab763080375_Callback() {
                SHOW_ALERT__hc0548372c274bda9568cab763080375_True()
            }
            kony.ui.Alert({
                "alertType": constants.ALERT_TYPE_INFO,
                "alertTitle": "INFORMATION",
                "yesLabel": "OKAY",
                "message": "Fingerprint has been disable.",
                "alertHandler": SHOW_ALERT__hc0548372c274bda9568cab763080375_Callback
            }, {
                "iconPosition": constants.ALERT_ICON_POSITION_LEFT
            })
        }
    },
    /** onClick defined for Button0ff446d653d0a4b **/
    AS_Button_a317155d48c34930bf1802f4fd6781ad: function AS_Button_a317155d48c34930bf1802f4fd6781ad(eventobject) {
        var self = this;
        var ntf = new kony.mvc.Navigation("Form4");
        ntf.navigate();
    }
});