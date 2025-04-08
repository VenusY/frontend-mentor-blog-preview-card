export default function Author() {
  return (
    <div className='author'>
      <img
        src={require('../assets/images/image-avatar.webp')}
        alt='Greg Hooper avatar'
        className='author__avatar'
      />
      <p className='author__name'>Greg Hooper</p>
    </div>
  );
}
