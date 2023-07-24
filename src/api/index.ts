import fetchz from 'fetchz';

export const fetchTextData = async (fileName: string) => {
  // TODO: fetchz should have such route
  const response = await fetchz.get(
    `${window.location.protocol}//${window.location.host}/cv/text/${fileName}`,
  );
  return await response.text();
};
