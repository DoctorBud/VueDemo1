# VueDemo1

This is my two-pint evaluation of the VueJS 2.0 stack.

I'm familiar with AngularJS (v1.x) and ReactJS, but my brief exposure to VueJS made me want to try to build with it and see what the latest and greatest web tooling looks like.

Overall, I'm very happy with VueJS and its similarity to the AngularJS 1.x that I've found very productive for the last several years. I will likely clone this project and begin a more extensive VueDemo2.


## Origins

This example is primarily based upon a wonderful article [Getting Started with the Vue Router](https://scotch.io/tutorials/getting-started-with-vue-router), which instructions I followed to create the basic application which demonstrates client-side routing in a single-page application.

Once I got the basic example working, I wanted to see how hard it was to extend and do something real. So I went to the ever-useful [ToDo MVC](http://todomvc.com) and found a VueJS 2.0 ToDo example to work with. The challenge with the example is that it was written as its own SPA and didn't use any tooling or preprocessor's. But it was actually quite easy to hack the ToDo example and turn it into a peer component.

I even got the 3 tabs in the ToDos screen to obey the router, using [Nested Routes](https://router.vuejs.org/en/essentials/nested-routes.html).

## Extensions

I chose to use the `AirBNB` ESLint rules, which I like, except for the 4-column tab stops vs my favored 2-column. Some of the code generated by `vue-cli` did not conform and needed adjustment.

I added `marked` and rendered a subset of the `README.md` into the `Hello` page.

I shrunk the VueJS logo so it didn't dominate the page.

## Observations

- I had never heard of [Webpack Bin](https://www.webpackbin.com/bins/-KjELUNkEg2hmOzoO7Nu) until reading the above article. It's a  powerful and practical tool for a world where we need to preprocess and bundle our assets.

- I didn't get a chance to code any real-time reactivity (yet). I'm thinking of putting in a little *number of characters* display so that when a ToDo is being edited, it will keep track of and display the current length of the ToDo. In AngularJS, this would be easy. I suspect that VueJS might require an explicit `watch` for this type of reactivity. ReactJS doesn't really try to do this, instead creating the illusion of reactivity by triggering a rerender via their Flux design pattern (it's been a while since I played with ReactJS, things may have changed).

- The unit testing capabilities (provided by `vue-cli` I suspect) include both Karma testing and E2E selenium testing. `npm run test` runs both suites. There's also a coverage analyzer in place, so you can see how feeble the simple unit test is.

- Vue's [Single File Components](https://vuejs.org/v2/guide/single-file-components.html) are an effective way to keep the HTML template and the controller code in a single file. I imagine that Angular4 will invent a similar mechanism (it's pretty easy with Webpack in play), rather than the tedious multifile component mechanism typically used these days.


## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report

# run unit tests
npm run unit

# run e2e tests
npm run e2e

# run all tests
npm test
```

For detailed explanation on how things work, checkout the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).


