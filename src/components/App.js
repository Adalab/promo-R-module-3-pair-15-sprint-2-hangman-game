import { useEffect, useState } from 'react';
// components
import Header from './Header';
import Dummy from './Dummy';
import SolutionLetters from './SolutionLetters';

// api
import getWordFromApi from '../services/api';
// styles
import '../styles/App.scss';
import '../styles/Form.scss';
import ErrorLetters from './ErrorLetters';
import Form from './Form';


function App() {
  const [word, setWord] = useState('');
  const [userLetters, setUserLetters] = useState([]);
  const [lastLetter, setLastLetter] = useState('');

  useEffect(() => {
    getWordFromApi().then((word) => {
      setWord(word);
    });
  }, []);

  // events



  const handleChange = (userSubmit) => {
    let re = /^[a-zA-ZñÑá-úÁ-Ú´]$/; //add regular pattern 
    if (re.test(userSubmit) || userSubmit === '') {
      handleLastLetter(userSubmit);
    }
  };

  const handleSubmit = (ev) => {
    ev.preventDefault();
  };

  const getNumberOfErrors = () => {
    const errorLetters = userLetters.filter(
      (letter) => word.includes(letter) === false
    );
    return errorLetters.length;
  };

  <ErrorLetters word={word} userLetters={userLetters}></ErrorLetters>

  const handleLastLetter = (value) => {
    value = value.toLocaleLowerCase();
    setLastLetter(value);

    if (!userLetters.includes(value)) {
      userLetters.push(value);
      setUserLetters([...userLetters]);
    }
  };

  return (
    <div className='page'>
      <Header/> 
      <main className='main'>
        <section>
          <SolutionLetters word={word}  userLetters={userLetters}/>
          <div className='error'>
            <h2 className='title'>Letras falladas:</h2>
            <ul className='letters'><ErrorLetters  word={word} userLetters={userLetters}/></ul>
          </div>
          <Form lastLetter={lastLetter}  handleChange={handleChange}/>
        </section>
        <Dummy numberOfErrors={getNumberOfErrors()}/>
      </main>
    </div>

  );
}

export default App;
