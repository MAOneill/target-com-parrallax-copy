/* Script imported from http://Img3.targetimg3.com/trra/bm-trra_R2_20150322.1/javascript/recommendation-minified.js */
Target.register("controller","recommendation",{catUrl:"",recommendationConfig:"",useRecommendationConfig:"",defMinVal:4,defMaxVal:4,urlParams:{},envUrls:{prod:"https://prz-secure.target.com/recommendations/v1",stg:"http://10.63.22.70:8080/recommendations/v1",qa:"http://10.63.22.70:8080/recommendations/v1"},param:{productId:"",userId:"",min:"",max:"",visId:"",searchTerm:"",context:""},init:function(){var a=this;a.urlParams=Target.controller.header.unSerialize(location.search||location.hash);if(typeof recommendationConfig!=="undefined"&&!$.isEmptyObject(recommendationConfig)&&typeof useRecommendationConfig!=="undefined"&&useRecommendationConfig=="Y"){if(typeof recommendationConfig=="string"){recommendationConfig=JSON.parse(recommendationConfig);}a.recommendationConfig=recommendationConfig;a.catUrl=typeof a.urlParams.prz_env!="undefined"&&a.urlParams.prz_env!=""?a.envUrls[a.urlParams.prz_env]:recommendationConfig.serviceHostName?recommendationConfig.serviceHostName:"";$.each(recommendationConfig.components,function(b,d){a._sendRequest(b,d);});}},_sendRequest:function(a,b){$.ajax({type:"GET",url:this._createUrl(this.catUrl,b,a),async:true,jsonpCallback:"jsonCallback",contentType:"application/json",dataType:"jsonp",timeout:10000,success:function(){},error:function(){}});},_createUrl:function(a,b){var d=/\[CS]([^)]+)\[CE]/,c="",e="",f="",g=document.cookie.split(";"),h="";f=e="";f=Target.controller.header.cookie.read("s_vi")?Target.controller.header.cookie.read("s_vi"):"";e=Target.controller.header.cookie.read("WC_PERSISTENT");for(var j=0;j<g.length;j++){h=g[j];if(h.indexOf("WC_USERACTIVITY_")!=-1){c=h.substring(h.indexOf("WC_USERACTIVITY_")+16,h.indexOf("="));}}e=c===""?e:c;this.param.userId=e;this.param.visId=f!=""?f.match(d)[1].split("|")[1]:"";this.param.min=typeof b.min!="undefined"?b.min:this.defMinVal;this.param.max=typeof b.max!="undefined"?b.max:this.defMaxVal;if(typeof Target.globals.searchTerm!="undefined"&&Target.globals.searchTerm.searchTerm!=""){if(typeof String.prototype.trim!=="function"){String.prototype.trim=function(){return this.replace(/^\s+|\s+$/g,"");};}this.param.searchTerm=Target.globals.searchTerm.searchTerm.replace(/ {1,}/g," ").trim();this.param.searchTerm=encodeURI(this.param.searchTerm).replace(/%20/g,"+");}else{delete this.param.searchTerm;}f=typeof this.urlParams.prz_catid!="undefined"&&this.urlParams.prz_catid!=""?this.urlParams.prz_catid:typeof b.categoryId!="undefined"&&b.categoryId!==null&&b.categoryId!==""?b.categoryId:"";if(f!==""){f="categoryId,"+f;this.param.context="placementId,"+(typeof this.urlParams.prz_placement!="undefined"&&this.urlParams.prz_placement!=""?this.urlParams.prz_placement:b.placementName)+";"+f;}else{this.param.context="placementId,"+(typeof this.urlParams.prz_placement!="undefined"&&this.urlParams.prz_placement!=""?this.urlParams.prz_placement:b.placementName);}this.param.productId=typeof b.productId!="undefined"?b.productId:"";a+="?"+decodeURIComponent($.param(this.param));return a;},recommendationRender:{placementOrder:{},CURRENCY_TYPE:"$",strategyName:"",templateName:"",componentObj:{},currentComp:{},init:function(){this.loadInterface();},loadInterface:function(){},renderData:function(a,b){var d=this._getOrderConfig(b);this.templateName=b;this.strategyName=a.strategyName;this.currentComp=this.componentObj[b];this.placementOrder={};this[b](a,d);},pdpv2:function(a,b){this._verticalComponent(a,b,".pdpRightRailRR");},dlpv1:function(a,b){this._verticalComponent(a,b,"#dlpRightRail_1");},dlpv2:function(a,b){this._verticalComponent(a,b,"#dlpRightRail_2");},catbgv1:function(a,b){this._verticalComponent(a,b,"#catbgv1");},pdpv1:function(a,b){var d=this;if(a){var c=a.recommendations,e=c.length;if(typeof c!=="undefined"&&c){liHtml='<div class="pdpv1">';liHtml+='<h2 class="title">'+a.strategyDescription+"</h2>";liHtml+='<ul class="products-list component-carousel-2 loop paginationCount">';frameCount=4;count=countBack=0;$.each(c,function(f,g){if(count===0||count%2===0){if(count===0){liHtml+='<li class="component-container liContainer2"><ul class="ulContainer2">';}else{if(count%2===0&&count>countBack){liHtml+='</ul></li><li class="component-container liContainer2"><ul class="ulContainer2">';}}countBack=count;}liHtml+=count%2!==0&&e===4?'<li class="product no-bottom-border">':'<li class="product">';liHtml+='<div class="product-container">';liHtml+=d._getProduct(g,b);liHtml+="</div>";liHtml+="</li>";count++;});liHtml+="</ul></div>";$(".pdpRightRailRR").html(liHtml);Target.controller.globalUtils.checkIfCarousal(".component-carousel-2");}}},pdph1:function(a,b){this._horizontalComponent(a,b,"#pdpHorizontalRecommendation");},plph1:function(a,b){this._horizontalComponent(a,b,"#plpRecommendation");},slph1:function(a,b){this._horizontalComponent(a,b,"#slpRecommendation");},nslph1:function(a,b){this._horizontalComponent(a,b,"#slpRecommendation");},pdp404h1:function(a,b){this._horizontalComponent(a,b,"#pdpHorizontalRecommendation");},pdp404h2:function(a,b){this._horizontalComponent(a,b,"#pdpErrorVerticalRecommendation");},a2ch1:function(a,b){this._horizontalComponent(a,b,"#crossSell-atc");},cath770X250:function(a,b){this._horizontalComponent(a,b,"#cath770X250");},catcombo3p770X507:function(a,b){this._horizontalComponent(a,b,"#catcombo3p770X507");},catcombo4p770X477:function(a,b){this._horizontalComponent(a,b,"#catcombo4p770X477");},catbgh1:function(a,b){this._horizontalComponent(a,b,"#catbgh1");},awsmshoph1:function(a,b){this._horizontalComponent(a,b,"#awsmshoph1");},pdpErrorh1:function(a,b){this._horizontalComponent(a,b,"#pdpHorizontalRecommendation");},pdpErrorv1:function(a,b){this._horizontalComponent(a,b,"#pdpErrorVerticalRecommendation");},pdp404awsmh1:function(a,b){this._horizontalComponent(a,b,"#pdpErrorAwesomeShop");},_horizontalComponent:function(a,b,d){var c=this,e="",f=typeof c.currentComp.min!="undefined"?c.currentComp.min:4,g="",h="";if(a){var j=a.recommendations,l=j.length;g=c.templateName==="awsmshoph1"||c.templateName==="pdp404awsmh1"?'<ul class="products-list">':'<ul class="products-list component-carousel-'+f+' loop paginationCount">';if(typeof j!=="undefined"&&j){e=l>f?"with-bottom-border":"";lihHtml='<div class="pdph1">';if(c.templateName==="awsmshoph1"){lihHtml+='<div class="header1">';}lihHtml+='<h2 class="title">'+(c.templateName!=="awsmshoph1"?a.strategyDescription:"")+(c.templateName==="pdp404awsmh1"||c.templateName==="awsmshoph1"?"<a href='http://awesomeshop.target.com' class='logoLink' title='Target AwesomeShop'><span class='awesomeLogo'></span></a>":"")+"</h2>";if(c.templateName==="awsmshoph1"){lihHtml+='<p class="awesomeshopText'+e+'">';lihHtml+="Our top items in&nbsp;"+($(".search-large-text").html()!==null&&$(".search-large-text").html()!=="undefined"?$(".search-large-text").html():"&nbsp;this category");lihHtml+="</p>";lihHtml+="</div>";}lihHtml+=g;$.each(j,function(m,k){h=c.templateName==="awsmshoph1"||c.templateName==="pdp404awsmh1"?'<li class="product circle gradient">'+(k.rating==="5"?'<span class="label"><span class="labelText">highly reviewed</span></span>':""):'<li class="product component-container">';lihHtml+=h;lihHtml+='<div class="product-container '+e+'">';lihHtml+=c._getProduct(k,b);lihHtml+="</div>";lihHtml+="</li>";});lihHtml+="</ul></div>";$(d).removeClass("loading");$(d).html(lihHtml);Target.controller.globalUtils.checkIfCarousal(".component-carousel-"+f);}}},_verticalComponent:function(a,b,d){var c=this;if(a){var e=a.recommendations;if(typeof e!=="undefined"&&e){liHtml='<div class="vertical">';liHtml+='<h2 class="title">'+a.strategyDescription+"</h2>";liHtml+='<ul class="products-list">';$.each(e,function(f,g){liHtml+='<li class="product">';liHtml+='<div class="product-container">';liHtml+=c._getProduct(g,b);liHtml+="</div>";liHtml+="</li>";});liHtml+="</ul>";$(d).html(liHtml);}}},_getProduct:function(a,b){try{var d="",c=$.inArray("availMessage",b)!=-1?this._getAvailMsg(a):"",e=$.inArray("qiLink",b)!=-1?this._getQILink(a):"",f={image:'<div class="image-container">'+this._getImage(a)+e+"</div>",qiLink:"",price:'<div class="price-container">'+this._getPrice(a)+"</div>",brand:this._getBrandName(a),title:'<div class="producttitle-container">'+this._getTitle(a,40)+"</div>",promotions:'<div class="product-promotions">'+this._getPromotions(a)+"</div>",availMessage:"",rating:'<div class="bottomContent">'+c+'<div class="product-rating">'+this._getReview(a)+"</div></div>"};for(c=0;c<b.length;c++){d+=f[b[c]];}return d;}catch(g){}},_checkimage:function(){var a=a||"scene7.targetimg1.com";return window.location.protocol==="https:"?a.indexOf("scene7")>-1?"https://scene7-secure.targetimg1.com":"https://img1-secure.targetimg1.com":"http://"+a;},_getImage:function(a){var b=a.productTitle,d=a.productImage,c=a.productLink,e="",f="",g="";f="";var h={};if(b){g=b.replace(/-quot-/g,'"');}if(d.indexOf("scene7-secure.targetimg1.com")===-1&&useRecommendationConfig==="N"){e=this._checkimage();e+=a.productImage;}else{e=d;}f=e.indexOf("?")+1;h=Target.controller.header.unSerialize(e.substring(f));h.wid=h.hei=180;e=e.substring(0,f)+$.param(h);f=a.imageServer?'<a href="'+c+'" rel="nofollow" title="'+g+'">':'<a href="'+c+"?lnk=Rec|pdp|"+this.strategyName+"|"+this.templateName+'" rel="nofollow" title="'+g+'">';f+='<h3><img class="imgTag" original="'+e+'" alt="'+g+'" src="'+e+'" style="visibility: visible;"></h3>';f+="</a>";return f;},_getQILink:function(a){var b=a.productTitle;a=a.productId;var d="",c="";if(b){d=b.replace(/-quot-/g,'"');}c+='<a href="/QuickInfoView?width=700&amp;partNumber='+a+"&amp;overlayId=QuickView&amp;lnk=Rec|qi|"+a+"|"+this.strategyName+"|"+this.templateName+'" rel="nofollow" class="layer" onmousedown="" title="'+d+'">';c+='<div class="QILink"><span class="plus"> </span><span class="QIText">quick info</span><span class="screen-reader-only"> for '+b+" </span></div>";c+="</a>";return c;},_getBrandName:function(a){var b="",d="";if(a=a.brand){d="/bp/"+encodeURI(a).replace(/%20/g,"+");b='<a class="productBrand" href='+d+' title="'+a+'">'+a+"</a>";}return b;},_getTitle:function(a,b){var d="";d=a.productTitle;var c=a.productLink,e="";e="";if(d){e=d.replace(/-quot-/g,'"');e=this._trimString(e,b);return d=a.imageServer?'<a href="'+c+'" title="'+d+'" class="waRRtag" rel="nofollow">'+e+"</a>":'<a href="'+c+"?lnk=Rec|pdp|"+this.strategyName+"|"+this.templateName+'" title="'+d+'" class="waRRtag" rel="nofollow">'+e+"</a>";}},_trimString:function(a,b){return a.length>b?a.substring(0,b)+"...":a;},_getAvailMsg:function(a){var b="";if(["crossover","storeonly","online"][a.channel]==="storeonly"&&(a.soiPriceDisplay==="N"||a.soiPriceDisplay==="Y")){b="<div class='rr-instock'><span class='screen-reader-only'>available </span> in stores only</div>";}return b;},_getPrice:function(a){var b="",d="",c="",e="",f="",g=false,h=["crossover","storeonly","online"][a.channel];e="";var j=this.CURRENCY_TYPE;if(h==="storeonly"){if(a.soiPriceDisplay==="N"&&(a.pickupInStore===""||a.pickupInStore==="N")){b="<div class='pricevarybystore'>see store for price</div>";e="";}else{if(a.soiPriceDisplay==="Y"){b=this._getSalePrice(a);c="Store Price";}}}else{if(a.mapflag==="Y"&&(h==="online"||h==="crossover")){b=a.imageServer?"<a href='"+a.productLink+"' class='seelow'>see low price</a>":"<a href='"+a.productLink+"?lnk=Rec|pdp|"+this.strategyName+"|"+this.templateName+"' class='seelow'>see low price</a>";e="";}else{if((parseFloat(a.mapPrice)>parseFloat(a.salePrice)||parseFloat(a.mapPrice)>parseFloat(a.salePriceMin)||parseFloat(a.mapPrice)>parseFloat(a.salePriceMax))&&(h==="online"||h==="crossover")){b="<a href='"+a.productLink+"?lnk=Rec|pdp|"+this.strategyName+"|"+this.templateName+"' class='seelow'>see low price</a>";e="";}else{if(parseFloat(a.listPrice)>parseFloat(a.regularPrice)&&(a.relationshipType==="VC"||a.relationshipType==="SA"||a.relationshipType==="TAC"||a.relationshipType==="CC"||a.relationshipType==="VAC")){g=true;if(a.salePrice!==""&&parseFloat(a.salePrice)<parseFloat(a.regularPrice)){b=j+a.salePrice;d=j+a.listPrice;f="<span class='screen-reader-only'>Save dollar</span> - save "+j+(parseFloat(a.listPrice)-parseFloat(a.salePrice)).toFixed(2)+" ("+((parseFloat(a.listPrice)-parseFloat(a.salePrice))/parseFloat(a.listPrice)*100).toFixed(0)+")%";}else{if(a.salePrice===""||a.salePrice===a.regularPrice){b=j+a.regularPrice;d=j+a.listPrice;}}}else{b=a.salePriceMax!=""&&a.salePriceMin!=""?this._getSalePrice(a):j+a.salePrice;}}}}if(a.priceMax!=""&&a.priceMin!=""&&(a.priceMax!=a.salePriceMax||a.priceMin!=a.salePriceMin)&&(a.relationshipType==="VAP"||a.relationshipType==="VPC"||a.relationshipType==="COP")){d=a.priceMax!=a.priceMin?j+a.priceMin+" - "+j+a.priceMax:a.priceMax==a.priceMin&&a.salePriceMin!=a.salePriceMax?j+a.priceMin:j+a.priceMin;}else{if(a.priceMax!==""&&a.priceMin!==""&&(a.priceMax!=a.salePriceMax||a.priceMin!=a.salePriceMin)&&(a.relationshipType==="VC"||a.relationshipType==="SA"||a.relationshipType==="TAC"||a.relationshipType==="CC")){d=a.priceMax!=a.priceMin?j+a.priceMin+" - "+j+a.priceMax:a.priceMax===a.priceMin&&a.salePriceMin!=a.salePriceMax?j+a.priceMin:j+a.listPrice;}}if(parseFloat(a.listPrice)>parseFloat(a.salePrice)&&a.priceMin===""&&a.priceMax===""&&a.salePriceMin===""&&a.salePriceMax==""){d=j+a.listPrice;}e+="<span class='salePrice'>"+b+"</span>";if(this.templateName!="awsmshoph1"&&this.templateName!="pdp404awsmh1"){if(c){e+="<div style='display:inline-block'><span class='storeprice'>"+c+"</span></div>";}if(d){e+=g?"<p><span class=regprice>List: <span class='screen-reader-only'>List Price</span>"+d+f+"</span></p>":"<p><span class=regprice>reg: <span class='screen-reader-only'>Regular Price</span>"+d+"</span></p>";}}return e;},_getSalePrice:function(a){var b=this.CURRENCY_TYPE;return salePrice=a.salePriceMax==a.salePriceMin?b+a.salePrice:b+a.salePriceMin+" - "+b+a.salePriceMax;},_getReview:function(a){var b="";b=a.rating;var d="",c=["zero","one","two","three","four","five"],e=a.reviews?a.reviews:0,f=a.productTitle,g="",h="";g=a.productLink;h=a.imageServer?a.productReviewsLink:g+"?lnk=Rec|pdp|"+this.strategyName+"|"+this.templateName+'&amp;selectedTab=item-guestreviews-link""';if(b.indexOf(".")!=-1){d=(ratingTrim=b.substring(0,b.indexOf(".")))?c[ratingTrim]+"-half":"star-half";}else{if(b){d="stars-"+b;}}g=typeof b!="undefined"&&b!=null&&b>0?"<span class='screen-reader-only'>Average rating for "+f+": "+b+" out of 5 stars</span>":"<span class='screen-reader-only'>there are no guest ratings for "+f+" </span>";return b=a.reviews&&a.reviews>0?'<div class="base-stars"> '+g+' <div class="display-rating '+d+'"></div></div>'+(this.templateName!=="pdp404awsmh1"&&this.templateName!=="awsmshoph1"?'<a class="waRRtag" rel="nofollow" title="'+f+'" href="'+h+'"><span class="screen-reader-only">See all </span><span>('+e+')</span><span class="screen-reader-only"> reviews for '+f+"</span></a>":""):'<div class="base-stars"> '+g+' <div class="display-rating '+d+'"></div></div>';},_getPromotions:function(a){var b=this,d="",c=a.promoDescriptions;d='<ul class="promotionUl">';var e=0,f="";$.each(c,function(g,h){if(h!=""){f="";if(e==0){f='<span class="promoIcon"></span>';}d+='<li class="promotionLi">'+f+'<span class="promoText" alt="'+c+'" title="'+c+'">'+b._trimString(h,38)+"</span></li>";e++;}});d+="</ul>";return d;},_getOrderConfig:function(a){var b=this;!$.isEmptyObject(recommendationConfig)&&$.isEmptyObject(b.placementOrder)&&$.each(recommendationConfig.components,function(d,c){b.placementOrder[c.placementName]=c.placementOrder;b.componentObj[c.placementName]=c;});return b.placementOrder[a];}}});recommedArr=[];function jsonCallback(a){try{if(a!=""){if(recommedArr[a.context.split(";")[0].split(",")[1]]=a){var b=JSON.stringify(a);placementName=JSON.parse(b).context.split(";")[0].split(",")[1];Target.controller.recommendation.recommendationRender.renderData(a,placementName);}}else{for(i in recommedArr){i=="pdpv1"&&Target.controller.recommendation.recommendationRender.renderData(recommedArr[i],i);}}}catch(d){}}