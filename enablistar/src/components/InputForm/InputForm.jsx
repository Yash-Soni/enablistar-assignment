import { useForm } from 'react-hook-form'
import { Box, Modal } from '@mui/material'
import './styles.css'
import { useEffect, useState } from 'react'
import Confirm from '../Confirm'

const InputForm = ({showInputForm, setShowInputForm, beneficiary, selectedIndex, action}) => {
  const [confirmation, setConfirmation] = useState()
  const [beneficiaryDetails, setBeneficiaryDetails] = useState(beneficiary || {})

  const { register, handleSubmit, formState: { errors } } = useForm({
    defaultValues: {
      fullName: beneficiary?.fullName || "",
      address: beneficiary?.address || "",
      country: beneficiary?.country || "",
      pincode: beneficiary?.pincode || "",
    }
  })

  useEffect(() => {
    if(action === 'Delete') {
      setConfirmation(true)
    }
  }, [action])

  // const onSubmit = (data) => console.log(data)
  const onSubmit = (data) => {
    // e.preventDefault()
    if(data && typeof data==='object') { 
      setBeneficiaryDetails(data)
    }
    setConfirmation(true)
    // setShowInputForm(false)
  }

  return (
    <div >
      <Modal 
        open={showInputForm}
        disableEscapeKeyDown
        disableBackdropClick
      >
        <Box className='inputForm'>
          <div className='formContents'>
            <form onSubmit={handleSubmit(onSubmit)} noValidate className='inputFields'>
              <label>Full Name:</label>
              <input className='inputField' type='text' {...register('fullName', {
                required: {
                  value: true,
                  message: 'Enter a valid 6 digit Pin Code'
                }
              })} />
              {errors.fullName && <span className='errorText'>*This field is required</span>}

              <label>Address:</label>
              <input className='inputField' type='text' {...register('address', {
                required: {
                  value: true,
                  message: 'Enter a valid 6 digit Pin Code'
                }
              })} />
              {errors.address && <span className='errorText'>*This field is required</span>}

              <label>Country:</label>
              <select className='inputField' {...register('country')}>
                <option value='India'>India</option>
                <option value='USA'>USA</option>
                <option value='Pakistan'>Pakistan</option>
                <option value='Spain'>Spain</option>
                <option value='Nepal'>Nepal</option>
              </select>
              {errors.country && <span className='errorText'>*This field is required</span>}

              <label>Pincode:</label>
              <input className='inputField' type='number' {...register('pincode', {
                // required: true,
                pattern: {
                  value: /^\d{6}$/,
                  message: 'Enter a valid 6 digit Pin code'
                },
                validate: {
                  pattern1: (fieldValue) => {
                    return (
                      !/^(\d)\1{5}$/.test(fieldValue) || 'Enter a valid 6 digit Pin-code'
                    )
                  }
                }
              })} />
              {errors.pincode && <span className='errorText'>*{errors.pincode?.message}</span>}

              <input type='submit' className='submitButton' />
            </form>
          </div>
          <button onClick={() => setShowInputForm(false)} className='closeButton'>
            x
          </button>
        </Box>
      </Modal>
      {confirmation && 
        <Confirm 
          confirmation={confirmation} 
          setConfirmation={setConfirmation} 
          setShowInputForm={setShowInputForm}
          beneficiaryDetails={beneficiaryDetails} 
          selectedIndex={selectedIndex} 
          action={action} 
        />}
      {/* <DevTool control={control} /> */}
    </div>
  )
}

export default InputForm