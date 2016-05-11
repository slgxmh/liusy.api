var arrData = {
    status : 0,
    data : [{
        id : '1001',
        name : 'Lorem',
        value : 'ipsum',
        type : 'dolor',
        info : 'sit',
    }, {
        id : '1002',
        name : 'amet',
        value : 'consectetur',
        type : 'adipiscing',
        info : 'elit',
    }, {
        id : '1003',
        name : 'Integer',
        value : 'nec',
        type : 'odio',
        info : 'Praesent',
    }, {
        id : '1003',
        name : 'libero',
        value : 'Sed',
        type : 'cursus',
        info : 'ante',
    }, {
        id : '1004',
        name : 'dapibus',
        value : 'diam',
        type : 'Sed',
        info : 'nisi',
    }, {
        id : '1005',
        name : 'Nulla',
        value : 'quis',
        type : 'sem',
        info : 'at',
    }, {
        id : '1006',
        name : 'nibh',
        value : 'elementum',
        type : 'imperdiet',
        info : 'Duis',
    }, {
        id : '1007',
        name : 'sagittis',
        value : 'ipsum',
        type : 'Praesent',
        info : 'mauris',
    }, {
        id : '1008',
        name : 'Fusce',
        value : 'nec',
        type : 'tellus',
        info : 'sed',
    }, {
        id : '1009',
        name : 'augue',
        value : 'semper',
        type : 'porta',
        info : 'Mauris',
    }, {
        id : '1010',
        name : 'massa',
        value : 'Vestibulum',
        type : 'lacinia',
        info : 'arcu',
    }, {
        id : '1011',
        name : 'eget',
        value : 'nulla',
        type : 'Class',
        info : 'aptent',
    }, {
        id : '1012',
        name : 'taciti',
        value : 'sociosqu',
        type : 'ad',
        info : 'litora',
    }, {
        id : '1013',
        name : 'torquent',
        value : 'per',
        type : 'conubia',
        info : 'nostra',
    }, {
        id : '1014',
        name : 'per',
        value : 'inceptos',
        type : 'himenaeos',
        info : 'Curabitur',
    }, {
        id : '1015',
        name : 'sodales',
        value : 'ligula',
        type : 'in',
        info : 'libero',
    }, {
        id : '2001',
        name : 'Lorem',
        value : 'ipsum',
        type : 'dolor',
        info : 'sit',
    }, {
        id : '2002',
        name : 'amet',
        value : 'consectetur',
        type : 'adipiscing',
        info : 'elit',
    }, {
        id : '2003',
        name : 'Integer',
        value : 'nec',
        type : 'odio',
        info : 'Praesent',
    }, {
        id : '2003',
        name : 'libero',
        value : 'Sed',
        type : 'cursus',
        info : 'ante',
    }, {
        id : '2004',
        name : 'dapibus',
        value : 'diam',
        type : 'Sed',
        info : 'nisi',
    }, {
        id : '2005',
        name : 'Nulla',
        value : 'quis',
        type : 'sem',
        info : 'at',
    }, {
        id : '2006',
        name : 'nibh',
        value : 'elementum',
        type : 'imperdiet',
        info : 'Duis',
    }, {
        id : '2007',
        name : 'sagittis',
        value : 'ipsum',
        type : 'Praesent',
        info : 'mauris',
    }, {
        id : '2008',
        name : 'Fusce',
        value : 'nec',
        type : 'tellus',
        info : 'sed',
    }, {
        id : '2009',
        name : 'augue',
        value : 'semper',
        type : 'porta',
        info : 'Mauris',
    }, {
        id : '2020',
        name : 'massa',
        value : 'Vestibulum',
        type : 'lacinia',
        info : 'arcu',
    }, {
        id : '2011',
        name : 'eget',
        value : 'nulla',
        type : 'Class',
        info : 'aptent',
    }, {
        id : '2012',
        name : 'taciti',
        value : 'sociosqu',
        type : 'ad',
        info : 'litora',
    }, {
        id : '2013',
        name : 'torquent',
        value : 'per',
        type : 'conubia',
        info : 'nostra',
    }, {
        id : '2014',
        name : 'per',
        value : 'inceptos',
        type : 'himenaeos',
        info : 'Curabitur',
    }, {
        id : '2015',
        name : 'sodales',
        value : 'ligula',
        type : 'in',
        info : 'libero',
    }]
};
var peopleListViewService = {
    lock : false,
    request : function(data, options) {
        var self = this;
        if (self.lock) {
            self.trigger("error", "Request alreay running. Please wait");
            return;
        }
        self.lock = true;
        setTimeout(function() {
            options.success(arrData);
            self.lock = false;
        }, 300)
    }
};
_.extend(peopleListViewService, Backbone.Events);
