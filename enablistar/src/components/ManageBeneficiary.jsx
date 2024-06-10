import { useEffect, useState } from "react"
// import InputForm from "./InputForm/InputForm"
import { useSelector } from "react-redux"
import AddBeneficiary from "./AddBeneficiary"
import EditBeneficiary from "./EditBeneficiary"
import DeleteBeneficiary from "./DeleteBeneficiary"
import profileIcon from '../icons/profile.svg'
import bars from '../icons/bars.svg'
import DisplayBeneficiary from "./DisplayBeneficiary"

const ManageBeneficiary = () => {
  const [showInputForm, setShowInputForm] = useState(false)
  const [displayAddModal, setDisplayAddModal] = useState(false)
  const [displayEditModal, setDisplayEditModal] = useState(false)
  const [displayDeleteModal, setDisplayDeleteModal] = useState(false)
  const [displayBeneficiary, setDisplayBeneficiary] = useState(false)
  const [selectedBeneficiary, setSelectedBeneficiary] = useState()
  const [selectedIndex, setSelectedIndex] = useState()

  const beneficiaries = useSelector((state) => {
    return state.beneficiary
  })
  let tableKeys=[]

  if(beneficiaries?.length >0) {
    tableKeys = Object.keys(beneficiaries[0])
    tableKeys.unshift('#')
    tableKeys.push('')
  }

  const handleSelection = (beneficiary, index) => {
    setSelectedBeneficiary(beneficiary)
    setSelectedIndex(index)
  }

  return (
    <>
      <div className="header">
        <div className="title">
          <img src={bars} alt="profile" className="title-icon" />
          <span>Manage Beneficiary</span>
        </div>
        <img src={profileIcon} alt="profile" className="title-icon" />
      </div>
      <div>
        <span className="navigationText">Home / List of Beneficiaries</span>
        <button className="addButton" onClick={() => setDisplayAddModal(true)}>Add Beneficiary</button>
      </div>
      {displayAddModal && <AddBeneficiary displayAddModal={displayAddModal} setDisplayAddModal={setDisplayAddModal} setShowInputForm={setShowInputForm} />}
      {displayEditModal && <EditBeneficiary displayEditModal={displayEditModal} setDisplayEditModal ={setDisplayEditModal} beneficiary={selectedBeneficiary} selectedIndex= {selectedIndex} />}

      {displayDeleteModal && 
      <DeleteBeneficiary 
        displayDeleteModal={displayDeleteModal} 
        setDisplayDeleteModal={setDisplayDeleteModal} 
        beneficiary={selectedBeneficiary} 
        selectedIndex= {selectedIndex} 
      />}

      {displayBeneficiary && 
      <DisplayBeneficiary 
        displayBeneficiary={displayBeneficiary}
        setDisplayBeneficiary = {setDisplayBeneficiary} 
        beneficiary={selectedBeneficiary} 
      />}

      <table className="tableData">
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