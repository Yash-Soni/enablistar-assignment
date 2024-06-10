import { Box, Modal, Button } from "@mui/material";
import './Confirm/styles.css'


const DisplayBeneficiary = ({displayBeneficiary, setDisplayBeneficiary, beneficiary}) => {
  console.log('THIS WILL DISPLAY', beneficiary);
  return (
    <div>
      <Modal open={displayBeneficiary} disableEscapeKeyDown disableBackdropClick>
        <Box className='confirmationForm'>
          <div>
            <h2>Beneficiary Details</h2>
            <div>
              <p><b>Full Name:</b> {beneficiary.fullName}</p>
              <p><b>Address:</b> {beneficiary.address}</p>
              <p><b>Country:</b> {beneficiary.country}</p>
              <p><b>Pin Code:</b> {beneficiary.pincode}</p>
            </div>          
          </div>
          <button onClick={() => setDisplayBeneficiary(false)} className='closeButton'>
            x
          </button>
        </Box>
      </Modal>
    </div>
  )
}

export default DisplayBeneficiary