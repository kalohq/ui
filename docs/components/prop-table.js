import React from 'react';
import styled from 'styled-components';

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
      description: '',
      defaultValue: {value: "'button'", computed: false},
    },
    disabled: {type: {name: 'bool'}, required: false, description: ''},
    icon: {type: {name: 'any'}, required: false, description: ''},
    iconBorder: {
      type: {name: 'bool'},
      required: false,
      description: '',
      defaultValue: {value: 'false', computed: false},
    },
    loneIcon: {
      type: {name: 'bool'},
      required: false,
      description: '',
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
      description: '',
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
      description: '',
      defaultValue: {value: "'primary'", computed: false},
    },
    grouped: {type: {name: 'bool'}, required: false, description: ''},
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
    name: {type: {name: 'string'}, required: false, description: ''},
    type: {type: {name: 'string'}, required: false, description: ''},
    mayGetLong: {type: {name: 'bool'}, required: false, description: ''},
  },
};

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;

  tr {
    border-bottom: 1px solid #eceff1;
    margin: 0 0 10px;
  }

  th {
    font-weight: 600;
    border-bottom: 2px solid #029dd8;
    text-align: left;
    padding: 8px 0;
  }

  td {
    padding: 12px 0;
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
            <td>{props.props[prop].type.name}</td>
            <td>{props.props[prop].type.description}</td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
}
