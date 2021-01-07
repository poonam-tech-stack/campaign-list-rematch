import React from 'react';
import { v4 as uuidV4 } from 'uuid';
import PropTypes from 'prop-types';
import ErrorMessage from '../ErrorMessage';
import { OutputDateFormat } from '../../constants/dateConstants';
import './index.css';
import ERROR_MESSAGES from '../../constants/errorMessages';

const CampaignTable = ({ campaigns, errorMessage, userErrorMessage }) => {
  let campaignElems = null;

  if (!campaigns || !campaigns.length) {
    campaignElems = (
      <tr>
        <td colSpan="6" className="text-center">
          {ERROR_MESSAGES.NO_CAMPAIGN_FOUND}
        </td>
      </tr>
    );
  } else {
    campaignElems = campaigns.map(
      ({ name, userName, startDate, endDate, isActive, budgetInUSD }) => (
        <tr className="campaignBody" key={`campaignData-${uuidV4()}`}>
          <td>{name}</td>
          <td>{userName}</td>
          <td>{startDate}</td>
          <td>{endDate}</td>
          <td>
            <div className={`status-bubble ${isActive}`}></div>&nbsp;&nbsp;
            <div className="campaign-status">{isActive}</div>
          </td>
          <td>{budgetInUSD}</td>
        </tr>
      ),
    );
  }

  return (
    <>
      {userErrorMessage && <ErrorMessage message={userErrorMessage} />}
      {errorMessage && <ErrorMessage message={errorMessage} />}
      <section aria-label="campaigns" className="Campaigns table-responsive">
        <table className="table table-borderless table-striped">
          <thead className="thead-dark">
            <tr>
              <th>Name</th>
              <th>User Name</th>
              <th>
                <>
                  Start Date <br />
                  <small>({OutputDateFormat.toLowerCase()})</small>
                </>
              </th>
              <th>
                <>
                  End Date
                  <br />
                  <small>({OutputDateFormat.toLowerCase()})</small>
                </>
              </th>
              <th>Active</th>
              <th>
                <>
                  Budget <br />
                  <small>(USD)</small>
                </>
              </th>
            </tr>
          </thead>
          <tbody>{campaignElems}</tbody>
        </table>
      </section>
    </>
  );
};

CampaignTable.defaultProps = {
  errorMessage: null,
  userErrorMessage: null,
};

CampaignTable.propTypes = {
  campaigns: PropTypes.array.isRequired,
  errorMessage: PropTypes.oneOfType([PropTypes.array, PropTypes.string]),
  userErrorMessage: PropTypes.string,
};

export default CampaignTable;
