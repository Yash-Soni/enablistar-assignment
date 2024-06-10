import InputForm from "./InputForm/InputForm"

const AddBeneficiary = ({displayAddModal, setDisplayAddModal, setShowInputForm}) => {

  return (
    <div>
      {displayAddModal && <InputForm showInputForm={displayAddModal} setShowInputForm={setDisplayAddModal} />}
    </div>
  )
}

export default AddBeneficiary