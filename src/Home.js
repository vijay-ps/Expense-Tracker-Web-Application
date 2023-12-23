import Total from './Total';
import Nav from './Nav';

function Home({total}) {
  return (
    <div className='Home'>
      <Nav />
      <Total total={total} />
    </div>
  );
}

export default Home;
