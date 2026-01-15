import React from 'react'

export default function DisplayList({ enquiry, setEnquiry }) {
 
    let deleteRow=(currentIndex)=>{
        if(confirm("Are you sure want to delete?")){
            // let userList=[...enquiry]
            // userList.splice(currentIndex,1)

            let userList=enquiry.filter((obj,i)=>currentIndex!=i)
            setEnquiry(userList)
        }
      
       
    }

    // let l=[10,20,30,40]

    // let newArray=l.filter((v,i)=>i==2) //0,1,3

    // console.log(newArray);
    

    return (
        <div>
            <h2 className='font-bold text-3xl py-10'>Enquiry List</h2>
            <div className="relative overflow-x-auto bg-neutral-primary-soft shadow-xs rounded-base border border-default">
                <table className="w-full text-sm text-left rtl:text-right text-body">
                    <thead className="text-sm text-body bg-neutral-secondary-soft border-b rounded-base border-default">
                        <tr>
                            <th scope="col" className="px-6 py-3 font-medium">
                                Sr No
                            </th>
                            <th scope="col" className="px-6 py-3 font-medium">
                                Name
                            </th>
                            <th scope="col" className="px-6 py-3 font-medium">
                                Email
                            </th>
                            <th scope="col" className="px-6 py-3 font-medium">
                                Phone
                            </th>
                            <th scope="col" className="px-6 py-3 font-medium">
                                Action
                            </th>

                        </tr>
                    </thead>
                    <tbody>
                        {
                            enquiry.map((obj, index) => {
                                return (
                                    <tr key={index} className="bg-neutral-primary border-b border-default">
                                        <td className="px-6 py-4"> {index+1} </td>
                                        <th
                                            scope="row"
                                            className="px-6 py-4 font-medium text-heading whitespace-nowrap"
                                        >
                                           {obj.name}
                                        </th>
                                        <td className="px-6 py-4">
                                        {obj.email}
                                        </td>
                                        <td className="px-6 py-4">
                                        {obj.phone}
                                        </td>
                                        <td className="px-6 py-4">
                                            <button onClick={()=>deleteRow(index)}>Delete</button> | <button>Edit</button>
                                        </td>

                                    </tr>
                                )
                            })
                        }


                    </tbody>
                </table>
            </div>

        </div>
    )
}
