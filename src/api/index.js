import fetchz from 'fetchz';

export const fetchTextData = async fileName => {
  const response = await fetchz.get(`${window.location.protocol}//${window.location.host}/text/${fileName}`);
  return await response.text();
};
