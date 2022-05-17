
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
                        
                        <a href="/Login" class="w-full px-6 py-2 mr-0 text-gray-700 md:px-0 lg:pl-2 md:mr-4 lg:mr-5 md:hidden">HOME</a>
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
        <input  id="inputValue" type="text" class="form-control relative flex-auto min-w-0 block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" placeholder="Search a Movie">
        <button type="submit" id="search" class="btn inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700  focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out items-center">
          Search a Movie
        </button>
        
      </div>
    </div>
  </div>
  <div class="section" id="movies-searchable">
</div>
<style>
    .section{
        display:flex;
        width:100%;
    }
    .siz
    {
        width:300px;
        margin:5px;
        transition: 250ms all;
    }
    .siz:hover{
        margin-left: 0 40px;
        transform: scale(1.2);
        cursor: pointer;
    }


</style>
<script>
    
const url ='https://www.omdbapi.com/?apikey=50afd667'
const buttonElement = document.querySelector('#search');
const inputElement = document.querySelector('#inputValue');
const moviesSearchable = document.querySelector('#movies-searchable');
const movieData = document.querySelector('#movie-Data');

function movieSection(movies) {
    return movies.map((movie) => {
      if (movie.Poster){
        return `<img class="siz" src=${movie.Poster} data-movie-id=${movie.imdbID}/>`;
      }
    })

}

function renderSearchMovies(data) {
    moviesSearchable.innerHTML ='';
    const movies = data.Search;
    const movieBlock = createMovieContainer(movies);
    moviesSearchable.appendChild(movieBlock);
	console.log("Data: ",movies)
}

function createMovieContainer(movies) {
    const movieElement = document.createElement('div'); 
    movieElement.setAttribute('class','movie');

    const movieTempalte = `
              <section class="section">
                ${movieSection(movies)}
                </section>
                <div class="content">
            <p id="content-close"> close </p>
        </div>`;

    movieElement.innerHTML = movieTempalte;
    return movieElement;


}



buttonElement.onclick = function(event){
    event.preventDefault();
    const value = inputElement.value;

    const newUrl = url + '&s=' + value;
    fetch(newUrl)
        .then((res) => res.json())
        .then(renderSearchMovies)
        .catch((error) => {
            console.log('Error: ',error);
        });

        inputElement.value = '';
        console.log('Value: ',value);
}
</script>
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