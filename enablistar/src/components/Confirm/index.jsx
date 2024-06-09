import { Box, Modal, Button } from "@mui/material"
import { useDispatch } from 'react-redux'
import { addBeneficiary, editBeneficiary, deleteBeneficiary } from "../../redux/slices/BeneficiarySlice"
import '../InputForm/styles.css'

const Confirm = ({confirmation, setConfirmation, setShowInputForm, beneficiaryDetails, selectedIndex, action}) => {
  const dispatch = useDispatch()
  console.log('IN the confirmation MODAL!!!');
  let actionText = 'Add'
  if(action === 'Delete') {
    actionText='Delete'
  } else if(action === 'Edit') {
    actionText = 'Update'
  }
  
  const updateBeneficiary = () => {
    console.log('Action is: ', action);
    if(action === 'Delete') {
      dispatch(deleteBeneficiary({beneficiaryDetails, selectedIndex}))
    } else if (action === 'Edit') {
      dispatch(editBeneficiary({newItem: beneficiaryDetails, selectedIndex}))
    } else {
      dispatch(addBeneficiary(beneficiaryDetails))
    }
    setConfirmation(!confirmation)
    setShowInputForm(false)
  }

  return (
    <div>
      <Modal open={confirmation} disableEscapeKeyDown disableBackdropClick>
        <Box className='inputForm'>
          <Button onClick={() => setConfirmation(false)} className='closeButton'>
            x
          </Button>
          <p>Are you Sure to {actionText} a Beneficiary?</p>
          <button onClick={()=>updateBeneficiary()}>Yes</button>
          <button onClick={()=>setConfirmation(!confirmation)}>No</button>
        </Box>
      </Modal>
    </div>
  )
}

export default Confirm