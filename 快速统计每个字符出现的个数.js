function Char(str) {
	var uchars = {};
	str.replace(/\S/g, function(l) {
		uchars[l] = (isNaN(uchars[l])) ? 1 : uchars[l] + 1
	})
	return uchars
}
console.log(Char('djkfhjkhallhjghfgjh')) //Object {d: 1, j: 4, k: 2, f: 2, h: 5…}