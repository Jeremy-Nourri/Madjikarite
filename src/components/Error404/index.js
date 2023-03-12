import './style.scss';
import img from '../../assets/imgs/adobe.jpeg';

function Error() {
  return (
    <div className='error'>
      <main>
        <p>Page non trouvée</p>
          <div>
            <img src={img} alt="Image d'erreur" className='error__img'/>
          </div> 
      </main>
    </div>
  );
}

export default Error;
