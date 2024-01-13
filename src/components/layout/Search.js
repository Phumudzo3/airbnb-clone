import React, { useState } from 'react';
import './search.css';

import '@umakantp/react-date-range/dist/styles.css'; // main style file
import '@umakantp/react-date-range/dist/theme/default.css'; // theme css file
import { DateRangePicker} from '@umakantp/react-date-range';
import PeopleIcon from '@mui/icons-material/People';
import { Button } from '@mui/material/';

export const Search = () => {
    const [startDate, setStartDate] = useState(new Date())
    const [endDate, setEndDate] = useState(new Date())
    const selectionRange = {
        startDate: startDate,
        endDate: endDate,
        key: 'selection',
    };

    const handleSelect = (ranges) => {
        console.log(ranges);
        if (ranges.selectionRange) {
            setStartDate(ranges.selectionRange.startDate);
            setEndDate(ranges.selectionRange.endDate);
        }
    };
    return (
        <div className='search'>
            <DateRangePicker ranges={[selectionRange]} onChange={handleSelect} />
           
            <h2>Number of Guest<PeopleIcon /></h2>
            <input min={0}  defaultValue={2} type='number'/>
            <Button>Search AirBnB</Button>
        </div>

    )
}
