<script lang="ts">
	import { enhance } from '$app/forms';
</script>

<div class="h-screen flex justify-center items-center">
	<div class="w-full max-w-md h-max prose">
		<h1 class="text-center">Sign up</h1>
		<form method="POST" class="form-control w-full max-w-md">
			<label for="username">Username</label>
			<input
				type="text"
				name="username"
				placeholder="Enter Your Name"
				id="username"
				class="input input-bordered input-primary w-full"
			/><br />
			<label for="password">Password</label>
			<input
				type="password"
				name="password"
				placeholder="Enter a password"
				id="password"
				class="input input-bordered input-primary w-full"
			/><br />
			<button type="submit" class="btn btn-active btn-secondary btn-wide mx-auto">Continue</button>
		</form>
		<div class="w-full text-center">
			<div class="divider divider-accent"></div>
			<span class="text-center">Already have an account? <a href="/login">Login</a></span>
		</div>
	</div>
</div>
