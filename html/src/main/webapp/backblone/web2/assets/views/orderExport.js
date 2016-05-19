

var orderExportView = Backbone.View.extend({//options...
    initialize : function() {
        var self = this;
        this.stickit();     
        $("#year",self.content).on("change",function(){
            $("#month",self.content).html("");
            if($(this).val()< new Date().getFullYear()){
                for(var i=12;i>0;i--){
                    $("#month",self.content).append('<option value='+i+'>'+i+'</option>');
                }
            }else if($(this).val() == new Date().getFullYear()){
                for(var i= 1;i<= new Date().getMonth()+1;i++){
                    $("#month",self.content).append('<option value='+i+'>'+i+'</option>'); 
                }
            }
            self.loadTable($("#year",self.content).val(),$("#month",self.content).val());  
        }); 
        $("#month",self.content).on("change",function(){            
            self.loadTable($("#year",self.content).val(),$("#month",self.content).val());
        });  
        $("#exportByYear",self.content).on("click",function(){            
            self.exportFile($("#year",self.content).val());
        }); 
        $("#exportByMonth",self.content).on("click",function(){            
            self.exportFile($("#year",self.content).val(),$("#month",self.content).val());
        });
          
    },
    el : '',
    content: "#orderExport",
    model : new orderExportModel(),  
    validUname : function(val, event, options) {
        return true;
    },
    loadTable: function(year,month){
        var self = this;
        var d = new Date(year,month,0);
        var day = d.getDate();
        if(new Date().getFullYear()==year&&(new Date().getMonth()+1)==month){
            day = new Date().getDate()-1;
        }
        var str = "";
        for(var i=0;i<day;i++){
            if(i%4==0){
                str += '<tr>'
            }                        
            str += '<td>'+
                    '<h4 class="text-center">'+year+'年'+month+'月'+(i+1)+'日订单</h4>'+
                    '<div class="text-primary text-right exportByDay mouse-pointer" data-day="'+(i+1)+'">下载</div>'+   
                '</td>';
            if(i%4==3){
                str += '</tr>'
            }
        }
        $("table tbody",self.content).html(str);
        $(".exportByDay",self.content).on("click",function(){           
            self.exportFile($("#year",self.content).val(),$("#month",self.content).val(),$(this).data("day"));
        });
    },
    exportFile : function(year,month,day) {
        var self = this;
        if (!this.model.isValid()) {            
            return false;
        }
        
        this.model.save({year: year,month: month,day: day},{        
            success : function(model, resp, options) {//？返回了三个参数               
                var data = resp;
                if (data.status === "0") {
                    //todo...
                    alert("导出成功")                                                                   
                }
            },
            error : function(model, err, options) {
                alert("导出失败")
            }
        });                        
        return false;
    }   
});

var newOrderExportView = new orderExportView();
