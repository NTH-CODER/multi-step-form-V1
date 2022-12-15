const prevBtns = document.querySelectorAll('.btn-light');
const nextBtns = document.querySelectorAll('.btn-primary');
const progress = document.getElementById('progress');
const formStep = document.querySelectorAll('.form-step');
const progressSteps = document.querySelectorAll('.progress-steps');

let formStepsNum = 0;

nextBtns.forEach(btn => {
    btn.addEventListener('click', ()=> {
        formStepsNum++;
        updateFromSteps();
        updateProgressBar();
    });
});

function updateFromSteps() {
    formStep.forEach(formStep => {
        formStep.classList.contains('form-step-active') && 
            formStep.classList.remove('form-step-active');
    })

    formStep[formStepsNum].classList.add('form-step-active');
}

prevBtns.forEach(btn => {
    btn.addEventListener('click', ()=> {
        formStepsNum--;
        updateFromSteps();
        updateProgressBar();
    });
});

function updateFromSteps() {
    formStep.forEach(formStep => {
        formStep.classList.contains('form-step-active') && 
            formStep.classList.remove('form-step-active');
    })

    formStep[formStepsNum].classList.add('form-step-active');
}

function updateProgressBar() {
    progressSteps.forEach((progressSteps, index) => {
        if(index < formStepsNum + 1) {
            progressSteps.classList.add('progress-steps-active');
        } else {
            progressSteps.classList.remove('progress-steps-active');
        }
    });

    const progressActive = document.querySelectorAll('.progress-steps-active');

    progress.style.width = ((progressActive.length - 1) / (progressSteps.length - 1)) * 100 + "%";
}