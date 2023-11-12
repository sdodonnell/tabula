export const GQL_ENDPOINT = 'http://localhost:4000/graphql';

export const formatDateTime = (date: string) => {
    const d = new Date(date);
    const year = d.getFullYear();

    let month = '' + (d.getMonth() + 1);
    let day = '' + d.getDate();
    let hour = '' + d.getHours();
    let minutes = '' + d.getMinutes();

    if (month.length < 2) month = '0' + month;
    if (day.length < 2) day = '0' + day;
    if (hour.length < 2) hour = '0' + hour;
    if (minutes.length < 2) minutes = '0' + minutes;

    return `${year}-${month}-${day}T${hour}:${minutes}`;
  };