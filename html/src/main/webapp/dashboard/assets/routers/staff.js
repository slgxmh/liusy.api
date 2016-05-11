(function() {
    var AppRouter = Backbone.Router.extend({
        initialize : function() {
            console.log("Route initialize");
        },
        deps : {
            people : ["assets/services/people.js", "assets/models/people.js", "assets/views/people.js"],
            message : ["assets/services/message.js", "assets/models/message.js", "assets/views/message.js"]
        },
        routes : {
            'people' : 'people',
            'people/:page' : 'people',
            'people/:count' : 'peopleCount',
            'message' : 'message',
            'man' : 'man',
            'woman' : 'woman',
        },

        people : function(page) {
            loadSequence(this.deps.people, function() {
                $('#myTab a[href="#people"]').tab('show');
                peopleListViewInstance.load();
            })
        },
        peopleCount : function(count) {
            loadSequence(this.deps.people, function() {
                $('#myTab a[href="#people"]').tab('show');
                peopleListViewInstance.load();
            })
        },
        message : function() {
            $('#myTab a[href="#message"]').tab('show');
            $template.loadByDom($("#message"));
            loadSequence(this.deps.message, function() {
                messageListViewInstance.load();
            })
        },
        man : function() {
            $('#myTab a[href="#man"]').tab('show')
            $template.loadByUrl($("#man"), "assets/templates/staff/man.html");
        },
        woman : function() {
            $('#myTab a[href="#woman"]').tab('show')
            $template.loadByUrl($("#woman"), "assets/templates/staff/woman.html");
        }
    });
    window.appRouter = new AppRouter();
    Backbone.history.start();
    appRouter.navigate("people",{trigger: true});
})($);

