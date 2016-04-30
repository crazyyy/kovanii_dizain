!function(){for(var e,n=function(){},o=["assert","clear","count","debug","dir","dirxml","error","exception","group","groupCollapsed","groupEnd","info","log","markTimeline","profile","profileEnd","table","time","timeEnd","timeline","timelineEnd","timeStamp","trace","warn"],i=o.length,r=window.console=window.console||{};i--;)e=o[i],r[e]||(r[e]=n)}();



$('.leftside a').on('click', function(event) {
  if ( $(this).parent('li').has('.sub-menu').length > 0  ) {
    event.preventDefault();
    $(this).parent('li').toggleClass('display-sub-menu')
  }
})