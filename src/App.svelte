<script>
	import Tailwindcss from './Tailwindcss.svelte';
    import Router from 'svelte-spa-router'
    import SignUp from './routes/SignUp.svelte'
    import SignIn from './routes/SignIn.svelte'
    import ForgotPassword from './routes/ForgotPassword.svelte'
    import {userbaseStore, userStore, promiseStore} from './stores'

	const userbase = window.userbase
    window.userbase = null

    // stores
    $userbaseStore = userbase
    $userStore = null

    $promiseStore = userbase.init({appId: 'a1f1144a-cc67-445e-9ed8-afdd8af148b7'})
        .then((session) => $userStore = session.user)

    
    function signout() {
        $promiseStore = $userbaseStore.signOut().then(() => $userStore = null)
    }
</script>

<Tailwindcss />

<div class="container flex flex-col justify-center items-center w-screen h-screen mx-auto">
    {#await $promiseStore.then(() => Promise.reject())}
        Loading..
    {:catch error}
        {#if error}
            <strong class="text-red-700 font-bold">ERROR! {error} </strong>
        {/if}
        {#if $userStore}

            
<div class="mx-auto max-w-7xl">

    <nav class="relative my-24 bg-white rounded z-50 h-24 select-none">
        <div class="container relative flex flex-wrap align-top justify-between h-24 mx-auto overflow-hidden font-medium border-b border-gray-200 md:overflow-visible lg:justify-center sm:px-4 md:px-2">
            <div class="flex items-center justify-start w-1/4 h-full pr-4">
                <a href="/" class="inline-block py-4 md:py-0">
                    <span class="p-1 text-xl font-black leading-none text-gray-900" style="font-family:'Courier New', Courier, monospace"><span>Movie Library</span><span class="text-indigo-600">.</span></span>
                </a>
            </div>
            <div class="top-0 left-0 items-start hidden w-full h-full p-4 text-sm bg-gray-900 bg-opacity-50 md:items-center md:w-3/4 md:absolute lg:text-base md:bg-transparent md:p-0 md:relative md:flex">
                <div class="flex-col w-full h-auto overflow-hidden bg-white rounded-lg md:bg-transparent md:overflow-visible md:rounded-none md:relative md:flex md:flex-row">
                    <div class="flex flex-col items-start justify-center w-full space-x-6 text-center lg:space-x-8 md:w-2/3 md:mt-0 md:flex-row md:items-center">
                        
                        <a href="#_" class="inline-block w-full py-2 mx-0 ml-6 font-medium text-left text-indigo-600 md:ml-0 md:w-auto md:px-0 md:mx-2 lg:mx-3">&nbsp;&nbsp;&nbsp;&nbsp;</a>
                        <a href="#_" class="inline-block w-full py-2 mx-0 font-medium text-left text-gray-700 md:w-auto md:px-0 md:mx-2 hover:text-indigo-600 lg:mx-3">&nbsp;&nbsp;&nbsp;&nbsp;</a>
                        <a href="#_" class="inline-block w-full py-2 mx-0 font-medium text-left text-gray-700 md:w-auto md:px-0 md:mx-2 hover:text-indigo-600 lg:mx-3">&nbsp;&nbsp;&nbsp;&nbsp;</a>
                        <a href="#_" class="inline-block w-full py-2 mx-0 ml-6 font-medium text-left text-indigo-600 md:ml-0 md:w-auto md:px-0 md:mx-2 lg:mx-3">&nbsp;&nbsp;&nbsp;&nbsp;</a>
                        <a href="#_" class="inline-block w-full py-2 mx-0 font-medium text-left text-gray-700 md:w-auto md:px-0 md:mx-2 hover:text-indigo-600 lg:mx-3">&nbsp;&nbsp;&nbsp;&nbsp;</a>
                        <a href="#_" class="inline-block w-full py-2 mx-0 font-medium text-left text-gray-700 md:w-auto md:px-0 md:mx-2 hover:text-indigo-600 lg:mx-3">&nbsp;&nbsp;&nbsp;&nbsp;</a>
                        

                    </div>
                    <div class="flex flex-col items-start justify-end w-full pt-4 md:items-center md:w-1/3 md:flex-row md:py-0">
                        
                        <button on:click={signout}>Logout</button>
                        <a href="#_" class="inline-block w-full py-2 mx-0 font-medium text-left text-gray-700 md:w-auto md:px-0 md:mx-2 hover:text-indigo-600 lg:mx-3">&nbsp;&nbsp;&nbsp;&nbsp;</a>
                        
                        <a href="/Login" class="w-full px-6 py-2 mr-0 text-gray-700 md:px-0 lg:pl-2 md:mr-4 lg:mr-5 md:w-auto">HOME</a>
                        </div>
                </div>
            </div>
            <div class="absolute right-0 flex flex-col items-center items-end justify-center w-10 h-10 bg-white rounded-full cursor-pointer md:hidden hover:bg-gray-100">
                <svg class="w-6 h-6 text-gray-700" x-show="!showMenu" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" stroke="currentColor" x-cloak="">
                    <path d="M4 6h16M4 12h16M4 18h16"></path>
                </svg>
                <svg class="w-6 h-6 text-gray-700" x-show="showMenu" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" x-cloak="">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
                </svg>
            </div>
        </div>
    </nav>
   </div>    

   Hello, {$userStore.username}!

   <div class="flex mx-2.5 justify-center">
    <div class="mb-3 xl:w-96">
      <div class="my-10 input-group relative flex flex-wrap items-stretch w-full mb-4">
        <input type="text" class="form-control relative flex-auto min-w-0 block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" placeholder="Search a Movie" id="inputValue">
        <button class="btn inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700  focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out flex items-center" type="submit" id="search">
          <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="search" class="w-4" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
            <path fill="currentColor" d="M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z"></path>
          </svg>
        </button>
        
      </div>
    </div>
  </div>

        {:else}
        <nav class="relative z-50 h-24 select-none">
            <div class="container relative flex flex-wrap items-center justify-between h-24 mx-auto overflow-hidden font-medium border-b border-gray-200 md:overflow-visible lg:justify-center sm:px-4 md:px-2">
                <div class="flex items-center justify-start w-1/4 h-full pr-4">
                    <a href="/" class="inline-block py-4 md:py-0">
                        <span class="p-1 text-xl font-black leading-none text-gray-900" style="font-family:'Courier New', Courier, monospace"><span>Movie Library</span><span class="text-indigo-600">.</span></span>
                    </a>
                </div>
                
                </div>
            </nav>
            <h1 class="text-5xl font-extrabold leading-10 tracking-tight text-left text-gray-900 md:text-center sm:leading-none md:text-6xl lg:text-7xl"><span class="inline md:block">Welcome to </span> <span class="relative mt-2 text-transparent bg-clip-text bg-gradient-to-br from-indigo-600 to-indigo-500 md:inline-block" style="font-family:'Courier New', Courier, monospace">MOVIE LIBRARY<span style="color:black;font-family:'Courier New', Courier, monospace">.</span> WebApp</span></h1>
           
            <h3>SignUp! and view all new movies Details... Have fun</h3>
            <Router routes={{
                '/': SignUp,
                '/signin': SignIn,
                '/forgotpassword': ForgotPassword
            }} />
        {/if}
    {/await}
</div>