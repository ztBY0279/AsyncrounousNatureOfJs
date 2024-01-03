import * as React from "react";

function PostData():React.ReactElement<HTMLDivElement>{
 console.log("function is start here:");

     fetch("https://jsonplaceholder.typicode.com/todos/1")
     .then((response)=>{
        console.log("the first .then is exceuting:");
       return response.json();

     })
     .then((data)=>{
        console.log("the second .then is exceuting:");
        console.log("the data is ",data);
     })
     .catch((error)=>{
        console.log("error is ",error);
     })

    console.log("end of the fetch call:");
    return (
       
        <div>
            {console.log('return statemtn is exceute now')}
            <p>this is div element:</p>
        </div>
    )
 

}
console.log("the export statemnt is now executing:");
export default PostData

// answer for this code:-
//the export statemnt is now executing:
// function is start here:
// PostData.tsx:20 end of the fetch call:
// PostData.tsx:24 return statemtn is exceute now
// PostData.tsx:8 the first .then is exceuting:
// PostData.tsx:13 the second .then is exceuting:
// PostData.tsx:14 the data is  {userId: 1, id: 1, title: 'delectus aut autem', completed: false}
