var lorem = document.getElementById('lorem')
var changing_btns = document.getElementsByClassName('changing_btns')
var fontWeight = document.getElementById('fontWeight')
var fontSize = document.getElementById('fontSize')


fontWeight.addEventListener('change' , function(){
    if (this.value === 'monospace') {
        lorem.style.fontFamily = 'monospace'
    }
    if (this.value === 'serif') {
        lorem.style.fontFamily = 'serif'
    }
    if (this.value === 'san-serif') {
        lorem.style.fontFamily = 'sans-serif'
    }
})
fontSize.addEventListener('change' , function(){
    if (this.value === 'heading') {
        lorem.style.fontSize = '40px'
    }
    if (this.value === 'subHeading') {
        lorem.style.fontSize = '20px'
    }
    if (this.value === 'normal') {
        lorem.style.fontSize = '16px'
    }
})

for (var i = 0; i < changing_btns.length; i++) {
    changing_btns[i].addEventListener('click' , function(){
        switch (this.innerText) {
            case 'B':
                if (lorem.style.fontWeight == 'bold') {
                    lorem.style.fontWeight = 'normal'
                } else {
                    lorem.style.fontWeight = 'bold'
                }
                break;
                case 'I':
                   if ( lorem.style.fontStyle == 'italic') {
                    lorem.style.fontStyle = 'normal'
                   } else {
                    lorem.style.fontStyle = 'italic'
                   }
                    break;
                    case 'U':
                if (lorem.style.textDecoration == 'underline') {
                    lorem.style.textDecoration = 'none'
                } else {
                    lorem.style.textDecoration = 'underline'
                }
                break;
                case 'Right':
                lorem.style.textAlign = 'right'
                break;
                case 'Left':
                lorem.style.textAlign = 'left'
                break;
                case 'Center':
                lorem.style.textAlign = 'center'
                break;
                case 'Justify':
                lorem.style.textAlign = 'justify'
                break;
        
            default:
                break;
        }
    })
    
}