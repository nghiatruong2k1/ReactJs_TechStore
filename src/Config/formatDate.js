export const formatDate = (date,strFormat)=>{
	const ndate = new Date(date);
	return ndate.toLocaleString();
}