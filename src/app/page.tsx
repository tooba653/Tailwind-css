
import React from 'react';
import Card from "./component/card"; 

export default function Home() {
   return (
      <div className="flex flex-col items-center p-4 bg-sky-300 min-h-screen">
         <Card name="Tooba" age={19} rollNo={294427} classDay="Monday" /> 
         <Card name="Alisha" age={13} rollNo={294424} classDay="Thursday" /> 
         <Card name="Maham" age={23} rollNo={29467} classDay="Friday" />
      </div>
   );
}