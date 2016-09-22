/**
 * Component Generator
 *
 * Partly borrowed from https://github.com/mxstbr/react-boilerplate
 */

module.exports = {
  description: 'Add a component',
  prompts: [{
    type: 'list',
    name: 'type',
    message: 'Select the type of component',
    default: 'Stateless Function',
    choices: () => ['ES6 Class', 'Stateless Function']
  }, {
    type: 'input',
    name: 'path',
    message: 'App section (no trailing /)',
    default: 'app',
  }, {
    type: 'input',
    name: 'name',
    message: 'Enter the ProperCase name',
    default: 'Button',
  }, {
    type: 'confirm',
    name: 'isContainer',
    default: false,
    message: 'Is it a container component?'
  }, {
    type: 'confirm',
    name: 'wantCSS',
    default: true,
    message: 'Does it have styling?'
  }, {
    type: 'confirm',
    name: 'wantStorybook',
    default: true,
    message: 'Does it have a story?'
  }, {
    type: 'confirm',
    name: 'wantTests',
    default: true,
    message: 'Does it have tests?'
  }],
  actions: data => {
    const folder = data.isContainer ? 'containers' : 'components'

    // Generate index.js and index.test.js
    const actions = [{
      type: 'add',
      path: `../../app/{{path}}/${folder}/{{properCase name}}/index.js`,
      templateFile: data.type === 'ES6 Class' ? './component/es6.js.hbs' : './component/stateless.js.hbs',
      abortOnFail: true,
    }]

    // If they want a CSS file, add styles.css
    if (data.wantCSS) {
      actions.push({
        type: 'add',
        path: `../../app/{{path}}/${folder}/{{properCase name}}/{{properCase name}}.scss`,
        templateFile: './component/styles.scss.hbs',
        abortOnFail: true,
      })
    }

    // If they want a story, add story.js
    if (data.wantStorybook) {
      actions.push({
        type: 'add',
        path: `../../app/{{path}}/${folder}/{{properCase name}}/story.js`,
        templateFile: './component/story.js.hbs',
        abortOnFail: true,
      })
      actions.push({
        type: 'modify',
        path: '../../storybook/config.js',
        pattern: /(}\n)/i,
        template: `  require('../app/{{path}}/${folder}/{{properCase name}}/story.js')\n$1`,
      })
    }

    // If they want tests, add index.spec.js
    if (data.wantTests) {
      actions.push({
        type: 'add',
        path: `../../app/{{path}}/${folder}/{{properCase name}}/index.spec.js`,
        templateFile: './component/test.js.hbs',
        abortOnFail: true,
      })
    }

    // If they want tests or a story, add props.js
    if (data.wantTests || data.wantStorybook) {
      actions.push({
        type: 'add',
        path: `../../app/{{path}}/${folder}/{{properCase name}}/props.js`,
        templateFile: './component/props.js.hbs',
        abortOnFail: true,
      })
    }

    return actions
  }
}
