export default function Article() {
  return (
    <>
      <img
        src={require('../assets/images/illustration-article.svg')}
        alt='Illustration'
        className='card__image'
      />
      <p className='card__tag'>Learning</p>
      <p className='card__date'>Published 21 Dec 2023</p>
      <h1 className='card__title'>HTML & CSS foundations</h1>
      <p className='card__description'>
        These languages are the backbone of every website, defining structure,
        content, and presentation.
      </p>
    </>
  );
}
