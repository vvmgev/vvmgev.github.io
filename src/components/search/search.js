import { useDispatch } from 'react-redux'
import { useDebounce } from '../../hooks'
import { onSearch } from '../../redux/actions';

import './search.css';

function Weather() {
    const dispatch = useDispatch();
    const debounce = useDebounce(dispatch, 500)
    const onChange = async e => debounce(onSearch(e.target.value))

    return (
        <div>
            <input onChange={onChange} className="searchbar" id="search" type="text" placeholder="enter city, country"></input>
        </div>
    )

}

export default Weather;