function templateCheck() {

		return 'content' in document.createElement('template');

}

if(templateCheck()){

}else $('template').hide();