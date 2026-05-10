import { Circle } from "./Circle";
import { Square } from "./Square";

export const GeoForm = () => {
  return (
    <div className="">
        <h1 className="text-2xl font-bold">Formas Geometricas</h1>
        <div className="flex gap-2">
            <Square />
            <Circle />
        </div>
    </div>
  );
}
