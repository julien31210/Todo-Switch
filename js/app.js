$(document).ready(function(){
	alert("Bienvenue à toi utilisateur de la todolist! ;-)");
	console.log("Merci de bien gérer les tâches");
	$(".liste").append("<li>" + "ANALYSER LE CODE AVANT DE COMMENCER" + "</li>");

	$("#ajouter").click(function(){
		var ajout=$("#ajoutinp").val();
		$(".liste").append("<li>" + ajout + "</li>");
		localStorage.setItem("ajoutinp", ajout);
	})





});