/*=============== SHOW HIDDEN - PASSWORD ===============*/
const showHiddenPassword = (loginPass, loginEye) => {
    const input = document.getElementById(loginPass)
    IconEye =document.getElementById(loginEye)
      

    IconEye.addEventListener('click',()=>{
        if(input.type==="password"){
            input.type="text"

            IconEye.classList.add("ri-eye-line");
            IconEye.classList.remove("ri-eye-off-line")
        }

        else{
            input.type='password';

            IconEye.classList.add("ri-eye-off-line");
            IconEye.classList.remove("ri-eye-line")
        }
    })

}     


showHiddenPassword("login-pass",'login-eye')