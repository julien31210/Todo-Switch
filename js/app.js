$(document).ready(function(){
	alert("Bienvenue à toi utilisateur de la todolist! ;-)");
	console.log("Merci de bien gérer les tâches");
	
	$(".cocher").click(function(){
		var ca=$(this).prev();
		$(this).toggleClass("valide");
		ca.toggleClass("valide");
		console.log("magique");
	})

	$("#ajouter").click(function(){
		var ajout=$("#ajoutinp").val();
		$(".liste").append("<li class='element nonvalide'>" + ajout + "</li>");
		$(".liste").append($("<button>X</button>").click(function(){
			var ca=$(this).prev();
			$(this).toggleClass("valide");
			ca.toggleClass("valide");
		}))
		$("#ajoutinp").val("");
		localStorage.setItem("ajoutinp", ajout);
	})

	$('#done').click(function(){
		$("")
	})
	$('#todo').click(function(){
		$(".valide").css("display", "none");
	})
	$('#all').click(function(){

	})



});