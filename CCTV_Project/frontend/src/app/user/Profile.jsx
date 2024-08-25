import { logos } from "../../constants";


const Profile = () => {
  return (
    <div className="h-screen w-screen  ">
      <div className="flex justify-between gap-46 mr-10 text-2xl font-bold text-gray-400 ">
        <div className="flex  items-center pl-20 w-[100vw] bg-gradient-to-r from-gray-800 to-blue-500  text-9xl"><h1>ATTICA</h1></div>
        <div className=" h-screen w-full flex flex-col gap-5 justify-center text-white relative left-[-150px]   ">
          <div>
            <label htmlFor="">User Name</label><br />
            <input className="bg-gray-500 rounded-md border border-blue-400 text-black w-[35vw] p-2 mb-6" type="text" name="" id="" />
          </div>
          <div>
            <label htmlFor="">Mail</label><br />
            <input className="bg-gray-500 rounded-md border border-blue-400 text-black w-[35vw] p-2 mb-6" type="text" name="" id="" />
          
          </div>
          <div>
            <label htmlFor="">EmployeeID</label><br />
            <input className="bg-gray-500 rounded-md border border-blue-400 text-black w-[35vw] p-2 mb-6" type="text" name="" id="" />
          </div>
    
          <div>
            <label htmlFor="">State</label><br />
            <input className="bg-gray-500 rounded-md border border-blue-400 text-black w-[35vw] p-2 mb-6" type="text" name="" id="" />
          </div>
          <div></div>
          <div></div>
        </div>
      </div>
    </div>
  )
}

export default Profile;