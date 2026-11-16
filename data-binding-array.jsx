
import { useState } from "react";

export function DataBinding_Array() {
    const [categories] = useState(['All', "Elecrtonics", "Footwear", "Fashion", "Railways"]);
    return (
        <div className="container-fluid">
            <ol>
                {/* {categories.map((category, index) => (
                    <li key={index}>{category}</li>
                ))} 
                 */}

                {/*---- or ----- */}

                {
                    categories.map(categories => <li key={categories}>{categories}</li>)
                }

            </ol>
            <select>

                {/*  { {categories.map((category, index) => (
                    <option key={index}>{category}</option>
                ))}   
                   
                   -----------or --------------- */}
                {
                    categories.map(categories => <option value={categories} key={categories}>{categories}</option>)
                }

            </select>
            <ul className="list-group w-25">
                {
                    categories.map((categories) => <li className="list-group-item list-group-item-danger my-2" key={categories}>{categories}</li>)
                }
            </ul>
        </div>
    )
}