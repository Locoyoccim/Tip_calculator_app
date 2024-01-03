import '/src/results.css';

function Results(props) {

  return (
    <>
     <div className='amounts'>
      <div className='result_description'>
        <p>{props.children}</p><span>/ Person</span>
      </div>
      <div>
        <p className='result_number'>${props.amount}</p>
      </div>
     </div>
    </>
  )
}

export default Results;