import cart from './assets/icon-cart.svg';
import Attrib from './Attrib';
export default function App() {
  return (
    <>
      <article>
        <main className='container'>
          <div className='img-container'>
            <img alt='Picture of product bottle.' />
          </div>
          <div className='info-container'>
            <p className='product-cat'>Perfume</p>
            <h1 className='product-name'>Gabrielle Essence Eau De Parfum</h1>
            <p className='product-desc'>
              A floral, solar and voluptuous interpretation composed by Olivier Polge,
              Perfumer-Creator for the House of CHANEL.
            </p>
            <div className='price'>
              <p>$149.99</p>
              <p>$169.99</p>
            </div>
            <button className='add-cart'>
              <img src={cart} alt='' /> Add to Cart
            </button>
          </div>
        </main>
      </article>
      <Attrib />
    </>
  );
}
