import React from 'react'
import renderer from 'react-test-renderer';
import Donut from '../src'

test('donut chart is rendered properly', async () => {
  const donut = renderer
    .create(<Donut label='test' value={50} />)
    .toJSON()
  
  expect(donut).toMatchSnapshot()
})

test('donut chart with gradient fails because no colors provided', async () => {
  try {
    renderer.create(
      <Donut label='gradient' value={50} withGradient />
    )
  } catch (e) {
    expect(e.message).toBe(`🍩 withGradient option color to be an array`)
  }
})

test('donut chart with gradient', async () => {
  const donut = renderer
    .create(
        <Donut
          label='gradient'
          value={50}
          color={['fuchsia', 'purple']}
          withGradient
        />
    ).toJSON()
  
    expect(donut).toMatchSnapshot()
})