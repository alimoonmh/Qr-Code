/* eslint-disable no-unused-vars */
import React from 'react'
/* eslint-disable no-unused-vars */
import {useState} from 'react'
import './App.css'
// import QRCode from 'qrcode'
import {Route, Routes, useNavigate} from 'react-router-dom'
import Text from './Text'
import Sms from './Sms'
import Email from './Email'
import Phone from './Phone'
import Location from './Location'
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import AddIcon from '@mui/icons-material/Add';
// import QRCode from "react-qr-code";
import {red} from '@mui/material/colors'
import FileBase64 from 'react-file-base64';
import {QRCode} from 'react-qrcode-logo';
import styled from 'styled-components'
import {HexColorPicker} from "react-colorful";
import downloadImage from 'download-image'
import GitHubIcon from '@mui/icons-material/GitHub';
import HomeIcon from '@mui/icons-material/Home';
import Slider from '@mui/material/Slider';
import BrushIcon from '@mui/icons-material/Brush';
import QrCodeIcon from '@mui/icons-material/QrCode';
import DriveFileRenameOutlineIcon from '@mui/icons-material/DriveFileRenameOutline';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TelegramIcon from '@mui/icons-material/Telegram';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import RedditIcon from '@mui/icons-material/Reddit';
import YouTubeIcon from '@mui/icons-material/YouTube';
import {ToastContainer, toast, useToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Vcard() {
  const [add,
    setAdd] = useState('https://github.com/alimoonmh')
  const [url,
    setUrl] = useState('')
    const [lname , setLname]= useState('')
    const [phone , Setphone]= useState('')
    const [email , setEmail] =useState('')
    const [country ,setCountry] = useState('')
    const [city,setCity]=useState('')
  const [openurl,
    setOpenurl] = useState(true)
  const [opencustom,
    setOpencustom] = useState(true)
  const [openlogo,
    setOpenlogo] = useState(true)
  function handleopenurl() {
    setOpenurl(!openurl)
    if (openlogo == false || opencustom == false) {
      setOpenlogo(true)
      setOpencustom(true)
      setOpenurl(!openurl)
    }
  }
  function handleopencustom() {
    setOpencustom(!opencustom)
    if (openurl == false || openlogo == false) {
      setOpenlogo(true)
      setOpenurl(true)
      setOpencustom(!opencustom)
    }
  }
  function handleopenlogo() {
    setOpenlogo(!openlogo)
    if (opencustom == false || openurl == false) {
      setOpenurl(true)
      setOpencustom(true)
      setOpenlogo(!openlogo)
    }
  }
  function handelurl() {
    setAdd(`BEGIN:VCARD\nN:${lname};${url}\nFN:${url} ${lname}\nEMAIL;TYPE=INTERNET:${email}\nTEL;TYPE=voice,cell,pref:${phone}\nADR:;;;${city};;;${country}\nEND:VCARD`)
  }
  const [eyecolor,
    setEyecolor] = useState('#007D51')
  const [bgcolor,
    setBgcolor] = useState('#ffffff')
  const [color,
    setColor] = useState('#007D51')
  const [image,
    setImage] = useState('')
  // const [ssshow,   setSsshow] = useState(true)
  const navigate = useNavigate()
  const [radius,
    setRadius] = useState(0)
  return (
    <div>
      <div
        className='maindiv flex gap-3 bg-[#E4EDEF] h-[600px] w-[55%]  left-[12%] top-[23%] fixed items-center flex-col p-4'>
        <Button
          className='w-[85%]'
          variant="contained"
          onClick={handleopenurl}
          sx={{
          backgroundColor: '#007D51',
          ":hover": {
            backgroundColor: '#007D51'
          }
        }}>
          <div className='flex w-[100%] justify-between'>
            <div>Enter Content
              <DriveFileRenameOutlineIcon/></div>
            <div><AddIcon/></div>
          </div>
        </Button>
        {openurl == false
          ? (
            <div className=' w-[100%] flex flex-col gap-3 justify-center items-center'>
              <div className='flex  gap-[20%] w-[90%] justify-center'>
                <div className='w-[]'>
                  <TextField
                    onChange={(e) => {
                    setUrl(e.target.value)
                  }}
                    value={url}
                    className='w-[100%]'
                    label="First Name"
                    variant="outlined"/>
                </div>
                <div className='w-[]'>
                  <TextField
                    onChange={(l) => {
                    setLname(l.target.value)
                  }}
                    value={lname}
                    className='w-[100%]'
                    label="Last Name"
                    variant="outlined"/>
                </div>
              </div>
              <div className='flex  gap-[20%] w-[90%] justify-center'>
                <div className='w-[]'>
                  <TextField
                    onChange={(p) => {
                    Setphone(p.target.value)
                  }}
                    value={phone}
                    className='w-[100%]'
                    label="Phone Number"
                    variant="outlined"/>
                </div>
                <div className='w-[]'>
                  <TextField
                    onChange={(em) => {
                    setEmail(em.target.value)
                  }}
                    value={email}
                    className='w-[100%]'
                    label="Email"
                    variant="outlined"/>
                </div>
              </div>
              <div className='flex  gap-[20%] w-[90%] justify-center'>
                <div className='w-[]'>
                  <TextField
                    onChange={(c) => {
                    setCountry(c.target.value)
                  }}
                    value={country}
                    className='w-[100%]'
                    label="Country"
                    variant="outlined"/>
                </div>
                <div className='w-[]'>
                  <TextField
                    onChange={(si) => {
                    setCity(si.target.value)
                  }}
                    value={city}
                    className='w-[100%]'
                    label="City"
                    variant="outlined"/>
                </div>
              </div>
              <Button
                endIcon={< QrCodeIcon />}
                className=''
                sx={{
                color: "#007D51"
              }}
                variant="text"
                onClick={handelurl}>Create
              </Button>
            </div>
          )
          : null}
        <Button
          className='w-[85%]'
          variant="contained"
          onClick={handleopencustom}
          sx={{
          backgroundColor: '#007D51',
          ":hover": {
            backgroundColor: '#007D51'
          }
        }}>
          <div className='flex w-[100%] justify-between'>
            <div>Customize
              <BrushIcon/></div>
            <div><AddIcon/></div>
          </div>
        </Button>
        {opencustom == false
          ? (
            <div className=' w-[85%] flex flex-col gap-3'>
              <div className='flex justify-around w-full'>
                <h1 className='text-[#007D51]'>Color</h1>
                <h1 className='text-[#007D51]'>Background Color</h1>
                <h1 className='text-[#007D51]'>EyeColor</h1>
              </div>
              <div className='flex justify-around w-full colordiv'>
                <HexColorPicker color={color} onChange={setColor}/>
                <HexColorPicker color={bgcolor} onChange={setBgcolor}/>
                <HexColorPicker color={eyecolor} onChange={setEyecolor}/>
              </div>
              <div className='flex justify-around w-full'>
                <h1 className='text-[#007D51]'>Eye Radius</h1>
              </div>
              <div className='flex justify-around w-full colordiv'>
                <Slider
                  min={0}
                  max={30}
                  value={radius}
                  onChange={(e) => {
                  setRadius(e.target.value)
                }}
                  size="small"
                  defaultValue={radius}
                  aria-label="Small"
                  valueLabelDisplay="auto"/>
              </div>
            </div>
          )
          : null}
        <Button
          className='w-[85%]'
          variant="contained"
          onClick={handleopenlogo}
          sx={{
          backgroundColor: '#007D51',
          ":hover": {
            backgroundColor: '#007D51'
          }
        }}>
          <div className='flex w-[100%] justify-between'>
            <div className="">Add logo</div>
            <div className='flex gap-9'>
              <InstagramIcon/><TwitterIcon/><FacebookIcon/><LinkedInIcon/><TelegramIcon/><WhatsAppIcon/><RedditIcon/><YouTubeIcon/></div>
            <div><AddIcon/></div>
          </div>
        </Button>
        {openlogo == false
          ? (
            <div className=' w-[85%] flex flex-col gap-3'>
              <div>
                <h1>Upload Image</h1>
              </div>
              <div className="text-[#007D51]">
                <FileBase64
                  multiple={true}
                  onDone={(base64) => {
                  setImage(base64[0].base64)
                }}/></div>
            </div>
          )
          : null}
      </div>
      <div
        className='sidediv bg-white h-[600px] fixed top-[23%] left-[67%] w-[23%] justify-center flex  p-4 flex-col items-center'>
        <div className=' w-[99%] h-[80%]'>
          <QRCode
            bgColor={bgcolor}
            fgColor={color}
            eyeRadius={radius}
            logoHeight={100}
            logoWidth={100}
            size={300}
            logoImage={image}
            value={add}
            eyeColor={eyecolor}
            id='Vcard'/>

        </div>
        <button
          className="text-5xl text-[#007D51]"
          onClick={() => {
          const qrCodeCanvas = document.getElementById("Vcard");
          const link = document.createElement('a');
          link.href = qrCodeCanvas.toDataURL();
          link.download = 'qrcode.png';
          link.click();
        }}>
          download
        </button>

      </div>
    </div>
  )
}

export default Vcard