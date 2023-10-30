import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

const AddNote = () => {

  let navigate = useNavigate();

  const [note, setNote] = useState({
    title: "",
    description: ""
  });

  const { title, desc } = note;

  const onInputChange = (event) => {
    setNote({...note,[event.target.name]:event.target.value})
  }
  const onSubmit = async (event)=>{
    event.preventDefault();
    await axios.post("http://localhost:8080/api/v1/add-note",note);
    navigate("/view");
  }

  return (
    <div>
      <div className='w-[600px] rounded-md flex flex-col justify-center items-center mx-auto h-[400px] mt-16 bg-blue-700 text-white space-y-5 '>
        <form className='flex flex-col justify-center space-y-10' onSubmit={(event)=>onSubmit(event)}>
          <div className='text-3xl tracking-wide'>
            Add Your Note
          </div>
          <label className='text-2xl' htmlFor="title">
            Title:
            <input className='outline-none text-black ml-28 w-[300px] tracking-wider rounded-md p-2' type="text" name='title' value={title} onChange={(event)=>onInputChange(event)}/>
          </label>
          <label className='text-2xl' htmlFor="desc">
            Description:
            <input className='outline-none text-black text-lg w-[300px] ml-9 rounded-md p-2' type="text" name='desc' value={desc} onChange={(event)=>onInputChange(event)} />
          </label>
          <div className='buttons flex justify-between text-black space-x-10'>
            <button className='bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-white hover:text-red-600 duration-300 hover:scale-105' type='reset'>Reset</button>
            <button className='bg-green-600 text-white px-3 py-2 rounded-lg hover:bg-white hover:text-green-600 duration-300 hover:scale-105' type='submit'>Submit</button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default AddNote
