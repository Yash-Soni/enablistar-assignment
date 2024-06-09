import InputForm from "./InputForm/InputForm"

const AddBeneficiary = ({displayAddModal, setDisplayAddModal, setShowInputForm}) => {
  console.log('Time to ADD new');
  return (
    <div>
      {displayAddModal && <InputForm showInputForm={displayAddModal} setShowInputForm={setDisplayAddModal} />}
      
    </div>
  )
}

export default AddBeneficiary