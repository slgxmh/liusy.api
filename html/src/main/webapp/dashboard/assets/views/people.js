//加载并初始化模板对象
var peopleTemplate = loadTemplate("assets/templates/staff/people.html");

//列表容器VIEW
var peopleListView = Backbone.View.extend({
    initialize : function() {
        this.listenTo(this.collection, "add", this.add);
        this.listenTo(this.collection, 'sort', this.sort);
    },
    template : peopleTemplate,
    collection : new peopleCollection(),
    el : '#people',
    render : function() {
        this.$el.empty();
        this.$el.append($(this.template({
            pages : this.collection.pages,
            data : this.collection.toJSON()
        })));
        $("select", this.$el).on("change", this.pagecountchange);
    },
    load : function(direction) {
        var self = this;
        this.collection.fetch({
            success : function(cols, resp, options) {
                self.render();
            },
            error : function(cols, resp, options) {

            },
            direction : direction
        });
    },
    pagecountchange : function(e) {
        console.log("select ",e);
    }
});

var peopleListViewInstance = new peopleListView();
