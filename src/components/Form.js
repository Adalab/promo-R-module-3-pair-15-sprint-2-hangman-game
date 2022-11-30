const Form = (props) => {

    return (
        <form className='form' onSubmit={props.handleSubmit(props.ev)}>
            <label className='title' htmlFor='last-letter'>
              Escribe una letra:
            </label>
            <input
              autoFocus
              autoComplete='off'
              className='form__input'
              maxLength='1'
              type='text'
              name='last-letter'
              id='last-letter'
              value={props.lastLetter}
              onKeyDown={props.handleKeyDown(props.ev)}
              onChange={props.handleChange(props.ev)}
            />
          </form>
    )
}

export default Form;