	var demoImg = document.getElementById("demo_img");
	var demoInput = document.getElementById("demo_input");
    //Òþ²Øtext block£¬ÏÔÊ¾password block
	function hideShowPsw(){
		if (demoInput.type == "password") {
			demoInput.type = "text";
			demo_img.src = "invisible.png";
		}else {
			demoInput.type = "password";
			demo_img.src = "visible.png";
		}
	}
	