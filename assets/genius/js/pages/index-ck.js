/* ---------- functions used to demonsatration ---------- */function randNum(){return(Math.floor(Math.random()*21)+20)*1200}function randNum2(){return(Math.floor(Math.random()*21)+20)*500}function randNum3(){return(Math.floor(Math.random()*21)+20)*300}function randNum4(){return(Math.floor(Math.random()*21)+20)*100}function randNum5(){return(Math.floor(Math.random()*21)+1)*1}function chart24(){function r(e,t,n){$('<div id="tooltip">'+n+"</div>").css({position:"absolute",display:"none",top:t+5,left:e+5,border:"1px solid #fdd",padding:"2px","background-color":"#dfeffc",opacity:.8}).appendTo("body").fadeIn(200)}var e=[[1,5+randNum3()],[2,10+randNum3()],[3,15+randNum3()],[4,20+randNum3()],[5,25+randNum3()],[6,30+randNum3()],[7,35+randNum3()],[8,40+randNum3()],[9,45+randNum3()],[10,50+randNum3()],[11,55+randNum3()],[12,60+randNum3()],[13,65+randNum3()],[14,70+randNum3()],[15,75+randNum3()],[16,80+randNum3()],[17,85+randNum3()],[18,90+randNum3()],[19,85+randNum3()],[20,80+randNum3()],[21,75+randNum3()],[22,80+randNum3()],[23,75+randNum3()],[24,70+randNum3()]],t=[[1,5+randNum3()],[2,10+randNum3()],[3,15+randNum3()],[4,20+randNum3()],[5,25+randNum3()],[6,30+randNum3()],[7,35+randNum3()],[8,40+randNum3()],[9,45+randNum3()],[10,50+randNum3()],[11,55+randNum3()],[12,60+randNum3()],[13,65+randNum3()],[14,70+randNum3()],[15,75+randNum3()],[16,80+randNum3()],[17,85+randNum3()],[18,90+randNum3()],[19,85+randNum3()],[20,80+randNum3()],[21,75+randNum3()],[22,80+randNum3()],[23,75+randNum3()],[24,70+randNum3()]],n=$.plot($("#chart-24h"),[{data:e,label:"Tickets"},{data:t,label:"Solved Tickets"}],{series:{lines:{show:!0,lineWidth:2,fill:!0,fillColor:{colors:[{opacity:.1},{opacity:.1}]}},points:{show:!0,lineWidth:2},shadowSize:0},grid:{hoverable:!0,clickable:!0,borderWidth:0},legend:{show:!1},colors:["#bdea74","#2FABE9"],xaxis:{ticks:10,tickDecimals:0,tickColor:"#fff"},yaxis:{ticks:5,tickDecimals:0,tickColor:"#e9ebec"}}),i=null;$("#chart-24h").bind("plothover",function(e,t,n){$("#x").text(t.x.toFixed(2));$("#y").text(t.y.toFixed(2));if(n){if(i!=n.dataIndex){i=n.dataIndex;$("#tooltip").remove();var s=n.datapoint[0].toFixed(2),o=n.datapoint[1].toFixed(2);r(n.pageX,n.pageY,n.series.label+" of "+s+" = "+o)}}else{$("#tooltip").remove();i=null}})}function chartWeek(){function e(e,t,n){return(new Date(e,t-1,n)).getTime()}function i(e,t,n){$('<div id="tooltip">'+n+"</div>").css({position:"absolute",display:"none",top:t+5,left:e+5,border:"1px solid #fdd",padding:"2px","background-color":"#dfeffc",opacity:.8}).appendTo("body").fadeIn(200)}var t=[[e(2013,1,2),1690.25],[e(2013,1,3),1696.3],[e(2013,1,4),1659.65],[e(2013,1,5),1668.15],[e(2013,1,6),1656.1],[e(2013,1,7),1668.65],[e(2013,1,8),1668.15]],n=["Sun","Mon","Tue","Wed","Thr","Fri","Sat"],r=$.plot($("#chart-week"),[{data:t}],{series:{lines:{show:!0,lineWidth:3,fill:!1},points:{show:!0,lineWidth:3,fill:!0,fillColor:"#fff"},shadowSize:0},grid:{hoverable:!0,clickable:!0,tickColor:"#e9ebec",borderWidth:0},colors:["#b2b8bd"],xaxis:{mode:"time",tickFormatter:function(e,t){return n[(new Date(e)).getDay()]},font:{color:"#b2b8bd"},ticks:7,tickColor:"#fff",alignTicksWithAxis:1,autoscaleMargin:.02},yaxis:{font:{color:"#b2b8bd"},ticks:4,tickDecimals:0}}),s=null;$("#chart-week").bind("plothover",function(e,t,n){$("#x").text(t.x.toFixed(2));$("#y").text(t.y.toFixed(2));if(n){if(s!=n.dataIndex){s=n.dataIndex;$("#tooltip").remove();var r=n.datapoint[0].toFixed(2),o=n.datapoint[1].toFixed(2);i(n.pageX,n.pageY,n.series.label+" of "+r+" = "+o)}}else{$("#tooltip").remove();s=null}})}function chartMonth(){function r(e,t,n){$('<div id="tooltip">'+n+"</div>").css({position:"absolute",display:"none",top:t+5,left:e+5,border:"1px solid #fdd",padding:"2px","background-color":"#dfeffc",opacity:.8}).appendTo("body").fadeIn(200)}var e=[[0,.5],[1,1],[2,1.5],[3,2],[4,2.5],[5,2],[6,1.5],[7,1.5],[8,2],[9,2.5],[10,2.5],[11,3],[12,3],[13,2.5],[14,2.5],[15,2],[16,3],[17,2.5],[18,2],[19,1.5],[20,1],[21,.5],[22,1],[23,1],[24,1.5],[25,2],[26,2.5],[27,3],[28,2.5],[29,2],[30,1.5],[31,1]],t=[[0,1],[1,2],[2,3],[3,4],[4,5],[5,4],[6,3],[7,3],[8,4],[9,5],[10,5],[11,6],[12,6],[13,5],[14,5],[15,4],[16,6],[17,5],[18,4],[19,3],[20,2],[21,1],[22,2],[23,2],[24,3],[25,4],[26,5],[27,6],[28,5],[29,4],[30,3],[31,2]],n=$.plot($("#chart-month"),[{data:t,bars:{show:!0,fill:!1,barWidth:.1,align:"center",lineWidth:16}},{data:t,label:"Visits",lines:{show:!0,lineWidth:1.5},points:{show:!0,lineWidth:2,fill:!0},shadowSize:0},{data:e,label:"Visits",lines:{show:!0,lineWidth:.5},points:{show:!0,lineWidth:.5,fill:!0},shadowSize:0}],{grid:{hoverable:!0,clickable:!0,tickColor:"#f7f7f7",borderWidth:0,labelMargin:10,margin:{top:0,left:5,bottom:0,right:0}},legend:{show:!1},colors:["rgba(190,190,190,0.3)","#b2b8bd"],xaxis:{ticks:5,tickDecimals:0,tickColor:"#fff"},yaxis:{ticks:3,tickDecimals:0}}),i=null;$("#chart-month").bind("plothover",function(e,t,n){$("#x").text(t.x.toFixed(2));$("#y").text(t.y.toFixed(2));if(n){if(i!=n.dataIndex){i=n.dataIndex;$("#tooltip").remove();var s=n.datapoint[0].toFixed(2),o=n.datapoint[1].toFixed(2);r(n.pageX,n.pageY,n.series.label+" of "+s+" = "+o)}}else{$("#tooltip").remove();i=null}})}$(document).ready(function(){chartMonth();$("#chartWeek").click(function(){chartWeek()});$("#chart24h").click(function(){chart24()})});$(document).ready(function(){$("#daterange").daterangepicker();$("input, textarea").placeholder();$("textarea").autosize();$(".piechart").easyPieChart({barColor:"#fff",trackColor:"rgba(255,255,255,.2)",scaleColor:!1,lineCap:"butt",rotate:-90,lineWidth:4,size:40,animate:1e3,onStep:function(e){this.$el.find("span").text(~~e)}});$("#mainCharts a:last").tab("show");$("#mainCharts a").click(function(e){e.preventDefault();$(this).tab("show")});$("#recent a:first").tab("show");$("#recent a").click(function(e){e.preventDefault();$(this).tab("show")});$("#external-events div.external-event").each(function(){var e={title:$.trim($(this).text())};$(this).data("eventObject",e);$(this).draggable({zIndex:999,revert:!0,revertDuration:0})});var e=new Date,t=e.getDate(),n=e.getMonth(),r=e.getFullYear();$(".calendar-small").fullCalendar({header:{right:"title",left:"prev,next,today"},defaultView:"month",editable:!0,events:[{title:"All Day Event",start:new Date(e.getFullYear(),e.getMonth(),e.getDate()-17),allDay:!0},{title:"Long Event",start:new Date(e.getFullYear(),e.getMonth(),e.getDate()-15,11,30,0),end:new Date(e.getFullYear(),e.getMonth(),e.getDate()-10,12,30,0)},{id:999,title:"Repeating Event",start:new Date(e.getFullYear(),e.getMonth(),e.getDate()-9,8,0,0),end:new Date(e.getFullYear(),e.getMonth(),e.getDate()-9,10,0,0),allDay:!1},{id:999,title:"Repeating Event",start:new Date(e.getFullYear(),e.getMonth(),e.getDate()-2,8,0,0),end:new Date(e.getFullYear(),e.getMonth(),e.getDate()-2,10,0,0),allDay:!1},{title:"Meeting",start:new Date(e.getFullYear(),e.getMonth(),e.getDate(),11,30,0),end:new Date(e.getFullYear(),e.getMonth(),e.getDate(),12,30,0),allDay:!1},{title:"Lunch",start:new Date(e.getFullYear(),e.getMonth(),e.getDate(),14,0,0),end:new Date(e.getFullYear(),e.getMonth(),e.getDate(),15,30,0),allDay:!1},{title:"Birthday Party",start:new Date(e.getFullYear(),e.getMonth(),e.getDate()+1,19,30,0),end:new Date(e.getFullYear(),e.getMonth(),e.getDate()+1,22,30,0),allDay:!1},{title:"Click for Google",start:new Date(e.getFullYear(),e.getMonth(),e.getDate()+10,14,30,0),end:new Date(e.getFullYear(),e.getMonth(),e.getDate()+11,12,30,0),url:"http://google.com/"}],dayClick:function(e,t,n,r){$(".calendar-details > .events").html("");var i=new Array(7);i[0]="Sunday";i[1]="Monday";i[2]="Tuesday";i[3]="Wednesday";i[4]="Thursday";i[5]="Friday";i[6]="Saturday";var s=new Array;s[0]="January";s[1]="February";s[2]="March";s[3]="April";s[4]="May";s[5]="June";s[6]="July";s[7]="August";s[8]="September";s[9]="October";s[10]="November";s[11]="December";var o=new Date(e.getFullYear(),e.getMonth(),e.getDate()+1),u=$(".calendar-small").fullCalendar("clientEvents",function(t){function n(e){return e<10?"0"+e:e}if(t.start>=e&&t.start<o){var r=t.title,u=t.start,a=t.end;$(".calendar-details > .day").html(i[e.getDay()]);$(".calendar-details > .date").html(s[e.getMonth()]+" "+e.getDate());t.allDay?$(".calendar-details > .events").append("<li>"+r+" - all day"+"</li>"):$(".calendar-details > .events").append("<li>"+r+" - "+u.getHours()+":"+n(u.getMinutes())+" - "+a.getHours()+":"+n(a.getMinutes())+"</li>")}else if(e>=t.start&&e<=t.end){var r=t.title,u=t.start,a=t.end;$(".calendar-details > .day").html(i[e.getDay()]);$(".calendar-details > .date").html(s[e.getMonth()]+" "+e.getDate());$(".calendar-details > .events").append("<li>"+r+" - "+s[u.getMonth()]+" "+u.getDate()+" "+u.getHours()+":"+n(u.getMinutes())+" - "+s[a.getMonth()]+" "+a.getDate()+" "+a.getHours()+":"+n(a.getMinutes())+"</li>")}else{$(".calendar-details > .day").html(i[e.getDay()]);$(".calendar-details > .date").html(s[e.getMonth()]+" "+e.getDate())}});$(".calendar-details ul li").length==0&&$(".calendar-details > .events").html("<li>no events :)</li>")}});$(".verticalChart")&&$(".singleBar").each(function(){var e=$(this).find(".value span").html();$(this).find(".value").animate({height:e},2e3,function(){})});$(".datatable").dataTable({sDom:"<'row'<'col-lg-6'l><'col-lg-6'f>r>t<'row'<'col-lg-12'i><'col-lg-12 center'p>>",bPaginate:!1,bFilter:!1,bLengthChange:!1,bInfo:!1});$(".simpleProgress").each(function(){var e=parseInt($(this).html());$(this).progressbar({value:e})});$(".multi-stat-box-chart").length&&$(".multi-stat-box-chart").each(function(){function i(e,t,n){return(new Date(e,t-1,n)).getTime()}function o(e,t,n){$('<div id="tooltip">'+n+"</div>").css({position:"absolute",display:"none",top:t+5,left:e+5,border:"1px solid #fdd",padding:"2px","background-color":"#dfeffc",opacity:.8}).appendTo("body").fadeIn(200)}var e=[[1111,5+randNum5()],[1112,10+randNum5()],[1113,15+randNum5()],[1114,20+randNum5()],[1115,25+randNum5()],[1116,30+randNum5()],[1117,25+randNum5()]],t=[[i(2013,1,7),5+randNum5()],[i(2013,1,8),10+randNum5()],[i(2013,1,9),15+randNum5()],[i(2013,1,10),20+randNum5()],[i(2013,1,11),25+randNum5()],[i(2013,1,12),30+randNum5()],[i(2013,1,13),25+randNum5()]],n=$(this).parent().parent().css("color"),r=["SUN","MON","TUE","WED","THR","FRI","SAT"],s=$.plot($(".multi-stat-box-chart"),[{data:t}],{series:{lines:{show:!0,lineWidth:3,fill:!1},points:{show:!0,lineWidth:3,fill:!0,fillColor:"#fff"},shadowSize:0},grid:{hoverable:!0,clickable:!0,tickColor:"#fff",borderColor:!1},colors:["#c7cbd5"],xaxis:{mode:"time",tickFormatter:function(e,t){return r[(new Date(e)).getDay()]},color:"#c7cbd5",autoscaleMargin:1e-18},yaxis:{ticks:4,tickDecimals:0,color:"#fff"}}),u=null;$(".multi-stat-box-chart").bind("plothover",function(e,t,n){$("#x").text(t.x.toFixed(2));$("#y").text(t.y.toFixed(2));if(n){if(u!=n.dataIndex){u=n.dataIndex;$("#tooltip").remove();var r=n.datapoint[0].toFixed(2),i=n.datapoint[1].toFixed(2);o(n.pageX,n.pageY,n.series.label+" of "+r+" = "+i)}}else{$("#tooltip").remove();u=null}})});$(".chart-info-box").each(function(){function i(e,t,n){$('<div id="tooltip">'+n+"</div>").css({position:"absolute",display:"none",top:t+5,left:e+5,border:"1px solid #fdd",padding:"2px","background-color":"#dfeffc",opacity:.8}).appendTo("body").fadeIn(200)}var e=[[0,10],[1,13],[2,9],[3,12],[4,15],[5,14],[6,13],[7,13],[8,14],[9,15],[10,15],[11,16],[12,16],[13,15],[14,15],[15,14]],t=[[0,1],[1,2],[2,3],[3,4],[4,5],[5,4],[6,3],[7,3],[8,4],[9,5],[10,5],[11,6],[12,6],[13,5],[14,5],[15,4]],n=$(this).parent().parent().css("color"),r=$.plot($(".chart-info-box"),[{data:e,label:"Visits",lines:{show:!0,lineWidth:2,color:"#fff"},points:{show:!1},shadowSize:0},{data:t,bars:{show:!0,fill:!1,barWidth:.1,align:"center",lineWidth:2}}],{grid:{show:!1},legend:{show:!1},colors:["#fff","rgba(0,0,0,0.1)"],xaxis:{ticks:2,tickDecimals:0},yaxis:{ticks:2,tickDecimals:0}}),s=null;$(this).bind("plothover",function(e,t,n){$("#x").text(t.x.toFixed(2));$("#y").text(t.y.toFixed(2));if(n){if(s!=n.dataIndex){s=n.dataIndex;$("#tooltip").remove();var r=n.datapoint[0].toFixed(2),o=n.datapoint[1].toFixed(2);i(n.pageX,n.pageY,n.series.label+" of "+r+" = "+o)}}else{$("#tooltip").remove();s=null}})});$(".chart-info-box2").each(function(){function i(e,t,n){$('<div id="tooltip">'+n+"</div>").css({position:"absolute",display:"none",top:t+5,left:e+5,border:"1px solid #fdd",padding:"2px","background-color":"#dfeffc",opacity:.8}).appendTo("body").fadeIn(200)}var e=[[0,10],[1,13],[2,9],[3,12],[4,15],[5,14],[6,13],[7,13],[8,14],[9,15],[10,15],[11,16],[12,16],[13,15],[14,15],[15,14]],t=[[0,1],[1,2],[2,3],[3,4],[4,5],[5,4],[6,3],[7,3],[8,4],[9,5],[10,5],[11,6],[12,6],[13,5],[14,5],[15,4]],n=$(this).parent().parent().css("color"),r=$.plot($(".chart-info-box2"),[{data:e,label:"Visits",lines:{show:!0,lineWidth:2,color:"#fff"},points:{show:!1},shadowSize:0},{data:t,bars:{show:!0,fill:!1,barWidth:.1,align:"center",lineWidth:2}}],{grid:{show:!1},legend:{show:!1},colors:["#fff","rgba(0,0,0,0.1)"],xaxis:{ticks:2,tickDecimals:0},yaxis:{ticks:2,tickDecimals:0}}),s=null;$(this).bind("plothover",function(e,t,n){$("#x").text(t.x.toFixed(2));$("#y").text(t.y.toFixed(2));if(n){if(s!=n.dataIndex){s=n.dataIndex;$("#tooltip").remove();var r=n.datapoint[0].toFixed(2),o=n.datapoint[1].toFixed(2);i(n.pageX,n.pageY,n.series.label+" of "+r+" = "+o)}}else{$("#tooltip").remove();s=null}})});$(".chart-type1").length&&$(".chart-type1").each(function(){function r(e,t,n){$('<div id="tooltip">'+n+"</div>").css({position:"absolute",display:"none",top:t+5,left:e+5,border:"1px solid #fdd",padding:"2px","background-color":"#dfeffc",opacity:.8}).appendTo("body").fadeIn(200)}var e=[[0,5],[5,6],[11,9],[17,8],[21,6],[27,8],[31,4]],t=[[0,1],[1,2],[2,3],[3,4],[4,5],[5,4],[6,3],[7,3],[8,4],[9,5],[10,5],[11,6],[12,6],[13,5],[14,5],[15,4],[16,6],[17,5],[18,4],[19,3],[20,2],[21,1],[22,2],[23,2],[24,3],[25,4],[26,5],[27,6],[28,5],[29,4],[30,3],[31,2]],n=$.plot($(".chart-type1"),[{data:e,label:"Visits",lines:{show:!0,fill:!1,lineWidth:1},points:{show:!0,lineWidth:1,fill:!0},shadowSize:0},{data:t,bars:{show:!0,fill:!1,barWidth:.1,align:"center",lineWidth:5}}],{grid:{hoverable:!0,clickable:!0,tickColor:"#eee",borderWidth:0},legend:{show:!1},colors:["#bdea74","#fabb3d"],xaxis:{ticks:7,tickDecimals:0},yaxis:{ticks:3,tickDecimals:0}}),i=null;$(this).bind("plothover",function(e,t,n){$("#x").text(t.x.toFixed(2));$("#y").text(t.y.toFixed(2));if(n){if(i!=n.dataIndex){i=n.dataIndex;$("#tooltip").remove();var s=n.datapoint[0].toFixed(2),o=n.datapoint[1].toFixed(2);r(n.pageX,n.pageY,n.series.label+" of "+s+" = "+o)}}else{$("#tooltip").remove();i=null}})});if($("#statsbg1").length)var i=[[1,12390+randNum3()],[2,10+randNum3()],[3,15+randNum3()],[4,20+randNum3()],[5,25+randNum3()],[6,30+randNum3()],[7,35+randNum3()],[8,40+randNum3()],[9,45+randNum3()],[10,50+randNum3()],[11,55+randNum3()],[12,60+randNum3()]],s=$.plot($("#statsbg1"),[{data:i,label:"Value"}],{series:{lines:{show:!0,lineWidth:2,fill:!0,fillColor:{colors:[{opacity:1},{opacity:1}]}},points:{show:!1,lineWidth:1},shadowSize:0},grid:{hoverable:!1,clickable:!1,borderWidth:0,labelMargin:0,axisMargin:1,margin:1,minBorderMargin:1},legend:{show:!1},colors:["#e9ebec"],xaxis:{ticks:0,tickDecimals:0,tickColor:"#fff"},yaxis:{ticks:0,tickDecimals:0,tickColor:"#fff"}});if($("#statsbg2").length)var i=[[1,90+randNum3()],[2,10+randNum3()],[3,15+randNum3()],[4,12320+randNum3()],[5,25+randNum3()],[6,30+randNum3()],[7,35+randNum3()],[8,40+randNum3()],[9,45+randNum3()],[10,50+randNum3()],[11,55+randNum3()],[12,60+randNum3()]],s=$.plot($("#statsbg2"),[{data:i,label:"Value"}],{series:{lines:{show:!0,lineWidth:1,fill:!0,fillColor:{colors:[{opacity:1},{opacity:1}]}},points:{show:!1,lineWidth:1},shadowSize:0},grid:{hoverable:!1,clickable:!1,borderWidth:0,labelMargin:0,axisMargin:1,margin:1,minBorderMargin:1},legend:{show:!1},colors:["#e9ebec"],xaxis:{ticks:0,tickDecimals:0,tickColor:"#fff"},yaxis:{ticks:0,tickDecimals:0,tickColor:"#fff"}});if($("#statsbg3").length)var i=[[1,90+randNum3()],[2,10+randNum3()],[3,15+randNum3()],[4,320+randNum3()],[5,25+randNum3()],[6,30+randNum3()],[7,35+randNum3()],[8,40+randNum3()],[9,45+randNum3()],[10,50+randNum3()],[11,32355+randNum3()],[12,60+randNum3()]],s=$.plot($("#statsbg3"),[{data:i,label:"Value"}],{series:{lines:{show:!0,lineWidth:1,fill:!0,fillColor:{colors:[{opacity:1},{opacity:1}]}},points:{show:!1,lineWidth:1},shadowSize:0},grid:{hoverable:!1,clickable:!1,borderWidth:0,labelMargin:0,axisMargin:1,margin:1,minBorderMargin:1},legend:{show:!1},colors:["#e9ebec"],xaxis:{ticks:0,tickDecimals:0,tickColor:"#fff"},yaxis:{ticks:0,tickDecimals:0,tickColor:"#fff"}});if($("#statsbg4").length)var i=[[1,90+randNum3()],[2,10+randNum3()],[3,15+randNum3()],[4,320+randNum3()],[5,25+randNum3()],[6,30+randNum3()],[7,35+randNum3()],[8,40+randNum3()],[9,45+randNum3()],[10,50+randNum3()],[11,55+randNum3()],[12,60+randNum3()]],s=$.plot($("#statsbg4"),[{data:i,label:"Value"}],{series:{lines:{show:!0,lineWidth:1,fill:!0,fillColor:{colors:[{opacity:1},{opacity:1}]}},points:{show:!1,lineWidth:1},shadowSize:0},grid:{hoverable:!1,clickable:!1,borderWidth:0,labelMargin:0,axisMargin:1,margin:1,minBorderMargin:1},legend:{show:!1},colors:["#e9ebec"],xaxis:{ticks:0,tickDecimals:0,tickColor:"#fff"},yaxis:{ticks:0,tickDecimals:0,tickColor:"#fff"}})});