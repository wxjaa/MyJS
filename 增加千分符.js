function addqianfenwei(str){
	var re=/(\d{1,3})(?=(\d{3})+(?:$|\D))/g;
	var str1=typeof str=="string"?str:str+"";
	var str2=str1.replace(re,"$1,");
	return str2;		   	
}