import {useState, useEffect} from 'react'
import moment from 'moment';
export function DataBinding() {
const [today]=useState(new Date());
return (<div className="container-fluid">
    <p>{today .toDateString()}</p>
    </div>
)
}
