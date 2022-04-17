const createAPI = ({
  path,
  init,
}: {
  init?: RequestInit;
  path: string;
}): Promise<Response> => {
  return fetch(
    `https://0c502d7f-4203-418d-93dd-4fa989621f6e.mock.pstmn.io/${path}`,
    init
  );
};

export default createAPI;
