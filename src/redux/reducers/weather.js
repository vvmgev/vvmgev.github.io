import { SAVE_WEATHER, ERROR_WEATHER } from '../actionTypes';

export default function (state = null, action) {
    switch (action.type) {
        case SAVE_WEATHER: {
            const { weather } = action.payload;
            return {
                ...weather
            };
        }
        case ERROR_WEATHER: {
            const { weather } = action.payload;
            return {
                ...weather,
                error: true
            };
        }

        default:
            return state
    }
}
