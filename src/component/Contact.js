import React from 'react'

function Contact() {
  return (
    <div className="bg-gradient-to-r from-cyan-500 to-blue-500 h-full wh">  
    <div className="py-5 ">
      <div class="container ">
      <form class=" w-96 mt-6 ">
  <div class="form-group">
    <input className=" border placeholder:px-3 rounded-lg" type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Full name"/>
    </div>
    <div class="form-group mt-4">
    <input className=" mt-4 h-10 border placeholder:px-3 rounded-lg" type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>
    </div>
  <div class="form-group mt-4">
    <textarea className=" h-10 mt-4 border placeholder:px-3 rounded-lg" type="password" class="form-control" id="exampleInputPassword1" placeholder="Password"/>
  </div>
  <button type="submit" class="btn btn-primary w-96 mt-4">Submit</button>
</form>
      </div>
    </div>
    </div>
  )
}

export default Contact