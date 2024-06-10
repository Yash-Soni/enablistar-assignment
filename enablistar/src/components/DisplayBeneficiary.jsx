import { Box, Modal, Button } from "@mui/material";

const DisplayBeneficiary = ({displayBeneficiary, setDisplayBeneficiary, beneficiary}) => {
  console.log('THIS WILL DISPLAY', beneficiary);
  return (
    <div>
      <Modal open={displayBeneficiary} disableEscapeKeyDown disableBackdropClick>
        <Box className='inputForm'>
          <Button onClick={() => setDisplayBeneficiary(false)} className='closeButton'>
            x
          </Button>
          <h3>Beneficiary Details</h3>
          <div>
            <p><b>Full Name:</b> {beneficiary.fullName}</p>
            <p><b>Address:</b> {beneficiary.address}</p>
            <p><b>Country:</b> {beneficiary.country}</p>
            <p><b>Pin Code:</b> {beneficiary.pincode}</p>
          </div>
        </Box>
      </Modal>
    </div>
  )
}

export default DisplayBeneficiary