//加载并初始化模板对象
var messageItemTemplate = loadTemplate("assets/templates/staff/messageitem.html");
var messageView = Backbone.View.extend({//options...
    initialize : function(option) {
        //初始化VIEW并让model与VIEW进行关联
        this.model.view = this;
        //初始化VIEW的HTMLDOM对象
        this.render();
    },
    template : messageItemTemplate, //VIEW对应的模板
    render : function() {
        var self = this;
        if (this.template) {
            //使用模板+数据拼装DOM
            this.$el = $(this.template(this.model.attributes));
            console.log(this.template(this.model.attributes))
        }
        //返回自身，便于promise调用
        return this;
    }
});
//列表容器VIEW
var messageListView = Backbone.View.extend({
    initialize : function() {
        this.listenTo(this.collection, "add", this.add);
        this.listenTo(this.collection, 'sort', this.sort);
        $("select", this.$el).on("change", this.pagecountchange);
    },
    collection : new messageCollection(),
    template : messageItemTemplate, //VIEW对应的模板
    el : '#message',
    render : function() {
    	 
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
    add : function(model) {
        var view = new messageView({
            model : model
        });
        //把条目view的dom对象插入到listview DOM对象中
        $("tbody",this.$el).append(view.$el);
    },
    sort : function(m) {

    },
    pagecountchange : function(e) {
        console.log("select ", e);
    }
});

var messageListViewInstance = new messageListView();
