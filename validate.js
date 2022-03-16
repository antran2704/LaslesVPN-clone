function Validator(option) {
    var formElement = document.querySelector(option.form)
    if(formElement) {
        function validate(rule) {
                const inputElement = formElement.querySelector(rule.selector)
                const errorElement = inputElement.parentElement.querySelector(option.errorSelector)
                const errorMessenger = rule.test(inputElement.value)
                if(errorMessenger) {
                    errorElement.innerText = errorMessenger
                    inputElement.parentElement.classList.add("invalid")
                } else {
                    errorElement.innerText = ''
                    inputElement.parentElement.classList.remove("invalid")
                    inputElement.parentElement.classList.add("success")
                }
        }
        option.rules.forEach(function(rule) {
            const inputElement = formElement.querySelector(rule.selector)
            const errorElement = inputElement.parentElement.querySelector(option.errorSelector)
            inputElement.onblur = function() {
                // thằng này được gán đi gán lại nên phải đưa vào trong onblur
                const errorMessenger = rule.test(inputElement.value)
                if(errorMessenger) {
                    errorElement.innerText = errorMessenger
                    inputElement.parentElement.classList.add("invalid")
                } else {
                    errorElement.innerText = ''
                    inputElement.parentElement.classList.remove("invalid")
                    inputElement.parentElement.classList.add("success")
                }
            }
            inputElement.oninput = function () {
                const errorElement = inputElement.parentElement.querySelector(option.errorSelector)
                errorElement.innerText = ''
                inputElement.parentElement.classList.remove("invalid")
            }
        })
    }

    if(formElement) {
        formElement.onsubmit = function(e) {
            e.preventDefault()
            option.rules.forEach(function(rule) {
                validate(rule)
            })
        }
    }
}


Validator.isRequired = function(selector) {
    return {
        selector: selector,
        test: function(value) {
            return value ? undefined : "Tên không hợp lệ"
        }
    }
}

Validator.isEmail = function (selector, message) {
    return {
        selector: selector,
        test: function (value) {
            var redex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
            return redex.test(value) ? undefined : message || 'vui lòng nhập lại emai'
        }
    }
}
Validator.minLength = function (selector, min, message) {
    return {
        selector: selector,
        test: function (value) {
            return value.length >= min ? undefined : message || `Mật khẩu tối thiểu ${min} kí tự`
        }
    }
}

Validator.isConfirmed = function (selector, getConfirmValue, message) {
    return {
        selector: selector,
        test: function (value) {
            return value === getConfirmValue() ? undefined : message || 'Nhập lại mật khẩu ko chính xác'
        }
    }
}


// đóng mở validator

const btns = document.querySelectorAll('.btn')
const layout = document.querySelector('.layout')
const layoutContainer = document.querySelector('.layout-container')
const btnCloseLayout = document.querySelector('.btn-close-layout')
btns.forEach(function(btn) {
    btn.onclick = function(e) {
        layout.classList.add('active')
    }
})

btnCloseLayout.onclick = function() {
    layout.classList.remove('active')
}

layoutContainer.onclick =function(e) {
    e.stopPropagation()
}
layout.onclick = function(e) {
        layout.classList.remove('active')
}