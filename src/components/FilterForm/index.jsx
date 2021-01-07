import React from 'react';
import PropTypes from 'prop-types';
import DateRange from '../DateRangePicker';
import Search from '../Search';

const FilterForm = ({
  changeStartDateHandler,
  changeEndDateHandler,
  changeSearchTermHandler,
  handleReset,
  toggleFiltersHandler,
  startDateFormatted,
  endDateFormatted,
  searchTerm,
  isFiltersDisplayedInSmallScreen,
}) => {
  let filtersClassName = 'row filters-wrapper';

  if (isFiltersDisplayedInSmallScreen) filtersClassName += 'displayed';

  return (
    <>
      <section aria-label="filters" role="search" className="FilterForm">
        <div className="row show-filters text-right">
          <button className="btn btn-info btn-show-filters" onClick={toggleFiltersHandler}>
            {isFiltersDisplayedInSmallScreen ? 'Hide Filters' : 'Show Filters'}
          </button>
        </div>
        <div className={filtersClassName}>
          <label className="col col-12 col-sm-1 col-md-1" htmlFor="filters">
            Filters:
          </label>
          <DateRange
            startDateFormatted={startDateFormatted}
            endDateFormatted={endDateFormatted}
            changeStartDateHandler={changeStartDateHandler}
            changeEndDateHandler={changeEndDateHandler}
          />
          {/* Campaign name search filter */}
          <Search searchTerm={searchTerm} changeSearchTermHandler={changeSearchTermHandler} />
          {/* Reset filter */}
          <div className="col col-12 col-sm-2 col-md-2 field">
            <button className="btn btn-info btn-reset" onClick={handleReset}>
              Reset
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

FilterForm.propTypes = {
  changeStartDateHandler: PropTypes.func.isRequired,
  changeEndDateHandler: PropTypes.func.isRequired,
  changeSearchTermHandler: PropTypes.func.isRequired,
  handleReset: PropTypes.func.isRequired,
  toggleFiltersHandler: PropTypes.func.isRequired,
  startDateFormatted: PropTypes.instanceOf(Date),
  endDateFormatted: PropTypes.instanceOf(Date),
  searchTerm: PropTypes.string,
  isFiltersDisplayedInSmallScreen: PropTypes.bool.isRequired,
};
export default FilterForm;
