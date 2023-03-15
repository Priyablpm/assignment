import React from 'react'

const Details = (props) => {
    let data=props.data
  return (
    <div>
        <table border="2px">
            <tr>
                <th>STUDENTNAME</th>
                <th>STUDENTID</th>
                <th>STANDARD</th>
                <th>SECTION</th>
                <th>FEES</th>
            </tr>
            {data.map((x)=>{
                return <tr>
                    <td>{x.studentname}</td>
                    <td>{x.studentID}</td>
                    <td>{x.standard}</td>
                    <td>{x.section}</td>
                    <td>{x.fee}</td>
                </tr>
            })}





        </table>
    </div>
  )
}

export default Details