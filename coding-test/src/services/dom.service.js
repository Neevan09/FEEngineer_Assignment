import moment from 'moment';

export function formatDateWithDesc(value, formatPattern = 'MMM DD') {
    return moment(value).format(formatPattern);
  }
  