import { Card } from '../components/Card/Card.jsx'
import { chars } from '../../packages/chars/chars.js';

export default function Home() {
  return (
    <>
      <div className="bg-blue-600">
        aqui vai ficar o result
      </div>
      <div className="bg-pink-900 Cards-center content-center min-w-screen justify-Cards-center min-h-screen grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 px-5">
        {Object.values(chars).map((char) => {
          return <Card data={char} />
        })}
      </div>
    </>
  );
}
