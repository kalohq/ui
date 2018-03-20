/* @flow */
import React from 'react';

import Icon from '../icon';

export const examples = [
  {
    title: 'Icons',
    description:
      'Renders an icon from the Google Material Design icon set. See the Brand/Icons page for a full list of icons',
    render: () => (
      <Icon color="blue400" size={24}>
        arrow_drop_down_circle
      </Icon>
    ),
  },
  {
    title: 'Icon sizing',
    description: 'Icons can be a variety of sizing',
    render: () => (
      <span>
        <Icon size={12}>attach_money</Icon>
        <Icon size={14}>attach_money</Icon>
        <Icon size={16}>attach_money</Icon>
        <Icon size={18}>attach_money</Icon>
        <Icon size={20}>attach_money</Icon>
        <Icon size={24}>attach_money</Icon>
        <Icon size={26}>attach_money</Icon>
        <Icon size={36}>attach_money</Icon>
        <Icon size={48}>attach_money</Icon>
      </span>
    ),
  },
  {
    title: 'Icon colors',
    description:
      'Any color from our palette can be passed in via the color prop',
    render: () => (
      <span>
        <Icon color="pink300">loop</Icon>
        <Icon color="pink400">loop</Icon>
        <Icon color="pink500">loop</Icon>
        <Icon color="pink600">loop</Icon>
        <Icon color="pink700">loop</Icon>
        <Icon color="blue300">loop</Icon>
        <Icon color="blue400">loop</Icon>
        <Icon color="blue500">loop</Icon>
        <Icon color="blue600">loop</Icon>
        <Icon color="blue700">loop</Icon>
      </span>
    ),
  },
];
