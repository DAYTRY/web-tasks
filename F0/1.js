	var demoImg = document.getElementById("demo_img");
	var demoInput = document.getElementById("demo_input");
    //����text block����ʾpassword block
	function hideShowPsw(){
		if (demoInput.type == "password") {
			demoInput.type = "text";
			demo_img.src = "invisible.png";
		}else {
			demoInput.type = "password";
			demo_img.src = "visible.png";
		}
	}
	