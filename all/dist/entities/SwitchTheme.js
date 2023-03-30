const container = document.querySelector('.container')
export function changeTheme(){
    const changeThemeBtn = document.getElementById('switchThemeBtn')
    changeThemeBtn.addEventListener('click', () =>{
        container.classList.toggle('dark')
    })
}

changeTheme()