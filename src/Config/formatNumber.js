export const formatNumber = (number,n, x)=>{
	if(typeof(number) != "number"){
		return 0;
	}
	if(typeof(n) != "number"){
		n = 0;
	}
	if(typeof(x) != "number"){
		x = 0;
	}
    let re = '\\d(?=(\\d{' + (n || 3) + '})+' + (x > 0 ? '\\.' : '$') + ')';
    return number.toFixed(Math.max(0, ~~x)).replace(new RegExp(re, 'g'), '$&,');
}