

	function sampleFunc () {
		alert ( `${arguments.callee.name}: ${arguments[0]} | ${arguments[1]}` )
	}
	function modificator ( func ) {
		return func.bind(null, "test", "sample")
	}
	testFunc = modificator( sampleFunc )
	testFunc()



// Напилить код функции modificator, такой, чтобы в результате работы кода:
// sampleFunc: test | sample
