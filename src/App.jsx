import './styles/reset.css';
import './styles/scss/App.scss';
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
