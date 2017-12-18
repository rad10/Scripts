function toBinary(inDec){
	var bin=[];
	while(inDec>0){
		bin.push(inDec%2);
		inDec=(inDec-(inDec%2))/2;
	}
	bin.reverse();
	return bin.join("");
}
function fromBinary(inBin){
	var outDec=0;
	var bin=inBin.toString().split("");
	inBin=[];
	for(var i=0;i<bin.length;i++){inBin[i]=parseInt(bin[i])}
	inBin.reverse();
	for(var i=0;i<inBin.length;i++){outDec+=(inBin[i]*Math.pow(2,i))}
	return outDec;
}
function toOctal(inDec){
	var oct=[];
	while(inDec>0){
		oct.push(inDec%8);
		inDec=(inDec-(inDec%8))/8;
	}
	oct.reverse();
	return oct.join("");
}
function fromOctal(inOct){
	var outDec=0;
	var oct=inOct.toString().split("");
	inOct=[];
	for(var i=0;i<oct.length;i++){inOct[i]=parseInt(oct[i])}
	inOct.reverse();
	for(var i=0;i<inOct.length;i++){outDec+=inOct[i]*Math.pow(8,i)}
	return outDec;
}
function toHex(inDec){
	var hex=[];
	while(inDec>0){
		switch(inDec%16){
			case 15:	hex.push("F");break;
			case 14:	hex.push("E");break;
			case 13:	hex.push("D");break;
			case 12:	hex.push("C");break;
			case 11:	hex.push("B");break;
			case 10:	hex.push("A");break;
			default:	hex.push((inDec%16).toString());break;
		}
		inDec=(inDec-(inDec%16))/16;
	}
	hex.reverse();
	return hex.join("");
}
function fromHex(inHex){
	var outDec=0;
	inHex=inHex.split("").reverse();
	for(var i=0;i<inHex.length;i++){
		switch(inHex[i].toUpperCase()){
			case "A":	outDec+=10*Math.pow(16,i);break;
			case "B":	outDec+=11*Math.pow(16,i);break;
			case "C":	outDec+=12*Math.pow(16,i);break;
			case "D":	outDec+=13*Math.pow(16,i);break;
			case "E":	outDec+=14*Math.pow(16,i);break;
			case "F":	outDec+=15*Math.pow(16,i);break;
			default:	outDec+=parseInt(inHex[i])*Math.pow(16,i);break;
	}}
	return outDec;
}