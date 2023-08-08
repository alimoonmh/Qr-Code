/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import {useState} from 'react'
import './App.css'
// import QRCode from 'qrcode'
import {Route, Routes, useNavigate} from 'react-router-dom'
import Url from './Url.jsx'
import Text from './Text'
import Sms from './Sms'
import Email from './Email'
import Phone from './Phone'
import Location from './Location'
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import AddIcon from '@mui/icons-material/Add';
// import QRCode from "react-qr-code";
import { red } from '@mui/material/colors'
import FileBase64 from 'react-file-base64';
import { QRCode } from 'react-qrcode-logo';
import styled from 'styled-components'
import { HexColorPicker } from "react-colorful";
import GitHubIcon from '@mui/icons-material/GitHub';
import HomeIcon from '@mui/icons-material/Home';
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import Vcard from './Vcard'
function App() {
  // const [click,   setClick] = useState(false)
  const [add , setAdd] = useState('https://github.com/alimoonmh')
  const [url,
    setUrl] = useState('')
  const [show,
    setShow] = useState(true)
    
  const [sshow,
    setSshow] = useState(true)
  function handelshowbtn() {
    setShow(!show)
  }
  function handelshowbtnn() {
    setSshow(!sshow)
  }
  function handelshowbtnnn() {
    setSsshow(!ssshow)
  }
  function handelurl(){
    setAdd(url)
  }
  const [eyecolor , setEyecolor] = useState('#007D51')
  const [bgcolor , setBgcolor] =useState ('#ffffff')
  const [color , setColor] = useState('#007D51')
  const [image , setImage] = useState('')
  const [ssshow,
    setSsshow] = useState(true)
  const navigate = useNavigate()
  const buttonSX = {
    "&:hover": {
      backgroundcolor: "#007D51",
    },
  };
  console.log(document)
  return (
    <div className='h-screen bg-[#007D51]'>
      <div className="fixed flex items-center justify-around w-screen h-16 bg-[#007D51] rounded-xl top-5">
<div  className="text-white cursor-pointer" ><a href='https://github.com/alimoonmh'><GitHubIcon fontSize='large'/></a></div>
<div><h1 className='text-5xl text-white'>Qr Code Maker</h1></div>
     <div onClick={()=>{navigate(`/`)}} className="text-white cursor-pointer"><HomeIcon fontSize='large'/></div>
      </div>
      <div
        className='flex items-center justify-around w-[68%] h-auto gap-4 p-4 text-white  bg-[#007D51]  fixed left-[15%] top-[15%]'>
        <div>
          <button
            className='fixed btn hover:border-b-2'
            onClick={() => {
            navigate(`/Url`)
          }}>
            Url</button>
        </div>
        <div>
          <button
            className='fixed btn hover:border-b-2'
            onClick={() => {
            navigate(`/Text`)
          }}>
            Text</button>
        </div>
        <div>
          <button
            className='fixed btn hover:border-b-2'
            onClick={() => {
            navigate(`/Email`)
          }}>
            Email</button>
        </div>
        <div>
          <button
            className='fixed btn hover:border-b-2'
            onClick={() => {
            navigate(`/Phone`)
          }}>
            Phone</button>
        </div>
        <div>
          <button
            className='fixed btn hover:border-b-2'
            onClick={() => {
            navigate(`/Sms`)
          }}>
            Sms</button>
        </div>
        <div>
          <button
            className='fixed btn hover:border-b-2'
            onClick={() => {
            navigate(`/Location`)
          }}>
            Location</button>
        </div>
        <div>
          <button
            className='fixed btn hover:border-b-2'
            onClick={() => {
            navigate(`/Vcard`)
          }}>
            Vcard</button>
        </div>
      </div>
      <div
        className='maindiv flex gap-3 bg-[#E4EDEF] h-[600px] w-[55%]  left-[12%] top-[23%] fixed items-center flex-col p-4'>
        <Button className='w-[85%]' variant="contained" onClick={handelshowbtn} sx={{backgroundColor : '#007D51', ":hover":{backgroundColor : '#007D51'}}}>
          <div className='flex w-[100%] justify-between'>
            <div>What Is Qr Code </div>
            <div><AddIcon/></div>
          </div>
        </Button>
        {show != true
          ? (
            <div className=' w-[85%] flex flex-col gap-3'>
             <h5 className='text-[#007D51]'>

QR Code is a two-dimensional version of the barcode, typically made up of black and white pixel patterns. Denso Wave, a Japanese subsidiary of the Toyota supplier Denso, developed them for marking components in order to accelerate logistics processes for their automobile production. Now, it has found its way into mobile marketing with the widespread adoption of smartphones. "QR" stands for "Quick Response", which refers to the instant access to the information hidden in the Code.</h5>
            </div>
          )
          : null}
        <Button className='w-[85%]' variant="contained" onClick={handelshowbtnn} sx={{backgroundColor : '#007D51', ":hover":{backgroundColor : '#007D51'}}}>
          <div className='flex w-[100%] justify-between'>
            <div>What Are The benfits Of Using Qr Codes</div>
            <div><AddIcon/></div>
          </div>
        </Button>
        {sshow != true
          ? (
            <div className=' w-[85%] flex flex-col gap-3'>
       <h5 className='text-[#007D51]'>
       They are gaining popularity because of their versatility. You can use them to gather feedback to improve your products or services, increase customer engagement with images or videos, or even promote your business via events and coupons. All of these can be done with just a single scan!
       </h5>


           </div>
          )
          : null}
             <Button className='w-[85%]' variant="contained" onClick={handelshowbtnnn} sx={{backgroundColor : '#007D51', ":hover":{backgroundColor : '#007D51'}}}>
          <div className='flex w-[100%] justify-between'>
            <div>how Do I Scan Qr Codes</div>
            <div><AddIcon/></div>
          </div>
        </Button>
        {ssshow != true
          ? (
            <div className=' w-[85%] flex flex-col gap-3'>
       <h5 className='text-[#007D51]'>
       Depending on your device, you might already have a built-in QR Code reader or scanner. Open the camera app on your mobile phone and hold it over a Code for a few seconds until a notification pops up. If this doesn’t happen, check your settings and see if QR Code scanning is enabled. Still not working? Don’t worry, all you have to do now is install third-party QR Code readers from your app stores.
       </h5>
            </div>
          )
          : null}
      </div>
      <div
        className='sidediv bg-white h-[600px] fixed top-[23%] left-[67%] w-[23%] justify-center flex  p-4 flex-col items-center'>

<div className=' w-[99%] h-[80%] mb-[48px]'>
          <QRCode
            bgColor={bgcolor}
            fgColor={color}
            logoHeight={100}
            logoWidth={100}
            size={300}
            logoImage={image}
            value={add}
            eyeColor={eyecolor}
            id={'myQRCode'}/>

        </div>
        {/* <div className="text-5xl text-[#007D51]">Scan Me</div> */}

      </div>
      <Routes>
        <Route path='/Url' Component={Url}/>
        <Route path='/Text' Component={Text}/>
        <Route path='/Email' Component={Email}/>
        <Route path='/Phone' Component={Phone}/>
        <Route path='/Sms' Component={Sms}/>
        <Route path='/Location' Component={Location}/>
        <Route path='/Vcard' Component={Vcard}/>
      </Routes>
      <ToastContainer />
    </div>
  )
}

export default App
