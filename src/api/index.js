import fetchz from 'fetchz';

export const fetchTextData = async fileName => {
  const response = await fetchz.get(`${window.location.protocol}//${window.location.host}/cv/text/${fileName}`);
  return await response.text();
};
