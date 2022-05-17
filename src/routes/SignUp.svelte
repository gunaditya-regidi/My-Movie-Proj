<script>
    import Button from '../components/Button.svelte'
    import Input from '../components/Input.svelte'
    import A from '../components/A.svelte'
    import {userbaseStore, userStore, promiseStore} from '../stores'

    let username, password, email

    function signup() {
        $promiseStore = $userbaseStore.signUp({username, password, email})
            .then((user) => $userStore = user)
    }
</script>

<form on:submit|preventDefault={signup} class="lg:w-2/6 md:w-1/2 bg-gray-100 rounded-lg p-8 flex flex-col w-full mt-10 md:mt-0">
    <div class="flex justify-between">
        <h2 class="text-gray-900 text-lg font-medium title-font mb-5">Sign Up</h2>
      
    </div>
        <Input label="Username" bind:value={username} type="text" required />
    <Input label="Password" bind:value={password} type="password" required />
    <Input label="Email" bind:value={email} type="email" required />
    <Button>Sign up!</Button>
    <div class="flex my-3 justify-between">
    <p class="text-xs text-gray-500 mt-3">Already have an Account?, then SignIn here</p> 
     <A href="/#/signin">sign in</A> 
    </div>
</form>