var d = new Date()
function week() {
	var weekBase = (((d.getMonth()*31)+d.getDate()-(d.getDay()+1))/7)-1;
    if (d.getDay() <= 6) {
    	weekBase += 1;
    };
    return Math.round(weekBase);
};
var schoolWeek=week();
if (((d.getMonth()*31)+d.getDate())>=102) {
	schoolWeek = schoolWeek - 1; //spring break
}
if (((d.getMonth()*31)+d.getDate())>=123) {schoolWeek=schoolWeek-1;} //fix rounding issue
var currentWeek = document.getElementById("WK"+schoolWeek);
currentWeek.className = "currentWeek";