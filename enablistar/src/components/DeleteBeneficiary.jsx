import InputForm from './InputForm/InputForm';

const DeleteBeneficiary = ({displayDeleteModal, setDisplayDeleteModal, beneficiary, selectedIndex}) => {
  console.log('THIS will DELETE soon!!', beneficiary);

  return (
    <div>
      {displayDeleteModal && 
        <InputForm 
          showInputForm={displayDeleteModal} 
          setShowInputForm={setDisplayDeleteModal} 
          action='Delete' 
          beneficiary={beneficiary}
          selectedIndex={selectedIndex}
        />
      }
    </div>
  )
}

export default DeleteBeneficiary