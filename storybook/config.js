import { configure } from '@kadira/storybook'

import '../app/app/styles/global.scss'
import './environment.css'

function loadStories () {
  require('../app/card/components/CardPhoto/story.js')
  require('../app/card/containers/Card/story.js')
  require('../app/ui/components/FlexGroupHorizontal/story.js')
  require('../app/card/components/NetworkButton/story.js')
  require('../app/card/components/NetworkButton/story.js')
  require('../app/ui/components/TouchFeedback/story.js')
  require('../app/ui/components/Tabs/TabItem/story.js')
  require('../app/ui/components/Tabs/TabList/story.js')
  require('../app/ui/components/Tabs/Tabs/story.js')
  require('../app/projects/components/ProjectInfoIcon/story.js')
  require('../app/projects/components/ProjectTech/story.js')
  require('../app/projects/components/ProjectTechList/story.js')
  require('../app/projects/components/ProjectDetails/story.js')
  require('../app/projects/components/Project/story.js')
}

configure(loadStories, module)
