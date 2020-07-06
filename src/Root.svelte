<script>
  import { onMount } from "svelte";
  import firebase from "@firebase/app";
  import "@firebase/auth";
  import { firebase as firebaseStore, firebaseApp } from "./store";
  export let config;

  onMount(function() {
    $firebaseStore = firebase;
    $firebaseApp = firebase.apps.length
      ? window.firebaseApp || null
      : firebase.initializeApp(config);
  });
</script>

<slot {firebase} app={$firebaseApp} />
