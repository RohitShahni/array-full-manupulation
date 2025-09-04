// const months=['jan','feb','mar','april'];
// console.log(months);
// console.log(months.length);//for check length of array
// console.log(months[months.length-1]);//for last element of array



//  1. push() add element in last
// const months=['jan','feb','mar','april'];
// console.log(months);
// months.push('march',14,true);
// console.log(months);



// 2 .pop() remove last element
// const months=['jan','feb','mar','april'];
// console.log('before pop :',months);
// months.pop();
// let b = months.pop();
// console.log('removed element :',b);
// console.log('after pop :',months);


//3. shift() remove first element
// const months=['jan','feb','mar','april'];
// console.log('before shift method :',months);
// let a = months.shift();
// months.shift();
// console.log('removed element :',a);
// console.log('after shift method :',months);


// //4. unshift() add element in first
// const months=['jan','feb','mar','april'];
// console.log('before unshift method :',months);

// arr=['dec','nov',12,true];
// months.unshift('rohit',arr,'s');

// console.log('after unshift method :',months);


// // 5. concat() join two array
// const months=['jan','feb','mar','april'];
// const months2=['jan','feb','mar','april'];
// const months3=['jan','feb','mar','april'];
// console.log('before operation method :',months);

// const newArr=months.concat(months2,months3,'rohit',12,true);
// console.log('new array :',newArr);

// console.log('after operation method :',months);



// // 6. join() convert array into string
// const months=['jan','feb','mar','april'];
// console.log('before operation method :',months);

// const text=months.join(' and ');
// const text2=months.join(',');
// const text3=months.join('   ');
// const text4=months.join('-');

// console.log('join method :',text2);  
// console.log('join method :',text3);  
// console.log('join method :',text4);
// console.log('join method :',text);  

// console.log('after operation method :',months);





// //7.Array.isArray() check array or not
// const months=['jan','feb','mar','april'];
// const months2=[{name:'rohit',age:22}];
// console.log('before operation method :',months);

// const a=Array.isArray(months);
// const ob=Array.isArray(months2);

// const b=Array.isArray('rohit'); 
// const c=Array.isArray({name:'rohit',age:22});

// console.log('is array :',ob);
// console.log('is array :',a);  
// console.log('is array :',b);
// console.log('is array :',c);

// console.log('after operation method :',months);




// //8. forEach() loop in array is used for print all element of array 
// const months=['jan','feb','mar','april'];
// const months2=[{name:'rohit',age:22},{name:'mohit',age:23},{name:'sohit',age:24}];
// const numbers=[1,2,3,4,5,6,7,8,9,10];
// console.log('before operation method :',months);

// // months.forEach((value,index,array) => {
// //     console.log('value :',value);
// //     console.log('index :',index);
// //     console.log('array :',array);
// // })

// // let sum=0;
// // numbers.forEach((value)=>{
// //     sum+=value;
// // })


// months2.forEach((value,index,arr)=>{
//     console.log('value:',value)
//     console.log('name :',value.name);
//     console.log('age :',value.age);
// })

// console.log('after operation method :',months);



// //9. map() loop in array is used for modify all element of array and return new array
// const months=['jan','feb','mar','april'];
// const numbers=[1,2,3,4,5,6,7,8,9,10];
// console.log(months)

// const resuult=numbers.map((value,index)=>{
//     return value*index;
// })

// console.log(resuult)
// console.log(months)


// //10 .sort() sort the element of array in ascending order
// const months=['jan','feb','mar','april'];
// console.log(months)

// months.sort();

// console.log(months)


// //11 .reverse() reverse the element of array
// const months=['jan','feb','mar','april'];
// const numbers=[1,5,3,9,7,6,2,8,4,10];
// console.log(months)
// months.sort();
// months.reverse();
// numbers.reverse();

// console.log(numbers)
// console.log(months)


// //12. toSorted() sort the element of array in ascending order and return new array
// const months=['jan','feb','mar','april'];
// const numbers=[1,5,3,9,7,6,2,8,4,10];
// console.log(months)
// console.log(numbers)

// const num=numbers.toSorted();
// const mon=months.toSorted();

// console.log(num)
// console.log(mon)
// console.log(numbers)
// console.log(months)


// //13. toReversed() reverse the element of array and return new array
// const months=['jan','feb','mar','april'];
// console.log(months)

// const newArr=months.toReversed();

