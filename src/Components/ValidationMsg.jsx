import React from 'react'

const ValidationMsg = ({ errorMsg }) => {
    return (
        <div className='text-xs text-red-700 font-medium'>
            {errorMsg}
        </div>
    )
}

export default ValidationMsg