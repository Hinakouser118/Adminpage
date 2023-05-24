import React from 'react'
import { Edit, SimpleForm, TextInput} from 'react-admin'
export default function UserEdit(props) {
  return (
   <Edit title='Edit a User' {...props}>
    <SimpleForm>
        <TextInput  source='id' />
        <TextInput source='name' />
        <TextInput  source='email' />
    </SimpleForm>
   </Edit>
  )
}