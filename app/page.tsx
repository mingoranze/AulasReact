import { GeoForm } from "@/src/components/GeoForm";
import { Person } from "@/src/components/Person";
import { PeopleList } from "@/src/data/PeopleList";

const Page = () => {
  return (
   <div>
      <h1 className="text-2xl font-bold">Ola Mundo</h1>
      <h2>Outro texto</h2>
      <GeoForm />
      
  
      {PeopleList.map(person =>
        // eslint-disable-next-line react/jsx-key
        <Person
        name={person.name}
        age={person.age}
        />
      )}
     
   </div>
  );
}

export default Page;