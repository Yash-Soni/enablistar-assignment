import { Box, Modal, Button } from "@mui/material"
import { useDispatch } from 'react-redux'
import { addBeneficiary, editBeneficiary, deleteBeneficiary } from "../../redux/slices/BeneficiarySlice"
import './styles.css'

const Confirm = ({confirmation, setConfirmation, setShowInputForm, beneficiaryDetails, selectedIndex, action}) => {
  const dispatch = useDispatch()
  let actionText = 'Add'
  if(action === 'Delete') {
    actionText='Delete'
  } else if(action === 'Edit') {
    actionText = 'Update'
  }
  
  const updateBeneficiary = () => {
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
        <Box className='confirmationForm'>
          <div>
            <p className="confirmationText">Are you Sure to {actionText} a Beneficiary?</p>
            <button className="yesButton" onClick={()=>updateBeneficiary()}>Yes</button>
            <button className="noButton" onClick={()=>{
              setConfirmation(!confirmation)
              setShowInputForm(false)
            }}>No</button>
          </div>
          <button onClick={() => setConfirmation(false)} className='closeButton'>
            x
          </button>
        </Box>
      </Modal>
    </div>
  )
}

export default Confirm