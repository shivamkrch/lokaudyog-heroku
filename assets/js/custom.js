$( document ).ready(function(){

	$('.button-collapse').sideNav();

	$('select').material_select();

	$('.tooltipped').tooltip({delay: 50});

	$('ul.tabbing').tabs();

	$('.modal').modal();

	$('.dropdown-button').dropdown({
      inDuration: 300,
      outDuration: 225,
      constrainWidth: false,
      hover: true,
      gutter: 0,
      belowOrigin: false,
      alignment: 'left',
      stopPropagation: false
    }
  );

})