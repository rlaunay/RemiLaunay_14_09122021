export type EmployeeData = {
  firstName: string,
  lastName: string,
  dateOfBirth: string,
  startDate: string,
  department: string,
  street: string,
  city: string,
  state: string,
  zipCode: number
}

export const employeeForm = {
  firstName: {
    input: {
      id: 'firstName',
      label: 'First Name',
    },
    rules: {
      required: {
        value: true,
        message: 'First Name is required!'
      }
    }
  },
  lastName: {
    input: {
      id: 'lastName',
      label: 'Last Name',
    },
    rules: {
      required: {
        value: true,
        message: 'Last Name is required!'
      }
    }
  },
  dateOfBirth: {
    input: {
      id: 'dateOfBirth',
      label: 'Date of Birth',
      type: 'date',
    },
    rules: {
      required: {
        value: true,
        message: 'Date of Birth is required!'
      }
    }
  },
  startDate: {
    input: {
      id: 'startDate',
      label: 'Start Date',
      type: 'date',
    },
    rules: {
      required: {
        value: true,
        message: 'Start Date is required!'
      }
    }
  },
  street: {
    input: {
      id: 'street',
      label: 'Street',
    },
    rules: {
      required: {
        value: true,
        message: 'Street is required!'
      }
    }
  },
  city: {
    input: {
      id: 'city',
      label: 'City',
    },
    rules: {
      required: {
        value: true,
        message: 'City is required!'
      }
    }
  },
  state: {
    id: 'state',
    name: 'state',
    label: 'State',
    rules: {
      required: {
        value: true,
        message: 'State is required!'
      }
    }
  },
  zipCode: {
    input: {
      id: 'zipCode',
      label: 'Zip Code',
      type: 'number',
    },
    rules: {
      required: {
        value: true,
        message: 'Zip Code is required!'
      }
    }
  },
  department: {
    id: 'department',
    name: 'department',
    label: 'Department',
    rules: {
      required: {
        value: true,
        message: 'Department is required!'
      }
    }
  },
};