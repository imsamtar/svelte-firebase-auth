import { writable, get } from "svelte/store";

export const firebaseApp = writable(null);
export const idToken = writable(null);
export const accessToken = writable(null);
export const refreshToken = writable(null);
export const user = writable(null);
export const status = writable(-1);
export const firebase = writable(null);

function processProvider(provider, scopes, options) {
    if (scopes instanceof Array)
        for (const scope of scopes) provider.addScope(scope);
    provider.setCustomParameters(options);
}

export function signInWithGoogle(scopes = [], options = {}) {
    const { auth } = get(firebase);
    const provider = new auth.GoogleAuthProvider();

    processProvider(provider, scopes, options);
    return auth().signInWithPopup(provider);
};

export function signInWithGithub(scopes = [], options = {}) {
    const { auth } = get(firebase);
    const provider = new auth.GithubAuthProvider();
    processProvider(provider, scopes, options);
    return auth().signInWithPopup(provider);
};

export function signInWithFacebook(scopes = [], options = {}) {
    const { auth } = get(firebase);
    const provider = new auth.FacebookAuthProvider();
    processProvider(provider, scopes, options);
    return auth().signInWithPopup(provider);
};

export function signInWithTwitter(scopes = [], options = {}) {
    const { auth } = get(firebase);
    const provider = new auth.TwitterAuthProvider();
    processProvider(provider, scopes, options);
    return auth().signInWithPopup(provider);
};

export function signInWithOAuth(scopes = [], options = {}) {
    const { auth } = get(firebase);
    const provider = new auth.OAuthProvider();
    processProvider(provider, scopes, options);
    return auth().signInWithPopup(provider);
};

// For signInWithRedirect

export function signInWithGoogleRedirect(scopes = [], options = {}) {
    const { auth } = get(firebase);
    const provider = new auth.GoogleAuthProvider();
    processProvider(provider, scopes, options);
    return auth().signInWithRedirect(provider);
};

export function signInWithGithubRedirect(scopes = [], options = {}) {
    const { auth } = get(firebase);
    const provider = new auth.GithubAuthProvider();
    processProvider(provider, scopes, options);
    return auth().signInWithRedirect(provider);
};

export function signInWithFacebookRedirect(scopes = [], options = {}) {
    const { auth } = get(firebase);
    const provider = new auth.FacebookAuthProvider();
    processProvider(provider, scopes, options);
    return auth().signInWithRedirect(provider);
};

export function signInWithTwitterRedirect(scopes = [], options = {}) {
    const { auth } = get(firebase);
    const provider = new auth.TwitterAuthProvider();
    processProvider(provider, scopes, options);
    return auth().signInWithRedirect(provider);
};

export function signInWithOAuthRedirect(scopes = [], options = {}) {
    const { auth } = get(firebase);
    const provider = new auth.OAuthProvider();
    processProvider(provider, scopes, options);
    return auth().signInWithRedirect(provider);
};

// Other signin mathods

export function signInWithEmailAndPassword(email, password) {
    const { auth } = get(firebase);
    return auth().signInWithEmailAndPassword(email, password);
};

// Signout

export function signOut() {
    const { auth } = get(firebase);
    return auth().signOut();
};
