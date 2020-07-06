<script>
  import { onMount, createEventDispatcher } from "svelte";
  import { firebaseApp, idToken, accessToken } from "./store";
  import { refreshToken, user, status } from "./store";
  import { signOut } from "./store";

  export let refreshTokenEvery = 60;

  const dispatch = createEventDispatcher();
  let fresh_signin = false;
  let interval;

  function mount() {
    $firebaseApp.auth().onAuthStateChanged(async function(currentUser) {
      if (currentUser) {
        $idToken = await currentUser.getIdToken(true);
        $user = currentUser;

        interval = setInterval(async function() {
          $accessToken = await currentUser.getIdToken(true);
        }, refreshTokenEvery * 1000);
        if ($status === 0) {
          dispatch("signin", currentUser);
          fresh_signin = true;
        }
        dispatch("in", currentUser);
        $status = 1;
      } else {
        $user = null;
        clearInterval(interval);
        if (!status === 1) dispatch("signout", currentUser);
        dispatch("out", currentUser);
        $idToken = "";
        $status = 0;
        fresh_signin = false;
      }
    });
  }

  $: if (typeof window !== "undefined" && $firebaseApp) {
    mount();
  }
</script>

{#if $status === -1}
  <slot name="pending" />
{:else if $status === 0}
  <slot name="out" />
{:else if $status === 1}
  <slot user={$user} signout={signOut} />
{/if}
