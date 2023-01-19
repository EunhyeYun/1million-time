const startButton = document.querySelector('.click_btn');
const openButton = document.querySelector('.modal_btn');
const shareButton = document.querySelector('.share_btn');
const closeButton = document.querySelector('.close_btn');

const loading = document.querySelector('.result_loading');
const result = document.querySelector('.result');
const modal = document.querySelector('#modal');

function calculate(){
    const fieldValue = document.querySelector('#field_value');
    let timeValue = document.querySelector('#time_value');
    let timeValue_int = Number(timeValue.value); 
    
    const fieldResult = document.querySelector('.field_result');
    const timeResult = document.querySelector('.time_result');

    if(fieldValue.value == '' ){
        alert('값이 입력되지 않았습니다.');
        fieldValue.focus();
        return false;
    } else if(timeValue.value == ''){
        alert('값이 입력되지 않았습니다.');
        timeValue.focus();
        return false;
    } else if(timeValue.value > 24){
        alert('하루는 24시간');
        timeValue.focus
    } 
    
    loading.style.display = 'flex';
    result.style.display = 'none';
    
    setTimeout(()=> {
        loading.style.display ='none';
        result.style.display ='block';
        fieldResult.innerText = fieldValue.value;
        timeResult.innerText = parseInt(10000/timeValue_int)
    }, 1800)
    
}

function openModal() {
    modal.style.display = 'flex';
}

function closeModal() {
    modal.style.display = 'none';
}

// 복사기능 다시하기.....
function shareUrl() {
  let url = window.document.location.href;
  const textarea = document.createElement('textarea');
  document.body.appendChild(textarea);
  textarea.value = url;
  window.navigator.clipboard.writeText(textarea.value).then(
    () => {alert('복사완료');}
  );
}

startButton.addEventListener('click', calculate);
openButton.addEventListener('click', openModal);
closeButton.addEventListener('click', closeModal);
shareButton.addEventListener('click', shareUrl);

window.onclick = function(event){
    if(event.target == modal){
        closeModal();
    }
}

    