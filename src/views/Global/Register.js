import { createUsers } from "../../services/userServices"

export function Register() {
    return `
    <div class="min-h-screen flex items-center justify-center bg-gray-100">
  <div class="w-full max-w-md bg-white rounded-lg shadow-md p-8">

    <div class="flex flex-col items-center mb-6">
      <img src="logo.svg" alt="CRUDZASO logo" class="h-10 mb-4">
      <h2 class="text-2xl font-semibold text-gray-800">Create account</h2>
      <p class="text-sm text-gray-500 text-center">
        Join the academic performance platform today
      </p>
    </div>

    <form id="register-form" class="space-y-4">
      <div>
        <label class="block text-sm font-medium text-gray-700 mb-1">
          Full Name
        </label>
        <input
        id="user-name"
          type="text"
          placeholder="John Doe"
          class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
      </div>

      <div>
        <label class="block text-sm font-medium text-gray-700 mb-1">
          Email address
        </label>
        <input
        id="user-email"
          type="email"
          placeholder="student@university.edu"
          class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
      </div>

      <div>
        <label class="block text-sm font-medium text-gray-700 mb-1">
          Password
        </label>
        <input
        id="user-password"
          type="password"
          placeholder="Create a password"
          class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
      </div>

      <div>
        <label class="block text-sm font-medium text-gray-700 mb-1">
          Confirm Password
        </label>
        <input
        id="user-confirm-password"
          type="password"
          placeholder="Confirm password"
          class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
      </div>

      <button
        type="submit"
        class="w-full bg-blue-600 text-white py-2 rounded-md font-medium hover:bg-blue-700 transition"
      >
        Register
      </button>
      <p id="validate-register" class="text-red-500"></p>
    </form>

    <div class="mt-6 text-center text-sm text-gray-600">
      <span>Already have an account?</span>
      <a href="#/login" class="text-blue-600 hover:underline font-medium ml-1">
        Sign in
      </a>
    </div>

  </div>
</div>

    `
}

function validateConfirmPassword(password, confirmPassword) {
    return password === confirmPassword
}

document.addEventListener('submit', (e) => {
    if (e.target.id == "register-form") {
        e.preventDefault()
        const registerForm = e.target
        const userName = registerForm.querySelector('#user-name')
        const userEmail = registerForm.querySelector('#user-email')
        const userpassword = registerForm.querySelector('#user-password')
        const confirmPassword = registerForm.querySelector('#user-confirm-password')
        //Validar si las contraseñas coinciden
        if (validateConfirmPassword(userpassword.value, confirmPassword.value)) {
          
            registerForm.querySelector('#validate-register').textContent = ''
            createUsers(userName.value, userEmail.value, userpassword.value)
            userName.value = ''
            userEmail.value = ''
            userpassword.value = ''
            confirmPassword.value = ''
        }
        else {
            registerForm.querySelector('#validate-register').textContent = 'The passwords do not match'
        }

    }
})