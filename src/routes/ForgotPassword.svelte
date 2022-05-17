<script>
    import Button from '../components/Button.svelte'
    import Input from '../components/Input.svelte'
    import A from '../components/A.svelte'
    import {userbaseStore, promiseStore} from '../stores'

    let username

    function forgotPassword() {
        $promiseStore = $userbaseStore.forgotPassword({username})
    }
</script>

<form on:submit|preventDefault={forgotPassword} class="lg:w-2/6 md:w-1/2 bg-gray-100 rounded-lg p-8 flex flex-col w-full mt-10 md:mt-0">
    <div class="flex justify-between">
        <h2 class="text-gray-900 text-lg font-medium title-font mb-5">Forgot Password</h2>
        
    </div>
    <Input label="Username" bind:value={username} type="text" required />
    <Button>Send Email</Button>
    <div class="flex my-3 justify-between">
        <p class="text-xs text-gray-500 mt-3">Check your Email for system generated password</p> 
         <A href="/#/signin">sign in</A> 
        </div>
</form>