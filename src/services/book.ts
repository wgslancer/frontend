import createAPI from './api/creator';

const bookAPI = () => createAPI({ path: 'books' });

export default bookAPI;