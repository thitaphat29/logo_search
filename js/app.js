var program = {
	type : ["loan program","scholarship program"],
	level : ["K-12", "High school"],

	checkProgram : function(type_selected, level_selected){

		if(type_selected!=""&&level_selected!=""){
			if(($.inArray(level_selected, this.level) != -1) && ($.inArray(type_selected, this.type) != -1)){
				return true;
			}
		}else if(type_selected!=""){
			if($.inArray(type_selected, this.type) !== -1){
				return true;
			}
		}else if(level_selected!=""){
			if($.inArray(level_selected, this.level) !== -1){
				return true;
			}
		}
		return false;
	}
};

var logos = [];
var logo1, logo2, logo3, logo4, logo5, logo6, logo7, logo8;

$(document).ready(function() {
	
	setImageValue();

	$('.search-form').submit( function(e){
		e.preventDefault();
	

		getResult();
	});

});

function setImageValue(){ // can be get from external file
	logo1 = Object.create(program);
	logo2 = Object.create(program);
	logo3 = Object.create(program);
	logo4 = Object.create(program);
	logo5 = Object.create(program);
	logo6 = Object.create(program);
	logo7 = Object.create(program);
	logo8 = Object.create(program);

	/* --- Set Value to each image logo --- */
	logo1.type = ["loan program","scholarship program"];
	logo1.level = ["K-12"]; 

	logo2.type = ["loan program"];
	logo2.level = ["K-12", "High school"]

	logo3.type = ["scholarship program"];
	logo3.level = ["K-12"]; 

	logo4.type = ["scholarship program"];
	logo4.level = ["High school"];

	logo5.type = ["loan program","scholarship program"];
	logo5.level = ["K-12", "High school"];

	logo6.type = ["loan program"];
	logo6.level = ["K-12", "High school"];

	logo7.type = ["loan program"];
	logo7.level = ["High school"]

	logo8.type = ["loan program","scholarship program"];
	logo8.level = ["K-12", "High school"];


	/*--- add each logo object to the array --- */
	logos.push(logo1);
	logos.push(logo2);
	logos.push(logo3);
	logos.push(logo4);
	logos.push(logo5);
	logos.push(logo6);
	logos.push(logo7);
	logos.push(logo8);
}

function getResult(){

	/* --- get value from select options --- */
	var program_type_selected = $("#select-program option:selected").val(); 
	var program_level_selected = $("#select-level option:selected").val();



	if((program_type_selected == "") && (program_level_selected == "")){
		/* --- set all logos to color --- */
		$.each(logos, function(i, lg){	
			$(".logo .logo" + (i+1)+"-color").css("display","inline-block");
			$(".logo .logo" + (i+1) + "-gray").css("display","none");
			console.log(i+1);
		});	
	}else{
		$.each(logos, function(i, lg){
			if(lg.checkProgram(program_type_selected, program_level_selected)){
				console.log("logo" + (i+1) + " : Change to color image");
				$(".logo .logo" + (i+1)+"-color").css("display","inline-block");
				$(".logo .logo" + (i+1) + "-gray").css("display","none");
			}else{
				console.log("logo" + (i+1) + " : doesn't match");
				$(".logo .logo" + (i+1)+"-color").css("display","none");
				$(".logo .logo" + (i+1) + "-gray").css("display","inline-block");
			}
		});	
	}
}