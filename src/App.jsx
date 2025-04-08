import './styles/reset.css';
import Article from './components/Article';
import Author from './components/Author';

export default function App() {
  return (
    <section className='card'>
      <Article />
      <Author />
    </section>
  );
}
