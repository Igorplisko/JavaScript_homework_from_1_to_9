function task_4() {
    function arr_sort(arr) {
        var i = 0;
        while (i < arr.length - 1) {
            i++;
            var arr_min = arr[i];
            var j = i;
            while (j < arr.length - 1) {
                j++;
                if (arr[j] < arr_min) {
                    var min = arr[i];
                    arr_min = arr[j];
                    arr[i] = arr_min;
                    arr[j] = min;
                }
            }
        }
        return arr;
    }
    arr_sort([1, 22, 13, 4, 2, 3, 2, 6, 7, 8, 9, 5]);
    debugger;
}




//  //  function task_4() {        //2version!!!!

// function sortArray (arr) {
//         let result = [];
//         let arr_copy = [...arr];

//         arr.forEach((element,index,arr)=>{
//             let min = Math.min(...arr_copy);
//             result.push(min);
//             let min_index = arr_copy.findIndex(e => e === min);
//             arr_copy.splice(min_index,1);
//         });
//         return result;
// }

// sortArray([2,3,5,7,8,1,2])
// (7) [1, 2, 2, 3, 5, 7, 8]