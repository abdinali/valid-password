const password_input = document.querySelector('.input-field input');
const eye_icon = document.querySelector('.input-field i');
const requirementList = document.querySelectorAll('.requirement-list li');

const constraints = [
    {regex: /.{8,}/, index: 0},         // minimum of 8 characters
    {regex: /[0-9]/, index: 1},         // at least one number
    {regex: /[a-z]/, index: 2},         // at least one lowercase letter 
    {regex: /[A-Z]/, index: 3},         // at least one uppercase letter
    {regex: /[^A-Za-z0-9]/, index: 4},  // at least one special letter

]

eye_icon.addEventListener('click', () => {
    password_input.type = password_input.type === 'password' ? 'text' : 'password';

    // toggle icon slash
    eye_icon.className = `fa-solid fa-eye${password_input.type === 'password' ? '' : '-slash'}`;
});

password_input.addEventListener('keyup', (e) => {
    constraints.forEach(item => {
        const isValid = item.regex.test(e.target.value);
        const requirementItem = requirementList[item.index];

        // check for constraints
        const icon = requirementItem.querySelector('i');
        if (isValid) {
            icon.className = "fa-solid fa-check"; // check off requirement
            requirementItem.classList.add('completed'); // lower opacity
        } else {
            icon.className = "fa-solid fa-circle";
            requirementItem.classList.remove('completed');
        }
    })
})