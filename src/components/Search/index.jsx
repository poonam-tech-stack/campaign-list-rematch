import React from 'react';
import PropTypes from 'prop-types';

const Search = ({ searchTerm = '', changeSearchTermHandler }) => (
  <div id="search-term" className="col col-12 col-sm-3 col-md-5 field">
    <div className="display-flex flex-wrapper">
      <div className="flex-dynamic">
        <div className="display-flex flex-wrapper">
          <div className="flex-dynamic">
            <input
              className="form-control input-name"
              placeholder="Search campaign name"
              type="text"
              value={searchTerm || ''}
              onChange={changeSearchTermHandler}
            />
          </div>
          <div className="flex-fixed search-icon">
            <i className="fa fa-search"></i>
          </div>
        </div>
      </div>
    </div>
  </div>
);

Search.propTypes = {
  changeSearchTermHandler: PropTypes.func.isRequired,
  searchTerm: PropTypes.string,
};

export default Search;
