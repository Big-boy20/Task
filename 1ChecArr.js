let arr = [1,2,3,4,5];
let string = "не масив";
function checArr(myData){
	return Array.isArray(myData) ;
}
console.log(checArr(arr));
console.log(checArr(string));