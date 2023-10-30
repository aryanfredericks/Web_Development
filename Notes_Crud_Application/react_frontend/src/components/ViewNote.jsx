import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link, useParams } from 'react-router-dom';

const ViewNote = () => {

  const [note, setNote] = useState([]);

  const {id} = useParams();

  useEffect(() => {
    getNotes();
  }, []);

  const getNotes = async () => {
    const result = await axios.get("http://localhost:8080/api/v1/get-all-notes");
    setNote(result.data);
  }

  const deleteUser = async (id)=>{
    await axios.delete(`http://localhost:8080/api/v1/delete/${id}`);
    getNotes();
  }

  return (
    <div className='w-fit mx-auto mt-32'>
      <table className='bg-blue-700 rounded-lg'>
        <thead className=''>
          <tr className='uppercase font-bold text-xl text-white'>
            <td className='px-10 py-2'>Note Id</td>
            <td className='px-10 py-2'>Note Title</td>
            <td className='px-10 py-2'>Note Description</td>
            <td className='px-10 py-2'>Actions</td>
          </tr>
        </thead>
        <tbody className='text-white'>
          {
            note.map((note, index) => {
              return <tr  key={index}>
                <td className='px-10 py-2'> {note.id}</td>
                <td className='px-10 py-2'>{note.title}</td>
                <td className='px-10 py-2'>{note.description}</td>
                <td className='px-10 py-2 flex justify-center items-center space-x-3'>
                  <Link className='text-black px-5 py-2 bg-yellow-400 hover:bg-yellow-600 duration-300 rounded-md' to={`/edit-user/${note.id}`}>Edit</Link>
                  <button className='text-white px-3 py-2 bg-red-600 hover:bg-rose-300 duration-300 rounded-md' onClick={()=>deleteUser(note.id)}>Delete</button>
                </td>
              </tr>
            })
          }
        </tbody>
      </table>
    </div>
  )
}

export default ViewNote
