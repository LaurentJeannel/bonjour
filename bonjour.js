exports.action = function(data){

if(data.bonjour!==undefined){
	var phrasebonjour=JarvisIA.reco
	var reg = "/"+data.bonjour+"(.+)/i" ; var rgxp=eval(reg) ; var temp = phrasebonjour.match(rgxp); console.log(temp);var phrasebonjour =temp[1].trim()
	console.log(phrasebonjour)
	JarvisIASpeech(phrasebonjour+" ; "+data.bonjourplus)
	return
}
return
}