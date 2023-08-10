
//var masterJson = {};
//var JsonArr = [];
//var t="";
//var min="";
//var max="";
//var supplierConstaint="";
//var maxInput="";
//var maxOutput="";
//var noBlades="";
//var  fluidType="";
//var  materialType="" ;
//var BladeShape="";
//var pipeSize="";
//var time1="";
var weight="";
 var meter="";
var cylinderPiston="";
data = {};
dataJson = {};
var htm='<div class="row" >'
		+'<div class="col-sm-6">'
	   +'<label for="weight">Select Motor Size (hp) </label>'
	   +'</div>'
		   
	   +'<div class="col-sm-6" >'
	   +'<select  class="form-control form-control-lg bg-info selectStyle"  id="motorSize" >'
	   +'<option value="0">--- Select Motor Size --- </option>'
	   +'<option value="0.37">0.5</option>'
	   +'<option value="0.55">0.75</option>'
	   +'<option value="0.75">1</option>'
	   +'<option value="1.1">1.5</option>'
	   +'<option value="1.5">2</option>'
	   +'<option value="1.8">2.5</option>'
	   +'<option value="2.2">3</option>'
	   +'<option value="3">4</option>'
	   +'<option value="4">5</option>'
	   +'<option value="4.4">6</option>'
	   +'<option value="5.2">7</option>'
	   +'<option value="6">8</option>'
	   +'<option value="7">9</option>'
	   +'<option value="7.5">10</option>'
	   +'</select>'
	   +'</div>'
	   +'</div>'
	  +'<br>'
	   
	   +'<div class="row">'
	   +'<div class="col-sm-6">'
	   +'<label for="meter">Select Arm Lenth (mm) </label>'
	   +'</div>'
	   
	   +'<div class="col-sm-6">'
	   +'<select  class="form-control form-control-lg bg-info selectStyle"  id="lengthType">'
	   +'<option value="0">--- Select meter --- </option>'
	   +'<option value="1" >103.94  </option>'
	   +'<option value="2">203.94</option>'
	   +'<option value="3">303.94</option>'
	  +'<option value="4">403.94</option>'
	  
	  
	   +'</select>'
	   +'</div>'
	   +'</div>'
	    +'<br>'
	   
	  
	    
	   +'<br>'
	   +'<div class="row"  >'
	   +'<div class="col-sm-6">'
	      +'<button type="button" class="btn btn-success btnStyle" id="checkConfg">CHECK CONFIGURATION </button>'
	   +'</div>'
	    +'<div class="col-sm-6">'
	     +'<button type="button" class="btn btn-success btnStyle" id="nextSubmit">NEXT LEVEL </button>'
	   +'</div>'
	   +'</div>'
  $("#main-div-conf").html(htm);
	   
	  $("#floatMaterial").change(function(){
		
		 fluidType=$("#fluidType").val();
		 floatMaterial=$("#floatMaterial").val();
		 console.log(" fluidType "+fluidType);
		  console.log(" floatMaterial "+floatMaterial);
		   $("#validMaterialMsg").prop("hidden",false);
		 if((fluidType==1 && floatMaterial==1) ||(fluidType==2 && floatMaterial==2) )
		 {
			 
			  $("#validMaterialMsg").html("Correct Selection ");
			  $(".validMaterialMsgStyle").css("color","green");
			  
		 }
		 else
		 {
			  $("#validMaterialMsg").html("Wrong Selection ");
			  $(".validMaterialMsgStyle").css("color","red");
		 }
	 
	  });
	 
	  
	   $("#checkConfg").click(function(){
		   alert("Configration done");
		   motorSize=$("#motorSize").val();
		   lengthType=$("#lengthType").val();
		   floatMaterial=$("#floatMaterial").val();
				dataJson = {};
				dataJson.pipe = motorSize ;
				dataJson.fluid = lengthType;
				
		   console.log("hp motor    "+motorSize);
		   console.log("main Type    "+lengthType);
		 
		   data.configure = dataJson;

				console.log(data);
//		  $("#main-div-conf").html("");
//		  $("#canvas-div").html("");
//		    mimic(pipeSize,fluidType,floatMaterial);
	   });
	   
	     $("#nextSubmit").click(function(){
//		   alert("ghh");
			 
		 
		  $("#main-div-conf").html("");
		  $("#main-div-conf").html('<img src="images/shaft_torque.png"  width="90%" height="90%">');
		
		  
		  $("#canvas-div").html("");
		  showQuestions();
		  
		   
	   });