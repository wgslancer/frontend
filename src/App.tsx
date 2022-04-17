import './App.css';
import { gsap } from 'gsap';
import { useEffect, useRef } from 'react';
import bookAPI from './services/book';
import { useQuery } from 'react-query';

const fetchBook = (): Promise<
  Array<{
    id: number;
    name: string;
  }>
> => {
  return bookAPI()
    .then((result) => result.json())
    .then((data) => data);
};

function App() {
  const { data, error, isLoading } = useQuery('book', fetchBook);
  const appRef = useRef(null);
  useEffect(() => {
    if (isLoading) {
      gsap
        .timeline()
        .to(appRef.current, {
          background: 'green',
          translateX: '-100px',
        })
        .to(appRef.current, {
          background: 'blue',
          translateX: '100px',
        })
        .to(appRef.current, {
          background: 'red',
          translateX: '0',
        })
        .repeat(10);
    }
  }, [isLoading]);
  return (
    <div className='App' ref={appRef}>
      {data
        ? data.map((book) => {
            return (
              <div key={book.id}>
                {book.id}: {book.name}
              </div>
            );
          })
        : null}
    </div>
  );
}

export default App;
