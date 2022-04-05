import { ArgsStoryFn } from '@storybook/addons'
import { ComponentMeta } from '@storybook/react'
import { Main } from '.'

export default {
  title: 'Main',
  component: Main,
  args: {
    title: 'Titutlo defaular',
    description: 'Descrição defaular'
  }
} as ComponentMeta<typeof Main>

export const Basic = (args: ArgsStoryFn) => <Main {...args} />

export const Default = (args: ArgsStoryFn) => <Main {...args} />
