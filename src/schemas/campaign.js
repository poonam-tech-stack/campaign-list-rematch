import moment from 'moment';
import { InputDateFormat } from '../constants/dateConstants';

//Schema of each campaign listed in the campaigns table
//Each campaign is validated against this schema
const campaignSchema = [
  { name: 'name', type: 'string' },
  { name: 'startDate', type: 'date' },
  {
    name: 'endDate',
    type: 'date',
    //This will run if 'type' is valid
    validation: ({ startDate = 'a', endDate = 'a' }) => {
      const s = moment(startDate, InputDateFormat);
      const e = moment(endDate, InputDateFormat);
      if (s.isValid() && e.isValid() && s > e) {
        return 'end date is before the start date';
      }
      return '';
    },
  },
  { name: 'Budget', type: 'number' },
  { name: 'userId', type: 'number' },
];

export default campaignSchema;
