import InputForm from "./InputForm/InputForm"

const EditBeneficiary = ({displayEditModal, setDisplayEditModal, beneficiary, selectedIndex}) => {
  
  return (
    <div>
      {displayEditModal &&
      <InputForm 
        showInputForm={displayEditModal} 
        setShowInputForm={setDisplayEditModal} 
        beneficiary={beneficiary} 
        selectedIndex={selectedIndex}
        action='Edit'
      />}
    </div>
  )
}

export default EditBeneficiary