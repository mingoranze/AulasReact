

const Page = () => {
  
  const horas = new Date().getHours();


  return (
   <div className="bg-gradient-to-r from-sky-400 to-blue-800 h-screen flex items-center justify-center">
      <h1>{horas}</h1>
     
   </div>
  );
}

export default Page;