// console.log(newArr)
// console.log(months)


// //14. slice() return selected element of array in new array
// const months=['jan','feb','mar','april','may','june','july','aug','sep','oct','nov','dec'];
// console.log(months)

// const newArr=months.slice(2,5);

// console.log(newArr)
// console.log(months)


// // //15. splice() add/remove element in/from array and return removed element in new array
// const months=['jan','feb','mar','april'];
// console.log(months)

// const deleted_list=months.splice(1,2,'may','rohit','rahul');

// console.log('deleted element :',deleted_list)
// console.log(months)

// //16. toSpliced() add/remove element in/from array and return new array
// const months=['jan','feb','mar','april'];
// console.log(months)
// const newArr=months.toSpliced(1,2,'may','rohit','rahul');

// console.log('new array :',newArr)
// console.log(months)



// //17. indexOf() return the first index of specified element if not found then return -1
// const months=['jan','feb','mar','april'];
// console.log(months)
// const index=months.indexOf('mar');
// const index2=months.indexOf('rohit');

// console.log('index :',index)
// console.log('index :',index2)

// const deleted_list=months.splice(2,1);

// console.log('deleted element :',deleted_list)
// console.log(months)



// // //18. lastIndexOf() return the last index of specified element if not found then return -1

// const months=['jan','feb','mar','april'];
// console.log(months)

// const index=months.lastIndexOf('mar');
// const index2=months.lastIndexOf('rohit');

// console.log('index :',index)
// console.log('index :',index2)

// console.log(months)



//19. keys() return the index of array in array iterator object

// const months=['jan','feb','mar','april'];
// console.log(months)

// const list=months.keys();

// for(let x of list){
//     console.log(x)
// }

// console.log(months)




//20. values() return the value of array in array iterator object
// const months=['jan','feb','mar','april'];
// console.log(months)

// const list=months.values();

// for(let x of list){
//     console.log(x)
// }

// console.log(months)



// //21. entries() return the index and value of array in array iterator object
// const months=['jan','feb','mar','april'];
// console.log(months)

// const list=months.entries();

// for(let x of list){
//     console.log(x)
// }

// console.log(months)



// //22. every() check all element of array and return boolean value
// const months=['jan','feb','mar','april'];
// const numbers=[1,5,3,9,7,6,2,8,4,10];
// console.log(months)

// const resuult=numbers.every((value,index)=>{
//     return value>1;
// })

// console.log(resuult)
// console.log(months)


// //23. some() check some element of array and return boolean value
// const months=['jan','feb','mar','april'];
// const numbers=[1,5,3,9,7,6,2,8,4,10];
// console.log(months)

// const resuult=numbers.some((value,index)=>{
//     return value>5;
// })

// console.log(resuult)
// console.log(months)



// //24. filter() filter the element of array on the basis of condition and return new array
// const months=['jan','feb','mar','april'];
// const numbers=[1,5,3,9,7,6,2,8,4,10];
// console.log(months)

// const resuult=numbers.filter((value,index)=>{
//     return value>5;
// })

// console.log(resuult)

// console.log(months)


// //25. find() return the first element of array on the basis of condition
// const months=['jan','feb','mar','april'];
// const numbers=[1,5,3,9,7,-6,2,8,4,10];
// console.log(months)

// const resuult=numbers.find((value,index)=>{
//     return value<0;
// })

// console.log(resuult)

// console.log(months)



// // //26. findIndex() return the first index of array on the basis of condition
// const months=['jan','feb','mar','april'];
// const numbers=[1,5,3,9,7,-6,2,8,4,10];
// console.log(months)

// const resuult=numbers.findIndex((value,index)=>{
//     return value<0;
// })

// console.log(resuult)

// console.log(months)


// //27. findLast() return the last element of array on the basis of condition
// const months=['jan','feb','mar','april'];
// const numbers=[1,5,3,9,7,-6,2,8,4,10];
// console.log(months)

// const resuult=numbers.findLast((value,index)=>{
//     return value<0;
// })

// console.log(resuult)

// console.log(months)



// // //28. findLastIndex() return the last index of array on the basis of condition
// const months=['jan','feb','mar','april'];
// const numbers=[1,5,3,9,7,-6,2,8,4,10];
// console.log(months)

// const resuult=numbers.findLastIndex((value,index)=>{
//     return value<0;
// })

// console.log(resuult)

// console.log(months)



