
let checkpoint = new Date('2022-03-06 12:00:00').getTime()



let countdown = setInterval(function() {

    let now = new Date().getTime()
    let distance = checkpoint - now

    let daysLeft = Math.floor(distance/(1000*60*60*24))
    let hoursLeft = Math.floor((distance-(daysLeft*(1000*60*60*24)))/(1000*60*60))
    let minLeft = Math.floor((distance-((daysLeft*(1000*60*60*24))+(hoursLeft*(1000*60*60))))/(1000*60))
    let secLeft = Math.floor((distance-((daysLeft*(1000*60*60*24))+(hoursLeft*(1000*60*60))+(minLeft*(1000*60))))/1000)

    document.querySelector("#days").innerText = daysLeft
    document.querySelector("#hours").innerText = hoursLeft
    document.querySelector("#minutes").innerText = minLeft
    document.querySelector("#seconds").innerText = secLeft

    if(distance <= 0){
        clearInterval(countdown)
        alert('esse countdown acabou')
        document.querySelector("#days").innerText = 0
        document.querySelector("#hours").innerText = 0
        document.querySelector("#minutes").innerText = 0
        document.querySelector("#seconds").innerText = 0
    }

}, 1000)



// MODAL
const openModalButton = document.querySelector('#subscribe')
const closeModalButton = document.querySelector('#subscribed')
const modal = document.querySelector('#modal')

openModalButton.addEventListener('click', toggleModal)
closeModalButton.addEventListener('click', toggleModal)


function toggleModal() {
    if (modal.style.display === 'none') {
        modal.style.opacity = 0
        modal.style.display = 'block'
        setTimeout(()=>{modal.style.opacity = 1}, 100)
    } else {
        setTimeout(()=>{modal.style.display = 'none'}, 500)
        modal.style.opacity = 0
    }
}