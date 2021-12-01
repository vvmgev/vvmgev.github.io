import Request from '../../services/request';
import { SAVE_WEATHER, ERROR_WEATHER } from '../actionTypes';

export const saveWeather = weather => ({
  type: SAVE_WEATHER,
  payload: {
    weather,
  }
});

export const onError = error => ({
  type: ERROR_WEATHER,
  payload: {
    weather : error
  }
});

// there can be implmentation of loading case

export const onSearch = city => async dispatch => {
    const weather = await Request.getWeather(city);
    if(weather.cod !== '200'){
      dispatch(onError(weather))  
      return;
    }
    dispatch(saveWeather(weather))
}

