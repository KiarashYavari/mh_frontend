import React from 'react'

const ProfileTable = (props) => {
  return (
    <>
        <h4>{props.title}</h4>
        <table className='table table-striped table-bordered'>
            <thead>
                <tr>
                    <th>heading1</th>
                    <th>heading2</th>
                    <th>heading3</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>sample data</td>
                    <td>sample data</td>
                    <td>sample data</td>
                </tr>
                <tr>
                    <td>sample data</td>
                    <td>sample data</td>
                    <td>sample data</td>
                </tr>
                <tr>
                    <td>sample data</td>
                    <td>sample data</td>
                    <td>sample data</td>
                </tr>
                <tr>
                    <td>sample data</td>
                    <td>sample data</td>
                    <td>sample data</td>
                </tr>
            </tbody>
        </table>
    </>
  )
}

export default ProfileTable