import React from 'react';

export const Confirm = (props) => {

//окно подтверждения удаления

  return(

    <div className={`${props.confirmState} confirmWrap`}>
    <div className='confirmWindow'>
    <p> вы уверены? </p>
    <div>
    <button
    type="button"
    className="btn btn-outline-danger confirm-btn"
    onClick={() => props.deletePost(props.postFocus)}
    >
    да
    </button>

    <button
    type="button"
    className="btn btn-outline-danger confirm-btn"
    onClick={() => props.setConfirmState('hidden')}
    >
    нет
    </button>
    </div>
    </div>
    </div>

  )
}
