<script>
    import Button from '../components/Button.svelte'
    import Input from '../components/Input.svelte'
    import A from '../components/A.svelte'
    import {userbaseStore, userStore, promiseStore} from '../stores'

    let username, password

    function signin() {
        $promiseStore = $userbaseStore.signIn({username, password})
            .then((user) => $userStore = user)
    }
</script>

<form on:submit|preventDefault={signin} class="lg:w-2/6 md:w-1/2 bg-gray-100 rounded-lg p-8 flex flex-col w-full mt-10 md:mt-0">
    <div class="flex justify-between">
        <h2 class="text-gray-900 text-lg font-medium title-font mb-5">Sign In</h2>
       
    </div>
    <Input label="Username" bind:value={username} type="text" required />
    <Input label="Password" bind:value={password} type="password" required />
    <Button>Sign in!</Button>

    <div class="flex my-3 justify-between">
        <p class="text-xs text-gray-500 mt-3">Don't have an Account?, then SignUp here</p> 
         <A href="/">sign Up</A> 
        </div>
        <div class="flex my-3 justify-between">
            
        <p class="text-xs text-gray-500 mt-3">Forgot your password?, No prob you have us.</p> 
    <p class="text-base text-gray-500 mt-3">
        <A href="/#/forgotpassword">Forgot password?</A>
    </p>
    </div>
</form>