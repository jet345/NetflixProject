import React from 'react';

function DataList() {
    const arrayList = [
        {name : '우형석', age : '20'},
        {name : '이효정', age : '15'},
        {name : '변영현', age : '32'},
        {name : '김유승', age : '17'},
        {name : '조경미', age : '14'},
        {name : '김희진', age : '21'},
        {name : '박준영', age : '45'},
        {name : '최은수', age : '141'},
    ];
    const array1 = new Array(100);
    console.log("====1번====");
    for(var i=0; i<=20; i++)
    {
        array1[i] = i;
        console.log(array1[i]);
    }
    
    console.log("====2번====");
    for(var i = array1.length-1; i>=0 ; i--)
    {
        console.log(array1[i]);
    }

    console.log("====3번====");
    for(var i=0; i<=20; i++)
    {
        if(array1[i] % 2 == 0)
        {
            console.log(array1[i]);
        }
    }
    console.log("====4번====");
    for(var i=0; i<=20; i++)
    {
        if(array1[i] % 2 == 1)
        {
            console.log(array1[i]);
        }
    }
    console.log("====5-1번====");
    for(var i=1; i<=3; i++)
    {
        for(var j=0; j<i; j++)
        {
            console.log("*");
        }
        console.log("\n");
    }
    console.log("====5-2번====");
    for(var i=3; i>=1; i--)
    {
        for(var j=0; j<i; j++)
        {
            console.log("*");
        }
        console.log("\n");
    }
    console.log("====6번====");
    for(var i=1; i<=20; i++)
    {
        console.log(array1[i]);
        if(array1[i] % 5 == 0)
        {
            console.log("\n");
        }
    }


    return (
        <div>
            
            {/* {arrayList && 
               arrayLit.map(list => {

                    // 일반 예시
                    // return (
                    //     <div> 이름 : {list.name}, 나이 : {list.age} </div>
                    // )
                    //if문 활용, 30세 이상 예시
                    // if(list.age >= 30){
                    //     return (
                    //         <div> 이름 : {list.name}, 나이 : {list.age} </div>
                    //     )
                    // }

                    // if문 활용, 30세 ~ 50세 예시
                    // if(list.age >= 30 && list.age <= 50){
                    //     return (
                    //         <div> 이름 : {list.name}, 나이 : {list.age} </div>
                    //     )
                    // }

                    //if문 활용, 우형석 출력
                    // if(list.name === '우형석' || list.name === '이효정'){
                    //     return (
                    //         <div> 이름 : {list.name}, 나이 : {list.age} </div>
                    //     )
                    // }
                })
            } */}
        </div>
    )
}

export default DataList;
