# react-best-practices

I created this while re-writing a React on Rails application into a pure React application. These are my learnings over that time and hopefully you find some value in reading this.

Things we learned: 
1) <a href="https://material-ui.com/">Material-UI</a> has probably figured it out (seriously)
2) <a href="https://material.io/tools/icons/?style=baseline">Material-UI</a> has probably designed it (Can you tell we like Material UI?)
3) You rarely need Components that aren't functional components. The only time we use components is if we need to use something in the state.
    - You're probably wondering what a functional component is. <a href="/FirstExample.jsx">Here's a simple example.</a>
4) We have yet to need to use Component, instead we use <a href="https://reactjs.org/docs/react-api.html#reactpurecomponent">PureComponent</a>. 
    - The TLDR is "If your React component’s render() function renders the same result given the same props and state, you can use React.PureComponent for a performance boost in some cases."
5) We're a huge fan of Material UI decorators. Most notably <a href="https://material-ui.com/customization/css-in-js/#withstyles-styles-options-higher-order-component">withStyles</a> and <a href="https://material-ui.com/layout/breakpoints/#withwidth-">withWidth</a>. 
    - <a href="/withStyle.jsx">Click here for an example of withStyles</a>.
    - <a href="/withWidth.jsx">Click here for an exmample of withWidth</a>.
6) We combine multiple decorators with <a href="https://github.com/acdlite/recompose">recompose</a>. 
    - Click here for an example of combining decorator on a class and on a functional component
7) We noticed we had useless divs everywhere (EVERYWHERE). I'm sure you notice that you need to return one container (usually a div) as a common pattern is returning a list of items/components etc. So React solved for this. We use <a href="https://reactjs.org/docs/fragments.html#short-syntax">React.Fragment</a> to wrap things that would otherwise not need to be wrapped (i.e. BlogRoutes.jsx doesn't need a div surrounding that). 
    - Click here for an example using React Fragment
    - They have new shorthand syntax <> </>. We haven't fully adapted to that but should you enjoy using that it seems recommended from the docs.

