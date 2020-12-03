const Tweet = Vue.component('tweet', {
    props: ['author', 'message'],
    template: '<div class="tweet"><h3>{{ author }}</h3><p>{{ message }}</p></div>'
});