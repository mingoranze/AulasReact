type PersonProps = {
    name: string;
    age: number;
}


export const Person = ({ name, age }: PersonProps) => {
    return (
        <div className="">
            <h1 className="">{name}</h1>
            <p className="">Idade: {age}</p>
        </div>
    );
}