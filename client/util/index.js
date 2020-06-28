import moment from 'moment';

export function dateArray() {
  let dates = []
  const today = moment().format('MM-DD-YY')
  const weekAgo = moment().subtract(6, 'days').format('MM-DD-YY')
  const currDate = moment().startOf('day')
  const lastDate = moment().subtract(6, 'days').startOf('day')

  while (lastDate.add(1, 'days').diff(currDate) < 0) {
    dates.push(
      moment(lastDate.clone().toDate().toISOString()).format('MM-DD-YY')
    )
  }

  return [weekAgo, ...dates, today]
}
