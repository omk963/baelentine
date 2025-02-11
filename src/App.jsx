import './App.css';
import { useState, useEffect } from 'react';
import Loading from 'react-loading-components'
import Content from './containers/Content'

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false)
    }, 3000)
  }, [])

  

  return (
    <div className="main">
      {loading && (
        <div className='loading'>
          <Loading type='hearts' width={100} height={100} fill='#ff0000' />
          <p>Loading...</p>
        </div>
      )}
      {!loading && (
        <section className='content'>
          <h1>To My Dearest</h1>
          <Content />
        </section>
      )}

    </div>
  );
}

export default App;
