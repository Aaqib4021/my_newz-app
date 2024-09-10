import React from 'react'

const Header = ({themeName, setThemeName}) => {

    // const [themeName, setThemeName] = useState("Dark");

  return (
    <div className={`flex shadow-sm mb-4 ${themeName === "Dark" ? "bg-black text-white" : "bg-white text-black "}`}>

        <div>

        <img className='w-20 px-2 py-2 rounded-2xl h-16 ml-4' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRyVGQwL7H2oUIB2Ylixb4EBDKJpEGgT0FL1Q&s" 
        alt="logo" />

        </div>

        <div>

            <ul className='flex py-4 ml-16 cursor-pointer font-semibold '>

                <li className='px-2 hover:underline'>Home</li>
                <li className='px-2 hover:underline'>Science & Technology</li>
                <li className='px-2 hover:underline'>International</li>
                <li className='px-2 hover:underline'>Stocks</li>
                <li className='px-2 hover:underline'>Sports</li>
                <li className='px-2 hover:underline'>Business</li>
                <li className='px-2 hover:underline'>Travel</li>
                <li className='px-2 hover:underline'>Innovation</li>

            </ul>

        </div>

        <input className={`px-4 h-8 mt-4 rounded-full ml-16 outline-none  ${themeName === "Dark" ? "bg-gray-200 text-black" : "bg-gray-100 text-black "}`} type="text" placeholder='Search' />

        <div>
            <button className={`mt-4  ml-4 px-6 font-semibold py-1 rounded-lg ${themeName === "Dark" ? "bg-white text-black" : "bg-black text-white "}`} onClick={()=>{
              themeName === "Dark" ? setThemeName("Light") : setThemeName("Dark")
            }}>{themeName}</button>
        </div>

    </div>
  )
}

export default Header;