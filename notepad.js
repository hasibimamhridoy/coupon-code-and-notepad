const getTextArea = document.getElementById('editor')
const textArea = getTextArea.value
const getColorPicker = document.getElementById('colorpicker')
const colorPicker = getColorPicker.value
getColorPicker.addEventListener('input',function(event){
    getTextArea.style.color=getColorPicker.value
})

//bold
const bold = document.getElementById('bold')
bold.addEventListener('click',function(event){

    if(getTextArea.style.fontWeight=='normal' || getTextArea.style.fontWeight === ''){
        getTextArea.style.fontWeight='bolder'
    }

    else{
        getTextArea.style.fontWeight='normal'
    }
     
})
// italic
const italic = document.getElementById('italic')
italic.addEventListener('click',function(event){
    console.log('hello');

    if(getTextArea.style.fontStyle=='normal' ||getTextArea.style.fontStyle==''){
        getTextArea.style.fontStyle='italic'
    }

    else{
        getTextArea.style.fontStyle='normal'
    }
     
})

// underline
const underline = document.getElementById('underline')
underline.addEventListener('click',function(event){
    console.log('hello');

    if(getTextArea.style.textDecoration=='normal' ||getTextArea.style.textDecoration==''){
        getTextArea.style.textDecoration='underline'
    }

    else{
        getTextArea.style.textDecoration='normal'
    }
     
})






// Full Screen
const fullScreen = document.getElementById('full-screen')
const mainId = document.getElementById('main-id')

fullScreen.addEventListener('click',function(event){
    
    if (document.fullscreenElement) {
        document.exitFullscreen();
      } else if (mainId.requestFullscreen) {
        mainId.requestFullscreen();
      } else if (mainId.webkitRequestFullscreen) { /* Safari */
      mainId.webkitRequestFullscreen();
      } else if (mainId.msRequestFullscreen) { /* IE11 */
      mainId.msRequestFullscreen();
      }

     
})