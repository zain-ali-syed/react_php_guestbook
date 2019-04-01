import React from 'react';
import moment from 'moment';

const MessageItem = ({ name, email, message, date }) => {
  return (
    <div className="col s12">
      <div className="card white lighten-3" style={{ borderRadius: '10px' }}>
        <div className="card-content">
          <span className="card-title">
            <h5>{name}</h5>
          </span>
          <p>{message}</p>
          <p>{email}</p>
          <p>{moment(date).format('LL')}</p>
        </div>
      </div>
    </div>
  );
};

export default MessageItem;
