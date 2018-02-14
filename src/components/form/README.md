# Form Kit

This is a collection of form components which make creating consistent forms along with our [withForm HOC](https://github.com/kalohq/frontend/blob/develop/src/core/decorators/with-form/with-form.js) super quick and easy.

## The Signature

```js
// This could be ANY "input component"
import {Form, Fieldset, FieldRow, Field, Input} from '@kalo/ui';

function MyForm() {
  return (
    <Form>
      <Fieldset>
        <FieldRow>
          <Field>
            <Input />
          </Field>
        </FieldRow>
      </Fieldset>
    </Form>
  );
}
```

## Usage with `withForm`

Just rendering a form would be pretty useless. We need it to change values and update state! For this we have our [withForm HOC](https://github.com/kalohq/frontend/blob/develop/src/core/decorators/with-form/with-form.js).

Building on the example from the HOC documentation lets see how we can simplify the rendering of our form using our form kit.

*This example is a rewrite of the form component seen in [withForm HOC](https://github.com/kalohq/frontend/blob/develop/src/core/decorators/with-form/with-form.js) documentaton. Check that out first!*

```js
// Let's import some of the core form components from Kalo UI
import {Input, Fieldset, Field, FieldRow} from '@kalo/ui';

// We define a simple component that renders a form, this is what will
// be enhanced using the withForm HOC to provide state and logic.
//
// We expect some form state and callbacks to be passed in via our props.
// Checkout the withForm documentation to see how this form is enhanced.
function FormComponent(props) {
  return (

    {/*
      * We hook the onSubmit event of the form to our handler which we can define later.
      */}
    <Form onSubmit={props.handleSubmit}>
      <Fieldset>

        {/*
          * We define our only field. We use the object spread syntax to pass
          * our field state into the component which will take control and
          * ensure it's input children respect this state as well!
          */}
        <Field label="My Field" {...props.myForm.fields.myField}>

          * And this field has a single input (our custom Input component that we imported above) */
          <Input

            {/*
              * Our input can pull it's value from anywhere in our form value.
              * In this case it's just using the display_name property.
              */}
            value={props.myForm.value.display_name}

            {/*
              * In order to update our value we hook into our inputs change callback
              * and simple connect that to a handler we can define the behaviour of.
              *
              * In this case each time the user types a character we will be calling
              * our handler.
              */}
            onChange={props.handleNameChange}

            {/*
              * Note this time we didn't need to pass onBlur or readOnly this time
              * since the Field component does that for us! It does this by passing
              * those props to your input using React.cloneElement.
              *
              * The ultimate input element here has props {value, onChange, onBlur, readOnly}
              */}

          />

          {/*
            * We also don't need to render validations ourself since the field
            * component does that too in a consistent manner!
            */}

        </Field>
      </Fieldset>

      {/*
        * In this example clicking the submit buton will simple trigger the form
        * onSubmit event which we hooked up earlier.
        */}
      <input type="submit" value="Submit" />

    </form>
  );
}

// checkout the withForm documentation to see how this form gets enhanced
```

## A note on inputs

A `Field` component can have one or many **inputs** as children. These inputs can be any component which accepts the following props:

- `onBlur`: `Function`
- `disabled`: `boolean`
- `readOnly`: `boolean`

For example the following are examples of input components:

- `Select`
- `Input`
- `Checkbox`
