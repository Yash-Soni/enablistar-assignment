import { useState } from "react"
import InputForm from "./InputForm/InputForm"
import { useSelector } from "react-redux"

const ManageBeneficiary = () => {
  const [showInputForm, setShowInputForm] = useState(false)
  const beneficiaries = useSelector((state) => {
    console.log(state);
    return state.beneficiary
  })
  let tableKeys

  if(beneficiaries) {
    tableKeys = Object.keys(beneficiaries[0])
  }
  tableKeys.unshift('#')
  tableKeys.push('')

  console.log('Beneficiaries: ', beneficiaries);
  return (
    <>
      <div>Manage Beneficiary</div>
      <button onClick={() => setShowInputForm(!showInputForm)}>Add Beneficiary</button>

      {showInputForm && <InputForm showInputForm={showInputForm} setShowInputForm={setShowInputForm} />}

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
                  <button className="optionButtons" onClick={() => {}}>📝</button>
                  <button className="optionButtons" onClick={() => {}}>🗑️</button>
                  <button className="optionButtons" onClick={() => {}}>👁️</button>
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