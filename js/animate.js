$(window).on('load', function(){
        if ( window.innerWidth>799 ) {
		
		$('#brands').toggleClass("hidden");
		$('#brands.hidden').toggleClass("animated");
		$('#new_catalogs').toggleClass("hidden");
		
		var mainBodyScroll = function(event){
			
			var windowHeight = $(window).height();
			var loadingElements = {
				/*"#brands": {
					position: 0,
					loaded: false,
					interval: 100,
				},*/
				"#brands .social": {
					position: 0,
					loaded: false,
					interval: 300,
				},
				"#new_catalogs ": {
					position: 0,
					loaded: false,
					interval: 500,
				},
				"#advantages": {
					position: 0,
					loaded: false,
					interval: 200,
				},
				"#more_about": {
					position: 0,
					loaded: false,
					interval: 400,
				},
				"#certificates": {
					position: 0,
					loaded: false,
					interval: 400,
				},
				"#contacts": {
					position: 0,
					loaded: false,
					interval: 200,
				},
			};
			
			$.each(loadingElements, function(id, nextElement){
				var $nextElement = $(id);
				loadingElements[id].position = $nextElement.offset().top - windowHeight;
			});
	
			if($(window).scrollTop() > 0){
				$.each(loadingElements, function(id, nextElement){
				  $(id).addClass("hidden");
				  if($(window).scrollTop() > loadingElements[id].position + loadingElements[id].interval){
				    $(id).addClass("animated");
				  }
				});
			}
	
		};
		
		$(window).on("load scroll", mainBodyScroll);
	    }
            
});