import React, { useEffect, useState } from 'react'
import { doGetApi, doDeleteApi } from '../../utils/ApiConfig';
import { Link } from 'react-router-dom';

function ReadComponent(props) {



  //store fetched data
  const [fetchdata, setFetchData] = useState([]);



  //delete item from list
  async function handleDeleteItem(id) {
    const res = await doDeleteApi(id);
    // console.log(res);
    fetchData(); //fetch data after delete 

  }

  //store in local storage for edit operation
  function handleSetLocalStorage(id, title, description) {
    localStorage.setItem('id', id);
    localStorage.setItem('title', title);
    localStorage.setItem('description', description);
  }





  //fetch data from api
  const fetchData = async () => {
    const res = await doGetApi();  //get request
    // console.log(res.data)
    setFetchData(res.data); //store data in state
  }

  //useEffect to fetch data one time
  useEffect(() => {
    fetchData();
  }, [])



  return (
    <div className='overflow-x-auto p-6 flex flex-col justify-center items-center'>
      <table className="table-auto w-full border-collapse border-2 border-black">
        <thead>
          <tr>
            <th className="border border-gray-400 px-4 py-2">ID</th>
            <th className="border border-gray-400 px-4 py-2">Title</th>
            <th className="border border-gray-400 px-4 py-2">Task Details</th>
            <th className="border border-gray-400 px-4 py-2">Operations</th>
          </tr>
        </thead>
        <tbody>
          {fetchdata.map((item, index) => (
            <tr key={index} className=''>
              <td className="border border-gray-400 px-4 py-2 ">{item.id}</td>
              <td className="border border-gray-400 px-4 py-2">{item.title}</td>
              <td className="border border-gray-400 px-4 py-2">{item.description}</td>
              <div className="flex justify-between items-center border border-gray-400  p-2">
                <Link to='/update' className=' w-full'>
                  <button className='bg-green-600 hover:bg-green-400 text-white p-2 w-[50%] rounded-lg' onClick={() => handleSetLocalStorage(item.id, item.title, item.description)}>Edit</button>
                </Link>

                <button className='bg-red-600 hover:bg-red-400 text-white p-2 w-[40%] rounded-lg' onClick={() => handleDeleteItem(item.id)}>Delete</button>
              </div>

            </tr>
          ))}
        </tbody>
      </table>

      <div className="mt-6 w-[50%] ">
      <Link to='/' className=' w-full'>
      <button className='p-2 w-[40%] rounded-lg bg-red-600 text-white' >Back</button>
      </Link>
        
      </div>
    </div>
  )
}

export default ReadComponent