// //29. includes() check the element of array and return boolean value
// const months=['jan','feb','mar','april'];
// console.log(months)

// const resuult=months.includes('mar');
// const resuult2=months.includes('rohit');

// console.log(resuult)
// console.log(resuult2)

// console.log(months)


// //30. toString() convert array into string
// const months=['jan','feb','mar','april'];
// console.log(months)
// const text=months.toString();
// console.log('to string method :',text); 

// const types=typeof(text);
// console.log('type of text :',types);

// console.log(months)


// //31.from() convert array-like object into array
// const months=['jan','feb','mar','april'];
// const text='rohit';
// console.log(months)
// console.log('string :',text);
// const arr=Array.from(text);
// console.log('from method :',arr);
// console.log(months)


// console.log(months)



// //32. copyWithin() copy the element of array to another position in same array and return modified array
// const months=['jan','feb','mar','april'];
// console.log(months)

// months.copyWithin(1,2,4);       
// //(target,start,end)  end is optional

// console.log(months)



// //33. valueOf() return the value of array in array iterator object
// const months=['jan','feb','mar','april'];
// console.log(months)

// const list=months.valueOf();

// for(let x of list){
//     console.log(x)
// }

// console.log(list)
// console.log(months)


// //34. prototype property allow to add new property in array
// const months=['jan','feb','mar','april'];
// console.log(months)

// Array.prototype.removeAll=function(val){
//     // while(this.length!==0){
//     //     this.pop();
//     // }

//     this.splice(0,this.length);
// }

// months.removeAll();

// console.log(months)



// //35. reduce() return single value on the basis of condition
// const months=['jan','feb','mar','april'];
// const numbers=[1,5,3,9,7,6,2,8,4,10];
// console.log(months)

// const resuult=numbers.reduce((accumulator,currentValue,index,array)=>{
//     console.log('accumulator :',accumulator);
//     console.log('currentValue :',currentValue);
//     console.log('index :',index);
//     console.log('array :',array);
//     console.log('------------------');
//     return accumulator+currentValue;
// },0)  // 0 is initial value of accumulator

// console.log(resuult)

// console.log(months)


// // //36. reduceRight() return single value on the basis of condition from right to left
// const months=['jan','feb','mar','april'];
// const numbers=[1,5,3,9,7,6,2,8,4,10];
// console.log(months)

// const resuult=numbers.reduceRight((accumulator,currentValue,index,array)=>{
//     console.log('accumulator :',accumulator);
//     console.log('currentValue :',currentValue);
//     console.log('index :',index);
//     console.log('array :',array);
//     console.log('------------------');
//     return accumulator+currentValue;
// },0)  // 0 is initial value of accumulator

// console.log(resuult)

// console.log(months)




// 37. fill() fill the element of array with static value
// const months=['jan','feb','mar','april'];
// console.log(months)

// months.fill('rohit',1,3);
// //(value,start,end)  end is optional


// console.log(months)


// // 38 flat() return the new array with all sub-array elements concatenated into it recursively up to the specified depth.
// const months=['jan','feb','mar','april'['rohit','rahul'],'may',['june','july'],'aug','sep','oct','nov','dec',[12,13]];
// console.log(months)

// const newArr=months.flat(3); // 3 is depth
// // const newArr=months.flat(2); // 2 is depth

// console.log(newArr)

// console.log(months)





// // 39. flatMap() first map each element using a mapping function, then flatten the result into a new array. It is identical to a map followed by a flat of depth 1.
// const months=['jan','feb','mar','april'];
// const numbers=[1,5,3,9,7,6,2,8,4,10];
// console.log(months)

// const newArr=numbers.flatMap((value)=>{
//     return [value,value*2];
// }) 

// console.log(newArr)

// console.log(months)




// // 40. at() return the element of array at specified index
// const months=['jan','feb','mar','april'];
// const numbers=[1,5,3,9,7,6,2,8,4,10];
// console.log(months)

// console.log(months.at(2));
// console.log(months.at(-1)); // -1 is last element
// console.log(numbers.at(3));
// console.log(numbers.at(-2)); // -2 is second last element

// console.log(months)




// 41. of() create a new array instance with a variable number of arguments, regardless of number or type of the arguments.
const months=['jan','feb','mar','april'];
console.log(months)

const newArr=Array.of(1,'rohit',true,{name:'rohit',age:22},[1,2,3]);

console.log(newArr)

console.log(months)
