

const Contact = () => {
 
 

   const submitHandler =(formdata)=>{

    const userData = Object.fromEntries(formdata.entries())

    console.log(userData)
  }


  return (
    <>
      <div className=' flex justify-center items-center h-screen mb-10  '>
        <form 
       
        action={submitHandler} className='flex rounded-xl bg-gray-800 py-4 flex-col items-center  gap-4 text-center lg:w-1/2 px-7  '>
          <h1 className='text-3xl'>Contact Us</h1>
          <label htmlFor="name">

            <input
             required
            name='text'
       
             type="text" placeholder='Enter name' id='name' className='border-2 border-gray-900 rounded-xl outline-none lg:w-80  px-3 py-1' />
          </label>
          <label htmlFor="email">

            <input
            required
            name='email'
            
            type="email" placeholder='Enter email' id='email' className='border-2  border-gray-900 rounded-xl outline-none lg:w-80  px-3 py-1 ' />
          </label>

           <textarea
            required
           
           name="message" id="" rows={5}    placeholder='Enter your message' className='border-2  border-gray-900 p-2 lg:w-80  px-3 py-1 rounded-xl outline-none' ></textarea>

        <div>
           <button type='submit' className= 'lg:w-80 rounded-2xl flex items-start border-t-2  outline-none border-gray-900 px-2 '>send</button>
        </div>
       

        </form>

      </div>
    </>
  )
}

export default Contact