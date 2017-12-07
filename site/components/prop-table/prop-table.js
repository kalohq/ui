import React from 'react';
import styled from 'react-emotion';

const props = {
  description: '',
  displayName: 'Button',
  methods: [],
  props: {
    children: {type: {name: 'any'}, required: false, description: ''},
    message: {type: {name: 'string'}, required: false, description: ''},
    role: {
      type: {name: 'string'},
      required: false,
      description: 'An ARIA role tag',
      defaultValue: {value: "'button'", computed: false},
    },
    disabled: {
      type: {name: 'bool'},
      required: false,
      description: 'Disabled user interaction',
    },
    icon: {
      type: {name: 'any'},
      required: false,
      description: 'Displays an icon in the button',
    },
    iconBorder: {
      type: {name: 'bool'},
      required: false,
      description: 'Adds a border to the icon',
      defaultValue: {value: 'false', computed: false},
    },
    loneIcon: {
      type: {name: 'bool'},
      required: false,
      description: 'Squares off the button if',
      defaultValue: {value: 'false', computed: false},
    },
    wide: {
      type: {name: 'bool'},
      required: false,
      description: '',
      defaultValue: {value: 'false', computed: false},
    },
    size: {
      type: {
        name: 'enum',
        value: [
          {value: "'small'", computed: false},
          {value: "'medium'", computed: false},
          {value: "'large'", computed: false},
        ],
      },
      required: false,
      description: 'The size of the button',
      defaultValue: {value: "'large'", computed: false},
    },
    theme: {
      type: {
        name: 'enum',
        value: [
          {value: "'primary'", computed: false},
          {value: "'secondary'", computed: false},
          {value: "'tertiary'", computed: false},
          {value: "'disabled'", computed: false},
          {value: "'delete'", computed: false},
          {value: "'deny'", computed: false},
          {value: "'confirm'", computed: false},
        ],
      },
      required: false,
      description: 'The overall theme',
      defaultValue: {value: "'primary'", computed: false},
    },
    grouped: {
      type: {name: 'bool'},
      required: false,
      description:
        'Is the button part of a group - this should only be set by ButtonGroup',
    },
    spacing: {type: {name: 'bool'}, required: false, description: ''},
    flex: {type: {name: 'bool'}, required: false, description: ''},
    active: {type: {name: 'bool'}, required: false, description: ''},
    loading: {
      type: {name: 'bool'},
      required: false,
      description: '',
      defaultValue: {value: 'false', computed: false},
    },
    success: {type: {name: 'bool'}, required: false, description: ''},
    middle: {type: {name: 'bool'}, required: false, description: ''},
    onClick: {type: {name: 'func'}, required: false, description: ''},
    loadedTimeout: {
      type: {name: 'number'},
      required: false,
      description: '',
      defaultValue: {value: '600', computed: false},
    },
    component: {
      type: {name: 'any'},
      required: false,
      description: '',
      defaultValue: {value: 'Box', computed: true},
    },
    name: {
      type: {name: 'string'},
      required: false,
      description: 'A name to pass down to the DOM',
    },
    type: {
      type: {name: 'string'},
      required: false,
      description: 'A type to allow usage in forms',
    },
    mayGetLong: {type: {name: 'bool'}, required: false, description: ''},
  },
};

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;

  tr {
    border: 1px solid #eceff1;
    margin: 0 0 10px;
  }

  th {
    font-weight: 600;
    background-color: #f9fafc;
    text-align: left;
    padding: 14px 16px;
    font-size: 14px;
  }

  td {
    padding: 10px 16px;
    font-size: 14px;
  }
`;
export default function PropTable() {
  return (
    <Table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Type</th>
          <th>Description</th>
        </tr>
      </thead>
      <tbody>
        {Object.keys(props.props).map(prop => (
          <tr key={prop}>
            <td>{prop}</td>
            <td>
              <code>{props.props[prop].type.name}</code>
            </td>
            <td>{props.props[prop].description}</td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
}
