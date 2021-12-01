export const round = (value) => Math.round(value);
export const getWeekName = (dt, options = {weekday:'short'}) => new Date(dt * 1000).toLocaleString('en-us', options) 