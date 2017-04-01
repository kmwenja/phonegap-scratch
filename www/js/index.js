var app = {
    colors: [
        "radial-gradient(circle, #2196F3, #0D47A1)", // blue
        "radial-gradient(circle, #673Ab7, #311B92)", // purple
        "radial-gradient(circle, #E91E63, #880E4F)", // pink
        "radial-gradient(circle, #F44336, #B71C1C)", // red
        "radial-gradient(circle, #FF9800, #EF6C00)", // orange
        "radial-gradient(circle, #8BC34A, #33691E)", // light green
        "radial-gradient(circle, #4CAF50, #1B5E20)", // green
        "radial-gradient(circle, #00BCD4, #006064)", // cyan
        "radial-gradient(circle, #009688, #004D40)", // teal
    ],

    current: 0,

    initialize: function() {
        console.log("initialize");
        document.addEventListener('DOMContentLoaded', this.loaded);
    },

    loaded: function() {
        console.log("loaded");
        var body = document.getElementsByTagName("body")[0];
        body.addEventListener('click', app.clicked);
    },

    clicked: function(event) {
        console.log("clicked");
        var body = event.target;
        app.current = app.current + 1;
        if(app.current >= app.colors.length) {
            app.current = 0;
        }
        var choice = app.colors[app.current];
        body.style.background = choice;
    },
};
