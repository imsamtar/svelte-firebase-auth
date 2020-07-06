export { default as Root } from "./Root.svelte";
export { default as User } from "./User.svelte";

export {
    firebaseApp,
    idToken,
    accessToken,
    refreshToken,
    user,
    status,
    signInWithGoogle,
    signInWithGithub,
    signInWithFacebook,
    signInWithTwitter,
    signInWithOAuth,
    signInWithGoogleRedirect,
    signInWithGithubRedirect,
    signInWithFacebookRedirect,
    signInWithTwitterRedirect,
    signInWithOAuthRedirect,
    signInWithEmailAndPassword,
    signOut
} from "./store";