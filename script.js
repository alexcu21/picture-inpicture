const videoElement = document.getElementById('video');
const button = document.getElementById('button');

//promt to select media stream, pass to video element, the display

async function selectMediaStream(){
  try{
    const mediaStream = await navigator.mediaDevices.getDisplayMedia();
    videoElement.srcObject = mediaStream;
    videoElement.onloadedmetadata = () => {
      videoElement.play();
    }
  }catch(error){
    //catch error here
    console.log('error: ', error);
  }
}

button.addEventListener('click', async () => {
  //disabling button
  button.disabled = true;

  //start picture in Picture
  await videoElement.requestPictureInPicture();

  //reset button
  button.disabled = false;
});

//on load
selectMediaStream();
