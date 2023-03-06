const formItemFullName = document.querySelector('#form-labelFN')
const formCompanyName = document.querySelector('#form-labelCN')
const formEmailAddress = document.querySelector('#form-labelEA')
const formSelect = document.querySelector('#form-labelSelect')
const formComments = document.querySelector('#form-labelComments')
const textFullName = document.querySelector('#form-fullName')
const textCompanyName = document.querySelector('#form-companyName')
const textEmailAddress = document.querySelector('#form-emailAddress')
const textSelect = document.querySelector('#form-select')
const textComments = document.querySelector('#form-comments')

textFullName.addEventListener('click', toggleFullName);
textCompanyName.addEventListener('click', labelCompanyName);
textEmailAddress.addEventListener('click', labelEmailAddress);
textSelect.addEventListener('click', labelSelect);
textComments.addEventListener('click', labelComments);


function toggleFullName (){
    if(!formItemFullName.classList.contains('formLabel')){
        return formItemFullName.classList.add('formLabel');
    } 
}
function labelCompanyName (){
    if(!formCompanyName.classList.contains('formLabel')){
        return formCompanyName.classList.add('formLabel');
    }
}
function labelEmailAddress (){
    if(!formEmailAddress.classList.contains('formLabel')){
        return formEmailAddress.classList.add('formLabel');
    }
}
function labelSelect(){
    if(!formSelect.classList.contains('formLabel')){
        return formSelect.classList.add('formLabel');
    }
}
function labelComments(){
    if(!formComments.classList.contains('formLabel')){
        return formComments.classList.add('formLabel');
    }
}
