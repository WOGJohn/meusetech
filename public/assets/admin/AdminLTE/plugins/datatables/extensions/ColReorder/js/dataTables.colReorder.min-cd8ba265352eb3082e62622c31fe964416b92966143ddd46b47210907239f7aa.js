/*!
 ColReorder 1.1.3
 ©2010-2014 SpryMedia Ltd - datatables.net/license
*/
!function(t,e,o){function s(t){for(var e=[],o=0,s=t.length;s>o;o++)e[t[o]]=o;return e}function a(t,e,o){e=t.splice(e,1)[0],t.splice(o,0,e)}function n(t,e,o){for(var s=[],a=0,n=t.childNodes.length;n>a;a++)1==t.childNodes[a].nodeType&&s.push(t.childNodes[a]);e=s[e],null!==o?t.insertBefore(e,s[o]):t.appendChild(e)}t=function(t){t.fn.dataTableExt.oApi.fnColReorder=function(e,o,i){var r,l,d,f,h,u,c=!!t.fn.dataTable.Api,g=e.aoColumns.length;if(h=function(t,e,o){if(t[e]){var s=t[e].split("."),a=s.shift();isNaN(1*a)||(t[e]=o[1*a]+"."+s.join("."))}},o!=i)if(0>o||o>=g)this.oApi._fnLog(e,1,"ColReorder 'from' index is out of bounds: "+o);else if(0>i||i>=g)this.oApi._fnLog(e,1,"ColReorder 'to' index is out of bounds: "+i);else{for(d=[],r=0,l=g;l>r;r++)d[r]=r;a(d,o,i);var m=s(d);for(r=0,l=e.aaSorting.length;l>r;r++)e.aaSorting[r][0]=m[e.aaSorting[r][0]];if(null!==e.aaSortingFixed)for(r=0,l=e.aaSortingFixed.length;l>r;r++)e.aaSortingFixed[r][0]=m[e.aaSortingFixed[r][0]];for(r=0,l=g;l>r;r++){for(u=e.aoColumns[r],d=0,f=u.aDataSort.length;f>d;d++)u.aDataSort[d]=m[u.aDataSort[d]];c&&(u.idx=m[u.idx])}for(c&&t.each(e.aLastSort,function(t,o){e.aLastSort[t].src=m[o.src]}),r=0,l=g;l>r;r++)u=e.aoColumns[r],"number"==typeof u.mData?(u.mData=m[u.mData],e.oApi._fnColumnOptions(e,r,{})):t.isPlainObject(u.mData)&&(h(u.mData,"_",m),h(u.mData,"filter",m),h(u.mData,"sort",m),h(u.mData,"type",m),e.oApi._fnColumnOptions(e,r,{}));if(e.aoColumns[o].bVisible){for(d=this.oApi._fnColumnIndexToVisible(e,o),f=null,r=o>i?i:i+1;null===f&&g>r;)f=this.oApi._fnColumnIndexToVisible(e,r),r++;for(h=e.nTHead.getElementsByTagName("tr"),r=0,l=h.length;l>r;r++)n(h[r],d,f);if(null!==e.nTFoot)for(h=e.nTFoot.getElementsByTagName("tr"),r=0,l=h.length;l>r;r++)n(h[r],d,f);for(r=0,l=e.aoData.length;l>r;r++)null!==e.aoData[r].nTr&&n(e.aoData[r].nTr,d,f)}for(a(e.aoColumns,o,i),a(e.aoPreSearchCols,o,i),r=0,l=e.aoData.length;l>r;r++)h=e.aoData[r],c?(h.anCells&&a(h.anCells,o,i),"dom"!==h.src&&t.isArray(h._aData)&&a(h._aData,o,i)):(t.isArray(h._aData)&&a(h._aData,o,i),a(h._anHidden,o,i));for(r=0,l=e.aoHeader.length;l>r;r++)a(e.aoHeader[r],o,i);if(null!==e.aoFooter)for(r=0,l=e.aoFooter.length;l>r;r++)a(e.aoFooter[r],o,i);for(c&&new t.fn.dataTable.Api(e).rows().invalidate(),r=0,l=g;l>r;r++)t(e.aoColumns[r].nTh).off("click.DT"),this.oApi._fnSortAttachListener(e,e.aoColumns[r].nTh,r);t(e.oInstance).trigger("column-reorder",[e,{iFrom:o,iTo:i,aiInvertMapping:m}])}};var i=function(e,o){var s;if(t.fn.dataTable.Api?s=new t.fn.dataTable.Api(e).settings()[0]:e.fnSettings?s=e.fnSettings():"string"==typeof e?t.fn.dataTable.fnIsDataTable(t(e)[0])&&(s=t(e).eq(0).dataTable().fnSettings()):e.nodeName&&"table"===e.nodeName.toLowerCase()?t.fn.dataTable.fnIsDataTable(e.nodeName)&&(s=t(e.nodeName).dataTable().fnSettings()):e instanceof jQuery?t.fn.dataTable.fnIsDataTable(e[0])&&(s=e.eq(0).dataTable().fnSettings()):s=e,s._colReorder)throw"ColReorder already initialised on table #"+s.nTable.id;var a=t.fn.dataTable.camelToHungarian;return a&&(a(i.defaults,i.defaults,!0),a(i.defaults,o||{})),this.s={dt:null,init:t.extend(!0,{},i.defaults,o),fixed:0,fixedRight:0,reorderCallback:null,mouse:{startX:-1,startY:-1,offsetX:-1,offsetY:-1,target:-1,targetIndex:-1,fromIndex:-1},aoTargets:[]},this.dom={drag:null,pointer:null},this.s.dt=s,this.s.dt._colReorder=this,this._fnConstruct(),s.oApi._fnCallbackReg(s,"aoDestroyCallback",t.proxy(this._fnDestroy,this),"ColReorder"),this};return i.prototype={fnReset:function(){for(var t=[],e=0,o=this.s.dt.aoColumns.length;o>e;e++)t.push(this.s.dt.aoColumns[e]._ColReorder_iOrigCol);return this._fnOrderColumns(t),this},fnGetCurrentOrder:function(){return this.fnOrder()},fnOrder:function(t){if(t===o){for(var t=[],e=0,a=this.s.dt.aoColumns.length;a>e;e++)t.push(this.s.dt.aoColumns[e]._ColReorder_iOrigCol);return t}return this._fnOrderColumns(s(t)),this},_fnConstruct:function(){var t,e=this,o=this.s.dt.aoColumns.length;for(this.s.init.iFixedColumns&&(this.s.fixed=this.s.init.iFixedColumns),this.s.fixedRight=this.s.init.iFixedColumnsRight?this.s.init.iFixedColumnsRight:0,this.s.init.fnReorderCallback&&(this.s.reorderCallback=this.s.init.fnReorderCallback),t=0;o>t;t++)t>this.s.fixed-1&&t<o-this.s.fixedRight&&this._fnMouseListener(t,this.s.dt.aoColumns[t].nTh),this.s.dt.aoColumns[t]._ColReorder_iOrigCol=t;this.s.dt.oApi._fnCallbackReg(this.s.dt,"aoStateSaveParams",function(t,o){e._fnStateSave.call(e,o)},"ColReorder_State");var a=null;if(this.s.init.aiOrder&&(a=this.s.init.aiOrder.slice()),this.s.dt.oLoadedState&&"undefined"!=typeof this.s.dt.oLoadedState.ColReorder&&this.s.dt.oLoadedState.ColReorder.length==this.s.dt.aoColumns.length&&(a=this.s.dt.oLoadedState.ColReorder),a)if(e.s.dt._bInitComplete)o=s(a),e._fnOrderColumns.call(e,o);else{var n=!1;this.s.dt.aoDrawCallback.push({fn:function(){if(!e.s.dt._bInitComplete&&!n){n=!0;var t=s(a);e._fnOrderColumns.call(e,t)}},sName:"ColReorder_Pre"})}else this._fnSetColumnIndexes()},_fnOrderColumns:function(e){if(e.length!=this.s.dt.aoColumns.length)this.s.dt.oInstance.oApi._fnLog(this.s.dt,1,"ColReorder - array reorder does not match known number of columns. Skipping.");else{for(var o=0,s=e.length;s>o;o++){var n=t.inArray(o,e);o!=n&&(a(e,n,o),this.s.dt.oInstance.fnColReorder(n,o))}(""!==this.s.dt.oScroll.sX||""!==this.s.dt.oScroll.sY)&&this.s.dt.oInstance.fnAdjustColumnSizing(!1),this.s.dt.oInstance.oApi._fnSaveState(this.s.dt),this._fnSetColumnIndexes(),null!==this.s.reorderCallback&&this.s.reorderCallback.call(this)}},_fnStateSave:function(e){var o,s,a,n=this.s.dt.aoColumns;if(e.ColReorder=[],e.aaSorting){for(o=0;o<e.aaSorting.length;o++)e.aaSorting[o][0]=n[e.aaSorting[o][0]]._ColReorder_iOrigCol;var i=t.extend(!0,[],e.aoSearchCols);for(o=0,s=n.length;s>o;o++)a=n[o]._ColReorder_iOrigCol,e.aoSearchCols[a]=i[o],e.abVisCols[a]=n[o].bVisible,e.ColReorder.push(a)}else if(e.order){for(o=0;o<e.order.length;o++)e.order[o][0]=n[e.order[o][0]]._ColReorder_iOrigCol;for(i=t.extend(!0,[],e.columns),o=0,s=n.length;s>o;o++)a=n[o]._ColReorder_iOrigCol,e.columns[a]=i[o],e.ColReorder.push(a)}},_fnMouseListener:function(e,o){var s=this;t(o).on("mousedown.ColReorder",function(t){t.preventDefault(),s._fnMouseDown.call(s,t,o)})},_fnMouseDown:function(s,a){var n=this,i=t(s.target).closest("th, td").offset(),r=parseInt(t(a).attr("data-column-index"),10);r!==o&&(this.s.mouse.startX=s.pageX,this.s.mouse.startY=s.pageY,this.s.mouse.offsetX=s.pageX-i.left,this.s.mouse.offsetY=s.pageY-i.top,this.s.mouse.target=this.s.dt.aoColumns[r].nTh,this.s.mouse.targetIndex=r,this.s.mouse.fromIndex=r,this._fnRegions(),t(e).on("mousemove.ColReorder",function(t){n._fnMouseMove.call(n,t)}).on("mouseup.ColReorder",function(t){n._fnMouseUp.call(n,t)}))},_fnMouseMove:function(t){if(null===this.dom.drag){if(5>Math.pow(Math.pow(t.pageX-this.s.mouse.startX,2)+Math.pow(t.pageY-this.s.mouse.startY,2),.5))return;this._fnCreateDragNode()}this.dom.drag.css({left:t.pageX-this.s.mouse.offsetX,top:t.pageY-this.s.mouse.offsetY});for(var e=!1,o=this.s.mouse.toIndex,s=1,a=this.s.aoTargets.length;a>s;s++)if(t.pageX<this.s.aoTargets[s-1].x+(this.s.aoTargets[s].x-this.s.aoTargets[s-1].x)/2){this.dom.pointer.css("left",this.s.aoTargets[s-1].x),this.s.mouse.toIndex=this.s.aoTargets[s-1].to,e=!0;break}e||(this.dom.pointer.css("left",this.s.aoTargets[this.s.aoTargets.length-1].x),this.s.mouse.toIndex=this.s.aoTargets[this.s.aoTargets.length-1].to),this.s.init.bRealtime&&o!==this.s.mouse.toIndex&&(this.s.dt.oInstance.fnColReorder(this.s.mouse.fromIndex,this.s.mouse.toIndex),this.s.mouse.fromIndex=this.s.mouse.toIndex,this._fnRegions())},_fnMouseUp:function(){t(e).off("mousemove.ColReorder mouseup.ColReorder"),null!==this.dom.drag&&(this.dom.drag.remove(),this.dom.pointer.remove(),this.dom.drag=null,this.dom.pointer=null,this.s.dt.oInstance.fnColReorder(this.s.mouse.fromIndex,this.s.mouse.toIndex),this._fnSetColumnIndexes(),(""!==this.s.dt.oScroll.sX||""!==this.s.dt.oScroll.sY)&&this.s.dt.oInstance.fnAdjustColumnSizing(!1),this.s.dt.oInstance.oApi._fnSaveState(this.s.dt),null!==this.s.reorderCallback&&this.s.reorderCallback.call(this))},_fnRegions:function(){var e=this.s.dt.aoColumns;this.s.aoTargets.splice(0,this.s.aoTargets.length),this.s.aoTargets.push({x:t(this.s.dt.nTable).offset().left,to:0});for(var o=0,s=0,a=e.length;a>s;s++)s!=this.s.mouse.fromIndex&&o++,e[s].bVisible&&this.s.aoTargets.push({x:t(e[s].nTh).offset().left+t(e[s].nTh).outerWidth(),to:o});0!==this.s.fixedRight&&this.s.aoTargets.splice(this.s.aoTargets.length-this.s.fixedRight),0!==this.s.fixed&&this.s.aoTargets.splice(0,this.s.fixed)},_fnCreateDragNode:function(){var e=""!==this.s.dt.oScroll.sX||""!==this.s.dt.oScroll.sY,o=this.s.dt.aoColumns[this.s.mouse.targetIndex].nTh,s=o.parentNode,a=s.parentNode,n=a.parentNode,i=t(o).clone();this.dom.drag=t(n.cloneNode(!1)).addClass("DTCR_clonedTable").append(t(a.cloneNode(!1)).append(t(s.cloneNode(!1)).append(i[0]))).css({position:"absolute",top:0,left:0,width:t(o).outerWidth(),height:t(o).outerHeight()}).appendTo("body"),this.dom.pointer=t("<div></div>").addClass("DTCR_pointer").css({position:"absolute",top:e?t("div.dataTables_scroll",this.s.dt.nTableWrapper).offset().top:t(this.s.dt.nTable).offset().top,height:e?t("div.dataTables_scroll",this.s.dt.nTableWrapper).height():t(this.s.dt.nTable).height()}).appendTo("body")},_fnDestroy:function(){var e,o;for(e=0,o=this.s.dt.aoDrawCallback.length;o>e;e++)if("ColReorder_Pre"===this.s.dt.aoDrawCallback[e].sName){this.s.dt.aoDrawCallback.splice(e,1);break}t(this.s.dt.nTHead).find("*").off(".ColReorder"),t.each(this.s.dt.aoColumns,function(e,o){t(o.nTh).removeAttr("data-column-index")}),this.s=this.s.dt._colReorder=null},_fnSetColumnIndexes:function(){t.each(this.s.dt.aoColumns,function(e,o){t(o.nTh).attr("data-column-index",e)})}},i.defaults={aiOrder:null,bRealtime:!1,iFixedColumns:0,iFixedColumnsRight:0,fnReorderCallback:null},i.version="1.1.3",t.fn.dataTable.ColReorder=i,t.fn.DataTable.ColReorder=i,"function"==typeof t.fn.dataTable&&"function"==typeof t.fn.dataTableExt.fnVersionCheck&&t.fn.dataTableExt.fnVersionCheck("1.9.3")?t.fn.dataTableExt.aoFeatures.push({fnInit:function(t){var e=t.oInstance;return t._colReorder?e.oApi._fnLog(t,1,"ColReorder attempted to initialise twice. Ignoring second"):(e=t.oInit,new i(t,e.colReorder||e.oColReorder||{})),null},cFeature:"R",sFeature:"ColReorder"}):alert("Warning: ColReorder requires DataTables 1.9.3 or greater - www.datatables.net/download"),t.fn.dataTable.Api&&(t.fn.dataTable.Api.register("colReorder.reset()",function(){return this.iterator("table",function(t){t._colReorder.fnReset()})}),t.fn.dataTable.Api.register("colReorder.order()",function(t){return t?this.iterator("table",function(e){e._colReorder.fnOrder(t)}):this.context.length?this.context[0]._colReorder.fnOrder():null})),i},"function"==typeof define&&define.amd?define(["jquery","datatables"],t):"object"==typeof exports?t(require("jquery"),require("datatables")):jQuery&&!jQuery.fn.dataTable.ColReorder&&t(jQuery,jQuery.fn.dataTable)}(window,document);