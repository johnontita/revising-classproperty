
const createLink=document.querySelector('.link')
const btn1=document.querySelector('.btn1')
const para1=document.querySelector('.para')
const Registration=document.querySelector('.Registration')
const btn2=document.querySelector('.btn2')
const studentPortal=document.querySelector('.website')


const createAccount=function(){
  
    Registration.classList.remove('Registration')
    console.log('you can create account')
    
    
}

const buttonOne=function(){
    document.querySelector('body').style.backgroundColor='lightgreen'
    console.log('button is clicked')
    
    para1.classList.remove('para')
    studentPortal.classList.remove('website')
    
    
}
const showWebsite=function(){
    studentPortal.classList.remove('website')
}
btn1.addEventListener('click',buttonOne)
createLink.addEventListener('click',createAccount)


