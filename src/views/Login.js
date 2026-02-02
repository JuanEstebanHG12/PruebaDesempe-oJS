import { login } from "../services/userServices.js";

export function Login(){
    return `
    <div class="min-h-screen flex items-center justify-center bg-gray-100">
  <div class="w-full max-w-md bg-white rounded-lg shadow-md p-8">
    
    <div class="flex flex-col items-center mb-6">
      <img src="logo.svg" alt="CRUDZASO logo" class="h-10 mb-4">
      <h2 class="text-2xl font-semibold text-gray-800">Welcome back</h2>
      <p class="text-sm text-gray-500 text-center">
        Enter your credentials to access the platform
      </p>
    </div>

    <form id="form-login" class="space-y-4">
      <div>
        <label for="identifier" class="block text-sm font-medium text-gray-700 mb-1">
          Email or username
        </label>
        <input
          type="text"
          id="identifier"
          name="identifier"
          placeholder="student@university.edu"
          class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
        >
      </div>

      <div>
        <label for="password" class="block text-sm font-medium text-gray-700 mb-1">
          Password
        </label>
        <div class="relative">
          <input
            type="password"
            id="password"
            name="password"
            class="w-full px-3 py-2 border border-gray-300 rounded-md pr-10 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          >
          <button
            type="button"
            class="absolute inset-y-0 right-0 px-3 flex items-center text-gray-400 hover:text-gray-600"
            aria-label="Show password"
          >
            👁
          </button>
        </div>
      </div>

      <div class="flex justify-end">
        <a href="#" class="text-sm text-blue-600 hover:underline">
          Forgot password?
        </a>
      </div>

      <button
        type="submit"
        class="w-full bg-blue-600 text-white py-2 rounded-md font-medium hover:bg-blue-700 transition"
      >
        Sign in
      </button>
    </form>

    <div class="mt-6 text-center text-sm text-gray-600">
      <span>Don't have an account?</span>
      <a href="#" class="text-blue-600 hover:underline font-medium ml-1">
        Register
      </a>
    </div>

  </div>
</div>
    `
}

document.addEventListener('submit',async (e)=> {
    if (e.target.id == 'form-login') {
        e.preventDefault()
        const form = e.target
        const email = form.querySelector('#identifier')
        const password = form.querySelector('#password')
        console.log(await login(email.value, password.value));
    }
})