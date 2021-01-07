import React from 'react';
import DatePicker from 'react-datepicker';
import PropTypes from 'prop-types';
import DatePickerCustomInput from '../DatePickerCustomInput';
import { DatePickerDateFormat } from '../../constants/dateConstants';
import './index.css';

const DateRange = ({
  startDateFormatted,
  endDateFormatted,
  changeStartDateHandler,
  changeEndDateHandler,
}) => (
  <>
    <div id="start-datepicker" className="col col-12 col-sm-4 col-md-2 field">
      {/* Start date filter */}
      <DatePicker
        dateFormat={DatePickerDateFormat}
        placeholderText="Start date"
        selected={startDateFormatted}
        onChange={changeStartDateHandler}
        customInput={<DatePickerCustomInput className="start-date" />}
        peekNextMonth
        showMonthDropdown
        showYearDropdown
        popperModifiers={{
          preventOverflow: {
            enabled: true,
            escapeWithReference: false,
            boundariesElement: 'viewport',
          },
        }}
      />
    </div>
    <div id="end-datepicker" className="col col-12 col-sm-4 col-md-2 field">
      {/* End date filter */}
      <DatePicker
        dateFormat={DatePickerDateFormat}
        placeholderText="End date"
        minDate={startDateFormatted}
        selected={endDateFormatted}
        onChange={changeEndDateHandler}
        customInput={<DatePickerCustomInput className="end-date" />}
        peekNextMonth
        showMonthDropdown
        showYearDropdown
        popperModifiers={{
          preventOverflow: {
            enabled: true,
            escapeWithReference: false,
            boundariesElement: 'viewport',
          },
        }}
      />
    </div>
  </>
);

DateRange.propTypes = {
  startDateFormatted: PropTypes.instanceOf(Date),
  endDateFormatted: PropTypes.instanceOf(Date),
  changeStartDateHandler: PropTypes.func.isRequired,
  changeEndDateHandler: PropTypes.func.isRequired,
};

export default DateRange;
