//array 
//one variable multiple values 
//accessed with index 
//index starts form 0
//last index is always array lenth -1 

let nums = [11,22,33,44,55,66,77]
//           0 1  2   3  4  5  6

console.log(nums)
console.log(nums[0])
console.log(nums[5])

let info = ["dipanshu", 11,true,[1,2]]
//              0        1   2    3
console.log(info)
console.log(info[0])
console.log(info[3])

//length
console.log(info.length)
console.log(nums.length)


//loops 
// for ,while 

nums = [11,22,33,44,55,66,77]
//    i=0     i<7 
for(let i=0; i<nums.length;i++){
    console.log(nums[i])
}

console.log("----------------")
//print even elements of nums array

//nums %2 == 0 ==>even else odd
//nums = [11,22,33,44,55,66,77]

//    i=0    i<7
for(let i=0;i<nums.length;i++){     //i=0,1......6,7
    if(nums[i]%2==0){                  //nums[0] ==>11 ==>11%2 ==0 
        console.log(nums[i])
    }
}

console.log("----------------")
for(let i=0;i<nums.length;i++){
    if(nums[i]%2!=0){
        console.log(nums[i])
    }
}
console.log("----------------")
//------------------------------------------------
//nums = [11,22,33,44,55,66,77]

let a =0                           //inilization
while(a<nums.length){              //condition
    console.log(nums[a])
    a++                            //inc
}

//print array in reverse 
console.log("----------------")
for(let i=nums.length-1;i>=0;i--){
    console.log(nums[i])
}

console.log("----------------")
a=nums.length-1        //a=7-1 =>6
while(a>=0){              //6 ,5,4,3,2,1,0 ,-1
    console.log(nums[a])   //nums[6],nums[5],nums[4]......nums[0]
    a--
}
