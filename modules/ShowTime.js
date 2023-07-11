/* eslint-disable import/prefer-default-export */
import { DateTime } from './luxon.js';

const Date = () => {
  const date = DateTime.now();
  document.getElementById('date_Display').innerHTML = date.toLocaleString(
    DateTime.DATETIME_MED,
  );
};

export { Date };