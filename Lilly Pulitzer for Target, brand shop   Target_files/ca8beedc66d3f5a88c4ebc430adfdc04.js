Bootstrapper.bindDOMParsed(function(){var Bootstrapper=window["Bootstrapper"];var ensightenOptions=Bootstrapper.ensightenOptions;function fireAPixel(){var prdId,catAr,catStr,url1,el1,node,prot=document.location.protocol;catAr=s_ens.pageName.split(": ");if(prot!="http:"&&prot!="https:")prot="http:";catStr=catAr.map(encodeURIComponent).join();if(/,undefined/.test(catStr))catStr=catStr.replace(",undefined","");url1="//pixel.mathtag.com/event/js?mt_id\x3d360424\x26mt_adid\x3d100306\x26s1\x3d"+catStr;
el1=document.createElement("script");el1.type="text/javascript";el1.src=prot+url1;node=document.getElementsByTagName("body")[0];node.appendChild(el1)}function fireBPixel(){var prdId,catAr,catStr,url1,el1,node,prot=document.location.protocol;catAr=s_ens.pageName.split(": ");if(prot!="http:"&&prot!="https:")prot="http:";catStr=catAr.map(encodeURIComponent).join();if(/,undefined/.test(catStr))catStr=catStr.replace(",undefined","");url1="//pixel.mathtag.com/event/js?mt_id\x3d497236\x26mt_adid\x3d100306\x26s1\x3d"+
catStr;el1=document.createElement("script");el1.type="text/javascript";el1.src=prot+url1;node=document.getElementsByTagName("body")[0];node.appendChild(el1)}var prog_retarget="";try{try{prog_retarget=Bootstrapper.Cookies.get("prog_retarget")}catch(e){}if(typeof prog_retarget==="undefined"||prog_retarget.length!==5){rnd=Math.floor(Math.random()*2);rtg_vals=["rtg_a","rtg_b"];prog_retarget=rtg_vals[rnd];Bootstrapper.Cookies.set("prog_retarget",prog_retarget)}}catch(e){}try{if(typeof prog_retarget!==
"undefined"&&prog_retarget=="rtg_a")var timerId=setInterval(function(){if(typeof s_ens!="undefined"&&typeof s_ens.pageName!="undefined"){fireAPixel();clearInterval(timerId)}},1E3)}catch(rtg_a_err){}try{if(typeof prog_retarget!=="undefined"&&prog_retarget=="rtg_b")var timerId=setInterval(function(){if(typeof s_ens!="undefined"&&typeof s_ens.pageName!="undefined"){fireBPixel();clearInterval(timerId)}},1E3)}catch(rtg_b_err){}},474034,250200);