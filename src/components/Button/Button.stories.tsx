import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Button } from './Button';

/**
 * Write stories showing all variations of button with abilitiy to customize args
 * - bonus points, include description / custom docs for docs page
 */

export default {
  title: 'Application/Component Library/Button',
  component: Button,
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = () => <Button />

export const Default = Template.bind({})
