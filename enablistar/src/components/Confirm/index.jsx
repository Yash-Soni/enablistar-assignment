import { Box, Modal, Button } from "@mui/material"
import {useSelector, useDispatch} from 'react-redux'
import { addBeneficiary } from "../../redux/slices/BeneficiarySlice"
import '../InputForm/styles.css'

const Confirm = ({confirmation, setConfirmation, setShowInputForm, beneficiaryDetails}) => {
  const dispatch = useDispatch()
  const beneficiaries = useSelector(state => state.beneficiary)
  
  const updateBeneficiary = () => {
    dispatch(addBeneficiary(beneficiaryDetails))
    setConfirmation(!confirmation)
    setShowInputForm(false)
  }
    
  // console.log('Did You Receive the INPUT ????', beneficiaryDetails, beneficiaries);
  return (
    <div>
      <Modal open={confirmation} disableEscapeKeyDown disableBackdropClick>
        <Box className='inputForm'>
          <Button onClick={() => setConfirmation(false)} className='closeButton'>
            x
          </Button>
          <p>Are you Sure to ADD a new Beneficiary?</p>
          <button onClick={()=>updateBeneficiary()}>Yes</button>
          <button onClick={()=>setConfirmation(!confirmation)}>No</button>
        </Box>
      </Modal>
    </div>
  )
}

export default Confirm