const linksInternos =  document.querySelectorAll('.header-menu li')


function srollSuave(e){
  e.preventDefault()
  const href = e.target.getAttribute('href')
  const section = document.querySelector(href)
  section.scrollIntoView({
    behavior:'smooth',
    block:'start'
  })
}


linksInternos.forEach((item)=>{
  item.addEventListener('click',srollSuave)
})



const modal = document.querySelectorAll('.modal')
const cards = document.querySelectorAll('.empresa')
const fechar = document.querySelectorAll('.fechar')

function showModal(e){
  modal[e].classList.add('ativo')
}
fechar.forEach((item)=>{
  item.addEventListener('click',()=>{
    item.parentElement.parentElement.classList.remove('ativo')
  })
})
cards.forEach((item,index)=>{
  item.addEventListener('click',()=>{
    showModal(index)
  })
})

// function fecharModal(e){
//   if(Number.isInteger(e)){
//     const modal =  document.querySelector('#modal-'+ e )
//     modal.classList.add('ativo')
//   }else{
//     console.log(e.target.parentElement.parentElement);
//     e.target.parentElement.parentElement.classList.remove('ativo')
//   }onclick="mostrarModal(3)" COLOCAR NO HTML
// }
// const fechar =  document.querySelectorAll('.fechar')
// fechar.forEach((item)=>{
//   item.addEventListener('click',fecharModal)
// })
// function mostrarModal(e){
//   // console.log(e);
//    fecharModal(e)
// }
