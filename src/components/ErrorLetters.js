const ErrorLetters = (props) => {
  // const renderErrorLetters = (props) => {
    const errorLetters = props.userLetters.filter(
      (letter) =>
        props.word.toLocaleLowerCase().includes(letter.toLocaleLowerCase()) === false
    );
    return errorLetters.map((letter, index) => {
      return (
        <li key={index} className='letter'>
          {letter}
        </li>
      );
    });
  // };
}

export default ErrorLetters;

