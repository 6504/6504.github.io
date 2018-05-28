	// 2. This code loads the IFrame Player API code asynchronously.
	var tag = document.createElement('script');

	tag.src = "https://www.youtube.com/iframe_api";
	var firstScriptTag = document.getElementsByTagName('script')[0];
	firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

	var player;
	function onYouTubeIframeAPIReady() {

		player = new YT.Player('player', {
			videoId: 'Z8d_yqXB6-E',
			events: {
				'onStateChange': onPlayerStateChange
			}
		});
	}

	var done = false;
	function onPlayerStateChange(event) {
		switch(event.data){
			case 1:
				console.log("playing");
				break;
			default:
				console.log("otherwise");
				break;
		}
	}
	function stopVideo() {
		player.stopVideo();
	}
