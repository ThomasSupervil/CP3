import { Link } from 'react-router-dom';
import './style.scss';

const LandingPage = () => {
  return (
    <>
      <section className='landingPage'>
        <img src='/images/logoLand.svg' alt='' className='illuLand' />
        <img src='/images/arrow.svg' alt='' className='arrow' />
        <Link to='/login' className='playBtn'>
          let's play 🤟
        </Link>
      </section>

      <div className='blue' />
    </>
  );
};

export default LandingPage;
