import { useState } from "react"
import InputForm from "./InputForm/InputForm"
import { useSelector } from "react-redux"
import AddBeneficiary from "./AddBeneficiary"
import EditBeneficiary from "./EditBeneficiary"
import DeleteBeneficiary from "./DeleteBeneficiary"

const ManageBeneficiary = () => {
  const [showInputForm, setShowInputForm] = useState(false)
  const [displayAddModal, setDisplayAddModal] = useState(false)
  const [displayEditModal, setDisplayEditModal] = useState(false)
  const [displayDeleteModal, setDisplayDeleteModal] = useState(false)
  const [displayBeneficiary, setDisplayBeneficiary] = useState(false)
  const [selectedBeneficiary, setSelectedBeneficiary] = useState()
  const [selectedIndex, setSelectedIndex] = useState()

  const beneficiaries = useSelector((state) => {
    console.log(state);
    return state.beneficiary
  })
  let tableKeys=[]

  if(beneficiaries.length >0) {
    tableKeys = Object.keys(beneficiaries[0])
    tableKeys.unshift('#')
    tableKeys.push('')
  }

  const handleSelection = (beneficiary, index) => {
    setSelectedBeneficiary(beneficiary)
    setSelectedIndex(index)
  }

  console.log('Beneficiaries: ', beneficiaries);
  return (
    <>
      <div className="header">
        <p>Manage Beneficiary</p>
      </div>
      <button className="addButton" onClick={() => setDisplayAddModal(true)}>Add Beneficiary</button>
      {displayAddModal && <AddBeneficiary displayAddModal={displayAddModal} setDisplayAddModal={setDisplayAddModal} setShowInputForm={setShowInputForm} />}
      {displayEditModal && <EditBeneficiary displayEditModal={displayEditModal} setDisplayEditModal ={setDisplayEditModal} beneficiary={selectedBeneficiary} selectedIndex= {selectedIndex} />}

      {displayDeleteModal && 
      <DeleteBeneficiary 
        displayDeleteModal={displayDeleteModal} 
        setDisplayDeleteModal={setDisplayDeleteModal} 
        beneficiary={selectedBeneficiary} 
        selectedIndex= {selectedIndex} 
      />}

      {/* {displayAddModal && <AddBeneficiary displayAddModal={displayAddModal} setDisplayAddModal={setDisplayAddModal} />} */}

      {/* {showInputForm && <InputForm showInputForm={showInputForm} setShowInputForm={setShowInputForm} />} */}

      <table>
        <thead>
          <tr>
            {tableKeys?.map(key => (
              <th scope = 'col' className='tableHead'>{key.charAt(0).toUpperCase() + key.slice(1)}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {beneficiaries && 
            beneficiaries.map((beneficiary, index) => {
              console.log('individual beneficiary: ', beneficiary)
              const values = Object.values(beneficiary)
              values.unshift(index+1)
              return (
                <tr className='tableHead'>
                {values.map(value => {
                  let updatedValue = value
                  if(typeof value === 'object') {
                    updatedValue = JSON.stringify(value)
                  }
                return <td className='tableHead'>{updatedValue}</td>})}
                <td className='tableHead'>
                  <button className="optionButtons" onClick={() => {
                    setDisplayEditModal(true)
                    handleSelection(beneficiary, index)
                  }}>📝</button>
                  <button className="optionButtons" onClick={() => {
                    setDisplayDeleteModal(true)
                    handleSelection(beneficiary, index)
                  }}>🗑️</button>
                  <button className="optionButtons" onClick={() => {
                    setDisplayBeneficiary(true)
                    handleSelection(beneficiary, index)
                  }}>👁️</button>
                </td>
              </tr>
              )
            })
          }
        </tbody>
      </table>
    </>
  )
}

export default ManageBeneficiary