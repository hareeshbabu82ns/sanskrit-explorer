import React from 'react'
import { t as translate } from '@sanskrit-coders/sanscript'
import { Menu, Segment, Form, Select, Divider, Header, Icon } from 'semantic-ui-react'

import { useForm, Controller } from "react-hook-form";

import {
  useRouteMatch,
} from "react-router-dom";

const SaTranslations = () => {
  let match = useRouteMatch();

  const options = [
    { key: 'devanagari', text: 'Devanagari', value: 'devanagari' },
    { key: 'iast', text: 'IAST', value: 'iast' }, //'International Alphabet of Sanskrit Transliteration'
    { key: 'slp1', text: 'SLP1', value: 'slp1' }, //'Sanskrit Library Phonetic Basic'
    { key: 'itrans', text: 'ITRANS', value: 'itrans' },
    { key: 'hk', text: 'Harvard-Kyoto', value: 'hk' },
    { key: 'wx', text: 'WX', value: 'wx' },
    { key: 'tamil', text: 'Tamil', value: 'tamil' },
    { key: 'telugu', text: 'Telugu', value: 'telugu' },
  ]

  const defaultValues = { fromDDLB: 'devanagari', toDDLB: 'iast', from: 'संस्कृतम्', to: '' } // संस्कृतम्

  const { handleSubmit, control, errors, reset, formState, setValue, getValues } = useForm({
    defaultValues
  })
  const onSubmit = async (data) => {
    console.log('converting From -> To')
    performTranslation(getValues())
  }

  const performTranslation = (values) => {
    const translatedValue = translate(values.from, values.fromDDLB, values.toDDLB)
    setValue('to', translatedValue)
  }

  const onSwitch = () => {
    console.log('switching From <-> To')
    const values = getValues()
    setValue([{ fromDDLB: values.toDDLB }, { from: values.to }, { toDDLB: values.fromDDLB }, { to: values.from }])
  }

  const validations = {
    from: { required: { value: true, message: 'From Language Text Required' } },
    fromDDLB: { required: true },
    toDDLB: { required: true },
  }
  return (
    <div style={{ marginRight: "2em" }}>
      <Menu color={'teal'} inverted attached={'top'}>
        <Menu.Item as='h4' header>
          Translations
      </Menu.Item>
      </Menu>
      <Segment attached >
        <Form onSubmit={handleSubmit(onSubmit)}>
          <Form.Group >
            <Controller as={Form.Select} control={control}
              name="fromDDLB" rules={validations.fromDDLB} error={errors.fromDDLB && errors.fromDDLB.message}
              fluid width={4} label='From' placeholder='From'
              options={options}
              onChange={([_, { value }]) => value}
            />
            <Controller as={Form.TextArea} control={control} name="from"
              rules={validations.from} error={errors.from && errors.from.message}
              placeholder='From' width={12} rows={4} />
          </Form.Group>
          <Divider horizontal>
            <Form.Group unstackable>
              <Form.Button type='button' inverted color={'blue'}
                icon={'sync alternate'} content={'Switch'}
                onClick={onSwitch}
              />
              <Form.Button type='submit' inverted color={'orange'}
                icon={'paper plane outline'} content={'Convert'} />
            </Form.Group>
          </Divider>
          <Form.Group>
            <Controller as={Form.Select} control={control}
              name='toDDLB' rules={validations.toDDLB} error={errors.toDDLB && errors.toDDLB.message}
              fluid width={4} label='To' placeholder='To'
              options={options}
              onChange={([_, { value }]) => { performTranslation({ ...getValues(), toDDLB: value }); return value }}
            />
            <Controller as={Form.TextArea} control={control} name="to"
              placeholder='To' width={12} rows={4} />
          </Form.Group>
        </Form>
      </Segment>
    </div>
  )
}
export default SaTranslations