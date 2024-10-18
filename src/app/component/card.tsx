import React from 'react';

interface CardProps {
  name: string;
  age: number;
  rollNo: number;
  classDay: string; 
}

function Card({ name, age, rollNo, classDay }: CardProps) {
   return (
      <div className="bg-white p-4 rounded-lg shadow-lg w-72 text-center mb-4"> 
         <div className="bg-gradient-to-r from-sky-400 to-blue-600 p-2 rounded">
            <p className="text-lg mb-2">Name: {name}</p> 
            <div className="flex flex-col space-y-1"> 
               <p className="text-lg mb-0">Age: {age}</p>
               <p className="text-lg mb-0">Roll No: {rollNo}</p>
               <p className="text-lg mb-0">Class Day: {classDay}</p>
            </div>
         </div>
      </div>
   );
}

export default Card;
