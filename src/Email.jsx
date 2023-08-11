/* eslint-disable no-unused-vars */
import {useState} from 'react'
import './App.css'
// import QRCode from 'qrcode'
import {Route, Routes, useNavigate} from 'react-router-dom'
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
function Email() {
  const [add,
    setAdd] = useState('https://github.com/alimoonmh')
  const [url,
    setUrl] = useState('')
    const [openurl ,setOpenurl] =useState(true)
    const [opencustom ,setOpencustom] =useState(true)
    const [openlogo ,setOpenlogo] =useState(true)
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
    console.log("aaaa")
    if (url.includes('@') && url.includes('.com')) {
      setAdd(`mailto:${url}?subject=${subject}&body=${message}`)
    } else {
      toast.error('Enter Email', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        });
    }
  }
  const [eyecolor,
    setEyecolor] = useState('#007D51')
  const [bgcolor,
    setBgcolor] = useState('#ffffff')
  const [color,
    setColor] = useState('#007D51')
  const [image,
    setImage] = useState('')
  const [radius,
    setRadius] = useState(0)
    const [subject , setSubject] = useState('')
    const [message , setMessage] = useState('')
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
            <div>Enter Email
              <DriveFileRenameOutlineIcon/></div>
            <div><AddIcon/></div>
          </div>
        </Button>
        {openurl == false
          ? (
            <div className=' w-[85%] flex flex-col gap-3'>
              <div>
                <h1 className='text-[#007D51]'>Your Email
                </h1>
              </div>
              <div>
                <TextField
                  onChange={(e) => {
                  setUrl(e.target.value)
                }}
                  value={url}
                  className='w-[100%]'
                  label="Email Address"
                  variant="outlined"/>
              </div>
              <div>
                <h1 className='text-[#007D51]'>Subject
                </h1>
              </div>
              <div>
                <TextField
                  onChange={(s) => {
                  setSubject(s.target.value)
                }}
                  value={subject}
                  className='w-[100%]'
                  label="Subject"
                  variant="outlined"/>
              </div> <div>
                <h1 className='text-[#007D51]'>Message
                </h1>
              </div>
              <div>
                <TextField
                  onChange={(m) => {
                  setMessage(m.target.value)
                }}
                  value={message}
                  className='w-[100%]'
                  label="Message"
                  variant="outlined"/>
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
            <div>Add logo
            </div>
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
            id='email'/>

        </div>
        {/* <div className="text-5xl text-[#007D51] mb-36">Scan Me</div> */}
        <button
          className="text-5xl text-[#007D51]"
          onClick={() => {
          const qrCodeCanvas = document.getElementById("email");
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

export default Email