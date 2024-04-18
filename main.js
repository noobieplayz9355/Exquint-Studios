const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry)
        if (entry.isIntersecting) {
            entry.target.classList.forEach((_class) => {
                if (_class == 'hidden') {
                    entry.target.classList.add('slideInLeft');
                } else if (_class == 'notFaded') {
                    entry.target.classList.add('fadeIn')
                }
            });
        } else {
            entry.target.classList.forEach((_class) => {
                if (_class == 'notFaded') {
                    entry.target.classList.remove('fadeIn')
                }
            });
        }
    });
});

const hiddenElements = document.querySelectorAll('.hidden')
const notFadedElements = document.querySelectorAll('.notFaded')

hiddenElements.forEach((el) => observer.observe(el))
notFadedElements.forEach((el) => observer.observe(el))